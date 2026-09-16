import type { LocaleText } from "@/lib/i18n";

export type ClaimVerdict = "in-record" | "adjacent" | "not-in-record" | "split";

export type ClaimPoint = {
  text: LocaleText;
  source: string;
};

export type Claim = {
  id: string;
  title: LocaleText;
  stated: LocaleText;
  steelman: LocaleText;
  verdict: ClaimVerdict;
  inRecord: ClaimPoint[];
  adjacent: ClaimPoint[];
  notInRecord: ClaimPoint[];
  whatWouldConfirm: LocaleText;
};

export type CharterClause = {
  id: string;
  kicker: LocaleText;
  title: LocaleText;
  latin: string;
  english: LocaleText;
  names: LocaleText;
  doesNotName: LocaleText;
};

export type Witness = {
  latin: string;
  name: LocaleText;
  role: LocaleText;
};

export type ChronicleEvent = {
  id: string;
  year: string;
  sort: number;
  title: LocaleText;
  text: LocaleText;
  place: string;
  status: "in-record" | "adjacent" | "gap";
};

export type PlanaPlace = {
  id: string;
  name: string;
  role: LocaleText;
  x: number;
  y: number;
};

export type DnaClock = {
  id: string;
  title: LocaleText;
  ticks: LocaleText;
  can: LocaleText;
  cannot: LocaleText;
};

