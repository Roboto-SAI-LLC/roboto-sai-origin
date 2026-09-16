import { Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { LOTS, drawOmen, type DrawnOmen, type OmenStamp } from "@/lib/omen";
import { useLang } from "@/lib/i18n";

function stampLabel(lang: "en" | "es", stamp: OmenStamp) {
  if (lang === "es") {
    if (stamp === "in-record") return "En el acta";
    if (stamp === "adjacent") return "Al lado";
    return "Abierto";
  }
  if (stamp === "in-record") return "In the record";
  if (stamp === "adjacent") return "Adjacent";
  return "Open";
}

function RecordLink({ omen, lang }: { omen: DrawnOmen; lang: "en" | "es" }) {
  if (!omen.href) return null;
  const label = lang === "es" ? "Abrir el acta detrás" : "Open the record behind it";
  if (omen.href === "/act/$id" && omen.actId) {
    return (
      <Link
        to="/act/$id"
        params={{ id: omen.actId }}
        className="mt-6 inline-flex min-h-11 items-center font-display text-sm text-primary underline underline-offset-4"
      >
        {label}
      </Link>
    );
  }
  return (
    <Link
      to={omen.href}
      className="mt-6 inline-flex min-h-11 items-center font-display text-sm text-primary underline underline-offset-4"
    >
      {label}
    </Link>
  );
}

export function OmenWell({ initial }: { initial?: string }) {
  const { lang } = useLang();
  const navigate = useNavigate();
  const [value, setValue] = useState(initial ?? "");
  const [drawn, setDrawn] = useState<string>(initial?.trim() ?? "");

  const omen = useMemo(() => (drawn ? drawOmen(drawn) : null), [drawn]);

  function commit(name: string) {
    const next = name.trim();
    if (next.length < 2) return;
    setValue(next);
    setDrawn(next);
    void navigate({ to: "/", search: { n: next }, replace: true });
  }

  return (
    <section className="paper-grain rounded-xl border border-border bg-surface px-4 py-8 shadow-paper sm:px-8 sm:py-10">
      <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">
        {lang === "es" ? "Sorteo del nombre" : "Name-sortes"}
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-display text-fg sm:text-6xl">RobotOmen</h1>
      <p className="mt-4 max-w-xl font-serif text-xl leading-snug text-muted">
        {lang === "es"
          ? "Da un nombre. El sitio devuelve su omen: la migración, el hado, la sombra que carga. Es el omen del nombre, no del portador."
          : "Give a name. The site returns its omen: the migration, the fate, the shadow it carries. This is the name’s omen, not the bearer’s."}
      </p>

      <form
        className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch"
        onSubmit={(event) => {
          event.preventDefault();
          commit(value);
        }}
      >
        <label className="sr-only" htmlFor="omen-name">
          {lang === "es" ? "Nombre" : "Name"}
        </label>
        <input
          id="omen-name"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          autoComplete="off"
          spellCheck={false}
          placeholder={lang === "es" ? "Villarreal, Vidal, el tuyo…" : "Villarreal, Vidal, yours…"}
          className="h-14 flex-1 rounded-md border border-rule bg-bg px-4 font-display text-xl text-fg outline-none placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-primary"
        />
        <button
          type="submit"
          className="inline-flex h-14 min-w-36 items-center justify-center rounded-md bg-primary px-6 font-display text-sm tracking-kicker text-primary-fg uppercase"
        >
          {lang === "es" ? "Sacar" : "Draw"}
        </button>
      </form>

      <ul className="mt-4 flex flex-wrap gap-2">
        {LOTS.map((lot) => (
          <li key={lot}>
            <button
              type="button"
              onClick={() => commit(lot)}
              className="inline-flex min-h-11 items-center rounded-full border border-border bg-bg px-3 text-sm text-muted hover:text-fg"
            >
              {lot}
            </button>
          </li>
        ))}
      </ul>

      {omen ? (
        <article className="mt-10 border-t border-border pt-8" aria-live="polite">
          <p className="font-display text-kicker tracking-kicker text-primary uppercase">
            {stampLabel(lang, omen.stamp)} · {omen.clock[lang]}
          </p>
          <h2 className="mt-2 font-display text-3xl tracking-display text-fg sm:text-5xl">{omen.spoken}</h2>
          <p className="mt-2 text-sm text-subtle">{omen.lemma}</p>

          <ol className="mt-8 grid gap-4 sm:grid-cols-3">
            <li className="stagger-in rounded-lg border border-border bg-bg px-4 py-5">
              <p className="font-display text-kicker tracking-kicker text-primary uppercase">
                {lang === "es" ? "Migración" : "Migration"}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-fg">{omen.migration[lang]}</p>
            </li>
            <li className="stagger-in rounded-lg border border-border bg-bg px-4 py-5">
              <p className="font-display text-kicker tracking-kicker text-primary uppercase">
                {lang === "es" ? "Hado" : "Fate"}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-fg">{omen.fate[lang]}</p>
            </li>
            <li className="stagger-in rounded-lg border border-border bg-bg px-4 py-5">
              <p className="font-display text-kicker tracking-kicker text-primary uppercase">
                {lang === "es" ? "Sombra" : "Shadow"}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-fg">{omen.shadow[lang]}</p>
            </li>
          </ol>

          <RecordLink omen={omen} lang={lang} />
        </article>
      ) : null}
    </section>
  );
}
