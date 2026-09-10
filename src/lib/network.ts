export type PersonKind = "crown" | "named" | "office" | "group" | "community";

export type Person = {
  id: string;
  name: string;
  short: string;
  kind: PersonKind;
  year: string;
  role: string;
  dossier: string;
  x: number;
  y: number;
};

export type EdgeKind = "grant" | "office" | "neighbor" | "recruit" | "finance" | "later";

export type NetworkEdge = {
  from: string;
  to: string;
  kind: EdgeKind;
  label: string;
};

export type LedgerRow = {
  id: string;
  status: "in-record" | "adjacent" | "not-in-record";
  claim: string;
  source: string;
  layer?: "1274" | "monterrey";
};

export const PEOPLE: Person[] = [
  {
    id: "jaime",
    name: "James I of Aragon",
    short: "James I",
    kind: "crown",
    year: "1274",
    role: "King; grantor of the carta pobla",
    dossier:
      "Signs the 20 February 1274 foundation as Jaime, king of Aragon, Majorca, and Valencia. The legal name of the place is Villa Regalis / Vila-real — the king’s village. Raised decades earlier (1214–c. 1218) as a Templar ward at Monzón; that earlier graph must not be collapsed into the naming clause.",
    x: 450,
    y: 48,
  },
  {
    id: "pere",
    name: "Infant Pere",
    short: "Infant Pere",
    kind: "crown",
    year: "1269–72",
    role: "Lord of Burriana; earlier grants",
    dossier:
      "As lord of Burriana he issues land in the future Vila-real zone before the 1274 charter, including a 18 December 1269 grant at Villa Regalis. Shows the place existed as a royal settlement before the formal carta pobla. The same man, as Peter III, re-issues privileges on 12 September 1279 and invites Saracens from Castalla–Biar because the first charter had not filled the town.",
    x: 160,
    y: 130,
  },
  {
    id: "notary",
    name: "Simó de Sant Feliu",
    short: "Simó, notary",
    kind: "office",
    year: "1274",
    role: "Notary of the carta pobla",
    dossier:
      "Closes the foundation document with the notarial rubric. A named officer of the act, not a settler and not a naming agent. Witnesses at Valencia: Arnau of Valencia, James of Huesca, Bernat Guillem d’Entença, Blasco Maza, Sancho Martínez de Oblites.",
    x: 740,
    y: 130,
  },
  {
    id: "paris",
    name: "Paris, silversmith",
    short: "Paris",
    kind: "named",
    year: "1272",
    role: "Royal craftsman; land to his daughter",
    dossier:
      "8 July 1272: Jaime grants six jovates to the daughter of Paris, the king’s silversmith. Typical of the pre-charter grants to people already in royal service.",
    x: 70,
    y: 260,
  },
  {
    id: "escorna",
    name: "Ramon Escorna",
    short: "Escorna",
    kind: "named",
    year: "1272",
    role: "Grantee; acequia already mentioned",
    dossier:
      "19 September 1272 grant. The same cluster of documents already names the new acequia under construction — the waterworks precede the published foundation date.",
    x: 250,
    y: 260,
  },
  {
    id: "peyronet",
    name: "Frey Petrus Peyronet",
    short: "Peyronet",
    kind: "office",
    year: "1274",
    role: "Royal almoner; acequia finance",
    dossier:
      "12 May 1274: Jaime sells two years of Burriana rents so that Frey Petrus Peyronet, his almoner, can apply the money to the new acequia of Ville Regalis. Templar personnel lists independently name a Peter Peyronet as commander at Burriana c. 1273–1277. Treat the two tokens as a dossier problem — probable identity, not a forced merge.",
    x: 450,
    y: 260,
  },
  {
    id: "vidal",
    name: "Salomó Vidal",
    short: "Vidal",
    kind: "named",
    year: "c. 1274",
    role: "Jewish recruiter of settlers",
    dossier:
      "The municipal history of Vila-real records that Catalan courtiers to whom the king first offered the new village declined the harsh terms, and that the Jewish agent Salomó Vidal then recruited inhabitants. A documented Jewish hand in peopling the town — not a claim that he named it.",
    x: 650,
    y: 260,
  },
  {
    id: "settlers",
    name: "Unnamed settlers",
    short: "Settlers",
    kind: "group",
    year: "1274",
    role: "Collective addressees of the charter",
    dossier:
      "The carta pobla addresses “all and each of the settlers of the population of Vila-real.” First stable contingents are described as Morellans, Aragonese, and later Catalans. No Villarreal lineage is listed among them.",
    x: 830,
    y: 260,
  },
  {
    id: "temple-xivert",
    name: "Templars of Xivert",
    short: "Xivert Temple",
    kind: "group",
    year: "1233–34",
    role: "Neighboring commandery",
    dossier:
      "For help at the conquest of Burriana, Jaime granted Chivert/Xivert in 1233. The commandery is the local Templar seat in the Maestrazgo, next door to the new royal village — adjacent power, not the naming clause.",
    x: 160,
    y: 410,
  },
  {
    id: "temple-burriana",
    name: "Templars of Burriana",
    short: "Burriana Temple",
    kind: "group",
    year: "1233–74",
    role: "Share of city, tithes, and a commander",
    dossier:
      "The Order held a third of Burriana after 1233 and later two-thirds of its tithes. The town of Vila-real is carved from Burriana’s term. Same landscape as the Temple, different legal founder.",
    x: 450,
    y: 410,
  },
  {
    id: "aljama",
    name: "Aljama of Vila-real",
    short: "Aljama",
    kind: "community",
    year: "13th–15th c.",
    role: "Documented Jewish community",
    dossier:
      "A judería street is noted in local studies; Hebrew University published Three Jewish Communities in Medieval Valencia: Castellón, Burriana, Villarreal. After 1391 the community shrinks; by 1492 the remnant is very small. Sephardic later use of the surname is a separate stratum from the 1274 toponym.",
    x: 740,
    y: 410,
  },
];