export const CLAIMS: Claim[] = [
  {
    id: "royal-village",
    title: {
      en: "The town is the king’s village",
      es: "La villa es la villa del rey",
    },
    stated: {
      en: "Villarreal was named as a royal village by James I of Aragon in 1274.",
      es: "Villarreal fue nombrada villa real por Jaime I de Aragón en 1274.",
    },
    steelman: {
      en: "The legal name in the foundation act is Villa Regalis / Vila-real. That is a status-name: a settlement of the royal patrimony, carved from Burriana, using the four-bar royal standard. It does not require the town to be named after the king’s given name.",
      es: "El nombre legal en el acta de fundación es Villa Regalis / Vila-real. Eso es un nombre de estatus: un asentamiento del patrimonio real, cortado de Burriana, con el estandarte real de cuatro barras. No exige que la villa lleve el nombre de pila del rey.",
    },
    verdict: "in-record",
    inRecord: [
      {
        text: {
          en: "20 February 1274: Jaime, king of Aragon, Majorca, and Valencia, grants terms to the settlers of Ville Regalis in the term of Burriana, to the fuero of Aragon.",
          es: "20 de febrero de 1274: Jaime, rey de Aragón, Mallorca y Valencia, otorga términos a los pobladores de Ville Regalis en el término de Burriana, al fuero de Aragón.",
        },
        source: "ACA, Cancillería, reg. 19, f. 105; Arxius Jaume I.",
      },
      {
        text: {
          en: "The town sits in the royal arm of the Valencian Cortes and bears the royal bars.",
          es: "La villa se sienta en el brazo real de las Cortes valencianas y lleva las barras reales.",
        },
        source: "Ajuntament de Vila-real, Història.",
      },
    ],
    adjacent: [
      {
        text: {
          en: "Several other Iberian places are also named Villa Real / Villarreal / Vila Real. The formation is productive, not unique to Castellón.",
          es: "Otros lugares ibéricos se llaman también Villa Real / Villarreal / Vila Real. La formación es productiva, no exclusiva de Castellón.",
        },
        source: "Toponymic survey; Alfonso X’s Villa Real (Ciudad Real) in 1255 is a Castilian parallel.",
      },
    ],
    notInRecord: [
      {
        text: {
          en: "The 1274 clause does not say the town is named after a family, an order, or the king’s baptismal name.",
          es: "La cláusula de 1274 no dice que la villa se nombre por una familia, una orden o el nombre de bautismo del rey.",
        },
        source: "The published Latin names the place and the grantor; it does not etymologize a household.",
      },
    ],
    whatWouldConfirm: {
      en: "Nothing further is required for the legal name. A competing 13th-century naming clause would have to appear in another act of the same cluster.",
      es: "Nada más se requiere para el nombre legal. Una cláusula de nombramiento rival del siglo XIII tendría que aparecer en otra acta del mismo racimo.",
    },
  },
  {
    id: "jamestown",
    title: {
      en: "Two King James towns",
      es: "Dos villas del rey Jaime",
    },
    stated: {
      en: "Jamestown was named after King James of England. Villarreal was named after King James of Aragon — or, later, it was not.",
      es: "Jamestown se nombró por el rey James de Inglaterra. Villarreal se nombró por el rey Jaime de Aragón — o, después, no.",
    },
    steelman: {
      en: "Both are royal toponyms from a King James. They use different naming engines. Jamestown (1607) copies the given name. Vila-real (1274) copies the office: royal village, not Jaume-town. The reversal — “it was not named after the king” — is then a claim that the legal status-name hides a different social name.",
      es: "Ambos son topónimos reales de un rey Jaime. Usan motores de nombramiento distintos. Jamestown (1607) copia el nombre de pila. Vila-real (1274) copia el oficio: villa real, no Jaume-town. La inversión — «no se nombró por el rey» — es entonces la afirmación de que el nombre de estatus legal esconde otro nombre social.",
    },
    verdict: "split",
    inRecord: [
      {
        text: {
          en: "Jamestown, Virginia, 1607, is named for James I of England.",
          es: "Jamestown, Virginia, 1607, se nombra por James I de Inglaterra.",
        },
        source: "Standard colonial toponymy.",
      },
      {
        text: {
          en: "Vila-real is Villa Regalis: the king’s village as a legal class of place.",
          es: "Vila-real es Villa Regalis: la villa del rey como clase legal de lugar.",
        },
        source: "Carta pobla of 20 February 1274.",
      },
    ],
    adjacent: [
      {
        text: {
          en: "A habitational surname taken from any royal village can later travel without preserving the 1274 legal story.",
          es: "Un apellido de habitación tomado de cualquier villa real puede viajar después sin conservar la historia legal de 1274.",
        },
        source: "Transonymization: place-name becomes surname; date the use.",
      },
    ],
    notInRecord: [
      {
        text: {
          en: "No 1274 act names the town Jacobopolis, Jaume-vila, or after a household called Villarreal.",
          es: "Ninguna acta de 1274 nombra la villa Jacobopolis, Jaume-vila, ni por una casa llamada Villarreal.",
        },
        source: "The addressees are “all and each of the settlers,” not a lineage.",
      },
    ],
    whatWouldConfirm: {
      en: "A contemporary byname “de Vila-real” attached to a named founder, or a second foundation narrative in a dated 13th-century source.",
      es: "Un sobrenombre contemporáneo «de Vila-real» atado a un fundador nombrado, o un segundo relato de fundación en una fuente del siglo XIII fechada.",
    },
  },
  {
    id: "templar-family",
    title: {
      en: "A Templar family named the town",
      es: "Una familia templaria nombró la villa",
    },
    stated: {
      en: "A Knights Templar family named Villarreal, from Israel because they were Jews, named the town in 1274.",
      es: "Una familia de caballeros templarios llamada Villarreal, de Israel porque eran judíos, nombró la villa en 1274.",
    },
    steelman: {
      en: "Keep the pieces. Templars are in the landscape (Xivert 1233; a third of Burriana). Jews are in the peopling (Salomó Vidal; later aljama). Warrior households sit on this frontier. The live question is whether those three facts are one household that supplied the name.",
      es: "Guárdense las piezas. Los templarios están en el paisaje (Xivert 1233; un tercio de Burriana). Los judíos están en el poblamiento (Salomó Vidal; luego la aljama). Casas de guerreros se sientan en esta frontera. La pregunta viva es si esos tres hechos son una sola casa que dio el nombre.",
    },
    verdict: "split",
    inRecord: [
      {
        text: {
          en: "Templars received Xivert for help at Burriana, and a share of the city.",
          es: "Los templarios recibieron Xivert por ayuda en Burriana, y una parte de la ciudad.",
        },
        source: "Forey, The Templars in the Corona de Aragón.",
      },
      {
        text: {
          en: "Salomó Vidal, a Jewish agent, recruited settlers after Catalan courtiers declined the harsh terms.",
          es: "Salomó Vidal, agente judío, reclutó pobladores después de que los cortesanos catalanes rechazaran los términos duros.",
        },
        source: "Ajuntament de Vila-real.",
      },
      {
        text: {
          en: "A Jewish aljama of Villarreal is treated with Castellón and Burriana in a 1990 monograph.",
          es: "Una aljama judía de Villarreal se trata con Castellón y Burriana en una monografía de 1990.",
        },
        source: "Doñate Sebastiá & Magdalena Nom de Déu.",
      },
    ],
    adjacent: [
      {
        text: {
          en: "Frey Petrus Peyronet, royal almoner funding the acequia in May 1274, may be the Peter Peyronet listed as Templar commander at Burriana c. 1273–77.",
          es: "Frey Petrus Peyronet, limosnero real que financia la acequia en mayo de 1274, puede ser el Peter Peyronet listado como comendador templario de Burriana hacia 1273–77.",
        },
        source: "Dossier identity; do not merge without an equating source.",
      },
      {
        text: {
          en: "The surname Villarreal later appears in Sephardic, converso, and Portuguese Villareal contexts.",
          es: "El apellido Villarreal aparece después en contextos sefardíes, conversos y portugueses Villareal.",
        },
        source: "Encyclopaedia Judaica, Villareal family; a later stratum.",
      },
    ],
    notInRecord: [
      {
        text: {
          en: "No person in the published 1269–1274 grants bears the byname de Villarreal / de Vila-real, is a Templar brother or donat, and is also a documented Jew.",
          es: "Ninguna persona en las mercedes publicadas de 1269–1274 lleva el sobrenombre de Villarreal / de Vila-real, es hermano o donado templario, y es también un judío documentado.",
        },
        source: "The naming clause and the witness list.",
      },
      {
        text: {
          en: "The Order does not appear as grantor or naming agent in the carta pobla.",
          es: "La Orden no aparece como otorgante ni agente de nombramiento en la carta pobla.",
        },
        source: "ACA, reg. 19, f. 105.",
      },
    ],
    whatWouldConfirm: {
      en: "A 13th-century token: a named man whose byname is de Vila-real, standing in a Temple list or an aljama act, in the Burriana cluster. That token is the test. It is not in the acts used here.",
      es: "Un token del siglo XIII: un hombre nombrado cuyo sobrenombre es de Vila-real, en una lista del Temple o en un acta de aljama, en el racimo de Burriana. Ese token es la prueba. No está en las actas usadas aquí.",
    },
  },
  {
    id: "assassination",
    title: {
      en: "Saved from killing, paid with a town",
      es: "Salvado de la muerte, pagado con una villa",
    },
    stated: {
      en: "James I was going to be killed. Templars warned him and saved him, then he was forced to give a Templar family their own royal town.",
      es: "Jaime I iba a ser muerto. Los templarios lo avisaron y lo salvaron; luego se le forzó a dar a una familia templaria su propia villa real.",
    },
    steelman: {
      en: "There is a real rescue. After Peter II died at Muret (1213), Templars under Guillem de Montrodón recovered the child James from Simon de Montfort and raised him at Monzón. That is protection and education. The 1274 town, sixty years later, is a different graph. Do not collapse them.",
      es: "Hay un rescate real. Después de que Pedro II muriera en Muret (1213), templarios bajo Guillem de Montrodón recuperaron al niño Jaime de Simón de Montfort y lo criaron en Monzón. Eso es protección y educación. La villa de 1274, sesenta años después, es otro grafo. No se fundan.",
    },
    verdict: "split",
    inRecord: [
      {
        text: {
          en: "1214: the child king is recovered from Montfort and raised at the Templar castle of Monzón.",
          es: "1214: el rey niño se recupera de Montfort y se cría en el castillo templario de Monzón.",
        },
        source: "Llibre dels fets; standard biographies of Jaime I.",
      },
      {
        text: {
          en: "1274: the same king, as an old man, founds a royal village in Burriana’s term.",
          es: "1274: el mismo rey, ya viejo, funda una villa real en el término de Burriana.",
        },
        source: "Carta pobla.",
      },
    ],
    adjacent: [
      {
        text: {
          en: "A king raised by an order may later plant royal towns in a landscape where that order already holds land. Influence is not the same as a naming bargain.",
          es: "Un rey criado por una orden puede después plantar villas reales en un paisaje donde esa orden ya tiene tierra. Influencia no es lo mismo que un pacto de nombramiento.",
        },
        source: "Prosopographical caution: adjacent structures, dated separately.",
      },
    ],
    notInRecord: [
      {
        text: {
          en: "No 1274 act frames Vila-real as payment, ransom, or forced gift to the Temple or to a family named Villarreal.",
          es: "Ninguna acta de 1274 encuadra Vila-real como pago, rescate o don forzado al Temple o a una familia llamada Villarreal.",
        },
        source: "The charter is a settlement contract with unnamed settlers.",
      },
      {
        text: {
          en: "No dated warning-of-assassination tied to the foundation survives in the sources used here.",
          es: "Ningún aviso fechado de asesinato atado a la fundación sobrevive en las fuentes usadas aquí.",
        },
        source: "The 1214 rescue is the documented danger; it is not a 1274 plot.",
      },
    ],
    whatWouldConfirm: {
      en: "A dated letter, chronicle entry, or later royal confirmation that states the town was granted to the Temple or to a named household in return for a warning.",
      es: "Una carta fechada, una entrada de crónica o una confirmación real posterior que diga que la villa se otorgó al Temple o a una casa nombrada a cambio de un aviso.",
    },
  },
  {
    id: "year-1429",
    title: {
      en: "Forced to leave around 1429",
      es: "Forzados a irse hacia 1429",
    },
    stated: {
      en: "Around 1429 the Villarreals were forced to leave.",
      es: "Hacia 1429 los Villarreal fueron forzados a irse.",
    },
    steelman: {
      en: "Family memory often compresses a century of pressure into one departure date. In this landscape the dated shocks are 1391 (assaults, conversion, flight) and 1492 (expulsion). A child who survived 1391 would be about forty in 1429. The year sits inside a real converso generation. It is not, in the published record used here, a royal expulsion of a Templar family.",
      es: "La memoria de familia suele comprimir un siglo de presión en una sola fecha de partida. En este paisaje los golpes fechados son 1391 (asaltos, conversión, huida) y 1492 (expulsión). Un niño que sobrevivió 1391 tendría unos cuarenta años en 1429. El año se sienta dentro de una generación conversa real. No es, en el acta publicada usada aquí, una expulsión real de una familia templaria.",
    },
    verdict: "split",
    inRecord: [
      {
        text: {
          en: "July 1391: anti-Jewish violence across Castile and Aragon. Valencia city’s aljama is destroyed. In Vila-real, Castellón, and some other towns, the pattern reported is mass conversion or flight rather than the massacre of the capital.",
          es: "Julio de 1391: violencia antijudía en Castilla y Aragón. Se destruye la aljama de la ciudad de Valencia. En Vila-real, Castellón y algunas otras villas, el patrón reportado es conversión masiva o huida más que la matanza de la capital.",
        },
        source: "Hinojosa Montalvo; Furió; local studies of the Plana.",
      },
      {
        text: {
          en: "31 March 1492: the Alhambra Decree. The remnant Jewish households of the kingdom leave or convert; Valencian ports embark thousands, mostly from Sagunt and Xàtiva.",
          es: "31 de marzo de 1492: el Decreto de la Alhambra. Las casas judías restantes del reino se van o se convierten; los puertos valencianos embarcan miles, sobre todo de Sagunt y Xàtiva.",
        },
        source: "Hinojosa Montalvo, The Jews of the Kingdom of Valencia.",
      },
      {
        text: {
          en: "The Templar Order is dissolved in 1312. In Valencia its goods pass to the new Order of Montesa (1317–19). By 1429 there is no Temple left to expel anyone.",
          es: "La Orden del Temple se disuelve en 1312. En Valencia sus bienes pasan a la nueva Orden de Montesa (1317–19). Hacia 1429 no queda Temple que expulse a nadie.",
        },
        source: "Papal suppression; foundation of Montesa.",
      },
    ],
    adjacent: [
      {
        text: {
          en: "1391–1423 is a documented converso generation in the kingdom of Valencia. Local tax, flight, and conversion pressure continues after the riots.",
          es: "1391–1423 es una generación conversa documentada en el reino de Valencia. La presión local de impuestos, huida y conversión sigue después de los tumultos.",
        },
        source: "Hinojosa’s converso notices; Disputation of Tortosa, 1413–14.",
      },
      {
        text: {
          en: "Villarreal and Burriana’s remaining Jewish households decline across the fifteenth century in favor of Morvedre (Sagunt).",
          es: "Las casas judías restantes de Villarreal y Burriana declinan a lo largo del siglo XV a favor de Morvedre (Sagunt).",
        },
        source: "Hinojosa; Doñate Sebastiá & Magdalena Nom de Déu.",
      },
    ],
    notInRecord: [
      {
        text: {
          en: "No 1429 edict, riot, or named expulsion of a Villarreal lineage appears in the sources used here.",
          es: "Ningún edicto, tumulto o expulsión nombrada de un linaje Villarreal de 1429 aparece en las fuentes usadas aquí.",
        },
        source: "The year was searched as a dated event; 1391 and 1492 are what returned.",
      },
    ],
    whatWouldConfirm: {
      en: "A 1429 notarial act, tax list, or Inquisition later-memory that names a Villarreal household leaving Vila-real, Burriana, or a related town that year.",
      es: "Un acta notarial de 1429, un padrón o una memoria posterior de la Inquisición que nombre una casa Villarreal que deja Vila-real, Burriana u otra villa afín ese año.",
    },
  },
  {
    id: "jewish-line",
    title: {
      en: "Villarreals were Jews",
      es: "Los Villarreal eran judíos",
    },
    stated: {
      en: "The Villarreals were Jews, from Israel, and the surname is Sephardic.",
      es: "Los Villarreal eran judíos, de Israel, y el apellido es sefardí.",
    },
    steelman: {
      en: "Three dated layers. (1) Jews help people the new town and later keep an aljama there. (2) After 1391 many become conversos; some later appear under habitational surnames. (3) A Portuguese Villareal family re-enters Jewish life in London. None of those layers is automatically the 1274 naming agent.",
      es: "Tres capas fechadas. (1) Judíos ayudan a poblar la villa nueva y luego guardan ahí una aljama. (2) Después de 1391 muchos se vuelven conversos; algunos aparecen después bajo apellidos de habitación. (3) Una familia portuguesa Villareal reentra a la vida judía en Londres. Ninguna de esas capas es, por sí, el agente de nombramiento de 1274.",
    },
    verdict: "adjacent",
    inRecord: [
      {
        text: {
          en: "Salomó Vidal recruits settlers c. 1274.",
          es: "Salomó Vidal recluta pobladores hacia 1274.",
        },
        source: "Municipal history of Vila-real.",
      },
      {
        text: {
          en: "A judería and an aljama of Villarreal are documented; a monograph treats Castellón, Burriana, and Villarreal together.",
          es: "Se documentan una judería y una aljama de Villarreal; una monografía trata juntas Castellón, Burriana y Villarreal.",
        },
        source: "Doñate Sebastiá & Magdalena Nom de Déu, 1990.",
      },
    ],
    adjacent: [
      {
        text: {
          en: "Sephardic and converso uses of Villarreal / Villareal are real. They are a later surname stratum taken from a royal village, of which this town is one possible source among several.",
          es: "Los usos sefardíes y conversos de Villarreal / Villareal son reales. Son un estrato posterior de apellido tomado de una villa real, de las que esta villa es una fuente posible entre varias.",
        },
        source: "Encyclopaedia Judaica; Inquisition and diaspora lists.",
      },
    ],
    notInRecord: [
      {
        text: {
          en: "“From Israel” as a 1274 migration of a named Templar-Jewish household is not in the grants.",
          es: "«De Israel» como migración de 1274 de una casa templaria-judía nombrada no está en las mercedes.",
        },
        source: "The first stable contingents described locally are Morellans, Aragonese, and later Catalans.",
      },
    ],
    whatWouldConfirm: {
      en: "A 13th- or 14th-century aljama or notarial list in which a man is both de Vila-real and a Jew or converso of this town — dated, not inferred from a modern DNA kit.",
      es: "Una lista de aljama o notarial de los siglos XIII o XIV en la que un hombre sea a la vez de Vila-real y judío o converso de esta villa — fechada, no inferida de un kit moderno de ADN.",
    },
  },
  {
    id: "dna",
    title: {
      en: "It is carried in DNA",
      es: "Se lleva en el ADN",
    },
    stated: {
      en: "This history is carried in DNA, the way a model carries data from its first training run.",
      es: "Esta historia se lleva en el ADN, como un modelo lleva datos de su primera corrida de entrenamiento.",
    },
    steelman: {
      en: "Bodies keep a different archive from charters. Y-DNA, mitochondrial DNA, and autosomal segments can show that a living Villarreal line clusters with Iberian, Sephardic, Levantine, or Indigenous American reference groups. That is ancestry. It is not a stored memory of a town charter, a Templar warning, a 1274 naming meeting, or a fifty-thousand-year Hebrew. Date each cluster. Do not wind them as one.",
      es: "Los cuerpos guardan un archivo distinto al de las cartas. El ADN-Y, el ADN mitocondrial y los segmentos autosómicos pueden mostrar que una línea Villarreal viva se agrupa con grupos de referencia ibéricos, sefardíes, levantinos o indígenas americanos. Eso es ancestría. No es memoria almacenada de una carta puebla, de un aviso templario, de una reunión de nombramiento de 1274, ni de un hebreo de cincuenta mil años. Féchese cada racimo. No se den cuerda como uno.",
    },
    verdict: "split",
    inRecord: [
      {
        text: {
          en: "Genetic genealogy can map later cohorts: haplogroups, shared segments, reference-panel ancestry.",
          es: "La genealogía genética puede mapear cohortes posteriores: haplogrupos, segmentos compartidos, ancestría de panel de referencia.",
        },
        source: "Standard genetic-genealogy method; treat as a distribution map.",
      },
    ],
    adjacent: [
      {
        text: {
          en: "Some tested Villarreal lines report Semitic / Sephardic markers. Some living northern Mexican lines report Indigenous American ancestry around a third. Those are facts about later samples, not about who named a village in 1274.",
          es: "Algunas líneas Villarreal ensayadas reportan marcadores semíticos / sefardíes. Algunas líneas vivas del norte de México reportan ancestría indígena americana alrededor de un tercio. Esos son hechos sobre muestras posteriores, no sobre quién nombró una villa en 1274.",
        },
        source: "Consumer kits and project clusters — useful, not oracular. The identity-rights claim on this page.",
      },
      {
        text: {
          en: "Oral family memory is also data. It is often right about pressure and departure, and loose about the year and the legal cause.",
          es: "La memoria oral de familia también es dato. Suele acertar en la presión y la partida, y aflojarse en el año y la causa legal.",
        },
        source: "The 1429 / 1391 / 1492 problem on this page.",
      },
    ],
    notInRecord: [
      {
        text: {
          en: "DNA does not encode the text of the carta pobla, the identity of Peyronet, or a Templar bargain.",
          es: "El ADN no cifra el texto de la carta pobla, la identidad de Peyronet ni un pacto templario.",
        },
        source: "Genomes carry ancestry markers, not narrative memory.",
      },
    ],
    whatWouldConfirm: {
      en: "A documented pedigree tying a tested line to a dated Vila-real household, plus a matching paper trail. DNA without the paper trail remains a cluster, not a foundation story.",
      es: "Un pedigrí documentado que ate una línea ensayada a una casa de Vila-real fechada, más un rastro documental que coincida. El ADN sin el rastro documental sigue siendo un racimo, no un relato de fundación.",
    },
  },
  {
    id: "warriors",
    title: {
      en: "Warrior names, Templar work",
      es: "Nombres de guerreros, oficio templario",
    },
    stated: {
      en: "Villarreals were warriors like Templars. Martinez is Mars. The names remember war.",
      es: "Los Villarreal eran guerreros como templarios. Martinez es Marte. Los nombres recuerdan la guerra.",
    },
    steelman: {
      en: "Martinez is genuinely martial in etymology: son of Martin, from Martinus, from Mars. Villarreal is not: it is a place-name, royal village. A frontier town next to a Temple commandery will have fighting men. Etymology of one surname is not a battle-roll of the other.",
      es: "Martinez es marcial de verdad en la etimología: hijo de Martín, de Martinus, de Marte. Villarreal no: es un topónimo, villa real. Una villa de frontera junto a una encomienda del Temple tendrá hombres de pelea. La etimología de un apellido no es el rol de batalla del otro.",
    },
    verdict: "split",
    inRecord: [
      {
        text: {
          en: "Martinez < Martín < Martinus < Mars. The martial etymology is linguistic, not metaphorical.",
          es: "Martinez < Martín < Martinus < Marte. La etimología marcial es lingüística, no metafórica.",
        },
        source: "Standard Spanish patronymic plus Latin theonym.",
      },
      {
        text: {
          en: "The Plana after 1233 is a military landscape: Burriana taken, Xivert to the Temple, a new royal village planted on the road from Valencia to Tortosa.",
          es: "La Plana después de 1233 es un paisaje militar: Burriana tomada, Xivert al Temple, una villa real nueva plantada en el camino de Valencia a Tortosa.",
        },
        source: "Carta pobla bounds; Forey.",
      },
    ],
    adjacent: [
      {
        text: {
          en: "A household that later takes the habitational surname Villarreal can be both a fighting line and a Jewish or converso line. Those are compatible. They still need dates.",
          es: "Una casa que después toma el apellido de habitación Villarreal puede ser a la vez línea de pelea y línea judía o conversa. Eso es compatible. Aún necesitan fechas.",
        },
        source: "Socio-onomastics: one surname, several jobs across centuries.",
      },
    ],
    notInRecord: [
      {
        text: {
          en: "The 1274 witness list is bishops and royal men, not a Villarreal war-band.",
          es: "La lista de testigos de 1274 es obispos y hombres reales, no una banda de guerra Villarreal.",
        },
        source: "Testes: Arnau of Valencia, James of Huesca, Entença, Maza, Sancho Martínez de Oblites.",
      },
    ],
    whatWouldConfirm: {
      en: "A named miles, donat, or Temple sergeant whose byname is de Vila-real in the 1269–1279 cluster.",
      es: "Un miles, donado o sargento del Temple nombrado cuyo sobrenombre sea de Vila-real en el racimo 1269–1279.",
    },
  },
  {
    id: "silence",
    title: {
      en: "The official record is incomplete",
      es: "El acta oficial está incompleta",
    },
    stated: {
      en: "Official records miss family threads. Absence from the charter is not absence from the region.",
      es: "Las actas oficiales pierden hilos de familia. La ausencia en la carta no es ausencia en la región.",
    },
    steelman: {
      en: "Medieval charters name the grantor, the legal status of the land, and officers who hold title. They rarely name informal brokers, recruiters, or the first street-level elite unless those people take land in writing. Onomastics has to read silence as a kind of evidence, not as a veto and not as a free pass.",
      es: "Las cartas medievales nombran al otorgante, el estatus legal de la tierra y a los oficios que tienen título. Rara vez nombran intermediarios informales, reclutadores o la primera élite de calle, salvo que esas personas tomen tierra por escrito. La onomástica tiene que leer el silencio como una clase de evidencia, no como veto y no como pase libre.",
    },
    verdict: "in-record",
    inRecord: [
      {
        text: {
          en: "The carta pobla addresses a collective of unnamed settlers. Named persons in the cluster are officers, craftsmen, and an almoner.",
          es: "La carta pobla se dirige a un colectivo de pobladores innombrados. Las personas nombradas en el racimo son oficios, artesanos y un limosnero.",
        },
        source: "Foundation act plus 1269–1272 grants.",
      },
      {
        text: {
          en: "Salomó Vidal is remembered locally as the recruiter after courtiers declined. He is not the legal founder.",
          es: "Salomó Vidal se recuerda en lo local como el reclutador después de que los cortesanos rechazaran. No es el fundador legal.",
        },
        source: "Municipal history — a thread the charter itself does not carry.",
      },
    ],
    adjacent: [
      {
        text: {
          en: "Family memory and DNA are the kinds of data that often preserve exactly those missing brokers. They still have to be dated against acts.",
          es: "La memoria de familia y el ADN son las clases de dato que a menudo conservan justo a esos intermediarios faltantes. Aún hay que fecharlos contra las actas.",
        },
        source: "Method of this report: three columns, not two teams.",
      },
    ],
    notInRecord: [
      {
        text: {
          en: "Silence does not license a full causal story (assassination bargain; Israelite Templar namers) without a token.",
          es: "El silencio no licencia un relato causal completo (pacto de asesinato; nominadores templarios israelitas) sin un token.",
        },
        source: "The working rule in part XIV.",
      },
    ],
    whatWouldConfirm: {
      en: "Keep looking in Burriana and Vila-real notarial registers, Temple lists, and aljama fragments. The method is to hunt tokens, not to treat the gap as the proof.",
      es: "Seguir buscando en registros notariales de Burriana y Vila-real, listas del Temple y fragmentos de aljama. El método es cazar tokens, no tratar el hueco como la prueba.",
    },
  },
  {
    id: "robot-robert",
    title: {
      en: "Roboto because someone was Roberto",
      es: "Roboto porque alguien era Roberto",
    },
    stated: {
      en: "Roboto is named from Roberto, which is why the words rhyme.",
      es: "Roboto se nombra de Roberto, por eso riman las palabras.",
    },
    steelman: {
      en: "Roboto is Roberto’s house. He named it. The house line, in the house’s own code, is Roberto = Roboto. Robot / robota (Čapek, Slavic labor vocabulary) is a neighbor word that English borrowed in 1920. Roberto is also the Iberian form of Robert, from Germanic Hrōþiberhtaz (bright fame). Robot and Robert are the English glosses that sit beside the pair. The play’s word is Josef Čapek’s; the play’s characters are Domin, Helena, Radius, and others.",
      es: "Roboto es la casa de Roberto. Él la nombró. La línea de la casa, en el código de la casa, es Roberto = Roboto. Robot / robota (Čapek, vocabulario eslavo de labor) es una palabra vecina que el inglés tomó prestada en 1920. Roberto es también la forma ibérica de Robert, del germánico Hrōþiberhtaz (fama brillante). Robot y Robert son las glosas inglesas que se sientan al lado del par. La palabra de la obra es de Josef Čapek; los personajes de la obra son Domin, Helena, Radius y otros.",
    },
    verdict: "not-in-record",
    inRecord: [
      {
        text: {
          en: "Robot is coined for Karel Čapek’s 1920 play from Slavic robota.",
          es: "Robot se acuña para la obra de 1920 de Karel Čapek del robota eslavo.",
        },
        source: "Standard etymology; English by 1923.",
      },
    ],
    adjacent: [
      {
        text: {
          en: "Homophony in English is exactly why the pair is worth an onomastic essay. Speech recognizers collapse it for the same reason: a short tap, a shared /ro…to/, and a massive prior for Roberto.",
          es: "La homofonía en inglés es justo por qué el par merece un ensayo onomástico. Los reconocedores de voz lo funden por la misma razón: un golpe corto, un /ro…to/ compartido y un prior masivo para Roberto.",
        },
        source: "This report, parts I–II and VII. The machine ear is part VII.D.",
      },
    ],
    notInRecord: [
      {
        text: {
          en: "No one in or around the play is the namesake that caused the word.",
          es: "Nadie en la obra o alrededor de ella es el homónimo que causó la palabra.",
        },
        source: "The characters and the documented coinage.",
      },
    ],
    whatWouldConfirm: {
      en: "A Čapek letter tying the coinage to a person named Robert. None is in the cited sources.",
      es: "Una carta de Čapek que ate la acuñación a una persona llamada Robert. No hay ninguna en las fuentes citadas.",
    },
  },
  {
    id: "monterrey-node",
    title: {
      en: "Villarreal de los Monterrey",
      es: "Villarreal de los Monterrey",
    },
    stated: {
      en: "I’m from Villarreal de los Monterrey. The surname saturates the city. There is a ranch — Los Villarreales — and a hotel, La Mansión Villarreal.",
      es: "Soy de Villarreal de los Monterrey. El apellido satura la ciudad. Hay un rancho — Los Villarreales — y un hotel, La Mansión Villarreal.",
    },
    steelman: {
      en: "After the habitational surname leaves Iberia it can saturate a New Spain landscape and then be written back onto land: an INEGI locality, an ejido/hacienda, a centro hotel. That is the reverse of 1274 — then a place made a name; here a name marks places. Infantes is a 1939 Castilian gazetteer suffix. Monterrey would be a living-geography disambiguator, not a municipality.",
      es: "Después de que el apellido de habitación deja Iberia puede saturar un paisaje de Nueva España y luego escribirse de vuelta sobre la tierra: una localidad INEGI, un ejido/hacienda, un hotel del centro. Eso es lo inverso de 1274 — entonces un lugar hizo un nombre; aquí un nombre marca lugares. Infantes es un sufijo de gazetero castellano de 1939. Monterrey sería un desambiguador de geografía viva, no un municipio.",
    },
    verdict: "split",
    inRecord: [
      {
        text: {
          en: "Los Villarreales is INEGI rural locality 190450118 in Salinas Victoria, Nuevo León, inside the Monterrey metropolitan area, about forty kilometres north of the city. Census 2020: 633 inhabitants.",
          es: "Los Villarreales es la localidad rural INEGI 190450118 en Salinas Victoria, Nuevo León, dentro del área metropolitana de Monterrey, a unos cuarenta kilómetros al norte de la ciudad. Censo 2020: 633 habitantes.",
        },
        source: "INEGI, Censo de Población y Vivienda 2020.",
      },
      {
        text: {
          en: "Hotel La Mansión Villarreal occupies the 1893 warehouse of Fábricas Apolo / Droguería Apolo at Pino Suárez and Carlos Salazar Poniente, Centro. INAH catalogued the building; the 2009 paper already records it as a hotel.",
          es: "El hotel La Mansión Villarreal ocupa la bodega de 1893 de Fábricas Apolo / Droguería Apolo en Pino Suárez y Carlos Salazar Poniente, Centro. El INAH catalogó el edificio; el artículo de 2009 ya lo registra como hotel.",
        },
        source:
          "Garza Luna & Tovar Esquivel, Boletín de Monumentos Históricos 15 (2009); Catálogo Nacional de Monumentos Históricos Inmuebles, Nuevo León, t. IV (1985).",
      },
      {
        text: {
          en: "The state keeps, with “Reino de” dropped, the 1579 name Nuevo Reino de León, for the Kingdom of León — Felipe II’s birthplace. English gloss is New León, not New Lion. León is from Latin Legio.",
          es: "El estado guarda, con «Reino de» caído, el nombre de 1579 Nuevo Reino de León, por el Reino de León — lugar de nacimiento de Felipe II. La glosa inglesa es New León, no New Lion. León viene del latín Legio.",
        },
        source: "INAFED, “Nomenclatura — Nuevo León”; Wiktionary, Nuevo León.",
      },
    ],
    adjacent: [
      {
        text: {
          en: "Compiled public-name files put about a third of Mexican Villarreals in Nuevo León, with further clusters in Coahuila and Tamaulipas. In Monterrey municipality the name sits around rank 17 (~8,400; about 1 in 137). A distribution index, not an INEGI surname table.",
          es: "Ficheros compilados de nombres públicos ponen cerca de un tercio de los Villarreal mexicanos en Nuevo León, con más racimos en Coahuila y Tamaulipas. En el municipio de Monterrey el nombre se sienta hacia el rango 17 (~8,400; cerca de 1 en 137). Un índice de distribución, no una tabla de apellidos INEGI.",
        },
        source: "Forebears compilation of public name files.",
      },
      {
        text: {
          en: "Postal and land language also uses pueblo, ejido, Hacienda los Villarreales, ranchos and quintas (C.P. 65530). INAH writes the hotel Villa Real; the public sign is Villarreal.",
          es: "La lengua postal y de tierra usa también pueblo, ejido, Hacienda los Villarreales, ranchos y quintas (C.P. 65530). El INAH escribe el hotel Villa Real; el letrero público es Villarreal.",
        },
        source: "SEPOMEX listings; Garza Luna & Tovar Esquivel 2009 versus the current trade name.",
      },
      {
        text: {
          en: "Antonio I. Villarreal of Lampazos (1879–1944) was governor of Nuevo León in 1914. A named bearer in the state’s political record — not the namer of the hotel or the ejido.",
          es: "Antonio I. Villarreal de Lampazos (1879–1944) fue gobernador de Nuevo León en 1914. Un portador nombrado en el acta política del estado — no el nominador del hotel ni del ejido.",
        },
        source: "H. Congreso del Estado de Nuevo León, Archivo.",
      },
      {
        text: {
          en: "Carvajal, a Portuguese New Christian, obtained the 31 May 1579 capitulation for the Nuevo Reino de León and brought about a hundred families, many conversos from the León–Portugal border. The Inquisition later tried the household. Local pages title this “Un nuevo león.” A sixteenth-century converso colonization — not a modern Israeli state project.",
          es: "Carvajal, un cristiano nuevo portugués, obtuvo la capitulación del 31 de mayo de 1579 para el Nuevo Reino de León y trajo unas cien familias, muchas conversas de la frontera León–Portugal. La Inquisición juzgó después a la casa. Páginas locales titulan esto «Un nuevo león». Una colonización conversa del siglo XVI — no un proyecto de Estado israelí moderno.",
        },
        source:
          "Capitulación of 31 May 1579; INAH Historias 88 (2014); León Virtual, “Judíos leoneses fundadores de Nuevo León.”",
      },
    ],
    notInRecord: [
      {
        text: {
          en: "There is no municipality named Villarreal de los Monterrey. Infantes is a gazetteer suffix; Monterrey here is a claim of living geography.",
          es: "No hay municipio llamado Villarreal de los Monterrey. Infantes es un sufijo de gazetero; Monterrey aquí es una afirmación de geografía viva.",
        },
        source: "INEGI municipal catalogue.",
      },
      {
        text: {
          en: "The 1274 carta pobla does not name this city, this hotel, or this locality. Opposite transonymizations. Do not wind them as one clock.",
          es: "La carta pobla de 1274 no nombra esta ciudad, este hotel ni esta localidad. Transonimizaciones opuestas. No se den cuerda como un solo reloj.",
        },
        source: "Carta pobla of 20 February 1274.",
      },
      {
        text: {
          en: "English “New Lion” is a machine calque of Nuevo León (VisitMexico, August 2020, reverted). Hebrew lion language is Israel’s own clock. No record of a modern Israeli project to found or rename this state as a New Lion.",
          es: "El inglés «New Lion» es un calco de máquina de Nuevo León (VisitMexico, agosto de 2020, revertido). La lengua hebrea del león es el reloj propio de Israel. No hay acta de un proyecto israelí moderno de fundar o renombrar este estado como un New Lion.",
        },
        source: "VisitMexico English pages, 7 August 2020; Numbers 23:24 / Operation Rising Lion, 2025.",
      },
    ],
    whatWouldConfirm: {
      en: "A RAN expediente or colonial merced tying the ejido name to a dated Villarreal household; a notarized origin of the hotel’s trade name; INEGI or INE surname tables for Nuevo León rather than compiled indexes. The 1579 capitulation already names the kingdom; it does not need a modern Israeli sequel.",
      es: "Un expediente RAN o una merced colonial que ate el nombre del ejido a una casa Villarreal fechada; un origen notariado del nombre comercial del hotel; tablas de apellidos INEGI o INE para Nuevo León en vez de índices compilados. La capitulación de 1579 ya nombra el reino; no necesita una secuela israelí moderna.",
    },
  },
  {
    id: "identity-rights",
    title: {
      en: "Rights to history and identity",
      es: "Derechos a la historia y a la identidad",
    },
    stated: {
      en: "As a Villarreal de Monterrey with nearly thirty percent Indigenous American ancestry, I have rights to my history and identity. Forty percent of what I hold is a Hebrew-Egyptian mix from fifty thousand years: Israel, the Middle East, Italy, Iberia, hiding, until a snitch gave them up. Roberto Villarreal talked about the treasure — the pope, the Knights Templar.",
      es: "Como Villarreal de Monterrey con cerca de treinta por ciento de ancestría indígena americana, tengo derechos a mi historia y a mi identidad. El cuarenta por ciento de lo que llevo es una mezcla hebreo-egipcia de cincuenta mil años: Israel, el Medio Oriente, Italia, Iberia, escondite, hasta que un soplón los entregó. Roberto Villarreal habló del tesoro — el papa, los Caballeros Templarios.",
    },
    steelman: {
      en: "Take every piece at full strength. A living Monterrey Villarreal line can carry Indigenous American segments; northern New Spain sat on Coahuiltecan and neighboring ground. Mexico ratified ILO 169. Nuevo León law takes self-identification as the criterion for indigenous and Afromexican persons. Identity is not a courtesy. A separate Old World path — Levant, Italy, Iberia, hiding, denunciation — is the shape of Sephardic and converso memory already on this page. Philip IV and Clement V did seize the Temple. Family memory of a treasure talk is data. None of that is one origin. Fifty thousand years is a species clock, not a Hebrew people.",
      es: "Tómese cada pieza a plena fuerza. Una línea Villarreal viva de Monterrey puede llevar segmentos indígenas americanos; el norte de Nueva España se sentaba sobre suelo coahuilteco y vecino. México ratificó el Convenio 169 de la OIT. La ley de Nuevo León toma la autoidentificación como criterio para personas indígenas y afromexicanas. La identidad no es una cortesía. Un camino aparte del Viejo Mundo — Levante, Italia, Iberia, escondite, denuncia — es la forma de la memoria sefardí y conversa ya en esta página. Felipe IV y Clemente V sí prendieron el Temple. La memoria de familia de una charla del tesoro es dato. Nada de eso es un solo origen. Cincuenta mil años es un reloj de especie, no un pueblo hebreo.",
    },
    verdict: "split",
    inRecord: [
      {
        text: {
          en: "Mexico ratified ILO Convention 169 on 5 September 1990. UNDRIP (13 September 2007) names identity, culture, language, and lands among indigenous rights.",
          es: "México ratificó el Convenio 169 de la OIT el 5 de septiembre de 1990. La UNDRIP (13 de septiembre de 2007) nombra identidad, cultura, lengua y tierras entre los derechos indígenas.",
        },
        source: "ILO NORMLEX, C169, Mexico; United Nations Declaration on the Rights of Indigenous Peoples.",
      },
      {
        text: {
          en: "Nuevo León’s Ley de los Derechos de las Personas Indígenas y Afromexicanas (2012; reforma 2026) takes autoadscripción / autoidentificación as the criterion.",
          es: "La Ley de los Derechos de las Personas Indígenas y Afromexicanas de Nuevo León (2012; reforma 2026) toma la autoadscripción / autoidentificación como criterio.",
        },
        source: "H. Congreso del Estado de Nuevo León; Periódico Oficial 22 June 2012 and 16 January 2026.",
      },
      {
        text: {
          en: "The pre-colonial landscape of Nuevo León is Coahuiltecan and neighboring: Alazapas (including the ground of present San Nicolás de los Garza), Guachichiles in the south, Borrados and Tamaulipec groups in the east.",
          es: "El paisaje precolonial de Nuevo León es coahuilteco y vecino: alazapas (incluido el suelo del actual San Nicolás de los Garza), guachichiles al sur, borrados y grupos tamaulipecos al este.",
        },
        source: "Handbook of Texas, Coahuiltecan Indians; regional ethnography of northeastern Mexico.",
      },
    ],
    adjacent: [
      {
        text: {
          en: "A reported ~30% Indigenous American component in a living Monterrey Villarreal line is family-stated genetic data. This page does not republish a kit file. Date it as a later New World cohort, not as a 1274 clause.",
          es: "Un componente indígena americano reportado de ~30% en una línea Villarreal viva de Monterrey es dato genético dicho por la familia. Esta página no republica un archivo de kit. Féchese como cohorte posterior del Nuevo Mundo, no como cláusula de 1274.",
        },
        source: "Genetic clock of this dossier; consumer ancestry as a distribution map, not a peoplehood certificate.",
      },
      {
        text: {
          en: "Levant → Italy → Iberia is a real later Jewish diaspora shape. The dated Iberian shocks on this page are 1391, Tortosa, and 1492. The dated Nuevo León analog is Carvajal and the Inquisition — denunciation, not a 50,000-year snitch.",
          es: "Levante → Italia → Iberia es una forma real posterior de diáspora judía. Los golpes ibéricos fechados en esta página son 1391, Tortosa y 1492. El análogo fechado de Nuevo León es Carvajal y la Inquisición — denuncia, no un soplón de 50,000 años.",
        },
        source: "This report, parts IV, XVI, and the Monterrey node; capitulación of 1579.",
      },
      {
        text: {
          en: "Philip IV, who owed the Temple a fortune, had the order seized in 1307. Clement V dissolved it in 1312. Family memory of “the treasure, the pope, the Knights Templar” sits next to that seizure. It is not a named Villarreal hoard in the published acts.",
          es: "Felipe IV, que debía al Temple una fortuna, hizo prender la orden en 1307. Clemente V la disolvió en 1312. La memoria de familia de «el tesoro, el papa, los Caballeros Templarios» se sienta al lado de esa prisión. No es un tesoro Villarreal nombrado en las actas publicadas.",
        },
        source: "Templar essay on this site; Barber; papal suppression. Oral clock, not a treasure map.",
      },
    ],
    notInRecord: [
      {
        text: {
          en: "A Hebrew-Egyptian people at 50,000 years. Out-of-Africa expansions of modern humans are often dated around that depth. Hebrew and Egyptian as named ethnies are historical, in the last few thousand years. Do not wind the species clock as an ethnonym.",
          es: "Un pueblo hebreo-egipcio a 50,000 años. Las expansiones fuera de África de humanos modernos suelen fecharse hacia esa profundidad. Hebreo y egipcio como etnias nombradas son históricos, de los últimos milenios. No se dé cuerda al reloj de especie como etnónimo.",
        },
        source:
          "Standard paleoanthropology versus onomastic and biblical time. No cited kit or paper on this page dates Hebrew to 50,000 years.",
      },
      {
        text: {
          en: "A kit percentage does not, by itself, make a pueblo originario or an UNDRIP people. ILO 169 and Nuevo León law attach to peoples and to self-identification with them, not to an ancestry pie chart.",
          es: "Un porcentaje de kit no hace, por sí, un pueblo originario ni un pueblo UNDRIP. El Convenio 169 de la OIT y la ley de Nuevo León se atan a pueblos y a la autoidentificación con ellos, no a una gráfica de pastel de ancestría.",
        },
        source: "ILO 169, arts. 1; UNDRIP, arts. 3, 9, 33; Nuevo León law, autoadscripción.",
      },
      {
        text: {
          en: "No published token ties a Villarreal treasure to a pope or to a Temple hoard. Indigenous American ancestry, a Sephardic/converso stratum, and Templar frontier neighbors are three clocks. Gluing them to 1274 as one Israelite-Indigenous-Templar origin is not in the record.",
          es: "Ningún token publicado ata un tesoro Villarreal a un papa o a un tesoro del Temple. La ancestría indígena americana, un estrato sefardí/converso y los vecinos templarios de frontera son tres relojes. Pegarlos a 1274 como un solo origen israelita-indígena-templario no está en el acta.",
        },
        source: "The 1269–1274 grants; this dossier’s working rule.",
      },
    ],
    whatWouldConfirm: {
      en: "A dated kit or academic report for the stated line (kept as a family document, not as this page’s measurement); autoadscripción to a named people if the ILO 169 claim is made as a people; a family writing of the treasure talk with a date; a paper trail from a dated Iberian household to this Monterrey line. Rights to identity do not wait on those tokens. A merged origin story does.",
      es: "Un kit o informe académico fechado de la línea dicha (guardado como documento de familia, no como medición de esta página); autoadscripción a un pueblo nombrado si la afirmación del Convenio 169 se hace como pueblo; una escritura de familia de la charla del tesoro con fecha; un rastro documental de una casa ibérica fechada a esta línea de Monterrey. Los derechos a la identidad no esperan esos tokens. Un relato de origen fundido sí.",
    },
  },
];

