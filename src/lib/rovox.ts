import { BRIEF_TAGS } from "@/lib/brief";
import { FINDINGS } from "@/lib/research";

export type RoVoxCard = {
  name: string;
  role: string;
  note: string;
};

export const ROVOX_STORAGE = {
  card: "rs-rovox-card",
  docs: "rs-rovox-docs",
} as const;

export const DEFAULT_CARD: Record<"en" | "es", RoVoxCard> = {
  en: {
    name: "RoVox",
    role: "Roboto SAI reader",
    note: "Reads the intro. Pause or stop only, until the end. Then answers. Voice is the house recording — never a catalog stock voice.",
  },
  es: {
    name: "RoVox",
    role: "Lector de Roboto SAI",
    note: "Lee la introducción. Solo pausa o alto, hasta el final. Luego responde. La voz es la grabación de la casa — nunca una voz de catálogo.",
  },
};

export const DEFAULT_DOCS: Record<"en" | "es", string> = {
  en: `RoVox intro — Roboto SAI, Methodology.

The names under study are Roboto and Roberto. They rhyme. They are not kin. Robot and Robert are English glosses.

Four clocks: documents, DNA, family memory, and place. Date each clock. Do not merge them.

A Villarreal de Monterrey who carries Indigenous American ancestry has a right to that history. A kit percentage is not a people. Fifty thousand years is a species clock, not Hebrew. Treasure talk sits next to 1307.

This reader does not use a stock catalog voice. Drop a RoVox recording from the house device. After the intro ends, ask. RoVox can search xAI Docs and update this card and these notes.

Drop your MP3 on this page. Pause or stop during the intro. Chat unlocks only when the recording reaches the end.`,
  es: `Introducción de RoVox — Roboto SAI, Metodología.

Los nombres en estudio son Roboto y Roberto. Riman. No son parientes. Robot y Robert son glosas inglesas.

Cuatro relojes: documentos, ADN, memoria de familia y lugar. Fecha cada reloj. No los fundas.

Un Villarreal de Monterrey que lleva ancestría indígena americana tiene derecho a esa historia. Un porcentaje de kit no es un pueblo. Cincuenta mil años es un reloj de especie, no hebreo. La charla del tesoro se sienta junto a 1307.

Este lector no usa una voz de catálogo. Suelta una grabación RoVox desde el aparato de la casa. Al terminar la intro, pregunta. RoVox puede buscar xAI Docs y actualizar esta ficha y estas notas.

Suelta tu MP3 en esta página. Pausa o alto durante la intro. El chat se abre solo cuando la grabación llega al final.`,
};

export function journalDigest(): string {
  const findings = FINDINGS.map((f) => `${f.kicker}: ${f.text}`).join("\n");
  const brief = BRIEF_TAGS.en.map((t) => `${t.title}: ${t.body}`).join("\n\n");
  return `FINDINGS\n${findings}\n\nBRIEF\n${brief}`;
}

export function searchJournal(query: string, limit = 4): string[] {
  const digest = journalDigest();
  const chunks = digest.split(/\n\n+/).map((c) => c.trim()).filter(Boolean);
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 1);
  if (terms.length === 0) return chunks.slice(0, limit);
  return chunks
    .map((chunk) => {
      const hay = chunk.toLowerCase();
      const score = terms.reduce((n, t) => n + (hay.includes(t) ? 1 : 0), 0);
      return { chunk, score };
    })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((row) => row.chunk.slice(0, 900));
}

export const FALLBACK_INTRO = {
  en: "/speech/brief-en.mp3",
  es: "/speech/brief-es.mp3",
} as const;
