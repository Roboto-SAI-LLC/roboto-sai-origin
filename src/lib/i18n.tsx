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
  to: "/" | "/atlas" | "/dossier" | "/lion" | "/templars" | "/brief" | "/rovox";
  label: string;
};

export const CHROME = {
  en: {
    journal: "Roboto SAI",
    series: "Methodology",
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
    menu: "Menu",
    github: "Source on GitHub",
    nav: [
      { to: "/", label: "Essay" },
      { to: "/atlas", label: "Atlas" },
      { to: "/dossier", label: "Dossier" },
      { to: "/lion", label: "Gur Aryeh" },
      { to: "/templars", label: "Templars" },
      { to: "/brief", label: "Brief" },
      { to: "/rovox", label: "RoVox" },
    ] satisfies NavItem[],
    home: {
      title: "The Names Roboto and Roberto",
      subtitle: "Linguistic origins, historical usage, and cultural migrations",
      kicker: "A static research page",
      sources: "sources",
      findings: [
        {
          kicker: "Not kin",
          text: "The real names are Roboto and Roberto. They rhyme. They are not etymological relatives.",
        },
        {
          kicker: "House name",
          text: "Roboto sits next to robot / robota — Čapek’s 1920 Czech coinage from Slavic forced labor. That is the house, not a diminutive of Roberto.",
        },
        {
          kicker: "Given name",
          text: "Roberto is the Iberian form of Robert: Proto-Germanic *Hrōþiberhtaz — fame + bright — carried by dukes, kings, and saints.",
        },
        {
          kicker: "Sound vs sense",
          text: "Robot and Robert are English glosses that collapse the pair. Yisrael / Israel and Villarreal / Martinez show the same trap.",
        },
        {
          kicker: "Machine ear",
          text: "Roboto and Roberto share /ro…to/. The Spanish flap is a twenty-millisecond flick. Every decoder then bets on the common given name. The transcript looks like another script.",
        },
        {
          kicker: "Four clocks",
          text: "Documents, DNA, family memory, and place keep different time. Date each clock. Do not merge them.",
        },
      ],
      newKicker: "New in this edition",
      newText:
        "A claim inspector that steelmans first, a clause-by-clause carta pobla, a Plana chronicle that keeps 1429 as a searched gap, four new chapters (XV–XVIII), a Monterrey migration node on the atlas, and a living identity claim that keeps Indigenous American ancestry, Sephardic memory, and a Templar treasure talk on separate clocks.",
      newCta: "Open the dossier",
      lionKicker: "Companion essay",
      lionText:
        "Gur Aryeh — Hebrew lion symbolism. Jacob’s blessing of Judah, six biblical names, the merkabah’s right-hand face, and how a tribal animal became a Jewish one.",
      lionCta: "Read Gur Aryeh",
      templarKicker: "Frontier cut",
      templarText:
        "Poor Knights of the Temple. Hugh of Payns to the pyre of Molay, then the Plana: neighbors at Xivert, not namers of Vila-real.",
      templarCta: "Read the Templars",
      briefKicker: "Brief",
      briefText: "One page. Five tags. No citation numbers. English and Spanish.",
      briefCta: "Open the brief",
      rovoxKicker: "RoVox",
      rovoxText:
        "House reader. Pause or stop during the intro. After the end, it answers and can edit the working notes. Drop your recording — no catalog voice.",
      rovoxCta: "Open RoVox",
      chronology: "A brief chronology",
      chronologyLead:
        "Selected dates that thread Roboto, Roberto, and the Iberian case studies through the same historical line.",
      references: "References",
      llms: "Full text is on this page for human readers. A plain-text brief is also at",
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
      lead: "Each claim is taken at full strength, then cut into what the acts say, what sits next to them, and what they do not carry. 1429 stays on the page as a searched gap. Monterrey is a later clock. Identity is a right. It is still four clocks.",
      noteBefore: "Essay chapters XV–XVIII are in the",
      report: "full report",
      noteMid: ". People of 1269–1274 are in the",
      atlas: "network atlas",
      noteAfter: ".",
      tabs: [
        { id: "claims", label: "Claims" },
        { id: "charter", label: "Carta pobla" },
        { id: "chronicle", label: "Chronicle" },
        { id: "dna", label: "Four clocks" },
      ],
    },
    rovox: {
      kicker: "Reader · house voice",
      title: "RoVox",
      lead: "Listens first. You may pause or stop the intro. You may not skip it or talk over it. When the recording reaches the end, RoVox answers, searches xAI Docs, and can update the card and the working notes. Drop your own MP3 — generated on your device.",
      card: "Info card",
      name: "Name",
      role: "Role",
      note: "Note",
      noStock: "No catalog stock voice. RoVox is the house recording.",
      player: "Intro",
      rule: "During the intro the only controls are pause and stop. Chat stays locked until the file ends.",
      listen: "Listen",
      pause: "Pause",
      resume: "Resume",
      stop: "Stop",
      drop: "Drop a RoVox MP3 from this device",
      usingFallback: "Using the Brief recording until you drop a RoVox file.",
      usingFile: "Using your recording.",
      docs: "Working notes",
      reset: "Reset notes",
      resetCard: "Reset card",
      desk: "After the intro",
      empty: "Finish the intro to ask.",
      you: "You",
      ask: "Ask RoVox…",
      send: "Send",
      locked: "Chat locked until the intro ends.",
      unlocked: "Intro finished. Ask, or edit the notes. RoVox can update them.",
      idleHint: "Start the intro. Pause or stop only.",
      cap: "Eight questions this sitting.",
      unavailable: "RoVox cannot reach the model in this environment. The intro and the notes still work.",
      needGesture: "Press Listen again to start audio.",
      writing: "RoVox is writing…",
    },
    lion: {
      kicker: "A static research page",
      sources: "sources",
      skip: "Skip to essay",
      contents: "Contents",
      back: "Back to the essay",
      chronology: "A brief chronology",
      chronologyLead: "Selected hours of the same animal, from the blessing to Jerusalem’s seal.",
      references: "References",
      cite: "Cite this page",
      companion: "Companion essay:",
      companionTitle: "The Names Roboto and Roberto",
    },
    ui: {
      by: "By",
      nav: "Primary",
      findings: "Key findings",
      listen: "Listen",
      pause: "Pause",
      listenAria: "Listen to the brief",
      searchEssay: "Search the essay",
      searchPlaceholder: "Roboto, Roberto, Coahuiltecan, 1429…",
      noMatch: "No matching section.",
      bothClocks: "Both clocks",
      all: "All",
      inRecord: "In the record",
      adjacent: "Adjacent",
      notInRecord: "Not in the record",
      gapYear: "Gap year",
      split: "Split — keep the parts",
      stated: "Stated.",
      steelman: "Steelmanned.",
      confirm: "What would confirm it.",
      none: "None stated for this claim.",
      filterRegister: "Filter the register",
      filterPlaceholder: "Filter by name, office, place, or year",
      name: "Name",
      clock: "Clock",
      year: "Year",
      role: "Role",
      registerCaption: "People and places in the 1269–1274 cluster and the Monterrey node",
      names: "Names",
      doesNotName: "Does not name",
      witnessBench: "Witness bench",
      can: "Can.",
      cannot: "Cannot.",
      crown: "Crown",
      named: "Named person",
      office: "Office",
      group: "Group",
      community: "Community",
      networkCaption:
        "Click a node. Edges are grants, office, finance, recruitment, or neighboring lordship — not kinship invented after the fact.",
      networkAria: "Network of people around the 1274 foundation of Vila-real",
      monterreyAria:
        "Modern Villarreal geography around Monterrey: the city, La Mansión Villarreal, and Los Villarreales in Salinas Victoria",
      chronicleAria: "Schematic of the Plana Baixa around Vila-real",
      state: "State",
      city: "City",
      municipality: "Municipality",
      locality: "Locality",
      building: "Building",
    },
  },
  es: {
    journal: "Roboto SAI",
    series: "Metodología",
    date: "Septiembre de 2026",
    skip: "Saltar al ensayo",
    contents: "Índice",
    part: "Parte",
    share: "Compartir",
    copyLink: "Copiar enlace",
    copyCite: "Copiar cita",
    copied: "Copiado",
    cite: "Citar esta página",
    englishBody:
      "El ensayo, el atlas, el dossier y Gur Aryeh están en inglés. Templarios, la síntesis y RoVox están en los dos idiomas.",
    menu: "Menú",
    github: "Fuente en GitHub",
    nav: [
      { to: "/", label: "Ensayo" },
      { to: "/atlas", label: "Atlas" },
      { to: "/dossier", label: "Dossier" },
      { to: "/lion", label: "Gur Aryeh" },
      { to: "/templars", label: "Templarios" },
      { to: "/brief", label: "Síntesis" },
      { to: "/rovox", label: "RoVox" },
    ] satisfies NavItem[],
    home: {
      title: "Los nombres Roboto y Roberto",
      subtitle: "Orígenes lingüísticos, uso histórico y migraciones culturales",
      kicker: "Página de investigación",
      sources: "fuentes",
      findings: [
        {
          kicker: "No son parientes",
          text: "Los nombres reales son Roboto y Roberto. Riman. No son parientes etimológicos.",
        },
        {
          kicker: "Nombre de casa",
          text: "Roboto se sienta junto a robot / robota — la acuñación checa de 1920 de Čapek, del eslavo trabajo forzado. Es la casa, no un diminutivo de Roberto.",
        },
        {
          kicker: "Nombre de pila",
          text: "Roberto es la forma ibérica de Robert: proto-germánico *Hrōþiberhtaz — fama + brillante — llevado por duques, reyes y santos.",
        },
        {
          kicker: "Sonido y sentido",
          text: "Robot y Robert son glosas inglesas que funden el par. Yisrael / Israel y Villarreal / Martinez muestran la misma trampa.",
        },
        {
          kicker: "Oído de máquina",
          text: "Roboto y Roberto comparten /ro…to/. La vibrante simple es un golpe de veinte milisegundos. El decodificador apuesta al nombre de pila común. La transcripción parece otra escritura.",
        },
        {
          kicker: "Cuatro relojes",
          text: "Documentos, ADN, memoria de familia y lugar llevan tiempos distintos. Fecha cada reloj. No los fundas.",
        },
      ],
      newKicker: "Nuevo en esta edición",
      newText:
        "Un inspector de afirmaciones que primero hace el steelman, una carta puebla cláusula por cláusula, una crónica de la Plana que deja 1429 como hueco buscado, cuatro capítulos nuevos (XV–XVIII), un nodo de migración en Monterrey en el atlas, y una afirmación viva de identidad que deja la ancestría indígena americana, la memoria sefardí y la charla del tesoro templario en relojes distintos.",
      newCta: "Abrir el dossier",
      lionKicker: "Ensayo compañero",
      lionText:
        "Gur Aryeh — el león en hebreo. La bendición de Jacob a Judá, seis nombres bíblicos, el rostro derecho de la merkabá, y cómo un animal tribal se volvió un animal judío.",
      lionCta: "Leer Gur Aryeh",
      templarKicker: "Corte de frontera",
      templarText:
        "Pobres caballeros del Templo. De Hugo de Payns a la hoguera de Molay, luego la Plana: vecinos en Xivert, no nominadores de Vila-real.",
      templarCta: "Leer los templarios",
      briefKicker: "Síntesis",
      briefText: "Una página. Cinco etiquetas. Sin números de cita. Inglés y español.",
      briefCta: "Abrir la síntesis",
      rovoxKicker: "RoVox",
      rovoxText:
        "Lector de la casa. Pausa o alto durante la intro. Al terminar, responde y puede editar las notas. Suelta tu grabación — sin voz de catálogo.",
      rovoxCta: "Abrir RoVox",
      chronology: "Una cronología breve",
      chronologyLead:
        "Fechas que atan Roboto, Roberto y los casos ibéricos a la misma línea histórica.",
      references: "Fuentes",
      llms: "El texto completo está en esta página para lectores humanos. Un breve en texto plano también está en",
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
      lead: "Cada afirmación se toma a plena fuerza, luego se corta en lo que dicen las actas, lo que se sienta al lado, y lo que no cargan. 1429 queda en la página como hueco buscado. Monterrey es un reloj posterior. La identidad es un derecho. Siguen siendo cuatro relojes.",
      noteBefore: "Los capítulos XV–XVIII del ensayo están en el",
      report: "informe completo",
      noteMid: ". Las personas de 1269–1274 están en el",
      atlas: "atlas de red",
      noteAfter: ".",
      tabs: [
        { id: "claims", label: "Afirmaciones" },
        { id: "charter", label: "Carta puebla" },
        { id: "chronicle", label: "Crónica" },
        { id: "dna", label: "Cuatro relojes" },
      ],
    },
    rovox: {
      kicker: "Lector · voz de la casa",
      title: "RoVox",
      lead: "Primero escucha. Puedes pausar o parar la intro. No puedes saltarla ni hablar encima. Cuando la grabación llega al final, RoVox responde, busca xAI Docs y puede actualizar la ficha y las notas. Suelta tu propio MP3 — generado en tu aparato.",
      card: "Ficha",
      name: "Nombre",
      role: "Oficio",
      note: "Nota",
      noStock: "Sin voz de catálogo. RoVox es la grabación de la casa.",
      player: "Introducción",
      rule: "Durante la intro los únicos controles son pausa y alto. El chat permanece cerrado hasta que el archivo termina.",
      listen: "Escuchar",
      pause: "Pausa",
      resume: "Seguir",
      stop: "Alto",
      drop: "Suelta un MP3 de RoVox desde este aparato",
      usingFallback: "Usa la grabación de la Síntesis hasta que sueltes un archivo RoVox.",
      usingFile: "Usa tu grabación.",
      docs: "Notas de trabajo",
      reset: "Restablecer notas",
      resetCard: "Restablecer ficha",
      desk: "Después de la intro",
      empty: "Termina la intro para preguntar.",
      you: "Tú",
      ask: "Pregunta a RoVox…",
      send: "Enviar",
      locked: "Chat cerrado hasta que termine la intro.",
      unlocked: "Intro terminada. Pregunta, o edita las notas. RoVox puede actualizarlas.",
      idleHint: "Empieza la intro. Solo pausa o alto.",
      cap: "Ocho preguntas en esta sesión.",
      unavailable: "RoVox no alcanza el modelo en este entorno. La intro y las notas siguen funcionando.",
      needGesture: "Pulsa Escuchar otra vez para arrancar el audio.",
      writing: "RoVox escribe…",
    },
    lion: {
      kicker: "Página de investigación",
      sources: "fuentes",
      skip: "Saltar al ensayo",
      contents: "Índice",
      back: "Volver al ensayo",
      chronology: "Una cronología breve",
      chronologyLead: "Horas elegidas del mismo animal, de la bendición al sello de Jerusalén.",
      references: "Fuentes",
      cite: "Citar esta página",
      companion: "Ensayo compañero:",
      companionTitle: "Los nombres Roboto y Roberto",
    },
    ui: {
      by: "Por",
      nav: "Principal",
      findings: "Hallazgos",
      listen: "Escuchar",
      pause: "Pausa",
      listenAria: "Escuchar la síntesis",
      searchEssay: "Buscar el ensayo",
      searchPlaceholder: "Roboto, Roberto, Coahuiltecan, 1429…",
      noMatch: "Ningún apartado coincide.",
      bothClocks: "Los dos relojes",
      all: "Todo",
      inRecord: "En el acta",
      adjacent: "Al lado",
      notInRecord: "No en el acta",
      gapYear: "Año hueco",
      split: "Partido — guardar las partes",
      stated: "Dicho.",
      steelman: "A plena fuerza.",
      confirm: "Qué lo confirmaría.",
      none: "Nada dicho para esta afirmación.",
      filterRegister: "Filtrar el registro",
      filterPlaceholder: "Filtrar por nombre, oficio, lugar o año",
      name: "Nombre",
      clock: "Reloj",
      year: "Año",
      role: "Oficio",
      registerCaption: "Personas y lugares del racimo 1269–1274 y el nodo de Monterrey",
      names: "Nombra",
      doesNotName: "No nombra",
      witnessBench: "Banco de testigos",
      can: "Puede.",
      cannot: "No puede.",
      crown: "Corona",
      named: "Persona nombrada",
      office: "Oficio",
      group: "Grupo",
      community: "Comunidad",
      networkCaption:
        "Pulse un nodo. Las aristas son mercedes, oficio, finanza, recluta o señorío vecino — no parentesco inventado después.",
      networkAria: "Red de personas en torno a la fundación de Vila-real en 1274",
      monterreyAria:
        "Geografía moderna Villarreal alrededor de Monterrey: la ciudad, La Mansión Villarreal y Los Villarreales en Salinas Victoria",
      chronicleAria: "Esquema de la Plana Baixa alrededor de Vila-real",
      state: "Estado",
      city: "Ciudad",
      municipality: "Municipio",
      locality: "Localidad",
      building: "Edificio",
    },
  },
} as const;
