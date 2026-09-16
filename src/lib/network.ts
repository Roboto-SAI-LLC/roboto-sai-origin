import type { LocaleText } from "@/lib/i18n";

export type PersonKind = "crown" | "named" | "office" | "group" | "community";

export type Person = {
  id: string;
  name: LocaleText;
  short: LocaleText;
  kind: PersonKind;
  year: string;
  role: LocaleText;
  dossier: LocaleText;
  x: number;
  y: number;
};

export type EdgeKind = "grant" | "office" | "neighbor" | "recruit" | "finance" | "later";

export type NetworkEdge = {
  from: string;
  to: string;
  kind: EdgeKind;
  label: LocaleText;
};

export type LedgerRow = {
  id: string;
  status: "in-record" | "adjacent" | "not-in-record";
  claim: LocaleText;
  source: string;
  layer?: "1274" | "monterrey";
};

export const PEOPLE: Person[] = [
  {
    id: "jaime",
    name: { en: "James I of Aragon", es: "Jaime I de Aragón" },
    short: { en: "James I", es: "Jaime I" },
    kind: "crown",
    year: "1274",
    role: {
      en: "King; grantor of the carta pobla",
      es: "Rey; otorgante de la carta pobla",
    },
    dossier: {
      en: "Signs the 20 February 1274 foundation as Jaime, king of Aragon, Majorca, and Valencia. The legal name of the place is Villa Regalis / Vila-real — the king’s village. Raised decades earlier (1214–c. 1218) as a Templar ward at Monzón; that earlier graph must not be collapsed into the naming clause.",
      es: "Firma la fundación del 20 de febrero de 1274 como Jaime, rey de Aragón, Mallorca y Valencia. El nombre jurídico del lugar es Villa Regalis / Vila-real — la villa del rey. Criado décadas antes (1214–c. 1218) como pupilo templario en Monzón; ese grafo anterior no debe fundirse con la cláusula de nombramiento.",
    },
    x: 450,
    y: 48,
  },
  {
    id: "pere",
    name: { en: "Infant Pere", es: "Infant Pere" },
    short: { en: "Infant Pere", es: "Infant Pere" },
    kind: "crown",
    year: "1269–72",
    role: {
      en: "Lord of Burriana; earlier grants",
      es: "Señor de Burriana; mercedes anteriores",
    },
    dossier: {
      en: "As lord of Burriana he issues land in the future Vila-real zone before the 1274 charter, including a 18 December 1269 grant at Villa Regalis. Shows the place existed as a royal settlement before the formal carta pobla. The same man, as Peter III, re-issues privileges on 12 September 1279 and invites Saracens from Castalla–Biar because the first charter had not filled the town.",
      es: "Como señor de Burriana otorga tierra en la zona de la futura Vila-real antes de la carta de 1274, incluida una merced del 18 de diciembre de 1269 en Villa Regalis. Muestra que el lugar existía como asentamiento real antes de la carta pobla formal. El mismo hombre, como Pedro III, reexpide privilegios el 12 de septiembre de 1279 e invita sarracenos de Castalla–Biar porque la primera carta no había llenado la villa.",
    },
    x: 160,
    y: 130,
  },
  {
    id: "notary",
    name: { en: "Simó de Sant Feliu", es: "Simó de Sant Feliu" },
    short: { en: "Simó, notary", es: "Simó, notario" },
    kind: "office",
    year: "1274",
    role: {
      en: "Notary of the carta pobla",
      es: "Notario de la carta pobla",
    },
    dossier: {
      en: "Closes the foundation document with the notarial rubric. A named officer of the act, not a settler and not a naming agent. Witnesses at Valencia: Arnau of Valencia, James of Huesca, Bernat Guillem d’Entença, Blasco Maza, Sancho Martínez de Oblites.",
      es: "Cierra el documento de fundación con la rúbrica notarial. Un oficial nombrado del acta, no un poblador y no un agente que nombra. Testigos en Valencia: Arnau de Valencia, Jaime de Huesca, Bernat Guillem d’Entença, Blasco Maza, Sancho Martínez de Oblites.",
    },
    x: 740,
    y: 130,
  },
  {
    id: "paris",
    name: { en: "Paris, silversmith", es: "Paris, platero" },
    short: { en: "Paris", es: "Paris" },
    kind: "named",
    year: "1272",
    role: {
      en: "Royal craftsman; land to his daughter",
      es: "Artesano real; tierra a su hija",
    },
    dossier: {
      en: "8 July 1272: Jaime grants six jovates to the daughter of Paris, the king’s silversmith. Typical of the pre-charter grants to people already in royal service.",
      es: "8 de julio de 1272: Jaime otorga seis jovadas a la hija de Paris, platero del rey. Típico de las mercedes anteriores a la carta, a gente ya al servicio real.",
    },
    x: 70,
    y: 260,
  },
  {
    id: "escorna",
    name: { en: "Ramon Escorna", es: "Ramon Escorna" },
    short: { en: "Escorna", es: "Escorna" },
    kind: "named",
    year: "1272",
    role: {
      en: "Grantee; acequia already mentioned",
      es: "Beneficiario; la acequia ya se nombra",
    },
    dossier: {
      en: "19 September 1272 grant. The same cluster of documents already names the new acequia under construction — the waterworks precede the published foundation date.",
      es: "Merced del 19 de septiembre de 1272. El mismo racimo de documentos ya nombra la acequia nueva en construcción — las obras de agua preceden a la fecha publicada de fundación.",
    },
    x: 250,
    y: 260,
  },
  {
    id: "peyronet",
    name: { en: "Frey Petrus Peyronet", es: "Frey Petrus Peyronet" },
    short: { en: "Peyronet", es: "Peyronet" },
    kind: "office",
    year: "1274",
    role: {
      en: "Royal almoner; acequia finance",
      es: "Limosnero real; finanza de la acequia",
    },
    dossier: {
      en: "12 May 1274: Jaime sells two years of Burriana rents so that Frey Petrus Peyronet, his almoner, can apply the money to the new acequia of Ville Regalis. Templar personnel lists independently name a Peter Peyronet as commander at Burriana c. 1273–1277. Treat the two tokens as a dossier problem — probable identity, not a forced merge.",
      es: "12 de mayo de 1274: Jaime vende dos años de rentas de Burriana para que Frey Petrus Peyronet, su limosnero, aplique el dinero a la acequia nueva de Ville Regalis. Listas de personal templario nombran por separado a un Peter Peyronet como comendador de Burriana c. 1273–1277. Trátense los dos tokens como un problema de dossier — identidad probable, no una fusión forzada.",
    },
    x: 450,
    y: 260,
  },
  {
    id: "vidal",
    name: { en: "Salomó Vidal", es: "Salomó Vidal" },
    short: { en: "Vidal", es: "Vidal" },
    kind: "named",
    year: "c. 1274",
    role: {
      en: "Jewish recruiter of settlers",
      es: "Reclutador judío de pobladores",
    },
    dossier: {
      en: "The municipal history of Vila-real records that Catalan courtiers to whom the king first offered the new village declined the harsh terms, and that the Jewish agent Salomó Vidal then recruited inhabitants. A documented Jewish hand in peopling the town — not a claim that he named it.",
      es: "La historia municipal de Vila-real registra que los cortesanos catalanes a quienes el rey ofreció primero la villa nueva rechazaron las condiciones duras, y que el agente judío Salomó Vidal reclutó entonces habitantes. Una mano judía documentada en el poblamiento de la villa — no una afirmación de que él la nombró.",
    },
    x: 650,
    y: 260,
  },
  {
    id: "settlers",
    name: { en: "Unnamed settlers", es: "Pobladores sin nombre" },
    short: { en: "Settlers", es: "Pobladores" },
    kind: "group",
    year: "1274",
    role: {
      en: "Collective addressees of the charter",
      es: "Destinatarios colectivos de la carta",
    },
    dossier: {
      en: "The carta pobla addresses “all and each of the settlers of the population of Vila-real.” First stable contingents are described as Morellans, Aragonese, and later Catalans. No Villarreal lineage is listed among them.",
      es: "La carta pobla se dirige a «todos y cada uno de los pobladores de la población de Vila-real». Los primeros contingentes estables se describen como morellanos, aragoneses y, más tarde, catalanes. Ningún linaje Villarreal figura entre ellos.",
    },
    x: 830,
    y: 260,
  },
  {
    id: "temple-xivert",
    name: { en: "Templars of Xivert", es: "Templarios de Xivert" },
    short: { en: "Xivert Temple", es: "Templo de Xivert" },
    kind: "group",
    year: "1233–34",
    role: {
      en: "Neighboring commandery",
      es: "Encomienda vecina",
    },
    dossier: {
      en: "For help at the conquest of Burriana, Jaime granted Chivert/Xivert in 1233. The commandery is the local Templar seat in the Maestrazgo, next door to the new royal village — adjacent power, not the naming clause.",
      es: "Por la ayuda en la conquista de Burriana, Jaime otorgó Chivert/Xivert en 1233. La encomienda es la sede templaria local en el Maestrazgo, al lado de la villa real nueva — poder adyacente, no la cláusula de nombramiento.",
    },
    x: 160,
    y: 410,
  },
  {
    id: "temple-burriana",
    name: { en: "Templars of Burriana", es: "Templarios de Burriana" },
    short: { en: "Burriana Temple", es: "Templo de Burriana" },
    kind: "group",
    year: "1233–74",
    role: {
      en: "Share of city, tithes, and a commander",
      es: "Parte de la ciudad, diezmos y un comendador",
    },
    dossier: {
      en: "The Order held a third of Burriana after 1233 and later two-thirds of its tithes. The town of Vila-real is carved from Burriana’s term. Same landscape as the Temple, different legal founder.",
      es: "La Orden tuvo un tercio de Burriana después de 1233 y luego dos tercios de sus diezmos. La villa de Vila-real se talla del término de Burriana. Mismo paisaje que el Templo, distinto fundador jurídico.",
    },
    x: 450,
    y: 410,
  },
  {
    id: "aljama",
    name: { en: "Aljama of Vila-real", es: "Aljama de Vila-real" },
    short: { en: "Aljama", es: "Aljama" },
    kind: "community",
    year: "13th–15th c.",
    role: {
      en: "Documented Jewish community",
      es: "Comunidad judía documentada",
    },
    dossier: {
      en: "A judería street is noted in local studies; Hebrew University published Three Jewish Communities in Medieval Valencia: Castellón, Burriana, Villarreal. After 1391 the community shrinks; by 1492 the remnant is very small. Sephardic later use of the surname is a separate stratum from the 1274 toponym.",
      es: "Una calle de judería se anota en estudios locales; la Universidad Hebrea publicó Three Jewish Communities in Medieval Valencia: Castellón, Burriana, Villarreal. Después de 1391 la comunidad se encoge; hacia 1492 el resto es muy pequeño. El uso sefardí posterior del apellido es un estrato distinto del topónimo de 1274.",
    },
    x: 740,
    y: 410,
  },
];

