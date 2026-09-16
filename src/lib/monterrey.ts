import type { LocaleText } from "@/lib/i18n";
import type { LedgerRow } from "@/lib/network";

export type ModernKind = "region" | "city" | "municipality" | "locality" | "building";

export type ModernNode = {
  id: string;
  name: string;
  short: string;
  kind: ModernKind;
  year: LocaleText;
  role: LocaleText;
  dossier: LocaleText;
  x: number;
  y: number;
};

export type ModernEdgeKind = "in" | "metro" | "state";

export type ModernEdge = {
  from: string;
  to: string;
  kind: ModernEdgeKind;
  label: LocaleText;
};

export const KIND_LABEL: Record<ModernKind, LocaleText> = {
  region: { en: "State", es: "Estado" },
  city: { en: "City", es: "Ciudad" },
  municipality: { en: "Municipality", es: "Municipio" },
  locality: { en: "Locality", es: "Localidad" },
  building: { en: "Building", es: "Edificio" },
};

export const MODERN_NODES: ModernNode[] = [
  {
    id: "villarreales",
    name: "Los Villarreales",
    short: "Los Villarreales",
    kind: "locality",
    year: { en: "2020 census", es: "censo 2020" },
    role: {
      en: "Rural locality; ejido / ranch landscape in Salinas Victoria",
      es: "Localidad rural; paisaje de ejido / rancho en Salinas Victoria",
    },
    dossier: {
      en: "INEGI locality 190450118, in the municipality of Salinas Victoria, inside the Monterrey metropolitan area, about forty kilometres north of the city. Census counts: 600 (2000), 659 (2005), 811 (2010), 633 (2020). Postal and land language also says pueblo, ejido, Hacienda los Villarreales, ranchos and quintas (C.P. 65530). 2 January 2023: a shootout at Hacienda Los Villarreales killed three officers (two Fuerza Civil, one local chief); two gunmen were killed and five arrested. Attackers came from Nuevo Laredo, cartel-linked, with .50-cal rifles. That is a later-clock event on land that still carries the name. It is not a lawsuit, not a 1274 founding, and not Vila-real in Castellón.",
      es: "Localidad INEGI 190450118, en el municipio de Salinas Victoria, dentro del área metropolitana de Monterrey, unos cuarenta kilómetros al norte de la ciudad. Censos: 600 (2000), 659 (2005), 811 (2010), 633 (2020). La lengua postal y de tierra también dice pueblo, ejido, Hacienda los Villarreales, ranchos y quintas (C.P. 65530). 2 de enero de 2023: un tiroteo en Hacienda Los Villarreales mató a tres oficiales (dos de Fuerza Civil, un jefe local); dos pistoleros murieron y cinco fueron detenidos. Los atacantes venían de Nuevo Laredo, ligados a un cártel, con rifles .50. Eso es un suceso de reloj posterior en tierra que aún lleva el nombre. No es un pleito, no es una fundación de 1274, y no es Vila-real en Castellón.",
    },
    x: 450,
    y: 64,
  },
  {
    id: "salinas",
    name: "Salinas Victoria",
    short: "Salinas Victoria",
    kind: "municipality",
    year: { en: "INEGI 19045", es: "INEGI 19045" },
    role: {
      en: "Municipality north of Monterrey; the locality sits in this term",
      es: "Municipio al norte de Monterrey; la localidad queda en este término",
    },
    dossier: {
      en: "One of Nuevo León’s 51 municipalities. The cabecera is the town of Salinas Victoria; the Villarreal toponym is not the seat. It is a rural locality in the northern metro, on the old road toward the border. The legal class of the land — ejido versus private rancho — is a RAN and notarial question. This page has the gazetteer name, not the expediente.",
      es: "Uno de los 51 municipios de Nuevo León. La cabecera es el pueblo de Salinas Victoria; el topónimo Villarreal no es la sede. Es una localidad rural del metro norte, en el camino viejo hacia la frontera. La clase jurídica de la tierra — ejido versus rancho privado — es una cuestión de RAN y de notaría. Esta página tiene el nombre de gazetero, no el expediente.",
    },
    x: 220,
    y: 168,
  },
  {
    id: "monterrey",
    name: "Monterrey",
    short: "Monterrey",
    kind: "city",
    year: { en: "New Spain → present", es: "Nueva España → presente" },
    role: {
      en: "City where the surname sits densely",
      es: "Ciudad donde el apellido se agrupa",
    },
    dossier: {
      en: "Compiled public-name files put Villarreal around rank 17 in the municipality — about 8,400 people, roughly one in 137. Of Mexican Villarreals, about a third live in Nuevo León; Coahuila and Tamaulipas each about nine percent. Saturation here means regional density of a habitational surname, not a medieval foundation. Named bearers in the state’s political record include Antonio I. Villarreal of Lampazos (1879–1944), governor of Nuevo León in 1914. A later clock than 1274.",
      es: "Los ficheros públicos compilados ponen Villarreal hacia el rango 17 en el municipio — unos 8.400 personas, más o menos una de cada 137. De los Villarreal de México, cerca de un tercio vive en Nuevo León; Coahuila y Tamaulipas, unos nueve por ciento cada uno. La saturación aquí es densidad regional de un apellido habitacional, no una fundación medieval. Portadores nombrados en el acta política del estado incluyen a Antonio I. Villarreal de Lampazos (1879–1944), gobernador de Nuevo León en 1914. Un reloj posterior a 1274.",
    },
    x: 450,
    y: 300,
  },
  {
    id: "mansion",
    name: "La Mansión Villarreal",
    short: "La Mansión",
    kind: "building",
    year: { en: "1893 / hotel", es: "1893 / hotel" },
    role: {
      en: "Centro hotel occupying the Fábricas Apolo warehouse",
      es: "Hotel del centro que ocupa el almacén de Fábricas Apolo",
    },
    dossier: {
      en: "Av. Pino Suárez 806, Centro. The building is the 1893 warehouse of Fábricas Apolo (also called Droguería Apolo), Pino Suárez at Carlos Salazar Poniente, raised for the German-Mexican industrialist Alfred Guido Moebius. INAH catalogued it; in the 1980s it housed the Secretaría de Agricultura y Recursos Hidráulicos; later it became a hotel. The 2009 INAH paper writes “La Mansión Villa Real.” The public sign is Villarreal — one word. Same habitational form, two orthographies. Building history is industrial Monterrey. It is not the 1274 town, and this node does not carry the news cycle around the address.",
      es: "Av. Pino Suárez 806, Centro. El edificio es el almacén de 1893 de Fábricas Apolo (también Droguería Apolo), Pino Suárez esquina Carlos Salazar Poniente, alzado para el industrial germano-mexicano Alfred Guido Moebius. El INAH lo catalogó; en los años ochenta alojó la Secretaría de Agricultura y Recursos Hidráulicos; luego se volvió hotel. El artículo INAH de 2009 escribe «La Mansión Villa Real». El letrero público es Villarreal — una sola palabra. Misma forma habitacional, dos ortografías. La historia del edificio es Monterrey industrial. No es la villa de 1274, y este nodo no carga el ciclo de noticias alrededor de la dirección.",
    },
    x: 720,
    y: 236,
  },
  {
    id: "nuevoleon",
    name: "Nuevo León",
    short: "Nuevo León",
    kind: "region",
    year: { en: "later cohort", es: "cohorte posterior" },
    role: {
      en: "Mexican state of densest Villarreal incidence",
      es: "Estado mexicano de mayor incidencia Villarreal",
    },
    dossier: {
      en: "Spain itself holds a few thousand people named Villarreal. Mexico holds about a hundred thousand, and Nuevo León holds about a third of those. The surname is habitational: “one who came from Villareal / the royal estate,” a formation taken from several Iberian places. Density in this state is a New Spain and after fact — migration, not a naming clause from Jaime I. The state name is a third clock: Nuevo Reino de León, 1579, after the Kingdom of León — New León, not New Lion.",
      es: "La propia España tiene unos pocos miles de personas llamadas Villarreal. México tiene unos cien mil, y Nuevo León tiene cerca de un tercio de esos. El apellido es habitacional: «quien vino de Villareal / la heredad real», una formación tomada de varios lugares ibéricos. La densidad en este estado es un hecho de Nueva España y después — migración, no una cláusula de nombramiento de Jaime I. El nombre del estado es un tercer reloj: Nuevo Reino de León, 1579, por el Reino de León — New León, no New Lion.",
    },
    x: 180,
    y: 400,
  },
];

