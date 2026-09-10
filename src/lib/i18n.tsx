import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "es";

const STORAGE_KEY = "rs-lang";

const LangContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
} | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "es") setLangState(saved);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang, ready]);

  const value = useMemo(
    () => ({
      lang,
      setLang: (next: Lang) => setLangState(next),
    }),
    [lang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}

export function pick<T>(lang: Lang, pair: { en: T; es: T }): T {
  return pair[lang];
}

export type NavItem = {
  to: "/" | "/atlas" | "/dossier" | "/lion" | "/templars" | "/brief";
  label: string;
};

export const CHROME = {
  en: {
    journal: "Roboto SAI Research",
    series: "Onomastics",
    date: "September 2026",
    skip: "Skip to essay",
    contents: "Contents",
    part: "Part",
    share: "Share",
    copyLink: "Copy link",
    copyCite: "Copy citation",
    copied: "Copied",
    cite: "Cite this page",
    englishBody: "",
    nav: [
      { to: "/", label: "Essay" },
      { to: "/atlas", label: "Atlas" },
      { to: "/dossier", label: "Dossier" },
      { to: "/lion", label: "Gur Aryeh" },
      { to: "/templars", label: "Templars" },
      { to: "/brief", label: "Brief" },
    ] satisfies NavItem[],
    home: {
      kicker: "A static research page",
      sources: "sources",
      newKicker: "New in this edition",
      newText:
        "A claim inspector that steelmans first, a clause-by-clause carta pobla, a Plana chronicle that keeps 1429 as a searched gap, four new chapters (XV–XVIII), and a Monterrey migration node on the atlas — hotel, ejido, surname density, no news cycle.",
      newCta: "Open the dossier",
      lionKicker: "Companion essay",
      lionText:
        "Gur Aryeh — Hebrew lion symbolism. Jacob’s blessing of Judah, six biblical names, the merkabah’s right-hand face, and how a tribal animal became a Jewish one.",
      lionCta: "Read Gur Aryeh",
      templarKicker: "Frontier cut",
      templarText:
        "Poor Knights of the Temple. Hugh of Payns to the pyre of Molay, then the Plana: neighbors at Xivert, not namers of Vila-real.",
      templarCta: "Read the Templars",
      briefKicker: "Spoken brief",
      briefText:
        "One page. Five speech tags. No citation numbers. English and Spanish, read by Leo.",
      briefCta: "Listen to the brief",
      chronology: "A brief chronology",
      chronologyLead:
        "Selected dates that thread Robot, Robert, and the Iberian case studies through the same historical line.",
      references: "References",
      llms: "Full text is on this page for human readers and for Grok. A plain-text brief is also at",
    },
    atlas: {
      kicker: "Interactive dossier · two clocks",
      title: "Network atlas",
      leadMonterrey:
        "A modern migration node: Villarreal saturating Monterrey, the Los Villarreales locality in Salinas Victoria, and La Mansión Villarreal in the centro. Building and gazetteer — not the news cycle.",
      leadNetwork:
        "People actually named in the Vila-real grants, the neighboring Temple, and the aljama — kept in three columns: in the record, adjacent, not in the record.",
      noteBefore: "Full argument is in the",
      essay: "essay",
      noteMid: ", parts IX and XIII–XIV. Claims, charter, and chronicle live in the",
      dossier: "dossier",
      noteAfter: ". The 1274 town and the Nuevo León landscape are separate clocks.",
      tabs: [
        { id: "monterrey", label: "Monterrey" },
        { id: "network", label: "1274 network" },
        { id: "ledger", label: "Record vs gap" },
        { id: "register", label: "Register" },
        { id: "glossary", label: "Glossary" },
      ],
    },
    dossier: {
      kicker: "Instruments · steelman, then split",
      title: "Dossier",
      lead: "Each claim is taken at full strength, then cut into what the acts say, what sits next to them, and what they do not carry. 1429 stays on the page as a searched gap. Monterrey is a later clock.",
      noteBefore: "Essay chapters XV–XVIII are in the",
      report: "full report",
      noteMid: ". People of 1269–1274 are in the",
      atlas: "network atlas",
      noteAfter: ".",
      tabs: [
        { id: "claims", label: "Claims" },
        { id: "charter", label: "Carta pobla" },
        { id: "chronicle", label: "Chronicle" },
        { id: "dna", label: "Three clocks" },
      ],
    },
    lion: {
      kicker: "A static research page",
      sources: "sources",
      skip: "Skip to essay",
      contents: "Contents",
      back: "Back to Robot & Robert",
      chronology: "A brief chronology",
      chronologyLead: "Selected hours of the same animal, from the blessing to Jerusalem’s seal.",
      references: "References",
      cite: "Cite this page",
      companion: "Companion essay:",
      companionTitle: "The Names Robot and Robert",
    },
  },
  es: {
    journal: "Roboto SAI Research",
    series: "Onomástica",
    date: "Septiembre de 2026",
    skip: "Saltar al ensayo",
    contents: "Índice",
    part: "Parte",
    share: "Compartir",
    copyLink: "Copiar enlace",
    copyCite: "Copiar cita",
    copied: "Copiado",
    cite: "Citar esta página",
    englishBody: "El ensayo, el atlas, el dossier y Gur Aryeh están en inglés. Templarios y la síntesis están en los dos idiomas.",
    nav: [
      { to: "/", label: "Ensayo" },
      { to: "/atlas", label: "Atlas" },
      { to: "/dossier", label: "Dossier" },
      { to: "/lion", label: "Gur Aryeh" },
      { to: "/templars", label: "Templarios" },
      { to: "/brief", label: "Síntesis" },
    ] satisfies NavItem[],
    home: {
      kicker: "Página de investigación",
      sources: "fuentes",
      newKicker: "Nuevo en esta edición",
      newText:
        "Un inspector de afirmaciones que primero hace el steelman, una carta puebla cláusula por cláusula, una crónica de la Plana que deja 1429 como hueco buscado, cuatro capítulos nuevos (XV–XVIII), y un nodo de migración en Monterrey en el atlas — hotel, ejido, densidad del apellido, sin ciclo de noticias.",
      newCta: "Abrir el dossier",
      lionKicker: "Ensayo compañero",
      lionText:
        "Gur Aryeh — el león en hebreo. La bendición de Jacob a Judá, seis nombres bíblicos, el rostro derecho de la merkabá, y cómo un animal tribal se volvió un animal judío.",
      lionCta: "Leer Gur Aryeh",
      templarKicker: "Corte de frontera",
      templarText:
        "Pobres caballeros del Templo. De Hugo de Payns a la hoguera de Molay, luego la Plana: vecinos en Xivert, no nominadores de Vila-real.",
      templarCta: "Leer los templarios",
      briefKicker: "Síntesis hablada",
      briefText:
        "Una página. Cinco etiquetas de voz. Sin números de cita. Inglés y español, leídos por Leo.",
      briefCta: "Escuchar la síntesis",
      chronology: "Una cronología breve",
      chronologyLead:
        "Fechas que atan Robot, Robert y los casos ibéricos a la misma línea histórica.",
      references: "Fuentes",
      llms: "El texto completo está en esta página para lectores humanos y para Grok. Un breve en texto plano también está en",
    },
    atlas: {
      kicker: "Dossier interactivo · dos relojes",
      title: "Atlas de red",
      leadMonterrey:
        "Un nodo moderno de migración: Villarreal saturando Monterrey, la localidad Los Villarreales en Salinas Victoria, y La Mansión Villarreal en el centro. Edificio y gazetero — no el ciclo de noticias.",
      leadNetwork:
        "Personas realmente nombradas en las mercedes de Vila-real, el Templo vecino y la aljama — en tres columnas: en el acta, al lado, no en el acta.",
      noteBefore: "El argumento completo está en el",
      essay: "ensayo",
      noteMid: ", partes IX y XIII–XIV. Afirmaciones, carta y crónica viven en el",
      dossier: "dossier",
      noteAfter: ". La villa de 1274 y el paisaje de Nuevo León son relojes distintos.",
      tabs: [
        { id: "monterrey", label: "Monterrey" },
        { id: "network", label: "Red 1274" },
        { id: "ledger", label: "Acta y hueco" },
        { id: "register", label: "Registro" },
        { id: "glossary", label: "Glosario" },
      ],
    },
    dossier: {
      kicker: "Instrumentos · steelman, luego cortar",
      title: "Dossier",
      lead: "Cada afirmación se toma a plena fuerza, luego se corta en lo que dicen las actas, lo que se sienta al lado, y lo que no cargan. 1429 queda en la página como hueco buscado. Monterrey es un reloj posterior.",
      noteBefore: "Los capítulos XV–XVIII del ensayo están en el",
      report: "informe completo",
      noteMid: ". Las personas de 1269–1274 están en el",
      atlas: "atlas de red",
      noteAfter: ".",
      tabs: [
        { id: "claims", label: "Afirmaciones" },
        { id: "charter", label: "Carta puebla" },
        { id: "chronicle", label: "Crónica" },
        { id: "dna", label: "Tres relojes" },
      ],
    },
    lion: {
      kicker: "Página de investigación",
      sources: "fuentes",
      skip: "Saltar al ensayo",
      contents: "Índice",
      back: "Volver a Robot y Robert",
      chronology: "Una cronología breve",
      chronologyLead: "Horas elegidas del mismo animal, de la bendición al sello de Jerusalén.",
      references: "Fuentes",
      cite: "Citar esta página",
      companion: "Ensayo compañero:",
      companionTitle: "Los nombres Robot y Robert",
    },
  },
} as const;