export const EDGES: NetworkEdge[] = [
  { from: "jaime", to: "pere", kind: "office", label: { en: "son / Burriana lordship", es: "hijo / señorío de Burriana" } },
  { from: "jaime", to: "notary", kind: "office", label: { en: "charter of 1274", es: "carta de 1274" } },
  { from: "jaime", to: "settlers", kind: "grant", label: { en: "carta pobla", es: "carta pobla" } },
  { from: "jaime", to: "paris", kind: "grant", label: { en: "1272 land", es: "tierra de 1272" } },
  { from: "jaime", to: "escorna", kind: "grant", label: { en: "1272 land", es: "tierra de 1272" } },
  { from: "jaime", to: "peyronet", kind: "finance", label: { en: "acequia funds", es: "fondos de la acequia" } },
  { from: "pere", to: "paris", kind: "grant", label: { en: "pre-charter grants", es: "mercedes anteriores a la carta" } },
  { from: "vidal", to: "settlers", kind: "recruit", label: { en: "recruits inhabitants", es: "recluta habitantes" } },
  { from: "peyronet", to: "temple-burriana", kind: "office", label: { en: "possible same man", es: "posible el mismo hombre" } },
  { from: "temple-xivert", to: "temple-burriana", kind: "neighbor", label: { en: "same order", es: "la misma orden" } },
  { from: "temple-burriana", to: "settlers", kind: "neighbor", label: { en: "carved from Burriana", es: "tallada de Burriana" } },
  { from: "vidal", to: "aljama", kind: "later", label: { en: "Jewish presence", es: "presencia judía" } },
  { from: "settlers", to: "aljama", kind: "later", label: { en: "judería in the town", es: "judería en la villa" } },
];

