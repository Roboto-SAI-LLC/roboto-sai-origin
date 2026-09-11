import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { HOUSE_BIBLES, type ScriptureResult } from "@/lib/scripture";
import { noteForQuery } from "@/lib/scripture-notes";
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
  const note = noteForQuery(query);

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

  const labels =
    lang === "es"
      ? { tokens: "Fichas", roots: "Raíces", clock: "Reloj", split: "Corte", open: "Abrir la consulta" }
      : { tokens: "Tokens", roots: "Roots", clock: "Clock", split: "Split", open: "Open lookup" };

  return (
    <aside className="my-10 rounded-lg border border-border bg-surface px-5 py-5">
      <p className="font-display text-kicker tracking-kicker text-primary uppercase">
        {result.abbr} · {result.reference}
      </p>
      <p className="mt-3 font-serif text-lg leading-relaxed text-fg whitespace-pre-wrap">{result.content}</p>
      {note ? (
        <dl className="mt-5 grid gap-3 border-t border-border pt-4 text-sm leading-relaxed">
          <div>
            <dt className="font-display text-kicker tracking-kicker text-subtle uppercase">{labels.tokens}</dt>
            <dd className="mt-1 text-fg">{note.tokens[lang]}</dd>
          </div>
          <div>
            <dt className="font-display text-kicker tracking-kicker text-subtle uppercase">{labels.roots}</dt>
            <dd className="mt-1 text-fg">{note.roots[lang]}</dd>
          </div>
          <div>
            <dt className="font-display text-kicker tracking-kicker text-subtle uppercase">{labels.clock}</dt>
            <dd className="mt-1 text-fg">{note.clock[lang]}</dd>
          </div>
          <div>
            <dt className="font-display text-kicker tracking-kicker text-subtle uppercase">{labels.split}</dt>
            <dd className="mt-1 text-fg">{note.split[lang]}</dd>
          </div>
        </dl>
      ) : null}
      {result.copyright ? <p className="mt-4 text-xs leading-relaxed text-muted">{result.copyright}</p> : null}
      <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
        <span>{lang === "es" ? "API.Bible · uso no comercial" : "API.Bible · non-commercial use"}</span>
        <Link
          to="/scripture"
          search={{ q: query, bible: bibleId }}
          className="text-primary underline underline-offset-4"
        >
          {labels.open}
        </Link>
      </p>
      {result.fumsToken ? (
        <img
          alt=""
          width={1}
          height={1}
          className="h-px w-px opacity-0"
          src={`https://fums.api.bible/fums.gif?t=${encodeURIComponent(result.fumsToken)}`}
        />
      ) : null}
    </aside>
  );
}
