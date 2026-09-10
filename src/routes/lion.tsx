import { createFileRoute, Link } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/article/reading-progress";
import { SiteFooter } from "@/components/article/site-footer";
import { SiteHeader } from "@/components/article/site-header";
import { TableOfContents } from "@/components/article/table-of-contents";
import { BlessingReader } from "@/components/lion/blessing-reader";
import { DualRegister } from "@/components/lion/dual-register";
import { LionLexicon } from "@/components/lion/lexicon";
import { Merkabah } from "@/components/lion/merkabah";
import { LionNameTable } from "@/components/lion/name-table";
import { PhotoFigure } from "@/components/lion/photo-figure";
import { LionSectionBody } from "@/components/lion/section-body";
import { LionTimeline } from "@/components/lion/timeline";
import { CHROME, useLang } from "@/lib/i18n";
import {
  LION_CITATION,
  LION_FINDINGS,
  LION_META,
  LION_REFERENCES,
  LION_SECTIONS,
  LION_TOC,
} from "@/lib/lion";
import { APP_NAME, SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/lion")({
  component: LionPage,
  head: () => ({
    meta: [
      { title: `${LION_META.title} — ${APP_NAME}` },
      { name: "description", content: LION_META.description },
    ],
  }),
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: `${LION_META.title}: ${LION_META.subtitle}`,
  alternativeHeadline: LION_META.subtitle,
  description: LION_META.description,
  datePublished: "2026-09-09",
  inLanguage: "en",
  author: { "@type": "Organization", name: "Roboto SAI" },
  contributor: { "@type": "Person", name: "a Copilot" },
  publisher: { "@type": "Organization", name: "Roboto SAI" },
  url: `${SITE_URL}/lion`,
  creditText: LION_META.credit,
  keywords: [
    "Lion of Judah",
    "Gur Aryeh",
    "Genesis 49:9",
    "aryeh",
    "lavi",
    "kefir",
    "merkabah",
    "Ariel",
    "onomastics",
    "Hebrew",
  ],
};

function LionPage() {
  const byId = (id: string) => LION_SECTIONS.find((section) => section.id === id);
  const { lang } = useLang();
  const chrome = CHROME[lang];
  const copy = chrome.lion;

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
        {copy.skip}
      </a>

      <SiteHeader />

      <main>
        <section className="mx-auto max-w-6xl px-4 pt-10 pb-6 sm:px-6 sm:pt-16">
          <p className="stagger-in font-display text-kicker font-medium tracking-kicker text-subtle uppercase">
            {copy.kicker} · {LION_META.sourceCount} {copy.sources}
          </p>
          <h1 className="stagger-in mt-4 max-w-4xl font-display text-display font-medium tracking-display text-fg sm:text-display-lg">
            {LION_META.title}
          </h1>
          <p className="stagger-in mt-5 max-w-2xl font-display text-xl leading-snug text-muted sm:text-2xl">
            {LION_META.subtitle}
          </p>
          <p className="stagger-in mt-6 text-sm text-muted">
            {chrome.ui.by} <span className="text-fg">{LION_META.credit}</span>
          </p>
          {chrome.englishBody ? (
            <p className="stagger-in mt-4 max-w-2xl rounded-lg bg-surface px-4 py-3 text-sm leading-relaxed text-muted shadow-paper">
              {chrome.englishBody}
            </p>
          ) : null}
        </section>

        <section
          aria-label={chrome.ui.findings}
          className="mx-auto grid max-w-6xl gap-3 px-4 pb-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4"
        >
          {LION_FINDINGS.map((finding) => (
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
              <summary className="flex min-h-11 cursor-pointer list-none items-center gap-3 font-display text-sm font-medium text-fg">
                {copy.contents}
              </summary>
              <TableOfContents items={LION_TOC} className="mt-3 pb-2" />
            </details>
            <div className="hidden lg:block">
              <TableOfContents items={LION_TOC} />
            </div>
            <Link
              to="/"
              className="hidden min-h-11 items-center rounded-md bg-surface px-3.5 text-sm font-medium text-fg shadow-paper hover:bg-wash lg:inline-flex"
            >
              {copy.back}
            </Link>
          </aside>

          <article id="article" className="min-w-0 max-w-3xl">
            {byId("introduction") ? <LionSectionBody section={byId("introduction")!} /> : null}

            <PhotoFigure
              src="/lion/crouching.jpg"
              alt="An Asiatic lion crouching on a limestone ridge at dusk."
              caption="The crouch in Genesis 49:9: risen from prey, at rest, not to be roused."
            />

            {byId("verse") ? (
              <div className="mt-16 border-t border-border pt-12">
                <LionSectionBody section={byId("verse")!} />
                <BlessingReader />
              </div>
            ) : null}

            {byId("names") ? (
              <div className="mt-16 border-t border-border pt-12">
                <LionSectionBody section={byId("names")!} />
                <LionLexicon />
              </div>
            ) : null}

            {byId("animal") ? (
              <div className="mt-16 border-t border-border pt-12">
                <LionSectionBody section={byId("animal")!} />
                <PhotoFigure
                  src="/lion/cub.jpg"
                  alt="An Asiatic lion cub lying in dry grass at golden hour."
                  caption="Gur: the whelp. Jacob starts here, not with the old male."
                />
                <h2 className="mt-4 mb-2 font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl">
                  {copy.chronology}
                </h2>
                <p className="mb-2 text-article text-muted">{copy.chronologyLead}</p>
                <LionTimeline />
              </div>
            ) : null}

            {byId("registers") ? (
              <div className="mt-16 border-t border-border pt-12">
                <LionSectionBody section={byId("registers")!} />
                <DualRegister />
              </div>
            ) : null}

            {byId("temple") ? (
              <div className="mt-16 border-t border-border pt-12">
                <LionSectionBody section={byId("temple")!} />
                <Merkabah />
              </div>
            ) : null}

            {byId("visual") ? (
              <div className="mt-16 border-t border-border pt-12">
                <LionSectionBody section={byId("visual")!} />
                <PhotoFigure
                  src="/lion/ark.jpg"
                  alt="Two carved limestone lions flanking a wooden Torah ark in an old synagogue."
                  caption="The lasting visual type: a pair of lions guarding the ark. No letters on this one; the animal does the naming."
                />
              </div>
            ) : null}

            {byId("later") ? (
              <div className="mt-16 border-t border-border pt-12">
                <LionSectionBody section={byId("later")!} />
              </div>
            ) : null}

            {byId("people") ? (
              <div className="mt-16 border-t border-border pt-12">
                <LionSectionBody section={byId("people")!} />
                <LionNameTable />
              </div>
            ) : null}

            <section
              id="references"
              aria-labelledby="references"
              className="mt-16 scroll-mt-24 border-t border-border pt-12"
            >
              <h2 className="font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl">
                {copy.references}
              </h2>
              <ol className="mt-6 space-y-4">
                {LION_REFERENCES.map((reference) => (
                  <li
                    id={`lion-ref-${reference.n}`}
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
              <h2 className="font-display text-lg font-medium text-fg">{copy.cite}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{LION_CITATION}</p>
              <p className="mt-4 text-sm text-subtle">
                {copy.companion}{" "}
                <Link to="/" className="text-primary underline underline-offset-4">
                  {copy.companionTitle}
                </Link>
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
