import { SECTIONS, type Section } from "@/lib/research";

export type InstrumentLink = {
  to: "/atlas" | "/dossier" | "/lion" | "/templars" | "/brief";
  en: string;
  es: string;
};

export type Chapter = {
  id: string;
  numeral: string;
  title: { en: string; es: string };
  dek: { en: string; es: string };
  still: string;
  stillAlt: string;
  sectionIds: string[];
  instrument?: InstrumentLink;
};

export const CHAPTERS: Chapter[] = [
  {
    id: "not-kin",
    numeral: "I",
    title: { en: "The labor", es: "La labor" },
    dek: {
      en: "RobotOmen. Roboto is the house. Omen sits next to nomen — name. Sit with both. The labor is the names.",
      es: "RobotOmen. Roboto es la casa. Omen se sienta junto a nomen — nombre. Quédate con los dos. La labor son los nombres.",
    },
    still: "/brand/crucible.jpg",
    stillAlt: "House art — Emberforge, the labor of fire. Not a 1274 survey.",
    sectionIds: ["introduction", "robot", "robert", "onomastics"],
  },
  {
    id: "villa-regalis",
    numeral: "II",
    title: { en: "The king’s village", es: "La villa del rey" },
    dek: {
      en: "1274 is a legal machine. Villa Regalis names an office. The atlas holds the network. Monterrey is another clock. Walk both.",
      es: "1274 es una máquina legal. Villa Regalis nombra un oficio. El atlas guarda la red. Monterrey es otro reloj. Camina los dos.",
    },
    still: "/brand/glow-wide.png",
    stillAlt: "House mark — RobotOmen.",
    sectionIds: ["villarreal", "variants"],
    instrument: { to: "/atlas", en: "Open the atlas", es: "Abrir el atlas" },
  },
  {
    id: "sound-sense",
    numeral: "III",
    title: { en: "Sound is not sense", es: "El sonido no es el sentido" },
    dek: {
      en: "Yisrael and Israel can look like twins. Villarreal and Martinez can share a street. A decoder that misses a flap writes another script.",
      es: "Yisrael e Israel pueden parecer gemelos. Villarreal y Martinez pueden compartir calle. Un decodificador que pierde una vibrante escribe otra escritura.",
    },
    still: "/brand/mark.png",
    stillAlt: "House mark — the R, the labor.",
    sectionIds: ["yisrael", "soundalike", "mars"],
  },
  {
    id: "record-gap",
    numeral: "IV",
    title: { en: "Record and gap", es: "Acta y hueco" },
    dek: {
      en: "Sit with the act. Sit with what family remembers. The dossier holds both. You hear which clock is sounding.",
      es: "Quédate con el acta. Quédate con lo que recuerda la familia. El dossier guarda las dos. Tú oyes qué reloj suena.",
    },
    still: "/brand/rocket.jpg",
    stillAlt: "House art — living clock, the later engine.",
    sectionIds: ["migrations", "inscriptions", "tables", "method", "prosopography", "ledger"],
    instrument: { to: "/dossier", en: "Open the dossier", es: "Abrir el dossier" },
  },
  {
    id: "four-clocks",
    numeral: "V",
    title: { en: "Four clocks", es: "Cuatro relojes" },
    dek: {
      en: "Charter, shocks, DNA, two King James towns. Documents, family memory, genetic tests, and place. Hold them. Hear which one is sounding.",
      es: "Carta, golpes, ADN, dos villas de un rey Jaime. Documentos, memoria de familia, pruebas genéticas y lugar. Sosténlos. Oye cuál suena.",
    },
    still: "/brand/glow-wide.png",
    stillAlt: "House mark — RobotOmen.",
    sectionIds: ["charter", "shocks", "dna", "jamestown", "conclusion"],
    instrument: { to: "/brief", en: "Open the brief", es: "Abrir la síntesis" },
  },
];

export function sectionsForChapter(chapter: Chapter): Section[] {
  return chapter.sectionIds
    .map((id) => SECTIONS.find((section) => section.id === id))
    .filter((section): section is Section => Boolean(section));
}
