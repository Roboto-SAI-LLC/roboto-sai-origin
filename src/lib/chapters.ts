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
    title: { en: "Primary attestations", es: "Atestaciones primarias" },
    dek: {
      en: "Latin nōmen is name. Roboto is Roberto’s house. Čapek’s robota (1920) is the English neighbor gloss, not the founder.",
      es: "El latín nōmen es nombre. Roboto es la casa de Roberto. El robota de Čapek (1920) es la glosa vecina en inglés, no el fundador.",
    },
    still: "/brand/mark.png",
    stillAlt: "RobotOmen mark.",
    sectionIds: ["introduction", "robot", "robert", "onomastics"],
  },
  {
    id: "villa-regalis",
    numeral: "II",
    title: { en: "Vila-real, 1274", es: "Vila-real, 1274" },
    dek: {
      en: "Carta pobla, 20 February 1274. Ville Regalis names an office in Burriana’s term. Monterrey is a later clock.",
      es: "Carta pobla, 20 de febrero de 1274. Ville Regalis nombra un oficio en el término de Burriana. Monterrey es un reloj posterior.",
    },
    still: "/brand/mark.png",
    stillAlt: "RobotOmen mark.",
    sectionIds: ["villarreal", "variants"],
    instrument: { to: "/atlas", en: "Atlas", es: "Atlas" },
  },
  {
    id: "sound-sense",
    numeral: "III",
    title: { en: "Homophony", es: "Homofonía" },
    dek: {
      en: "Yisrael and Israel can look like twins. Villarreal and Martinez can share a street. A missed flap writes another script.",
      es: "Yisrael e Israel pueden parecer gemelos. Villarreal y Martinez pueden compartir calle. Una vibrante perdida escribe otra escritura.",
    },
    still: "/brand/mark.png",
    stillAlt: "RobotOmen mark.",
    sectionIds: ["yisrael", "soundalike", "mars"],
  },
  {
    id: "record-gap",
    numeral: "IV",
    title: { en: "Record and gap", es: "Acta y hueco" },
    dek: {
      en: "The charter is dated. Family memory is dated separately. The dossier keeps both clocks.",
      es: "La carta está fechada. La memoria de familia se fecha aparte. El dossier guarda los dos relojes.",
    },
    still: "/brand/mark.png",
    stillAlt: "RobotOmen mark.",
    sectionIds: ["migrations", "inscriptions", "tables", "method", "prosopography", "ledger"],
    instrument: { to: "/dossier", en: "Dossier", es: "Dossier" },
  },
  {
    id: "four-clocks",
    numeral: "V",
    title: { en: "Four clocks", es: "Cuatro relojes" },
    dek: {
      en: "Charter, shocks, DNA, and two King James towns. Documents, family memory, genetic tests, and place keep different time.",
      es: "Carta, golpes, ADN y dos villas de un rey Jaime. Documentos, memoria de familia, pruebas genéticas y lugar llevan tiempos distintos.",
    },
    still: "/brand/mark.png",
    stillAlt: "RobotOmen mark.",
    sectionIds: ["charter", "shocks", "dna", "jamestown", "conclusion", "appendix"],
    instrument: { to: "/brief", en: "Brief", es: "Síntesis" },
  },
];

export function sectionsForChapter(chapter: Chapter): Section[] {
  return chapter.sectionIds
    .map((id) => SECTIONS.find((section) => section.id === id))
    .filter((section): section is Section => Boolean(section));
}
