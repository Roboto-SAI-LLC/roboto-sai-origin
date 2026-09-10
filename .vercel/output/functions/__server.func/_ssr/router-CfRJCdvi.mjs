import { i as __toESM } from "../_runtime.mjs";
import { _ as createRootRoute, b as require_jsx_runtime, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, y as useRouter, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CfRJCdvi.js
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
			newText: "A claim inspector that steelmans first, a clause-by-clause carta pobla, a Plana chronicle that keeps 1429 as a searched gap, four new chapters (XV–XVIII), and a Monterrey migration node on the atlas — hotel, ejido, surname density, no news cycle.",
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
			lead: "Each claim is taken at full strength, then cut into what the acts say, what sits next to them, and what they do not carry. 1429 stays on the page as a searched gap. Monterrey is a later clock.",
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
			searchPlaceholder: "Roboto, Roberto, ASR, 1429…",
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
		englishBody: "El ensayo, el atlas, el dossier y Gur Aryeh están en inglés. Templarios y la síntesis están en los dos idiomas.",
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
			newText: "Un inspector de afirmaciones que primero hace el steelman, una carta puebla cláusula por cláusula, una crónica de la Plana que deja 1429 como hueco buscado, cuatro capítulos nuevos (XV–XVIII), y un nodo de migración en Monterrey en el atlas — hotel, ejido, densidad del apellido, sin ciclo de noticias.",
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
			lead: "Cada afirmación se toma a plena fuerza, luego se corta en lo que dicen las actas, lo que se sienta al lado, y lo que no cargan. 1429 queda en la página como hueco buscado. Monterrey es un reloj posterior.",
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
			searchPlaceholder: "Roboto, Roberto, ASR, 1429…",
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
var styles_default = "/assets/styles-6ZvcAPMa.css";
var DESCRIPTION = "Onomastic methodology from Roboto SAI: the names Roboto and Roberto, the 1274 Vila-real network, four clocks, Gur Aryeh, and the Temple on the Plana.";
var Route$6 = createRootRoute({
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
var META = {
	journal: "Roboto SAI Research",
	series: "Methodology",
	title: "The Names Roboto and Roberto",
	subtitle: "Linguistic Origins, Historical Usage, and Cultural Migrations",
	credit: "Roboto SAI research with a Copilot",
	date: "September 2026",
	sourceCount: 42,
	description: "A research essay on the names Roboto and Roberto — house and given name — against the English glosses Robot and Robert. Traces Slavic labor vocabulary and Proto-Germanic fame-compounds through royalty, surnames, inscriptions, and sound-alike names with divergent meanings. Includes why speech recognizers collapse the pair, a 1274 Vila-real network atlas, a carta pobla close reading, a claim-by-claim dossier, and a later Monterrey place clock."
};
var TOC = [
	{
		id: "introduction",
		numeral: "",
		title: "Introduction"
	},
	{
		id: "robot",
		numeral: "I",
		title: "Etymology of Robot"
	},
	{
		id: "robert",
		numeral: "II",
		title: "The name Robert"
	},
	{
		id: "onomastics",
		numeral: "III",
		title: "Onomastics and anthroponymy"
	},
	{
		id: "villarreal",
		numeral: "IV",
		title: "Villarreal, 1274"
	},
	{
		id: "variants",
		numeral: "V",
		title: "Orthographic variants"
	},
	{
		id: "yisrael",
		numeral: "VI",
		title: "Yisroel and Israel"
	},
	{
		id: "soundalike",
		numeral: "VII",
		title: "Sound-alike names"
	},
	{
		id: "mars",
		numeral: "VIII",
		title: "Martinez and Mars"
	},
	{
		id: "migrations",
		numeral: "IX",
		title: "Cultural migrations"
	},
	{
		id: "inscriptions",
		numeral: "X",
		title: "Names in inscriptions"
	},
	{
		id: "tables",
		numeral: "XI",
		title: "Tables and timelines"
	},
	{
		id: "method",
		numeral: "XII",
		title: "Methodology"
	},
	{
		id: "prosopography",
		numeral: "XIII",
		title: "Prosopography"
	},
	{
		id: "ledger",
		numeral: "XIV",
		title: "Record and gap"
	},
	{
		id: "charter",
		numeral: "XV",
		title: "The carta pobla"
	},
	{
		id: "shocks",
		numeral: "XVI",
		title: "1391, 1429, 1492"
	},
	{
		id: "dna",
		numeral: "XVII",
		title: "Four clocks"
	},
	{
		id: "jamestown",
		numeral: "XVIII",
		title: "Two King James towns"
	},
	{
		id: "conclusion",
		numeral: "",
		title: "Conclusion"
	},
	{
		id: "appendix",
		numeral: "",
		title: "Appendix"
	},
	{
		id: "references",
		numeral: "",
		title: "References"
	}
];
var SECTIONS = [
	{
		id: "introduction",
		numeral: "",
		title: "Introduction",
		blocks: [
			{
				type: "p",
				dropCap: true,
				text: "Names are more than mere labels; they are vessels of history, culture, and identity. The study of names—encompassing their origins, transformations, and migrations—offers a unique lens through which to view human societies across time and space. This report explores the names Roboto and Roberto. Robot and Robert are the English glosses that rhyme beside them. They are not the names under study."
			},
			{
				type: "p",
				text: "It also examines the phenomenon of similar-sounding names with divergent meanings, such as Yisroel and Israel or Villarreal and Martinez, and delves into the symbolic associations that names can carry, exemplified by the link between Martinez and Mars, the Roman god of war. Roberto is the Iberian form of Robert — fame plus bright. Roboto sits next to robot / robota, the 1920 Czech coinage from Slavic forced labor. The house is not a diminutive of the given name."
			},
			{
				type: "p",
				text: "Through timelines, tables, case studies—including the inscriptional evidence for Villarreal in 1274—and a prosopographical atlas of the people actually named in the 1269–1274 grants, this report integrates onomastic theory, epigraphic methodology, and cultural analysis. Adjacent facts (Templars at Xivert and Burriana; a Jewish aljama; a Jewish recruiter) are kept on the page. They are not glued to the naming clause. Claims that family memory dates to 1429, or that DNA stores a charter, are steelmanned first, then split."
			}
		]
	},
	{
		id: "robot",
		numeral: "I",
		title: "The Etymology and Semantic Evolution of “Robot”",
		blocks: [
			{
				type: "h3",
				id: "robot-slavic",
				title: "A. Slavic origins and modern coinage"
			},
			{
				type: "p",
				text: "The term robot is a relatively recent addition to the English lexicon, yet its roots reach deep into the Slavic linguistic tradition. The word first appeared in English in 1923, through the translation of Karel Čapek’s 1920 Czech play *R.U.R.* (*Rossum’s Universal Robots*). In that context, robot denoted a mechanical person, or a person whose work or activities are entirely mechanical.[1]"
			},
			{
				type: "p",
				text: "The Czech word *robotník* means “forced worker,” derived from *robota*, which signifies forced labor, compulsory service, drudgery.[1] This traces back to Old Church Slavonic *rabota* (servitude) and *rabu* (slave), ultimately from the Proto-Indo-European root *orbh-*, “to pass from one status to another” or “to change allegiance.”"
			},
			{
				type: "p",
				text: "The semantic field of robot thus encompasses labor, servitude, and status change. Slavic *robota* is also cognate with German *Arbeit* (work), a pan-European linguistic connection. The word was popularized by Karel Čapek’s play; it was reportedly coined by his brother Josef Čapek, who had used it in a short story."
			},
			{
				type: "h3",
				id: "robot-shift",
				title: "B. From fiction to technical term"
			},
			{
				type: "p",
				text: "In *R.U.R.*, robots were not metal automatons. They were artificial humans made from synthetic organic material, designed to perform labor for humans. The play imbued the term with ethical weight, emphasizing exploitation and the absence of a soul."
			},
			{
				type: "quote",
				text: "The Robots are not people. Mechanically they are more perfect than we are, they have an enormously developed intelligence, but they have no soul.",
				cite: "Karel Čapek, R.U.R. (1920)"
			},
			{
				type: "p",
				text: "The term quickly migrated from literary fiction to technical parlance. By the 1940s and 1950s, engineers used robot for mechanical automation, especially programmable industrial arms.[1] The original metaphorical and biological connotations narrowed toward mechanical and computational systems."
			},
			{
				type: "p",
				text: "Early robots were rule-based, inflexible machines, echoing the play’s obedient, soulless workers. With artificial intelligence and machine learning, the concept expanded to adaptive, autonomous systems capable of learning and decision-making.[1]"
			},
			{
				type: "h3",
				id: "robot-impact",
				title: "C. Linguistic and cultural impact"
			},
			{
				type: "p",
				text: "The choice of robot over alternatives such as automaton or mechanism was deliberate: it evoked the moral and social implications of labor and servitude.[1] That resonance has persisted in debates about automation, labor rights, and the ethics of artificial intelligence. The word remains a cultural and technological mirror, reflecting changing attitudes toward work, agency, and the boundary between human and machine.[1]"
			}
		]
	},
	{
		id: "robert",
		numeral: "II",
		title: "The Name “Robert”: Etymology, Historical Usage, and Migration",
		blocks: [
			{
				type: "h3",
				id: "robert-roots",
				title: "A. Proto-Germanic roots and meaning"
			},
			{
				type: "p",
				text: "Robert is an ancient Germanic given name, from Proto-Germanic *Hrōþiberhtaz*, a compound of *hruod* (fame) and *berhta* (bright). The name means “bright fame,” “glory-bright,” or “shining with glory.” Cognate forms appear in Old Dutch (*Robrecht*) and Old High German (*Hrodebert*)."
			},
			{
				type: "p",
				text: "The Normans introduced the name to Britain, where it supplanted the rare Old English cognate *Hreodbeorht*. Its enduring popularity is evident in consistent use across English, French, German, Dutch, Scandinavian, and Slavic languages."
			},
			{
				type: "h3",
				id: "robert-timeline",
				title: "B. Historical timeline and usage across Europe"
			},
			{
				type: "p",
				text: "Robert has been borne by royalty, nobility, saints, and notable figures throughout European history. Royal associations include two kings of the Franks, two dukes of Normandy, and three kings of Scotland, notably Robert the Bruce, who restored Scottish independence in the fourteenth century. Several saints also bore the name; the earliest known is Saint Rupert, an Old German variant.[2]"
			},
			{
				type: "table",
				id: "table-robert-timeline",
				caption: "Selected bearers of the name Robert",
				headers: [
					"Date / period",
					"Region",
					"Notable bearers and events"
				],
				rows: [
					[
						"9th–10th c.",
						"Germany / France",
						"Robert II, Count of Hesbaye (d. 807); Robert I of France (c. 866–923)"
					],
					[
						"11th c.",
						"Normandy",
						"Robert I, Duke of Normandy (1000–1035), father of William the Conqueror[2]"
					],
					[
						"13th–14th c.",
						"Scotland",
						"Robert the Bruce (1274–1329), King of Scotland"
					],
					[
						"13th–20th c.",
						"England / US",
						"Consistently among the most common English given names"
					],
					[
						"20th c.",
						"United States",
						"Most popular boys’ name (1924–1939, 1953)"
					]
				]
			},
			{
				type: "h3",
				id: "robert-variants",
				title: "C. Variants, diminutives, and cultural adaptations"
			},
			{
				type: "p",
				text: "Robert has generated a rich array of variants and diminutives. Diminutives such as Bob, Bobby, Rob, Robbie, and Robin are common in English and beyond. That adaptability facilitated migration and integration into diverse linguistic contexts."
			},
			{
				type: "table",
				id: "table-robert-variants",
				caption: "Variants and diminutives of Robert",
				headers: [
					"Language / culture",
					"Variant(s)",
					"Diminutives / feminine forms"
				],
				rows: [
					[
						"German",
						"Rupert, Ruprecht",
						"Roberta (fem.)"
					],
					[
						"Dutch",
						"Robbert, Robrecht",
						"Robbe (dim.)"
					],
					[
						"French",
						"Robert",
						"Roberte (fem.)"
					],
					[
						"Italian / Spanish",
						"Roberto, Ruperto",
						"Roberta (fem.)"
					],
					[
						"Scots",
						"Rab, Rabbie",
						"Robina, Robyn"
					],
					[
						"Finnish",
						"Roopertti, Pertti",
						"—"
					],
					[
						"Russian",
						"Роберт (Robert)",
						"—"
					],
					[
						"Breton",
						"Roparzh",
						"—"
					],
					[
						"Latvian",
						"Roberts",
						"—"
					]
				]
			},
			{
				type: "h3",
				id: "robert-surnames",
				title: "D. Migration and surname formation"
			},
			{
				type: "p",
				text: "The migration of Robert across Europe is closely tied to the Norman Conquest and the spread of Christianity. As a given name it became the root of numerous surnames, including Robertson, Roberts, Roberson, and Robinson. Surname formation often involved patronymic or toponymic elements, reflecting lineage or place of origin.[3]"
			}
		]
	},
	{
		id: "onomastics",
		numeral: "III",
		title: "Onomastics and Anthroponymy: Theories and Methods",
		blocks: [
			{
				type: "h3",
				id: "onomastics-study",
				title: "A. The study of personal names"
			},
			{
				type: "p",
				text: "Onomastics is the study of names. Anthroponymy (or anthroponomastics) focuses on the proper names of human beings, individual and collective.[3] It is a branch of onomastics and intersects with anthropology, history, geography, sociology, prosopography, and genealogy.[3]"
			},
			{
				type: "p",
				text: "Anthroponymists collect evidence from inscriptions, documents, tax records, dictionaries, phone books, monographs, and websites, then interpret it through linguistic analysis, the comparative-historical method, geographical method, and statistical method.[3]"
			},
			{
				type: "h3",
				id: "onomastics-types",
				title: "B. Types and classifications of names"
			},
			{
				type: "ul",
				items: [
					"Personal names: given names, surnames, nicknames, pseudonyms, mononyms, matronyms, patronyms, eponyms, teknonyms.[3]",
					"Group and population names: demonyms, ethnonyms, tribal names, clan names.[3]",
					"Gendered classes: andronyms (male names) and gynonyms (female names).[3]"
				]
			},
			{
				type: "h3",
				id: "onomastics-process",
				title: "C. Processes of name formation and transformation"
			},
			{
				type: "ul",
				items: [
					"Anthroponymization: surnames from occupations (Smith, Miller).[3]",
					"Deanthroponymization: a personal name becomes an appellative (braille from Louis Braille).[3]",
					"Transonymization: conversion between anthroponyms and toponyms (Alexander → Alexandria; Columbus → Colombia).[3]"
				]
			},
			{
				type: "p",
				text: "Toponymic surnames are common, as are patronymic forms such as Martinez, “son of Martin.”[4][5]"
			},
			{
				type: "h3",
				id: "onomastics-method",
				title: "D. Methods that keep sound from writing genealogy"
			},
			{
				type: "ul",
				items: [
					"Documentary onomastics: start with dated charters, tax rolls, notarial acts, and aljama records — not a modern surname website.",
					"Etymology with controls: reconstruct the language path, then test it against other places with the same formation. Several Spanish towns are named Villarreal.",
					"Distribution mapping: plot first attestations before and after 1492, in Valencia, Portugal, and the Americas.",
					"Prosopography: rebuild networks of people, not isolated name tokens. Who stands next to whom in a witness list.",
					"Socio-onomastics: a “royal” toponym can mean the crown founded the place, and centuries later that a family came from it, and later still that a converso line needed a Christian-looking habitational name. Date each use."
				]
			},
			{
				type: "note",
				text: "The official record is incomplete by design. Medieval charters name the grantor and the legal status of the land. They rarely name informal brokers unless those people hold title. Absence from the carta pobla is not absence from the region."
			}
		]
	},
	{
		id: "villarreal",
		numeral: "IV",
		title: "Case Study: Villarreal 1274 — Inscription Evidence and Context",
		blocks: [
			{
				type: "h3",
				id: "villarreal-foundation",
				title: "A. Historical foundation and toponymy"
			},
			{
				type: "p",
				text: "Villarreal (officially Vila-real in Valencian) is a town in the province of Castellón, Valencian Community, Spain. It was founded on 20 February 1274 by King James I of Aragon, with royal status, as part of the campaign to reclaim Muslim territory during the Reconquista.[6] The name Villarreal (or Vila-real) means “Royal Village,” reflecting foundation by royal decree.[6]"
			},
			{
				type: "p",
				text: "The city’s name has appeared in various orthographic forms: the Latinized *Villae Regalis* in the Middle Ages, and the Valencian *Vilareal* in a 1592 tapestry of the Valencian Parliament.[6] The Castilian form Villarreal became dominant in the late eighteenth century. After the Spanish Civil War the city was briefly renamed Villarreal de los Infantes to distinguish it from other localities.[6]"
			},
			{
				type: "h3",
				id: "villarreal-evidence",
				title: "B. Inscriptional and documentary evidence"
			},
			{
				type: "p",
				text: "The presence of the name Villarreal in historical records is attested by epigraphic and documentary sources. A document titled “Villarreal, Spain 1274” provides evidence of the town’s foundation and demographic data for that period.[7] The specific content of any stone inscription is not detailed in the available reference; that gap is noted here rather than filled by conjecture."
			},
			{
				type: "p",
				text: "Cartularies—medieval manuscript volumes containing transcriptions of original documents—are key sources for the legal and historical context of place names like Villarreal.[8] These collections often include charters, privileges, and other records that document the foundation and rights of towns, monasteries, and families."
			},
			{
				type: "h3",
				id: "villarreal-epigraphy",
				title: "C. Epigraphy databases and tools"
			},
			{
				type: "p",
				text: "Modern researchers use digital epigraphy databases to search inscriptions and analyze their content. The EAGLE Portal (Electronic Archive of Greek and Latin Epigraphy) aggregates around 350,000 disambiguated texts, with full-text and advanced queries, including image-based searches. It integrates controlled multilingual vocabularies and links to translations, metadata, and original sources."
			},
			{
				type: "p",
				text: "Other platforms, such as Trismegistos and Inscriptiones, help identify duplicates and offer peer-reviewed translations. The EpiDoc Guidelines provide standards for encoding ancient documents in TEI XML, covering transcription, editorial preparation, and metadata.[9]"
			},
			{
				type: "h3",
				id: "villarreal-paleography",
				title: "D. Paleography and dating methods"
			},
			{
				type: "p",
				text: "Paleography—the study of ancient handwriting and scripts—is essential for interpreting stone inscriptions and medieval manuscripts. A thirteenth-century paleography manual illustrates the process of recognizing letters, numerals, abbreviations, and marginalia in primary sources from medieval Spain.[10]"
			},
			{
				type: "p",
				text: "A royal donation manuscript from the Archivo Municipal de Burgos, dated 3 November 1091 (copied in the thirteenth century), demonstrates Carolingian and French scripts in Castilian documents.[10] Paleographic analysis identifies letter forms, abbreviation conventions, and marginalia. Roman numerals and dating systems such as the Spanish *era* require contextual knowledge to convert to modern calendar dates.[10]"
			},
			{
				type: "h3",
				id: "villarreal-neighbors",
				title: "E. Adjacent structures: Temple and Burriana"
			},
			{
				type: "p",
				text: "The legal founder is the crown. The local military landscape is not empty. For help at the conquest of Burriana, James I granted the castle of Xivert (Chivert) to the Templars in 1233; they also received a third of Burriana itself, and later a large share of its tithes.[15] Vila-real is carved from Burriana’s term. The Order is the neighboring lord, not the naming agent in the 1274 clause."
			},
			{
				type: "p",
				text: "A separate, earlier graph matters and must stay separate: after the death of Peter II at Muret in 1213, Templars under Guillem de Montrodón recovered the child James from Simon de Montfort and raised him at Monzón. That is documented protection and education. It is not a 1274 bargain in which a royal town is paid as a ransom for a warning of assassination."
			},
			{
				type: "h3",
				id: "villarreal-people",
				title: "F. Named persons in the 1269–1274 grants"
			},
			{
				type: "p",
				text: "The published grants name people by office and trade, not by a family called Villarreal. Infant Pere, as lord of Burriana, is already granting at Villa Regalis in 1269. On 8 July 1272 Jaime grants land to the daughter of Paris, the king’s silversmith. On 19 September 1272 Ramon Escorna receives land; the new acequia is already under construction. The notary of the 1274 charter is Simó de Sant Feliu.[16]"
			},
			{
				type: "p",
				text: "On 12 May 1274 Jaime sells two years of Burriana rents so that Frey Petrus Peyronet, his almoner, can apply the money to the acequia of Ville Regalis.[16] Templar lists independently name a Peter Peyronet as commander at Burriana around 1273–1277. Whether those two tokens are one man is a classic dossier problem: probable, not proven by this page."
			},
			{
				type: "h3",
				id: "villarreal-aljama",
				title: "G. The aljama, and the later surname"
			},
			{
				type: "p",
				text: "The town’s own history records that Catalan courtiers to whom the king first offered the new village declined the harsh terms, and that a Jewish agent, Salomó Vidal, then recruited inhabitants.[17] A judería street appears in local studies. A 1990 monograph from the Hebrew University treats the Jewish communities of Castellón, Burriana, and Villarreal together.[18] After the 1391 assaults the community shrinks; the 1492 expulsion meets a remnant, not a large aljama."
			},
			{
				type: "p",
				text: "The surname Villarreal is habitational: taken from a royal village. It later appears among conversos, in Inquisition lists, and in the Portuguese Villareal family that re-entered Jewish life in London.[19] That is a real Sephardic surname history. It is not automatically a town-founding history. Two propositions; keep them dated."
			},
			{
				type: "note",
				text: "Hypothesis, stated as one sentence: a martial household tied to Templar frontier structures or to the Jewish recruitment network may have been among the informal early elite of Vila-real, even if the legal name of the town is the crown’s. What would confirm it is a 13th-century person whose byname is de Villarreal / de Vila-real in the Burriana grants, who is also a Templar brother, donat, or documented Jew. That token is not in the published acts used here."
			}
		]
	},
	{
		id: "variants",
		numeral: "V",
		title: "Orthographic and Toponymic Variants: Villarreal, Villareal, Villar Real",
		blocks: [
			{
				type: "h3",
				id: "variants-forms",
				title: "A. Variants and regional adaptations"
			},
			{
				type: "p",
				text: "The name Villarreal exhibits several orthographic and toponymic variants, reflecting linguistic, administrative, and historical influences. The adoption of different forms over time tracks shifts in political authority, language policy, and local identity.[6]"
			},
			{
				type: "table",
				id: "table-villarreal-variants",
				caption: "Orthographic forms of Villarreal",
				headers: [
					"Variant",
					"Language / context",
					"Meaning / notes"
				],
				rows: [
					[
						"Villarreal",
						"Castilian Spanish",
						"“Royal Village”"
					],
					[
						"Vila-real",
						"Valencian (official)",
						"“Royal Village”"
					],
					[
						"Vilareal",
						"Old Valencian",
						"Seen in a 1592 tapestry"
					],
					[
						"Villae Regalis",
						"Latin (medieval)",
						"Official medieval designation"
					],
					[
						"Villarreal de los Infantes",
						"Post-1939",
						"To distinguish it from other towns"
					]
				]
			},
			{
				type: "h3",
				id: "variants-surnames",
				title: "B. Toponymic surnames and migration"
			},
			{
				type: "p",
				text: "Toponymic surnames—those derived from place names—are common in Iberian and other European naming traditions. Transonymization, whereby a place name becomes a surname, is well documented in anthroponymic studies.[3] Migration and colonization spread such surnames across regions and continents, as in the diffusion of Iberian surnames to Latin America.[5]"
			}
		]
	},
	{
		id: "yisrael",
		numeral: "VI",
		title: "Transliteration and Pronunciation: Yisroel vs. Israel",
		blocks: [
			{
				type: "h3",
				id: "yisrael-hebrew",
				title: "A. Hebrew origins and meaning"
			},
			{
				type: "p",
				text: "The name Yisrael (יִשְׂרָאֵל) is a Hebrew word meaning “one who wrestles with God,” from the root שׂ-ר-ה plus א-ל.[11] The name was bestowed upon Jacob after his struggle with the divine at Peniel, as recounted in Genesis 32:28: “Your name shall no longer be called Jacob, but Israel (Yisrael), for you have striven with God and with men, and have prevailed.”[11]"
			},
			{
				type: "p",
				text: "Yisrael appears over 2,500 times in the Hebrew Bible, referring to the patriarch Jacob, the nation descended from him, the northern kingdom, and the covenant people of God.[11]"
			},
			{
				type: "h3",
				id: "yisrael-translit",
				title: "B. Transliteration and pronunciation differences"
			},
			{
				type: "p",
				text: "The difference between Yisroel and Israel arises from transliteration conventions and pronunciation shifts. In Hebrew the name is Yisrael, with initial yod representing the *y* sound.[11] The transliteration Israel omits that initial *Y*, reflecting adaptations into Greek, Latin, and later European languages."
			},
			{
				type: "p",
				text: "Rabbi Ari Shvat notes that the shift to “Israel” lacks particular theological significance; it reflects local languages and pronunciation habits during the Jewish diaspora. Parallel cases include Shlomo becoming Solomon, Avraham becoming Abraham, and Yitzchak becoming Isaac."
			},
			{
				type: "h3",
				id: "yisrael-homophony",
				title: "C. Phonetic similarity vs. semantic difference"
			},
			{
				type: "p",
				text: "Names that sound similar in English can carry different meanings or associations. Homophony—words with different meanings that sound the same—has implications for language production and comprehension.[12] In the case of Yisroel and Israel, phonetic similarity masks distinct historical and cultural resonances, particularly in religious and national contexts."
			}
		]
	},
	{
		id: "soundalike",
		numeral: "VII",
		title: "Sound-Alike Names and Divergent Meanings",
		blocks: [
			{
				type: "h3",
				id: "soundalike-divergence",
				title: "A. Phonetic similarity and semantic divergence"
			},
			{
				type: "p",
				text: "Names such as Villarreal and Martinez may sound similar in English or other languages but have distinct etymological origins and cultural associations. Studies of homophones show that frequency and context influence how such names are processed and understood.[12]"
			},
			{
				type: "p",
				text: "Villarreal is a toponymic name meaning “Royal Village.” Martinez is a patronymic surname meaning “son of Martin.”[4][5][6] Despite any phonetic resemblance, the names encode different histories, lineages, and symbolic meanings."
			},
			{
				type: "h3",
				id: "soundalike-regions",
				title: "B. Surname variations across regions"
			},
			{
				type: "p",
				text: "The suffix *-ez* in Spanish surnames, as in Martinez, denotes patronymic origin (“son of”), a pattern common in the Iberian Peninsula since the Middle Ages.[5] Regional and linguistic influences produce orthographic and phonetic variants such as Martines or Martins in Portuguese.[4][5]"
			},
			{
				type: "ul",
				items: [
					"Patronymic and matronymic formation: derivation from parental names (Martinez from Martin).[5]",
					"Occupational and toponymic origins: surnames based on professions or places (Smith, Villarreal).[3]",
					"Language and migration: adaptation to local phonetics and orthography (Martinez in the United States, often without the accent).[5]"
				]
			},
			{
				type: "h3",
				id: "soundalike-identity",
				title: "C. Cultural significance and identity"
			},
			{
				type: "p",
				text: "Surnames carry cultural weight as markers of heritage, identity, and social status. In Hispanic cultures, surnames like Martinez can symbolize family honor, continuity, and resilience. Their widespread use across Spain, Latin America, and the United States reflects colonization, migration, and cultural adaptation.[5]"
			},
			{
				type: "h3",
				id: "soundalike-asr",
				title: "D. The machine ear: Roboto and Roberto"
			},
			{
				type: "p",
				text: "They are not homophones. They are a near pair. In Spanish, Roberto is [roˈβeɾto] and Roboto is [roˈβoto]. Two differences carry the whole contrast: the second-syllable vowel /e/ versus /o/, and the alveolar tap /ɾ/ that sits between that vowel and the /t/. The tap is a single tongue flick, on the order of twenty milliseconds. Miss it, and the skeleton that remains is /ro…to/."
			},
			{
				type: "p",
				text: "Automatic speech recognition (ASR) is not a clerk taking dictation. It is an acoustic model plus a language model.[42] The acoustic model is asked to hear a tap that English barely owns, and that noise, telephone bandwidth, and fast speech all swallow. The language model is then asked to choose between a given name that fills Spanish civil registers and a house name that barely exists in training text. Frequency and context decide the bet.[12] The common name wins. That is why every system trips."
			},
			{
				type: "p",
				text: "English systems add a second collapse. They already know robot and Robert — the glosses this essay refuses. Say Roboto into an English decoder and the page comes back as Roberto, Robert, robot, or, in a tech register, a font. The writing is still Latin letters and still reads as if it had been copied from another script: the shapes are familiar and the sense has been stripped. Call that sanscript if you like. It is exaggeration, not a language. It is the same sound-versus-sense trap, now running in a machine that has never met the house."
			},
			{
				type: "table",
				id: "asr-pair",
				caption: "What the ear keeps, and what the decoder prefers",
				headers: [
					"Name",
					"IPA (es)",
					"The contrast",
					"Decoder prior"
				],
				rows: [[
					"Roboto",
					"[roˈβoto]",
					"no tap; /o/ in the second syllable",
					"rare house; English also offers robot"
				], [
					"Roberto",
					"[roˈβeɾto]",
					"tap /ɾ/ plus /e/",
					"common given name"
				]]
			},
			{
				type: "note",
				text: "Sanscript here is a joke about a bad transcript, not a script to add. The names under study stay Roboto and Roberto, written as they are."
			}
		]
	},
	{
		id: "mars",
		numeral: "VIII",
		title: "Symbolic and Mythological Associations: Martinez and Mars",
		blocks: [
			{
				type: "h3",
				id: "mars-etymology",
				title: "A. Etymology and symbolism of Martinez"
			},
			{
				type: "p",
				text: "Martinez originates as a patronymic, “son of Martin.”[4][5] The root Martin derives from Latin *Martinus*, related to Mars, the Roman god of war.[4][5] That connection imbues the name with connotations of strength, valor, and martial prowess."
			},
			{
				type: "p",
				text: "The popularity of Martin in Christian Europe is linked to Saint Martin of Tours, a fourth-century saint renowned for charity and humility.[4] Martinez thus encapsulates both martial and spiritual virtues."
			},
			{
				type: "h3",
				id: "mars-god",
				title: "B. Mars, the Roman god of war"
			},
			{
				type: "p",
				text: "Mars (Latin: *Mārs*) was the Roman god of war and a guardian of agriculture, embodying both destructive and protective forces.[13] As the son of Jupiter and Juno, Mars was pre-eminent among the Roman army’s military gods and was celebrated in festivals marking the beginning and end of the campaigning season.[13]"
			},
			{
				type: "p",
				text: "The Latin adjectives *Mārtius* and *mārtiālis*—from which English *martial* and personal names like Martin derive—reflect the god’s influence on language and naming.[13] The association between Martinez and Mars therefore extends beyond etymology to cultural ideals of courage, leadership, and resilience."
			},
			{
				type: "h3",
				id: "mars-migration",
				title: "C. Cultural migration and adaptation"
			},
			{
				type: "p",
				text: "The spread of Martinez from Spain to Latin America and beyond is a testament to names as carriers of identity and symbolism.[5] The name’s resonance with heritage, resilience, and community is reinforced by its connection to both historical figures and mythological archetypes."
			}
		]
	},
	{
		id: "migrations",
		numeral: "IX",
		title: "Cultural Migrations of Names",
		blocks: [
			{
				type: "h3",
				id: "migrations-iberian",
				title: "A. Iberian surnames in the Americas"
			},
			{
				type: "p",
				text: "The migration of Iberian surnames such as Martinez to Latin America was facilitated by Spanish colonization in the fifteenth and sixteenth centuries.[5] The patronymic tradition, combined with the imposition of Spanish naming conventions on indigenous populations, produced a tapestry of surnames reflecting both European and local influences.[5]"
			},
			{
				type: "p",
				text: "The prevalence of Martinez in Mexico, Colombia, Venezuela, Argentina, and the United States illustrates the global diffusion of Iberian names through colonization, migration, and diaspora.[5]"
			},
			{
				type: "h3",
				id: "migrations-robert",
				title: "B. The migration of Robert across Europe"
			},
			{
				type: "p",
				text: "Robert spread across Europe through conquest, religious conversion, and cultural exchange. Adoption by royalty and nobility facilitated integration into local naming systems; adaptability enabled numerous variants and surnames."
			},
			{
				type: "ul",
				items: [
					"Norman Conquest: introduction of Robert to England and replacement of Old English cognates.",
					"Christianization: adoption of Christian names in newly converted regions, often replacing indigenous names.",
					"Surname formation: given names become surnames through patronymic, toponymic, or occupational processes.[3]"
				]
			},
			{
				type: "h3",
				id: "migrations-monterrey",
				title: "C. Nuevo León: a living Villarreal geography"
			},
			{
				type: "p",
				text: "The habitational surname Villarreal — “one who came from a royal village” — is densest, in Mexico, in Nuevo León. Compiled public-name files put about a third of Mexican Villarreals in that state, with further clusters in Coahuila and Tamaulipas; in Monterrey municipality the name sits around rank 17, roughly one in 137 people.[34] That is saturation of a later cohort. It is not a 1274 founding clause."
			},
			{
				type: "p",
				text: "Two place-names write the surname back onto land. Los Villarreales is an INEGI rural locality (190450118) in Salinas Victoria, about forty kilometres north of Monterrey, inside the metropolitan area: 633 inhabitants in 2020.[35] Postal and land language also says ejido, hacienda, ranchos and quintas. Hotel La Mansión Villarreal occupies the 1893 warehouse of Fábricas Apolo at Pino Suárez and Carlos Salazar, Centro; INAH catalogued the building and already recorded the hotel as La Mansión Villa Real in 2009.[36] Two orthographies of the same form. Neither place is Vila-real in Castellón."
			},
			{
				type: "note",
				text: "Place → surname (Iberia, 1274 and after) and surname → place (Nuevo León) are opposite transonymizations. “Villarreal de los Monterrey” is a disambiguator of living geography, analogously to Villarreal de los Infantes — not a municipality. The 1274 town and this landscape are separate clocks."
			},
			{
				type: "p",
				text: "The state name is a third clock. In 1579 Luis de Carvajal y de la Cueva, a Portuguese New Christian, obtained a capitulation for the Nuevo Reino de León, named for the Kingdom of León in Spain — Felipe II’s birthplace — not for the animal. León itself is Latin Legio. INAFED still writes that nomenclatura. The red lion on the 1943 state shield is folk-heraldry of the homonym.[38]"
			},
			{
				type: "p",
				text: "Carvajal brought about a hundred families, many conversos from the León–Portugal border. The Inquisition later tried the household; Luis el Mozo wrote as Joseph Lumbroso. Local León pages title the episode “Un nuevo león”; Jewish-Mexican journalism restates a discreet Jewish colony. That is a sixteenth-century converso colonization, not a 1274 naming clause and not a modern Israeli state project.[39] Eugenio del Hoyo records a 1933 Mexican debate on whether the landing had been “un ensayo de colonización judía” anticipating the Mayflower — a later question, not the 1579 naming clause."
			},
			{
				type: "note",
				text: "English “New Lion” is a machine calque. VisitMexico published it in August 2020 (Guerrero as Warrior, Torreón as Turret) and took it down.[40] Hebrew lion language — Lion of Judah, Ariel “lion of God,” Operation Rising Lion — is Israel’s own clock, from Numbers 23:24, not this toponym.[41] Do not wind the calque, the 1579 kingdom, and the biblical lion as one clock."
			}
		]
	},
	{
		id: "inscriptions",
		numeral: "X",
		title: "Examples of Names in Inscriptions Across Times and Places",
		blocks: [
			{
				type: "h3",
				id: "inscriptions-examples",
				title: "A. Compilation of inscriptional examples"
			},
			{
				type: "p",
				text: "Epigraphy—the study of names in inscriptions—provides direct evidence of naming practices across eras and regions. The EAGLE Portal and related databases aggregate hundreds of thousands of inscriptions, enabling researchers to trace the appearance and evolution of names."
			},
			{
				type: "ul",
				items: [
					"Villarreal 1274: documentary evidence of the town’s foundation and demographic data.[7]",
					"Medieval Spanish manuscripts: royal donation charters, such as the thirteenth-century copy of a 1091 document from Burgos, containing names of kings, monasteries, and localities.[10]",
					"Cartularies: collections of charters and legal documents, often recording founders, benefactors, and witnesses.[8]"
				]
			},
			{
				type: "h3",
				id: "inscriptions-method",
				title: "B. Methodology for epigraphic transcription and analysis"
			},
			{
				type: "p",
				text: "Epigraphic transcription involves careful reproduction of inscriptions, accounting for letter forms, abbreviations, and marginalia.[9][10] The EpiDoc Guidelines provide standards for encoding such texts in digital formats, facilitating analysis and comparison across corpora.[9] Paleographic analysis aids in dating inscriptions and identifying regional script variations. Integrating epigraphic, paleographic, and onomastic methods yields a nuanced picture of historical naming practices."
			}
		]
	},
	{
		id: "tables",
		numeral: "XI",
		title: "Tables and Timelines: Name Variations, Dates, and Migrations",
		blocks: [{
			type: "table",
			id: "table-name-migrations",
			caption: "Variations and migrations of selected names",
			headers: [
				"Name / variant",
				"Language / origin",
				"Meaning / association",
				"Migration / usage"
			],
			rows: [
				[
					"Robot",
					"Czech / Slavic",
					"Forced labor, mechanical",
					"Coined 1920; global adoption"
				],
				[
					"Robert",
					"Proto-Germanic",
					"Bright fame",
					"Europe, Americas, global"
				],
				[
					"Roberto",
					"Italian / Spanish",
					"Bright fame (variant)",
					"Italy, Spain, Latin America"
				],
				[
					"Martinez",
					"Spanish",
					"Son of Martin (Mars)",
					"Spain, Latin America, US"
				],
				[
					"Villarreal",
					"Spanish / Valencian",
					"Royal Village (toponymic)",
					"Spain, Latin America"
				],
				[
					"Yisrael / Israel",
					"Hebrew",
					"One who wrestles with God",
					"Israel, Jewish diaspora"
				]
			]
		}, {
			type: "table",
			id: "table-key-events",
			caption: "Key events in the history of Robert, Robot, and Villarreal",
			headers: ["Date", "Event / context"],
			rows: [
				["9th–10th c.", "Early use of Robert in Germany and France"],
				["1000–1035", "Robert I, Duke of Normandy"],
				["1274", "Foundation of Villarreal by King James I"],
				["1233", "Templars receive Xivert after Burriana"],
				["1269–72", "Pre-charter grants at Villa Regalis"],
				["12 May 1274", "Acequia of Ville Regalis funded through Frey Petrus Peyronet"],
				["12 Sep 1279", "Peter III re-issues privileges; invites Saracens from Castalla–Biar"],
				["1312–19", "Temple suppressed; Valencian goods pass to Montesa"],
				["13th–14th c.", "Robert the Bruce, King of Scotland"],
				["1391", "Assaults on aljamas; Vila-real’s community shrinks by conversion and flight"],
				["1429", "Looked for as a dated expulsion; not found in the sources used here"],
				["1492", "Alhambra Decree; remnant Jewish households leave or convert"],
				["1579", "Nuevo Reino de León named for the Kingdom of León — New León, not New Lion"],
				["1607", "Jamestown, Virginia, named for James I of England"],
				["15th–16th c.", "Spread of Martinez and other Iberian surnames"],
				["1920", "Robot coined in Czech; enters English soon after"],
				["1893", "Fábricas Apolo warehouse in Monterrey centro; later Hotel La Mansión Villarreal"],
				["1914", "Antonio I. Villarreal, governor of Nuevo León — a named bearer, not a namer of places"],
				["2020", "INEGI census: Los Villarreales, Salinas Victoria, 633 inhabitants"],
				["2020", "VisitMexico English calque: Nuevo León as “New Lion”; page taken down"]
			]
		}]
	},
	{
		id: "method",
		numeral: "XII",
		title: "Methodology",
		blocks: [
			{
				type: "h3",
				id: "method-tables",
				title: "A. Timelines and tables"
			},
			{
				type: "p",
				text: "Timelines and tables organize the evolution, variation, and migration of names. They make it possible to compare linguistic forms, historical events, and geographic movements.[14]"
			},
			{
				type: "h3",
				id: "method-epigraphy",
				title: "B. Epigraphic transcription and paleography"
			},
			{
				type: "p",
				text: "Epigraphic transcription requires attention to script, abbreviation, and context. Paleographic manuals guide recognition of letter forms, numerals, and marginalia in medieval manuscripts and inscriptions.[10]"
			},
			{
				type: "h3",
				id: "method-translit",
				title: "C. Transliteration conventions"
			},
			{
				type: "p",
				text: "Transliteration bridges languages and scripts, enabling names to be represented in different alphabets. Conventions vary by language and period, as in the adaptation of Yisrael to Israel or Shlomo to Solomon.[11]"
			},
			{
				type: "h3",
				id: "method-three",
				title: "D. Three stages of a name register"
			},
			{
				type: "ul",
				items: [
					"Index the name records. Every occurrence is a token: spelling, date, place, role. Do not merge yet.[20][21]",
					"Build person dossiers. Decide which tokens are the same human. This is where most error lives.",
					"Ask one uniform questionnaire of every person: origin, office, kin, confession, land, and who they stand next to in a witness list. Then count."
				]
			},
			{
				type: "h3",
				id: "method-factoid",
				title: "E. The factoid model"
			},
			{
				type: "p",
				text: "Digital medieval projects such as PASE and People of Medieval Scotland store a factoid, not a biography: source S, dated D, asserts that person P did act A in place L.[22][23] One person can have fifty factoids. That keeps two Peter Peyronets from collapsing into one man because the names match."
			},
			{
				type: "h3",
				id: "method-network",
				title: "F. Networks from charters"
			},
			{
				type: "p",
				text: "The main medieval edge type is co-witnessing: if A and B sign the same grant, they were in the same room that day, or the scribe wanted it to look that way.[23] Do not build the graph from an index of senders and recipients only. Charters hide people in the body — kin lists, officers, the almoner who takes the money. Read the grant.[24]"
			}
		]
	},
	{
		id: "prosopography",
		numeral: "XIII",
		title: "Prosopography of a Medieval Network",
		blocks: [
			{
				type: "h3",
				id: "pros-def",
				title: "A. What the method is for"
			},
			{
				type: "p",
				text: "Lawrence Stone defined prosopography as the investigation of the common background of a group of actors by a collective study of their lives.[20] Katharine Keats-Rohan’s tighter version: the analysis of connections between recorded people, and therefore of the institutions they sat inside.[21] Names are the raw material. Identity is the hard problem. One life with a story is biography. Fifty fragmentary lives with the same fields filled in is prosopography."
			},
			{
				type: "quote",
				text: "Prosopography is about what the analysis of the sum of data about many individuals can tell us about the different types of connection between them.",
				cite: "K. S. B. Keats-Rohan"
			},
			{
				type: "h3",
				id: "pros-identity",
				title: "B. The identity problem"
			},
			{
				type: "p",
				text: "Same name is not the same person. Medieval Spain stacks given name plus byname (Paris the silversmith), given name plus place (de Burriana), given name plus office (almoner, commander of Xivert), and only later a habitational surname taken from a town that already existed. Record the form in the source first. Normalize later. Never start from a modern surname and hunt it backward into 1274.[21]"
			},
			{
				type: "h3",
				id: "pros-iberia",
				title: "C. Iberian work already exists"
			},
			{
				type: "p",
				text: "Enric Guinot built a thirteenth-century Valencian society database.[25] Sesma, Laliena, and Navarro treated urban Aragon. HILAME compiles northern Spanish lives with the same factoid-plus-context pair.[26] The atlas on this site is a small, local application of that method to one town’s foundation cluster — not a claim to have reinvented it."
			},
			{
				type: "h3",
				id: "pros-use",
				title: "D. How to read the atlas"
			},
			{
				type: "p",
				text: "Open the Network atlas. Each node is a person or group named in, or securely adjacent to, the 1269–1274 acts. Each edge is a documented relation: grant, office, finance, recruitment, neighboring lordship. Click a name for the dossier. The ledger on the same page splits claims into in the record, adjacent, and not in the record. Keep the parts that survive. Do not glue them back together with vibe."
			}
		]
	},
	{
		id: "ledger",
		numeral: "XIV",
		title: "Record and Gap",
		blocks: [
			{
				type: "p",
				text: "A name-study that only repeats the royal charter is too thin. A name-study that treats every silence as a hidden Templar-Jewish naming family is too thick. The working rule of this report is a three-column ledger."
			},
			{
				type: "ul",
				items: [
					"In the record: a dated factoid ties a named person or institution to Vila-real / Burriana.",
					"Adjacent: a real structure in the same landscape or a later surname history that must not be back-dated.",
					"Not in the record: a causal story (assassination bargain; a family named Villarreal as 1274 naming agent; Robot coined because someone was named Robert) that the acts used here do not support."
				]
			},
			{
				type: "p",
				text: "The interactive ledger in the atlas is the same table in clickable form. The dossier on this site takes each live claim — Templar namers, assassination bargain, 1429 departure, DNA-as-memory, two King James towns — at full strength, then cuts it. Family memory and DNA are data. They are a different kind of data from a 1274 grant. Onomastics lives in that tension; it does not pick a team."
			},
			{
				type: "note",
				text: "DNA carries ancestry markers, not a stored memory of a town charter. Treat genetic genealogy as another distribution map of a later cohort — useful, not oracular."
			}
		]
	},
	{
		id: "charter",
		numeral: "XV",
		title: "The Carta Pobla, Clause by Clause",
		blocks: [
			{
				type: "h3",
				id: "charter-act",
				title: "A. What kind of document this is"
			},
			{
				type: "p",
				text: "The foundation act is a settlement contract, not a family chronicle and not a battle narrative. James I, sitting in Valencia on 20 February 1274 (dated 10th kalends of March 1273 by Incarnation reckoning), grants bounds, fuero, market, and duties to “all and each of the settlers of Ville Regalis,” which he has decided to establish in the term of Burriana.[27] The addressees are a collective. No lineage is named as namer."
			},
			{
				type: "quote",
				text: "Damus et concedimus vobis universis et singulis populatoribus populacionibus Ville Regalis, quam in termino Burriane statuimus facienda.",
				cite: "Carta pobla, ACA, reg. 19, f. 105"
			},
			{
				type: "h3",
				id: "charter-bounds",
				title: "B. The bounds name water, not a household"
			},
			{
				type: "p",
				text: "The term runs from the Major Acequia of Burriana up toward the new settlement, then to Nules, then to Misquitiella toward Betxí, then to a covered hill-marker where stone is cut, then to the river Millars.[27] This is a farming and herding landscape on the road from Valencia to Tortosa, planted inland from floods. Xivert, Monzón, and Israel are not in the bounds."
			},
			{
				type: "h3",
				id: "charter-harsh",
				title: "C. Why courtiers declined"
			},
			{
				type: "p",
				text: "Holders of land inside the term must reside in the new village and contribute in peitas, hospitality dues, monetaticum, and army-redemption.[27] Municipal history records a ten-year tax exemption, royal monopolies retained (ovens, mills, butcheries, shops), and a ban on selling allotments for ten to twenty years.[17][28] The contract is designed to pin people to a frontier. Catalan courtiers to whom the king first offered the village declined those terms; Salomó Vidal then recruited inhabitants.[17] The harshness is in the act. The recruiter is not."
			},
			{
				type: "h3",
				id: "charter-witnesses",
				title: "D. Who stands in the room"
			},
			{
				type: "p",
				text: "The witnesses at Valencia are Arnau, bishop of Valencia; James, bishop of Huesca; Bernat Guillem d’Entença; Blasco Maza; and Sancho Martínez de Oblites. The notary is Simó de Sant Feliu.[27] A Martínez is already in this room in 1274 — as a patronymic, son of Martín, not as a Villarreal. That is a useful control: martial-looking surnames walk royal charters without founding the town."
			},
			{
				type: "h3",
				id: "charter-1279",
				title: "E. The second carta, 1279"
			},
			{
				type: "p",
				text: "Five years later the same Infant Pere who granted at Villa Regalis in 1269, now Peter III, re-issues privileges and invites Saracens from the Castalla–Biar frontier to come populate the town.[29] The first charter had not filled it. A foundation that still needs settlers in 1279 is not a completed gift to a named warrior family."
			}
		]
	},
	{
		id: "shocks",
		numeral: "XVI",
		title: "1391, 1429, 1492",
		blocks: [
			{
				type: "h3",
				id: "shocks-1391",
				title: "A. The dated riot"
			},
			{
				type: "p",
				text: "On 9 July 1391 the Jewry of Valencia city is destroyed. The slogan reported in the kingdom is that the Jews should die or become Christians. In Vila-real, Castellón, Gandia, and some other towns the pattern described by later historians is mass conversion or flight rather than the massacre of the capital.[30][31] The aljama of Villarreal shrinks. Burriana’s remaining Jewish households decline across the fifteenth century in favor of Morvedre (Sagunt)."
			},
			{
				type: "h3",
				id: "shocks-1429",
				title: "B. The year that was searched"
			},
			{
				type: "p",
				text: "A family date of forced departure around 1429 was taken seriously and looked for. No edict, riot, or named Villarreal leaving that year appears in the sources used here. What sits around it is real: Hinojosa’s converso notices run through 1423; the Disputation of Tortosa is 1413–14; a child of 1391 would be about forty in 1429.[30] Family memory often compresses a century of pressure into one year. The year is kept on the chronicle as a gap, not erased, and not promoted into an expulsion it has not yet become."
			},
			{
				type: "note",
				text: "By 1429 the Order of the Temple has been gone for more than a century. Papal suppression is 1312; in the kingdom of Valencia Templar goods pass to the Order of Montesa in 1317–19.[15] A 1429 “Templar family forced to leave” cannot be the legal Order. It can still be memory of a household that once sat near Temple land."
			},
			{
				type: "h3",
				id: "shocks-1492",
				title: "C. The dated expulsion"
			},
			{
				type: "p",
				text: "The Alhambra Decree of 31 March 1492 meets a remnant, not a large aljama, on the Plana. Valencian ports embark thousands; the large remaining communities are Sagunt and Xàtiva.[30] Conversos who stay become the Inquisition’s problem, not the edict’s. Sephardic later use of the surname Villarreal belongs to this diaspora stratum unless a paper trail ties a specific line to 1274."
			}
		]
	},
	{
		id: "dna",
		numeral: "XVII",
		title: "DNA, Memory, and Documents",
		blocks: [
			{
				type: "p",
				text: "Four archives keep different time. Charters tick in years and name offices. Genomes tick in segments and haplogroups. Family memory ticks in compressed generations: it often keeps the pressure and loses the year. Place ticks in gazetteers: Monterrey, Los Villarreales, a warehouse hotel. The 1274 town and the Nuevo León landscape are not one origin."
			},
			{
				type: "h3",
				id: "dna-can",
				title: "A. What a genome can show"
			},
			{
				type: "p",
				text: "Y-DNA, mitochondrial DNA, and autosomal segments can show that a living Villarreal line clusters with Iberian, Sephardic, or Levantine reference groups, and can estimate relatedness to other testers.[32] That is a distribution map of a later cohort. It is genuine data. It is adjacent to a Jewish or converso surname history. It is not a 1274 narrative."
			},
			{
				type: "h3",
				id: "dna-cannot",
				title: "B. What a genome cannot store"
			},
			{
				type: "p",
				text: "DNA does not encode the text of the carta pobla, the identity of Peyronet, a Templar warning, or a naming meeting. The analogy to a model carrying weights from its first training run is exact about persistence and inexact about content. Weights are not minutes. Ancestry markers are not memory of a town."
			},
			{
				type: "h3",
				id: "dna-place",
				title: "C. The place clock"
			},
			{
				type: "p",
				text: "A later landscape can saturate a surname without being the founding of that surname. Monterrey, the INEGI locality Los Villarreales, and La Mansión Villarreal in the 1893 Apolo warehouse are a gazetteer clock: building, census, density. They are not the 1274 naming clause. Glue them and you invent a single origin. Date them and you have four clocks: documents, DNA, family memory, and place."
			},
			{
				type: "quote",
				text: "Date each clock. Do not wind them as one.",
				cite: "Working rule of this report"
			}
		]
	},
	{
		id: "jamestown",
		numeral: "XVIII",
		title: "Two King James Towns",
		blocks: [
			{
				type: "p",
				text: "Jamestown, Virginia, 1607, is named for James I of England: the given name is copied onto the map.[33] Vila-real, 1274, is named Villa Regalis: the office is copied, not the baptismal name. Both are royal toponyms from a King James. They use different engines."
			},
			{
				type: "p",
				text: "The comparison is useful twice. First it shows why “named after the king” is true for Vila-real only as legal status — the king’s village — and false as “Jaume-town.” Second, the reversal (“it was not named after the king”) is then a claim that the status-name hides a social name, a household. That claim is the Templar-Jewish hypothesis already split in part XIV and in the dossier. The analog does not decide it. It clarifies what would have to be found: a contemporary byname, not an English colonial parallel."
			},
			{
				type: "table",
				id: "table-two-james",
				caption: "Royal toponyms from two kings named James",
				headers: [
					"Town",
					"Date",
					"King",
					"Naming engine",
					"What the name copies"
				],
				rows: [[
					"Vila-real",
					"1274",
					"James I of Aragon",
					"Status / office",
					"Royal village (Villa Regalis)"
				], [
					"Jamestown",
					"1607",
					"James I of England",
					"Given name",
					"James"
				]]
			}
		]
	},
	{
		id: "conclusion",
		numeral: "",
		title: "Conclusion",
		blocks: [
			{
				type: "p",
				text: "The names Roboto and Roberto exemplify the interplay of language, culture, and history in personal and collective identity. Robot and Robert are the English glosses: one born from Slavic robota and Czech theater, the other from Proto-Germanic fame plus bright. The real pair is the house and the given name. They rhyme. They are not kin. Even a speech recognizer, given the same rhyme, will print the common given name and treat the house as a transcription error. Date each clock. Do not wind them as one."
			},
			{
				type: "p",
				text: "The analysis of similar-sounding names with divergent meanings, the close reading of the 1274 carta pobla, the prosopography of the people actually named in the grants, the three-column treatment of 1391 / 1429 / 1492, and the exploration of symbolic associations like the link between Martinez and Mars reveal the richness of onomastic and anthroponymic research. Integrating linguistic, historical, and cultural methods—supported by digital tools, epigraphic databases, and paleographic expertise—continues to uncover the stories embedded in names, illuminating how language both shapes and is shaped by human experience."
			},
			{
				type: "note",
				text: "All factual claims in this report are grounded in the provided references. Where information is unavailable, that is noted rather than inferred."
			}
		]
	},
	{
		id: "appendix",
		numeral: "",
		title: "Appendix: Selected Name Variations, Dates, and Migrations",
		blocks: [{
			type: "table",
			id: "table-appendix",
			caption: "Compact register of names treated in this report",
			headers: [
				"Name / variant",
				"Etymology / origin",
				"Historical usage",
				"Migration / adaptation"
			],
			rows: [
				[
					"Robot",
					"Czech robota (forced labor)",
					"Coined 1920 (Čapek); industrial / AI use",
					"Global technical and cultural adoption"
				],
				[
					"Robert",
					"Proto-Germanic *Hrōþiberhtaz",
					"Royalty, saints, literary figures",
					"Europe, Americas, surname formation"
				],
				[
					"Martinez",
					"Spanish, son of Martin (Mars)",
					"Common in Spain, Latin America, US",
					"Iberian Peninsula, Americas, diaspora"
				],
				[
					"Villarreal",
					"Spanish / Valencian, Royal Village",
					"Founded 1274, Castellón, Spain",
					"Spain, Latin America (toponymic surname)"
				],
				[
					"Yisrael / Israel",
					"Hebrew, one who wrestles with God",
					"Patriarch Jacob; nation of Israel",
					"Jewish diaspora, modern Israel"
				]
			]
		}]
	}
];
var TIMELINE = [
	{
		year: "c. 800",
		title: "Robert in Francia",
		text: "Early continental bearers include counts and, later, Robert I of France."
	},
	{
		year: "1035",
		title: "Robert of Normandy",
		text: "Robert I, Duke of Normandy, dies; his son William will conquer England."
	},
	{
		year: "1214",
		title: "James at Monzón",
		text: "Templars recover the child king from Montfort and raise him at their castle."
	},
	{
		year: "1233",
		title: "Xivert to the Temple",
		text: "James I grants Chivert after the conquest of Burriana; a third of the city follows."
	},
	{
		year: "1269–72",
		title: "Pre-charter grants",
		text: "Villa Regalis already appears; Paris the silversmith and Ramon Escorna receive land."
	},
	{
		year: "1274",
		title: "Vila-real founded",
		text: "20 February: carta pobla. 12 May: acequia funded through Frey Petrus Peyronet."
	},
	{
		year: "1279",
		title: "Second carta",
		text: "Peter III re-issues privileges and invites Saracens from Castalla–Biar; the first charter had not filled the town."
	},
	{
		year: "1306–29",
		title: "Robert the Bruce",
		text: "King of Scots; the given name’s most famous royal chapter in Britain."
	},
	{
		year: "1312–19",
		title: "Temple to Montesa",
		text: "The Order is suppressed. Valencian Templar goods pass to Montesa. Later “Templar family” is memory, not a living order."
	},
	{
		year: "1391",
		title: "Assaults on aljamas",
		text: "Violence against Jewish communities across Castile and Aragon; Villarreal’s aljama shrinks."
	},
	{
		year: "1429",
		title: "A searched gap",
		text: "Looked for as a dated expulsion of a Villarreal line. Not found in the sources used here. Kept on the line."
	},
	{
		year: "1492",
		title: "Expulsion",
		text: "The remnant Jewish households of the Plana leave or convert."
	},
	{
		year: "1579",
		title: "Nuevo Reino de León",
		text: "Luis de Carvajal y de la Cueva’s capitulation names a New Kingdom of León after Felipe II’s birthplace. New León, not New Lion. A converso colonization clock — not 1274, not modern Israel."
	},
	{
		year: "1607",
		title: "Jamestown",
		text: "Named for James I of England — given name on the map, unlike Vila-real’s office-name."
	},
	{
		year: "1500s",
		title: "Iberian surnames travel",
		text: "Martinez and other patronymics spread through Spanish colonization."
	},
	{
		year: "1893",
		title: "Fábricas Apolo, Monterrey",
		text: "Guido Moebius raises the warehouse later occupied by Hotel La Mansión Villarreal (INAH: Villa Real)."
	},
	{
		year: "1914",
		title: "Antonio I. Villarreal",
		text: "Lampazos-born general serves as governor of Nuevo León. A named bearer, not a namer of the hotel or the ejido."
	},
	{
		year: "1920",
		title: "Robot is coined",
		text: "Josef Čapek’s word, Karel Čapek’s play: robota becomes a world noun."
	},
	{
		year: "2020",
		title: "Los Villarreales census",
		text: "INEGI locality 190450118, Salinas Victoria: 633 inhabitants. A name on land north of Monterrey."
	},
	{
		year: "2020",
		title: "“New Lion” calque",
		text: "VisitMexico’s English pages render Nuevo León as New Lion, Guerrero as Warrior, Torreón as Turret. The copy is taken down. A machine translation, not a renaming."
	}
];
var REFERENCES = [
	{
		n: 1,
		title: "Origin of the Word Robot: The Evolution of Artificial Intelligence",
		source: "Complete Era",
		url: "https://completeera.com"
	},
	{
		n: 2,
		title: "Robert I of Normandy",
		source: "Wikipedia",
		url: "https://en.wikipedia.org/wiki/Robert_I_of_Normandy"
	},
	{
		n: 3,
		title: "Anthroponymy",
		source: "Wikipedia",
		url: "https://en.wikipedia.org/wiki/Anthroponymy"
	},
	{
		n: 4,
		title: "Martínez (surname)",
		source: "Wikipedia",
		url: "https://en.wikipedia.org/wiki/Mart%C3%ADnez_(surname)"
	},
	{
		n: 5,
		title: "Origin of the surname Martinez",
		source: "Surnamepedia",
		url: "https://surnamepedia.com"
	},
	{
		n: 6,
		title: "Villarreal",
		source: "Wikipedia",
		url: "https://en.wikipedia.org/wiki/Villarreal"
	},
	{
		n: 7,
		title: "Villarreal, Spain 1274",
		source: "Looking at Cities",
		url: "https://lookingatcities.info"
	},
	{
		n: 8,
		title: "Cartulary",
		source: "Wikipedia",
		url: "https://en.wikipedia.org/wiki/Cartulary"
	},
	{
		n: 9,
		title: "EpiDoc Guidelines 9.8",
		source: "Stoa",
		url: "https://epidoc.stoa.org"
	},
	{
		n: 10,
		title: "Deciphering Secrets: 13th C. Paleography Manual v4",
		source: "University of Colorado Colorado Springs",
		url: "https://grants.uccs.edu"
	},
	{
		n: 11,
		title: "How to Say Israel in Hebrew — Yisrael (יִשְׂרָאֵל)",
		source: "Learn Hebrew for Christians",
		url: "https://learnhebrewforchristians.com"
	},
	{
		n: 12,
		title: "Friends and Foes in the Lexicon: Homophone Naming in Aphasia",
		source: "ERIC",
		url: "https://eric.ed.gov"
	},
	{
		n: 13,
		title: "Mars (mythology)",
		source: "Wikipedia",
		url: "https://en.wikipedia.org/wiki/Mars_(mythology)"
	},
	{
		n: 14,
		title: "Advanced Markdown Tables: Complete Guide to Formatting, Styling, and Layout",
		source: "Markdown Tools",
		url: "https://blog.markdowntools.com"
	},
	{
		n: 15,
		title: "The Templars in the Corona de Aragón",
		source: "Alan J. Forey",
		url: "https://libro.uca.edu/forey/templar1.pdf"
	},
	{
		n: 16,
		title: "Una fundación de Jaime I: Villarreal",
		source: "Ramón Ferrer Navarro, Estudios de Edad Media de la Corona de Aragón",
		url: "https://tpsalomonreinach.mom.fr/files/original/bdcb334446fd3b3838a30482a14649ee6b23d7cc.pdf"
	},
	{
		n: 17,
		title: "Història de Vila-real",
		source: "Ajuntament de Vila-real",
		url: "https://www.vila-real.es"
	},
	{
		n: 18,
		title: "Three Jewish Communities in Medieval Valencia: Castellón de la Plana, Burriana, Villarreal",
		source: "J. Doñate Sebastiá and J. R. Magdalena Nom de Déu, Magnes Press, 1990",
		url: "https://en.wikipedia.org/wiki/Villarreal"
	},
	{
		n: 19,
		title: "Villareal (family)",
		source: "Encyclopaedia Judaica / Encyclopedia.com",
		url: "https://www.encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/villareal"
	},
	{
		n: 20,
		title: "Prosopography",
		source: "Lawrence Stone, Daedalus 100 (1971)",
		url: "https://en.wikipedia.org/wiki/Prosopography"
	},
	{
		n: 21,
		title: "Prosopography Approaches and Applications: A Handbook",
		source: "K. S. B. Keats-Rohan, ed.",
		url: "https://prosopography.history.ox.ac.uk/tutorial/tutorial_1.htm"
	},
	{
		n: 22,
		title: "Prosopography of Anglo-Saxon England: Research Methodology",
		source: "PASE",
		url: "https://pase.ac.uk/about/research-methodology"
	},
	{
		n: 23,
		title: "From Digital Prosopography to Social Network Analysis",
		source: "Matthew Hammond, Medieval People 36 (2021)",
		url: "https://www.kcl.ac.uk/factoid-prosopography/projects"
	},
	{
		n: 24,
		title: "People of Medieval Scotland (POMS)",
		source: "King’s College London / University of Glasgow",
		url: "https://www.poms.ac.uk"
	},
	{
		n: 25,
		title: "Creació d’una base de dades prosopogràfica sobre la societat valenciana del segle XIII",
		source: "Enric Guinot Rodríguez et al., 1997",
		url: "https://www.academia.edu/129912642"
	},
	{
		n: 26,
		title: "HILAME: a prosopography of people who lived in the Middle Ages",
		source: "HILAME project",
		url: "https://www.hilame.info/in-english/"
	},
	{
		n: 27,
		title: "Carta de població de Vila-real, 20 February 1274",
		source: "Arxius Jaume I / ACA, Cancillería, reg. 19, f. 105",
		url: "https://www.jacobiregisarchivum.uji.es/cgi-bin/noticia.php?referencia=10042006"
	},
	{
		n: 28,
		title: "Orígens d’una vila medieval: Vila-real 1269–1274",
		source: "Vicent Gil Vicent",
		url: "https://www.vila-real.es/portal/RecursosWeb/DOCUMENTOS/1/0_5760_1.pdf"
	},
	{
		n: 29,
		title: "Second carta puebla of Vila-real, 12 September 1279",
		source: "Pedro III of Aragon; discussed in studies of Aragonese fueros in Valencia",
		url: "https://digital.csic.es/bitstream/10261/437856/1/10.pdf"
	},
	{
		n: 30,
		title: "The Jews of the Kingdom of Valencia: From Persecution to Expulsion, 1391–1492",
		source: "José Hinojosa Montalvo, Magnes Press, 1993",
		url: "https://books.google.com/books/about/The_Jews_of_the_Kingdom_of_Valencia.html?id=Jw8YAAAAIAAJ"
	},
	{
		n: 31,
		title: "El calvario valenciano de los judíos",
		source: "Antoni Furió, cited in Levante-EMV",
		url: "https://www.levante-emv.com/comunitat-valenciana/2014/02/21/calvario-valenciano-judios-12795950.html"
	},
	{
		n: 32,
		title: "Genetic genealogy as a distribution map of later cohorts",
		source: "ISOGG / standard genetic-genealogy method",
		url: "https://isogg.org/wiki/Genetic_genealogy"
	},
	{
		n: 33,
		title: "Jamestown, Virginia",
		source: "Standard colonial toponymy; named for James I of England, 1607",
		url: "https://en.wikipedia.org/wiki/Jamestown,_Virginia"
	},
	{
		n: 34,
		title: "Villarreal surname distribution",
		source: "Forebears (compiled public name files)",
		url: "https://forebears.io/surnames/villarreal"
	},
	{
		n: 35,
		title: "Los Villarreales, Salinas Victoria, Nuevo León",
		source: "INEGI, Censo de Población y Vivienda 2020, localidad 190450118",
		url: "https://www.citypopulation.de/en/mexico/nuevoleon/salinas_victoria/190450118__los_villarreales/"
	},
	{
		n: 36,
		title: "Guido Moebius y Las Fábricas Apolo. Un industrial alemán en Monterrey",
		source: "Adriana Garza Luna and Enrique Tovar Esquivel, Boletín de Monumentos Históricos, 3a época, núm. 15 (2009), pp. 124–141",
		url: "https://revistas.inah.gob.mx/index.php/boletinmonumentos/article/download/3812/3698"
	},
	{
		n: 37,
		title: "Antonio I. Villarreal",
		source: "H. Congreso del Estado de Nuevo León, Archivo y Biblioteca; standard biographies",
		url: "https://www.hcnl.gob.mx/archivo/2025/07/antonio-i-villarreal.php"
	},
	{
		n: 38,
		title: "Nomenclatura — Nuevo León",
		source: "INAFED, Enciclopedia de los Municipios y Delegaciones de México; Wiktionary, Nuevo León (New León, after the Kingdom of León)",
		url: "https://web.archive.org/web/20220710031045/http://www.inafed.gob.mx/work/enciclopedia/EMM19nuevoleon/nomenclatura.html"
	},
	{
		n: 39,
		title: "Luis de Carvajal and the converso colonization of Nuevo Reino de León",
		source: "INAH, Historias 88 (2014); Diario Judío; León Virtual, “Judíos leoneses fundadores de Nuevo León” (heading: “Un nuevo león”)",
		url: "https://revistas.inah.gob.mx/index.php/historias/article/view/11072"
	},
	{
		n: 40,
		title: "VisitMexico English calque: New Lion, Warrior, Turret",
		source: "AM, 7 August 2020; Debate; Al Día News. Copy subsequently reverted.",
		url: "https://www.am.com.mx/news/2020/08/07/warrior-new-lion-critican-en-redes-las-traducciones-de-visitmexicocom-410413.html"
	},
	{
		n: 41,
		title: "Rising Lion / Am ke-lavi",
		source: "Numbers 23:24; Haaretz, 12 August 2025, on the IDF designation. Adjacent Hebrew lion language — not the Mexican toponym.",
		url: "https://www.haaretz.com/israel-news/2025-08-12/ty-article/rising-lion-how-an-ancient-blessing-became-modern-israels-battle-cry/00000198-9d9a-d50b-a398-9fba171c0000"
	},
	{
		n: 42,
		title: "Automatic Speech Recognition",
		source: "Daniel Jurafsky and James H. Martin, Speech and Language Processing, 3rd ed. draft, ch. 16 (August 2026). Acoustic model plus language-model prior; the decoder prefers the common word.",
		url: "https://web.stanford.edu/~jurafsky/slp3/16.pdf"
	}
];
var CITATION = "Roboto SAI, with a Copilot. “The Names Roboto and Roberto: Linguistic Origins, Historical Usage, and Cultural Migrations.” Roboto SAI Research, September 2026. https://roboto-sai.org";
var $$splitComponentImporter$5 = () => import("./routes-BQ1XnFsI.mjs");
var Route$5 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: `${META.title} — ${APP_NAME}` }, {
		name: "description",
		content: META.description
	}] })
});
var $$splitComponentImporter$4 = () => import("./atlas-BIMcTtb-.mjs");
var Route$4 = createFileRoute("/atlas")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: `Network atlas — ${APP_NAME}` }, {
		name: "description",
		content: "Prosopographical atlas of people named in the 1269–1274 Vila-real grants, and a later Monterrey migration node: surname density, Los Villarreales, La Mansión Villarreal."
	}] })
});
var BRIEF_META = {
	en: {
		title: "Four clocks, and the Temple",
		subtitle: "One page. No citation numbers. Five tags. English and Spanish.",
		kicker: "Brief",
		sources: "Sources",
		open: "Open the full page"
	},
	es: {
		title: "Cuatro relojes, y el Templo",
		subtitle: "Una página. Sin números de cita. Cinco etiquetas. Inglés y español.",
		kicker: "Síntesis",
		sources: "Fuentes",
		open: "Abrir la página completa"
	}
};
var BRIEF_TAGS = {
	en: [
		{
			id: "essay",
			tag: "Essay",
			title: "Roboto and Roberto",
			href: "/",
			body: "The real names are Roboto and Roberto. They rhyme. They are not kin. Robot and Robert are the English glosses that collapse the pair. Roboto sits next to robot / robota — Čapek’s Czech play R.U.R., Slavic forced labor. That is the house, not a diminutive of the given name. Roberto is the Iberian form of Robert: Proto-Germanic fame plus bright, carried by dukes, kings, and saints. Sound is not sense. Speech recognizers trip on the same pair: the flap is short, the given name is common, and the transcript comes back looking like another script. Yisrael and Israel can look like twins and still keep different clocks. Villarreal and Martinez can share a street and not a root. The essay’s job is to keep the house, the given name, the crown, the surname, and the place from collapsing into one story.",
			sources: "Čapek, R.U.R.; Slavic etymology of robota; Proto-Germanic Hrōþiberhtaz; onomastic pairs in this journal."
		},
		{
			id: "atlas",
			tag: "Atlas",
			title: "Vila-real, twelve seventy-four",
			href: "/atlas",
			body: "James I of Aragon grants a carta pobla and plants a town on the Plana. The charter is a legal machine, not a family album. Names in that network are offices, neighbors, witnesses, and land. They do not, by themselves, prove a bloodline to a living household in Monterrey. The atlas holds a hotel in the old warehouse, an ejido and a rural locality called Los Villarreales, and a searched gap in fourteen twenty-nine. It will not glue a Catalan charter to a Nuevo León census and call that one origin.",
			sources: "Carta pobla of Vila-real; INEGI locality Los Villarreales; INAH record of the Apolo warehouse hotel; Plana chronicle gap."
		},
		{
			id: "dossier",
			tag: "Dossier",
			title: "Four clocks, unmerged",
			href: "/dossier",
			body: "Steelman first. Then the charter, clause by clause. Then four clocks on the table: documents, family memory, genetic tests, and place. A date on a charter is not a date on a cheek swab, and Monterrey is not Vila-real. Nuevo León means New Kingdom of León. An English tourism page once calqued it as New Lion and then took that line down. That calque is not Hebrew lion language, and it is not a founding of this Mexican state by the tribe of Judah.",
			sources: "VisitMexico English calque, later reverted; AM, Debate, Al Día; Numbers 23; INEGI census counts."
		},
		{
			id: "lion",
			tag: "Gur Aryeh",
			title: "Judah’s animal",
			href: "/lion",
			body: "Jacob blesses Judah as a lion’s cub. From prey the cub has gone up. He crouches like a lion, like a lioness. Who will rouse him. The next line keeps the scepter in Judah. After the northern tribes are lost, Judah’s name becomes Jew, and the tribal animal becomes a Jewish one. Hebrew keeps six biblical words for this beast. The same animal flips: crown in the hand of Judah or God, mouth when aimed at the psalmist. Aryeh, Ari, Ariel, Kfir, Lavi, Aryeh Leib: the blessing became a name.",
			sources: "Genesis 49; Numbers 23–24; Sanhedrin; Mishnah Middot; Ezekiel; Shulchan Aruch, Orach Chayim; emblem of Jerusalem; Sefaria."
		},
		{
			id: "templars",
			tag: "Templars",
			title: "Neighbors, not namers",
			href: "/templars",
			body: "Nine French knights under Hugh of Payns, after the First Crusade, to guard pilgrims on roads full of bandits. Baldwin II housed them at Al-Aqsa, which they took for Solomon’s Temple. The pope blessed them at Troyes. They became feared in the field and richer as bankers. Philip IV, who owed them a fortune, had them seized in a single night. Clement V dissolved the order in 1312. Jacques de Molay burned in 1314. On the Plana they are neighbors: Xivert after Burriana, a share of the city, perhaps the almoner Peyronet. Vila-real is James’s royal village in 1274, after the order already exists. Era and frontier. Not a lineage, and not a naming clause.",
			sources: "Barber; Nicholson; Forey, The Templars in the Corona de Aragón; arrests of 1307; Vox in excelso; carta puebla of 1274; grant of Xivert, 1233; Order of Montesa."
		}
	],
	es: [
		{
			id: "essay",
			tag: "Ensayo",
			title: "Roboto y Roberto",
			href: "/",
			body: "Los nombres reales son Roboto y Roberto. Riman. No son parientes. Robot y Robert son las glosas inglesas que funden el par. Roboto se sienta junto a robot / robota — la obra checa R.U.R. de Čapek, trabajo forzado eslavo. Es la casa, no un diminutivo del nombre de pila. Roberto es la forma ibérica de Robert: proto-germánico fama más brillante, llevado por duques, reyes y santos. El sonido no es el sentido. Los reconocedores de voz tropiezan con el mismo par: la vibrante es breve, el nombre de pila es común, y la transcripción vuelve como si fuera otra escritura. Yisrael e Israel pueden parecer gemelos y guardar relojes distintos. Villarreal y Martinez pueden compartir una calle y no una raíz. El oficio del ensayo es no dejar que la casa, el nombre de pila, la corona, el apellido y el lugar se vuelvan un solo relato.",
			sources: "Čapek, R.U.R.; etimología eslava de robota; proto-germánico Hrōþiberhtaz; pares onomásticos de esta revista."
		},
		{
			id: "atlas",
			tag: "Atlas",
			title: "Vila-real, mil doscientos setenta y cuatro",
			href: "/atlas",
			body: "Jaime I de Aragón otorga una carta puebla y planta una villa en la Plana. La carta es una máquina legal, no un álbum de familia. Los nombres de esa red son oficios, vecinos, testigos y tierra. Por sí solos no prueban una línea de sangre hasta una casa viva en Monterrey. El atlas guarda un hotel en la antigua bodega, un ejido y una localidad rural llamada Los Villarreales, y un hueco buscado en mil cuatrocientos veintinueve. No pega una carta catalana a un censo de Nuevo León para llamarlo un solo origen.",
			sources: "Carta puebla de Vila-real; localidad INEGI Los Villarreales; ficha INAH del hotel en la bodega Apolo; hueco de la crónica de la Plana."
		},
		{
			id: "dossier",
			tag: "Dossier",
			title: "Cuatro relojes, sin fundir",
			href: "/dossier",
			body: "Primero el steelman. Luego la carta, cláusula por cláusula. Luego cuatro relojes sobre la mesa: documentos, memoria de familia, pruebas genéticas y lugar. La fecha de una carta no es la fecha de un hisopo, y Monterrey no es Vila-real. Nuevo León significa Nuevo Reino de León. Una página turística en inglés alguna vez lo calcó como New Lion y luego quitó esa línea. Ese calco no es la lengua hebrea del león, y no es una fundación de este estado mexicano por la tribu de Judá.",
			sources: "Calco inglés de VisitMexico, luego revertido; AM, Debate, Al Día; Números 23; conteos INEGI."
		},
		{
			id: "lion",
			tag: "Gur Aryeh",
			title: "El animal de Judá",
			href: "/lion",
			body: "Jacob bendice a Judá como cachorro de león. De la presa el cachorro ha subido. Se agacha como león, como leona. Quién lo despertará. La línea siguiente deja el cetro en Judá. Cuando se pierden las tribus del norte, el nombre de Judá se vuelve judío, y el animal de la tribu se vuelve un animal judío. El hebreo guarda seis palabras bíblicas para esta fiera. El mismo animal se voltea: corona en la mano de Judá o de Dios, boca cuando apunta al salmista. Aryeh, Ari, Ariel, Kfir, Lavi, Aryeh Leib: la bendición se volvió nombre.",
			sources: "Génesis 49; Números 23–24; Sanedrín; Mishná Midot; Ezequiel; Shulján Aruj, Oraj Jaim; sello de Jerusalén; Sefaria."
		},
		{
			id: "templars",
			tag: "Templarios",
			title: "Vecinos, no nominadores",
			href: "/templars",
			body: "Nueve caballeros franceses bajo Hugo de Payns, después de la Primera Cruzada, para guardar peregrinos en caminos llenos de bandidos. Balduino II los alojó en Al-Aqsa, que ellos tomaron por el Templo de Salomón. El papa los bendijo en Troyes. Se volvieron temidos en el campo y más ricos como banqueros. Felipe IV, que les debía una fortuna, los hizo prender en una sola noche. Clemente V disolvió la orden en 1312. Jacques de Molay ardió en 1314. En la Plana son vecinos: Xivert después de Burriana, una parte de la ciudad, quizá el limosnero Peyronet. Vila-real es la villa real de Jaime en 1274, cuando la orden ya existe. Época y frontera. No linaje, y no cláusula de nombre.",
			sources: "Barber; Nicholson; Forey, The Templars in the Corona de Aragón; prisiones de 1307; Vox in excelso; carta puebla de 1274; merced de Xivert, 1233; Orden de Montesa."
		}
	]
};
var $$splitComponentImporter$3 = () => import("./brief-B_cAyZyU.mjs");
var Route$3 = createFileRoute("/brief")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: `${BRIEF_META.en.title} — ${APP_NAME}` }, {
		name: "description",
		content: "One-page brief of five essays: Roboto and Roberto, the 1274 atlas, the dossier, Gur Aryeh, and the Templars. No citation numbers."
	}] })
});
var $$splitComponentImporter$2 = () => import("./dossier-BnwfRcvs.mjs");
var Route$2 = createFileRoute("/dossier")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: `Dossier — ${APP_NAME}` }, {
		name: "description",
		content: "Claim inspector, carta pobla close reading, Plana chronicle, and DNA-versus-document clocks for the 1274 Vila-real case."
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
var $$splitComponentImporter$1 = () => import("./lion-B1SRn7qP.mjs");
var Route$1 = createFileRoute("/lion")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: `${LION_META.title} — ${APP_NAME}` }, {
		name: "description",
		content: LION_META.description
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
var $$splitComponentImporter = () => import("./templars-B6ymCL3P.mjs");
var Route = createFileRoute("/templars")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [{ title: `${TEMPLAR_META.en.title} — ${APP_NAME}` }, {
		name: "description",
		content: TEMPLAR_META.en.description
	}] })
});
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AtlasRoute: Route$4.update({
		id: "/atlas",
		path: "/atlas",
		getParentRoute: () => Route$6
	}),
	BriefRoute: Route$3.update({
		id: "/brief",
		path: "/brief",
		getParentRoute: () => Route$6
	}),
	DossierRoute: Route$2.update({
		id: "/dossier",
		path: "/dossier",
		getParentRoute: () => Route$6
	}),
	LionRoute: Route$1.update({
		id: "/lion",
		path: "/lion",
		getParentRoute: () => Route$6
	}),
	TemplarsRoute: Route.update({
		id: "/templars",
		path: "/templars",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { SITE_URL as A, CITATION as C, TIMELINE as D, SECTIONS as E, pick as M, useLang as N, TOC as O, BRIEF_TAGS as S, REFERENCES as T, LION_TOC as _, TEMPLAR_SECTIONS as a, REGISTERS as b, BLESSING as c, LION_CITATION as d, LION_FINDINGS as f, LION_TIMELINE as g, LION_SECTIONS as h, TEMPLAR_REFERENCES as i, CHROME as j, GITHUB_URL as k, COMMENTARIES as l, LION_REFERENCES as m, TEMPLAR_FINDINGS as n, TEMPLAR_TIMELINE as o, LION_META as p, TEMPLAR_META as r, TEMPLAR_TOC as s, router_exports as t, LEXICON as u, MERKABAH_FACES as v, META as w, BRIEF_META as x, PERSONAL_NAMES as y };
