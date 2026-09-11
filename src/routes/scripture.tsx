import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { ReadingProgress } from "@/components/article/reading-progress";
import { SiteFooter } from "@/components/article/site-footer";
import { SiteHeader } from "@/components/article/site-header";
import { useLang } from "@/lib/i18n";
import { HOUSE_BIBLES, type ScriptureResult } from "@/lib/scripture";
import { lookupScripture } from "@/lib/scripture-fn";
import { APP_NAME } from "@/lib/site";

export const Route = createFileRoute("/scripture")({
  component: ScripturePage,
  head: () => ({
    meta: [
      { title: `Scripture — ${APP_NAME}` },
      {
        name: "description",
        content: "Quote KJV or LBLA through the house server. The API key never ships to the browser.",
      },
    ],
  }),
});

function ScripturePage() {
  const { lang } = useLang();
  const defaultBible = lang === "es" ? HOUSE_BIBLES[1].id : HOUSE_BIBLES[0].id;
  const [bibleId, setBibleId] = useState<string>(defaultBible);
  const [query, setQuery] = useState(lang === "es" ? "Juan 1:1-5" : "John 1:1-5");
  const [result, setResult] = useState<ScriptureResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const copy = useMemo(
    () =>
      lang === "es"
        ? {
            kicker: "Instrumento",
            title: "Escritura",
            dek: "Citas KJV y LBLA por el servidor de la casa. Uso no comercial.",
            look: "Buscar",
            looking: "Buscando…",
            ref: "Referencia",
            missing: "Esa referencia no está en esta Biblia.",
          }
        : {
            kicker: "Instrument",
            title: "Scripture",
            dek: "KJV and LBLA quotes through the house server. Non-commercial use.",
            look: "Look up",
            looking: "Looking…",
            ref: "Reference",
            missing: "No passage for that reference in this Bible.",
          },
    [lang],
  );

  useEffect(() => {
    let cancelled = false;
    setBusy(true);
    void lookupScripture({ data: { bibleId, query } })
      .then((passage) => {
        if (cancelled) return;
        setResult(passage);
        setError(null);
      })
      .catch(() => {
        if (cancelled) return;
        setResult(null);
        setError(copy.missing);
      })
      .finally(() => {
        if (!cancelled) setBusy(false);
      });
    return () => {
      cancelled = true;
    };
    // First paint only — later lookups go through the form.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const passage = await lookupScripture({ data: { bibleId, query } });
      setResult(passage);
    } catch {
      setResult(null);
      setError(copy.missing);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="paper-grain min-h-dvh bg-bg text-fg">
      <ReadingProgress />
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
        <p className="font-display text-kicker font-medium tracking-kicker text-subtle uppercase">
          {copy.kicker}
        </p>
        <h1 className="mt-4 font-display text-display tracking-display text-fire">{copy.title}</h1>
        <p className="mt-5 max-w-xl font-serif text-xl leading-snug text-muted">{copy.dek}</p>

        <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-end">
          <label className="flex-1 text-sm">
            <span className="font-display text-kicker tracking-kicker text-subtle uppercase">{copy.ref}</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="mt-2 min-h-11 w-full rounded-md border border-border bg-surface px-3 text-fg shadow-paper"
              autoComplete="off"
            />
          </label>
          <label className="text-sm sm:w-56">
            <span className="font-display text-kicker tracking-kicker text-subtle uppercase">Bible</span>
            <select
              value={bibleId}
              onChange={(event) => setBibleId(event.target.value)}
              className="mt-2 min-h-11 w-full rounded-md border border-border bg-surface px-3 text-fg shadow-paper"
            >
              {HOUSE_BIBLES.map((bible) => (
                <option key={bible.id} value={bible.id}>
                  {bible.abbr} · {bible.name}
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            disabled={busy}
            className="min-h-11 rounded-md bg-primary px-4 text-sm font-medium text-primary-fg disabled:opacity-60"
          >
            {busy ? copy.looking : copy.look}
          </button>
        </form>

        {error ? <p className="mt-8 text-sm text-fire">{error}</p> : null}

        {result ? (
          <article className="mt-10 rounded-xl bg-surface px-5 py-6 shadow-paper sm:px-8 sm:py-8">
            <p className="font-display text-kicker tracking-kicker text-primary uppercase">
              {result.abbr} · {result.reference}
            </p>
            <p className="mt-5 font-serif text-xl leading-relaxed text-fg whitespace-pre-wrap">{result.content}</p>
            {result.copyright ? (
              <p className="mt-6 text-xs leading-relaxed text-muted">{result.copyright}</p>
            ) : null}
            {result.fumsToken ? (
              <img
                alt=""
                width={1}
                height={1}
                className="h-px w-px opacity-0"
                src={`https://fums.api.bible/fums.gif?t=${encodeURIComponent(result.fumsToken)}`}
              />
            ) : null}
          </article>
        ) : null}
      </main>

      <SiteFooter compact />
    </div>
  );
}