export const CHARTER_CLAUSES: CharterClause[] = [
  {
    id: "preamble",
    kicker: { en: "Preamble", es: "Preámbulo" },
    title: { en: "Kings assign bounds and law", es: "Los reyes asignan términos y ley" },
    latin:
      "Quod cum ad reges et principes spectet populacionibus quas faciunt certos terminos asignare, et earum populacionibus foros seu consuetudines concedere, sub quibus vivere debeant atque regi.",
    english: {
      en: "Since it belongs to kings and princes to assign fixed bounds to the settlements they found, and to grant the settlers fueros or customs by which they are to live and be ruled.",
      es: "Puesto que toca a reyes y príncipes asignar términos fijos a las poblaciones que fundan, y otorgar a los pobladores fueros o costumbres por los que han de vivir y ser regidos.",
    },
    names: { en: "The office of king. No family.", es: "El oficio de rey. Ninguna familia." },
    doesNotName: {
      en: "No Templar, no Jew, no household called Villarreal.",
      es: "Ningún templario, ningún judío, ninguna casa llamada Villarreal.",
    },
  },
  {
    id: "grantor",
    kicker: { en: "Grantor", es: "Otorgante" },
    title: { en: "James, with his full titles", es: "Jaime, con todos sus títulos" },
    latin:
      "Nos, Jacobus, Dei gratia rex Aragonum, Maioricarum et Valencie, comes Barchinone et Urgelli, et dominus Montispesulani, per nos et nostros successores.",
    english: {
      en: "We, James, by the grace of God king of Aragon, Majorca, and Valencia, count of Barcelona and of Urgell, and lord of Montpellier, for ourselves and our successors.",
      es: "Nos, Jaime, por la gracia de Dios rey de Aragón, Mallorca y Valencia, conde de Barcelona y de Urgell, y señor de Montpellier, por nos y nuestros sucesores.",
    },
    names: {
      en: "James I as legal person. The Crown of Aragon’s stacked titles.",
      es: "Jaime I como persona legal. Los títulos apilados de la Corona de Aragón.",
    },
    doesNotName: {
      en: "Guillem de Montrodón, the Temple, or any namer besides the king.",
      es: "Guillem de Montrodón, el Temple, ni nominador alguno aparte del rey.",
    },
  },
  {
    id: "addressees",
    kicker: { en: "Addressees", es: "Destinatarios" },
    title: { en: "All and each of the settlers", es: "Todos y cada uno de los pobladores" },
    latin:
      "Damus et concedimus vobis universis et singulis populatoribus populacionibus Ville Regalis, quam in termino Burriane statuimus facienda.",
    english: {
      en: "We give and grant to you, all and each of the settlers of the settlement of Vila-real, which we have decided to establish in the term of Burriana.",
      es: "Damos y otorgamos a vos, todos y cada uno de los pobladores de la población de Vila-real, que hemos dispuesto fundar en el término de Burriana.",
    },
    names: {
      en: "A collective of populatoribus. The place-name Ville Regalis. The parent town Burriana.",
      es: "Un colectivo de populatoribus. El topónimo Ville Regalis. La villa madre Burriana.",
    },
    doesNotName: {
      en: "A lineage. A commander. A recruiter. Salomó Vidal is not in this clause.",
      es: "Un linaje. Un comendador. Un reclutador. Salomó Vidal no está en esta cláusula.",
    },
  },
  {
    id: "bounds",
    kicker: { en: "Bounds", es: "Términos" },
    title: { en: "From Burriana’s acequia to the Millars", es: "De la acequia de Burriana al Millars" },
    latin:
      "Terminos certos, scilicet a cequia majori Burriane, sursum versus dictam populacionem, et exinde, sicut afrontat cum termino de Nuules, et exinde usque a.l antiguor vocatum Misquitiella, quod est versus Bechin, et exinde usque ad mollonem cohopertum cabecii, in quo scinditur petra, et usque ad rivum de Millars.",
    english: {
      en: "Fixed bounds: from the Major Acequia of Burriana up toward the said settlement; then as it faces the term of Nules; then to the old place called Misquitiella, toward Betxí; then to the covered hill-marker where stone is cut; and to the river Millars.",
      es: "Términos fijos: de la acequia mayor de Burriana hacia arriba, hacia la dicha población; luego según afrenta con el término de Nules; luego hasta el lugar antiguo llamado Misquitiella, hacia Betxí; luego hasta el mojón cubierto del cabezo, en el que se corta piedra; y hasta el río Millars.",
    },
    names: {
      en: "Burriana, Nules, Misquitiella, Betxí, the Millars. Water and stone as legal edges.",
      es: "Burriana, Nules, Misquitiella, Betxí, el Millars. Agua y piedra como bordes legales.",
    },
    doesNotName: {
      en: "Xivert. Monzón. Israel. Any family seat.",
      es: "Xivert. Monzón. Israel. Ninguna sede de familia.",
    },
  },
  {
    id: "usufruct",
    kicker: { en: "Usufruct", es: "Usufructo" },
    title: { en: "Water, wood, grass, stone, lime", es: "Agua, leña, hierba, piedra, cal" },
    latin:
      "In quo quidem termino habeatis usum aquarum et lignorum et erbarum, et petre ac calcis, et aliorum necessariorum vobis seu usui vestro et ganatorum vestrorum, libere et in pace.",
    english: {
      en: "In that term you are to have use of waters, wood, grasses, stone and lime, and other things needful to you and your livestock, freely and in peace.",
      es: "En ese término habéis de tener uso de aguas, leña, hierbas, piedra y cal, y otras cosas necesarias a vos y a vuestro ganado, libremente y en paz.",
    },
    names: {
      en: "A farming and herding settlement, not a commandery.",
      es: "Una población de labranza y pasto, no una encomienda.",
    },
    doesNotName: {
      en: "Temple tithes. An aljama. A war-band.",
      es: "Diezmos del Temple. Una aljama. Una banda de guerra.",
    },
  },
  {
    id: "fuero",
    kicker: { en: "Law", es: "Ley" },
    title: { en: "Fuero of Aragon, as at Burriana", es: "Fuero de Aragón, como en Burriana" },
    latin:
      "Et nos de presenti ipsum forum et franquitatem, sicut ipsi homines Burriane ea a nobis habent, vobis et vestris concedimus atque donamus.",
    english: {
      en: "And we now grant you and yours the same fuero and franchise as the men of Burriana hold from us. (Other copies specify the fuero of Aragon.)",
      es: "Y ahora os otorgamos a vos y a los vuestros el mismo fuero y franquicia que los hombres de Burriana tienen de nos. (Otras copias especifican el fuero de Aragón.)",
    },
    names: {
      en: "Burriana as the legal template. Aragon as the law.",
      es: "Burriana como plantilla legal. Aragón como la ley.",
    },
    doesNotName: {
      en: "The Furs of Valencia as the local code in this clause — a deliberate older law for a new royal village inside a Valencian term.",
      es: "Los Furs de Valencia como código local en esta cláusula — una ley más vieja a propósito para una villa real nueva dentro de un término valenciano.",
    },
  },
  {
    id: "residence",
    kicker: { en: "Duty", es: "Deber" },
    title: { en: "Live there, and pay with the town", es: "Vivir ahí, y pagar con la villa" },
    latin:
      "Omnes et singuli illi qui hereditates vel possessiones infra dictos terminos habent seu habuerint, teneantur pro ipsis vobiscum … contribuere in peitis, cenis, monetatico et in redempcione exercituum … et vicinitate facere in dicta populacione Ville Regalis.",
    english: {
      en: "All who hold land inside the bounds must contribute with you in peitas, hospitality dues, monetaticum, and army-redemption, and must make neighborhood — reside — in Vila-real.",
      es: "Todos los que tengan tierra dentro de los términos deben contribuir con vos en peitas, cenas, monetático y redención de ejércitos, y deben hacer vecindad — residir — en Vila-real.",
    },
    names: {
      en: "A forced-residence clause. This is why courtiers later decline the terms.",
      es: "Una cláusula de residencia forzada. Por eso los cortesanos rechazan después los términos.",
    },
    doesNotName: {
      en: "Who those first holders actually were. The harshness is in the contract; the names are not.",
      es: "Quiénes eran de hecho esos primeros poseedores. La dureza está en el contrato; los nombres no.",
    },
  },
  {
    id: "market",
    kicker: { en: "Market", es: "Mercado" },
    title: { en: "Saturday market, yearly fair", es: "Mercado del sábado, feria anual" },
    latin:
      "Concedimus etiam vobis et vestris imperpetuum, mercatum tenendum in dicta villa seu populacione singulis diebus sabatinis, et firam, etiam semel quolibet anno … dummodo non sit eo tempore quo fira tenetur in Castilione vel locis aliis circunstantibus Burriane.",
    english: {
      en: "A weekly Saturday market in perpetuity, and a fair once a year, provided it does not clash with the fair at Castellón or other places around Burriana.",
      es: "Un mercado semanal del sábado a perpetuidad, y una feria una vez al año, siempre que no choque con la feria de Castellón u otros lugares alrededor de Burriana.",
    },
    names: {
      en: "Castellón as a commercial neighbor. Saturday as the market day.",
      es: "Castellón como vecino comercial. El sábado como día de mercado.",
    },
    doesNotName: {
      en: "A Jewish market. The Saturday grant is a Christian town’s week; it is not an aljama statute.",
      es: "Un mercado judío. La merced del sábado es la semana de una villa cristiana; no es un estatuto de aljama.",
    },
  },
  {
    id: "date",
    kicker: { en: "Date", es: "Fecha" },
    title: {
      en: "Valencia, tenth kalends of March 1273",
      es: "Valencia, décimas calendas de marzo de 1273",
    },
    latin: "Datum Valencie Xº kalendas marcii anno Domini Mº CC LXXº tercio.",
    english: {
      en: "Given at Valencia, 20 February 1274 in modern reckoning. The Incarnation year still began on 25 March, so the act is dated 1273.",
      es: "Dado en Valencia, 20 de febrero de 1274 en cómputo moderno. El año de la Encarnación aún empezaba el 25 de marzo, así que el acta se fecha 1273.",
    },
    names: {
      en: "The king is in Valencia, not on the Plana, the day he founds the town.",
      es: "El rey está en Valencia, no en la Plana, el día que funda la villa.",
    },
    doesNotName: {
      en: "Any local namer standing beside him.",
      es: "Ningún nominador local a su lado.",
    },
  },
];

