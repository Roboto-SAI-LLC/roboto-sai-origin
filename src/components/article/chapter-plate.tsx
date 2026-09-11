import { Link } from "@tanstack/react-router";
import type { Chapter } from "@/lib/chapters";
import { useLang } from "@/lib/i18n";

export function ChapterPlate({ chapter }: { chapter: Chapter }) {
  const { lang } = useLang();

  return (
    <header
      id={chapter.id}
      className="chapter-plate relative isolate min-h-[70svh] overflow-hidden bg-obsidian text-primary-fg sm:min-h-[78svh]"
    >
      <img
        src={chapter.still}
        alt={chapter.stillAlt}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/55 to-obsidian/20" />
      <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-3xl flex-col justify-end px-4 py-12 sm:min-h-[78svh] sm:px-6 sm:py-16">
        <p className="font-display text-kicker font-medium tracking-kicker text-gold uppercase">
          {lang === "es" ? "Acto" : "Act"} {chapter.numeral}
        </p>
        <h2 className="mt-3 font-display text-4xl font-medium tracking-display text-primary-fg sm:text-5xl">
          {chapter.title[lang]}
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-snug text-primary-fg/85 sm:text-xl">
          {chapter.dek[lang]}
        </p>
        {chapter.instrument ? (
          <Link
            to={chapter.instrument.to}
            className="mt-6 inline-flex min-h-11 w-fit items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-fg"
          >
            {chapter.instrument[lang]}
          </Link>
        ) : null}
      </div>
    </header>
  );
}
