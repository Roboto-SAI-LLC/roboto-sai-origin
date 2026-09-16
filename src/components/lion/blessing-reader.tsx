import { useState } from "react";
import { BLESSING, COMMENTARIES, LION_META } from "@/lib/lion";
import { Hebrew } from "@/components/lion/hebrew";
import { pick, useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type CommentaryId = (typeof COMMENTARIES)[number]["id"];

export function BlessingReader() {
  const [open, setOpen] = useState<CommentaryId>("pshat");
  const { lang } = useLang();
  const meta = pick(lang, LION_META);
  const active = COMMENTARIES.find((item) => item.id === open) ?? COMMENTARIES[0];

  return (
    <figure className="my-10">
      <div className="rounded-xl bg-surface px-5 py-6 shadow-paper sm:px-8 sm:py-8">
        <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">
          {BLESSING.cite[lang]}
        </p>
        <div className="mt-5 border-t border-border pt-5">
          <Hebrew size="hero">{BLESSING.hebrew}</Hebrew>
        </div>
        <p className="mt-5 font-display text-lg leading-snug text-ink-soft italic sm:text-xl">
          {BLESSING.translation[lang]}
        </p>
        <p className="mt-3 text-sm text-muted">{BLESSING.transliteration}</p>
        <div className="mt-6 border-t border-border pt-5">
          <Hebrew size="display">{BLESSING.scepterHebrew}</Hebrew>
          <p className="mt-2 text-sm text-muted">
            {BLESSING.scepter[lang]}{" "}
            <span className="text-subtle">({BLESSING.scepterCite[lang]})</span>
          </p>
        </div>
      </div>

      <div className="mt-3 rounded-xl bg-surface p-2 shadow-paper">
        <div className="flex flex-wrap gap-1" role="tablist" aria-label={meta.commentariesAria}>
          {COMMENTARIES.map((item) => {
            const selected = item.id === open;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setOpen(item.id)}
                className={cn(
                  "min-h-11 rounded-lg px-3.5 text-sm font-medium transition-[color,background-color,transform] duration-150 ease-out active:scale-[0.96]",
                  selected ? "bg-primary text-primary-fg" : "text-muted hover:bg-wash hover:text-fg",
                )}
              >
                {item.label[lang]}
              </button>
            );
          })}
        </div>
        <div
          role="tabpanel"
          className="mt-1 rounded-lg bg-wash px-4 py-4 text-sm leading-relaxed text-fg sm:px-5 sm:text-base"
        >
          {active.body[lang]}
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-muted">{meta.figureBlessing}</figcaption>
    </figure>
  );
}