export const WITNESSES: Witness[] = [
  {
    latin: "frater Arnaldus episcopus Valencie",
    name: { en: "Arnau, bishop of Valencia", es: "Arnau, obispo de Valencia" },
    role: {
      en: "First witness. Church of the capital, not the new village.",
      es: "Primer testigo. Iglesia de la capital, no de la villa nueva.",
    },
  },
  {
    latin: "Jacobus episcopus oscensis",
    name: { en: "James, bishop of Huesca", es: "Jaime, obispo de Huesca" },
    role: {
      en: "Aragonese bishop. The fuero of Aragon has a face in the room.",
      es: "Obispo aragonés. El fuero de Aragón tiene cara en la sala.",
    },
  },
  {
    latin: "Bernardus Guillermi de Entença",
    name: { en: "Bernat Guillem d’Entença", es: "Bernat Guillem d’Entença" },
    role: {
      en: "Magnate of the conquest generation. Landed power, not a toponymic lineage from the new town.",
      es: "Magnate de la generación de la conquista. Poder territorial, no un linaje toponímico de la villa nueva.",
    },
  },
  {
    latin: "Blaschus Maça",
    name: { en: "Blasco Maza", es: "Blasco Maza" },
    role: {
      en: "Royal man in the witness list.",
      es: "Hombre real en la lista de testigos.",
    },
  },
  {
    latin: "Sanccius Martinez de Oblitis",
    name: { en: "Sancho Martínez de Oblites", es: "Sancho Martínez de Oblites" },
    role: {
      en: "A Martínez in 1274 — patronymic “son of Martín,” not a link to Villarreal. Useful control: martial-looking surnames already walk these rooms.",
      es: "Un Martínez en 1274 — patronímico «hijo de Martín», no un vínculo con Villarreal. Control útil: apellidos de pinta marcial ya caminan estas salas.",
    },
  },
  {
    latin: "Simó de Sant Feliu",
    name: { en: "Simó de Sant Feliu", es: "Simó de Sant Feliu" },
    role: {
      en: "Notary. Closes the act. Named officer, not settler.",
      es: "Notario. Cierra el acta. Oficio nombrado, no poblador.",
    },
  },
];

