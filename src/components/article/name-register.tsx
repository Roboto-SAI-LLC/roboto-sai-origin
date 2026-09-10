import { useMemo, useState } from "react";
import { CHROME, useLang } from "@/lib/i18n";
import { KIND_LABEL, MODERN_NODES, type ModernKind } from "@/lib/monterrey";
import { PEOPLE } from "@/lib/network";

type RegisterRow = {
  id: string;
  name: string;
  year: string;
  role: string;
  kind?: ModernKind;
  layer: "1274" | "monterrey";
  search: string;
};

const ROWS: RegisterRow[] = [
  ...PEOPLE.map((person) => ({
    id: person.id,
    name: person.name,
    year: person.year,
    role: person.role,
    layer: "1274" as const,
    search: `${person.name} ${person.role} ${person.dossier} ${person.year} 1274 vila-real`,
  })),
  ...MODERN_NODES.map((node) => ({
    id: node.id,
    name: node.name,
    year: node.year,
    role: node.role,
    kind: node.kind,
    layer: "monterrey" as const,
    search: `${node.name} ${KIND_LABEL[node.kind]} ${node.role} ${node.dossier} ${node.year} monterrey mansion ejido villarreales`,
  })),
];

export function NameRegister() {
  const [query, setQuery] = useState("");
  const { lang } = useLang();
  const ui = CHROME[lang].ui;
  const kindLabel: Record<ModernKind, string> = {
    region: ui.state,
    city: ui.city,
    municipality: ui.municipality,
    locality: ui.locality,
    building: ui.building,
  };
  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ROWS;
    return ROWS.filter((row) => row.search.toLowerCase().includes(q));
  }, [query]);

  return (
    <div>
      <label htmlFor="register-search" className="sr-only">
        {ui.filterRegister}
      </label>
      <input
        id="register-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={ui.filterPlaceholder}
        className="h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg shadow-paper outline-none placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-primary"
      />
      <div className="mt-4 overflow-x-auto rounded-xl bg-surface shadow-paper">
        <table className="article-table w-full min-w-[36rem]">
          <caption className="sr-only">{ui.registerCaption}</caption>
          <thead>
            <tr>
              <th scope="col">{ui.name}</th>
              <th scope="col">{ui.clock}</th>
              <th scope="col">{ui.year}</th>
              <th scope="col">{ui.role}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${row.layer}-${row.id}`}>
                <td className="font-medium text-ink-soft">{row.name}</td>
                <td>{row.layer === "monterrey" ? "Monterrey" : "1269–1274"}</td>
                <td>{row.year}</td>
                <td>{row.kind ? `${kindLabel[row.kind]} · ${row.role}` : row.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
