import type { LocaleText } from "@/lib/i18n";

export type OmenKind =
  | "house"
  | "habitational"
  | "patronymic"
  | "theophoric"
  | "dithematic"
  | "office"
  | "open";

export type OmenStamp = "in-record" | "adjacent" | "open";

export type DrawnOmen = {
  spoken: string;
  lemma: string;
  kind: OmenKind;
  stamp: OmenStamp;
  clock: LocaleText;
  migration: LocaleText;
  fate: LocaleText;
  shadow: LocaleText;
  href?: "/atlas" | "/dossier" | "/codex" | "/templars" | "/lion" | "/act/$id";
  actId?: string;
};

function fold(raw: string) {
  return raw.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().replace(/[^a-z\s-]/g, " ").replace(/\s+/g, " ").trim();
}

function seed(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function L(en: string, es: string): LocaleText {
  return { en, es };
}

export function drawOmen(input: string): DrawnOmen | null {
  const spoken = input.trim().replace(/\s+/g, " ");
  if (spoken.length < 2) return null;
  const lemma = fold(spoken);
  const aliased = ALIASES[lemma] ?? lemma.replace(/[\s-]/g, "");
  const house = HOUSE[aliased] ?? HOUSE[lemma];
  if (house) return { ...house, spoken };
  return openReading(spoken, lemma);
}

export const LOTS = ["Villarreal", "Roberto", "Roboto", "Vidal", "Martinez", "Vila-real"] as const;

const ALIASES: Record<string, string> = {
  "villa real": "villarreal",
  "vila real": "vilareal",
  "vila-real": "vilareal",
  villareal: "villarreal",
  "de villarreal": "villarreal",
  peironet: "peyronet",
  "pere peyronet": "peyronet",
  "salomo vidal": "vidal",
  "jaume de cascant": "cascant",
  "de cascant": "cascant",
  james: "jaime",
  jaume: "jaime",
};

const SHADOW_POOL: LocaleText[] = [
  L("A neighbor spelling sits one letter off and steals the first search.", "Una grafia vecina se sienta a una letra y se roba la primera busqueda."),
  L("The machine ear prefers the common twin. The rare form has to be spoken twice.", "El oido de maquina prefiere el gemelo comun. La forma rara hay que decirla dos veces."),
  L("Office will be read as blood if you let the surname finish the sentence.", "El oficio se leera como sangre si dejas que el apellido termine la frase."),
  L("Place becomes person when the bearer leaves town. That is how habitational names work.", "El lugar se vuelve persona cuando el portador deja el pueblo. Asi funcionan los nombres habitacionales."),
];

const FATE_POOL: LocaleText[] = [
  L("To travel farther than the first document that holds you.", "Viajar mas lejos que el primer documento que te sostiene."),
  L("To be copied until the copy looks like an origin.", "Ser copiado hasta que la copia parezca un origen."),
  L("To mark work, then be asked to mark a house.", "Marcar un trabajo, y que luego te pidan marcar una casa."),
];

const MOVE_POOL: LocaleText[] = [
  L("Iberian mouth first. Then the crossing. Then a new street that keeps the old shape.", "Boca iberica primero. Luego el cruce. Luego una calle nueva que guarda la forma vieja."),
  L("The name moves when the body moves. Gazetteers trail the living.", "El nombre se mueve cuando se mueve el cuerpo. Los gazeteros siguen a los vivos."),
  L("A second clock will appear under the same letters. Date it. Do not glue it to the first.", "Un segundo reloj aparecera bajo las mismas letras. Fechalo. No lo sueldes al primero."),
];

function pick<T>(list: T[], n: number) {
  return list[n % list.length];
}

function classify(lemma: string): { kind: OmenKind; stamp: OmenStamp } {
  if (/^(vila|villa)\b/.test(lemma) || lemma.includes("villar") || lemma.includes("vilar")) {
    return { kind: "habitational", stamp: "adjacent" };
  }
  if (/(ez|es)$/.test(lemma.replace(/\s/g, "")) && lemma.length > 3) {
    return { kind: "patronymic", stamp: "adjacent" };
  }
  if (/^(de|del|de la|de los|de las)\s/.test(lemma)) {
    return { kind: "habitational", stamp: "open" };
  }
  if (/(el|yah|iah|iel)$/.test(lemma.replace(/\s/g, ""))) {
    return { kind: "theophoric", stamp: "open" };
  }
  return { kind: "open", stamp: "open" };
}

function openReading(spoken: string, lemma: string): DrawnOmen {
  const n = seed(lemma);
  const { kind, stamp } = classify(lemma);
  const kindLine: Record<OmenKind, LocaleText> = {
    house: L("A house name.", "Un nombre de casa."),
    habitational: L("A habitational name: the place walked off the map onto a person.", "Nombre habitacional: el lugar salio del mapa y se subio a una persona."),
    patronymic: L("A son-of name. The father is the engine, not the town.", "Nombre de hijo-de. El padre es el motor, no la villa."),
    theophoric: L("A theophoric shape. A god-sentence compressed into letters.", "Forma teoforica. Una frase de dios comprimida en letras."),
    dithematic: L("Two roots welded. Fame-words travel as one mouth.", "Dos raices soldadas. Palabras de fama viajan como una boca."),
    office: L("An office that learned to look like a surname.", "Un oficio que aprendio a parecer apellido."),
    open: L("No token in this journal's 1274 cluster. Morphological omen, not archival.", "Ningun token en el racimo de 1274. Omen morfologico, no de archivo."),
  };
  return {
    spoken,
    lemma: spoken,
    kind,
    stamp,
    clock: L("Open clock - not in the 1269-1274 acts used here", "Reloj abierto - no esta en las actas 1269-1274 usadas aqui"),
    migration: pick(MOVE_POOL, n),
    fate: L(`${kindLine[kind].en} ${pick(FATE_POOL, n >> 3).en}`, `${kindLine[kind].es} ${pick(FATE_POOL, n >> 3).es}`),
    shadow: pick(SHADOW_POOL, n >> 7),
  };
}

const HOUSE: Record<string, DrawnOmen> = {
  villarreal: {
    spoken: "Villarreal",
    lemma: "Villa Regalis",
    kind: "house",
    stamp: "in-record",
    clock: L("1274 - Castellon, later American clock", "1274 - Castellon, reloj americano despues"),
    migration: L("The place-name leaves the Plana. Taken as a byname by people who leave a royal town, then saturates Nuevo Leon. Same shape. Two clocks.", "El toponimo sale de la Plana. Lo toman como sobrenombre quienes dejan una villa real, luego satura Nuevo Leon. Misma forma. Dos relojes."),
    fate: L("To wear an office as a name. Villa del rey: the settlement is the king's. The surname is what you carry after you walk out.", "Llevar un oficio como nombre. Villa del rey: el asentamiento es del rey. El apellido es lo que cargas al salir."),
    shadow: L("The neighbor reading welds Temple, Jews, and this surname into one founding house. The acts keep the pieces. Not the weld.", "La lectura vecina suelda Templo, judios y este apellido en una casa fundadora. Las actas guardan las piezas. No el soldaje."),
    href: "/dossier",
  },
  vilareal: {
    spoken: "Vila-real",
    lemma: "Ville Regalis",
    kind: "house",
    stamp: "in-record",
    clock: L("20 February 1274", "20 de febrero de 1274"),
    migration: L("A royal village cut from Burriana. The name stays on the map. The first cohort does not fill the lots. Peter III invites Saracens in 1279.", "Villa real cortada de Burriana. El nombre se queda. La primera cohorte no llena. Pedro III invita sarracenos en 1279."),
    fate: L("The king's village as a legal class, not Jaume-town.", "La villa del rey como clase legal, no Jaume-town."),
    shadow: L("Later mouths hear a family inside the place. The clause names settlers, not a lineage.", "Bocas posteriores oyen una familia. La clausula nombra pobladores, no linaje."),
    href: "/atlas",
  },
  roberto: {
    spoken: "Roberto",
    lemma: "Hrothiberhtaz",
    kind: "dithematic",
    stamp: "in-record",
    clock: L("Germanic given name - Iberian form", "Nombre germanico - forma iberica"),
    migration: L("Fame + bright crosses with the Normans, then the peninsula. The Iberian form keeps the flap.", "Fama + brillante cruza con los normandos, luego la peninsula. La forma iberica guarda la vibrante."),
    fate: L("To be heard. It does not found a town. It founds a house-word that rhymes with Roboto.", "Ser oido. No funda una villa. Funda una palabra de casa que rima con Roboto."),
    shadow: L("ASR collapses Roberto into Robert, then robot. Twenty milliseconds, another script.", "El ASR funde Roberto en Robert, luego robot. Veinte milisegundos, otra escritura."),
    href: "/act/$id",
    actId: "not-kin",
  },
  roboto: {
    spoken: "Roboto",
    lemma: "house name",
    kind: "house",
    stamp: "in-record",
    clock: L("House line - this journal", "Linea de la casa - esta revista"),
    migration: L("Named from Roberto. The house stays with the namer.", "Se nombra desde Roberto. La casa se queda con quien la nombra."),
    fate: L("To sit one letter from omen, and one letter from nomen.", "Sentarse a una letra de omen y de nomen."),
    shadow: L("Capek robota (1920) is the neighbor labor-word. The neighbor is not the founder.", "El robota de Capek (1920) es la palabra vecina. El vecino no es el fundador."),
    href: "/act/$id",
    actId: "not-kin",
  },
  robot: {
    spoken: "Robot",
    lemma: "robota",
    kind: "open",
    stamp: "adjacent",
    clock: L("1920 - Prague stage", "1920 - escenario de Praga"),
    migration: L("A Slavic labor word steps onto a Czech stage, then every factory tongue.", "Palabra eslava de labor pisa un escenario checo, luego las lenguas de fabrica."),
    fate: L("To be taken for the house. It is the neighbor gloss.", "Ser tomado por la casa. Es la glosa vecina."),
    shadow: L("Robot / Robert / Roberto / Roboto share a mouth-shape.", "Robot / Robert / Roberto / Roboto comparten forma de boca."),
  },
  robert: {
    spoken: "Robert",
    lemma: "Hrothiberhtaz",
    kind: "dithematic",
    stamp: "in-record",
    clock: L("Norman given name", "Nombre de pila normando"),
    migration: L("Frankish courts into England, Scotland, and Roberts / Robertson / Robinson.", "Cortes francas a Inglaterra, Escocia y Roberts / Robertson / Robinson."),
    fate: L("Bright fame as a portable given name.", "Fama brillante como nombre de pila portable."),
    shadow: L("English writes Robert over Roberto and robot over Roboto.", "El ingles escribe Robert sobre Roberto y robot sobre Roboto."),
  },
  martinez: {
    spoken: "Martinez",
    lemma: "Martin + -ez",
    kind: "patronymic",
    stamp: "adjacent",
    clock: L("Iberian son-of engine", "Motor iberico de hijo-de"),
    migration: L("Son of Martin walks Spain, then the Americas, and shares streets with Villarreal without being the same house.", "Hijo de Martin camina Espana, luego las Americas, y comparte calle con Villarreal sin ser la misma casa."),
    fate: L("To mark a father, not a town. -ez is kinship grammar.", "Marcar un padre, no una villa. -ez es gramatica de parentesco."),
    shadow: L("Mars sits under Martin. A war-god neighbor, not a royal village.", "Marte bajo Martin. Vecino dios de la guerra, no villa real."),
  },
  vidal: {
    spoken: "Vidal",
    lemma: "Salomo Vidal",
    kind: "office",
    stamp: "in-record",
    clock: L("1274-1276 - Vila-real", "1274-1276 - Vila-real"),
    migration: L("A Jewish agent recruits settlers. By 1276 he is batlle chasing absentees.", "Un agente judio recluta pobladores. En 1276 es batlle cobrando ausentes."),
    fate: L("To fill a town that will not stay filled. Office, not a dynasty named Villarreal.", "Llenar una villa que no se queda llena. Oficio, no dinastia Villarreal."),
    shadow: L("Later readings make the recruiter the hidden founder. The grant names the work, not an heir.", "Lecturas posteriores hacen del reclutador el fundador oculto. La merced nombra el trabajo, no un heredero."),
    href: "/atlas",
  },
  cascant: {
    spoken: "Cascant",
    lemma: "Jaume de Cascant",
    kind: "habitational",
    stamp: "in-record",
    clock: L("1 March 1273 grant", "Merced del 1 de marzo de 1273"),
    migration: L("The byname points to Cascante - Teruel origin carried into Burriana term.", "El sobrenombre apunta a Cascante - origen de Teruel llevado a Burriana."),
    fate: L("A named holder in the first cohort. The later peita has not shown the heir here.", "Tenedor nombrado de la primera cohorte. La peita posterior no ha mostrado al heredero aqui."),
    shadow: L("Absence of a later Cascant-de-Vila-real is a gap, not proof of erasure.", "La ausencia de un Cascant-de-Vila-real posterior es hueco, no prueba de borrado."),
    href: "/atlas",
  },
  israel: {
    spoken: "Israel",
    lemma: "Yisrael",
    kind: "theophoric",
    stamp: "adjacent",
    clock: L("Genesis 32 - and a modern state", "Genesis 32 - y un estado moderno"),
    migration: L("The wrestler's name travels as a people-name, then a country-name. Two clocks.", "El nombre del que lucha viaja como pueblo, luego pais. Dos relojes."),
    fate: L("To wrestle and keep the mark. The name is a sentence.", "Luchar y guardar la marca. El nombre es una frase."),
    shadow: L("Yisrael and Israel look like twins. Same trap as Villarreal / Martinez.", "Yisrael e Israel parecen gemelos. La misma trampa que Villarreal / Martinez."),
    href: "/lion",
  },
  yisrael: {
    spoken: "Yisrael",
    lemma: "Yisrael",
    kind: "theophoric",
    stamp: "adjacent",
    clock: L("Hebrew register", "Registro hebreo"),
    migration: L("The pointed form keeps the wrestle visible. Unpointed, it collapses toward Israel.", "La forma con puntos deja visible la lucha. Sin puntos, se derrumba hacia Israel."),
    fate: L("To be the older mouth of the same name.", "Ser la boca mas vieja del mismo nombre."),
    shadow: L("English flattens the first vowel and sells it as identity complete.", "El ingles aplana la primera vocal y la vende como identidad completa."),
    href: "/lion",
  },
  peyronet: {
    spoken: "Peyronet",
    lemma: "Frey Petrus Peyronet",
    kind: "office",
    stamp: "adjacent",
    clock: L("12 May 1274 acequia - Burriana commandery", "Acequia 12 mayo 1274 - encomienda de Burriana"),
    migration: L("Royal almoner funds the ditch. A Peter Peyronet is listed Templar commander at Burriana c. 1273-77. Two tokens.", "El limosnero financia la acequia. Un Peter Peyronet figura comendador en Burriana c. 1273-77. Dos tokens."),
    fate: L("To sit next to the founding and not name it.", "Sentarse al lado de la fundacion y no nombrarla."),
    shadow: L("Adjacency reads as authorship. The Temple is in the landscape. It is not the grantor.", "La adyacencia se lee como autoria. El Templo esta en el paisaje. No es el otorgante."),
    href: "/templars",
  },
  jaime: {
    spoken: "Jaime",
    lemma: "Iacobus / James",
    kind: "dithematic",
    stamp: "in-record",
    clock: L("James I of Aragon - 1274", "Jaime I de Aragon - 1274"),
    migration: L("Jamestown copies the baptismal name. Vila-real copies the office.", "Jamestown copia el nombre de bautismo. Vila-real copia el oficio."),
    fate: L("To found by status-word, not by self-name.", "Fundar con palabra de estatus, no con el propio nombre."),
    shadow: L("Two King James towns. Different engines.", "Dos villas de un rey Jaime. Motores distintos."),
    href: "/dossier",
  },
};