export const CHRONICLE: ChronicleEvent[] = [
  {
    id: "muret",
    year: "1213",
    sort: 1213,
    title: { en: "Peter II dies at Muret", es: "Pedro II muere en Muret" },
    text: {
      en: "The king of Aragon falls in the Albigensian war. His son James is a child in the hands of Simon de Montfort.",
      es: "El rey de Aragón cae en la guerra albigense. Su hijo Jaime es un niño en manos de Simón de Montfort.",
    },
    place: "off",
    status: "in-record",
  },
  {
    id: "monzon",
    year: "1214",
    sort: 1214,
    title: { en: "Templar ward at Monzón", es: "Tutela templaria en Monzón" },
    text: {
      en: "Templars under Guillem de Montrodón recover the child and raise him at Monzón. Documented protection. Not a 1274 bargain.",
      es: "Templarios bajo Guillem de Montrodón recuperan al niño y lo crían en Monzón. Protección documentada. No un pacto de 1274.",
    },
    place: "off",
    status: "in-record",
  },
  {
    id: "burriana",
    year: "1233",
    sort: 1233,
    title: { en: "Burriana taken; Xivert to the Temple", es: "Burriana tomada; Xivert al Temple" },
    text: {
      en: "For help at the conquest, James grants Chivert/Xivert. The Order also takes a third of Burriana. Neighboring lordship begins.",
      es: "Por ayuda en la conquista, Jaime otorga Chivert/Xivert. La Orden toma también un tercio de Burriana. Empieza el señorío vecino.",
    },
    place: "xivert",
    status: "in-record",
  },
  {
    id: "precharter",
    year: "1269–72",
    sort: 1269,
    title: { en: "Villa Regalis before the charter", es: "Villa Regalis antes de la carta" },
    text: {
      en: "Infant Pere, as lord of Burriana, already grants at Villa Regalis. Paris the silversmith’s daughter and Ramon Escorna receive land; the acequia is under construction.",
      es: "El infante Pere, como señor de Burriana, ya otorga en Villa Regalis. La hija de Paris el platero y Ramon Escorna reciben tierra; la acequia está en obras.",
    },
    place: "vilareal",
    status: "in-record",
  },
  {
    id: "carta",
    year: "20 Feb 1274",
    sort: 1274,
    title: { en: "Carta pobla", es: "Carta pobla" },
    text: {
      en: "At Valencia, James founds Vila-real in Burriana’s term, fuero of Aragon, Saturday market, residence required. Witnesses are bishops and royal men.",
      es: "En Valencia, Jaime funda Vila-real en el término de Burriana, fuero de Aragón, mercado del sábado, residencia exigida. Los testigos son obispos y hombres reales.",
    },
    place: "vilareal",
    status: "in-record",
  },
  {
    id: "acequia",
    year: "12 May 1274",
    sort: 1274.5,
    title: { en: "Acequia funded through Peyronet", es: "Acequia financiada por Peyronet" },
    text: {
      en: "Jaime sells two years of Burriana rents so Frey Petrus Peyronet, his almoner, can apply the money to the new acequia of Ville Regalis.",
      es: "Jaime vende dos años de rentas de Burriana para que Frey Petrus Peyronet, su limosnero, aplique el dinero a la acequia nueva de Ville Regalis.",
    },
    place: "burriana",
    status: "in-record",
  },
  {
    id: "second-carta",
    year: "12 Sep 1279",
    sort: 1279,
    title: { en: "Second carta, under Peter III", es: "Segunda carta, bajo Pedro III" },
    text: {
      en: "The same Infant Pere, now king, re-issues privileges and invites Saracens from the Castalla–Biar frontier to come populate Vila-real. The first charter had not filled the town.",
      es: "El mismo infante Pere, ya rey, reexpide privilegios e invita a sarracenos de la frontera de Castalla–Biar a venir a poblar Vila-real. La primera carta no había llenado la villa.",
    },
    place: "vilareal",
    status: "in-record",
  },
  {
    id: "dissolved",
    year: "1312–19",
    sort: 1312,
    title: { en: "Temple ends; Montesa takes the goods", es: "El Temple acaba; Montesa toma los bienes" },
    text: {
      en: "The Order of the Temple is suppressed. In the kingdom of Valencia its estates pass to the new Order of Montesa. Any later “Templar family” is memory, not a living order.",
      es: "Se suprime la Orden del Temple. En el reino de Valencia sus estados pasan a la nueva Orden de Montesa. Cualquier «familia templaria» posterior es memoria, no una orden viva.",
    },
    place: "xivert",
    status: "in-record",
  },
  {
    id: "pogrom",
    year: "1391",
    sort: 1391,
    title: { en: "Assaults on aljamas", es: "Asaltos a las aljamas" },
    text: {
      en: "Valencia city’s Jewry is destroyed on 9 July. In Vila-real and Castellón the reported pattern is conversion or flight more than massacre. The aljama shrinks.",
      es: "La judería de la ciudad de Valencia se destruye el 9 de julio. En Vila-real y Castellón el patrón reportado es conversión o huida más que matanza. La aljama se encoge.",
    },
    place: "vilareal",
    status: "in-record",
  },
  {
    id: "tortosa",
    year: "1413–14",
    sort: 1413,
    title: { en: "Tortosa and the converso generation", es: "Tortosa y la generación conversa" },
    text: {
      en: "The Disputation of Tortosa and related pressure sit between the riots and the expulsion. Hinojosa’s converso notices run through 1423.",
      es: "La Disputa de Tortosa y la presión afín se sientan entre los tumultos y la expulsión. Los avisos conversos de Hinojosa corren hasta 1423.",
    },
    place: "off",
    status: "adjacent",
  },
  {
    id: "gap-1429",
    year: "1429",
    sort: 1429,
    title: { en: "Looked for; not found as an expulsion", es: "Buscado; no hallado como expulsión" },
    text: {
      en: "A family date of forced departure around 1429 was searched. No edict, riot, or named Villarreal leaving that year appears in the sources used here. The dated shocks remain 1391 and 1492. The year is kept on the line as a gap, not erased.",
      es: "Se buscó una fecha de familia de partida forzada hacia 1429. Ningún edicto, tumulto o Villarreal nombrado que se vaya ese año aparece en las fuentes usadas aquí. Los golpes fechados siguen siendo 1391 y 1492. El año se guarda en la línea como hueco, no se borra.",
    },
    place: "vilareal",
    status: "gap",
  },
  {
    id: "expulsion",
    year: "1492",
    sort: 1492,
    title: { en: "Expulsion", es: "Expulsión" },
    text: {
      en: "The Alhambra Decree. The remnant Jewish households of the Plana leave or convert. Sagunt, not Vila-real, is the large remaining community.",
      es: "El Decreto de la Alhambra. Las casas judías restantes de la Plana se van o se convierten. Sagunt, no Vila-real, es la comunidad grande que queda.",
    },
    place: "vilareal",
    status: "in-record",
  },
];

