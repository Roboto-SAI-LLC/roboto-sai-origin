import { useMemo, useState } from "react";
import { CHRONICLE, PLANA_PLACES } from "@/lib/dossier";
import { cn } from "@/lib/utils";

const INK = "#1c1915";
const FOREST = "#3e534c";
const CREAM = "#faf6ee";
const WASH = "#ebe4d6";
const RULE = "#b8ad9c";

export function ChronicleMap() {
  const [activeId, setActiveId] = useState("carta");
  const active = CHRONICLE.find((item) => item.id === activeId) ?? CHRONICLE[0];
  const hotPlace = active.place;

  const statusClass =
    active.status === "in-record"
      ? "bg-primary text-primary-fg"
      : active.status === "gap"
        ? "border border-border text-muted"
        : "bg-wash text-fg";

  const statusLabel =
    active.status === "in-record" ? "In the record" : active.status === "gap" ? "Gap year" : "Adjacent";

  const linkedYears = useMemo(() => {
    return new Set(CHRONICLE.filter((item) => item.place === hotPlace).map((item) => item.id));
  }, [hotPlace]);

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_18rem]">
      <div>
        <figure className="overflow-hidden rounded-xl bg-surface shadow-paper">
          <svg
            viewBox="0 0 640 360"
            role="img"
            aria-label="Schematic of the Plana Baixa around Vila-real"
            className="h-auto w-full"
          >
            <rect width="640" height="360" fill={CREAM} />
            <path d="M500 0 L640 0 L640 360 L520 360 Q490 220 500 0 Z" fill={WASH} />
            <text x="580" y="180" textAnchor="middle" fill={RULE} fontSize="11" fontFamily="Fraunces, Palatino, serif">
              Sea
            </text>
            <line x1="40" y1="62" x2="470" y2="50" stroke={FOREST} strokeWidth="1.5" />
            <text x="48" y="54" fill={FOREST} fontSize="10" fontFamily="Fraunces, Palatino, serif">
              Millars
            </text>
            {PLANA_PLACES.filter((place) => place.id !== "sea" && place.id !== "millars").map((place) => {
              const selected = place.id === hotPlace;
              return (
                <g key={place.id}>
                  <title>{`${place.name}: ${place.role}`}</title>
                  <circle
                    cx={place.x}
                    cy={place.y}
                    r={selected ? 11 : 8}
                    fill={selected ? FOREST : WASH}
                    stroke={FOREST}
                    strokeWidth={selected ? 2 : 1.25}
                    className="cursor-pointer"
                    onClick={() => {
                      const match = CHRONICLE.find((item) => item.place === place.id);
                      if (match) setActiveId(match.id);
                    }}
                  />
                  <text
                    x={place.x}
                    y={place.y + 24}
                    textAnchor="middle"
                    fill={INK}
                    fontSize="12"
                    fontFamily="Fraunces, Palatino, serif"
                    className="cursor-pointer"
                    onClick={() => {
                      const match = CHRONICLE.find((item) => item.place === place.id);
                      if (match) setActiveId(match.id);
                    }}
                  >
                    {place.name}
                  </text>
                </g>
              );
            })}
          </svg>
          <figcaption className="border-t border-border px-4 py-3 text-xs leading-relaxed text-muted sm:px-5">
            Schematic, not a surveyed map. Xivert sits in the Maestrazgo, kept on the same board as neighboring
            power, not as a next-door street.
          </figcaption>
        </figure>

        <ol className="mt-4 grid gap-2 sm:grid-cols-2">
          {CHRONICLE.map((item) => {
            const selected = item.id === active.id;
            const linked = linkedYears.has(item.id);
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={cn(
                    "flex min-h-11 w-full items-baseline gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors duration-150",
                    selected ? "bg-primary text-primary-fg" : linked ? "bg-wash text-fg" : "bg-surface text-fg shadow-paper hover:bg-wash",
                    item.status === "gap" && !selected && "border border-dashed border-rule shadow-none",
                  )}
                >
                  <span className="font-display text-xs tracking-kicker uppercase">{item.year}</span>
                  <span className="font-medium">{item.title}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <aside className="rounded-xl bg-surface px-4 py-5 shadow-paper sm:px-5">
        <p className="flex flex-wrap items-center gap-2">
          <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium", statusClass)}>{statusLabel}</span>
        </p>
        <p className="mt-3 font-display text-kicker font-medium tracking-kicker text-primary uppercase">{active.year}</p>
        <h2 className="mt-2 font-display text-xl font-medium text-fg">{active.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-fg">{active.text}</p>
        <p className="mt-4 text-xs text-muted">
          Click a year or a place. 1429 stays on the line as a searched gap, not as a deleted claim.
        </p>
      </aside>
    </div>
  );
}