export const LEDGER: LedgerRow[] = [
  {
    id: "L1",
    status: "in-record",
    layer: "1274",
    claim: {
      en: "Vila-real is founded 20 February 1274 by James I of Aragon as a royal village (Villa Regalis).",
      es: "Vila-real se funda el 20 de febrero de 1274 por Jaime I de Aragón como villa real (Villa Regalis).",
    },
    source: "Carta pobla; Crown of Aragon reg. 19; municipal history.",
  },
  {
    id: "L2",
    status: "in-record",
    layer: "1274",
    claim: {
      en: "The town is carved from the term of Burriana and given royal status and the four-bar royal standard.",
      es: "La villa se talla del término de Burriana y recibe estatuto real y el senyal real de cuatro barras.",
    },
    source: "Carta pobla; Ajuntament de Vila-real.",
  },
  {
    id: "L3",
    status: "in-record",
    layer: "1274",
    claim: {
      en: "Land grants in the zone already exist by 1269–1272 (Paris the silversmith’s daughter; Ramon Escorna).",
      es: "Ya hay mercedes de tierra en la zona hacia 1269–1272 (la hija de Paris el platero; Ramon Escorna).",
    },
    source: "Jaime I registers; Ferrer Navarro, Una fundación de Jaime I.",
  },
  {
    id: "L4",
    status: "in-record",
    layer: "1274",
    claim: {
      en: "12 May 1274: Burriana rents are sold to fund the new acequia of Ville Regalis through Frey Petrus Peyronet, royal almoner.",
      es: "12 de mayo de 1274: se venden rentas de Burriana para financiar la acequia nueva de Ville Regalis por medio de Frey Petrus Peyronet, limosnero real.",
    },
    source: "ACA, Jaime I, reg. 19.",
  },
  {
    id: "L5",
    status: "in-record",
    layer: "1274",
    claim: {
      en: "Templars received Xivert (Chivert) in 1233 for help at Burriana, and a third of Burriana itself.",
      es: "Los templarios recibieron Xivert (Chivert) en 1233 por la ayuda en Burriana, y un tercio de la propia Burriana.",
    },
    source: "Forey, The Templars in the Corona de Aragón.",
  },
  {
    id: "L6",
    status: "in-record",
    layer: "1274",
    claim: {
      en: "Salomó Vidal, a Jewish agent, recruited settlers after Catalan courtiers declined the harsh terms.",
      es: "Salomó Vidal, un agente judío, reclutó pobladores después de que los cortesanos catalanes rechazaran las condiciones duras.",
    },
    source: "Ajuntament de Vila-real, Història.",
  },
  {
    id: "L7",
    status: "in-record",
    layer: "1274",
    claim: {
      en: "A Jewish aljama of Villarreal is documented; a monograph treats Castellón, Burriana, and Villarreal together.",
      es: "Una aljama judía de Villarreal está documentada; una monografía trata Castellón, Burriana y Villarreal juntas.",
    },
    source: "Doñate Sebastiá & Magdalena Nom de Déu, 1990.",
  },
  {
    id: "L8",
    status: "in-record",
    layer: "1274",
    claim: {
      en: "James I spent his minority (from 1214) as a Templar ward at Monzón under Guillem de Montrodón.",
      es: "Jaime I pasó su minoría (desde 1214) como pupilo templario en Monzón bajo Guillem de Montrodón.",
    },
    source: "Llibre dels fets; standard biographies of Jaime I.",
  },
  {
    id: "L9",
    status: "adjacent",
    layer: "1274",
    claim: {
      en: "Frey Petrus Peyronet (almoner, 1274) may be the same Peter Peyronet listed as Templar commander at Burriana c. 1273–1277.",
      es: "Frey Petrus Peyronet (limosnero, 1274) puede ser el mismo Peter Peyronet listado como comendador templario de Burriana c. 1273–1277.",
    },
    source: "Name identity is a dossier question; do not merge without a source that equates them.",
  },
  {
    id: "L10",
    status: "adjacent",
    layer: "1274",
    claim: {
      en: "The surname Villarreal later appears in Sephardic, converso, and Inquisition contexts, and in the Portuguese Villareal family.",
      es: "El apellido Villarreal aparece después en contextos sefardíes, conversos y de Inquisición, y en la familia portuguesa Villareal.",
    },
    source: "Habitational surname + diaspora records; a later stratum than 1274.",
  },
  {
    id: "L11",
    status: "adjacent",
    layer: "1274",
    claim: {
      en: "Modern Villarreal DNA clusters with Semitic / Sephardic markers in some tested lines.",
      es: "El ADN Villarreal moderno se agrupa con marcadores semíticos / sefardíes en algunas líneas ensayadas.",
    },
    source: "Genetic genealogy of a later cohort — not a 1274 narrative.",
  },
  {
    id: "L12",
    status: "not-in-record",
    layer: "1274",
    claim: {
      en: "A Knights Templar family named Villarreal, coming from Israel, named the town in 1274.",
      es: "Una familia de Caballeros Templarios llamada Villarreal, venida de Israel, nombró la villa en 1274.",
    },
    source: "No such person appears in the published 1269–1274 grants.",
  },
  {
    id: "L13",
    status: "not-in-record",
    layer: "1274",
    claim: {
      en: "Templars warned Jaime of an assassination, saved him, and were forced to receive Vila-real as payment.",
      es: "Los templarios avisaron a Jaime de un asesinato, lo salvaron, y se vieron forzados a recibir Vila-real como pago.",
    },
    source: "The 1214 rescue from Montfort is real and earlier; it is not a 1274 naming bargain.",
  },
  {
    id: "L14",
    status: "not-in-record",
    layer: "1274",
    claim: {
      en: "Anyone in or around Čapek’s R.U.R. was named Robert, causing the rhyme.",
      es: "Alguien en o alrededor de R.U.R. de Čapek se llamaba Robert, y de ahí la rima.",
    },
    source: "The play’s characters are Domin, Fabry, Helena, Radius, and others; the word is from robota.",
  },
  {
    id: "L15",
    status: "in-record",
    layer: "1274",
    claim: {
      en: "12 September 1279: Peter III re-issues privileges and invites Saracens from Castalla–Biar to populate Vila-real.",
      es: "12 de septiembre de 1279: Pedro III reexpide privilegios e invita sarracenos de Castalla–Biar a poblar Vila-real.",
    },
    source: "Second carta puebla; the first charter had not filled the town.",
  },
  {
    id: "L16",
    status: "in-record",
    layer: "1274",
    claim: {
      en: "The Temple is suppressed in 1312; Valencian Templar goods pass to the Order of Montesa in 1317–19.",
      es: "El Templo se suprime en 1312; los bienes templarios valencianos pasan a la Orden de Montesa en 1317–19.",
    },
    source: "Papal suppression; foundation of Montesa. By 1429 there is no Temple left to expel anyone.",
  },
  {
    id: "L17",
    status: "in-record",
    layer: "1274",
    claim: {
      en: "July 1391: Valencia city’s aljama is destroyed. In Vila-real the reported pattern is conversion or flight more than massacre.",
      es: "Julio de 1391: se destruye la aljama de la ciudad de Valencia. En Vila-real el patrón referido es conversión o huida más que matanza.",
    },
    source: "Hinojosa Montalvo; Furió.",
  },
  {
    id: "L18",
    status: "not-in-record",
    layer: "1274",
    claim: {
      en: "A 1429 edict or riot forced a Villarreal lineage to leave.",
      es: "Un edicto o motín de 1429 forzó a un linaje Villarreal a irse.",
    },
    source: "The year was searched as a dated event; 1391 and 1492 are what returned. Kept as a gap, not as a hidden proof.",
  },
  {
    id: "L19",
    status: "adjacent",
    layer: "1274",
    claim: {
      en: "Jamestown (1607) copies James I of England’s given name; Vila-real copies the office (royal village), not “Jaume-town.”",
      es: "Jamestown (1607) copia el nombre de pila de Jaime I de Inglaterra; Vila-real copia el oficio (villa real), no un «Jaume-town».",
    },
    source: "Two royal toponyms, two naming engines.",
  },
  {
    id: "L20",
    status: "adjacent",
    layer: "1274",
    claim: {
      en: "A living Villarreal line may cluster with Sephardic or Levantine samples. That is ancestry of a later cohort, not memory of a 1274 charter.",
      es: "Una línea Villarreal viva puede agruparse con muestras sefardíes o levantinas. Eso es ancestría de una cohorte posterior, no memoria de una carta de 1274.",
    },
    source: "Genetic genealogy as a distribution map. Date the clock.",
  },
];

