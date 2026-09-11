import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { withBrandNames } from "@/components/article/brand-word";
import { ReadingProgress } from "@/components/article/reading-progress";
import { ScripturePull } from "@/components/article/scripture-pull";
import { SiteFooter } from "@/components/article/site-footer";
import { SiteHeader } from "@/components/article/site-header";
import { CHAPTERS } from "@/lib/chapters";
import { CHROME, useLang } from "@/lib/i18n";
import { CITATION, META } from "@/lib/research";
import { APP_NAME, AUTHOR, SITE_URL } from "@/lib/site";

const ACT_IDS = new Set(CHAPTERS.map((chapter) => chapter.id));

export const Route = createFileRoute("/")({
  validateSearch: (raw: Record<string, unknown>): { act?: string } => {
    const act = typeof raw.act === "string" ? raw.act : undefined;
    if (!act || !ACT_IDS.has(act)) return {};
    return { act };
  },
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
  author: { "@type": "Person", name: AUTHOR },
  contributor: { "@type": "Person", name: "a Copilot" },
  publisher: { "@type": "Organization", name: "Roboto SAI" },
  url: SITE_URL,
  creditText: META.credit,
};

function ResearchPage() {
  const { lang } = useLang();
  const chrome = CHROME[lang];
  const home = chrome.home;
  const { act } = Route.useSearch();
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
        <img src="/brand/mark.png" alt="" className="h-16 w-16 rounded-full object-cover" />
        <p className="mt-8 font-display text-kicker font-medium tracking-kicker text-primary uppercase">
          {chrome.series} · {META.sourceCount} {home.sources}
        </p>
        <h1 className="mt-4 font-display text-4xl tracking-display text-fg sm:text-6xl">
          {withBrandNames(home.title)}
        </h1>
        <p className="mt-5 font-serif text-2xl leading-snug text-muted">{home.subtitle}</p>
        <p className="mt-6 text-sm text-muted">
          {chrome.ui.by} {withBrandNames(META.credit)}
        </p>

        <ol className="mt-12 grid gap-3 sm:grid-cols-3">
          {home.findings.slice(0, 3).map((finding) => (
            <li key={finding.kicker} className="rounded-lg border border-border bg-surface px-4 py-4">
              <p className="font-display text-kicker tracking-kicker text-primary uppercase">{finding.kicker}</p>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-fg">{finding.text}</p>
            </li>
          ))}
        </ol>

        <ScripturePull query={lang === "es" ? "Juan 1:1-5" : "John 1:1-5"} />

        <ol className="mt-6 divide-y divide-border border-y border-border">
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

        <p className="mt-10 text-sm text-muted">{CITATION}</p>
        <p className="mt-3 text-sm text-subtle">
          {home.llms}{" "}
          <a href="/llms.txt" className="text-primary underline underline-offset-4">
            /llms.txt
          </a>
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
