import { LION_META, PERSONAL_NAMES } from "@/lib/lion";
import { pick, useLang } from "@/lib/i18n";

export function LionNameTable() {
  const { lang } = useLang();
  const meta = pick(lang, LION_META);
  return (
    <figure className="my-10">
      <div className="overflow-x-auto rounded-xl bg-surface px-4 py-2 shadow-paper sm:px-5">
        <table className="article-table">
          <caption className="sr-only">{meta.nameTableCaption}</caption>
          <thead>
            <tr>
              <th scope="col">{meta.nameCol}</th>
              <th scope="col">{meta.hebrewCol}</th>
              <th scope="col">{meta.senseCol}</th>
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
                <td className="text-muted">{row.sense[lang]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption className="mt-3 text-sm text-muted">{meta.figureNames}</figcaption>
    </figure>
  );
}