export const MODERN_EDGES: ModernEdge[] = [
  { from: "nuevoleon", to: "monterrey", kind: "state", label: { en: "state capital", es: "capital del estado" } },
  { from: "nuevoleon", to: "salinas", kind: "state", label: { en: "municipality of the state", es: "municipio del estado" } },
  { from: "salinas", to: "villarreales", kind: "in", label: { en: "locality in the term", es: "localidad en el término" } },
  { from: "monterrey", to: "salinas", kind: "metro", label: { en: "~40 km north", es: "~40 km al norte" } },
  { from: "monterrey", to: "mansion", kind: "in", label: { en: "centro address", es: "dirección del centro" } },
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
    claim: {
      en: "Los Villarreales is an INEGI rural locality (190450118) in Salinas Victoria, Nuevo León, inside the Monterrey metropolitan area. Census 2020: 633 inhabitants (316 men, 317 women).",
      es: "Los Villarreales es una localidad rural INEGI (190450118) en Salinas Victoria, Nuevo León, dentro del área metropolitana de Monterrey. Censo 2020: 633 habitantes (316 hombres, 317 mujeres).",
    },
    source: "INEGI, Censo de Población y Vivienda 2020; locality series 2000–2020.",
  },
  {
    id: "M2",
    status: "in-record",
    layer: "monterrey",
    claim: {
      en: "Hotel La Mansión Villarreal occupies the 1893 warehouse of Fábricas Apolo / Droguería Apolo at Pino Suárez and Carlos Salazar Poniente, Centro, Monterrey. The building is in the Catálogo Nacional de Monumentos Históricos Inmuebles.",
      es: "El hotel La Mansión Villarreal ocupa el almacén de 1893 de Fábricas Apolo / Droguería Apolo en Pino Suárez y Carlos Salazar Poniente, Centro, Monterrey. El edificio está en el Catálogo Nacional de Monumentos Históricos Inmuebles.",
    },
    source:
      "Garza Luna & Tovar Esquivel, “Guido Moebius y Las Fábricas Apolo,” Boletín de Monumentos Históricos 15 (2009); INAH, Catálogo Nacional, Nuevo León, t. IV (1985), pp. 1729–1730.",
  },
  {
    id: "M3",
    status: "in-record",
    layer: "monterrey",
    claim: {
      en: "In the 1980s the same building housed the Secretaría de Agricultura y Recursos Hidráulicos. The 2009 INAH paper already records it as a hotel under the trade name La Mansión Villa Real.",
      es: "En los años ochenta el mismo edificio alojó la Secretaría de Agricultura y Recursos Hidráulicos. El artículo INAH de 2009 ya lo registra como hotel bajo el nombre comercial La Mansión Villa Real.",
    },
    source: "Garza Luna & Tovar Esquivel 2009, p. 124 and fig. 2.",
  },
  {
    id: "M4",
    status: "adjacent",
    layer: "monterrey",
    claim: {
      en: "Compiled public-name files put about 104,000 people named Villarreal in Mexico, of whom about a third are in Nuevo León, with further clusters in Coahuila and Tamaulipas (~9% each). In Monterrey municipality the name sits around rank 17 (~8,400; about 1 in 137).",
      es: "Los ficheros públicos compilados ponen unos 104.000 llamados Villarreal en México, de los cuales cerca de un tercio están en Nuevo León, con racimos más en Coahuila y Tamaulipas (~9% cada uno). En el municipio de Monterrey el nombre queda hacia el rango 17 (~8.400; unas 1 de cada 137).",
    },
    source:
      "Forebears compilation of public name files — a distribution index, not an INEGI surname table. Treat as a later-cohort map.",
  },
  {
    id: "M5",
    status: "adjacent",
    layer: "monterrey",
    claim: {
      en: "Postal and land-market language around the locality also uses pueblo, ejido, Hacienda los Villarreales, ranchos and quintas (C.P. 65530). That is how the name sits on the ground. It is not, by itself, a RAN expediente.",
      es: "La lengua postal y de mercado de tierra alrededor de la localidad también usa pueblo, ejido, Hacienda los Villarreales, ranchos y quintas (C.P. 65530). Así queda el nombre en el suelo. No es, por sí solo, un expediente RAN.",
    },
    source: "SEPOMEX / C.P. 65530 listings; land notices naming the ejido and hacienda. Adjacent to the INEGI locality.",
  },
  {
    id: "M6",
    status: "adjacent",
    layer: "monterrey",
    claim: {
      en: "INAH writes the hotel as Villa Real (two words). The public sign is Villarreal (one word). Same habitational form; two orthographies. Neither spelling makes the building the 1274 town.",
      es: "El INAH escribe el hotel como Villa Real (dos palabras). El letrero público es Villarreal (una palabra). Misma forma habitacional; dos ortografías. Ninguna grafía hace del edificio la villa de 1274.",
    },
    source: "Garza Luna & Tovar Esquivel 2009 versus the hotel’s current trade name.",
  },
  {
    id: "M7",
    status: "adjacent",
    layer: "monterrey",
    claim: {
      en: "Antonio I. Villarreal (José Antonio Villarreal González, Lampazos de Naranjo, 1879–1944) was governor of Nuevo León in 1914 and later Secretary of Agriculture. A named bearer in the state’s political record — not the namer of the hotel or the ejido.",
      es: "Antonio I. Villarreal (José Antonio Villarreal González, Lampazos de Naranjo, 1879–1944) fue gobernador de Nuevo León en 1914 y luego secretario de Agricultura. Un portador nombrado en el acta política del estado — no el nominador del hotel ni del ejido.",
    },
    source: "Standard biographies; H. Congreso del Estado de Nuevo León, Archivo.",
  },
  {
    id: "M8",
    status: "not-in-record",
    layer: "monterrey",
    claim: {
      en: "There is no municipality named Villarreal de los Monterrey. Infantes (1939, Castellón) and Monterrey (Nuevo León) can both function as disambiguators. Only Infantes is a gazetteer suffix. Monterrey here is a claim of living geography, not a town on the map.",
      es: "No hay municipio llamado Villarreal de los Monterrey. Infantes (1939, Castellón) y Monterrey (Nuevo León) pueden ambos funcionar como desambiguadores. Solo Infantes es un sufijo de gazetero. Monterrey aquí es una afirmación de geografía viva, no un pueblo en el mapa.",
    },
    source: "INEGI municipal catalogue; no such municipio. The 1274 town’s later Castilian name is Villarreal de los Infantes.",
  },
  {
    id: "M9",
    status: "not-in-record",
    layer: "monterrey",
    claim: {
      en: "The 1274 carta pobla does not name Monterrey, this hotel, or this ejido. Place → surname (Iberia) and surname → place (Nuevo León) are opposite transonymizations. Do not wind them as one clock.",
      es: "La carta pobla de 1274 no nombra Monterrey, este hotel ni este ejido. Lugar → apellido (Iberia) y apellido → lugar (Nuevo León) son transonimizaciones opuestas. No se den cuerda como un solo reloj.",
    },
    source: "Carta pobla of 20 February 1274; this stratum is New Spain and after.",
  },
  {
    id: "M10",
    status: "in-record",
    layer: "monterrey",
    claim: {
      en: "Nuevo León keeps, with “Reino de” dropped, the 1579 name Nuevo Reino de León. INAFED: Luis de Carvajal y de la Cueva named it for the Kingdom of León, birthplace of Felipe II. English gloss is New León, not New Lion. León itself is from Latin Legio (Legio VII Gemina). The red lion on the 1943 state shield is folk-heraldry of that homonym.",
      es: "Nuevo León guarda, con «Reino de» caído, el nombre de 1579 Nuevo Reino de León. INAFED: Luis de Carvajal y de la Cueva lo nombró por el Reino de León, tierra natal de Felipe II. La glosa inglesa es New León, no New Lion. León mismo viene del latín Legio (Legio VII Gemina). El león rojo del escudo estatal de 1943 es heráldica popular de ese homónimo.",
    },
    source:
      "INAFED, Enciclopedia de los Municipios y Delegaciones, “Nomenclatura — Nuevo León”; Wiktionary, Nuevo León; state coat of arms adopted 1943–44.",
  },
  {
    id: "M11",
    status: "adjacent",
    layer: "monterrey",
    claim: {
      en: "Carvajal, a Portuguese New Christian of Jewish descent, obtained the 31 May 1579 capitulation and brought about a hundred families, many conversos from the León–Portugal border. The Inquisition later tried the household; Luis el Mozo wrote as Joseph Lumbroso. Local León pages title this “Un nuevo león”; Jewish-Mexican journalism restates a discreet Jewish colony. That is a sixteenth-century converso colonization — not a modern Israeli state project, and not the 1274 carta pobla.",
      es: "Carvajal, un cristiano nuevo portugués de linaje judío, obtuvo la capitulación del 31 de mayo de 1579 y trajo unas cien familias, muchas conversas de la frontera León–Portugal. La Inquisición juzgó después a la casa; Luis el Mozo escribió como Joseph Lumbroso. Páginas leonesas locales titulan esto «Un nuevo león»; el periodismo judío-mexicano restablece una colonia judía discreta. Eso es una colonización conversa del siglo XVI — no un proyecto estatal israelí moderno, y no la carta pobla de 1274.",
    },
    source:
      "Capitulación of 31 May 1579; INAH, Historias 88 (2014); Diario Judío, “Luis de Carvajal, fundador del Nuevo Reino de León”; León Virtual, “Judíos leoneses fundadores de Nuevo León” (heading: “Un nuevo león”). Eugenio del Hoyo records a 1933 Mexican debate on whether the landing was a Jewish colonization experiment — a later question, not the 1579 naming clause.",
  },
  {
    id: "M12",
    status: "not-in-record",
    layer: "monterrey",
    claim: {
      en: "English “New Lion” is a machine calque of Nuevo León. VisitMexico published it in August 2020 (Guerrero as Warrior, Torreón as Turret) and took it down — that is the thread that disappeared. Hebrew lion language — Lion of Judah, Ariel “lion of God,” Operation Rising Lion from Numbers 23:24 — is Israel’s own clock. It does not name this Mexican state. No record of a modern Israeli project to found or rename Nuevo León as a New Lion. Do not wind the calque, the 1579 kingdom, and the biblical lion as one clock.",
      es: "El inglés «New Lion» es un calco de máquina de Nuevo León. VisitMexico lo publicó en agosto de 2020 (Guerrero como Warrior, Torreón como Turret) y lo bajó — ese es el hilo que desapareció. La lengua hebrea del león — León de Judá, Ariel «león de Dios», la operación Rising Lion de Números 23:24 — es el reloj propio de Israel. No nombra este estado mexicano. No hay acta de un proyecto israelí moderno para fundar o renombrar Nuevo León como New Lion. No se den cuerda el calco, el reino de 1579 y el león bíblico como un solo reloj.",
    },
    source:
      "VisitMexico English pages, 7 August 2020, subsequently reverted (AM, Debate, Al Día). Numbers 23:24; IDF designation Am ke-lavi / Rising Lion, June 2025. León, Guanajuato’s 2025 declaration with Israel is a different León.",
  },
  {
    id: "M13",
    status: "in-record",
    layer: "monterrey",
    claim: {
      en: "Mexico ratified ILO Convention 169 on 5 September 1990. Nuevo León’s Ley de los Derechos de las Personas Indígenas y Afromexicanas (2012; reforma 2026) takes autoadscripción as the criterion. The pre-colonial landscape is Coahuiltecan and neighboring — Alazapas, Guachichiles, Borrados, Tamaulipec groups.",
      es: "México ratificó el Convenio 169 de la OIT el 5 de septiembre de 1990. La Ley de los Derechos de las Personas Indígenas y Afromexicanas de Nuevo León (2012; reforma 2026) toma la autoadscripción como criterio. El paisaje precolonial es coahuilteco y vecino — alazapas, guachichiles, borrados, grupos tamaulipecos.",
    },
    source:
      "ILO NORMLEX, C169, Mexico; H. Congreso del Estado de Nuevo León; Handbook of Texas, Coahuiltecan Indians.",
  },
  {
    id: "M14",
    status: "adjacent",
    layer: "monterrey",
    claim: {
      en: "A living Monterrey Villarreal line reports nearly thirty percent Indigenous American ancestry. That is family-stated genetic data of a later New World cohort. This page does not republish a kit file. Date it. Do not erase it. Do not back-date it to 1274.",
      es: "Una línea Villarreal viva de Monterrey reporta cerca de un treinta por ciento de ancestría indígena americana. Eso es dato genético declarado de familia de una cohorte posterior del Nuevo Mundo. Esta página no republica un fichero de kit. Féchese. No se borre. No se retrodate a 1274.",
    },
    source: "Oral plus genetic clocks of this dossier. A percentage is not a pueblo originario by itself.",
  },
  {
    id: "M15",
    status: "adjacent",
    layer: "monterrey",
    claim: {
      en: "Family memory: Roberto Villarreal talked about the treasure, the pope, and the Knights Templar. Adjacent to a documented seizure — Philip IV, 1307; Clement V, 1312. Not a named Villarreal hoard in the published acts.",
      es: "Memoria de familia: Roberto Villarreal hablaba del tesoro, del papa y de los Caballeros Templarios. Adyacente a una presa documentada — Felipe IV, 1307; Clemente V, 1312. No un tesoro Villarreal nombrado en las actas publicadas.",
    },
    source: "Templar essay on this site; Barber; papal suppression. Oral clock.",
  },
  {
    id: "M16",
    status: "not-in-record",
    layer: "monterrey",
    claim: {
      en: "A Hebrew-Egyptian people at 50,000 years; a kit percentage as UNDRIP peoplehood; one Israelite-Indigenous-Templar origin glued to 1274. Out-of-Africa is a species clock. Hebrew and Egyptian are historical ethnies. Levant → Italy → Iberia is a later diaspora shape already dated on this page (1391, 1492, Carvajal). Do not wind them as one.",
      es: "Un pueblo hebreo-egipcio a 50.000 años; un porcentaje de kit como pueblo UNDRIP; un origen israelita-indígena-templario pegado a 1274. Out-of-Africa es un reloj de especie. Hebreo y egipcio son etnias históricas. Levante → Italia → Iberia es una forma diaspórica posterior ya fechada en esta página (1391, 1492, Carvajal). No se den cuerda como uno.",
    },
    source: "This dossier’s identity-rights claim. Rights to the story do not require a merged origin.",
  },
];
