import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CharterReader } from "@/components/article/charter-reader";
import { ChronicleMap } from "@/components/article/chronicle-map";
import { ClaimInspector } from "@/components/article/claim-inspector";
import { DnaClocks } from "@/components/article/dna-clocks";
import { ReadingProgress } from "@/components/article/reading-progress";
import { SiteFooter } from "@/components/article/site-footer";
import { SiteHeader } from "@/components/article/site-header";
import { CHROME, useLang } from "@/lib/i18n";
import { APP_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dossier")({
  component: DossierPage,
  head: () => ({
    meta: [
      { title: `Dossier — ${APP_NAME}` },
      {
        name: "description",
        content:
          "Claim inspector, carta pobla close reading, Plana chronicle, four clocks, and a living identity claim that keeps Indigenous American ancestry on its own clock.",
      },
    ],
  }),
});

type TabId = "claims" | "charter" | "chronicle" | "dna";

function DossierPage() {
  const [tab, setTab] = useState<TabId>("claims");
  const { lang } = useLang();
  const chrome = CHROME[lang];
  const copy = chrome.dossier;

  return (
    <div className="paper-grain min-h-dvh bg-bg text-fg">
      <ReadingProgress />
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="font-display text-kicker font-medium tracking-kicker text-subtle uppercase">{copy.kicker}</p>
        <h1 className="mt-4 max-w-3xl font-display text-display tracking-display text-fire sm:text-display-lg">
          {copy.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{copy.lead}</p>
        <p className="mt-4 text-sm text-muted">
          {copy.noteBefore}{" "}
          <Link to="/" className="text-primary underline underline-offset-4">
            {copy.report}
          </Link>
          {copy.noteMid}{" "}
          <Link to="/atlas" className="text-primary underline underline-offset-4">
            {copy.atlas}
          </Link>
          {copy.noteAfter}
        </p>
        {chrome.englishBody ? (
          <p className="mt-3 max-w-2xl rounded-lg bg-surface px-4 py-3 text-sm leading-relaxed text-muted shadow-paper">
            {chrome.englishBody}
          </p>
        ) : null}

        <div className="no-print mt-8 flex flex-wrap gap-2" role="tablist" aria-label={copy.title}>
          {copy.tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={tab === item.id}
              onClick={() => setTab(item.id as TabId)}
              className={cn(
                "min-h-11 rounded-md px-3.5 text-sm font-medium transition-colors duration-150",
                tab === item.id ? "bg-primary text-primary-fg" : "bg-surface text-fg shadow-paper hover:bg-wash",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <section className="mt-8" role="tabpanel">
          {tab === "claims" ? <ClaimInspector /> : null}
          {tab === "charter" ? <CharterReader /> : null}
          {tab === "chronicle" ? <ChronicleMap /> : null}
          {tab === "dna" ? <DnaClocks /> : null}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
