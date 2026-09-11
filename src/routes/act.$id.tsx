import { createFileRoute, notFound } from "@tanstack/react-router";
import { ChapterPlate } from "@/components/article/chapter-plate";
import { ChapterRail } from "@/components/article/chapter-rail";
import { ClockMap } from "@/components/article/clock-map";
import { EssaySearch } from "@/components/article/essay-search";
import { EtymologyFigure } from "@/components/article/etymology-figure";
import { ReadingProgress } from "@/components/article/reading-progress";
import { ScripturePull } from "@/components/article/scripture-pull";
import { SectionBody } from "@/components/article/section-body";
import { SiteFooter } from "@/components/article/site-footer";
import { SiteHeader } from "@/components/article/site-header";
import { HistoryTimeline } from "@/components/article/timeline";
import { CHAPTERS, sectionsForChapter } from "@/lib/chapters";
import { CHROME, useLang } from "@/lib/i18n";
import { CITATION, REFERENCES } from "@/lib/research";
import { APP_NAME } from "@/lib/site";

export const Route = createFileRoute("/act/$id")({
  component: ActPage,
  head: ({ params }) => {
    const chapter = CHAPTERS.find((item) => item.id === params.id);
    return {
      meta: [{ title: chapter ? `Act ${chapter.numeral} — ${APP_NAME}` : APP_NAME }],
    };
  },
});

function ActPage() {
  const { id } = Route.useParams();
  const chapter = CHAPTERS.find((item) => item.id === id);
  if (!chapter) throw notFound();

  const { lang } = useLang();
  const chrome = CHROME[lang];
  const home = chrome.home;
  const sections = sectionsForChapter(chapter);
  const showRefs = chapter.id === "four-clocks";

  return (
    <div className="bg-bg text-fg">
      <ReadingProgress />
      <SiteHeader />
      <ChapterPlate chapter={chapter} />

      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[13rem_1fr] lg:py-16">
        <aside className="no-print min-w-0 lg:sticky lg:top-6 lg:self-start">
          <details className="rounded-lg bg-surface px-4 py-3 shadow-paper lg:hidden">
            <summary className="flex min-h-11 cursor-pointer list-none items-center font-display text-sm font-medium text-fg">
              {lang === "es" ? "Actos" : "Acts"}
            </summary>
            <ChapterRail className="mt-3 pb-2" />
          </details>
          <div className="hidden lg:block">
            <ChapterRail />
          </div>
          {chapter.id === "not-kin" ? (
            <div className="mt-4 hidden lg:block">
              <EssaySearch />
            </div>
          ) : null}
        </aside>

        <article className="min-w-0 max-w-3xl">
          {chapter.id === "not-kin" ? (
            <>
              <EtymologyFigure />
              <ScripturePull query={lang === "es" ? "Juan 1:1-5" : "John 1:1-5"} />
            </>
          ) : null}
          {chapter.id === "record-gap" ? (
            <>
              <h2 className="mb-2 font-display text-2xl font-medium tracking-tight text-fg">{home.chronology}</h2>
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

          {showRefs ? (
            <section className="mt-16 border-t border-border pt-10" aria-labelledby="references-title">
              <h2 id="references-title" className="font-display text-2xl font-medium tracking-tight text-fg">
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
              <p className="mt-10 text-sm text-muted">{CITATION}</p>
            </section>
          ) : null}
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