export const PLANA_PLACES: PlanaPlace[] = [
  {
    id: "millars",
    name: "Millars",
    role: { en: "Northern bound of the 1274 term", es: "Límite norte del término de 1274" },
    x: 280,
    y: 48,
  },
  {
    id: "xivert",
    name: "Xivert",
    role: {
      en: "Templar commandery, 1233 — Maestrazgo, not next door",
      es: "Encomienda templaria, 1233 — Maestrazgo, no al lado",
    },
    x: 430,
    y: 78,
  },
  {
    id: "betxi",
    name: "Betxí",
    role: { en: "West: Misquitiella “versus Bechin”", es: "Oeste: Misquitiella «versus Bechin»" },
    x: 90,
    y: 190,
  },
  {
    id: "vilareal",
    name: "Vila-real",
    role: { en: "Royal village in Burriana’s term", es: "Villa real en el término de Burriana" },
    x: 260,
    y: 188,
  },
  {
    id: "nules",
    name: "Nules",
    role: { en: "Southern neighbour named in the bounds", es: "Vecino del sur nombrado en los términos" },
    x: 160,
    y: 290,
  },
  {
    id: "burriana",
    name: "Burriana",
    role: {
      en: "Parent town; Temple share; acequia rents",
      es: "Villa madre; parte del Temple; rentas de la acequia",
    },
    x: 370,
    y: 268,
  },
  {
    id: "sea",
    name: "Mediterranean",
    role: { en: "East. The Plana faces the sea, not Israel.", es: "Este. La Plana mira al mar, no a Israel." },
    x: 560,
    y: 250,
  },
];