export const EDGES: NetworkEdge[] = [
  { from: "jaime", to: "pere", kind: "office", label: "son / Burriana lordship" },
  { from: "jaime", to: "notary", kind: "office", label: "charter of 1274" },
  { from: "jaime", to: "settlers", kind: "grant", label: "carta pobla" },
  { from: "jaime", to: "paris", kind: "grant", label: "1272 land" },
  { from: "jaime", to: "escorna", kind: "grant", label: "1272 land" },
  { from: "jaime", to: "peyronet", kind: "finance", label: "acequia funds" },
  { from: "pere", to: "paris", kind: "grant", label: "pre-charter grants" },
  { from: "vidal", to: "settlers", kind: "recruit", label: "recruits inhabitants" },
  { from: "peyronet", to: "temple-burriana", kind: "office", label: "possible same man" },
  { from: "temple-xivert", to: "temple-burriana", kind: "neighbor", label: "same order" },
  { from: "temple-burriana", to: "settlers", kind: "neighbor", label: "carved from Burriana" },
  { from: "vidal", to: "aljama", kind: "later", label: "Jewish presence" },
  { from: "settlers", to: "aljama", kind: "later", label: "judería in the town" },
];

export const LEDGER: LedgerRow[] = [
  {
    id: "L1",
    status: "in-record",
    layer: "1274",
    claim: "Vila-real is founded 20 February 1274 by James I of Aragon as a royal village (Villa Regalis).",
    source: "Carta pobla; Crown of Aragon reg. 19; municipal history.",
  },
  {
    id: "L2",
    status: "in-record",
    layer: "1274",
    claim: "The town is carved from the term of Burriana and given royal status and the four-bar royal standard.",
    source: "Carta pobla; Ajuntament de Vila-real.",
  },
  {
    id: "L3",
    status: "in-record",
    layer: "1274",
    claim: "Land grants in the zone already exist by 1269–1272 (Paris the silversmith’s daughter; Ramon Escorna).",
    source: "Jaime I registers; Ferrer Navarro, Una fundación de Jaime I.",
  },
  {
    id: "L4",
    status: "in-record",
    layer: "1274",
    claim: "12 May 1274: Burriana rents are sold to fund the new acequia of Ville Regalis through Frey Petrus Peyronet, royal almoner.",
    source: "ACA, Jaime I, reg. 19.",
  },
  {
    id: "L5",
    status: "in-record",
    layer: "1274",
    claim: "Templars received Xivert (Chivert) in 1233 for help at Burriana, and a third of Burriana itself.",
    source: "Forey, The Templars in the Corona de Aragón.",
  },
  {
    id: "L6",
    status: "in-record",
    layer: "1274",
    claim: "Salomó Vidal, a Jewish agent, recruited settlers after Catalan courtiers declined the harsh terms.",
    source: "Ajuntament de Vila-real, Història.",
  },
  {
    id: "L7",
    status: "in-record",
    layer: "1274",
    claim: "A Jewish aljama of Villarreal is documented; a monograph treats Castellón, Burriana, and Villarreal together.",
    source: "Doñate Sebastiá & Magdalena Nom de Déu, 1990.",
  },
  {
    id: "L8",
    status: "in-record",
    layer: "1274",
    claim: "James I spent his minority (from 1214) as a Templar ward at Monzón under Guillem de Montrodón.",
    source: "Llibre dels fets; standard biographies of Jaime I.",
  },
  {
    id: "L9",
    status: "adjacent",
    layer: "1274",
    claim: "Frey Petrus Peyronet (almoner, 1274) may be the same Peter Peyronet listed as Templar commander at Burriana c. 1273–1277.",
    source: "Name identity is a dossier question; do not merge without a source that equates them.",
  },
  {
    id: "L10",
    status: "adjacent",
    layer: "1274",
    claim: "The surname Villarreal later appears in Sephardic, converso, and Inquisition contexts, and in the Portuguese Villareal family.",
    source: "Habitational surname + diaspora records; a later stratum than 1274.",
  },
  {
    id: "L11",
    status: "adjacent",
    layer: "1274",
    claim: "Modern Villarreal DNA clusters with Semitic / Sephardic markers in some tested lines.",
    source: "Genetic genealogy of a later cohort — not a 1274 narrative.",
  },
  {
    id: "L12",
    status: "not-in-record",
    layer: "1274",
    claim: "A Knights Templar family named Villarreal, coming from Israel, named the town in 1274.",
    source: "No such person appears in the published 1269–1274 grants.",
  },
  {
    id: "L13",
    status: "not-in-record",
    layer: "1274",
    claim: "Templars warned Jaime of an assassination, saved him, and were forced to receive Vila-real as payment.",
    source: "The 1214 rescue from Montfort is real and earlier; it is not a 1274 naming bargain.",
  },
  {
    id: "L14",
    status: "not-in-record",
    layer: "1274",
    claim: "Anyone in or around Čapek’s R.U.R. was named Robert, causing the rhyme.",
    source: "The play’s characters are Domin, Fabry, Helena, Radius, and others; the word is from robota.",
  },
  {
    id: "L15",
    status: "in-record",
    layer: "1274",
    claim: "12 September 1279: Peter III re-issues privileges and invites Saracens from Castalla–Biar to populate Vila-real.",
    source: "Second carta puebla; the first charter had not filled the town.",
  },
  {
    id: "L16",
    status: "in-record",
    layer: "1274",
    claim: "The Temple is suppressed in 1312; Valencian Templar goods pass to the Order of Montesa in 1317–19.",
    source: "Papal suppression; foundation of Montesa. By 1429 there is no Temple left to expel anyone.",
  },
  {
    id: "L17",
    status: "in-record",
    layer: "1274",
    claim: "July 1391: Valencia city’s aljama is destroyed. In Vila-real the reported pattern is conversion or flight more than massacre.",
    source: "Hinojosa Montalvo; Furió.",
  },
  {
    id: "L18",
    status: "not-in-record",
    layer: "1274",
    claim: "A 1429 edict or riot forced a Villarreal lineage to leave.",
    source: "The year was searched as a dated event; 1391 and 1492 are what returned. Kept as a gap, not as a hidden proof.",
  },
  {
    id: "L19",
    status: "adjacent",
    layer: "1274",
    claim: "Jamestown (1607) copies James I of England’s given name; Vila-real copies the office (royal village), not “Jaume-town.”",
    source: "Two royal toponyms, two naming engines.",
  },
  {
    id: "L20",
    status: "adjacent",
    layer: "1274",
    claim: "A living Villarreal line may cluster with Sephardic or Levantine samples. That is ancestry of a later cohort, not memory of a 1274 charter.",
    source: "Genetic genealogy as a distribution map. Date the clock.",
  },
];