export const GLOSSARY: { term: LocaleText; text: LocaleText }[] = [
  {
    term: { en: "Onomastics", es: "Onomástica" },
    text: {
      en: "The study of names — their form, meaning, history, and social use.",
      es: "El estudio de los nombres — su forma, sentido, historia y uso social.",
    },
  },
  {
    term: { en: "Anthroponymy", es: "Antroponimia" },
    text: {
      en: "The branch of onomastics that treats personal names: given names, surnames, nicknames, bynames.",
      es: "La rama de la onomástica que trata nombres de persona: nombres de pila, apellidos, motes, sobrenombres.",
    },
  },
  {
    term: { en: "Prosopography", es: "Prosopografía" },
    text: {
      en: "Collective biography of a defined group. You fill the same fields for many fragmentary lives, then read the pattern of connections — not a hero narrative.",
      es: "Biografía colectiva de un grupo definido. Se llenan los mismos campos para muchas vidas fragmentarias, luego se lee el patrón de conexiones — no un relato de héroe.",
    },
  },
  {
    term: { en: "Factoid", es: "Factoide" },
    text: {
      en: "One dated assertion from one source: source S, date D, person P did act A in place L. A person is a bundle of factoids, not a single merged story.",
      es: "Una aserción fechada de una fuente: fuente S, fecha D, persona P hizo el acto A en el lugar L. Una persona es un haz de factoides, no un relato fusionado.",
    },
  },
  {
    term: { en: "Carta pobla", es: "Carta pobla" },
    text: {
      en: "A settlement charter granting land, law, and privileges to people who will inhabit a new town.",
      es: "Una carta de poblamiento que otorga tierra, derecho y privilegios a quienes habitarán una villa nueva.",
    },
  },
  {
    term: { en: "Aljama", es: "Aljama" },
    text: {
      en: "The organized Jewish community of a medieval Iberian town, with its own officers, synagogue, and tax.",
      es: "La comunidad judía organizada de una villa ibérica medieval, con sus oficiales, sinagoga e impuesto.",
    },
  },
  {
    term: { en: "Transonymization", es: "Transonimización" },
    text: {
      en: "A name changing class: a place-name becoming a surname, or a personal name becoming a place-name.",
      es: "Un nombre que cambia de clase: un topónimo que se vuelve apellido, o un nombre de persona que se vuelve topónimo.",
    },
  },
  {
    term: { en: "Homophony", es: "Homofonía" },
    text: {
      en: "Same or similar sound, different history. Roboto / Roberto — and the English glosses Robot / Robert — and Yisrael / Israel are the working examples in this essay. Speech recognizers trip on the same near pair.",
      es: "Mismo o parecido sonido, historia distinta. Roboto / Roberto — y las glosas inglesas Robot / Robert — y Yisrael / Israel son los ejemplos de trabajo de este ensayo. Los reconocedores de voz tropiezan en el mismo par cercano.",
    },
  },
  {
    term: { en: "Fuero of Aragon", es: "Fuero de Aragón" },
    text: {
      en: "The law granted to Vila-real in 1274, the same franchise as Burriana. An older Aragonese code inside a Valencian term.",
      es: "El derecho otorgado a Vila-real en 1274, la misma franquicia que Burriana. Un código aragonés más viejo dentro de un término valenciano.",
    },
  },
  {
    term: { en: "Order of Montesa", es: "Orden de Montesa" },
    text: {
      en: "Founded 1317–19 in the kingdom of Valencia to receive the suppressed Templars’ goods. After this date “Templar” in the region is memory, not a living order.",
      es: "Fundada en 1317–19 en el reino de Valencia para recibir los bienes de los templarios suprimidos. Después de esta fecha, «templario» en la región es memoria, no una orden viva.",
    },
  },
  {
    term: { en: "Converso", es: "Converso" },
    text: {
      en: "A Jew converted to Christianity, often under the pressure of 1391 and after. The Inquisition’s later problem is this group, not the 1492 exiles who left as Jews.",
      es: "Un judío convertido al cristianismo, a menudo bajo la presión de 1391 y después. El problema posterior de la Inquisición es este grupo, no los desterrados de 1492 que salieron como judíos.",
    },
  },
  {
    term: { en: "Incarnation year", es: "Año de la Encarnación" },
    text: {
      en: "The 1274 charter is dated 10th kalends of March 1273 because the year still began on 25 March. Convert before you argue about the year.",
      es: "La carta de 1274 se fecha a 10 de las kalendas de marzo de 1273 porque el año aún empezaba el 25 de marzo. Conviértase antes de discutir el año.",
    },
  },
  {
    term: { en: "Ejido", es: "Ejido" },
    text: {
      en: "Mexican community agrarian land under the post-revolutionary reform regime. A locality can carry an ejido name in postal and land language without this page having the RAN expediente in hand.",
      es: "Tierra agraria comunitaria mexicana bajo el régimen de reforma posrevolucionaria. Una localidad puede llevar nombre de ejido en lengua postal y de tierra sin que esta página tenga el expediente RAN a la mano.",
    },
  },
  {
    term: { en: "Habitational density", es: "Densidad habitacional" },
    text: {
      en: "A surname clustering in a region because people moved there. Density is not a founding clause. Villarreal in Nuevo León is a later-cohort map, not Vila-real in 1274.",
      es: "Un apellido que se agrupa en una región porque la gente se mudó allí. La densidad no es una cláusula de fundación. Villarreal en Nuevo León es un mapa de cohorte posterior, no Vila-real en 1274.",
    },
  },
  {
    term: { en: "Villa Real / Villarreal", es: "Villa Real / Villarreal" },
    text: {
      en: "The same habitational form in two orthographies. INAH writes the Monterrey hotel Villa Real; the public sign is Villarreal. The 1274 Latin is Villa Regalis.",
      es: "La misma forma habitacional en dos ortografías. El INAH escribe el hotel de Monterrey Villa Real; el letrero público es Villarreal. El latín de 1274 es Villa Regalis.",
    },
  },
  {
    term: { en: "Autoadscripción", es: "Autoadscripción" },
    text: {
      en: "Self-identification as indigenous or Afromexican, the criterion in Nuevo León’s 2012/2026 statute. A right to identity. Not the same thing as a consumer-kit percentage, and not a 1274 naming clause.",
      es: "Autoidentificación como indígena o afromexicana, el criterio del estatuto de Nuevo León de 2012/2026. Un derecho a la identidad. No es lo mismo que un porcentaje de kit de consumo, y no es una cláusula de nombramiento de 1274.",
    },
  },
  {
    term: { en: "Indigenous American ancestry", es: "Ancestría indígena americana" },
    text: {
      en: "A New World genetic clock: autosomal segments that cluster with Indigenous American reference groups. In a Monterrey Villarreal line it is later-cohort data on Coahuiltecan and neighboring ground. It is not Hebrew, not 1274, and not, by itself, a pueblo originario.",
      es: "Un reloj genético del Nuevo Mundo: segmentos autosómicos que se agrupan con grupos de referencia indígenas americanos. En una línea Villarreal de Monterrey es dato de cohorte posterior sobre suelo coahuilteco y vecino. No es hebreo, no es 1274, y no es, por sí solo, un pueblo originario.",
    },
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