export const DNA_CLOCKS: DnaClock[] = [
  {
    id: "paper",
    title: { en: "Documentary clock", es: "Reloj documental" },
    ticks: { en: "Years on acts", es: "Años en las actas" },
    can: {
      en: "Name a person, an office, a place, a privilege, a tax. Tie two people if they co-witness.",
      es: "Nombrar a una persona, un oficio, un lugar, un privilegio, un impuesto. Atar a dos personas si co-testifican.",
    },
    cannot: {
      en: "Recover the unwritten broker, the kitchen conversation, or the story a family later tells.",
      es: "Recuperar al intermediario no escrito, la conversación de cocina o el relato que una familia cuenta después.",
    },
  },
  {
    id: "genome",
    title: { en: "Genetic clock", es: "Reloj genético" },
    ticks: { en: "Segments and haplogroups", es: "Segmentos y haplogrupos" },
    can: {
      en: "Show that a living line clusters with Iberian, Sephardic, Levantine, or Indigenous American reference groups. Estimate relatedness.",
      es: "Mostrar que una línea viva se agrupa con grupos de referencia ibéricos, sefardíes, levantinos o indígenas americanos. Estimar parentesco.",
    },
    cannot: {
      en: "Store the text of a charter, a 1274 meeting, a Templar warning, or a fifty-thousand-year Hebrew. A percentage is not a people.",
      es: "Guardar el texto de una carta, una reunión de 1274, un aviso templario o un hebreo de cincuenta mil años. Un porcentaje no es un pueblo.",
    },
  },
  {
    id: "oral",
    title: { en: "Family-memory clock", es: "Reloj de memoria de familia" },
    ticks: { en: "Compressed generations", es: "Generaciones comprimidas" },
    can: {
      en: "Keep pressure, departure, a martial self-image, a sense of being from a royal place or a Jewish line, a treasure talk, a right to the story.",
      es: "Guardar la presión, la partida, una imagen marcial de sí, el sentido de ser de un lugar real o de una línea judía, una charla del tesoro, un derecho al relato.",
    },
    cannot: {
      en: "Be trusted, unaided, for the exact year (1429 vs 1391 vs 1492), the legal cause (Temple bargain vs edict), or a species date worn as an ethnonym.",
      es: "Fiarse, sin ayuda, del año exacto (1429 contra 1391 contra 1492), de la causa legal (pacto del Temple contra edicto) o de una fecha de especie usada como etnónimo.",
    },
  },
  {
    id: "place",
    title: { en: "Place clock", es: "Reloj de lugar" },
    ticks: { en: "Gazetteer and later maps", es: "Gazetero y mapas posteriores" },
    can: {
      en: "Name a later density: Monterrey, Los Villarreales, a warehouse hotel. Keep 1274 and Nuevo León on separate maps.",
      es: "Nombrar una densidad posterior: Monterrey, Los Villarreales, un hotel en bodega. Guardar 1274 y Nuevo León en mapas distintos.",
    },
    cannot: {
      en: "Glue a Catalan charter to a Mexican census and call that one origin.",
      es: "Pegar una carta catalana a un censo mexicano y llamarlo un solo origen.",
    },
  },
];

