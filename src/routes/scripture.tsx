import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { ReadingProgress } from "@/components/article/reading-progress";
import { SiteFooter } from "@/components/article/site-footer";
import { SiteHeader } from "@/components/article/site-header";
import { useLang } from "@/lib/i18n";
import { HOUSE_BIBLES, isHouseBibleId, type ScriptureResult } from "@/lib/scripture";
import { noteForQuery, SCRIPTURE_PRESETS } from "@/lib/scripture-notes";
import { lookupScripture } from "@/lib/scripture-fn";
import { APP_NAME } from "@/lib/site";

type ScriptureSearch = { q?: string; bible?: string };

export const Route = createFileRoute("/scripture")({
  validateSearch: (raw: Record<string, unknown>): ScriptureSearch => {
    const q = typeof raw.q === "string" && raw.q.trim() ? raw.q.trim().slice(0, 80) : undefined;
    const bible = typeof raw.bible === "string" && isHouseBibleId(raw.bible) ? raw.bible : undefined;
    return { q, bible };
  },
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
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const defaultBible = lang === "es" ? HOUSE_BIBLES[1].id : HOUSE_BIBLES[0].id;
  const defaultQuery = lang === "es" ? "Juan 1:1-5" : "John 1:1-5";
  const bibleId = search.bible ?? defaultBible;
  const query = search.q ?? defaultQuery;
  const [draft, setDraft] = useState(query);
  const [result, setResult] = useState<ScriptureResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const note = noteForQuery(query);

  useEffect(() => {
    setDraft(query);
  }, [query]);

  const copy = useMemo(
    () =>
      lang === "es"
        ? {
            kicker: "Instrumento",
            title: "Escritura",
            dek: "Citas KJV y LBLA. Cada bloque lleva fichas onomásticas: raíces, reloj, corte. Uso no comercial.",
            look: "Buscar",
            looking: "Buscando…",
            ref: "Referencia",
            missing: "Esa referencia no está en esta Biblia.",
            tokens: "Fichas",
            roots: "Raíces",
            clock: "Reloj",
            split: "Corte",
            presets: "Pasajes del journal",
          }
        : {
            kicker: "Instrument",
            title: "Scripture",
            dek: "KJV and LBLA quotes. Each block carries an onomastic strip: roots, clock, split. Non-commercial use.",
            look: "Look up",
            looking: "Looking…",
            ref: "Reference",
            missing: "No passage for that reference in this Bible.",
            tokens: "Tokens",
            roots: "Roots",
            clock: "Clock",
            split: "Split",
            presets: "Journal passages",
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
  }, [bibleId, query, copy.missing]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next = draft.trim().slice(0, 80);
    if (!next) return;
    void navigate({ search: { q: next, bible: bibleId }, replace: true });
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
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              className="mt-2 min-h-11 w-full rounded-md border border-border bg-surface px-3 text-fg shadow-paper"
              autoComplete="off"
            />
          </label>
          <label className="text-sm sm:w-56">
            <span className="font-display text-kicker tracking-kicker text-subtle uppercase">Bible</span>
            <select
              value={bibleId}
              onChange={(event) => {
                const next = event.target.value;
                if (!isHouseBibleId(next)) return;
                void navigate({ search: { q: query, bible: next }, replace: true });
              }}
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

        <p className="mt-6 font-display text-kicker tracking-kicker text-subtle uppercase">{copy.presets}</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {SCRIPTURE_PRESETS.map((preset) => {
            const label = lang === "es" ? preset.qEs : preset.q;
            const active = query.trim().toLowerCase() === label.toLowerCase();
            return (
              <li key={preset.q}>
                <Link
                  to="/scripture"
                  search={{ q: label, bible: bibleId }}
                  className={
                    active
                      ? "inline-flex min-h-11 items-center rounded-md bg-primary px-3 text-sm text-primary-fg"
                      : "inline-flex min-h-11 items-center rounded-md border border-border bg-surface px-3 text-sm text-fg"
                  }
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {error ? <p className="mt-8 text-sm text-fire">{error}</p> : null}

        {result ? (
          <article className="mt-10 rounded-xl bg-surface px-5 py-6 shadow-paper sm:px-8 sm:py-8">
            <p className="font-display text-kicker tracking-kicker text-primary uppercase">
              {result.abbr} · {result.reference}
            </p>
            <p className="mt-5 font-serif text-xl leading-relaxed text-fg whitespace-pre-wrap">{result.content}</p>
            {note ? (
              <dl className="mt-6 grid gap-3 border-t border-border pt-5 text-sm leading-relaxed">
                <div>
                  <dt className="font-display text-kicker tracking-kicker text-subtle uppercase">{copy.tokens}</dt>
                  <dd className="mt-1 text-fg">{note.tokens[lang]}</dd>
                </div>
                <div>
                  <dt className="font-display text-kicker tracking-kicker text-subtle uppercase">{copy.roots}</dt>
                  <dd className="mt-1 text-fg">{note.roots[lang]}</dd>
                </div>
                <div>
                  <dt className="font-display text-kicker tracking-kicker text-subtle uppercase">{copy.clock}</dt>
                  <dd className="mt-1 text-fg">{note.clock[lang]}</dd>
                </div>
                <div>
                  <dt className="font-display text-kicker tracking-kicker text-subtle uppercase">{copy.split}</dt>
                  <dd className="mt-1 text-fg">{note.split[lang]}</dd>
                </div>
              </dl>
            ) : null}
            {result.copyright ? (
              <p className="mt-6 text-xs leading-relaxed text-muted">{result.copyright}</p>
            ) : null}
            <p className="mt-3 text-xs text-muted">
              {lang === "es" ? "API.Bible · uso no comercial" : "API.Bible · non-commercial use"}
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
          </article>
        ) : null}
      </main>

      <SiteFooter compact />
    </div>
  );
}
