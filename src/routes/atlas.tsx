import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { GlossaryList } from "@/components/article/glossary-list";
import { MonterreyAtlas } from "@/components/article/monterrey-atlas";
import { NameRegister } from "@/components/article/name-register";
import { NetworkAtlas } from "@/components/article/network-atlas";
import { ReadingProgress } from "@/components/article/reading-progress";
import { RecordLedger } from "@/components/article/record-ledger";
import { SiteFooter } from "@/components/article/site-footer";
import { SiteHeader } from "@/components/article/site-header";
import { CHROME, useLang } from "@/lib/i18n";
import { APP_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/atlas")({
  component: AtlasPage,
  head: () => ({
    meta: [
      { title: `Network atlas — ${APP_NAME}` },
      {
        name: "description",
        content:
          "Prosopographical atlas of people named in the 1269–1274 Vila-real grants, and a later Monterrey migration node: surname density, Los Villarreales, La Mansión Villarreal.",
      },
    ],
  }),
});

type TabId = "monterrey" | "network" | "ledger" | "register" | "glossary";

function AtlasPage() {
  const [tab, setTab] = useState<TabId>("monterrey");
  const { lang } = useLang();
  const chrome = CHROME[lang];
  const copy = chrome.atlas;

  return (
    <div className="paper-grain min-h-dvh bg-bg text-fg">
      <ReadingProgress />
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="font-display text-kicker font-medium tracking-kicker text-subtle uppercase">{copy.kicker}</p>
        <h1 className="mt-4 max-w-3xl font-display text-display font-bold italic tracking-display text-fire sm:text-display-lg">
          {copy.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {tab === "monterrey" ? copy.leadMonterrey : copy.leadNetwork}
        </p>
        <p className="mt-4 text-sm text-muted">
          {copy.noteBefore}{" "}
          <Link to="/" className="text-primary underline underline-offset-4">
            {copy.essay}
          </Link>
          {copy.noteMid}{" "}
          <Link to="/dossier" className="text-primary underline underline-offset-4">
            {copy.dossier}
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
          {tab === "monterrey" ? <MonterreyAtlas /> : null}
          {tab === "network" ? <NetworkAtlas /> : null}
          {tab === "ledger" ? <RecordLedger /> : null}
          {tab === "register" ? <NameRegister /> : null}
          {tab === "glossary" ? <GlossaryList /> : null}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
