import { Link } from "@tanstack/react-router";
import type { Chapter } from "@/lib/chapters";
import { useLang } from "@/lib/i18n";

export function ChapterPlate({ chapter }: { chapter: Chapter }) {
  const { lang } = useLang();

  return (
    <header className="border-b border-border bg-bg">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">
          {lang === "es" ? "Acto" : "Act"} {chapter.numeral}
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-display text-fg sm:text-5xl">
          {chapter.title[lang]}
        </h1>
        <p className="mt-4 max-w-prose text-lg leading-snug text-muted">{chapter.dek[lang]}</p>
        {chapter.instrument ? (
          <Link
            to={chapter.instrument.to}
            className="mt-6 inline-flex min-h-11 w-fit items-center text-sm font-medium text-primary underline underline-offset-4"
          >
            {chapter.instrument[lang]}
          </Link>
        ) : null}
      </div>
    </header>
  );
}
