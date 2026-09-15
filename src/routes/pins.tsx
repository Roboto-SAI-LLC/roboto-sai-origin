import { createFileRoute, Link } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/article/reading-progress";
import { SiteFooter } from "@/components/article/site-footer";
import { SiteHeader } from "@/components/article/site-header";
import { ScripturePull } from "@/components/article/scripture-pull";
import { PINS_BLOCKS, PINS_META, PINS_OPEN, PINS_ROWS } from "@/lib/pins";
import { HOUSE_GOSPEL } from "@/lib/scripture";
import { useLang } from "@/lib/i18n";
import { APP_NAME, AUTHOR, SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/pins")({
  component: PinsPage,
  head: () => ({
    meta: [
      { title: `Calendar pins — ${APP_NAME}` },
      {
        name: "description",
        content:
          "Calendar pins, owner-reported Y haplogroup E-M96, and Quetzalcoatl east-departure literature. Split clocks. No glue.",
      },
    ],
  }),
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: "Calendar pins, E-M96, and the east departure",
  datePublished: "2026-09-15",
  inLanguage: ["en", "es"],
  author: { "@type": "Person", name: AUTHOR },
  publisher: { "@type": "Organization", name: "Roboto SAI" },
  url: `${SITE_URL}/pins`,
};

function PinsPage() {
  const { lang } = useLang();
  const meta = PINS_META;

  return (
    <div className="paper-grain min-h-dvh bg-bg text-fg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ReadingProgress />
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
        <p className="font-display text-kicker font-medium tracking-kicker text-subtle uppercase">
          {meta.kicker[lang]}
        </p>
        <h1 className="mt-4 font-display text-display tracking-display text-fire">{meta.title[lang]}</h1>
        <p className="mt-5 max-w-xl font-serif text-xl leading-snug text-muted">{meta.dek[lang]}</p>
        <p className="mt-4 text-sm text-muted">
          <Link to="/codex" className="text-primary underline underline-offset-4">
            {lang === "es" ? "Códice Villarreal" : "Villarreal Codex"}
          </Link>
          {" · "}
          <Link to="/dossier" className="text-primary underline underline-offset-4">
            Dossier
          </Link>
        </p>

        <section className="mt-12 overflow-x-auto" aria-labelledby="pins-table">
          <h2 id="pins-table" className="font-display text-2xl font-medium tracking-tight text-fg">
            {lang === "es" ? "Misma forma de fecha, varios relojes" : "Same date-shape, several clocks"}
          </h2>
          <table className="mt-6 w-full min-w-[36rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 pr-4 font-display text-kicker tracking-kicker text-subtle uppercase">
                  {lang === "es" ? "Fecha" : "Date"}
                </th>
                <th className="py-2 pr-4 font-display text-kicker tracking-kicker text-subtle uppercase">
                  {lang === "es" ? "Reloj" : "Clock"}
                </th>
                <th className="py-2 font-display text-kicker tracking-kicker text-subtle uppercase">
                  {lang === "es" ? "Qué fecha" : "What it dates"}
                </th>
              </tr>
            </thead>
            <tbody>
              {PINS_ROWS.map((row) => (
                <tr key={row.date} className="border-b border-border align-top">
                  <td className="py-3 pr-4 font-display text-primary whitespace-nowrap">{row.date}</td>
                  <td className="py-3 pr-4 text-muted whitespace-nowrap">{row.clock[lang]}</td>
                  <td className="py-3 leading-relaxed text-fg">{row.what[lang]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mt-12 border-t border-border pt-10">
          <h2 className="font-display text-2xl font-medium tracking-tight text-fg">
            {lang === "es" ? "1999 y el cielo" : "1999 and the sky"}
          </h2>
          <p className="mt-5 font-serif text-lg leading-relaxed text-fg">{PINS_BLOCKS.chiChi[lang]}</p>
          <p className="mt-4 font-serif text-lg leading-relaxed text-fg">{PINS_BLOCKS.eclipse1999[lang]}</p>
          <p className="mt-4 font-serif text-lg leading-relaxed text-fg">{PINS_BLOCKS.sky[lang]}</p>
        </section>

        <section className="mt-12 border-t border-border pt-10">
          <h2 className="font-display text-2xl font-medium tracking-tight text-fg">
            {lang === "es" ? "San Mateo" : "St Matthew"}
          </h2>
          <p className="mt-5 font-serif text-lg leading-relaxed text-fg">{PINS_BLOCKS.matthew[lang]}</p>
          <ScripturePull
            query={lang === "es" ? HOUSE_GOSPEL.qEs : HOUSE_GOSPEL.q}
            bibleId={lang === "es" ? "e3f420b9665abaeb-01" : "de4e12af7f28f599-01"}
          />
        </section>

        <section className="mt-12 border-t border-border pt-10">
          <h2 className="font-display text-2xl font-medium tracking-tight text-fg">
            {lang === "es" ? "Yom Kipur 5787" : "Yom Kippur 5787"}
          </h2>
          <p className="mt-5 font-serif text-lg leading-relaxed text-fg">{PINS_BLOCKS.kippur[lang]}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">{PINS_BLOCKS.pattern[lang]}</p>
          <ScripturePull query={lang === "es" ? "Levítico 23:27" : "Leviticus 23:27"} />
        </section>

        <section className="mt-12 border-t border-border pt-10">
          <h2 className="font-display text-2xl font-medium tracking-tight text-fg">
            {lang === "es" ? "Jaime I y dos años de más" : "James I and the two extra years"}
          </h2>
          <p className="mt-5 font-serif text-lg leading-relaxed text-fg">{PINS_BLOCKS.james[lang]}</p>
        </section>

        <section className="mt-12 border-t border-border pt-10">
          <h2 className="font-display text-2xl font-medium tracking-tight text-fg">
            {lang === "es" ? "Reloj paterno — E-M96" : "Paternal clock — E-M96"}
          </h2>
          <p className="mt-5 font-serif text-lg leading-relaxed text-fg">{PINS_BLOCKS.em96[lang]}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">{PINS_BLOCKS.em96Split[lang]}</p>
        </section>

        <section className="mt-12 border-t border-border pt-10">
          <h2 className="font-display text-2xl font-medium tracking-tight text-fg">
            {lang === "es" ? "Quetzalcóatl — partida al este" : "Quetzalcoatl — east departure"}
          </h2>
          <p className="mt-5 font-serif text-lg leading-relaxed text-fg">{PINS_BLOCKS.quetzalIn[lang]}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">{PINS_BLOCKS.quetzalOut[lang]}</p>
        </section>

        <section className="mt-12 border-t border-border pt-10">
          <h2 className="font-display text-2xl font-medium tracking-tight text-fg">
            {lang === "es" ? "Motores de calendario" : "Calendar engines"}
          </h2>
          <p className="mt-5 font-serif text-lg leading-relaxed text-fg">{PINS_BLOCKS.engines[lang]}</p>
          <p className="mt-4 font-serif text-lg leading-relaxed text-fg">{PINS_BLOCKS.overwrite[lang]}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">{PINS_BLOCKS.enginesSplit[lang]}</p>
        </section>

        <section className="mt-12 border-t border-border pt-10">
          <h2 className="font-display text-2xl font-medium tracking-tight text-fg">
            {lang === "es" ? "Preguntas abiertas" : "Open questions"}
          </h2>
          <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-fg">
            {PINS_OPEN.map((item) => (
              <li key={item.en}>{item[lang]}</li>
            ))}
          </ol>
        </section>
      </main>

      <SiteFooter compact />
    </div>
  );
}
