import type { LedgerRow } from "@/lib/network";

export type ModernKind = "region" | "city" | "municipality" | "locality" | "building";

export type ModernNode = {
  id: string;
  name: string;
  short: string;
  kind: ModernKind;
  year: string;
  role: string;
  dossier: string;
  x: number;
  y: number;
};

export type ModernEdgeKind = "in" | "metro" | "state";

export type ModernEdge = {
  from: string;
  to: string;
  kind: ModernEdgeKind;
  label: string;
};

export const KIND_LABEL: Record<ModernKind, string> = {
  region: "State",
  city: "City",
  municipality: "Municipality",
  locality: "Locality",
  building: "Building",
};

export const MODERN_NODES: ModernNode[] = [
  {
    id: "villarreales",
    name: "Los Villarreales",
    short: "Los Villarreales",
    kind: "locality",
    year: "2020 census",
    role: "Rural locality; ejido / ranch landscape in Salinas Victoria",
    dossier:
      "INEGI locality 190450118, in the municipality of Salinas Victoria, inside the Monterrey metropolitan area, about forty kilometres north of the city. Census counts: 600 (2000), 659 (2005), 811 (2010), 633 (2020). Postal and land language also says pueblo, ejido, Hacienda los Villarreales, ranchos and quintas (C.P. 65530). A name written back onto land. Not a municipality, and not Vila-real in Castellón.",
    x: 450,
    y: 64,
  },
  {
    id: "salinas",
    name: "Salinas Victoria",
    short: "Salinas Victoria",
    kind: "municipality",
    year: "INEGI 19045",
    role: "Municipality north of Monterrey; the locality sits in this term",
    dossier:
      "One of Nuevo León’s 51 municipalities. The cabecera is the town of Salinas Victoria; the Villarreal toponym is not the seat. It is a rural locality in the northern metro, on the old road toward the border. The legal class of the land — ejido versus private rancho — is a RAN and notarial question. This page has the gazetteer name, not the expediente.",
    x: 220,
    y: 168,
  },
  {
    id: "monterrey",
    name: "Monterrey",
    short: "Monterrey",
    kind: "city",
    year: "New Spain → present",
    role: "City where the surname sits densely",
    dossier:
      "Compiled public-name files put Villarreal around rank 17 in the municipality — about 8,400 people, roughly one in 137. Of Mexican Villarreals, about a third live in Nuevo León; Coahuila and Tamaulipas each about nine percent. Saturation here means regional density of a habitational surname, not a medieval foundation. Named bearers in the state’s political record include Antonio I. Villarreal of Lampazos (1879–1944), governor of Nuevo León in 1914. A later clock than 1274.",
    x: 450,
    y: 300,
  },
  {
    id: "mansion",
    name: "La Mansión Villarreal",
    short: "La Mansión",
    kind: "building",
    year: "1893 / hotel",
    role: "Centro hotel occupying the Fábricas Apolo warehouse",
    dossier:
      "Av. Pino Suárez 806, Centro. The building is the 1893 warehouse of Fábricas Apolo (also called Droguería Apolo), Pino Suárez at Carlos Salazar Poniente, raised for the German-Mexican industrialist Alfred Guido Moebius. INAH catalogued it; in the 1980s it housed the Secretaría de Agricultura y Recursos Hidráulicos; later it became a hotel. The 2009 INAH paper writes “La Mansión Villa Real.” The public sign is Villarreal — one word. Same habitational form, two orthographies. Building history is industrial Monterrey. It is not the 1274 town, and this node does not carry the news cycle around the address.",
    x: 720,
    y: 236,
  },
  {
    id: "nuevoleon",
    name: "Nuevo León",
    short: "Nuevo León",
    kind: "region",
    year: "later cohort",
    role: "Mexican state of densest Villarreal incidence",
    dossier:
      "Spain itself holds a few thousand people named Villarreal. Mexico holds about a hundred thousand, and Nuevo León holds about a third of those. The surname is habitational: “one who came from Villareal / the royal estate,” a formation taken from several Iberian places. Density in this state is a New Spain and after fact — migration, not a naming clause from Jaime I. The state name is a third clock: Nuevo Reino de León, 1579, after the Kingdom of León — New León, not New Lion.",
    x: 180,
    y: 400,
  },
];

