import { useState } from "react";
import { CHROME, useLang } from "@/lib/i18n";
import { CLAIMS, type Claim, type ClaimVerdict } from "@/lib/dossier";
import { cn } from "@/lib/utils";

const VERDICT_CLASS: Record<ClaimVerdict, string> = {
  "in-record": "bg-primary text-primary-fg",
  adjacent: "bg-wash text-fg",
  "not-in-record": "border border-border text-muted",
  split: "bg-ink-soft text-primary-fg",
};

function Column({
  title,
  points,
  tone,
  empty,
}: {
  title: string;
  points: Claim["inRecord"];
  tone: "in" | "near" | "out";
  empty: string;
}) {
  return (
    <section className="rounded-lg bg-bg px-4 py-4">
      <h3
        className={cn(
          "font-display text-kicker font-medium tracking-kicker uppercase",
          tone === "in" && "text-primary",
          tone === "near" && "text-fg",
          tone === "out" && "text-muted",
        )}
      >
        {title}
      </h3>
      {points.length === 0 ? (
        <p className="mt-2 text-sm text-subtle">{empty}</p>
      ) : (
        <ul className="mt-3 space-y-3">
          {points.map((point) => (
            <li key={point.text}>
              <p className="text-sm leading-relaxed text-fg">{point.text}</p>
              <p className="mt-1 text-xs text-muted">{point.source}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export function ClaimInspector() {
  const [activeId, setActiveId] = useState(CLAIMS[2]?.id ?? CLAIMS[0].id);
  const active = CLAIMS.find((claim) => claim.id === activeId) ?? CLAIMS[0];
  const { lang } = useLang();
  const ui = CHROME[lang].ui;
  const verdictLabel = {
    "in-record": ui.inRecord,
    adjacent: ui.adjacent,
    "not-in-record": ui.notInRecord,
    split: ui.split,
  }[active.verdict];

  return (
    <div className="grid gap-4 lg:grid-cols-[16rem_1fr]">
      <div className="flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-2 lg:overflow-visible lg:pb-0">
        {CLAIMS.map((claim) => {
          const selected = claim.id === active.id;
          return (
            <button
              key={claim.id}
              type="button"
              onClick={() => setActiveId(claim.id)}
              className={cn(
                "min-h-11 shrink-0 rounded-md px-3.5 text-left text-sm font-medium transition-colors duration-150",
                selected ? "bg-primary text-primary-fg" : "bg-surface text-fg shadow-paper hover:bg-wash",
              )}
            >
              {claim.title}
            </button>
          );
        })}
      </div>

      <article className="rounded-xl bg-surface px-4 py-5 shadow-paper sm:px-6">
        <p className="flex flex-wrap items-center gap-2">
          <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium", VERDICT_CLASS[active.verdict])}>
            {verdictLabel}
          </span>
        </p>
        <h2 className="mt-3 font-display text-2xl font-medium tracking-tight text-fg">{active.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          <span className="font-medium text-fg">{ui.stated} </span>
          {active.stated}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-fg sm:text-base">
          <span className="font-medium">{ui.steelman} </span>
          {active.steelman}
        </p>

        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          <Column title={ui.inRecord} points={active.inRecord} tone="in" empty={ui.none} />
          <Column title={ui.adjacent} points={active.adjacent} tone="near" empty={ui.none} />
          <Column title={ui.notInRecord} points={active.notInRecord} tone="out" empty={ui.none} />
        </div>

        <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-muted">
          <span className="font-medium text-fg">{ui.confirm} </span>
          {active.whatWouldConfirm}
        </p>
      </article>
    </div>
  );
}
