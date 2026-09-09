import { InlineText } from "@/components/article/inline-text";

export function DataTable({
  id,
  caption,
  headers,
  rows,
}: {
  id: string;
  caption: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <figure id={id} className="my-8">
      <div className="max-w-full overflow-x-auto rounded-lg bg-surface px-4 py-3 shadow-paper sm:px-5 sm:py-4">
        <table className="article-table w-full">
          <caption className="mb-3 text-left font-display text-sm font-medium tracking-wide text-muted">
            {caption}
          </caption>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header} scope="col">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className={cellIndex === 0 ? "font-medium text-ink-soft" : "text-fg"}>
                    <InlineText text={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