export const MODERN_EDGES: ModernEdge[] = [
  { from: "nuevoleon", to: "monterrey", kind: "state", label: "state capital" },
  { from: "nuevoleon", to: "salinas", kind: "state", label: "municipality of the state" },
  { from: "salinas", to: "villarreales", kind: "in", label: "locality in the term" },
  { from: "monterrey", to: "salinas", kind: "metro", label: "~40 km north" },
  { from: "monterrey", to: "mansion", kind: "in", label: "centro address" },
];

export const MODERN_EDGE_COLORS: Record<ModernEdgeKind, string> = {
  in: "#3e534c",
  metro: "#6d6558",
  state: "#2a2620",
};

export const MONTERREY_LEDGER: LedgerRow[] = [
  {
    id: "M1",
    status: "in-record",
    layer: "monterrey",
    claim:
      "Los Villarreales is an INEGI rural locality (190450118) in Salinas Victoria, Nuevo León, inside the Monterrey metropolitan area. Census 2020: 633 inhabitants (316 men, 317 women).",
    source: "INEGI, Censo de Población y Vivienda 2020; locality series 2000–2020.",
  },
  {
    id: "M2",
    status: "in-record",
    layer: "monterrey",
    claim:
      "Hotel La Mansión Villarreal occupies the 1893 warehouse of Fábricas Apolo / Droguería Apolo at Pino Suárez and Carlos Salazar Poniente, Centro, Monterrey. The building is in the Catálogo Nacional de Monumentos Históricos Inmuebles.",
    source:
      "Garza Luna & Tovar Esquivel, “Guido Moebius y Las Fábricas Apolo,” Boletín de Monumentos Históricos 15 (2009); INAH, Catálogo Nacional, Nuevo León, t. IV (1985), pp. 1729–1730.",
  },
  {
    id: "M3",
    status: "in-record",
    layer: "monterrey",
    claim:
      "In the 1980s the same building housed the Secretaría de Agricultura y Recursos Hidráulicos. The 2009 INAH paper already records it as a hotel under the trade name La Mansión Villa Real.",
    source: "Garza Luna & Tovar Esquivel 2009, p. 124 and fig. 2.",
  },
  {
    id: "M4",
    status: "adjacent",
    layer: "monterrey",
    claim:
      "Compiled public-name files put about 104,000 people named Villarreal in Mexico, of whom about a third are in Nuevo León, with further clusters in Coahuila and Tamaulipas (~9% each). In Monterrey municipality the name sits around rank 17 (~8,400; about 1 in 137).",
    source:
      "Forebears compilation of public name files — a distribution index, not an INEGI surname table. Treat as a later-cohort map.",
  },
  {
    id: "M5",
    status: "adjacent",
    layer: "monterrey",
    claim:
      "Postal and land-market language around the locality also uses pueblo, ejido, Hacienda los Villarreales, ranchos and quintas (C.P. 65530). That is how the name sits on the ground. It is not, by itself, a RAN expediente.",
    source: "SEPOMEX / C.P. 65530 listings; land notices naming the ejido and hacienda. Adjacent to the INEGI locality.",
  },
  {
    id: "M6",
    status: "adjacent",
    layer: "monterrey",
    claim:
      "INAH writes the hotel as Villa Real (two words). The public sign is Villarreal (one word). Same habitational form; two orthographies. Neither spelling makes the building the 1274 town.",
    source: "Garza Luna & Tovar Esquivel 2009 versus the hotel’s current trade name.",
  },
  {
    id: "M7",
    status: "adjacent",
    layer: "monterrey",
    claim:
      "Antonio I. Villarreal (José Antonio Villarreal González, Lampazos de Naranjo, 1879–1944) was governor of Nuevo León in 1914 and later Secretary of Agriculture. A named bearer in the state’s political record — not the namer of the hotel or the ejido.",
    source: "Standard biographies; H. Congreso del Estado de Nuevo León, Archivo.",
  },
  {
    id: "M8",
    status: "not-in-record",
    layer: "monterrey",
    claim:
      "There is no municipality named Villarreal de los Monterrey. Infantes (1939, Castellón) and Monterrey (Nuevo León) can both function as disambiguators. Only Infantes is a gazetteer suffix. Monterrey here is a claim of living geography, not a town on the map.",
    source: "INEGI municipal catalogue; no such municipio. The 1274 town’s later Castilian name is Villarreal de los Infantes.",
  },
  {
    id: "M9",
    status: "not-in-record",
    layer: "monterrey",
    claim:
      "The 1274 carta pobla does not name Monterrey, this hotel, or this ejido. Place → surname (Iberia) and surname → place (Nuevo León) are opposite transonymizations. Do not wind them as one clock.",
    source: "Carta pobla of 20 February 1274; this stratum is New Spain and after.",
  },
  {
    id: "M10",
    status: "in-record",
    layer: "monterrey",
    claim:
      "Nuevo León keeps, with “Reino de” dropped, the 1579 name Nuevo Reino de León. INAFED: Luis de Carvajal y de la Cueva named it for the Kingdom of León, birthplace of Felipe II. English gloss is New León, not New Lion. León itself is from Latin Legio (Legio VII Gemina). The red lion on the 1943 state shield is folk-heraldry of that homonym.",
    source:
      "INAFED, Enciclopedia de los Municipios y Delegaciones, “Nomenclatura — Nuevo León”; Wiktionary, Nuevo León; state coat of arms adopted 1943–44.",
  },
  {
    id: "M11",
    status: "adjacent",
    layer: "monterrey",
    claim:
      "Carvajal, a Portuguese New Christian of Jewish descent, obtained the 31 May 1579 capitulation and brought about a hundred families, many conversos from the León–Portugal border. The Inquisition later tried the household; Luis el Mozo wrote as Joseph Lumbroso. Local León pages title this “Un nuevo león”; Jewish-Mexican journalism restates a discreet Jewish colony. That is a sixteenth-century converso colonization — not a modern Israeli state project, and not the 1274 carta pobla.",
    source:
      "Capitulación of 31 May 1579; INAH, Historias 88 (2014); Diario Judío, “Luis de Carvajal, fundador del Nuevo Reino de León”; León Virtual, “Judíos leoneses fundadores de Nuevo León” (heading: “Un nuevo león”). Eugenio del Hoyo records a 1933 Mexican debate on whether the landing was a Jewish colonization experiment — a later question, not the 1579 naming clause.",
  },
  {
    id: "M12",
    status: "not-in-record",
    layer: "monterrey",
    claim:
      "English “New Lion” is a machine calque of Nuevo León. VisitMexico published it in August 2020 (Guerrero as Warrior, Torreón as Turret) and took it down — that is the thread that disappeared. Hebrew lion language — Lion of Judah, Ariel “lion of God,” Operation Rising Lion from Numbers 23:24 — is Israel’s own clock. It does not name this Mexican state. No record of a modern Israeli project to found or rename Nuevo León as a New Lion. Do not wind the calque, the 1579 kingdom, and the biblical lion as one clock.",
    source:
      "VisitMexico English pages, 7 August 2020, subsequently reverted (AM, Debate, Al Día). Numbers 23:24; IDF designation Am ke-lavi / Rising Lion, June 2025. León, Guanajuato’s 2025 declaration with Israel is a different León.",
  },
];

