import { PERSONAL_NAMES } from "@/lib/lion";

export function LionNameTable() {
  return (
    <figure className="my-10">
      <div className="overflow-x-auto rounded-xl bg-surface px-4 py-2 shadow-paper sm:px-5">
        <table className="article-table">
          <caption className="sr-only">Hebrew lion names still in use</caption>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Hebrew</th>
              <th scope="col">Sense</th>
            </tr>
          </thead>
          <tbody>
            {PERSONAL_NAMES.map((row) => (
              <tr key={row.name}>
                <td className="font-display font-medium">{row.name}</td>
                <td>
                  <span lang="he" dir="rtl" className="hebrew">
                    {row.hebrew}
                  </span>
                </td>
                <td className="text-muted">{row.sense}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption className="mt-3 text-sm text-muted">
        Figure 5. The blessing as a naming stock. Leib is Yiddish for lion; stacked with Aryeh it says the word twice.
      </figcaption>
    </figure>
  );
}
