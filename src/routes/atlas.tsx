import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { GlossaryList } from "@/components/article/glossary-list";
import { MonterreyAtlas } from "@/components/article/monterrey-atlas";
import { NameRegister } from "@/components/article/name-register";
import { NetworkAtlas } from "@/components/article/network-atlas";
import { ReadingProgress } from "@/components/article/reading-progress";
import { RecordLedger } from "@/components/article/record-ledger";
import { SiteHeader } from "@/components/article/site-header";
import { META } from "@/lib/research";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/atlas")({
  component: AtlasPage,
  head: () => ({
    meta: [
      { title: `Network atlas — ${META.title}` },
      {
        name: "description",
        content:
          "Prosopographical atlas of people named in the 1269–1274 Vila-real grants, and a later Monterrey migration node: surname density, Los Villarreales, La Mansión Villarreal.",
      },
    ],
  }),
});

const TABS = [
  { id: "monterrey", label: "Monterrey" },
  { id: "network", label: "1274 network" },
  { id: "ledger", label: "Record vs gap" },
  { id: "register", label: "Register" },
  { id: "glossary", label: "Glossary" },
] as const;

type TabId = (typeof TABS)[number]["id"];

function AtlasPage() {
  const [tab, setTab] = useState<TabId>("monterrey");

  return (
    <div className="paper-grain min-h-dvh bg-bg text-fg">
      <ReadingProgress />
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="font-display text-kicker font-medium tracking-kicker text-subtle uppercase">
          Interactive dossier · two clocks
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-display font-medium tracking-display text-fg sm:text-display-lg">
          Network atlas
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {tab === "monterrey"
            ? "A modern migration node: Villarreal saturating Monterrey, the Los Villarreales locality in Salinas Victoria, and La Mansión Villarreal in the centro. Building and gazetteer — not the news cycle."
            : "People actually named in the Vila-real grants, the neighboring Temple, and the aljama — kept in three columns: in the record, adjacent, not in the record."}
        </p>
        <p className="mt-4 text-sm text-muted">
          Full argument is in the{" "}
          <Link to="/" className="text-primary underline underline-offset-4">
            essay
          </Link>
          , parts IX and XIII–XIV. Claims, charter, and chronicle live in the{" "}
          <Link to="/dossier" className="text-primary underline underline-offset-4">
            dossier
          </Link>
          . The 1274 town and the Nuevo León landscape are separate clocks.
        </p>

        <div className="no-print mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Atlas views">
          {TABS.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={tab === item.id}
              onClick={() => setTab(item.id)}
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

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>{META.credit}</p>
          <p>Onomastics · {META.date}</p>
        </div>
      </footer>
    </div>
  );
}
