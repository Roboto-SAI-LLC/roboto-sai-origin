import { useMemo, useState } from "react";
import { CHROME, useLang } from "@/lib/i18n";
import { EDGES, EDGE_COLORS, PEOPLE, type Person } from "@/lib/network";
import { cn } from "@/lib/utils";

export function NetworkAtlas() {
  const [activeId, setActiveId] = useState("peyronet");
  const active = PEOPLE.find((person) => person.id === activeId) ?? PEOPLE[0];
  const { lang } = useLang();
  const ui = CHROME[lang].ui;
  const kindLabel: Record<Person["kind"], string> = {
    crown: ui.crown,
    named: ui.named,
    office: ui.office,
    group: ui.group,
    community: ui.community,
  };

  const linked = useMemo(() => {
    const ids = new Set<string>();
    for (const edge of EDGES) {
      if (edge.from === active.id) ids.add(edge.to);
      if (edge.to === active.id) ids.add(edge.from);
    }
    return ids;
  }, [active.id]);

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_18rem]">
      <figure className="overflow-hidden rounded-xl bg-surface shadow-paper">
        <svg
          viewBox="0 0 900 490"
          role="img"
          aria-label={ui.networkAria}
          className="h-auto w-full"
        >
          <rect width="900" height="490" fill="#faf6ee" />
          {EDGES.map((edge) => {
            const from = PEOPLE.find((p) => p.id === edge.from);
            const to = PEOPLE.find((p) => p.id === edge.to);
            if (!from || !to) return null;
            const hot = edge.from === active.id || edge.to === active.id;
            return (
              <line
                key={`${edge.from}-${edge.to}-${edge.kind}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={EDGE_COLORS[edge.kind]}
                strokeWidth={hot ? 2.2 : 1}
                strokeOpacity={hot ? 0.9 : 0.35}
              />
            );
          })}
          {PEOPLE.map((person) => {
            const selected = person.id === active.id;
            const neighbor = linked.has(person.id);
            return (
              <g key={person.id}>
                <title>{`${person.name}: ${person.role}`}</title>
                <circle
                  cx={person.x}
                  cy={person.y}
                  r={selected ? 11 : 8}
                  fill={selected ? "#3e534c" : neighbor ? "#ebe4d6" : "#faf6ee"}
                  stroke="#3e534c"
                  strokeWidth={selected ? 2 : 1.25}
                  className="cursor-pointer"
                  onClick={() => setActiveId(person.id)}
                />
                <text
                  x={person.x}
                  y={person.y + 22}
                  textAnchor="middle"
                  fill="#1c1915"
                  fontSize="12"
                  fontFamily="Fraunces, Palatino, serif"
                  className="cursor-pointer"
                  onClick={() => setActiveId(person.id)}
                >
                  {person.short}
                </text>
              </g>
            );
          })}
        </svg>
        <figcaption className="border-t border-border px-4 py-3 text-sm text-muted">
          {ui.networkCaption}
        </figcaption>
      </figure>

      <aside className="rounded-xl bg-surface px-4 py-4 shadow-paper sm:px-5">
        <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">
          {kindLabel[active.kind]} · {active.year}
        </p>
        <h3 className="mt-2 font-display text-xl font-medium text-fg">{active.name}</h3>
        <p className="mt-1 text-sm text-muted">{active.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-fg">{active.dossier}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {PEOPLE.map((person) => (
            <li key={person.id}>
              <button
                type="button"
                onClick={() => setActiveId(person.id)}
                className={cn(
                  "min-h-11 rounded-md px-2.5 text-xs font-medium",
                  person.id === active.id ? "bg-primary text-primary-fg" : "bg-wash text-fg hover:bg-border",
                )}
              >
                {person.name.split(",")[0]}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
