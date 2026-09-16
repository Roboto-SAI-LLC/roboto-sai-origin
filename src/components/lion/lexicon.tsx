import { useState } from "react";
import { LEXICON, LION_META } from "@/lib/lion";
import { Hebrew } from "@/components/lion/hebrew";
import { pick, useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LionLexicon() {
  const [open, setOpen] = useState(LEXICON[0].id);
  const { lang } = useLang();
  const meta = pick(lang, LION_META);
  const active = LEXICON.find((item) => item.id === open) ?? LEXICON[0];

  return (
    <figure className="my-10">
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {LEXICON.map((item) => {
          const selected = item.id === open;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpen(item.id)}
              className={cn(
                "rounded-xl px-4 py-4 text-left shadow-paper transition-[background-color,transform] duration-150 ease-out active:scale-[0.96]",
                selected ? "bg-primary text-primary-fg" : "bg-surface text-fg hover:bg-wash",
              )}
            >
              <p
                lang="he"
                dir="rtl"
                className={cn(
                  "hebrew text-xl leading-snug",
                  selected ? "text-primary-fg" : "text-fg",
                )}
              >
                {item.hebrew}
              </p>
              <p
                className={cn(
                  "mt-2 font-display text-kicker font-medium tracking-kicker uppercase",
                  selected ? "text-primary-fg/80" : "text-primary",
                )}
              >
                {item.latin}
              </p>
              <p className={cn("mt-2 text-sm leading-snug", selected ? "text-primary-fg/90" : "text-muted")}>
                {item.gloss[lang]}
              </p>
            </button>
          );
        })}
      </div>
      <div className="mt-3 rounded-xl bg-surface px-5 py-5 shadow-paper">
        <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">
          {active.count[lang]}
        </p>
        <Hebrew size="display" className="mt-2">
          {active.hebrew}
        </Hebrew>
        <p className="mt-3 text-sm leading-relaxed text-fg sm:text-base">{active.body[lang]}</p>
      </div>
      <figcaption className="mt-3 text-sm text-muted">{meta.figureLexicon}</figcaption>
    </figure>
  );
}
