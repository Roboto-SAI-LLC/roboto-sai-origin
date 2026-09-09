import { useState } from "react";
import { CHARTER_CLAUSES, WITNESSES } from "@/lib/dossier";
import { cn } from "@/lib/utils";

export function CharterReader() {
  const [activeId, setActiveId] = useState(CHARTER_CLAUSES[2]?.id ?? CHARTER_CLAUSES[0].id);
  const active = CHARTER_CLAUSES.find((clause) => clause.id === activeId) ?? CHARTER_CLAUSES[0];

  return (
    <div>
      <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
        Close reading of the 20 February 1274 carta pobla. Latin from the royal register. Each clause is asked
        the same two questions: who does it name, and who does it not.
      </p>

      <div className="mt-6 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
        {CHARTER_CLAUSES.map((clause, index) => {
          const selected = clause.id === active.id;
          return (
            <button
              key={clause.id}
              type="button"
              onClick={() => setActiveId(clause.id)}
              className={cn(
                "min-h-11 shrink-0 rounded-md px-3.5 text-sm font-medium transition-colors duration-150",
                selected ? "bg-primary text-primary-fg" : "bg-surface text-fg shadow-paper hover:bg-wash",
              )}
            >
              {index + 1}. {clause.kicker}
            </button>
          );
        })}
      </div>

      <article className="mt-4 rounded-xl bg-surface px-4 py-5 shadow-paper sm:px-6">
        <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">
          {active.kicker}
        </p>
        <h2 className="mt-2 font-display text-2xl font-medium tracking-tight text-fg">{active.title}</h2>
        <blockquote className="mt-5 border-l-2 border-primary pl-4">
          <p className="font-display text-base leading-relaxed text-ink-soft italic sm:text-lg">{active.latin}</p>
        </blockquote>
        <p className="mt-4 text-sm leading-relaxed text-fg sm:text-base">{active.english}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <section className="rounded-lg bg-bg px-4 py-4">
            <h3 className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">Names</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg">{active.names}</p>
          </section>
          <section className="rounded-lg bg-bg px-4 py-4">
            <h3 className="font-display text-kicker font-medium tracking-kicker text-muted uppercase">
              Does not name
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-fg">{active.doesNotName}</p>
          </section>
        </div>
      </article>

      <section className="mt-8">
        <h2 className="font-display text-xl font-medium text-fg">Witness bench</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          The men who stand in the room at Valencia. Sancho Martínez de Oblites is a control: a Martínez is
          already here in 1274, as a patronymic, not as a Villarreal.
        </p>
        <ol className="mt-4 grid gap-3 sm:grid-cols-2">
          {WITNESSES.map((witness) => (
            <li key={witness.latin} className="rounded-xl bg-surface px-4 py-4 shadow-paper">
              <p className="font-display text-lg font-medium text-fg">{witness.name}</p>
              <p className="mt-1 font-display text-xs text-subtle italic">{witness.latin}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{witness.role}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
