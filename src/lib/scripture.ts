export const HOUSE_BIBLES = [
  {
    id: "de4e12af7f28f599-01",
    abbr: "KJV",
    name: "King James Version",
    lang: "en" as const,
  },
  {
    id: "e3f420b9665abaeb-01",
    abbr: "LBLA",
    name: "La Biblia de las Américas",
    lang: "es" as const,
  },
] as const;

export type HouseBibleId = (typeof HOUSE_BIBLES)[number]["id"];

export function isHouseBibleId(id: string): id is HouseBibleId {
  return HOUSE_BIBLES.some((bible) => bible.id === id);
}

export type ScriptureResult = {
  bibleId: string;
  abbr: string;
  name: string;
  reference: string;
  content: string;
  copyright: string;
  fumsToken: string | null;
};
