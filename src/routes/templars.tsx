import { createFileRoute, Link } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/article/reading-progress";
import { SectionBody } from "@/components/article/section-body";
import { SiteHeader } from "@/components/article/site-header";
import { TableOfContents } from "@/components/article/table-of-contents";
import { YearTimeline } from "@/components/article/timeline";
import { PhotoFigure } from "@/components/lion/photo-figure";
import { CHROME, pick, useLang } from "@/lib/i18n";
import { META } from "@/lib/research";
import {
  TEMPLAR_FINDINGS,
  TEMPLAR_META,
  TEMPLAR_REFERENCES,
  TEMPLAR_SECTIONS,
  TEMPLAR_TIMELINE,
  TEMPLAR_TOC,
} from "@/lib/templar";

export const Route = createFileRoute("/templars")({
  component: TemplarPage,
  head: () => ({
    meta: [
      { title: `${TEMPLAR_META.en.title} — ${META.journal}` },
      { name: "description", content: TEMPLAR_META.en.description },
    ],
  }),
});

function TemplarPage() {
  const { lang } = useLang();
  const meta = pick(lang, TEMPLAR_META);
  const findings = TEMPLAR_FINDINGS[lang];
  const sections = TEMPLAR_SECTIONS[lang];
  const toc = TEMPLAR_TOC[lang];
  const timeline = TEMPLAR_TIMELINE[lang];
  const chrome = CHROME[lang];
  const byId = (id: string) => sections.find((section) => section.id === id);

  return (
    <div className="paper-grain min-h-dvh bg-bg text-fg">
      <ReadingProgress />

      <a
        href="#article"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2"
      >
        {meta.skip}
      </a>

      <SiteHeader />

      <main>
        <section className="mx-auto max-w-6xl px-4 pt-10 pb-6 sm:px-6 sm:pt-16">
          <p className="stagger-in font-display text-kicker font-medium tracking-kicker text-subtle uppercase">
            {meta.kicker}
          </p>
          <h1 className="stagger-in mt-4 max-w-4xl font-display text-display font-medium tracking-display text-fg sm:text-display-lg">
            {meta.title}
          </h1>
          <p className="stagger-in mt-5 max-w-2xl font-display text-xl leading-snug text-muted sm:text-2xl">
            {meta.subtitle}
          </p>
          <p className="stagger-in mt-6 text-sm text-muted">
            By <span className="text-fg">{META.credit}</span>
          </p>
        </section>

        <section
          aria-label={lang === "es" ? "Hallazgos" : "Key findings"}
          className="mx-auto grid max-w-6xl gap-3 px-4 pb-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4"
        >
          {findings.map((finding) => (
            <article key={finding.kicker} className="rounded-xl bg-surface px-4 py-4 shadow-paper sm:px-5">
              <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">
                {finding.kicker}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-fg">{finding.text}</p>
            </article>
          ))}
        </section>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[16rem_1fr]">
          <aside className="no-print min-w-0 space-y-4 lg:sticky lg:top-6 lg:self-start">
            <details className="rounded-lg bg-surface px-4 py-3 shadow-paper lg:hidden">
              <summary className="min-h-11 cursor-pointer list-none font-display text-sm font-medium text-fg">
                {chrome.contents}
              </summary>
              <TableOfContents items={toc} className="mt-3 pb-2" />
            </details>
            <div className="hidden lg:block">
              <TableOfContents items={toc} />
            </div>
            <Link
              to="/brief"
              className="hidden min-h-11 items-center rounded-md bg-surface px-3.5 text-sm font-medium text-fg shadow-paper hover:bg-wash lg:inline-flex"
            >
              {meta.back}
            </Link>
            <Link
              to="/brief"
              className="hidden min-h-11 items-center rounded-md bg-primary px-3.5 text-sm font-medium text-primary-fg lg:inline-flex"
            >
              {meta.listen}
            </Link>
          </aside>

          <article id="article" className="min-w-0 max-w-3xl">
            {byId("introduction") ? <SectionBody section={byId("introduction")!} /> : null}

            {byId("order") ? (
              <div className="mt-16 border-t border-border pt-12">
                <SectionBody section={byId("order")!} />
                <PhotoFigure src="/templars/fortress.jpg" alt={meta.photoAlt} caption={meta.photoCaption} />
              </div>
            ) : null}

            {byId("money") ? (
              <div className="mt-16 border-t border-border pt-12">
                <SectionBody section={byId("money")!} />
              </div>
            ) : null}

            {byId("end") ? (
              <div className="mt-16 border-t border-border pt-12">
                <SectionBody section={byId("end")!} />
              </div>
            ) : null}

            {byId("plana") ? (
              <div className="mt-16 border-t border-border pt-12">
                <SectionBody section={byId("plana")!} />
                <PhotoFigure
                  src="/templars/coast.jpg"
                  alt={
                    lang === "es"
                      ? "Castillo de caliza vacío en la costa mediterránea, atardecer, sin gente."
                      : "Empty limestone castle on the Mediterranean coast at dusk, no people."
                  }
                  caption={
                    lang === "es"
                      ? "La costa de la Plana: Xivert y Burriana son señorío vecino. Vila-real es merced real de 1274."
                      : "The Plana coast: Xivert and Burriana are neighboring lordship. Vila-real is a royal grant of 1274."
                  }
                />
                <h2 className="mt-4 mb-2 font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl">
                  {meta.chronology}
                </h2>
                <p className="mb-2 text-article text-muted">{meta.chronologyLead}</p>
                <YearTimeline items={timeline} />
              </div>
            ) : null}

            <section id="references" aria-labelledby="references" className="mt-16 scroll-mt-24 border-t border-border pt-12">
              <h2 className="font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl">{meta.references}</h2>
              <ol className="mt-6 space-y-4">
                {TEMPLAR_REFERENCES.map((reference) => (
                  <li id={`templar-ref-${reference.n}`} key={reference.n} className="scroll-mt-24 text-sm leading-relaxed text-fg">
                    <span className="mr-2 font-display text-primary">{reference.n}.</span>
                    <span>{reference.source}. </span>
                    <a
                      href={reference.url}
                      className="text-primary underline decoration-border underline-offset-4 hover:decoration-primary"
                      rel="noopener noreferrer"
                    >
                      {reference.title}
                    </a>
                    .
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-12 rounded-xl bg-surface px-5 py-5 shadow-paper sm:px-6">
              <h2 className="font-display text-lg font-medium text-fg">{meta.citeTitle}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{meta.citation}</p>
              <p className="mt-4 text-sm text-subtle">
                <Link to="/brief" className="text-primary underline underline-offset-4">
                  {meta.listen}
                </Link>
                {" · "}
                <Link to="/dossier" className="text-primary underline underline-offset-4">
                  Dossier
                </Link>
              </p>
            </section>
          </article>
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>{META.credit}</p>
          <p>
            {chrome.series} · {chrome.date}
          </p>
        </div>
      </footer>
    </div>
  );
}