export const GLOSSARY: { term: string; text: string }[] = [
  {
    term: "Onomastics",
    text: "The study of names — their form, meaning, history, and social use.",
  },
  {
    term: "Anthroponymy",
    text: "The branch of onomastics that treats personal names: given names, surnames, nicknames, bynames.",
  },
  {
    term: "Prosopography",
    text: "Collective biography of a defined group. You fill the same fields for many fragmentary lives, then read the pattern of connections — not a hero narrative.",
  },
  {
    term: "Factoid",
    text: "One dated assertion from one source: source S, date D, person P did act A in place L. A person is a bundle of factoids, not a single merged story.",
  },
  {
    term: "Carta pobla",
    text: "A settlement charter granting land, law, and privileges to people who will inhabit a new town.",
  },
  {
    term: "Aljama",
    text: "The organized Jewish community of a medieval Iberian town, with its own officers, synagogue, and tax.",
  },
  {
    term: "Transonymization",
    text: "A name changing class: a place-name becoming a surname, or a personal name becoming a place-name.",
  },
  {
    term: "Homophony",
    text: "Same or similar sound, different history. Roboto / Roberto — and the English glosses Robot / Robert — and Yisrael / Israel are the working examples in this essay. Speech recognizers trip on the same near pair.",
  },
  {
    term: "Fuero of Aragon",
    text: "The law granted to Vila-real in 1274, the same franchise as Burriana. An older Aragonese code inside a Valencian term.",
  },
  {
    term: "Order of Montesa",
    text: "Founded 1317–19 in the kingdom of Valencia to receive the suppressed Templars’ goods. After this date “Templar” in the region is memory, not a living order.",
  },
  {
    term: "Converso",
    text: "A Jew converted to Christianity, often under the pressure of 1391 and after. The Inquisition’s later problem is this group, not the 1492 exiles who left as Jews.",
  },
  {
    term: "Incarnation year",
    text: "The 1274 charter is dated 10th kalends of March 1273 because the year still began on 25 March. Convert before you argue about the year.",
  },
  {
    term: "Ejido",
    text: "Mexican community agrarian land under the post-revolutionary reform regime. A locality can carry an ejido name in postal and land language without this page having the RAN expediente in hand.",
  },
  {
    term: "Habitational density",
    text: "A surname clustering in a region because people moved there. Density is not a founding clause. Villarreal in Nuevo León is a later-cohort map, not Vila-real in 1274.",
  },
  {
    term: "Villa Real / Villarreal",
    text: "The same habitational form in two orthographies. INAH writes the Monterrey hotel Villa Real; the public sign is Villarreal. The 1274 Latin is Villa Regalis.",
  },
];

export const EDGE_COLORS: Record<EdgeKind, string> = {
  grant: "#3e534c",
  office: "#6d6558",
  neighbor: "#8a8173",
  recruit: "#3e534c",
  finance: "#2a2620",
  later: "#b8ad9c",
};
