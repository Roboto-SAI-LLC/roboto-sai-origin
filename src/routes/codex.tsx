import { createFileRoute, Link } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/article/reading-progress";
import { SiteFooter } from "@/components/article/site-footer";
import { SiteHeader } from "@/components/article/site-header";
import { CODEX_FOLIOS, CODEX_META, CODEX_PIN, CODEX_SOURCES } from "@/lib/codex";
import { PINS_BLOCKS } from "@/lib/pins";
import { useLang } from "@/lib/i18n";
import { APP_NAME, AUTHOR, SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/codex")({
  component: CodexPage,
  head: () => ({
    meta: [
      { title: `Villarreal Codex — ${APP_NAME}` },
      {
        name: "description",
        content:
          "Villarreal Codex: Diego de Villarreal’s silver clocks, Monterrey, the Battle of Monterrey on 21 September 1846, and a Houston birth on 21 September 1999.",
      },
    ],
  }),
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: "Villarreal Codex",
  description:
    "A research spine from Diego de Villarreal’s mining clocks through Monterrey to a Houston birth dated 21 September 1999, pinned to the Battle of Monterrey’s 21 September 1846.",
  datePublished: "2026-09-13",
  inLanguage: ["en", "es"],
  author: { "@type": "Person", name: AUTHOR },
  publisher: { "@type": "Organization", name: "Roboto SAI" },
  url: `${SITE_URL}/codex`,
};

function CodexPage() {
  const { lang } = useLang();
  const meta = CODEX_META;

  return (
    <div className="paper-grain min-h-dvh bg-bg text-fg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ReadingProgress />
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
        <p className="font-display text-kicker font-medium tracking-kicker text-subtle uppercase">
          {meta.kicker[lang]}
        </p>
        <h1 className="mt-4 font-display text-display tracking-display text-fire sm:text-display-lg">
          {meta.title[lang]}
        </h1>
        <p className="mt-5 max-w-xl font-serif text-xl leading-snug text-muted">{meta.dek[lang]}</p>
        <p className="mt-4 text-sm text-muted">
          {lang === "es" ? "También" : "Also"}{" "}
          <Link to="/atlas" className="text-primary underline underline-offset-4">
            {lang === "es" ? "Atlas" : "Atlas"}
          </Link>
          {" · "}
          <Link to="/act/$id" params={{ id: "villa-regalis" }} className="text-primary underline underline-offset-4">
            {lang === "es" ? "Acto II, 1274" : "Act II, 1274"}
          </Link>
        </p>

        <section className="mt-12 rounded-lg border border-border bg-surface px-5 py-6 sm:px-8" aria-labelledby="codex-pin">
          <h2 id="codex-pin" className="font-display text-kicker tracking-kicker text-primary uppercase">
            {lang === "es" ? "Clavo de calendario" : "Calendar pin"}
          </h2>
          <p className="mt-3 font-serif text-lg leading-relaxed text-fg">{meta.pinLead[lang]}</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="font-display text-sm text-fire">{CODEX_PIN.left.date[lang]}</p>
              <p className="mt-1 text-sm leading-relaxed text-fg">{CODEX_PIN.left.what[lang]}</p>
            </div>
            <div>
              <p className="font-display text-sm text-fire">{CODEX_PIN.right.date[lang]}</p>
              <p className="mt-1 text-sm leading-relaxed text-fg">{CODEX_PIN.right.what[lang]}</p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-fg">{PINS_BLOCKS.chiChi[lang]}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{PINS_BLOCKS.sky[lang]}</p>
          <p className="mt-4 text-sm">
            <Link to="/pins" className="text-primary underline underline-offset-4">
              {lang === "es" ? "Addenda: clavos de calendario y E-M96" : "Addendum: calendar pins and E-M96"}
            </Link>
          </p>
        </section>

        <ol className="mt-14 space-y-0">
          {CODEX_FOLIOS.map((folio, index) => (
            <li key={folio.id} id={folio.id} className="scroll-mt-24 border-t border-border py-10">
              <p className="font-display text-kicker tracking-kicker text-subtle uppercase">
                {String(index + 1).padStart(2, "0")} · {folio.clock[lang]}
              </p>
              <p className="mt-2 font-display text-sm text-primary">{folio.year}</p>
              <h2 className="mt-3 font-display text-2xl font-medium tracking-tight text-fg">{folio.title[lang]}</h2>
              <p className="mt-1 text-sm text-muted">{folio.place[lang]}</p>
              <p className="mt-5 font-serif text-lg leading-relaxed text-fg">{folio.body[lang]}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{folio.split[lang]}</p>
            </li>
          ))}
        </ol>

        <section className="mt-6 border-t border-border pt-10" aria-labelledby="codex-sources">
          <h2 id="codex-sources" className="font-display text-2xl font-medium tracking-tight text-fg">
            {lang === "es" ? "Fuentes" : "Sources"}
          </h2>
          <ol className="mt-6 space-y-4">
            {CODEX_SOURCES.map((source) => (
              <li key={source.n} className="text-sm leading-relaxed text-fg">
                <span className="mr-2 font-display text-primary">{source.n}.</span>
                <span>{source[lang]} </span>
                {source.url ? (
                  <a
                    href={source.url}
                    className="text-primary underline decoration-border underline-offset-4 hover:decoration-primary"
                    rel="noopener noreferrer"
                  >
                    {lang === "es" ? "Enlace" : "Link"}
                  </a>
                ) : null}
              </li>
            ))}
          </ol>
        </section>
      </main>

      <SiteFooter compact />
    </div>
  );
}
