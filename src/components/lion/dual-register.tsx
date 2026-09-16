import { useState } from "react";
import { LION_META, REGISTERS } from "@/lib/lion";
import { pick, useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type RegisterId = keyof typeof REGISTERS;

export function DualRegister() {
  const [open, setOpen] = useState<RegisterId>("crown");
  const { lang } = useLang();
  const meta = pick(lang, LION_META);
  const active = REGISTERS[open];

  return (
    <figure className="my-10">
      <div className="rounded-xl bg-surface p-2 shadow-paper">
        <div className="grid grid-cols-2 gap-1" role="tablist" aria-label={meta.registersAria}>
          {(Object.keys(REGISTERS) as RegisterId[]).map((id) => {
            const selected = id === open;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setOpen(id)}
                className={cn(
                  "min-h-11 rounded-lg px-3 text-sm font-medium transition-[color,background-color,transform] duration-150 ease-out active:scale-[0.96]",
                  selected ? "bg-primary text-primary-fg" : "text-muted hover:bg-wash hover:text-fg",
                )}
              >
                {REGISTERS[id].label[lang]}
              </button>
            );
          })}
        </div>
        <div role="tabpanel" className="mt-1 rounded-lg bg-wash px-4 py-5 sm:px-5">
          <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">
            {active.kicker[lang]}
          </p>
          <ol className="mt-4 space-y-4">
            {active.items.map((item) => (
              <li key={item.cite.en} className="border-t border-border pt-4 first:border-t-0 first:pt-0">
                <p className="font-display text-sm font-medium text-fg">{item.cite[lang]}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted sm:text-base">{item.text[lang]}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-muted">{meta.figureRegisters}</figcaption>
    </figure>
  );
}
