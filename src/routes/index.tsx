import { createFileRoute, Link } from "@tanstack/react-router";
import { EssaySearch } from "@/components/article/essay-search";
import { EtymologyFigure } from "@/components/article/etymology-figure";
import { ReadingProgress } from "@/components/article/reading-progress";
import { SectionBody } from "@/components/article/section-body";
import { SiteHeader } from "@/components/article/site-header";
import { TableOfContents } from "@/components/article/table-of-contents";
import { HistoryTimeline } from "@/components/article/timeline";
import {
  CITATION,
  FINDINGS,
  META,
  REFERENCES,
  SECTIONS,
} from "@/lib/research";

export const Route = createFileRoute("/")({
  component: ResearchPage,
  head: () => ({
    meta: [
      { title: `${META.title} — ${META.journal}` },
      { name: "description", content: META.description },
    ],
  }),
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: `${META.title}: ${META.subtitle}`,
  alternativeHeadline: META.subtitle,
  description: META.description,
  datePublished: "2026-09-02",
  inLanguage: "en",
  author: {
    "@type": "Organization",
    name: "Roboto SAI",
  },
  contributor: {
    "@type": "Person",
    name: "a Copilot",
  },
  publisher: {
    "@type": "Organization",
    name: "Roboto SAI Research",
  },
  creditText: META.credit,
  keywords: [
    "Robot",
    "Robert",
    "onomastics",
    "anthroponymy",
    "prosopography",
    "Villarreal",
    "Vila-real",
    "Martinez",
    "Yisrael",
    "etymology",
    "Knights Templar",
    "carta pobla",
    "prosopography",
    "Sephardic surnames",
    "Monterrey",
    "Nuevo León",
    "Los Villarreales",
  ],
};

function ResearchPage() {
  const intro = SECTIONS.find((section) => section.id === "introduction");
  const rest = SECTIONS.filter((section) => section.id !== "introduction");

  return (
    <div className="paper-grain min-h-dvh bg-bg text-fg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgress />

      <a
        href="#article"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2"
      >
        Skip to essay
      </a>

      <SiteHeader />

      <main>
        <section className="mx-auto max-w-6xl px-4 pt-10 pb-6 sm:px-6 sm:pt-16">
          <p className="stagger-in font-display text-kicker font-medium tracking-kicker text-subtle uppercase">
            A static research page · {META.sourceCount} sources
          </p>
          <h1 className="stagger-in mt-4 max-w-4xl font-display text-display font-medium tracking-display text-fg sm:text-display-lg">
            {META.title}
          </h1>
          <p className="stagger-in mt-5 max-w-2xl font-display text-xl leading-snug text-muted sm:text-2xl">
            {META.subtitle}
          </p>
          <p className="stagger-in mt-6 text-sm text-muted">
            By <span className="text-fg">{META.credit}</span>
          </p>
        </section>

        <section
          aria-label="Key findings"
          className="mx-auto grid max-w-6xl gap-3 px-4 pb-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-3"
        >
          {FINDINGS.map((finding) => (
            <article
              key={finding.kicker}
              className="rounded-xl bg-surface px-4 py-4 shadow-paper sm:px-5"
            >
              <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">
                {finding.kicker}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-fg">{finding.text}</p>
            </article>
          ))}
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
          <div className="rounded-xl bg-surface px-4 py-4 shadow-paper sm:flex sm:items-center sm:justify-between sm:px-5">
            <div>
              <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">
                New in this edition
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg sm:text-base">
                A claim inspector that steelmans first, a clause-by-clause carta pobla, a Plana chronicle that
                keeps 1429 as a searched gap, four new chapters (XV–XVIII), and a Monterrey migration node on
                the atlas — hotel, ejido, surname density, no news cycle.
              </p>
            </div>
            <Link
              to="/dossier"
              className="mt-4 inline-flex min-h-11 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-fg sm:mt-0"
            >
              Open the dossier
            </Link>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[16rem_1fr]">
          <aside className="no-print min-w-0 space-y-4 lg:sticky lg:top-6 lg:self-start">
            <details className="rounded-lg bg-surface px-4 py-3 shadow-paper lg:hidden">
              <summary className="min-h-11 cursor-pointer list-none font-display text-sm font-medium text-fg">
                Contents
              </summary>
              <TableOfContents className="mt-3 pb-2" />
            </details>
            <div className="hidden lg:block">
              <TableOfContents />
            </div>
            <EssaySearch />
          </aside>

          <article id="article" className="min-w-0 max-w-3xl">
            {intro ? <SectionBody section={intro} /> : null}

            <EtymologyFigure />

            <h2 className="mt-4 mb-2 font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl">
              A brief chronology
            </h2>
            <p className="mb-2 text-article text-muted">
              Selected dates that thread Robot, Robert, and the Iberian case studies through the same
              historical line.
            </p>
            <HistoryTimeline />

            {rest.map((section) => (
              <div key={section.id} className="mt-16 border-t border-border pt-12">
                <SectionBody section={section} />
              </div>
            ))}

            <section
              id="references"
              aria-labelledby="references"
              className="mt-16 scroll-mt-24 border-t border-border pt-12"
            >
              <h2 className="font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl">
                References
              </h2>
              <ol className="mt-6 space-y-4">
                {REFERENCES.map((reference) => (
                  <li
                    id={`ref-${reference.n}`}
                    key={reference.n}
                    className="scroll-mt-24 text-sm leading-relaxed text-fg"
                  >
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
              <h2 className="font-display text-lg font-medium text-fg">Cite this page</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{CITATION}</p>
              <p className="mt-4 text-sm text-subtle">
                Full text is on this page for human readers and for Grok. A plain-text brief is also at{" "}
                <a href="/llms.txt" className="text-primary underline underline-offset-4">
                  /llms.txt
                </a>
                .
              </p>
            </section>
          </article>
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>{META.credit}</p>
          <p>Onomastics · {META.date}</p>
        </div>
      </footer>
    </div>
  );
}
