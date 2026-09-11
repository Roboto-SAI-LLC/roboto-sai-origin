import { useEffect, useState } from "react";
import { HOUSE_BIBLES, type ScriptureResult } from "@/lib/scripture";
import { lookupScripture } from "@/lib/scripture-fn";
import { useLang } from "@/lib/i18n";

export function ScripturePull({
  query = "John 1:1-5",
  bibleId = HOUSE_BIBLES[0].id,
}: {
  query?: string;
  bibleId?: string;
}) {
  const { lang } = useLang();
  const [result, setResult] = useState<ScriptureResult | null>(null);

  useEffect(() => {
    let cancelled = false;
    void lookupScripture({ data: { bibleId, query } })
      .then((passage) => {
        if (!cancelled) setResult(passage);
      })
      .catch(() => {
        if (!cancelled) setResult(null);
      });
    return () => {
      cancelled = true;
    };
  }, [bibleId, query]);

  if (!result) return null;

  return (
    <aside className="my-10 rounded-lg border border-border bg-surface px-5 py-5">
      <p className="font-display text-kicker tracking-kicker text-primary uppercase">
        {result.abbr} · {result.reference}
      </p>
      <p className="mt-3 font-serif text-lg leading-relaxed text-fg whitespace-pre-wrap">{result.content}</p>
      {result.copyright ? <p className="mt-4 text-xs leading-relaxed text-muted">{result.copyright}</p> : null}
      <p className="mt-3 text-xs text-muted">
        {lang === "es" ? "API.Bible · uso no comercial" : "API.Bible · non-commercial use"}
      </p>
    </aside>
  );
}
