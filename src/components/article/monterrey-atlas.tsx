import { useMemo, useState } from "react";
import { CHROME, useLang } from "@/lib/i18n";
import {
  MODERN_EDGES,
  MODERN_EDGE_COLORS,
  MODERN_NODES,
  MONTERREY_LEDGER,
  type ModernKind,
} from "@/lib/monterrey";
import { cn } from "@/lib/utils";

export function MonterreyAtlas() {
  const [activeId, setActiveId] = useState("mansion");
  const active = MODERN_NODES.find((node) => node.id === activeId) ?? MODERN_NODES[0];
  const { lang } = useLang();
  const ui = CHROME[lang].ui;
  const kindLabel: Record<ModernKind, string> = {
    region: ui.state,
    city: ui.city,
    municipality: ui.municipality,
    locality: ui.locality,
    building: ui.building,
  };

  const linked = useMemo(() => {
    const ids = new Set<string>();
    for (const edge of MODERN_EDGES) {
      if (edge.from === active.id) ids.add(edge.to);
      if (edge.to === active.id) ids.add(edge.from);
    }
    return ids;
  }, [active.id]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 lg:grid-cols-[1fr_18rem]">
        <figure className="overflow-hidden rounded-xl bg-surface shadow-paper">
          <svg
            viewBox="0 0 900 490"
            role="img"
            aria-label={ui.monterreyAria}
            className="h-auto w-full"
          >
            <rect width="900" height="490" fill="#faf6ee" />
            <path d="M0 0 L160 0 L90 490 L0 490 Z" fill="#ebe4d6" />
            <text
              x="36"
              y="250"
              fill="#8a8173"
              fontSize="11"
              fontFamily="Fraunces, Palatino, serif"
              transform="rotate(-90 36 250)"
            >
              Sierra Madre
            </text>
            <line x1="450" y1="88" x2="450" y2="286" stroke="#3e534c" strokeWidth="1.5" strokeDasharray="5 6" />
            <text x="464" y="190" fill="#3e534c" fontSize="10" fontFamily="Fraunces, Palatino, serif">
              ≈ 40 km north
            </text>
            <text x="820" y="36" textAnchor="middle" fill="#8a8173" fontSize="11" fontFamily="Fraunces, Palatino, serif">
              N
            </text>
            <polygon points="820,16 814,28 826,28" fill="#8a8173" />
            {MODERN_EDGES.map((edge) => {
              const from = MODERN_NODES.find((p) => p.id === edge.from);
              const to = MODERN_NODES.find((p) => p.id === edge.to);
              if (!from || !to) return null;
              const hot = edge.from === active.id || edge.to === active.id;
              return (
                <line
                  key={`${edge.from}-${edge.to}-${edge.kind}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke={MODERN_EDGE_COLORS[edge.kind]}
                  strokeWidth={hot ? 2.2 : 1}
                  strokeOpacity={hot ? 0.9 : 0.35}
                />
              );
            })}
            {MODERN_NODES.map((node) => {
              const selected = node.id === active.id;
              const neighbor = linked.has(node.id);
              return (
                <g key={node.id}>
                  <title>{`${node.name}: ${node.role}`}</title>
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={selected ? 11 : 8}
                    fill={selected ? "#3e534c" : neighbor ? "#ebe4d6" : "#faf6ee"}
                    stroke="#3e534c"
                    strokeWidth={selected ? 2 : 1.25}
                    className="cursor-pointer"
                    onClick={() => setActiveId(node.id)}
                  />
                  <text
                    x={node.x}
                    y={node.y + 24}
                    textAnchor="middle"
                    fill="#1c1915"
                    fontSize="12"
                    fontFamily="Fraunces, Palatino, serif"
                    className="cursor-pointer"
                    onClick={() => setActiveId(node.id)}
                  >
                    {node.short}
                  </text>
                </g>
              );
            })}
          </svg>
          <figcaption className="border-t border-border px-4 py-3 text-sm text-muted">
            A later clock. Edges are geography — state, municipality, metro, address — not a household invented
            between the hotel and the ejido.
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
            {MODERN_NODES.map((node) => (
              <li key={node.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(node.id)}
                  className={cn(
                    "min-h-11 rounded-md px-2.5 text-xs font-medium transition-colors duration-150",
                    node.id === active.id ? "bg-primary text-primary-fg" : "bg-wash text-fg hover:bg-border",
                  )}
                >
                  {node.short}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <LedgerPanel activeId={activeId} />
    </div>
  );
}

function LedgerPanel({ activeId }: { activeId: string }) {
  const related = useMemo(() => relatedIds(activeId), [activeId]);
  const { lang } = useLang();
  const ui = CHROME[lang].ui;
  const status = {
    "in-record": { label: ui.inRecord, className: "bg-primary text-primary-fg" },
    adjacent: { label: ui.adjacent, className: "bg-wash text-fg" },
    "not-in-record": { label: ui.notInRecord, className: "border border-border text-muted" },
  };

  return (
    <div>
      <h2 className="font-display text-xl font-medium text-fg">Record vs gap — this stratum</h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
        Same three columns as 1274. The hotel is a building in the INAH catalogue. The ejido is an INEGI
        locality. Surname density is a compiled later-cohort map. No news cycle on this node.
      </p>
      <ol className="mt-4 space-y-3">
        {MONTERREY_LEDGER.map((row) => {
          const hot = related.has(row.id);
          return (
            <li
              key={row.id}
              className={cn(
                "rounded-xl bg-surface px-4 py-4 shadow-paper sm:px-5",
                hot && "ring-1 ring-primary/40",
              )}
            >
              <p className="flex flex-wrap items-center gap-2">
                <span className="font-display text-xs tracking-kicker text-subtle uppercase">{row.id}</span>
                <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium", status[row.status].className)}>
                  {status[row.status].label}
                </span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-fg sm:text-base">{row.claim}</p>
              <p className="mt-2 text-sm text-muted">{row.source}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function relatedIds(nodeId: string): Set<string> {
  if (nodeId === "mansion") return new Set(["M2", "M3", "M6"]);
  if (nodeId === "villarreales") return new Set(["M1", "M5"]);
  if (nodeId === "monterrey") return new Set(["M4", "M7"]);
  if (nodeId === "salinas") return new Set(["M1", "M5"]);
  if (nodeId === "nuevoleon") return new Set(["M4", "M8", "M9", "M10", "M11", "M12"]);
  return new Set();
}


