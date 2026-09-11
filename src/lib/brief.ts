import type { Lang } from "@/lib/i18n";

export type BriefTag = {
  id: string;
  tag: string;
  title: string;
  body: string;
  sources: string;
  href: "/" | "/atlas" | "/dossier" | "/lion" | "/templars";
};

export const BRIEF_META: Record<
  Lang,
  { title: string; subtitle: string; kicker: string; sources: string; open: string }
> = {
  en: {
    title: "Four clocks, and the Temple",
    subtitle: "One page. No citation numbers. Five tags. English and Spanish.",
    kicker: "Brief",
    sources: "Sources",
    open: "Open the full page",
  },
  es: {
    title: "Cuatro relojes, y el Templo",
    subtitle: "Una página. Sin números de cita. Cinco etiquetas. Inglés y español.",
    kicker: "Síntesis",
    sources: "Fuentes",
    open: "Abrir la página completa",
  },
};

export const BRIEF_TAGS: Record<Lang, BriefTag[]> = {
  en: [
    {
      id: "essay",
      tag: "Essay",
      title: "Nomen",
      href: "/",
      body: "Latin nōmen is name. Latin ōmen is a portent. One letter. Not kin. The real names are Roboto and Roberto. They rhyme. They are not relatives. Robot and Robert are the English glosses that collapse the pair. Roboto sits next to robot / robota — Čapek’s Czech play R.U.R., Slavic forced labor. That is the house, not a diminutive of the given name. Roberto is the Iberian form of Robert: Proto-Germanic fame plus bright. Robert Thorn in The Omen is a character. Date the registers. Sound is not sense.",
      sources: "Čapek, R.U.R.; Slavic etymology of robota; Proto-Germanic Hrōþiberhtaz; onomastic pairs in this journal.",
    },
    {
      id: "atlas",
      tag: "Atlas",
      title: "Vila-real, twelve seventy-four",
      href: "/atlas",
      body: "James I of Aragon grants a carta pobla and plants a town on the Plana. The charter is a legal machine, not a family album. Names in that network are offices, neighbors, witnesses, and land. They do not, by themselves, prove a bloodline to a living household in Monterrey. The atlas holds a hotel in the old warehouse, an ejido and a rural locality called Los Villarreales, and a searched gap in fourteen twenty-nine. It will not glue a Catalan charter to a Nuevo León census and call that one origin.",
      sources: "Carta pobla of Vila-real; INEGI locality Los Villarreales; INAH record of the Apolo warehouse hotel; Plana chronicle gap.",
    },
    {
      id: "dossier",
      tag: "Dossier",
      title: "Four clocks, unmerged",
      href: "/dossier",
      body: "Steelman first. Then the charter, clause by clause. Then four clocks on the table: documents, family memory, genetic tests, and place. A date on a charter is not a date on a cheek swab, and Monterrey is not Vila-real. Nuevo León means New Kingdom of León. An English tourism page once calqued it as New Lion and then took that line down. That calque is not Hebrew lion language, and it is not a founding of this Mexican state by the tribe of Judah. A Villarreal de Monterrey who carries Indigenous American ancestry has a right to that history. A kit percentage is not a people. Fifty thousand years is a species clock, not a Hebrew-Egyptian origin. Treasure talk sits next to 1307, not inside the 1274 clause.",
      sources: "VisitMexico English calque, later reverted; AM, Debate, Al Día; Numbers 23; INEGI census counts; ILO 169; UNDRIP; Nuevo León indigenous statute; Handbook of Texas, Coahuiltecan Indians.",
    },
    {
      id: "lion",
      tag: "Gur Aryeh",
      title: "Judah’s animal",
      href: "/lion",
      body: "Jacob blesses Judah as a lion’s cub. From prey the cub has gone up. He crouches like a lion, like a lioness. Who will rouse him. The next line keeps the scepter in Judah. After the northern tribes are lost, Judah’s name becomes Jew, and the tribal animal becomes a Jewish one. Hebrew keeps six biblical words for this beast. The same animal flips: crown in the hand of Judah or God, mouth when aimed at the psalmist. Aryeh, Ari, Ariel, Kfir, Lavi, Aryeh Leib: the blessing became a name.",
      sources: "Genesis 49; Numbers 23–24; Sanhedrin; Mishnah Middot; Ezekiel; Shulchan Aruch, Orach Chayim; emblem of Jerusalem; Sefaria.",
    },
    {
      id: "templars",
      tag: "Templars",
      title: "Neighbors, not namers",
      href: "/templars",
      body: "Nine French knights under Hugh of Payns, after the First Crusade, to guard pilgrims on roads full of bandits. Baldwin II housed them at Al-Aqsa, which they took for Solomon’s Temple. The pope blessed them at Troyes. They became feared in the field and richer as bankers. Philip IV, who owed them a fortune, had them seized in a single night. Clement V dissolved the order in 1312. Jacques de Molay burned in 1314. On the Plana they are neighbors: Xivert after Burriana, a share of the city, perhaps the almoner Peyronet. Vila-real is James’s royal village in 1274, after the order already exists. Era and frontier. Not a lineage, and not a naming clause.",
      sources: "Barber; Nicholson; Forey, The Templars in the Corona de Aragón; arrests of 1307; Vox in excelso; carta puebla of 1274; grant of Xivert, 1233; Order of Montesa.",
    },
  ],
  es: [
    {
      id: "essay",
      tag: "Ensayo",
      title: "Nomen",
      href: "/",
      body: "En latín nōmen es nombre. Ōmen es un presagio. Una letra. No son parientes. Los nombres reales son Roboto y Roberto. Riman. Robot y Robert son las glosas inglesas que funden el par. Roboto se sienta junto a robot / robota — R.U.R. de Čapek, trabajo forzado eslavo. Es la casa, no un diminutivo. Roberto es la forma ibérica de Robert: fama más brillante. Robert Thorn en The Omen es un personaje. Fecha los registros. El sonido no es el sentido.",
      sources: "Čapek, R.U.R.; etimología eslava de robota; proto-germánico Hrōþiberhtaz; pares onomásticos de esta revista.",
    },
    {
      id: "atlas",
      tag: "Atlas",
      title: "Vila-real, mil doscientos setenta y cuatro",
      href: "/atlas",
      body: "Jaime I de Aragón otorga una carta puebla y planta una villa en la Plana. La carta es una máquina legal, no un álbum de familia. Los nombres de esa red son oficios, vecinos, testigos y tierra. Por sí solos no prueban una línea de sangre hasta una casa viva en Monterrey. El atlas guarda un hotel en la antigua bodega, un ejido y una localidad rural llamada Los Villarreales, y un hueco buscado en mil cuatrocientos veintinueve. No pega una carta catalana a un censo de Nuevo León para llamarlo un solo origen.",
      sources: "Carta puebla de Vila-real; localidad INEGI Los Villarreales; ficha INAH del hotel en la bodega Apolo; hueco de la crónica de la Plana.",
    },
    {
      id: "dossier",
      tag: "Dossier",
      title: "Cuatro relojes, sin fundir",
      href: "/dossier",
      body: "Primero el steelman. Luego la carta, cláusula por cláusula. Luego cuatro relojes sobre la mesa: documentos, memoria de familia, pruebas genéticas y lugar. La fecha de una carta no es la fecha de un hisopo, y Monterrey no es Vila-real. Nuevo León significa Nuevo Reino de León. Una página turística en inglés alguna vez lo calcó como New Lion y luego quitó esa línea. Ese calco no es la lengua hebrea del león, y no es una fundación de este estado mexicano por la tribu de Judá. Un Villarreal de Monterrey que lleva ancestría indígena americana tiene derecho a esa historia. Un porcentaje de kit no es un pueblo. Cincuenta mil años es un reloj de especie, no un origen hebreo-egipcio. La charla del tesoro se sienta junto a 1307, no dentro de la cláusula de 1274.",
      sources: "Calco inglés de VisitMexico, luego revertido; AM, Debate, Al Día; Números 23; conteos INEGI; OIT 169; UNDRIP; ley indígena de Nuevo León; Handbook of Texas, Coahuiltecan Indians.",
    },
    {
      id: "lion",
      tag: "Gur Aryeh",
      title: "El animal de Judá",
      href: "/lion",
      body: "Jacob bendice a Judá como cachorro de león. De la presa el cachorro ha subido. Se agacha como león, como leona. Quién lo despertará. La línea siguiente deja el cetro en Judá. Cuando se pierden las tribus del norte, el nombre de Judá se vuelve judío, y el animal de la tribu se vuelve un animal judío. El hebreo guarda seis palabras bíblicas para esta fiera. El mismo animal se voltea: corona en la mano de Judá o de Dios, boca cuando apunta al salmista. Aryeh, Ari, Ariel, Kfir, Lavi, Aryeh Leib: la bendición se volvió nombre.",
      sources: "Génesis 49; Números 23–24; Sanedrín; Mishná Midot; Ezequiel; Shulján Aruj, Oraj Jaim; sello de Jerusalén; Sefaria.",
    },
    {
      id: "templars",
      tag: "Templarios",
      title: "Vecinos, no nominadores",
      href: "/templars",
      body: "Nueve caballeros franceses bajo Hugo de Payns, después de la Primera Cruzada, para guardar peregrinos en caminos llenos de bandidos. Balduino II los alojó en Al-Aqsa, que ellos tomaron por el Templo de Salomón. El papa los bendijo en Troyes. Se volvieron temidos en el campo y más ricos como banqueros. Felipe IV, que les debía una fortuna, los hizo prender en una sola noche. Clemente V disolvió la orden en 1312. Jacques de Molay ardió en 1314. En la Plana son vecinos: Xivert después de Burriana, una parte de la ciudad, quizá el limosnero Peyronet. Vila-real es la villa real de Jaime en 1274, cuando la orden ya existe. Época y frontera. No linaje, y no cláusula de nombre.",
      sources: "Barber; Nicholson; Forey, The Templars in the Corona de Aragón; prisiones de 1307; Vox in excelso; carta puebla de 1274; merced de Xivert, 1233; Orden de Montesa.",
    },
  ],
};
