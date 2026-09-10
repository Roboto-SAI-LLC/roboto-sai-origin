import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { CHROME, useLang } from "@/lib/i18n";

const SRC = {
  en: "/speech/brief-en.mp3",
  es: "/speech/brief-es.mp3",
} as const;

export function BriefListen() {
  const { lang } = useLang();
  const chrome = CHROME[lang];
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setPlaying(false);
  }, [lang]);

  async function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }

  return (
    <div className="stagger-in mt-6">
      <audio
        ref={audioRef}
        src={SRC[lang]}
        preload="none"
        onEnded={() => setPlaying(false)}
      />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={chrome.ui.listenAria}
        className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-fg"
      >
        {playing ? <Pause className="size-4" strokeWidth={1.75} /> : <Play className="size-4" strokeWidth={1.75} />}
        {playing ? chrome.ui.pause : chrome.ui.listen}
      </button>
    </div>
  );
}