export const VERDICT_LABEL: Record<ClaimVerdict, LocaleText> = {
  "in-record": { en: "In the record", es: "En el acta" },
  adjacent: { en: "Adjacent", es: "Al lado" },
  "not-in-record": { en: "Not in the record", es: "No en el acta" },
  split: { en: "Split — keep the parts", es: "Partido — guardar las partes" },
};

export const DOSSIER_COPY = {
  charterLead: {
    en: "Close reading of the 20 February 1274 carta pobla. Latin from the royal register. Each clause is asked the same two questions: who does it name, and who does it not.",
    es: "Lectura cerrada de la carta pobla del 20 de febrero de 1274. Latín del registro real. A cada cláusula se le hacen las mismas dos preguntas: a quién nombra, y a quién no.",
  },
  witnessLead: {
    en: "The men who stand in the room at Valencia. Sancho Martínez de Oblites is a control: a Martínez is already here in 1274, as a patronymic, not as a Villarreal.",
    es: "Los hombres que están en la sala en Valencia. Sancho Martínez de Oblites es un control: un Martínez ya está aquí en 1274, como patronímico, no como Villarreal.",
  },
  dnaLead: {
    en: "Four archives, four speeds. A genome can show that a living Villarreal line clusters with Sephardic, Levantine, or Indigenous American samples. It cannot remember a 1274 meeting, and it cannot mint fifty thousand years as Hebrew. Family memory often keeps the pressure and loses the year. Charters keep the year and lose the broker. Place keeps a later map and must not steal the founding. Identity is a right. It is still four clocks.",
    es: "Cuatro archivos, cuatro velocidades. Un genoma puede mostrar que una línea Villarreal viva se agrupa con muestras sefardíes, levantinas o indígenas americanas. No puede recordar una reunión de 1274, y no puede acuñar cincuenta mil años como hebreo. La memoria de familia suele guardar la presión y perder el año. Las cartas guardan el año y pierden al intermediario. El lugar guarda un mapa posterior y no debe robar la fundación. La identidad es un derecho. Siguen siendo cuatro relojes.",
  },
  dnaRule: {
    en: "The working rule: date each clock. A Sephardic cluster in a living line is adjacent evidence for a later Jewish or converso stratum of the surname. An Indigenous American third is a New World genetic clock. Neither is a naming clause for Vila-real. A kit percentage is not a people. The analogy to a model carrying early training data is exact about persistence and inexact about content — weights are not minutes of a meeting.",
    es: "La regla de trabajo: fechar cada reloj. Un racimo sefardí en una línea viva es evidencia al lado de un estrato judío o converso posterior del apellido. Un tercio indígena americano es un reloj genético del Nuevo Mundo. Ninguno es una cláusula de nombramiento de Vila-real. Un porcentaje de kit no es un pueblo. La analogía con un modelo que carga datos de entrenamiento temprano es exacta sobre la persistencia e inexacta sobre el contenido — los pesos no son minutas de una reunión.",
  },
  chronicleCaption: {
    en: "Schematic, not a surveyed map. Xivert sits in the Maestrazgo, kept on the same board as neighboring power, not as a next-door street.",
    es: "Esquema, no un mapa levantado. Xivert se sienta en el Maestrazgo, guardado en el mismo tablero como poder vecino, no como calle de al lado.",
  },
  chronicleHint: {
    en: "Click a year or a place. 1429 stays on the line as a searched gap, not as a deleted claim.",
    es: "Pulse un año o un lugar. 1429 se queda en la línea como hueco buscado, no como afirmación borrada.",
  },
  sea: { en: "Sea", es: "Mar" },
} as const;

