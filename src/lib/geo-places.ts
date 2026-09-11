export type GeoClock = "1274" | "later";

export type GeoPlace = {
  id: string;
  clock: GeoClock;
  name: string;
  short: string;
  role: string;
  dossier: string;
  lat: number;
  lng: number;
};

export const GEO_PLACES: GeoPlace[] = [
  {
    id: "vilareal",
    clock: "1274",
    name: "Vila-real",
    short: "Vila-real",
    role: "Royal village, 20 February 1274",
    dossier:
      "Castellón. Latin Ville Regalis in Burriana’s term. The naming clause is an office — royal village — not a household. This pin is the 1274 town, not Los Villarreales.",
    lat: 39.9378,
    lng: -0.1014,
  },
  {
    id: "burriana",
    clock: "1274",
    name: "Burriana",
    short: "Burriana",
    role: "Parent town; Temple share; acequia rents",
    dossier:
      "The carta pobla carves Vila-real from Burriana’s term. Templars held a share of the city. Neighbor, not namer.",
    lat: 39.8894,
    lng: -0.085,
  },
  {
    id: "nules",
    clock: "1274",
    name: "Nules",
    short: "Nules",
    role: "Southern neighbour named in the bounds",
    dossier: "Named in the 1274 bounds. A neighbour on the Plana, not a lineage.",
    lat: 39.8533,
    lng: -0.1556,
  },
  {
    id: "betxi",
    clock: "1274",
    name: "Betxí",
    short: "Betxí",
    role: "West: Misquitiella versus Bechin",
    dossier: "The charter’s western bound. Surveyed later as Betxí. Place clock of 1274.",
    lat: 39.9283,
    lng: -0.1967,
  },
  {
    id: "xivert",
    clock: "1274",
    name: "Xivert",
    short: "Xivert",
    role: "Templar commandery, 1233 — Maestrazgo",
    dossier:
      "Grant of 1233. Neighbors at a distance. Not a street in Vila-real, and not a naming clause.",
    lat: 40.3044,
    lng: 0.2256,
  },
  {
    id: "villarreales",
    clock: "later",
    name: "Los Villarreales",
    short: "Los Villarreales",
    role: "Hacienda Los Villarreales, Salinas Victoria",
    dossier:
      "INEGI 190450118. Census 2020: 633. A name written back onto land. 2 January 2023: shootout at Hacienda Los Villarreales — three officers dead (two Fuerza Civil, one local chief), two gunmen killed, five arrested; attackers from Nuevo Laredo, .50-cal rifles. Later clock. Not a lawsuit. Not Vila-real 1274.",
    lat: 26.04688,
    lng: -100.32222,
  },
  {
    id: "salinas",
    clock: "later",
    name: "Salinas Victoria",
    short: "Salinas Victoria",
    role: "Municipality; the locality sits in this term",
    dossier:
      "Cabecera of the municipality. The Villarreal toponym is not the seat. Gazetteer, not a RAN expediente.",
    lat: 25.96329,
    lng: -100.29091,
  },
  {
    id: "monterrey",
    clock: "later",
    name: "Monterrey",
    short: "Monterrey",
    role: "City where the surname sits densely",
    dossier:
      "Later-cohort density. Rank ~17 in the municipality. Saturation is migration after New Spain, not a 1274 founding.",
    lat: 25.6866,
    lng: -100.3161,
  },
  {
    id: "mansion",
    clock: "later",
    name: "La Mansión Villarreal",
    short: "La Mansión",
    role: "1893 Fábricas Apolo warehouse, now a hotel",
    dossier:
      "Av. Pino Suárez 806, Centro. INAH building record. Two orthographies: Villa Real in the paper, Villarreal on the sign. Not the news cycle, and not 1274.",
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
