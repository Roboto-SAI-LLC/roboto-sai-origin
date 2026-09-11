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
    title: { en: "Not kin", es: "No son parientes" },
    dek: {
      en: "Latin nōmen is name. Ōmen is a portent. Roboto and Roberto rhyme. They are not relatives. The house name sits next to labor. The given name sits next to fame.",
      es: "En latín nōmen es nombre. Ōmen es un presagio. Roboto y Roberto riman. No son parientes. El nombre de casa se sienta junto al trabajo. El de pila, junto a la fama.",
    },
    still: "/lion/cub.jpg",
    stillAlt: "Lion cub — the companion register, not the naming clause.",
    sectionIds: ["introduction", "robot", "robert", "onomastics"],
  },
  {
    id: "villa-regalis",
    numeral: "II",
    title: { en: "The king’s village", es: "La villa del rey" },
    dek: {
      en: "1274 is a legal machine. Villa Regalis names an office, not a household. The atlas holds the network. It does not glue it to Monterrey.",
      es: "1274 es una máquina legal. Villa Regalis nombra un oficio, no una casa. El atlas guarda la red. No la pega a Monterrey.",
    },
    still: "/templars/fortress.jpg",
    stillAlt: "Frontier fortress on the Plana — neighbors, not namers.",
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
    still: "/lion/ark.jpg",
    stillAlt: "Ark still — two registers, one animal.",
    sectionIds: ["yisrael", "soundalike", "mars"],
  },
  {
    id: "record-gap",
    numeral: "IV",
    title: { en: "Record and gap", es: "Acta y hueco" },
    dek: {
      en: "Steelman first. Date the clocks. A family as 1274 naming agent is not in the published grants. Keep the gap on the page.",
      es: "Primero el steelman. Fecha los relojes. Una familia como agente nominador en 1274 no está en las mercedes publicadas. Deja el hueco en la página.",
    },
    still: "/templars/coast.jpg",
    stillAlt: "Coast of the Plana — later clocks, same water.",
    sectionIds: ["migrations", "inscriptions", "tables", "method", "prosopography", "ledger"],
    instrument: { to: "/dossier", en: "Open the dossier", es: "Abrir el dossier" },
  },
  {
    id: "four-clocks",
    numeral: "V",
    title: { en: "Four clocks", es: "Cuatro relojes" },
    dek: {
      en: "Charter, shocks, DNA, two King James towns. Documents, family memory, genetic tests, and place. Do not wind them as one.",
      es: "Carta, golpes, ADN, dos villas de un rey Jaime. Documentos, memoria de familia, pruebas genéticas y lugar. No los enrolles como uno.",
    },
    still: "/lion/crouching.jpg",
    stillAlt: "Crouching lion — Judah’s animal on its own clock.",
    sectionIds: ["charter", "shocks", "dna", "jamestown", "conclusion"],
    instrument: { to: "/brief", en: "Open the brief", es: "Abrir la síntesis" },
  },
];

export function sectionsForChapter(chapter: Chapter): Section[] {
  return chapter.sectionIds
    .map((id) => SECTIONS.find((section) => section.id === id))
    .filter((section): section is Section => Boolean(section));
}
