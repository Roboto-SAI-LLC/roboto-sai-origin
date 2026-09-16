import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { OmenWell } from "@/components/article/omen-well";
import { ReadingProgress } from "@/components/article/reading-progress";
import { SiteFooter } from "@/components/article/site-footer";
import { SiteHeader } from "@/components/article/site-header";
import { CHAPTERS } from "@/lib/chapters";
import { CHROME, useLang } from "@/lib/i18n";
import { CITATION, CITATION_ES, META } from "@/lib/research";
import { APP_NAME, AUTHOR, SITE_URL } from "@/lib/site";

const ACT_IDS = new Set(CHAPTERS.map((chapter) => chapter.id));

export const Route = createFileRoute("/")({
  validateSearch: (raw: Record<string, unknown>): { act?: string; n?: string } => {
    const act = typeof raw.act === "string" ? raw.act : undefined;
    const n = typeof raw.n === "string" ? raw.n : undefined;
    const search: { act?: string; n?: string } = {};
    if (act && ACT_IDS.has(act)) search.act = act;
    if (n && n.trim().length >= 2) search.n = n.trim().slice(0, 80);
    return search;
  },
  component: ResearchPage,
  head: () => ({
    meta: [
      { title: `${META.title} — ${APP_NAME}` },
      { name: "description", content: "Give a name. RobotOmen returns its migration, fate, and shadow. Labor Nominis." },
    ],
  }),
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: `${META.title}: ${META.subtitle}`,
  alternativeHeadline: META.subtitle,
  description: "An onomastic omen: draw a name and read the migration, fate, and shadow it carries.",
  datePublished: "2026-09-02",
  inLanguage: "en",
  author: { "@type": "Person", name: AUTHOR },
  publisher: { "@type": "Organization", name: "Roboto SAI" },
  url: SITE_URL,
  creditText: META.credit,
};

function ResearchPage() {
  const { lang } = useLang();
  const chrome = CHROME[lang];
  const { act, n } = Route.useSearch();
  const navigate = Route.useNavigate();

  useEffect(() => {
    if (act && ACT_IDS.has(act)) {
      void navigate({ to: "/act/$id", params: { id: act }, replace: true });
    }
  }, [act, navigate]);

  return (
    <div className="bg-bg text-fg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ReadingProgress />
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <OmenWell initial={n} />

        <p className="mt-14 font-display text-kicker tracking-kicker text-primary uppercase">
          {lang === "es" ? "El acta detrás del sorteo" : "The record behind the drawing"}
        </p>
        <ol className="mt-4 divide-y divide-border border-y border-border">
          {CHAPTERS.map((chapter) => (
            <li key={chapter.id}>
              <Link
                to="/act/$id"
                params={{ id: chapter.id }}
                className="flex gap-4 py-5 no-underline hover:bg-wash"
              >
                <span className="w-8 shrink-0 font-display text-sm text-primary">{chapter.numeral}</span>
                <span>
                  <span className="block font-display text-xl text-fg">{chapter.title[lang]}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">{chapter.dek[lang]}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <p className="mt-8">
          <Link
            to="/codex"
            className="inline-flex min-h-11 items-center font-display text-sm text-primary underline underline-offset-4"
          >
            {lang === "es" ? "Códice Villarreal — 1608 a 1999" : "Villarreal Codex — 1608 to 1999"}
          </Link>
        </p>

        <p className="mt-8 text-sm text-muted">{lang === "es" ? CITATION_ES : CITATION}</p>
        <p className="mt-3 text-sm text-subtle">
          {chrome.home.llms}{" "}
          <a href="/llms.txt" className="text-primary underline underline-offset-4">
            /llms.txt
          </a>
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
