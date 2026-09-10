import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as META, M as CHROME, P as useLang } from "./router-CfKVlrE8.mjs";
import { n as SiteHeader, r as cn, t as ReadingProgress } from "./site-header-ZNkeZvws.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/atlas-DcGxK1Xs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PEOPLE = [
	{
		id: "jaime",
		name: "James I of Aragon",
		short: "James I",
		kind: "crown",
		year: "1274",
		role: "King; grantor of the carta pobla",
		dossier: "Signs the 20 February 1274 foundation as Jaime, king of Aragon, Majorca, and Valencia. The legal name of the place is Villa Regalis / Vila-real — the king’s village. Raised decades earlier (1214–c. 1218) as a Templar ward at Monzón; that earlier graph must not be collapsed into the naming clause.",
		x: 450,
		y: 48
	},
	{
		id: "pere",
		name: "Infant Pere",
		short: "Infant Pere",
		kind: "crown",
		year: "1269–72",
		role: "Lord of Burriana; earlier grants",
		dossier: "As lord of Burriana he issues land in the future Vila-real zone before the 1274 charter, including a 18 December 1269 grant at Villa Regalis. Shows the place existed as a royal settlement before the formal carta pobla. The same man, as Peter III, re-issues privileges on 12 September 1279 and invites Saracens from Castalla–Biar because the first charter had not filled the town.",
		x: 160,
		y: 130
	},
	{
		id: "notary",
		name: "Simó de Sant Feliu",
		short: "Simó, notary",
		kind: "office",
		year: "1274",
		role: "Notary of the carta pobla",
		dossier: "Closes the foundation document with the notarial rubric. A named officer of the act, not a settler and not a naming agent. Witnesses at Valencia: Arnau of Valencia, James of Huesca, Bernat Guillem d’Entença, Blasco Maza, Sancho Martínez de Oblites.",
		x: 740,
		y: 130
	},
	{
		id: "paris",
		name: "Paris, silversmith",
		short: "Paris",
		kind: "named",
		year: "1272",
		role: "Royal craftsman; land to his daughter",
		dossier: "8 July 1272: Jaime grants six jovates to the daughter of Paris, the king’s silversmith. Typical of the pre-charter grants to people already in royal service.",
		x: 70,
		y: 260
	},
	{
		id: "escorna",
		name: "Ramon Escorna",
		short: "Escorna",
		kind: "named",
		year: "1272",
		role: "Grantee; acequia already mentioned",
		dossier: "19 September 1272 grant. The same cluster of documents already names the new acequia under construction — the waterworks precede the published foundation date.",
		x: 250,
		y: 260
	},
	{
		id: "peyronet",
		name: "Frey Petrus Peyronet",
		short: "Peyronet",
		kind: "office",
		year: "1274",
		role: "Royal almoner; acequia finance",
		dossier: "12 May 1274: Jaime sells two years of Burriana rents so that Frey Petrus Peyronet, his almoner, can apply the money to the new acequia of Ville Regalis. Templar personnel lists independently name a Peter Peyronet as commander at Burriana c. 1273–1277. Treat the two tokens as a dossier problem — probable identity, not a forced merge.",
		x: 450,
		y: 260
	},
	{
		id: "vidal",
		name: "Salomó Vidal",
		short: "Vidal",
		kind: "named",
		year: "c. 1274",
		role: "Jewish recruiter of settlers",
		dossier: "The municipal history of Vila-real records that Catalan courtiers to whom the king first offered the new village declined the harsh terms, and that the Jewish agent Salomó Vidal then recruited inhabitants. A documented Jewish hand in peopling the town — not a claim that he named it.",
		x: 650,
		y: 260
	},
	{
		id: "settlers",
		name: "Unnamed settlers",
		short: "Settlers",
		kind: "group",
		year: "1274",
		role: "Collective addressees of the charter",
		dossier: "The carta pobla addresses “all and each of the settlers of the population of Vila-real.” First stable contingents are described as Morellans, Aragonese, and later Catalans. No Villarreal lineage is listed among them.",
		x: 830,
		y: 260
	},
	{
		id: "temple-xivert",
		name: "Templars of Xivert",
		short: "Xivert Temple",
		kind: "group",
		year: "1233–34",
		role: "Neighboring commandery",
		dossier: "For help at the conquest of Burriana, Jaime granted Chivert/Xivert in 1233. The commandery is the local Templar seat in the Maestrazgo, next door to the new royal village — adjacent power, not the naming clause.",
		x: 160,
		y: 410
	},
	{
		id: "temple-burriana",
		name: "Templars of Burriana",
		short: "Burriana Temple",
		kind: "group",
		year: "1233–74",
		role: "Share of city, tithes, and a commander",
		dossier: "The Order held a third of Burriana after 1233 and later two-thirds of its tithes. The town of Vila-real is carved from Burriana’s term. Same landscape as the Temple, different legal founder.",
		x: 450,
		y: 410
	},
	{
		id: "aljama",
		name: "Aljama of Vila-real",
		short: "Aljama",
		kind: "community",
		year: "13th–15th c.",
		role: "Documented Jewish community",
		dossier: "A judería street is noted in local studies; Hebrew University published Three Jewish Communities in Medieval Valencia: Castellón, Burriana, Villarreal. After 1391 the community shrinks; by 1492 the remnant is very small. Sephardic later use of the surname is a separate stratum from the 1274 toponym.",
		x: 740,
		y: 410
	}
];
var EDGES = [
	{
		from: "jaime",
		to: "pere",
		kind: "office",
		label: "son / Burriana lordship"
	},
	{
		from: "jaime",
		to: "notary",
		kind: "office",
		label: "charter of 1274"
	},
	{
		from: "jaime",
		to: "settlers",
		kind: "grant",
		label: "carta pobla"
	},
	{
		from: "jaime",
		to: "paris",
		kind: "grant",
		label: "1272 land"
	},
	{
		from: "jaime",
		to: "escorna",
		kind: "grant",
		label: "1272 land"
	},
	{
		from: "jaime",
		to: "peyronet",
		kind: "finance",
		label: "acequia funds"
	},
	{
		from: "pere",
		to: "paris",
		kind: "grant",
		label: "pre-charter grants"
	},
	{
		from: "vidal",
		to: "settlers",
		kind: "recruit",
		label: "recruits inhabitants"
	},
	{
		from: "peyronet",
		to: "temple-burriana",
		kind: "office",
		label: "possible same man"
	},
	{
		from: "temple-xivert",
		to: "temple-burriana",
		kind: "neighbor",
		label: "same order"
	},
	{
		from: "temple-burriana",
		to: "settlers",
		kind: "neighbor",
		label: "carved from Burriana"
	},
	{
		from: "vidal",
		to: "aljama",
		kind: "later",
		label: "Jewish presence"
	},
	{
		from: "settlers",
		to: "aljama",
		kind: "later",
		label: "judería in the town"
	}
];
var LEDGER = [
	{
		id: "L1",
		status: "in-record",
		layer: "1274",
		claim: "Vila-real is founded 20 February 1274 by James I of Aragon as a royal village (Villa Regalis).",
		source: "Carta pobla; Crown of Aragon reg. 19; municipal history."
	},
	{
		id: "L2",
		status: "in-record",
		layer: "1274",
		claim: "The town is carved from the term of Burriana and given royal status and the four-bar royal standard.",
		source: "Carta pobla; Ajuntament de Vila-real."
	},
	{
		id: "L3",
		status: "in-record",
		layer: "1274",
		claim: "Land grants in the zone already exist by 1269–1272 (Paris the silversmith’s daughter; Ramon Escorna).",
		source: "Jaime I registers; Ferrer Navarro, Una fundación de Jaime I."
	},
	{
		id: "L4",
		status: "in-record",
		layer: "1274",
		claim: "12 May 1274: Burriana rents are sold to fund the new acequia of Ville Regalis through Frey Petrus Peyronet, royal almoner.",
		source: "ACA, Jaime I, reg. 19."
	},
	{
		id: "L5",
		status: "in-record",
		layer: "1274",
		claim: "Templars received Xivert (Chivert) in 1233 for help at Burriana, and a third of Burriana itself.",
		source: "Forey, The Templars in the Corona de Aragón."
	},
	{
		id: "L6",
		status: "in-record",
		layer: "1274",
		claim: "Salomó Vidal, a Jewish agent, recruited settlers after Catalan courtiers declined the harsh terms.",
		source: "Ajuntament de Vila-real, Història."
	},
	{
		id: "L7",
		status: "in-record",
		layer: "1274",
		claim: "A Jewish aljama of Villarreal is documented; a monograph treats Castellón, Burriana, and Villarreal together.",
		source: "Doñate Sebastiá & Magdalena Nom de Déu, 1990."
	},
	{
		id: "L8",
		status: "in-record",
		layer: "1274",
		claim: "James I spent his minority (from 1214) as a Templar ward at Monzón under Guillem de Montrodón.",
		source: "Llibre dels fets; standard biographies of Jaime I."
	},
	{
		id: "L9",
		status: "adjacent",
		layer: "1274",
		claim: "Frey Petrus Peyronet (almoner, 1274) may be the same Peter Peyronet listed as Templar commander at Burriana c. 1273–1277.",
		source: "Name identity is a dossier question; do not merge without a source that equates them."
	},
	{
		id: "L10",
		status: "adjacent",
		layer: "1274",
		claim: "The surname Villarreal later appears in Sephardic, converso, and Inquisition contexts, and in the Portuguese Villareal family.",
		source: "Habitational surname + diaspora records; a later stratum than 1274."
	},
	{
		id: "L11",
		status: "adjacent",
		layer: "1274",
		claim: "Modern Villarreal DNA clusters with Semitic / Sephardic markers in some tested lines.",
		source: "Genetic genealogy of a later cohort — not a 1274 narrative."
	},
	{
		id: "L12",
		status: "not-in-record",
		layer: "1274",
		claim: "A Knights Templar family named Villarreal, coming from Israel, named the town in 1274.",
		source: "No such person appears in the published 1269–1274 grants."
	},
	{
		id: "L13",
		status: "not-in-record",
		layer: "1274",
		claim: "Templars warned Jaime of an assassination, saved him, and were forced to receive Vila-real as payment.",
		source: "The 1214 rescue from Montfort is real and earlier; it is not a 1274 naming bargain."
	},
	{
		id: "L14",
		status: "not-in-record",
		layer: "1274",
		claim: "Anyone in or around Čapek’s R.U.R. was named Robert, causing the rhyme.",
		source: "The play’s characters are Domin, Fabry, Helena, Radius, and others; the word is from robota."
	},
	{
		id: "L15",
		status: "in-record",
		layer: "1274",
		claim: "12 September 1279: Peter III re-issues privileges and invites Saracens from Castalla–Biar to populate Vila-real.",
		source: "Second carta puebla; the first charter had not filled the town."
	},
	{
		id: "L16",
		status: "in-record",
		layer: "1274",
		claim: "The Temple is suppressed in 1312; Valencian Templar goods pass to the Order of Montesa in 1317–19.",
		source: "Papal suppression; foundation of Montesa. By 1429 there is no Temple left to expel anyone."
	},
	{
		id: "L17",
		status: "in-record",
		layer: "1274",
		claim: "July 1391: Valencia city’s aljama is destroyed. In Vila-real the reported pattern is conversion or flight more than massacre.",
		source: "Hinojosa Montalvo; Furió."
	},
	{
		id: "L18",
		status: "not-in-record",
		layer: "1274",
		claim: "A 1429 edict or riot forced a Villarreal lineage to leave.",
		source: "The year was searched as a dated event; 1391 and 1492 are what returned. Kept as a gap, not as a hidden proof."
	},
	{
		id: "L19",
		status: "adjacent",
		layer: "1274",
		claim: "Jamestown (1607) copies James I of England’s given name; Vila-real copies the office (royal village), not “Jaume-town.”",
		source: "Two royal toponyms, two naming engines."
	},
	{
		id: "L20",
		status: "adjacent",
		layer: "1274",
		claim: "A living Villarreal line may cluster with Sephardic or Levantine samples. That is ancestry of a later cohort, not memory of a 1274 charter.",
		source: "Genetic genealogy as a distribution map. Date the clock."
	}
];
var GLOSSARY = [
	{
		term: "Onomastics",
		text: "The study of names — their form, meaning, history, and social use."
	},
	{
		term: "Anthroponymy",
		text: "The branch of onomastics that treats personal names: given names, surnames, nicknames, bynames."
	},
	{
		term: "Prosopography",
		text: "Collective biography of a defined group. You fill the same fields for many fragmentary lives, then read the pattern of connections — not a hero narrative."
	},
	{
		term: "Factoid",
		text: "One dated assertion from one source: source S, date D, person P did act A in place L. A person is a bundle of factoids, not a single merged story."
	},
	{
		term: "Carta pobla",
		text: "A settlement charter granting land, law, and privileges to people who will inhabit a new town."
	},
	{
		term: "Aljama",
		text: "The organized Jewish community of a medieval Iberian town, with its own officers, synagogue, and tax."
	},
	{
		term: "Transonymization",
		text: "A name changing class: a place-name becoming a surname, or a personal name becoming a place-name."
	},
	{
		term: "Homophony",
		text: "Same or similar sound, different history. Robot / Robert and Yisrael / Israel are the working examples in this essay."
	},
	{
		term: "Fuero of Aragon",
		text: "The law granted to Vila-real in 1274, the same franchise as Burriana. An older Aragonese code inside a Valencian term."
	},
	{
		term: "Order of Montesa",
		text: "Founded 1317–19 in the kingdom of Valencia to receive the suppressed Templars’ goods. After this date “Templar” in the region is memory, not a living order."
	},
	{
		term: "Converso",
		text: "A Jew converted to Christianity, often under the pressure of 1391 and after. The Inquisition’s later problem is this group, not the 1492 exiles who left as Jews."
	},
	{
		term: "Incarnation year",
		text: "The 1274 charter is dated 10th kalends of March 1273 because the year still began on 25 March. Convert before you argue about the year."
	},
	{
		term: "Ejido",
		text: "Mexican community agrarian land under the post-revolutionary reform regime. A locality can carry an ejido name in postal and land language without this page having the RAN expediente in hand."
	},
	{
		term: "Habitational density",
		text: "A surname clustering in a region because people moved there. Density is not a founding clause. Villarreal in Nuevo León is a later-cohort map, not Vila-real in 1274."
	},
	{
		term: "Villa Real / Villarreal",
		text: "The same habitational form in two orthographies. INAH writes the Monterrey hotel Villa Real; the public sign is Villarreal. The 1274 Latin is Villa Regalis."
	}
];
var EDGE_COLORS = {
	grant: "#3e534c",
	office: "#6d6558",
	neighbor: "#8a8173",
	recruit: "#3e534c",
	finance: "#2a2620",
	later: "#b8ad9c"
};
function GlossaryList() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
		className: "grid gap-3 sm:grid-cols-2",
		children: GLOSSARY.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-surface px-4 py-4 shadow-paper sm:px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "font-display text-lg font-medium text-fg",
				children: item.term
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: item.text
			})]
		}, item.term))
	});
}
var KIND_LABEL$1 = {
	region: "State",
	city: "City",
	municipality: "Municipality",
	locality: "Locality",
	building: "Building"
};
var MODERN_NODES = [
	{
		id: "villarreales",
		name: "Los Villarreales",
		short: "Los Villarreales",
		kind: "locality",
		year: "2020 census",
		role: "Rural locality; ejido / ranch landscape in Salinas Victoria",
		dossier: "INEGI locality 190450118, in the municipality of Salinas Victoria, inside the Monterrey metropolitan area, about forty kilometres north of the city. Census counts: 600 (2000), 659 (2005), 811 (2010), 633 (2020). Postal and land language also says pueblo, ejido, Hacienda los Villarreales, ranchos and quintas (C.P. 65530). A name written back onto land. Not a municipality, and not Vila-real in Castellón.",
		x: 450,
		y: 64
	},
	{
		id: "salinas",
		name: "Salinas Victoria",
		short: "Salinas Victoria",
		kind: "municipality",
		year: "INEGI 19045",
		role: "Municipality north of Monterrey; the locality sits in this term",
		dossier: "One of Nuevo León’s 51 municipalities. The cabecera is the town of Salinas Victoria; the Villarreal toponym is not the seat. It is a rural locality in the northern metro, on the old road toward the border. The legal class of the land — ejido versus private rancho — is a RAN and notarial question. This page has the gazetteer name, not the expediente.",
		x: 220,
		y: 168
	},
	{
		id: "monterrey",
		name: "Monterrey",
		short: "Monterrey",
		kind: "city",
		year: "New Spain → present",
		role: "City where the surname sits densely",
		dossier: "Compiled public-name files put Villarreal around rank 17 in the municipality — about 8,400 people, roughly one in 137. Of Mexican Villarreals, about a third live in Nuevo León; Coahuila and Tamaulipas each about nine percent. Saturation here means regional density of a habitational surname, not a medieval foundation. Named bearers in the state’s political record include Antonio I. Villarreal of Lampazos (1879–1944), governor of Nuevo León in 1914. A later clock than 1274.",
		x: 450,
		y: 300
	},
	{
		id: "mansion",
		name: "La Mansión Villarreal",
		short: "La Mansión",
		kind: "building",
		year: "1893 / hotel",
		role: "Centro hotel occupying the Fábricas Apolo warehouse",
		dossier: "Av. Pino Suárez 806, Centro. The building is the 1893 warehouse of Fábricas Apolo (also called Droguería Apolo), Pino Suárez at Carlos Salazar Poniente, raised for the German-Mexican industrialist Alfred Guido Moebius. INAH catalogued it; in the 1980s it housed the Secretaría de Agricultura y Recursos Hidráulicos; later it became a hotel. The 2009 INAH paper writes “La Mansión Villa Real.” The public sign is Villarreal — one word. Same habitational form, two orthographies. Building history is industrial Monterrey. It is not the 1274 town, and this node does not carry the news cycle around the address.",
		x: 720,
		y: 236
	},
	{
		id: "nuevoleon",
		name: "Nuevo León",
		short: "Nuevo León",
		kind: "region",
		year: "later cohort",
		role: "Mexican state of densest Villarreal incidence",
		dossier: "Spain itself holds a few thousand people named Villarreal. Mexico holds about a hundred thousand, and Nuevo León holds about a third of those. The surname is habitational: “one who came from Villareal / the royal estate,” a formation taken from several Iberian places. Density in this state is a New Spain and after fact — migration, not a naming clause from Jaime I. The state name is a third clock: Nuevo Reino de León, 1579, after the Kingdom of León — New León, not New Lion.",
		x: 180,
		y: 400
	}
];
var MODERN_EDGES = [
	{
		from: "nuevoleon",
		to: "monterrey",
		kind: "state",
		label: "state capital"
	},
	{
		from: "nuevoleon",
		to: "salinas",
		kind: "state",
		label: "municipality of the state"
	},
	{
		from: "salinas",
		to: "villarreales",
		kind: "in",
		label: "locality in the term"
	},
	{
		from: "monterrey",
		to: "salinas",
		kind: "metro",
		label: "~40 km north"
	},
	{
		from: "monterrey",
		to: "mansion",
		kind: "in",
		label: "centro address"
	}
];
var MODERN_EDGE_COLORS = {
	in: "#3e534c",
	metro: "#6d6558",
	state: "#2a2620"
};
var MONTERREY_LEDGER = [
	{
		id: "M1",
		status: "in-record",
		layer: "monterrey",
		claim: "Los Villarreales is an INEGI rural locality (190450118) in Salinas Victoria, Nuevo León, inside the Monterrey metropolitan area. Census 2020: 633 inhabitants (316 men, 317 women).",
		source: "INEGI, Censo de Población y Vivienda 2020; locality series 2000–2020."
	},
	{
		id: "M2",
		status: "in-record",
		layer: "monterrey",
		claim: "Hotel La Mansión Villarreal occupies the 1893 warehouse of Fábricas Apolo / Droguería Apolo at Pino Suárez and Carlos Salazar Poniente, Centro, Monterrey. The building is in the Catálogo Nacional de Monumentos Históricos Inmuebles.",
		source: "Garza Luna & Tovar Esquivel, “Guido Moebius y Las Fábricas Apolo,” Boletín de Monumentos Históricos 15 (2009); INAH, Catálogo Nacional, Nuevo León, t. IV (1985), pp. 1729–1730."
	},
	{
		id: "M3",
		status: "in-record",
		layer: "monterrey",
		claim: "In the 1980s the same building housed the Secretaría de Agricultura y Recursos Hidráulicos. The 2009 INAH paper already records it as a hotel under the trade name La Mansión Villa Real.",
		source: "Garza Luna & Tovar Esquivel 2009, p. 124 and fig. 2."
	},
	{
		id: "M4",
		status: "adjacent",
		layer: "monterrey",
		claim: "Compiled public-name files put about 104,000 people named Villarreal in Mexico, of whom about a third are in Nuevo León, with further clusters in Coahuila and Tamaulipas (~9% each). In Monterrey municipality the name sits around rank 17 (~8,400; about 1 in 137).",
		source: "Forebears compilation of public name files — a distribution index, not an INEGI surname table. Treat as a later-cohort map."
	},
	{
		id: "M5",
		status: "adjacent",
		layer: "monterrey",
		claim: "Postal and land-market language around the locality also uses pueblo, ejido, Hacienda los Villarreales, ranchos and quintas (C.P. 65530). That is how the name sits on the ground. It is not, by itself, a RAN expediente.",
		source: "SEPOMEX / C.P. 65530 listings; land notices naming the ejido and hacienda. Adjacent to the INEGI locality."
	},
	{
		id: "M6",
		status: "adjacent",
		layer: "monterrey",
		claim: "INAH writes the hotel as Villa Real (two words). The public sign is Villarreal (one word). Same habitational form; two orthographies. Neither spelling makes the building the 1274 town.",
		source: "Garza Luna & Tovar Esquivel 2009 versus the hotel’s current trade name."
	},
	{
		id: "M7",
		status: "adjacent",
		layer: "monterrey",
		claim: "Antonio I. Villarreal (José Antonio Villarreal González, Lampazos de Naranjo, 1879–1944) was governor of Nuevo León in 1914 and later Secretary of Agriculture. A named bearer in the state’s political record — not the namer of the hotel or the ejido.",
		source: "Standard biographies; H. Congreso del Estado de Nuevo León, Archivo."
	},
	{
		id: "M8",
		status: "not-in-record",
		layer: "monterrey",
		claim: "There is no municipality named Villarreal de los Monterrey. Infantes (1939, Castellón) and Monterrey (Nuevo León) can both function as disambiguators. Only Infantes is a gazetteer suffix. Monterrey here is a claim of living geography, not a town on the map.",
		source: "INEGI municipal catalogue; no such municipio. The 1274 town’s later Castilian name is Villarreal de los Infantes."
	},
	{
		id: "M9",
		status: "not-in-record",
		layer: "monterrey",
		claim: "The 1274 carta pobla does not name Monterrey, this hotel, or this ejido. Place → surname (Iberia) and surname → place (Nuevo León) are opposite transonymizations. Do not wind them as one clock.",
		source: "Carta pobla of 20 February 1274; this stratum is New Spain and after."
	},
	{
		id: "M10",
		status: "in-record",
		layer: "monterrey",
		claim: "Nuevo León keeps, with “Reino de” dropped, the 1579 name Nuevo Reino de León. INAFED: Luis de Carvajal y de la Cueva named it for the Kingdom of León, birthplace of Felipe II. English gloss is New León, not New Lion. León itself is from Latin Legio (Legio VII Gemina). The red lion on the 1943 state shield is folk-heraldry of that homonym.",
		source: "INAFED, Enciclopedia de los Municipios y Delegaciones, “Nomenclatura — Nuevo León”; Wiktionary, Nuevo León; state coat of arms adopted 1943–44."
	},
	{
		id: "M11",
		status: "adjacent",
		layer: "monterrey",
		claim: "Carvajal, a Portuguese New Christian of Jewish descent, obtained the 31 May 1579 capitulation and brought about a hundred families, many conversos from the León–Portugal border. The Inquisition later tried the household; Luis el Mozo wrote as Joseph Lumbroso. Local León pages title this “Un nuevo león”; Jewish-Mexican journalism restates a discreet Jewish colony. That is a sixteenth-century converso colonization — not a modern Israeli state project, and not the 1274 carta pobla.",
		source: "Capitulación of 31 May 1579; INAH, Historias 88 (2014); Diario Judío, “Luis de Carvajal, fundador del Nuevo Reino de León”; León Virtual, “Judíos leoneses fundadores de Nuevo León” (heading: “Un nuevo león”). Eugenio del Hoyo records a 1933 Mexican debate on whether the landing was a Jewish colonization experiment — a later question, not the 1579 naming clause."
	},
	{
		id: "M12",
		status: "not-in-record",
		layer: "monterrey",
		claim: "English “New Lion” is a machine calque of Nuevo León. VisitMexico published it in August 2020 (Guerrero as Warrior, Torreón as Turret) and took it down — that is the thread that disappeared. Hebrew lion language — Lion of Judah, Ariel “lion of God,” Operation Rising Lion from Numbers 23:24 — is Israel’s own clock. It does not name this Mexican state. No record of a modern Israeli project to found or rename Nuevo León as a New Lion. Do not wind the calque, the 1579 kingdom, and the biblical lion as one clock.",
		source: "VisitMexico English pages, 7 August 2020, subsequently reverted (AM, Debate, Al Día). Numbers 23:24; IDF designation Am ke-lavi / Rising Lion, June 2025. León, Guanajuato’s 2025 declaration with Israel is a different León."
	}
];
var STATUS$1 = {
	"in-record": {
		label: "In the record",
		className: "bg-primary text-primary-fg"
	},
	adjacent: {
		label: "Adjacent",
		className: "bg-wash text-fg"
	},
	"not-in-record": {
		label: "Not in the record",
		className: "border border-border text-muted"
	}
};
function MonterreyAtlas() {
	const [activeId, setActiveId] = (0, import_react.useState)("mansion");
	const active = MODERN_NODES.find((node) => node.id === activeId) ?? MODERN_NODES[0];
	const linked = (0, import_react.useMemo)(() => {
		const ids = /* @__PURE__ */ new Set();
		for (const edge of MODERN_EDGES) {
			if (edge.from === active.id) ids.add(edge.to);
			if (edge.to === active.id) ids.add(edge.from);
		}
		return ids;
	}, [active.id]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[1fr_18rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "overflow-hidden rounded-xl bg-surface shadow-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 900 490",
					role: "img",
					"aria-label": "Modern Villarreal geography around Monterrey: the city, La Mansión Villarreal, and Los Villarreales in Salinas Victoria",
					className: "h-auto w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							width: "900",
							height: "490",
							fill: "#faf6ee"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M0 0 L160 0 L90 490 L0 490 Z",
							fill: "#ebe4d6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "36",
							y: "250",
							fill: "#8a8173",
							fontSize: "11",
							fontFamily: "Fraunces, Palatino, serif",
							transform: "rotate(-90 36 250)",
							children: "Sierra Madre"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "450",
							y1: "88",
							x2: "450",
							y2: "286",
							stroke: "#3e534c",
							strokeWidth: "1.5",
							strokeDasharray: "5 6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "464",
							y: "190",
							fill: "#3e534c",
							fontSize: "10",
							fontFamily: "Fraunces, Palatino, serif",
							children: "≈ 40 km north"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "820",
							y: "36",
							textAnchor: "middle",
							fill: "#8a8173",
							fontSize: "11",
							fontFamily: "Fraunces, Palatino, serif",
							children: "N"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
							points: "820,16 814,28 826,28",
							fill: "#8a8173"
						}),
						MODERN_EDGES.map((edge) => {
							const from = MODERN_NODES.find((p) => p.id === edge.from);
							const to = MODERN_NODES.find((p) => p.id === edge.to);
							if (!from || !to) return null;
							const hot = edge.from === active.id || edge.to === active.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: from.x,
								y1: from.y,
								x2: to.x,
								y2: to.y,
								stroke: MODERN_EDGE_COLORS[edge.kind],
								strokeWidth: hot ? 2.2 : 1,
								strokeOpacity: hot ? .9 : .35
							}, `${edge.from}-${edge.to}-${edge.kind}`);
						}),
						MODERN_NODES.map((node) => {
							const selected = node.id === active.id;
							const neighbor = linked.has(node.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: `${node.name}: ${node.role}` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: node.x,
									cy: node.y,
									r: selected ? 11 : 8,
									fill: selected ? "#3e534c" : neighbor ? "#ebe4d6" : "#faf6ee",
									stroke: "#3e534c",
									strokeWidth: selected ? 2 : 1.25,
									className: "cursor-pointer",
									onClick: () => setActiveId(node.id)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: node.x,
									y: node.y + 24,
									textAnchor: "middle",
									fill: "#1c1915",
									fontSize: "12",
									fontFamily: "Fraunces, Palatino, serif",
									className: "cursor-pointer",
									onClick: () => setActiveId(node.id),
									children: node.short
								})
							] }, node.id);
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "border-t border-border px-4 py-3 text-sm text-muted",
					children: "A later clock. Edges are geography — state, municipality, metro, address — not a household invented between the hotel and the ejido."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "rounded-xl bg-surface px-4 py-4 shadow-paper sm:px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
						children: [
							KIND_LABEL$1[active.kind],
							" · ",
							active.year
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-xl font-medium text-fg",
						children: active.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: active.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-fg",
						children: active.dossier
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-wrap gap-1.5",
						children: MODERN_NODES.map((node) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActiveId(node.id),
							className: cn("min-h-11 rounded-md px-2.5 text-xs font-medium transition-colors duration-150", node.id === active.id ? "bg-primary text-primary-fg" : "bg-wash text-fg hover:bg-border"),
							children: node.short
						}) }, node.id))
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LedgerPanel, { activeId })]
	});
}
function LedgerPanel({ activeId }) {
	const related = (0, import_react.useMemo)(() => relatedIds(activeId), [activeId]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl font-medium text-fg",
			children: "Record vs gap — this stratum"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
			children: "Same three columns as 1274. The hotel is a building in the INAH catalogue. The ejido is an INEGI locality. Surname density is a compiled later-cohort map. No news cycle on this node."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-4 space-y-3",
			children: MONTERREY_LEDGER.map((row) => {
				const hot = related.has(row.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: cn("rounded-xl bg-surface px-4 py-4 shadow-paper sm:px-5", hot && "ring-1 ring-primary/40"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xs tracking-kicker text-subtle uppercase",
								children: row.id
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("rounded-full px-2 py-0.5 text-xs font-medium", STATUS$1[row.status].className),
								children: STATUS$1[row.status].label
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-fg sm:text-base",
							children: row.claim
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: row.source
						})
					]
				}, row.id);
			})
		})
	] });
}
function relatedIds(nodeId) {
	if (nodeId === "mansion") return /* @__PURE__ */ new Set([
		"M2",
		"M3",
		"M6"
	]);
	if (nodeId === "villarreales") return /* @__PURE__ */ new Set(["M1", "M5"]);
	if (nodeId === "monterrey") return /* @__PURE__ */ new Set(["M4", "M7"]);
	if (nodeId === "salinas") return /* @__PURE__ */ new Set(["M1", "M5"]);
	if (nodeId === "nuevoleon") return /* @__PURE__ */ new Set([
		"M4",
		"M8",
		"M9",
		"M10",
		"M11",
		"M12"
	]);
	return /* @__PURE__ */ new Set();
}
var ROWS = [...PEOPLE.map((person) => ({
	id: person.id,
	name: person.name,
	year: person.year,
	role: person.role,
	layer: "1269–1274",
	search: `${person.name} ${person.role} ${person.dossier} ${person.year} 1274 vila-real`
})), ...MODERN_NODES.map((node) => ({
	id: node.id,
	name: node.name,
	year: node.year,
	role: `${KIND_LABEL$1[node.kind]} · ${node.role}`,
	layer: "Monterrey",
	search: `${node.name} ${node.role} ${node.dossier} ${node.year} monterrey mansion ejido villarreales`
}))];
function NameRegister() {
	const [query, setQuery] = (0, import_react.useState)("");
	const rows = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		if (!q) return ROWS;
		return ROWS.filter((row) => row.search.toLowerCase().includes(q));
	}, [query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: "register-search",
			className: "sr-only",
			children: "Filter the register"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: "register-search",
			type: "search",
			value: query,
			onChange: (event) => setQuery(event.target.value),
			placeholder: "Filter by name, office, place, or year",
			className: "h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg shadow-paper outline-none placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-primary"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 overflow-x-auto rounded-xl bg-surface shadow-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "article-table w-full min-w-[36rem]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
						className: "sr-only",
						children: "People and places in the 1269–1274 cluster and the Monterrey node"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							scope: "col",
							children: "Name"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							scope: "col",
							children: "Clock"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							scope: "col",
							children: "Year"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							scope: "col",
							children: "Role"
						})
					] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "font-medium text-ink-soft",
							children: row.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: row.layer }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: row.year }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: row.role })
					] }, `${row.layer}-${row.id}`)) })
				]
			})
		})
	] });
}
var KIND_LABEL = {
	crown: "Crown",
	named: "Named person",
	office: "Office",
	group: "Group",
	community: "Community"
};
function NetworkAtlas() {
	const [activeId, setActiveId] = (0, import_react.useState)("peyronet");
	const active = PEOPLE.find((person) => person.id === activeId) ?? PEOPLE[0];
	const linked = (0, import_react.useMemo)(() => {
		const ids = /* @__PURE__ */ new Set();
		for (const edge of EDGES) {
			if (edge.from === active.id) ids.add(edge.to);
			if (edge.to === active.id) ids.add(edge.from);
		}
		return ids;
	}, [active.id]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[1fr_18rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "overflow-hidden rounded-xl bg-surface shadow-paper",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 900 490",
				role: "img",
				"aria-label": "Network of people around the 1274 foundation of Vila-real",
				className: "h-auto w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "900",
						height: "490",
						fill: "#faf6ee"
					}),
					EDGES.map((edge) => {
						const from = PEOPLE.find((p) => p.id === edge.from);
						const to = PEOPLE.find((p) => p.id === edge.to);
						if (!from || !to) return null;
						const hot = edge.from === active.id || edge.to === active.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: from.x,
							y1: from.y,
							x2: to.x,
							y2: to.y,
							stroke: EDGE_COLORS[edge.kind],
							strokeWidth: hot ? 2.2 : 1,
							strokeOpacity: hot ? .9 : .35
						}, `${edge.from}-${edge.to}-${edge.kind}`);
					}),
					PEOPLE.map((person) => {
						const selected = person.id === active.id;
						const neighbor = linked.has(person.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: `${person.name}: ${person.role}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: person.x,
								cy: person.y,
								r: selected ? 11 : 8,
								fill: selected ? "#3e534c" : neighbor ? "#ebe4d6" : "#faf6ee",
								stroke: "#3e534c",
								strokeWidth: selected ? 2 : 1.25,
								className: "cursor-pointer",
								onClick: () => setActiveId(person.id)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								x: person.x,
								y: person.y + 22,
								textAnchor: "middle",
								fill: "#1c1915",
								fontSize: "12",
								fontFamily: "Fraunces, Palatino, serif",
								className: "cursor-pointer",
								onClick: () => setActiveId(person.id),
								children: person.short
							})
						] }, person.id);
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "border-t border-border px-4 py-3 text-sm text-muted",
				children: "Click a node. Edges are grants, office, finance, recruitment, or neighboring lordship — not kinship invented after the fact."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "rounded-xl bg-surface px-4 py-4 shadow-paper sm:px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
					children: [
						KIND_LABEL[active.kind],
						" · ",
						active.year
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-xl font-medium text-fg",
					children: active.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: active.role
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-fg",
					children: active.dossier
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 flex flex-wrap gap-1.5",
					children: PEOPLE.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveId(person.id),
						className: cn("min-h-11 rounded-md px-2.5 text-xs font-medium", person.id === active.id ? "bg-primary text-primary-fg" : "bg-wash text-fg hover:bg-border"),
						children: person.name.split(",")[0]
					}) }, person.id))
				})
			]
		})]
	});
}
var ALL_LEDGER = [...LEDGER, ...MONTERREY_LEDGER];
var LAYER_FILTERS = [
	{
		id: "all",
		label: "Both clocks"
	},
	{
		id: "1274",
		label: "1269–1274"
	},
	{
		id: "monterrey",
		label: "Monterrey"
	}
];
var FILTERS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "in-record",
		label: "In the record"
	},
	{
		id: "adjacent",
		label: "Adjacent"
	},
	{
		id: "not-in-record",
		label: "Not in the record"
	}
];
var STATUS = {
	"in-record": {
		label: "In the record",
		className: "bg-primary text-primary-fg"
	},
	adjacent: {
		label: "Adjacent",
		className: "bg-wash text-fg"
	},
	"not-in-record": {
		label: "Not in the record",
		className: "border border-border text-muted"
	}
};
var LAYER_LABEL = {
	"1274": "1269–1274",
	monterrey: "Monterrey"
};
function RecordLedger() {
	const [layer, setLayer] = (0, import_react.useState)("all");
	const [filter, setFilter] = (0, import_react.useState)("all");
	const rows = (0, import_react.useMemo)(() => {
		return ALL_LEDGER.filter((row) => {
			const rowLayer = row.layer ?? "1274";
			if (layer !== "all" && rowLayer !== layer) return false;
			if (filter !== "all" && row.status !== filter) return false;
			return true;
		});
	}, [layer, filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-2",
			children: LAYER_FILTERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setLayer(item.id),
				className: cn("min-h-11 rounded-md px-3.5 text-sm font-medium transition-colors duration-150", layer === item.id ? "bg-primary text-primary-fg" : "bg-surface text-fg shadow-paper hover:bg-wash"),
				children: item.label
			}, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 flex flex-wrap gap-2",
			children: FILTERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setFilter(item.id),
				className: cn("min-h-11 rounded-md px-3.5 text-sm font-medium transition-colors duration-150", filter === item.id ? "bg-ink-soft text-primary-fg" : "bg-surface text-fg shadow-paper hover:bg-wash"),
				children: item.label
			}, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-4 space-y-3",
			children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-xl bg-surface px-4 py-4 shadow-paper sm:px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xs tracking-kicker text-subtle uppercase",
								children: row.id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-wash px-2 py-0.5 text-xs font-medium text-muted",
								children: LAYER_LABEL[row.layer ?? "1274"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("rounded-full px-2 py-0.5 text-xs font-medium", STATUS[row.status].className),
								children: STATUS[row.status].label
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-fg sm:text-base",
						children: row.claim
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: row.source
					})
				]
			}, row.id))
		})
	] });
}
function AtlasPage() {
	const [tab, setTab] = (0, import_react.useState)("monterrey");
	const { lang } = useLang();
	const chrome = CHROME[lang];
	const copy = chrome.atlas;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "paper-grain min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadingProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-kicker font-medium tracking-kicker text-subtle uppercase",
						children: copy.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-3xl font-display text-display font-medium tracking-display text-fg sm:text-display-lg",
						children: copy.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-lg leading-relaxed text-muted",
						children: tab === "monterrey" ? copy.leadMonterrey : copy.leadNetwork
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-muted",
						children: [
							copy.noteBefore,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "text-primary underline underline-offset-4",
								children: copy.essay
							}),
							copy.noteMid,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dossier",
								className: "text-primary underline underline-offset-4",
								children: copy.dossier
							}),
							copy.noteAfter
						]
					}),
					chrome.englishBody ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: chrome.englishBody
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "no-print mt-8 flex flex-wrap gap-2",
						role: "tablist",
						"aria-label": copy.title,
						children: copy.tabs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": tab === item.id,
							onClick: () => setTab(item.id),
							className: cn("min-h-11 rounded-md px-3.5 text-sm font-medium transition-colors duration-150", tab === item.id ? "bg-primary text-primary-fg" : "bg-surface text-fg shadow-paper hover:bg-wash"),
							children: item.label
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-8",
						role: "tabpanel",
						children: [
							tab === "monterrey" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonterreyAtlas, {}) : null,
							tab === "network" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkAtlas, {}) : null,
							tab === "ledger" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordLedger, {}) : null,
							tab === "register" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NameRegister, {}) : null,
							tab === "glossary" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlossaryList, {}) : null
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: META.credit }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						chrome.series,
						" · ",
						chrome.date
					] })]
				})
			})
		]
	});
}
//#endregion
export { AtlasPage as component };
