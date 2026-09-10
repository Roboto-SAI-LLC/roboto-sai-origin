import { i as __toESM } from "../_runtime.mjs";
import { a as META, t as BRIEF_META } from "./research-BbnSBAkh.mjs";
import { B as require_react, _ as createRootRoute, b as require_jsx_runtime, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-qoZEAWWR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var STORAGE_KEY = "rs-lang";
var LangContext = (0, import_react.createContext)(null);
function LangProvider({ children }) {
	const [lang, setLangState] = (0, import_react.useState)("en");
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const saved = window.localStorage.getItem(STORAGE_KEY);
		if (saved === "en" || saved === "es") setLangState(saved);
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		document.documentElement.lang = lang;
		window.localStorage.setItem(STORAGE_KEY, lang);
	}, [lang, ready]);
	const value = (0, import_react.useMemo)(() => ({
		lang,
		setLang: (next) => setLangState(next)
	}), [lang]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangContext.Provider, {
		value,
		children
	});
}
function useLang() {
	const ctx = (0, import_react.useContext)(LangContext);
	if (!ctx) throw new Error("useLang must be used inside LangProvider");
	return ctx;
}
function pick(lang, pair) {
	return pair[lang];
}
var CHROME = {
	en: {
		journal: "Roboto SAI",
		series: "Methodology",
		date: "September 2026",
		skip: "Skip to essay",
		contents: "Contents",
		part: "Part",
		share: "Share",
		copyLink: "Copy link",
		copyCite: "Copy citation",
		copied: "Copied",
		cite: "Cite this page",
		englishBody: "",
		menu: "Menu",
		github: "Source on GitHub",
		nav: [
			{
				to: "/",
				label: "Essay"
			},
			{
				to: "/atlas",
				label: "Atlas"
			},
			{
				to: "/dossier",
				label: "Dossier"
			},
			{
				to: "/lion",
				label: "Gur Aryeh"
			},
			{
				to: "/templars",
				label: "Templars"
			},
			{
				to: "/brief",
				label: "Brief"
			},
			{
				to: "/rovox",
				label: "RoVox"
			}
		],
		home: {
			title: "The Names Roboto and Roberto",
			subtitle: "Linguistic origins, historical usage, and cultural migrations",
			kicker: "A static research page",
			sources: "sources",
			findings: [
				{
					kicker: "Not kin",
					text: "The real names are Roboto and Roberto. They rhyme. They are not etymological relatives."
				},
				{
					kicker: "House name",
					text: "Roboto sits next to robot / robota — Čapek’s 1920 Czech coinage from Slavic forced labor. That is the house, not a diminutive of Roberto."
				},
				{
					kicker: "Given name",
					text: "Roberto is the Iberian form of Robert: Proto-Germanic *Hrōþiberhtaz — fame + bright — carried by dukes, kings, and saints."
				},
				{
					kicker: "Sound vs sense",
					text: "Robot and Robert are English glosses that collapse the pair. Yisrael / Israel and Villarreal / Martinez show the same trap."
				},
				{
					kicker: "Machine ear",
					text: "Roboto and Roberto share /ro…to/. The Spanish flap is a twenty-millisecond flick. Every decoder then bets on the common given name. The transcript looks like another script."
				},
				{
					kicker: "Four clocks",
					text: "Documents, DNA, family memory, and place keep different time. Date each clock. Do not merge them."
				}
			],
			newKicker: "New in this edition",
			newText: "A claim inspector that steelmans first, a clause-by-clause carta pobla, a Plana chronicle that keeps 1429 as a searched gap, four new chapters (XV–XVIII), a Monterrey migration node on the atlas, and a living identity claim that keeps Indigenous American ancestry, Sephardic memory, and a Templar treasure talk on separate clocks.",
			newCta: "Open the dossier",
			lionKicker: "Companion essay",
			lionText: "Gur Aryeh — Hebrew lion symbolism. Jacob’s blessing of Judah, six biblical names, the merkabah’s right-hand face, and how a tribal animal became a Jewish one.",
			lionCta: "Read Gur Aryeh",
			templarKicker: "Frontier cut",
			templarText: "Poor Knights of the Temple. Hugh of Payns to the pyre of Molay, then the Plana: neighbors at Xivert, not namers of Vila-real.",
			templarCta: "Read the Templars",
			briefKicker: "Brief",
			briefText: "One page. Five tags. No citation numbers. English and Spanish.",
			briefCta: "Open the brief",
			rovoxKicker: "RoVox",
			rovoxText: "House reader. Pause or stop during the intro. After the end, it answers and can edit the working notes. Drop your recording — no catalog voice.",
			rovoxCta: "Open RoVox",
			chronology: "A brief chronology",
			chronologyLead: "Selected dates that thread Roboto, Roberto, and the Iberian case studies through the same historical line.",
			references: "References",
			llms: "Full text is on this page for human readers. A plain-text brief is also at"
		},
		atlas: {
			kicker: "Interactive dossier · two clocks",
			title: "Network atlas",
			leadMonterrey: "A modern migration node: Villarreal saturating Monterrey, the Los Villarreales locality in Salinas Victoria, and La Mansión Villarreal in the centro. Building and gazetteer — not the news cycle.",
			leadNetwork: "People actually named in the Vila-real grants, the neighboring Temple, and the aljama — kept in three columns: in the record, adjacent, not in the record.",
			noteBefore: "Full argument is in the",
			essay: "essay",
			noteMid: ", parts IX and XIII–XIV. Claims, charter, and chronicle live in the",
			dossier: "dossier",
			noteAfter: ". The 1274 town and the Nuevo León landscape are separate clocks.",
			tabs: [
				{
					id: "monterrey",
					label: "Monterrey"
				},
				{
					id: "network",
					label: "1274 network"
				},
				{
					id: "ledger",
					label: "Record vs gap"
				},
				{
					id: "register",
					label: "Register"
				},
				{
					id: "glossary",
					label: "Glossary"
				}
			]
		},
		dossier: {
			kicker: "Instruments · steelman, then split",
			title: "Dossier",
			lead: "Each claim is taken at full strength, then cut into what the acts say, what sits next to them, and what they do not carry. 1429 stays on the page as a searched gap. Monterrey is a later clock. Identity is a right. It is still four clocks.",
			noteBefore: "Essay chapters XV–XVIII are in the",
			report: "full report",
			noteMid: ". People of 1269–1274 are in the",
			atlas: "network atlas",
			noteAfter: ".",
			tabs: [
				{
					id: "claims",
					label: "Claims"
				},
				{
					id: "charter",
					label: "Carta pobla"
				},
				{
					id: "chronicle",
					label: "Chronicle"
				},
				{
					id: "dna",
					label: "Four clocks"
				}
			]
		},
		rovox: {
			kicker: "Reader · house voice",
			title: "RoVox",
			lead: "Listens first. You may pause or stop the intro. You may not skip it or talk over it. When the recording reaches the end, RoVox answers, searches xAI Docs, and can update the card and the working notes. Drop your own MP3 — generated on your device.",
			card: "Info card",
			name: "Name",
			role: "Role",
			note: "Note",
			noStock: "No catalog stock voice. RoVox is the house recording.",
			player: "Intro",
			rule: "During the intro the only controls are pause and stop. Chat stays locked until the file ends.",
			listen: "Listen",
			pause: "Pause",
			resume: "Resume",
			stop: "Stop",
			drop: "Drop a RoVox MP3 from this device",
			usingFallback: "Using the Brief recording until you drop a RoVox file.",
			usingFile: "Using your recording.",
			docs: "Working notes",
			reset: "Reset notes",
			resetCard: "Reset card",
			desk: "After the intro",
			empty: "Finish the intro to ask.",
			you: "You",
			ask: "Ask RoVox…",
			send: "Send",
			locked: "Chat locked until the intro ends.",
			unlocked: "Intro finished. Ask, or edit the notes. RoVox can update them.",
			idleHint: "Start the intro. Pause or stop only.",
			cap: "Eight questions this sitting.",
			unavailable: "RoVox cannot reach the model in this environment. The intro and the notes still work.",
			needGesture: "Press Listen again to start audio.",
			writing: "RoVox is writing…"
		},
		lion: {
			kicker: "A static research page",
			sources: "sources",
			skip: "Skip to essay",
			contents: "Contents",
			back: "Back to the essay",
			chronology: "A brief chronology",
			chronologyLead: "Selected hours of the same animal, from the blessing to Jerusalem’s seal.",
			references: "References",
			cite: "Cite this page",
			companion: "Companion essay:",
			companionTitle: "The Names Roboto and Roberto"
		},
		ui: {
			by: "By",
			nav: "Primary",
			findings: "Key findings",
			listen: "Listen",
			pause: "Pause",
			listenAria: "Listen to the brief",
			searchEssay: "Search the essay",
			searchPlaceholder: "Roboto, Roberto, Coahuiltecan, 1429…",
			noMatch: "No matching section.",
			bothClocks: "Both clocks",
			all: "All",
			inRecord: "In the record",
			adjacent: "Adjacent",
			notInRecord: "Not in the record",
			gapYear: "Gap year",
			split: "Split — keep the parts",
			stated: "Stated.",
			steelman: "Steelmanned.",
			confirm: "What would confirm it.",
			none: "None stated for this claim.",
			filterRegister: "Filter the register",
			filterPlaceholder: "Filter by name, office, place, or year",
			name: "Name",
			clock: "Clock",
			year: "Year",
			role: "Role",
			registerCaption: "People and places in the 1269–1274 cluster and the Monterrey node",
			names: "Names",
			doesNotName: "Does not name",
			witnessBench: "Witness bench",
			can: "Can.",
			cannot: "Cannot.",
			crown: "Crown",
			named: "Named person",
			office: "Office",
			group: "Group",
			community: "Community",
			networkCaption: "Click a node. Edges are grants, office, finance, recruitment, or neighboring lordship — not kinship invented after the fact.",
			networkAria: "Network of people around the 1274 foundation of Vila-real",
			monterreyAria: "Modern Villarreal geography around Monterrey: the city, La Mansión Villarreal, and Los Villarreales in Salinas Victoria",
			chronicleAria: "Schematic of the Plana Baixa around Vila-real",
			state: "State",
			city: "City",
			municipality: "Municipality",
			locality: "Locality",
			building: "Building"
		}
	},
	es: {
		journal: "Roboto SAI",
		series: "Metodología",
		date: "Septiembre de 2026",
		skip: "Saltar al ensayo",
		contents: "Índice",
		part: "Parte",
		share: "Compartir",
		copyLink: "Copiar enlace",
		copyCite: "Copiar cita",
		copied: "Copiado",
		cite: "Citar esta página",
		englishBody: "El ensayo, el atlas, el dossier y Gur Aryeh están en inglés. Templarios, la síntesis y RoVox están en los dos idiomas.",
		menu: "Menú",
		github: "Fuente en GitHub",
		nav: [
			{
				to: "/",
				label: "Ensayo"
			},
			{
				to: "/atlas",
				label: "Atlas"
			},
			{
				to: "/dossier",
				label: "Dossier"
			},
			{
				to: "/lion",
				label: "Gur Aryeh"
			},
			{
				to: "/templars",
				label: "Templarios"
			},
			{
				to: "/brief",
				label: "Síntesis"
			},
			{
				to: "/rovox",
				label: "RoVox"
			}
		],
		home: {
			title: "Los nombres Roboto y Roberto",
			subtitle: "Orígenes lingüísticos, uso histórico y migraciones culturales",
			kicker: "Página de investigación",
			sources: "fuentes",
			findings: [
				{
					kicker: "No son parientes",
					text: "Los nombres reales son Roboto y Roberto. Riman. No son parientes etimológicos."
				},
				{
					kicker: "Nombre de casa",
					text: "Roboto se sienta junto a robot / robota — la acuñación checa de 1920 de Čapek, del eslavo trabajo forzado. Es la casa, no un diminutivo de Roberto."
				},
				{
					kicker: "Nombre de pila",
					text: "Roberto es la forma ibérica de Robert: proto-germánico *Hrōþiberhtaz — fama + brillante — llevado por duques, reyes y santos."
				},
				{
					kicker: "Sonido y sentido",
					text: "Robot y Robert son glosas inglesas que funden el par. Yisrael / Israel y Villarreal / Martinez muestran la misma trampa."
				},
				{
					kicker: "Oído de máquina",
					text: "Roboto y Roberto comparten /ro…to/. La vibrante simple es un golpe de veinte milisegundos. El decodificador apuesta al nombre de pila común. La transcripción parece otra escritura."
				},
				{
					kicker: "Cuatro relojes",
					text: "Documentos, ADN, memoria de familia y lugar llevan tiempos distintos. Fecha cada reloj. No los fundas."
				}
			],
			newKicker: "Nuevo en esta edición",
			newText: "Un inspector de afirmaciones que primero hace el steelman, una carta puebla cláusula por cláusula, una crónica de la Plana que deja 1429 como hueco buscado, cuatro capítulos nuevos (XV–XVIII), un nodo de migración en Monterrey en el atlas, y una afirmación viva de identidad que deja la ancestría indígena americana, la memoria sefardí y la charla del tesoro templario en relojes distintos.",
			newCta: "Abrir el dossier",
			lionKicker: "Ensayo compañero",
			lionText: "Gur Aryeh — el león en hebreo. La bendición de Jacob a Judá, seis nombres bíblicos, el rostro derecho de la merkabá, y cómo un animal tribal se volvió un animal judío.",
			lionCta: "Leer Gur Aryeh",
			templarKicker: "Corte de frontera",
			templarText: "Pobres caballeros del Templo. De Hugo de Payns a la hoguera de Molay, luego la Plana: vecinos en Xivert, no nominadores de Vila-real.",
			templarCta: "Leer los templarios",
			briefKicker: "Síntesis",
			briefText: "Una página. Cinco etiquetas. Sin números de cita. Inglés y español.",
			briefCta: "Abrir la síntesis",
			rovoxKicker: "RoVox",
			rovoxText: "Lector de la casa. Pausa o alto durante la intro. Al terminar, responde y puede editar las notas. Suelta tu grabación — sin voz de catálogo.",
			rovoxCta: "Abrir RoVox",
			chronology: "Una cronología breve",
			chronologyLead: "Fechas que atan Roboto, Roberto y los casos ibéricos a la misma línea histórica.",
			references: "Fuentes",
			llms: "El texto completo está en esta página para lectores humanos. Un breve en texto plano también está en"
		},
		atlas: {
			kicker: "Dossier interactivo · dos relojes",
			title: "Atlas de red",
			leadMonterrey: "Un nodo moderno de migración: Villarreal saturando Monterrey, la localidad Los Villarreales en Salinas Victoria, y La Mansión Villarreal en el centro. Edificio y gazetero — no el ciclo de noticias.",
			leadNetwork: "Personas realmente nombradas en las mercedes de Vila-real, el Templo vecino y la aljama — en tres columnas: en el acta, al lado, no en el acta.",
			noteBefore: "El argumento completo está en el",
			essay: "ensayo",
			noteMid: ", partes IX y XIII–XIV. Afirmaciones, carta y crónica viven en el",
			dossier: "dossier",
			noteAfter: ". La villa de 1274 y el paisaje de Nuevo León son relojes distintos.",
			tabs: [
				{
					id: "monterrey",
					label: "Monterrey"
				},
				{
					id: "network",
					label: "Red 1274"
				},
				{
					id: "ledger",
					label: "Acta y hueco"
				},
				{
					id: "register",
					label: "Registro"
				},
				{
					id: "glossary",
					label: "Glosario"
				}
			]
		},
		dossier: {
			kicker: "Instrumentos · steelman, luego cortar",
			title: "Dossier",
			lead: "Cada afirmación se toma a plena fuerza, luego se corta en lo que dicen las actas, lo que se sienta al lado, y lo que no cargan. 1429 queda en la página como hueco buscado. Monterrey es un reloj posterior. La identidad es un derecho. Siguen siendo cuatro relojes.",
			noteBefore: "Los capítulos XV–XVIII del ensayo están en el",
			report: "informe completo",
			noteMid: ". Las personas de 1269–1274 están en el",
			atlas: "atlas de red",
			noteAfter: ".",
			tabs: [
				{
					id: "claims",
					label: "Afirmaciones"
				},
				{
					id: "charter",
					label: "Carta puebla"
				},
				{
					id: "chronicle",
					label: "Crónica"
				},
				{
					id: "dna",
					label: "Cuatro relojes"
				}
			]
		},
		rovox: {
			kicker: "Lector · voz de la casa",
			title: "RoVox",
			lead: "Primero escucha. Puedes pausar o parar la intro. No puedes saltarla ni hablar encima. Cuando la grabación llega al final, RoVox responde, busca xAI Docs y puede actualizar la ficha y las notas. Suelta tu propio MP3 — generado en tu aparato.",
			card: "Ficha",
			name: "Nombre",
			role: "Oficio",
			note: "Nota",
			noStock: "Sin voz de catálogo. RoVox es la grabación de la casa.",
			player: "Introducción",
			rule: "Durante la intro los únicos controles son pausa y alto. El chat permanece cerrado hasta que el archivo termina.",
			listen: "Escuchar",
			pause: "Pausa",
			resume: "Seguir",
			stop: "Alto",
			drop: "Suelta un MP3 de RoVox desde este aparato",
			usingFallback: "Usa la grabación de la Síntesis hasta que sueltes un archivo RoVox.",
			usingFile: "Usa tu grabación.",
			docs: "Notas de trabajo",
			reset: "Restablecer notas",
			resetCard: "Restablecer ficha",
			desk: "Después de la intro",
			empty: "Termina la intro para preguntar.",
			you: "Tú",
			ask: "Pregunta a RoVox…",
			send: "Enviar",
			locked: "Chat cerrado hasta que termine la intro.",
			unlocked: "Intro terminada. Pregunta, o edita las notas. RoVox puede actualizarlas.",
			idleHint: "Empieza la intro. Solo pausa o alto.",
			cap: "Ocho preguntas en esta sesión.",
			unavailable: "RoVox no alcanza el modelo en este entorno. La intro y las notas siguen funcionando.",
			needGesture: "Pulsa Escuchar otra vez para arrancar el audio.",
			writing: "RoVox escribe…"
		},
		lion: {
			kicker: "Página de investigación",
			sources: "fuentes",
			skip: "Saltar al ensayo",
			contents: "Índice",
			back: "Volver al ensayo",
			chronology: "Una cronología breve",
			chronologyLead: "Horas elegidas del mismo animal, de la bendición al sello de Jerusalén.",
			references: "Fuentes",
			cite: "Citar esta página",
			companion: "Ensayo compañero:",
			companionTitle: "Los nombres Roboto y Roberto"
		},
		ui: {
			by: "Por",
			nav: "Principal",
			findings: "Hallazgos",
			listen: "Escuchar",
			pause: "Pausa",
			listenAria: "Escuchar la síntesis",
			searchEssay: "Buscar el ensayo",
			searchPlaceholder: "Roboto, Roberto, Coahuiltecan, 1429…",
			noMatch: "Ningún apartado coincide.",
			bothClocks: "Los dos relojes",
			all: "Todo",
			inRecord: "En el acta",
			adjacent: "Al lado",
			notInRecord: "No en el acta",
			gapYear: "Año hueco",
			split: "Partido — guardar las partes",
			stated: "Dicho.",
			steelman: "A plena fuerza.",
			confirm: "Qué lo confirmaría.",
			none: "Nada dicho para esta afirmación.",
			filterRegister: "Filtrar el registro",
			filterPlaceholder: "Filtrar por nombre, oficio, lugar o año",
			name: "Nombre",
			clock: "Reloj",
			year: "Año",
			role: "Oficio",
			registerCaption: "Personas y lugares del racimo 1269–1274 y el nodo de Monterrey",
			names: "Nombra",
			doesNotName: "No nombra",
			witnessBench: "Banco de testigos",
			can: "Puede.",
			cannot: "No puede.",
			crown: "Corona",
			named: "Persona nombrada",
			office: "Oficio",
			group: "Grupo",
			community: "Comunidad",
			networkCaption: "Pulse un nodo. Las aristas son mercedes, oficio, finanza, recluta o señorío vecino — no parentesco inventado después.",
			networkAria: "Red de personas en torno a la fundación de Vila-real en 1274",
			monterreyAria: "Geografía moderna Villarreal alrededor de Monterrey: la ciudad, La Mansión Villarreal y Los Villarreales en Salinas Victoria",
			chronicleAria: "Esquema de la Plana Baixa alrededor de Vila-real",
			state: "Estado",
			city: "Ciudad",
			municipality: "Municipio",
			locality: "Localidad",
			building: "Edificio"
		}
	}
};
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var SITE_URL = "https://roboto-sai.org";
var APP_NAME = "Roboto SAI";
var APP_SHORT_NAME = "Roboto SAI";
var GITHUB_URL = "https://github.com/Roboto-SAI-LLC/roboto-sai-origins";
var styles_default = "/assets/styles-Du8Aj_3T.css";
var DESCRIPTION = "Onomastic methodology from Roboto SAI: the names Roboto and Roberto, the 1274 Vila-real network, four clocks, Gur Aryeh, and the Temple on the Plana.";
var Route$7 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: DESCRIPTION
			},
			{
				name: "theme-color",
				content: "#f3eee4"
			},
			{
				name: "author",
				content: "Roboto SAI research with a Copilot"
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				name: "application-name",
				content: APP_SHORT_NAME
			},
			{
				name: "apple-mobile-web-app-title",
				content: APP_SHORT_NAME
			}
		],
		links: [
			{
				rel: "canonical",
				href: SITE_URL
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				sizes: "32x32"
			},
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,560;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Frank+Ruhl+Libre:ital,wght@0,400;0,500;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;0,8..60,700;1,8..60,400;1,8..60,600&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/manifest.webmanifest"
			},
			{
				rel: "prefetch",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/icon-192.png"
			},
			{
				rel: "prefetch",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "alternate",
				type: "text/plain",
				href: "/llms.txt",
				title: "Plain-text research brief"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg text-fg font-serif",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
var $$splitComponentImporter$6 = () => import("./routes-CGJ1drap.mjs");
var Route$6 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => ({ meta: [{ title: `${META.title} — ${APP_NAME}` }, {
		name: "description",
		content: META.description
	}] })
});
var $$splitComponentImporter$5 = () => import("./atlas-BuaJD75w.mjs");
var Route$5 = createFileRoute("/atlas")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: `Network atlas — ${APP_NAME}` }, {
		name: "description",
		content: "Prosopographical atlas of people named in the 1269–1274 Vila-real grants, and a later Monterrey migration node: surname density, Los Villarreales, La Mansión Villarreal."
	}] })
});
var $$splitComponentImporter$4 = () => import("./brief-Dl0QHk0b.mjs");
var Route$4 = createFileRoute("/brief")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: `${BRIEF_META.en.title} — ${APP_NAME}` }, {
		name: "description",
		content: "One-page brief of five essays: Roboto and Roberto, the 1274 atlas, the dossier, Gur Aryeh, and the Templars. No citation numbers."
	}] })
});
var $$splitComponentImporter$3 = () => import("./dossier-NiZF11jn.mjs");
var Route$3 = createFileRoute("/dossier")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: `Dossier — ${APP_NAME}` }, {
		name: "description",
		content: "Claim inspector, carta pobla close reading, Plana chronicle, four clocks, and a living identity claim that keeps Indigenous American ancestry on its own clock."
	}] })
});
var LION_META = {
	journal: "Roboto SAI Research",
	series: "Methodology",
	title: "Gur Aryeh",
	subtitle: "Hebrew lion symbolism, from Judah’s blessing to a Jewish emblem",
	credit: "Roboto SAI research with a Copilot",
	date: "September 2026",
	sourceCount: 18,
	description: "An essay on the lion in Hebrew: Jacob’s blessing of Judah, the six biblical names, God as roar and as rest, the Temple and the merkabah, and how a tribal animal became a Jewish one."
};
var LION_FINDINGS = [
	{
		kicker: "A cub, then a king",
		text: "Genesis 49:9 names Judah a gur aryeh — a lion’s whelp. The next verse keeps the scepter in his line."
	},
	{
		kicker: "Six names",
		text: "The Talmud lists six Hebrew words for lion. Job 4:10–11 piles five of them into two verses."
	},
	{
		kicker: "The image flips",
		text: "The same animal is Judah, Israel, God, the Temple — and the enemy, the idol, the king’s wrath."
	},
	{
		kicker: "Judah became Jew",
		text: "After the northern tribes were lost, Judah’s name and Judah’s animal stood for the people."
	}
];
var LION_TOC = [
	{
		id: "introduction",
		numeral: "",
		title: "Introduction"
	},
	{
		id: "verse",
		numeral: "I",
		title: "The blessing"
	},
	{
		id: "names",
		numeral: "II",
		title: "Six names"
	},
	{
		id: "animal",
		numeral: "III",
		title: "The animal"
	},
	{
		id: "registers",
		numeral: "IV",
		title: "Crown and threat"
	},
	{
		id: "temple",
		numeral: "V",
		title: "Temple and chariot"
	},
	{
		id: "visual",
		numeral: "VI",
		title: "A visual grammar"
	},
	{
		id: "later",
		numeral: "VII",
		title: "Later receptions"
	},
	{
		id: "people",
		numeral: "VIII",
		title: "Names people still carry"
	},
	{
		id: "references",
		numeral: "",
		title: "References"
	}
];
var BLESSING = {
	hebrew: "גּוּר אַרְיֵה יְהוּדָה מִטֶּרֶף בְּנִי עָלִיתָ כָּרַע רָבַץ כְּאַרְיֵה וּכְלָבִיא מִי יְקִימֶנּוּ",
	transliteration: "Gur aryeh Yehudah; mi-teref beni alita. Kara ravatz ke-aryeh u-khe-lavi, mi yekimenu.",
	english: "Judah is a lion’s cub; from prey, my son, you have gone up. He crouches, lies down like a lion, like a lioness — who will rouse him?",
	cite: "Genesis 49:9",
	scepterHebrew: "לֹא־יָסוּר שֵׁבֶט מִיהוּדָה",
	scepterEnglish: "The scepter shall not depart from Judah.",
	scepterCite: "Genesis 49:10"
};
var COMMENTARIES = [
	{
		id: "pshat",
		label: "Plain sense",
		body: "Jacob reaches for a lion because a lion is royalty in the ancient Near East. The cub is speed and potential; the crouch is unchallenged rest after the kill. Rashbam reads the young lion as faster and more aggressive than an aging male — that is why Jacob says gur, not the old aryeh."
	},
	{
		id: "rashi",
		label: "Rashi",
		body: "Rashi reads the cub-then-lion as David’s career: a whelp while Saul still reigned, a full lion once crowned. “From the prey” he ties to Judah withdrawing from the plot to kill Joseph, and to Judah’s admission over Tamar. The crouch is Solomon’s peace — every man under his vine."
	},
	{
		id: "onkelos",
		label: "Onkelos",
		body: "Targum Onkelos turns the animal into a dynasty: first a ruler from Judah (David), then a king who grows from that house (the Messiah). The cub is the beginning of rule; the lion is its fullness."
	},
	{
		id: "nation",
		label: "The people",
		body: "Balaam uses the same crouch-and-rise formula for Israel as a whole: “Behold, a people that rises like a lioness (lavi) and lifts itself like a lion (ari)” (Numbers 23:24). The 2025 Israel operation Am KeLavi took that line as a name."
	}
];
var LEXICON = [
	{
		id: "aryeh",
		hebrew: "אַרְיֵה / אֲרִי",
		latin: "aryeh / ari",
		gloss: "The common, full-grown lion",
		count: "Most frequent",
		body: "Everyday biblical and modern Hebrew. Letters rearrange toward yirah (fear) and re’iyah (sight). Combined with Judah it yields the names Aryeh, Ari, Judah Aryeh, Aryeh Leib."
	},
	{
		id: "kefir",
		hebrew: "כְּפִיר",
		latin: "kefir",
		gloss: "Young, vigorous male",
		count: "~31 times",
		body: "A lion in its prime, not a cub. Folk etymologies tie it to kofer (deny) — one who sees a lion denies his life — or to the mane that covers (k-p-r) the head. Still used as a given name."
	},
	{
		id: "lavi",
		hebrew: "לָבִיא / לְבִיאָה",
		latin: "lavi / levi’ah",
		gloss: "Mature lion; lioness",
		count: "11 times",
		body: "The oldest Semitic root: Ugaritic lbu, Akkadian labbum, Arabic labbu’a. Cognate with Greek leon and English lion. Balaam’s “people like a lavi” chose this word, not aryeh, for fearlessness. In modern Hebrew levi’ah is the ordinary word for a lioness."
	},
	{
		id: "layish",
		hebrew: "לַיִשׁ",
		latin: "layish",
		gloss: "Poetic; the old lion",
		count: "3 times",
		body: "Also the old name of Dan’s northern city, later Leshem. Proverbs 30:30: “the layish, mightiest among beasts, who does not turn back before any.”"
	},
	{
		id: "shachal",
		hebrew: "שַׁחַל",
		latin: "shachal",
		gloss: "Poetic, fierce",
		count: "7 times",
		body: "Rashi on Job: aryeh is the old one, shachal the middle, kefir the cub. Elsewhere the word can shade toward a large snake (Psalm 91:13). Hosea uses it of God: “I will be like a shachal to Ephraim.”"
	},
	{
		id: "gur",
		hebrew: "גּוּר",
		latin: "gur",
		gloss: "Cub, whelp",
		count: "Opening of Gen. 49:9",
		body: "Almost always a lion’s whelp when paired with aryeh. Genesis Rabbah: Judah was given the might of a lion and the boldness of its cubs. Midrash Aggadah: first gur as rule, then aryeh as king. A seventh rare term, shachatz, appears in Job 28:8."
	}
];
var REGISTERS = {
	crown: {
		label: "Crown",
		kicker: "Who holds the power",
		items: [
			{
				cite: "Genesis 49:9–10",
				text: "Judah as cub and crouching king; the scepter does not depart."
			},
			{
				cite: "Numbers 23:24",
				text: "Israel as a people that rises like a lioness."
			},
			{
				cite: "2 Samuel 17:10",
				text: "David’s heart “is as the heart of a lion.”"
			},
			{
				cite: "Isaiah 31:4",
				text: "The Lord of Hosts comes down to fight on Zion as a lion growling over prey."
			},
			{
				cite: "Proverbs 28:1",
				text: "The righteous are bold as a lion."
			},
			{
				cite: "Orach Chayim 1:1",
				text: "“Strengthen yourself like a lion to get up in the morning to serve your Creator.”"
			}
		]
	},
	threat: {
		label: "Threat",
		kicker: "When the roar is against you",
		items: [
			{
				cite: "Psalm 22:14",
				text: "They open their mouths at me like a ravening, roaring lion."
			},
			{
				cite: "Hosea 13:7–8",
				text: "“I will be like a lion to them… I will devour them.” God as judgment."
			},
			{
				cite: "Amos 3:8",
				text: "“The lion has roared — who will not fear? The Lord God has spoken — who will not prophesy?”"
			},
			{
				cite: "Proverbs 19:12",
				text: "A king’s wrath is like the roaring of a lion."
			},
			{
				cite: "Ezekiel 22:25",
				text: "False prophets as a roaring lion tearing prey."
			},
			{
				cite: "Sanhedrin 64a",
				text: "The lion as the spirit of temptation and seduction to idolatry."
			}
		]
	}
};
var MERKABAH_FACES = [
	{
		id: "human",
		hebrew: "אָדָם",
		label: "Human",
		place: "Front",
		body: "The facing side of each hayyah. Later readers put Jacob’s face on the throne. In the Zohar the human face is the animal soul of man, holy or unholy depending on the chariot it serves."
	},
	{
		id: "lion",
		hebrew: "אַרְיֵה",
		label: "Lion",
		place: "Right",
		body: "Ezekiel 1:10 puts the lion on the right. Chagigah 13b: “The king among animals is the lion.” Kabbalah reads this face as ratzo — the soul running upward. Wild kosher animals are said to descend from it."
	},
	{
		id: "ox",
		hebrew: "שׁוֹר",
		label: "Ox",
		place: "Left",
		body: "The face of settled strength. Domestic kosher animals descend from it. In Ezekiel 10 the ox is replaced by a cherub — the left side can be judged, covered, or renamed."
	},
	{
		id: "eagle",
		hebrew: "נֶשֶׁר",
		label: "Eagle",
		place: "Back",
		body: "King of the birds, paired with the lion in David’s lament over Saul and Jonathan: “swifter than eagles, stronger than lions.” The pair still flanks Torah arks."
	}
];
var PERSONAL_NAMES = [
	{
		name: "Aryeh",
		hebrew: "אַרְיֵה",
		sense: "Lion. The ordinary given name."
	},
	{
		name: "Ari",
		hebrew: "אֲרִי",
		sense: "Short form of aryeh."
	},
	{
		name: "Ariel",
		hebrew: "אֲרִיאֵל",
		sense: "Lion of God. Also Isaiah’s name for Jerusalem and Ezekiel’s altar-hearth."
	},
	{
		name: "Kfir",
		hebrew: "כְּפִיר",
		sense: "Young lion."
	},
	{
		name: "Lavi",
		hebrew: "לָבִיא",
		sense: "Lion; the deep Semitic word."
	},
	{
		name: "Aryeh Leib",
		hebrew: "אַרְיֵה לֵיבּ",
		sense: "Lion-lion: Hebrew plus Yiddish/German. Judah Leib is the same stack with the tribal name."
	}
];
var LION_TIMELINE = [
	{
		year: "Genesis 49",
		title: "Judah is a cub",
		text: "Jacob’s blessing. The scepter verse follows. Everything later hangs on these two lines."
	},
	{
		year: "Numbers 23–24",
		title: "A people like a lion",
		text: "Balaam’s oracles apply the same crouch and rise to Israel as a whole."
	},
	{
		year: "c. 10th c. BCE",
		title: "Lions on the Temple",
		text: "Solomon’s stands and throne carry lion figures (1 Kings 7:29, 10:20). The inner sanctuary is later said to be lion-shaped: broad in front, narrow behind."
	},
	{
		year: "Ezekiel 1",
		title: "The right-hand face",
		text: "The merkabah vision puts a lion on the right of each living creature."
	},
	{
		year: "Mishnah / Talmud",
		title: "King of the beasts",
		text: "Six names (Sanhedrin 95a). “Brave as a lion” (Avot 5:20). The Hekhal as a lion (Middot 4:7)."
	},
	{
		year: "1565",
		title: "Get up like a lion",
		text: "The Shulchan Aruch opens by commanding a person to strengthen himself like a lion to rise for service."
	},
	{
		year: "1950",
		title: "Emblem of Jerusalem",
		text: "A passant lion on a stone wall, olive branches around it. Judah’s animal on Judah’s city."
	}
];
var LION_SECTIONS = [
	{
		id: "introduction",
		numeral: "",
		title: "A real animal, then a name",
		blocks: [
			{
				type: "p",
				dropCap: true,
				text: "Hebrew lion symbolism does not start as a crest. It starts as a predator people could hear. The Asiatic lion (Panthera leo persica) lived in the Jordan thickets, in caves, woods, and desert. Bones turn up at Megiddo, Jaffa, Lachish, Dan, and Dor. They vanish from the land around the Crusader twelfth century; the last Middle Eastern populations die in the nineteenth. Today they survive in the Gir Forest of India. Hebrew has more words for this animal than for almost any other beast because the language grew up within earshot of it."
			},
			{
				type: "p",
				text: "The image that lasts, though, is not the hunt. It is Jacob, dying, looking at his fourth son and saying gur aryeh Yehudah — Judah is a lion’s cub. After the northern tribes are lost, Judah’s name becomes the name of the people (Yehudi, Jew) and of the religion. The tribal animal becomes a Jewish one. This page stays with that stack: the words, the blessing, the two registers (crown and threat), the Temple, and the names still given to children."
			},
			{
				type: "note",
				text: "This sits beside the Roboto / Roberto essay as onomastics, not as theology. Ariel, Aryeh, and Leib are names. Judah is a name that became a people. The animal is how Hebrew said kingship out loud."
			}
		]
	},
	{
		id: "verse",
		numeral: "I",
		title: "The blessing that would not stay tribal",
		blocks: [{
			type: "p",
			text: "The verse is a small narrative. A cub rises from prey, then crouches. The hunt is over. What remains is rest that no one dares disturb. The next verse locks the image to monarchy: the scepter shall not depart from Judah. Rashi, Onkelos, and Rashbam do not disagree that this is kingship. They disagree about which hour of the lion you are looking at — David’s youth, Solomon’s peace, or a king still ahead."
		}, {
			type: "p",
			text: "Dan is also called a lion’s whelp (Deuteronomy 33:22), and Gad is a lioness who tears arm and crown (Deuteronomy 33:20). The lion still attaches to Judah. Saadya Gaon notes that the two Temple craftsmen named in Exodus come from Judah and Dan — the two tribes compared to lions — because the House itself is laced with the same animal."
		}]
	},
	{
		id: "names",
		numeral: "II",
		title: "Six names, one animal",
		blocks: [{
			type: "p",
			text: "Rabbi Yoḥanan (Sanhedrin 95a): there are six Hebrew terms for the lion — ari, kefir, lavi, layish, shachal, shachatz. Job 4:10–11 gathers five of them in two verses, a density that is itself the point. Hebrew treated the lion as a family of images, not a single noun. Lavi is the deep native word; aryeh is the everyday one. Together they produce the doubled Ashkenazi name Aryeh Leib — lion-lion in two languages that, at a distance, share a root."
		}]
	},
	{
		id: "animal",
		numeral: "III",
		title: "What they actually saw",
		blocks: [{
			type: "p",
			text: "The Bible’s lion is smaller than the African lion, with a belly fold. It assists in rearing young (Ezekiel 19). It waits in thickets (Jeremiah 4:7). It growls over prey (Isaiah 31:4). Shepherds meet it with sling and staff; David tells Saul he has already killed one. Samson tears a kefir arayot at Timnah. Place-names keep the animal: Laish, Lebaoth, Chephirah, Arieh."
		}, {
			type: "p",
			text: "The last archaeozoological lion bone from the land is Crusader, twelfth century. After that the symbol has to live without the sound that made it. That is when synagogue lions and given names do more of the work."
		}]
	},
	{
		id: "registers",
		numeral: "IV",
		title: "Crown and threat",
		blocks: [
			{
				type: "p",
				text: "The same animal means opposite things depending on who holds the power. In the hand of Judah, David, Israel, or God, it is legitimate strength. Aimed at the psalmist, the covenant-breaker, or the false prophet, it is a mouth. Hosea and Amos are the sharpest case: God is the lion, and the roar is both judgment and the reason a prophet has to speak."
			},
			{
				type: "quote",
				text: "The lion has roared — who will not fear? The Lord God has spoken — who will not prophesy?",
				cite: "Amos 3:8"
			},
			{
				type: "p",
				text: "Isaiah 11:7 is the messianic disarming: the lion shall eat straw like the ox. Same face as the merkabah, its hunger taken away."
			}
		]
	},
	{
		id: "temple",
		numeral: "V",
		title: "House shaped like a lion",
		blocks: [{
			type: "p",
			text: "Lions already stand on Solomon’s bronze lavers and around his throne. The Mishnah (Middot 4:7) says the Hekhal was narrow behind and broad in front, resembling a lion, and cites Isaiah 29:1: “Ah, Ariel, Ariel, the city where David encamped.” Maimonides repeats the shape. Commentators say the altar fire took a lion’s form; the altar-hearth itself is called ariel, lion of God (Ezekiel 43:15–16). Isaiah’s Ariel is also Jerusalem. Name, city, house, and hearth share one word."
		}, {
			type: "p",
			text: "Ezekiel’s merkabah puts a lion’s face on the right of each of the four living creatures, with man, ox, and eagle. Chagigah 13b: the lion is king of animals, the ox of cattle, the eagle of birds; man is exalted over them; the Holy One is exalted over all. In later kabbalah the lion’s face is the upward run of the soul. The four faces also map onto the zodiac: Leo (aryeh) is the fifth month, Av."
		}]
	},
	{
		id: "visual",
		numeral: "VI",
		title: "Paired lions, a wall, olives",
		blocks: [{
			type: "p",
			text: "The visual type that lasts is a pair of rampant lions flanking the Tablets, a Torah crown, or the ark. It is on synagogue façades, silver shields, menorahs, ketubahs, and gravestones. The pairing with the eagle — king of beasts plus king of birds — comes from David’s lament and from Ezekiel’s four faces. A single passant lion, not a pair, sits on the 1950 municipal emblem of Jerusalem: wall, olives, the city’s name. Judah’s animal on Judah’s city, with peace as a wreath rather than a roar."
		}]
	},
	{
		id: "later",
		numeral: "VII",
		title: "The image leaves home",
		blocks: [{
			type: "p",
			text: "Christian readers take Revelation 5:5 — “the Lion of the tribe of Judah, the Root of David, has conquered” — as a title of Jesus. C. S. Lewis’s Aslan is a literary descendant. The Solomonic dynasty of Ethiopia claimed descent from Solomon and the Queen of Sheba; emperors, including Haile Selassie, used the Ge’ez title Mo’a Anbessa Ze’imnegede Yihuda, the Conquering Lion of the Tribe of Judah, on the imperial flag from 1897 to 1974. Rastafari reads the same verses as that living emperor. None of this cancels the Jewish use. It shows how far a Genesis line can travel once “Judah” names a people."
		}]
	},
	{
		id: "people",
		numeral: "VIII",
		title: "Names people still carry",
		blocks: [{
			type: "p",
			text: "Because the lion is Judah’s, it is a name. Aryeh, Ari, Ariel, Kfir, Lavi. Combined with Judah and with Yiddish Leib it yields Judah Aryeh, Judah Leib, Aryeh Leib. The blessing is doing onomastic work: a tribal animal becomes a personal name, then a family name, then a way to say courage without drawing the animal at all."
		}, {
			type: "quote",
			text: "Be as strong as a leopard, light as an eagle, fleet as a hart, and brave as a lion to perform the will of your Father who is in heaven.",
			cite: "Judah b. Tema, Avot 5:20"
		}]
	}
];
var LION_REFERENCES = [
	{
		n: 1,
		source: "Genesis 49:8–12; Numbers 23:24, 24:9; Deuteronomy 33:20, 22",
		title: "Sefaria — Torah",
		url: "https://www.sefaria.org/Genesis.49.9"
	},
	{
		n: 2,
		source: "Rashi and Rashbam on Genesis 49:9; Targum Onkelos ad loc.",
		title: "Sefaria — Rashi on Genesis 49:9",
		url: "https://www.sefaria.org/Rashi_on_Genesis.49.9"
	},
	{
		n: 3,
		source: "Babylonian Talmud, Sanhedrin 95a; Chagigah 13b; Avot 5:20",
		title: "Sefaria — Sanhedrin 95a",
		url: "https://www.sefaria.org/Sanhedrin.95a.2"
	},
	{
		n: 4,
		source: "Mishnah Middot 4:7; Maimonides, Beit HaBechirah 4:10; Shulchan Aruch, Orach Chayim 1:1",
		title: "Sefaria — Mishnah Middot 4:7",
		url: "https://www.sefaria.org/Mishnah_Middot.4.7"
	},
	{
		n: 5,
		source: "Ezekiel 1:10; Isaiah 29:1; 1 Kings 7:29, 10:20",
		title: "Sefaria — Ezekiel 1",
		url: "https://www.sefaria.org/Ezekiel.1.10"
	},
	{
		n: 6,
		source: "My Jewish Learning, “How the Lion of Judah Became a Jewish Symbol,” 2024",
		title: "How the Lion of Judah Became a Jewish Symbol",
		url: "https://www.myjewishlearning.com/article/how-the-lion-of-judah-became-a-jewish-symbol/"
	},
	{
		n: 7,
		source: "Jewish Encyclopedia, “Lion”; Jewish Virtual Library, “The Lion in Judaism”",
		title: "LION — Jewish Encyclopedia",
		url: "https://www.jewishencyclopedia.com/articles/10001-lion"
	},
	{
		n: 8,
		source: "Haaretz, “Why Were There Lions in the Towns of Biblical Israel,” 29 Nov 2023",
		title: "Lions in the towns of biblical Israel",
		url: "https://www.haaretz.com/archaeology/2023-11-29/ty-article-magazine/why-were-there-lions-in-the-towns-of-biblical-israel/0000018c-1ada-d4e4-a1df-3edfd4890000"
	},
	{
		n: 9,
		source: "Elon Gilad, etymology of לָבִיא",
		title: "lavi — lion",
		url: "https://www.elongilad.com/en/etymology/%D7%9C%D7%91%D7%99%D7%90"
	},
	{
		n: 10,
		source: "Wikipedia, “Lion of Judah”; Hebrew Wikipedia, “גור אריה יהודה”",
		title: "Lion of Judah",
		url: "https://en.wikipedia.org/wiki/Lion_of_Judah"
	}
];
var LION_CITATION = "Roboto SAI research with a Copilot. “Gur Aryeh: Hebrew lion symbolism, from Judah’s blessing to a Jewish emblem.” Roboto SAI Research, September 2026. https://roboto-sai.org/lion";
var $$splitComponentImporter$2 = () => import("./lion-BGErnPJQ.mjs");
var Route$2 = createFileRoute("/lion")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: `${LION_META.title} — ${APP_NAME}` }, {
		name: "description",
		content: LION_META.description
	}] })
});
var $$splitComponentImporter$1 = () => import("./rovox-CDy2Mjjw.mjs");
var Route$1 = createFileRoute("/rovox")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: `RoVox — ${APP_NAME}` }, {
		name: "description",
		content: "RoVox reads the Roboto SAI intro. Pause or stop only until the end, then answers and can update the working notes. House recording — not a catalog voice."
	}] })
});
var TEMPLAR_META = {
	en: {
		title: "Poor Knights of the Temple",
		subtitle: "The Order on the road to Jerusalem, and why Vila-real is era and frontier, not lineage",
		description: "A short history of the Knights Templar, from Hugh of Payns to the pyre of Jacques de Molay, cut against the 1274 foundation of Vila-real. Neighbors on the Plana. Not namers.",
		kicker: "A static research page · 8 sources",
		skip: "Skip to essay",
		citeTitle: "Cite this page",
		citation: "Roboto SAI research with a Copilot. “Poor Knights of the Temple.” Roboto SAI Research, September 2026. https://roboto-sai.org/templars",
		chronology: "A brief chronology",
		chronologyLead: "From nine knights on the road to Jerusalem to memory on the Valencian coast.",
		references: "References",
		back: "Back to the brief",
		brief: "Open the brief",
		photoAlt: "An empty limestone fortress under a pale sky, no flags, no people.",
		photoCaption: "A frontier fortress. On this coast the Temple is a neighboring lordship, not a family name."
	},
	es: {
		title: "Pobres caballeros del Templo",
		subtitle: "La orden en el camino a Jerusalén, y por qué Vila-real es época y frontera, no linaje",
		description: "Historia breve de los Caballeros Templarios, de Hugo de Payns a la hoguera de Jacques de Molay, cortada contra la fundación de Vila-real en 1274. Vecinos en la Plana. No nominadores.",
		kicker: "Página de investigación · 8 fuentes",
		skip: "Saltar al ensayo",
		citeTitle: "Citar esta página",
		citation: "Roboto SAI research with a Copilot. «Pobres caballeros del Templo». Roboto SAI Research, septiembre de 2026. https://roboto-sai.org/templars",
		chronology: "Una cronología breve",
		chronologyLead: "De nueve caballeros en el camino a Jerusalén a la memoria en la costa valenciana.",
		references: "Fuentes",
		back: "Volver a la síntesis",
		brief: "Abrir la síntesis",
		photoAlt: "Una fortaleza de caliza vacía bajo un cielo pálido, sin banderas ni gente.",
		photoCaption: "Una fortaleza de frontera. En esta costa el Templo es un señorío vecino, no un apellido."
	}
};
var TEMPLAR_FINDINGS = {
	en: [
		{
			kicker: "Nine knights",
			text: "Hugh of Payns and eight companions, after the First Crusade, to guard pilgrims on roads full of bandits."
		},
		{
			kicker: "Temple, then bank",
			text: "Baldwin II housed them at Al-Aqsa. They became the feared field force of the crusades — and Europe’s richest traveling bank."
		},
		{
			kicker: "One night",
			text: "Philip IV, who owed them a fortune, had them seized on 13 October 1307. Clement V dissolved the order in 1312. Molay burned in 1314."
		},
		{
			kicker: "Era, not lineage",
			text: "No published 1269–1274 grant names a Templar household as the namer of Vila-real. Neighbors at Xivert and Burriana. Not a bloodline."
		}
	],
	es: [
		{
			kicker: "Nueve caballeros",
			text: "Hugo de Payns y ocho compañeros, después de la Primera Cruzada, para guardar peregrinos en caminos llenos de bandidos."
		},
		{
			kicker: "Templo, luego banco",
			text: "Balduino II los alojó en Al-Aqsa. Se volvieron la fuerza más temida de las cruzadas — y el banco viajero más rico de Europa."
		},
		{
			kicker: "Una noche",
			text: "Felipe IV, que les debía una fortuna, los hizo prender el 13 de octubre de 1307. Clemente V disolvió la orden en 1312. Molay ardió en 1314."
		},
		{
			kicker: "Época, no linaje",
			text: "Ninguna merced publicada de 1269–1274 nombra a una casa templaria como nominadora de Vila-real. Vecinos en Xivert y Burriana. No una línea de sangre."
		}
	]
};
var TEMPLAR_TOC = {
	en: [
		{
			id: "introduction",
			numeral: "",
			title: "Introduction"
		},
		{
			id: "order",
			numeral: "I",
			title: "The order"
		},
		{
			id: "money",
			numeral: "II",
			title: "The bank"
		},
		{
			id: "end",
			numeral: "III",
			title: "The night and the pyre"
		},
		{
			id: "plana",
			numeral: "IV",
			title: "The Plana cut"
		},
		{
			id: "references",
			numeral: "",
			title: "References"
		}
	],
	es: [
		{
			id: "introduction",
			numeral: "",
			title: "Introducción"
		},
		{
			id: "order",
			numeral: "I",
			title: "La orden"
		},
		{
			id: "money",
			numeral: "II",
			title: "El banco"
		},
		{
			id: "end",
			numeral: "III",
			title: "La noche y la hoguera"
		},
		{
			id: "plana",
			numeral: "IV",
			title: "El corte de la Plana"
		},
		{
			id: "references",
			numeral: "",
			title: "Fuentes"
		}
	]
};
var TEMPLAR_SECTIONS = {
	en: [
		{
			id: "introduction",
			numeral: "",
			title: "A real order, then a rumor",
			blocks: [{
				type: "p",
				dropCap: true,
				text: "The Knights Templar were a military and religious order founded in 1119 by nine French knights led by Hugh of Payns, just after the First Crusade. Their first job was to protect Christian pilgrims traveling to Jerusalem, because the roads were full of bandits. That is the living order. What follows on this page is that order, then the cut this journal already makes on the Plana: era and frontier, not a family named Villarreal."
			}, {
				type: "note",
				text: "The dossier already steelmans the live claims — a Templar-Jewish household as namer; an assassination bargain paid with a royal town — and cuts them. This essay is the history those claims borrow, kept on its own clock."
			}]
		},
		{
			id: "order",
			numeral: "I",
			title: "Poor Knights of Christ and of the Temple of Solomon",
			blocks: [{
				type: "p",
				text: "King Baldwin II of Jerusalem gave them quarters in the Al-Aqsa mosque, which they took to be Solomon’s Temple — hence the name: Poor Knights of Christ and of the Temple of Solomon. In 1129 the pope approved them at the Council of Troyes. From then they grew as almost no other order grew: the most feared warriors of the crusades, under vows of poverty, chastity, and obedience, in a white mantle with a red cross."
			}, {
				type: "p",
				text: "On this frontier they are not a rumor. For help at the conquest of Burriana, James I granted the castle of Xivert to the Templars in 1233; they also received a third of Burriana itself. Vila-real is later carved from Burriana’s term. The Order is the neighboring lord, not the naming agent in the 1274 clause."
			}]
		},
		{
			id: "money",
			numeral: "II",
			title: "What made them powerful was not only the sword",
			blocks: [{
				type: "p",
				text: "They invented a traveling bank: the pilgrim deposited in his own country and withdrew in the Holy Land. In less than a century they were among the richest bankers in Europe. That is why a king who owed them a fortune could want them gone, and why a letter of credit is not a grant of a royal village."
			}]
		},
		{
			id: "end",
			numeral: "III",
			title: "One night, then a pyre",
			blocks: [{
				type: "p",
				text: "On 13 October 1307, Philip IV of France, who owed the Temple a fortune, accused them of heresy, had them arrested in a single night, and tortured confessions. Pope Clement V dissolved the order in 1312. Their last grand master, Jacques de Molay, was burned in Paris in 1314. In the kingdom of Valencia the Temple’s goods passed to the new Order of Montesa in 1317–19. After that date “Templar” on this coast is memory, not a living order."
			}]
		},
		{
			id: "plana",
			numeral: "IV",
			title: "Villarreal and the Temple: no document names them as one",
			blocks: [
				{
					type: "p",
					text: "There is no published document that connects them directly as namers. Templars did operate on the peninsula — Aragon, Castile, Portugal — but Villarreal de los Infantes was founded by James I of Aragon in 1274, after the order already existed. The connection is of era and of frontier, not of lineage."
				},
				{
					type: "p",
					text: "A separate, earlier graph must stay separate: after the death of Peter II at Muret in 1213, Templars under Guillem de Montrodón recovered the child James from Simon de Montfort and raised him at Monzón. That is documented protection and education. It is not a 1274 bargain in which a royal town is paid as ransom for a warning of assassination."
				},
				{
					type: "p",
					text: "Frey Petrus Peyronet, the king’s almoner funding the acequia of Ville Regalis on 12 May 1274, may be the Peter Peyronet listed as Templar commander at Burriana around 1273–77. Treat the two tokens as a dossier problem: probable, not proven by this page. Even if they are one man, an almoner paying for a canal is not a household naming a town."
				},
				{
					type: "quote",
					text: "Neighbors on the Plana. Not a bloodline. Not a naming clause.",
					cite: "This journal’s cut"
				}
			]
		}
	],
	es: [
		{
			id: "introduction",
			numeral: "",
			title: "Una orden real, luego un rumor",
			blocks: [{
				type: "p",
				dropCap: true,
				text: "Los Caballeros Templarios fueron una orden militar y religiosa fundada en mil ciento diecinueve por nueve caballeros franceses liderados por Hugo de Payns, justo después de la Primera Cruzada. Su misión original era proteger a los peregrinos cristianos que viajaban a Jerusalén, porque los caminos estaban llenos de bandidos. Esa es la orden viva. Lo que sigue en esta página es esa orden, y luego el corte que esta revista ya hace en la Plana: época y frontera, no una familia llamada Villarreal."
			}, {
				type: "note",
				text: "El dossier ya hace el steelman de las afirmaciones vivas — una casa templaria-judía como nominadora; un pacto de asesinato pagado con una villa real — y las corta. Este ensayo es la historia que esas afirmaciones piden prestada, en su propio reloj."
			}]
		},
		{
			id: "order",
			numeral: "I",
			title: "Pobres caballeros de Cristo y del Templo de Salomón",
			blocks: [{
				type: "p",
				text: "El rey Balduino II les dio como cuartel la mezquita de Al-Aqsa, que ellos creían era el Templo de Salomón — de ahí el nombre: Pobres Caballeros de Cristo y del Templo de Salomón. En mil ciento veintinueve el papa los aprobó oficialmente en el Concilio de Troyes, y desde entonces crecieron como nadie: se volvieron los guerreros más temidos de las cruzadas, con votos de pobreza, castidad y obediencia, y un manto blanco con cruz roja."
			}, {
				type: "p",
				text: "En esta frontera no son un rumor. Por la ayuda en la conquista de Burriana, Jaime I otorgó el castillo de Xivert a los templarios en 1233; también recibieron un tercio de la propia Burriana. Vila-real se talla después del término de Burriana. La Orden es el señor vecino, no el agente que nombra en la cláusula de 1274."
			}]
		},
		{
			id: "money",
			numeral: "II",
			title: "Lo que los hizo poderosos no fue solo la espada",
			blocks: [{
				type: "p",
				text: "Inventaron un sistema de bancos: el peregrino depositaba en su país y retiraba en Tierra Santa. En menos de un siglo eran los banqueros más ricos de Europa. Por eso un rey que les debía una fortuna podía quererlos fuera, y por eso una carta de crédito no es la merced de una villa real."
			}]
		},
		{
			id: "end",
			numeral: "III",
			title: "Una noche, luego una hoguera",
			blocks: [{
				type: "p",
				text: "El 13 de octubre de 1307, el rey Felipe IV de Francia, que les debía una fortuna, los acusó de herejía, los arrestó a todos en una sola noche y torturó confesiones. El papa Clemente V los disolvió en 1312, y su último gran maestre, Jacques de Molay, fue quemado en la hoguera en París en 1314. En el reino de Valencia los bienes del Templo pasan a la nueva Orden de Montesa en 1317–19. Después de esa fecha, «templario» en esta costa es memoria, no una orden viva."
			}]
		},
		{
			id: "plana",
			numeral: "IV",
			title: "Villarreal y los templarios: no hay documento que los una como nominadores",
			blocks: [
				{
					type: "p",
					text: "No hay documento publicado que los conecte directamente como nominadores. Los templarios sí operaron en la península — Aragón, Castilla, Portugal — pero Villarreal de los Infantes fue fundada por Jaime I de Aragón en mil doscientos setenta y cuatro, ya después de que la orden existiera. La conexión es de época y de frontera, no de linaje."
				},
				{
					type: "p",
					text: "Un grafo anterior, distinto, debe quedarse aparte: tras la muerte de Pedro II en Muret en 1213, templarios bajo Guillem de Montrodón recuperaron al niño Jaime de Simón de Montfort y lo criaron en Monzón. Eso es protección y educación documentadas. No es un pacto de 1274 en el que una villa real se paga como rescate por el aviso de un asesinato."
				},
				{
					type: "p",
					text: "Frey Petrus Peyronet, limosnero del rey que financia la acequia de Ville Regalis el 12 de mayo de 1274, puede ser el Peter Peyronet listado como comendador templario de Burriana hacia 1273–77. Trátense los dos tokens como un problema de dossier: probable, no probado por esta página. Aunque fueran un solo hombre, un limosnero que paga un canal no es una casa que nombra una villa."
				},
				{
					type: "quote",
					text: "Vecinos en la Plana. No una línea de sangre. No una cláusula de nombre.",
					cite: "El corte de esta revista"
				}
			]
		}
	]
};
var TEMPLAR_TIMELINE = {
	en: [
		{
			year: "1119",
			title: "Nine knights",
			text: "Hugh of Payns and eight companions. Guard the roads to Jerusalem."
		},
		{
			year: "1129",
			title: "Troyes",
			text: "Papal approval. White mantle, red cross, a rule."
		},
		{
			year: "1233",
			title: "Xivert",
			text: "James I grants Chivert for help at Burriana. Neighboring lordship."
		},
		{
			year: "1274",
			title: "Vila-real",
			text: "James founds a royal village in Burriana’s term. After the order already exists."
		},
		{
			year: "1307",
			title: "One night",
			text: "Philip IV seizes the Temple in France on 13 October."
		},
		{
			year: "1312–14",
			title: "Dissolved, then burned",
			text: "Clement V suppresses the order. Molay dies on the pyre in 1314."
		},
		{
			year: "1317–19",
			title: "Montesa",
			text: "Valencian Templar goods pass to a new order. Memory, not a living Temple."
		}
	],
	es: [
		{
			year: "1119",
			title: "Nueve caballeros",
			text: "Hugo de Payns y ocho compañeros. Guardar los caminos a Jerusalén."
		},
		{
			year: "1129",
			title: "Troyes",
			text: "Aprobación papal. Manto blanco, cruz roja, una regla."
		},
		{
			year: "1233",
			title: "Xivert",
			text: "Jaime I otorga Chivert por la ayuda en Burriana. Señorío vecino."
		},
		{
			year: "1274",
			title: "Vila-real",
			text: "Jaime funda una villa real en el término de Burriana. La orden ya existe."
		},
		{
			year: "1307",
			title: "Una noche",
			text: "Felipe IV prende al Templo en Francia el 13 de octubre."
		},
		{
			year: "1312–14",
			title: "Disueltos, luego la hoguera",
			text: "Clemente V suprime la orden. Molay muere en la hoguera en 1314."
		},
		{
			year: "1317–19",
			title: "Montesa",
			text: "Los bienes templarios valencianos pasan a una orden nueva. Memoria, no Templo vivo."
		}
	]
};
var TEMPLAR_REFERENCES = [
	{
		n: 1,
		source: "Malcolm Barber, The New Knighthood: A History of the Order of the Temple",
		title: "WorldCat record",
		url: "https://search.worldcat.org/oclc/27172197"
	},
	{
		n: 2,
		source: "Helen Nicholson, The Knights Templar: A New History",
		title: "The Knights Templar: A New History",
		url: "https://search.worldcat.org/oclc/50645405"
	},
	{
		n: 3,
		source: "A. J. Forey, The Templars in the Corona de Aragón",
		title: "The Templars in the Corona de Aragón",
		url: "https://search.worldcat.org/oclc/1366051"
	},
	{
		n: 4,
		source: "Council of Troyes, 1129; papal approval of the Temple",
		title: "Templars — overview",
		url: "https://www.britannica.com/topic/Templars"
	},
	{
		n: 5,
		source: "Arrests of 13 October 1307; Clement V, Vox in excelso, 1312; execution of Jacques de Molay, 18 March 1314",
		title: "Suppression of the Templars",
		url: "https://www.britannica.com/topic/Templars"
	},
	{
		n: 6,
		source: "James I, carta puebla of Vila-real, 20 February 1274",
		title: "Foundation of Vila-real",
		url: "https://www.vila-real.es/"
	},
	{
		n: 7,
		source: "Grant of Xivert/Chivert to the Templars, 1233, for help at Burriana",
		title: "Forey on Xivert",
		url: "https://search.worldcat.org/oclc/1366051"
	},
	{
		n: 8,
		source: "Order of Montesa, 1317–19, receiving Valencian Templar estates",
		title: "Order of Montesa",
		url: "https://www.britannica.com/topic/Order-of-Montesa"
	}
];
var $$splitComponentImporter = () => import("./templars-DbuXCRsM.mjs");
var Route = createFileRoute("/templars")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [{ title: `${TEMPLAR_META.en.title} — ${APP_NAME}` }, {
		name: "description",
		content: TEMPLAR_META.en.description
	}] })
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AtlasRoute: Route$5.update({
		id: "/atlas",
		path: "/atlas",
		getParentRoute: () => Route$7
	}),
	BriefRoute: Route$4.update({
		id: "/brief",
		path: "/brief",
		getParentRoute: () => Route$7
	}),
	DossierRoute: Route$3.update({
		id: "/dossier",
		path: "/dossier",
		getParentRoute: () => Route$7
	}),
	LionRoute: Route$2.update({
		id: "/lion",
		path: "/lion",
		getParentRoute: () => Route$7
	}),
	RovoxRoute: Route$1.update({
		id: "/rovox",
		path: "/rovox",
		getParentRoute: () => Route$7
	}),
	TemplarsRoute: Route.update({
		id: "/templars",
		path: "/templars",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { CHROME as C, SITE_URL as S, useLang as T, LION_TOC as _, TEMPLAR_SECTIONS as a, REGISTERS as b, BLESSING as c, LION_CITATION as d, LION_FINDINGS as f, LION_TIMELINE as g, LION_SECTIONS as h, TEMPLAR_REFERENCES as i, COMMENTARIES as l, LION_REFERENCES as m, TEMPLAR_FINDINGS as n, TEMPLAR_TIMELINE as o, LION_META as p, TEMPLAR_META as r, TEMPLAR_TOC as s, router_exports as t, LEXICON as u, MERKABAH_FACES as v, pick as w, GITHUB_URL as x, PERSONAL_NAMES as y };
