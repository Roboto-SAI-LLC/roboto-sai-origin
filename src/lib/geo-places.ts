import type { LocaleText } from "@/lib/i18n";

export type GeoClock = "1274" | "later";

export type GeoPlace = {
  id: string;
  clock: GeoClock;
  name: string;
  short: string;
  role: LocaleText;
  dossier: LocaleText;
  lat: number;
  lng: number;
};

export const GEO_PLACES: GeoPlace[] = [
  {
    id: "vilareal",
    clock: "1274",
    name: "Vila-real",
    short: "Vila-real",
    role: {
      en: "Royal village, 20 February 1274",
      es: "Villa real, 20 de febrero de 1274",
    },
    dossier: {
      en: "Castellón. Latin Ville Regalis in Burriana’s term. The naming clause is an office — royal village — not a household. This pin is the 1274 town, not Los Villarreales.",
      es: "Castellón. Latín Ville Regalis en el término de Burriana. La cláusula de nombramiento es un oficio — villa real — no una casa. Este pin es la villa de 1274, no Los Villarreales.",
    },
    lat: 39.9378,
    lng: -0.1014,
  },
  {
    id: "burriana",
    clock: "1274",
    name: "Burriana",
    short: "Burriana",
    role: {
      en: "Parent town; Temple share; acequia rents",
      es: "Villa madre; parte del Templo; rentas de la acequia",
    },
    dossier: {
      en: "The carta pobla carves Vila-real from Burriana’s term. Templars held a share of the city. Neighbor, not namer.",
      es: "La carta pobla talla Vila-real del término de Burriana. Los templarios tuvieron parte de la ciudad. Vecina, no nominadora.",
    },
    lat: 39.8894,
    lng: -0.085,
  },
  {
    id: "nules",
    clock: "1274",
    name: "Nules",
    short: "Nules",
    role: {
      en: "Southern neighbour named in the bounds",
      es: "Vecina del sur nombrada en los linderos",
    },
    dossier: {
      en: "Named in the 1274 bounds. A neighbour on the Plana, not a lineage.",
      es: "Nombrada en los linderos de 1274. Una vecina en la Plana, no un linaje.",
    },
    lat: 39.8533,
    lng: -0.1556,
  },
  {
    id: "betxi",
    clock: "1274",
    name: "Betxí",
    short: "Betxí",
    role: {
      en: "West: Misquitiella versus Bechin",
      es: "Oeste: Misquitiella versus Bechin",
    },
    dossier: {
      en: "The charter’s western bound. Surveyed later as Betxí. Place clock of 1274.",
      es: "El lindero oeste de la carta. Levantado después como Betxí. Reloj de lugar de 1274.",
    },
    lat: 39.9283,
    lng: -0.1967,
  },
  {
    id: "xivert",
    clock: "1274",
    name: "Xivert",
    short: "Xivert",
    role: {
      en: "Templar commandery, 1233 — Maestrazgo",
      es: "Encomienda templaria, 1233 — Maestrazgo",
    },
    dossier: {
      en: "Grant of 1233. Neighbors at a distance. Not a street in Vila-real, and not a naming clause.",
      es: "Merced de 1233. Vecinos a distancia. No una calle de Vila-real, y no una cláusula de nombramiento.",
    },
    lat: 40.3044,
    lng: 0.2256,
  },
  {
    id: "villarreales",
    clock: "later",
    name: "Los Villarreales",
    short: "Los Villarreales",
    role: {
      en: "Hacienda Los Villarreales, Salinas Victoria",
      es: "Hacienda Los Villarreales, Salinas Victoria",
    },
    dossier: {
      en: "INEGI 190450118. Census 2020: 633. A name written back onto land. 2 January 2023: shootout at Hacienda Los Villarreales — three officers dead (two Fuerza Civil, one local chief), two gunmen killed, five arrested; attackers from Nuevo Laredo, .50-cal rifles. Later clock. Not a lawsuit. Not Vila-real 1274.",
      es: "INEGI 190450118. Censo 2020: 633. Un nombre vuelto a escribir sobre la tierra. 2 de enero de 2023: tiroteo en Hacienda Los Villarreales — tres oficiales muertos (dos de Fuerza Civil, un jefe local), dos pistoleros muertos, cinco detenidos; atacantes de Nuevo Laredo, rifles .50. Reloj posterior. No un pleito. No Vila-real 1274.",
    },
    lat: 26.04688,
    lng: -100.32222,
  },
  {
    id: "salinas",
    clock: "later",
    name: "Salinas Victoria",
    short: "Salinas Victoria",
    role: {
      en: "Municipality; the locality sits in this term",
      es: "Municipio; la localidad queda en este término",
    },
    dossier: {
      en: "Cabecera of the municipality. The Villarreal toponym is not the seat. Gazetteer, not a RAN expediente.",
      es: "Cabecera del municipio. El topónimo Villarreal no es la sede. Gazetero, no un expediente RAN.",
    },
    lat: 25.96329,
    lng: -100.29091,
  },
  {
    id: "monterrey",
    clock: "later",
    name: "Monterrey",
    short: "Monterrey",
    role: {
      en: "City where the surname sits densely",
      es: "Ciudad donde el apellido se agrupa",
    },
    dossier: {
      en: "Later-cohort density. Rank ~17 in the municipality. Saturation is migration after New Spain, not a 1274 founding.",
      es: "Densidad de cohorte posterior. Rango ~17 en el municipio. La saturación es migración después de Nueva España, no una fundación de 1274.",
    },
    lat: 25.6866,
    lng: -100.3161,
  },
  {
    id: "mansion",
    clock: "later",
    name: "La Mansión Villarreal",
    short: "La Mansión",
    role: {
      en: "1893 Fábricas Apolo warehouse, now a hotel",
      es: "Almacén de Fábricas Apolo de 1893, ahora hotel",
    },
    dossier: {
      en: "Av. Pino Suárez 806, Centro. INAH building record. Two orthographies: Villa Real in the paper, Villarreal on the sign. Not the news cycle, and not 1274.",
      es: "Av. Pino Suárez 806, Centro. Ficha INAH del edificio. Dos ortografías: Villa Real en el artículo, Villarreal en el letrero. No el ciclo de noticias, y no 1274.",
    },
    lat: 25.6779,
    lng: -100.3184,
  },
];

export const CLOCK_VIEWS = {
  "1274": { center: [39.94, -0.05] as [number, number], zoom: 10 },
  later: { center: [25.86, -100.31] as [number, number], zoom: 10 },
  both: { center: [36, -50] as [number, number], zoom: 3 },
} as const;

export function kmBetween(a: { lat: number; lng: number }, b: { lat: number; lng: number }): number {
  const r = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((a.lat * Math.PI) / 180) * Math.cos((b.lat * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return 2 * r * Math.asin(Math.sqrt(x));
}

export const TWO_CLOCK_KM = Math.round(
  kmBetween(
    GEO_PLACES.find((p) => p.id === "vilareal")!,
    GEO_PLACES.find((p) => p.id === "villarreales")!,
  ),
);
