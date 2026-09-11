import { createFileRoute } from "@tanstack/react-router";
import { withBrandNames } from "@/components/article/brand-word";
import { ClockMap } from "@/components/article/clock-map";
import { ChapterPlate } from "@/components/article/chapter-plate";
import { ChapterRail } from "@/components/article/chapter-rail";
import { EssaySearch } from "@/components/article/essay-search";
import { EtymologyFigure } from "@/components/article/etymology-figure";
import { ReadingProgress } from "@/components/article/reading-progress";
import { SectionBody } from "@/components/article/section-body";
import { SiteFooter } from "@/components/article/site-footer";
import { SiteHeader } from "@/components/article/site-header";
import { HistoryTimeline } from "@/components/article/timeline";
import { CHAPTERS, sectionsForChapter } from "@/lib/chapters";
import { CHROME, useLang } from "@/lib/i18n";
import { CITATION, META, REFERENCES } from "@/lib/research";
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
  author: { "@type": "Organization", name: "Roboto SAI" },
  contributor: { "@type": "Person", name: "a Copilot" },
  publisher: { "@type": "Organization", name: "Roboto SAI" },
  url: SITE_URL,
  creditText: META.credit,
};

function ResearchPage() {
  const { lang } = useLang();
  const chrome = CHROME[lang];
  const home = chrome.home;

  return (
    <div className="relative bg-bg text-fg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ReadingProgress />

      <a
        href="#not-kin"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2"
      >
        {chrome.skip}
      </a>

      <SiteHeader />

      <main>
        <section className="relative isolate min-h-[88svh] overflow-hidden bg-obsidian text-primary-fg">
          <img
            src="/brand/glow-wide.png"
            alt=""
            className="absolute inset-0 size-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/25" />
          <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-3xl flex-col justify-end px-4 py-16 sm:px-6 sm:py-24">
            <p className="font-display text-kicker font-medium tracking-kicker text-gold uppercase">
              {chrome.series} · {META.sourceCount} {home.sources}
            </p>
            <h1 className="mt-4 font-display text-4xl tracking-display text-primary-fg sm:text-6xl">
              {withBrandNames(home.title)}
            </h1>
            <p className="mt-5 max-w-xl text-xl leading-snug text-primary-fg/85 sm:text-2xl">{home.subtitle}</p>
            <p className="mt-6 text-sm text-primary-fg/70">
              {chrome.ui.by} {withBrandNames(META.credit)}
            </p>
            <ol className="mt-10 grid gap-3 sm:grid-cols-3">
              {home.findings.slice(0, 3).map((finding) => (
                <li key={finding.kicker}>
                  <p className="font-display text-kicker tracking-kicker text-gold uppercase">{finding.kicker}</p>
                  <p className="mt-1 text-sm leading-relaxed text-primary-fg/80">{finding.text}</p>
                </li>
              ))}
            </ol>
            <a
              href="#not-kin"
              className="mt-10 inline-flex min-h-11 w-fit items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-fg"
            >
              {lang === "es" ? "Empezar el acto I" : "Begin act I"}
            </a>
          </div>
        </section>

        {CHAPTERS.map((chapter, index) => {
          const sections = sectionsForChapter(chapter);
          return (
            <section key={chapter.id} aria-labelledby={chapter.id} className="bg-bg">
              <ChapterPlate chapter={chapter} />
              <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[13rem_1fr] lg:py-16">
                <aside className="no-print min-w-0 lg:sticky lg:top-6 lg:self-start">
                  {index === 0 ? (
                    <details className="rounded-lg bg-surface px-4 py-3 shadow-paper lg:hidden">
                      <summary className="flex min-h-11 cursor-pointer list-none items-center font-display text-sm font-medium text-fg">
                        {lang === "es" ? "Actos" : "Acts"}
                      </summary>
                      <ChapterRail className="mt-3 pb-2" />
                    </details>
                  ) : null}
                  <div className="hidden lg:block">
                    <ChapterRail />
                  </div>
                  {index === 0 ? (
                    <div className="mt-4 hidden lg:block">
                      <EssaySearch />
                    </div>
                  ) : null}
                </aside>
                <article className="min-w-0 max-w-3xl">
                  {chapter.id === "not-kin" ? <EtymologyFigure /> : null}
                  {chapter.id === "record-gap" ? (
                    <>
                      <h3 className="mb-2 font-display text-2xl font-medium tracking-tight text-fg">
                        {home.chronology}
                      </h3>
                      <p className="mb-4 text-article text-muted">{home.chronologyLead}</p>
                      <HistoryTimeline />
                    </>
                  ) : null}
                  {sections.map((section) => (
                    <div key={section.id} className="mt-12 first:mt-0">
                      <SectionBody section={section} />
                    </div>
                  ))}
                  {chapter.id === "villa-regalis" ? (
                    <div className="mt-12">
                      <ClockMap compact />
                    </div>
                  ) : null}
                </article>
              </div>
            </section>
          );
        })}

        <section
          id="references"
          className="mx-auto max-w-3xl px-4 py-16 sm:px-6"
          aria-labelledby="references-title"
        >
          <h2 id="references-title" className="font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl">
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
          <section className="mt-12 rounded-xl bg-surface px-5 py-5 shadow-paper">
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
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
