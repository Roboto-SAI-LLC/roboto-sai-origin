import { createFileRoute, Link } from "@tanstack/react-router";
import { EssaySearch } from "@/components/article/essay-search";
import { EtymologyFigure } from "@/components/article/etymology-figure";
import { ReadingProgress } from "@/components/article/reading-progress";
import { SectionBody } from "@/components/article/section-body";
import { SiteFooter } from "@/components/article/site-footer";
import { SiteHeader } from "@/components/article/site-header";
import { TableOfContents } from "@/components/article/table-of-contents";
import { HistoryTimeline } from "@/components/article/timeline";
import { CHROME, useLang } from "@/lib/i18n";
import {
  CITATION,
  META,
  REFERENCES,
  SECTIONS,
} from "@/lib/research";
import { APP_NAME, SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: ResearchPage,
  head: () => ({
    meta: [
      { title: `${META.title} — ${APP_NAME}` },
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
    name: "Roboto SAI",
  },
  url: SITE_URL,
  creditText: META.credit,
  keywords: [
    "Roboto",
    "Roberto",
    "Robot",
    "Robert",
    "ASR",
    "speech recognition",
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
  const { lang } = useLang();
  const chrome = CHROME[lang];
  const home = chrome.home;

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
        {chrome.skip}
      </a>

      <SiteHeader />

      <main>
        <section className="mx-auto max-w-6xl px-4 pt-10 pb-6 sm:px-6 sm:pt-16">
          <p className="stagger-in font-display text-kicker font-medium tracking-kicker text-subtle uppercase">
            {home.kicker} · {META.sourceCount} {home.sources}
          </p>
          <h1 className="stagger-in mt-4 max-w-4xl font-display text-display font-bold italic tracking-display text-fire sm:text-display-lg">
            {home.title}
          </h1>
          <p className="stagger-in mt-5 max-w-2xl font-serif text-xl font-normal leading-snug text-muted sm:text-2xl">
            {home.subtitle}
          </p>
          <p className="stagger-in mt-6 text-sm text-muted">
            {chrome.ui.by} <span className="text-fg">{META.credit}</span>
          </p>
          {chrome.englishBody ? (
            <p className="stagger-in mt-4 max-w-2xl rounded-lg bg-surface px-4 py-3 text-sm leading-relaxed text-muted shadow-paper">
              {chrome.englishBody}
            </p>
          ) : null}
        </section>

        <section
          aria-label={chrome.ui.findings}
          className="mx-auto grid max-w-6xl gap-3 px-4 pb-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-3"
        >
          {home.findings.map((finding) => (
            <article key={finding.kicker} className="rounded-xl bg-surface px-4 py-4 shadow-paper sm:px-5">
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
                {home.newKicker}
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg sm:text-base">{home.newText}</p>
            </div>
            <Link
              to="/dossier"
              className="mt-4 inline-flex min-h-11 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-fg sm:mt-0"
            >
              {home.newCta}
            </Link>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-3 px-4 pb-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          <article className="rounded-xl bg-surface px-4 py-4 shadow-paper sm:px-5">
            <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">{home.lionKicker}</p>
            <p className="mt-2 text-sm leading-relaxed text-fg">{home.lionText}</p>
            <Link
              to="/lion"
              className="mt-4 inline-flex min-h-11 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-fg"
            >
              {home.lionCta}
            </Link>
          </article>
          <article className="rounded-xl bg-surface px-4 py-4 shadow-paper sm:px-5">
            <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">
              {home.templarKicker}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-fg">{home.templarText}</p>
            <Link
              to="/templars"
              className="mt-4 inline-flex min-h-11 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-fg"
            >
              {home.templarCta}
            </Link>
          </article>
          <article className="rounded-xl bg-surface px-4 py-4 shadow-paper sm:px-5">
            <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">{home.briefKicker}</p>
            <p className="mt-2 text-sm leading-relaxed text-fg">{home.briefText}</p>
            <Link
              to="/brief"
              className="mt-4 inline-flex min-h-11 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-fg"
            >
              {home.briefCta}
            </Link>
          </article>
          <article className="rounded-xl bg-surface px-4 py-4 shadow-paper sm:px-5">
            <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">{home.rovoxKicker}</p>
            <p className="mt-2 text-sm leading-relaxed text-fg">{home.rovoxText}</p>
            <Link
              to="/rovox"
              className="mt-4 inline-flex min-h-11 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-fg"
            >
              {home.rovoxCta}
            </Link>
          </article>
        </section>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[16rem_1fr]">
          <aside className="no-print min-w-0 space-y-4 lg:sticky lg:top-6 lg:self-start">
            <details className="rounded-lg bg-surface px-4 py-3 shadow-paper lg:hidden">
              <summary className="flex min-h-11 cursor-pointer list-none items-center gap-3 font-display text-sm font-medium text-fg">
                {chrome.contents}
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
              {home.chronology}
            </h2>
            <p className="mb-2 text-article text-muted">{home.chronologyLead}</p>
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
                {home.references}
              </h2>
              <ol className="mt-6 space-y-4">
                {REFERENCES.map((reference) => (
                  <li id={`ref-${reference.n}`} key={reference.n} className="scroll-mt-24 text-sm leading-relaxed text-fg">
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
              <h2 className="font-display text-lg font-medium text-fg">{chrome.cite}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{CITATION}</p>
              <p className="mt-4 text-sm text-subtle">
                {home.llms}{" "}
                <a href="/llms.txt" className="text-primary underline underline-offset-4">
                  /llms.txt
                </a>
                .
              </p>
            </section>
          </article>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
