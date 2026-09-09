import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CharterReader } from "@/components/article/charter-reader";
import { ChronicleMap } from "@/components/article/chronicle-map";
import { ClaimInspector } from "@/components/article/claim-inspector";
import { DnaClocks } from "@/components/article/dna-clocks";
import { ReadingProgress } from "@/components/article/reading-progress";
import { SiteHeader } from "@/components/article/site-header";
import { META } from "@/lib/research";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dossier")({
  component: DossierPage,
  head: () => ({
    meta: [
      { title: `Dossier — ${META.title}` },
      {
        name: "description",
        content:
          "Claim inspector, carta pobla close reading, Plana chronicle, and DNA-versus-document clocks for the 1274 Vila-real case.",
      },
    ],
  }),
});

const TABS = [
  { id: "claims", label: "Claims" },
  { id: "charter", label: "Carta pobla" },
  { id: "chronicle", label: "Chronicle" },
  { id: "dna", label: "Three clocks" },
] as const;

type TabId = (typeof TABS)[number]["id"];

function DossierPage() {
  const [tab, setTab] = useState<TabId>("claims");

  return (
    <div className="paper-grain min-h-dvh bg-bg text-fg">
      <ReadingProgress />
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="font-display text-kicker font-medium tracking-kicker text-subtle uppercase">
          Instruments · steelman, then split
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-display font-medium tracking-display text-fg sm:text-display-lg">
          Dossier
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Each claim is taken at full strength, then cut into what the acts say, what sits next to them, and
          what they do not carry. 1429 stays on the page as a searched gap. Monterrey is a later clock.
        </p>
        <p className="mt-4 text-sm text-muted">
          Essay chapters XV–XVIII are in the{" "}
          <Link to="/" className="text-primary underline underline-offset-4">
            full report
          </Link>
          . People of 1269–1274 are in the{" "}
          <Link to="/atlas" className="text-primary underline underline-offset-4">
            network atlas
          </Link>
          .
        </p>

        <div className="no-print mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Dossier views">
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
          {tab === "claims" ? <ClaimInspector /> : null}
          {tab === "charter" ? <CharterReader /> : null}
          {tab === "chronicle" ? <ChronicleMap /> : null}
          {tab === "dna" ? <DnaClocks /> : null}
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
