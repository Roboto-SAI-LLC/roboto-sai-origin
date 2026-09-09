import { useMemo, useState } from "react";
import { KIND_LABEL, MODERN_NODES } from "@/lib/monterrey";
import { PEOPLE } from "@/lib/network";

type RegisterRow = {
  id: string;
  name: string;
  year: string;
  role: string;
  layer: string;
  search: string;
};

const ROWS: RegisterRow[] = [
  ...PEOPLE.map((person) => ({
    id: person.id,
    name: person.name,
    year: person.year,
    role: person.role,
    layer: "1269–1274",
    search: `${person.name} ${person.role} ${person.dossier} ${person.year} 1274 vila-real`,
  })),
  ...MODERN_NODES.map((node) => ({
    id: node.id,
    name: node.name,
    year: node.year,
    role: `${KIND_LABEL[node.kind]} · ${node.role}`,
    layer: "Monterrey",
    search: `${node.name} ${node.role} ${node.dossier} ${node.year} monterrey mansion ejido villarreales`,
  })),
];

export function NameRegister() {
  const [query, setQuery] = useState("");
  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ROWS;
    return ROWS.filter((row) => row.search.toLowerCase().includes(q));
  }, [query]);

  return (
    <div>
      <label htmlFor="register-search" className="sr-only">
        Filter the register
      </label>
      <input
        id="register-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Filter by name, office, place, or year"
        className="h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg shadow-paper outline-none placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-primary"
      />
      <div className="mt-4 overflow-x-auto rounded-xl bg-surface shadow-paper">
        <table className="article-table w-full min-w-[36rem]">
          <caption className="sr-only">People and places in the 1269–1274 cluster and the Monterrey node</caption>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Clock</th>
              <th scope="col">Year</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${row.layer}-${row.id}`}>
                <td className="font-medium text-ink-soft">{row.name}</td>
                <td>{row.layer}</td>
                <td>{row.year}</td>
                <td>{row.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
