import { useEffect, useRef, useState } from "react";
import { Pause, Play, Send, Square, Upload } from "lucide-react";
import { askRoVox } from "@/lib/rovox-ask";
import { CHROME, useLang } from "@/lib/i18n";
import {
  DEFAULT_CARD,
  DEFAULT_DOCS,
  FALLBACK_INTRO,
  ROVOX_STORAGE,
  type RoVoxCard,
} from "@/lib/rovox";
import { cn } from "@/lib/utils";

type Phase = "idle" | "intro" | "paused" | "ready";
type ChatMsg = { role: "user" | "assistant"; content: string };

function loadCard(lang: "en" | "es"): RoVoxCard {
  try {
    const raw = window.localStorage.getItem(`${ROVOX_STORAGE.card}-${lang}`);
    if (raw) return { ...DEFAULT_CARD[lang], ...JSON.parse(raw) };
  } catch {
    /* keep default */
  }
  return DEFAULT_CARD[lang];
}

function loadDocs(lang: "en" | "es"): string {
  try {
    return window.localStorage.getItem(`${ROVOX_STORAGE.docs}-${lang}`) ?? DEFAULT_DOCS[lang];
  } catch {
    return DEFAULT_DOCS[lang];
  }
}

function clock(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function RoVoxAgent() {
  const { lang } = useLang();
  const copy = CHROME[lang].rovox;
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const objectUrl = useRef<string | null>(null);
  const lastTime = useRef(0);
  const phaseRef = useRef<Phase>("idle");
  const [phase, setPhase] = useState<Phase>("idle");
  const [card, setCard] = useState<RoVoxCard>(DEFAULT_CARD[lang]);
  const [docs, setDocs] = useState(DEFAULT_DOCS[lang]);
  const [src, setSrc] = useState<string>(FALLBACK_INTRO[lang]);
  const [fileName, setFileName] = useState("");
  const [draft, setDraft] = useState("");
  const [chat, setChat] = useState<ChatMsg[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [dragOver, setDragOver] = useState(false);
  const locked = phase !== "ready";
  phaseRef.current = phase;

  useEffect(() => {
    setCard(loadCard(lang));
    setDocs(loadDocs(lang));
    if (!objectUrl.current) setSrc(FALLBACK_INTRO[lang]);
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    lastTime.current = 0;
    setElapsed(0);
    setPhase("idle");
    setChat([]);
    setError("");
  }, [lang]);

  function writeCard(next: RoVoxCard) {
    setCard(next);
    try {
      window.localStorage.setItem(`${ROVOX_STORAGE.card}-${lang}`, JSON.stringify(next));
    } catch {
      /* private mode */
    }
  }

  function writeDocs(next: string) {
    setDocs(next);
    try {
      window.localStorage.setItem(`${ROVOX_STORAGE.docs}-${lang}`, next);
    } catch {
      /* private mode */
    }
  }

  useEffect(() => {
    return () => {
      if (objectUrl.current) URL.revokeObjectURL(objectUrl.current);
    };
  }, []);

  useEffect(() => {
    const session = navigator.mediaSession;
    if (!session) return;
    const noop = () => {
      const audio = audioRef.current;
      if (audio) audio.currentTime = lastTime.current;
    };
    try {
      session.setActionHandler("seekforward", noop);
      session.setActionHandler("seekbackward", noop);
      session.setActionHandler("seekto", noop);
      session.setActionHandler("nexttrack", null);
      session.setActionHandler("previoustrack", null);
      session.setActionHandler("pause", () => {
        audioRef.current?.pause();
        setPhase("paused");
      });
      session.setActionHandler("stop", () => {
        stopIntro();
      });
    } catch {
      /* some engines reject handlers */
    }
    return () => {
      try {
        session.setActionHandler("seekforward", null);
        session.setActionHandler("seekbackward", null);
        session.setActionHandler("seekto", null);
        session.setActionHandler("pause", null);
        session.setActionHandler("stop", null);
      } catch {
        /* ignore */
      }
    };
  }, []);

  async function playIntro() {
    const audio = audioRef.current;
    if (!audio) return;
    if (phase === "idle" || phase === "ready") {
      audio.currentTime = 0;
      lastTime.current = 0;
      setElapsed(0);
    }
    try {
      await audio.play();
      setPhase("intro");
      setError("");
    } catch {
      setError(copy.needGesture);
    }
  }

  function pauseIntro() {
    audioRef.current?.pause();
    setPhase("paused");
  }

  function stopIntro() {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    lastTime.current = 0;
    setElapsed(0);
    setPhase("idle");
  }

  function holdPosition() {
    const audio = audioRef.current;
    if (!audio) return;
    if (phaseRef.current !== "intro" && phaseRef.current !== "paused") return;
    if (audio.currentTime > lastTime.current + 0.3) {
      audio.currentTime = lastTime.current;
    }
  }

  function onTimeUpdate() {
    const audio = audioRef.current;
    if (!audio) return;
    if (phaseRef.current === "intro") {
      if (audio.currentTime > lastTime.current + 0.35) {
        audio.currentTime = lastTime.current;
        return;
      }
      lastTime.current = audio.currentTime;
    }
    setElapsed(audio.currentTime);
    if (Number.isFinite(audio.duration)) setDuration(audio.duration);
  }

  function onEnded() {
    if (phaseRef.current !== "intro") return;
    lastTime.current = duration || lastTime.current;
    setPhase("ready");
  }

  function onDropFile(file: File | undefined) {
    if (!file) return;
    const named = /\.(mp3|wav|m4a|ogg|aac|mpeg)$/i.test(file.name);
    if (!file.type.startsWith("audio/") && !named) return;
    if (objectUrl.current) URL.revokeObjectURL(objectUrl.current);
    const url = URL.createObjectURL(file);
    objectUrl.current = url;
    setSrc(url);
    setFileName(file.name);
    setDuration(0);
    stopIntro();
  }

  async function send() {
    const text = draft.trim();
    if (!text || locked || busy) return;
    if (chat.filter((m) => m.role === "user").length >= 8) {
      setError(copy.cap);
      return;
    }
    const next: ChatMsg[] = [...chat, { role: "user", content: text.slice(0, 2000) }];
    setChat(next);
    setDraft("");
    setBusy(true);
    setError("");
    try {
      const result = await askRoVox({ data: { messages: next, docs, card, lang } });
      if (!result.ok) {
        setError(result.error);
        setChat([...next, { role: "assistant", content: copy.unavailable }]);
      } else {
        if (result.patch?.docs) writeDocs(result.patch.docs);
        if (result.patch?.card) writeCard({ ...card, ...result.patch.card });
        setChat([...next, { role: "assistant", content: result.text }]);
      }
    } catch {
      setError(copy.unavailable);
    } finally {
      setBusy(false);
    }
  }

  const pct = duration > 0 ? Math.min(100, (elapsed / duration) * 100) : 0;

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]">
      <aside className="space-y-4">
        <article className="rounded-xl bg-surface px-4 py-5 shadow-paper sm:px-5">
          <div className="flex items-center justify-between gap-3">
            <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">{copy.card}</p>
            <button
              type="button"
              onClick={() => writeCard(DEFAULT_CARD[lang])}
              className="text-xs font-medium text-muted underline-offset-4 hover:text-fg hover:underline"
            >
              {copy.resetCard}
            </button>
          </div>
          <label className="mt-4 block text-xs font-medium tracking-wide text-muted uppercase">
            {copy.name}
            <input
              value={card.name}
              onChange={(e) => writeCard({ ...card, name: e.target.value })}
              className="mt-1 h-11 w-full rounded-md border border-border bg-bg px-3 text-sm font-medium text-fg outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
          </label>
          <label className="mt-3 block text-xs font-medium tracking-wide text-muted uppercase">
            {copy.role}
            <input
              value={card.role}
              onChange={(e) => writeCard({ ...card, role: e.target.value })}
              className="mt-1 h-11 w-full rounded-md border border-border bg-bg px-3 text-sm text-fg outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
          </label>
          <label className="mt-3 block text-xs font-medium tracking-wide text-muted uppercase">
            {copy.note}
            <textarea
              value={card.note}
              onChange={(e) => writeCard({ ...card, note: e.target.value })}
              rows={4}
              className="mt-1 w-full rounded-md border border-border bg-bg px-3 py-2 text-sm leading-relaxed text-fg outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
          </label>
          <p className="mt-3 text-xs leading-relaxed text-muted">{copy.noStock}</p>
        </article>
      </aside>

      <div className="min-w-0 space-y-4">
        <section
          className={cn(
            "rounded-xl bg-surface px-4 py-5 shadow-paper sm:px-5",
            dragOver && "ring-2 ring-primary",
          )}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            onDropFile(e.dataTransfer.files?.[0]);
          }}
        >
          <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">{copy.player}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{copy.rule}</p>
          <audio
            ref={audioRef}
            src={src}
            preload="metadata"
            className="hidden"
            controls={false}
            onEnded={onEnded}
            onTimeUpdate={onTimeUpdate}
            onSeeking={holdPosition}
            onLoadedMetadata={onTimeUpdate}
          />
          <div className="mt-4 flex flex-wrap gap-2">
            {phase === "idle" || phase === "ready" ? (
              <button
                type="button"
                onClick={playIntro}
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-fg"
              >
                <Play className="size-4" strokeWidth={1.75} />
                {copy.listen}
              </button>
            ) : null}
            {phase === "intro" ? (
              <button
                type="button"
                onClick={pauseIntro}
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-fg"
              >
                <Pause className="size-4" strokeWidth={1.75} />
                {copy.pause}
              </button>
            ) : null}
            {phase === "paused" ? (
              <button
                type="button"
                onClick={playIntro}
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-fg"
              >
                <Play className="size-4" strokeWidth={1.75} />
                {copy.resume}
              </button>
            ) : null}
            {phase === "intro" || phase === "paused" ? (
              <button
                type="button"
                onClick={stopIntro}
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-bg px-4 text-sm font-medium text-fg shadow-paper"
              >
                <Square className="size-4" strokeWidth={1.75} />
                {copy.stop}
              </button>
            ) : null}
          </div>
          <div className="mt-4" aria-hidden={duration <= 0}>
            <div
              className="h-1 overflow-hidden rounded-full bg-wash"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={Math.round(duration || 0)}
              aria-valuenow={Math.round(elapsed)}
            >
              <div
                className="h-full origin-left bg-primary transition-[width] duration-150"
                style={{ width: `${pct}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-muted">
              {clock(elapsed)} / {clock(duration)}
            </p>
          </div>
          <p className="mt-3 text-xs text-muted">
            {phase === "ready" ? copy.unlocked : locked ? copy.locked : copy.idleHint}
          </p>
          <label className="mt-4 flex min-h-11 cursor-pointer items-center gap-2 rounded-md border border-dashed border-border px-3 text-sm text-muted hover:bg-wash">
            <Upload className="size-4" strokeWidth={1.75} />
            {fileName || copy.drop}
            <input
              type="file"
              accept="audio/*"
              className="sr-only"
              onChange={(e) => onDropFile(e.target.files?.[0])}
            />
          </label>
          <p className="mt-2 text-xs text-subtle">{fileName ? copy.usingFile : copy.usingFallback}</p>
        </section>

        <section className="rounded-xl bg-surface px-4 py-5 shadow-paper sm:px-5">
          <div className="flex items-center justify-between gap-3">
            <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">{copy.docs}</p>
            <button
              type="button"
              onClick={() => writeDocs(DEFAULT_DOCS[lang])}
              className="text-xs font-medium text-muted underline-offset-4 hover:text-fg hover:underline"
            >
              {copy.reset}
            </button>
          </div>
          <textarea
            value={docs}
            onChange={(e) => writeDocs(e.target.value)}
            rows={10}
            className="mt-3 w-full rounded-md border border-border bg-bg px-3 py-2 text-sm leading-relaxed text-fg outline-none focus-visible:ring-2 focus-visible:ring-primary"
          />
        </section>

        <section
          className={cn(
            "rounded-xl bg-surface px-4 py-5 shadow-paper sm:px-5",
            locked && "opacity-70",
          )}
        >
          <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">{copy.desk}</p>
          <div className="mt-3 space-y-3" aria-live="polite">
            {chat.length === 0 ? <p className="text-sm text-muted">{copy.empty}</p> : null}
            {chat.map((msg, i) => (
              <p
                key={`${msg.role}-${i}`}
                className={cn("text-sm leading-relaxed", msg.role === "user" ? "text-muted" : "text-fg")}
              >
                <span className="font-display text-kicker tracking-kicker text-primary uppercase">
                  {msg.role === "user" ? copy.you : card.name}
                </span>
                <span className="mt-1 block">{msg.content}</span>
              </p>
            ))}
            {busy ? <p className="text-sm text-muted">{copy.writing}</p> : null}
          </div>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              void send();
            }}
          >
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              disabled={locked || busy}
              placeholder={locked ? copy.locked : copy.ask}
              className="h-11 min-w-0 flex-1 rounded-md border border-border bg-bg px-3 text-sm text-fg outline-none disabled:text-subtle focus-visible:ring-2 focus-visible:ring-primary"
            />
            <button
              type="submit"
              disabled={locked || busy || !draft.trim()}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md bg-primary px-3 text-primary-fg disabled:opacity-40"
              aria-label={copy.send}
            >
              <Send className="size-4" strokeWidth={1.75} />
            </button>
          </form>
          {error ? <p className="mt-3 text-sm text-muted">{error}</p> : null}
        </section>
      </div>
    </div>
  );
}
