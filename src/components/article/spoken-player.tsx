import { useEffect, useRef, useState } from "react";
import { Pause, Volume2 } from "lucide-react";
import { BRIEF_META, briefNarration, tagNarration, type BriefTag } from "@/lib/brief";
import { useLang, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const SPEAK_EVENT = "rs-speak";

function pickVoice(lang: Lang): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();
  const prefix = lang === "es" ? "es" : "en";
  return (
    voices.find((voice) => voice.lang.toLowerCase().startsWith(prefix) && /male|leo|google/i.test(voice.name)) ??
    voices.find((voice) => voice.lang.toLowerCase().startsWith(prefix)) ??
    null
  );
}

function speak(text: string, lang: Lang, onEnd: () => void) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang === "es" ? "es-ES" : "en-US";
  utterance.rate = 0.96;
  const voice = pickVoice(lang);
  if (voice) utterance.voice = voice;
  utterance.onend = onEnd;
  utterance.onerror = onEnd;
  window.speechSynthesis.speak(utterance);
}

function announce(id: string) {
  window.dispatchEvent(new CustomEvent(SPEAK_EVENT, { detail: id }));
}

function pauseAllAudio(except?: HTMLAudioElement | null) {
  document.querySelectorAll("audio").forEach((node) => {
    if (node !== except && !node.paused) node.pause();
  });
}

export function FullBriefPlayer() {
  const { lang } = useLang();
  const meta = BRIEF_META[lang];
  const audioRef = useRef<HTMLAudioElement>(null);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    setSpeaking(false);
    window.speechSynthesis?.cancel();
    const node = audioRef.current;
    if (node) {
      node.pause();
      node.load();
    }
  }, [lang]);

  useEffect(() => {
    const onSpeak = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      if (id !== "full") setSpeaking(false);
    };
    window.addEventListener(SPEAK_EVENT, onSpeak);
    return () => {
      window.removeEventListener(SPEAK_EVENT, onSpeak);
      window.speechSynthesis?.cancel();
    };
  }, []);

  function toggleLive() {
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    pauseAllAudio();
    announce("full");
    speak(briefNarration(lang), lang, () => setSpeaking(false));
    setSpeaking(true);
  }

  return (
    <div className="no-print rounded-xl bg-surface px-5 py-5 shadow-paper sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">{meta.listen}</p>
          <p className="mt-1 text-sm text-muted">{meta.voice}</p>
        </div>
        <button
          type="button"
          onClick={toggleLive}
          className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-fg"
        >
          {speaking ? <Pause className="size-4" strokeWidth={1.75} /> : <Volume2 className="size-4" strokeWidth={1.75} />}
          {speaking ? meta.tagStop : meta.live}
        </button>
      </div>
      <audio
        ref={audioRef}
        className="mt-4 w-full"
        controls
        preload="metadata"
        src={`/speech/brief-${lang}.mp3`}
        onPlay={() => {
          window.speechSynthesis?.cancel();
          setSpeaking(false);
          announce("audio");
          pauseAllAudio(audioRef.current);
        }}
      />
      <p className="mt-3 text-sm leading-relaxed text-muted">{meta.note}</p>
    </div>
  );
}

export function TagListenButton({ tag }: { tag: BriefTag }) {
  const { lang } = useLang();
  const meta = BRIEF_META[lang];
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setPlaying(false);
    window.speechSynthesis?.cancel();
  }, [lang, tag.id]);

  useEffect(() => {
    const onSpeak = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      if (id !== tag.id) setPlaying(false);
    };
    window.addEventListener(SPEAK_EVENT, onSpeak);
    return () => {
      window.removeEventListener(SPEAK_EVENT, onSpeak);
      window.speechSynthesis?.cancel();
    };
  }, [tag.id]);

  function toggle() {
    if (playing) {
      window.speechSynthesis.cancel();
      setPlaying(false);
      return;
    }
    pauseAllAudio();
    announce(tag.id);
    speak(tagNarration(lang, tag), lang, () => setPlaying(false));
    setPlaying(true);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "inline-flex min-h-11 items-center gap-2 rounded-md px-3.5 text-sm font-medium transition-colors duration-150",
        playing ? "bg-primary text-primary-fg" : "bg-surface text-fg shadow-paper hover:bg-wash",
      )}
    >
      {playing ? <Pause className="size-4" strokeWidth={1.75} /> : <Volume2 className="size-4" strokeWidth={1.75} />}
      {playing ? meta.playing : meta.tagListen}
    </button>
  );
}
