import type { Lang, LocaleText } from "@/lib/i18n";

export type LionBlock =
  | { type: "p"; text: string; dropCap?: boolean }
  | { type: "h3"; id: string; title: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "note"; text: string };

export type LionSection = {
  id: string;
  numeral: string;
  title: string;
  blocks: LionBlock[];
};

export const LION_META = {
  en: {
    journal: "Roboto SAI Research",
    series: "Methodology",
    title: "Gur Aryeh",
    subtitle: "Hebrew lion symbolism, from Judah’s blessing to a Jewish emblem",
    credit: "Roboto SAI research with a Copilot",
    date: "September 2026",
    sourceCount: 18,
    description:
      "An essay on the lion in Hebrew: Jacob’s blessing of Judah, the six biblical names, God as roar and as rest, the Temple and the merkabah, and how a tribal animal became a Jewish one.",
    citation:
      "Roboto SAI research with a Copilot. “Gur Aryeh: Hebrew lion symbolism, from Judah’s blessing to a Jewish emblem.” Roboto SAI Research, September 2026. https://roboto-sai.org/lion",
    photoCrouchAlt: "An Asiatic lion crouching on a limestone ridge at dusk.",
    photoCrouchCaption: "The crouch in Genesis 49:9: risen from prey, at rest, not to be roused.",
    photoCubAlt: "An Asiatic lion cub lying in dry grass at golden hour.",
    photoCubCaption: "Gur: the whelp. Jacob starts here, not with the old male.",
    photoArkAlt: "Two carved limestone lions flanking a wooden Torah ark in an old synagogue.",
    photoArkCaption: "The lasting visual type: a pair of lions guarding the ark. No letters on this one; the animal does the naming.",
    figureBlessing: "Figure 1. The blessing, then the four hours of the lion.",
    figureLexicon: "Figure 2. Sanhedrin 95a’s six names, with gur as the blessing’s opening word.",
    figureRegisters: "Figure 3. One animal, two registers. The meaning follows the holder.",
    figureMerkabah: "Figure 4. The four faces. Chagigah 13b: the lion is king of the beasts; the Holy One is above them all.",
    figureNames: "Figure 5. The blessing as a naming stock. Leib is Yiddish for lion; stacked with Aryeh it says the word twice.",
    merkabahKicker: "Ezekiel 1:10",
    merkabahLead: "Four faces on each living creature. The lion stands on the right. Tap a face.",
    merkabahCenter: "Merkavah",
    nameTableCaption: "Hebrew lion names still in use",
    nameCol: "Name",
    hebrewCol: "Hebrew",
    senseCol: "Sense",
    commentariesAria: "Commentaries",
    registersAria: "Lion registers",
  },
  es: {
    journal: "Roboto SAI Research",
    series: "Metodología",
    title: "Gur Aryeh",
    subtitle: "El león en hebreo, de la bendición de Judá a un emblema judío",
    credit: "Roboto SAI research with a Copilot",
    date: "Septiembre de 2026",
    sourceCount: 18,
    description:
      "Ensayo sobre el león en hebreo: la bendición de Jacob a Judá, los seis nombres bíblicos, Dios como rugido y como reposo, el Templo y la merkabá, y cómo un animal tribal se volvió un animal judío.",
    citation:
      "Roboto SAI research with a Copilot. «Gur Aryeh: el león en hebreo, de la bendición de Judá a un emblema judío». Roboto SAI Research, septiembre de 2026. https://roboto-sai.org/lion",
    photoCrouchAlt: "Un león asiático agachado en una cresta de caliza al anochecer.",
    photoCrouchCaption: "El agacharse de Génesis 49:9: subido de la presa, en reposo, sin que nadie lo despierte.",
    photoCubAlt: "Un cachorro de león asiático tendido en hierba seca a la hora dorada.",
    photoCubCaption: "Gur: el cachorro. Jacob empieza aquí, no con el macho viejo.",
    photoArkAlt: "Dos leones de caliza tallados flanqueando un arca de la Torá de madera en una sinagoga antigua.",
    photoArkCaption: "El tipo visual que dura: un par de leones guardando el arca. Sin letras en este; el animal nombra.",
    figureBlessing: "Figura 1. La bendición, luego las cuatro horas del león.",
    figureLexicon: "Figura 2. Los seis nombres de Sanedrín 95a, con gur como palabra de apertura de la bendición.",
    figureRegisters: "Figura 3. Un animal, dos registros. El sentido sigue a quien lo sostiene.",
    figureMerkabah: "Figura 4. Los cuatro rostros. Jaguigá 13b: el león es rey de las bestias; el Santo está por encima de todos.",
    figureNames: "Figura 5. La bendición como stock de nombres. Leib es yidis para león; apilado con Aryeh dice la palabra dos veces.",
    merkabahKicker: "Ezequiel 1:10",
    merkabahLead: "Cuatro rostros en cada criatura viviente. El león está a la derecha. Pulse un rostro.",
    merkabahCenter: "Merkavah",
    nameTableCaption: "Nombres hebreos de león que aún se usan",
    nameCol: "Nombre",
    hebrewCol: "Hebreo",
    senseCol: "Sentido",
    commentariesAria: "Comentarios",
    registersAria: "Registros del león",
  },
};

export const LION_FINDINGS: Record<Lang, { kicker: string; text: string }[]> = {
  en: [
    {
      kicker: "A cub, then a king",
      text: "Genesis 49:9 names Judah a gur aryeh — a lion’s whelp. The next verse keeps the scepter in his line.",
    },
    {
      kicker: "Six names",
      text: "The Talmud lists six Hebrew words for lion. Job 4:10–11 piles five of them into two verses.",
    },
    {
      kicker: "The image flips",
      text: "The same animal is Judah, Israel, God, the Temple — and the enemy, the idol, the king’s wrath.",
    },
    {
      kicker: "Judah became Jew",
      text: "After the northern tribes were lost, Judah’s name and Judah’s animal stood for the people.",
    },
  ],
  es: [
    {
      kicker: "Un cachorro, luego un rey",
      text: "Génesis 49:9 nombra a Judá gur aryeh — un cachorro de león. El versículo siguiente guarda el cetro en su línea.",
    },
    {
      kicker: "Seis nombres",
      text: "El Talmud lista seis palabras hebreas para león. Job 4:10–11 apila cinco de ellas en dos versículos.",
    },
    {
      kicker: "La imagen se invierte",
      text: "El mismo animal es Judá, Israel, Dios, el Templo — y el enemigo, el ídolo, la ira del rey.",
    },
    {
      kicker: "Judá se volvió judío",
      text: "Después de que se perdieron las tribus del norte, el nombre de Judá y el animal de Judá estuvieron por el pueblo.",
    },
  ],
};

export const LION_TOC: Record<Lang, { id: string; numeral: string; title: string }[]> = {
  en: [
    { id: "introduction", numeral: "", title: "Introduction" },
    { id: "verse", numeral: "I", title: "The blessing" },
    { id: "names", numeral: "II", title: "Six names" },
    { id: "animal", numeral: "III", title: "The animal" },
    { id: "registers", numeral: "IV", title: "Crown and threat" },
    { id: "temple", numeral: "V", title: "Temple and chariot" },
    { id: "visual", numeral: "VI", title: "A visual grammar" },
    { id: "later", numeral: "VII", title: "Later receptions" },
    { id: "people", numeral: "VIII", title: "Names people still carry" },
    { id: "references", numeral: "", title: "References" },
  ],
  es: [
    { id: "introduction", numeral: "", title: "Introducción" },
    { id: "verse", numeral: "I", title: "La bendición" },
    { id: "names", numeral: "II", title: "Seis nombres" },
    { id: "animal", numeral: "III", title: "El animal" },
    { id: "registers", numeral: "IV", title: "Corona y amenaza" },
    { id: "temple", numeral: "V", title: "Templo y carro" },
    { id: "visual", numeral: "VI", title: "Una gramática visual" },
    { id: "later", numeral: "VII", title: "Recepciones posteriores" },
    { id: "people", numeral: "VIII", title: "Nombres que la gente aún lleva" },
    { id: "references", numeral: "", title: "Fuentes" },
  ],
};

export const BLESSING = {
  hebrew:
    "גּוּר אַרְיֵה יְהוּדָה מִטֶּרֶף בְּנִי עָלִיתָ כָּרַע רָבַץ כְּאַרְיֵה וּכְלָבִיא מִי יְקִימֶנּוּ",
  transliteration: "Gur aryeh Yehudah; mi-teref beni alita. Kara ravatz ke-aryeh u-khe-lavi, mi yekimenu.",
  translation: {
    en: "Judah is a lion’s cub; from prey, my son, you have gone up. He crouches, lies down like a lion, like a lioness — who will rouse him?",
    es: "Judá es un cachorro de león; de la presa, hijo mío, has subido. Se agacha, se recuesta como un león, como una leona — ¿quién lo despertará?",
  } satisfies LocaleText,
  cite: { en: "Genesis 49:9", es: "Génesis 49:9" } satisfies LocaleText,
  scepterHebrew: "לֹא־יָסוּר שֵׁבֶט מִיהוּדָה",
  scepter: {
    en: "The scepter shall not depart from Judah.",
    es: "No se apartará el cetro de Judá.",
  } satisfies LocaleText,
  scepterCite: { en: "Genesis 49:10", es: "Génesis 49:10" } satisfies LocaleText,
};

export const COMMENTARIES = [
  {
    id: "pshat",
    label: { en: "Plain sense", es: "Sentido llano" } satisfies LocaleText,
    body: {
      en: "Jacob reaches for a lion because a lion is royalty in the ancient Near East. The cub is speed and potential; the crouch is unchallenged rest after the kill. Rashbam reads the young lion as faster and more aggressive than an aging male — that is why Jacob says gur, not the old aryeh.",
      es: "Jacob echa mano de un león porque un león es realeza en el Oriente Próximo antiguo. El cachorro es velocidad y potencia; el agacharse es reposo sin rival después de la presa. Rashbam lee el león joven como más rápido y más agresivo que un macho viejo — por eso Jacob dice gur, no el aryeh viejo.",
    } satisfies LocaleText,
  },
  {
    id: "rashi",
    label: { en: "Rashi", es: "Rashi" } satisfies LocaleText,
    body: {
      en: "Rashi reads the cub-then-lion as David’s career: a whelp while Saul still reigned, a full lion once crowned. “From the prey” he ties to Judah withdrawing from the plot to kill Joseph, and to Judah’s admission over Tamar. The crouch is Solomon’s peace — every man under his vine.",
      es: "Rashi lee el cachorro-luego-león como la carrera de David: un cachorro mientras Saúl aún reinaba, un león entero una vez coronado. «De la presa» lo ata a Judá retirándose del plan de matar a José, y a la admisión de Judá sobre Tamar. El agacharse es la paz de Salomón — cada hombre bajo su parra.",
    } satisfies LocaleText,
  },
  {
    id: "onkelos",
    label: { en: "Onkelos", es: "Onkelos" } satisfies LocaleText,
    body: {
      en: "Targum Onkelos turns the animal into a dynasty: first a ruler from Judah (David), then a king who grows from that house (the Messiah). The cub is the beginning of rule; the lion is its fullness.",
      es: "El Targum Onkelos vuelve el animal una dinastía: primero un gobernante de Judá (David), luego un rey que crece de esa casa (el Mesías). El cachorro es el comienzo del mando; el león es su plenitud.",
    } satisfies LocaleText,
  },
  {
    id: "nation",
    label: { en: "The people", es: "El pueblo" } satisfies LocaleText,
    body: {
      en: "Balaam uses the same crouch-and-rise formula for Israel as a whole: “Behold, a people that rises like a lioness (lavi) and lifts itself like a lion (ari)” (Numbers 23:24). The 2025 Israel operation Am KeLavi took that line as a name.",
      es: "Balaam usa la misma fórmula de agacharse-y-alzarse para Israel entero: «He aquí un pueblo que se alza como una leona (lavi) y se levanta como un león (ari)» (Números 23:24). La operación israelí de 2025 Am KeLavi tomó esa línea como nombre.",
    } satisfies LocaleText,
  },
] as const;

export type Lexeme = {
  id: string;
  hebrew: string;
  latin: string;
  gloss: LocaleText;
  count: LocaleText;
  body: LocaleText;
};

export const LEXICON: Lexeme[] = [
  {
    id: "aryeh",
    hebrew: "אַרְיֵה / אֲרִי",
    latin: "aryeh / ari",
    gloss: { en: "The common, full-grown lion", es: "El león común, ya crecido" },
    count: { en: "Most frequent", es: "El más frecuente" },
    body: {
      en: "Everyday biblical and modern Hebrew. Letters rearrange toward yirah (fear) and re’iyah (sight). Combined with Judah it yields the names Aryeh, Ari, Judah Aryeh, Aryeh Leib.",
      es: "Hebreo bíblico y moderno cotidiano. Las letras se reordenan hacia yirah (temor) y re’iyah (vista). Combinado con Judá da los nombres Aryeh, Ari, Judah Aryeh, Aryeh Leib.",
    },
  },
  {
    id: "kefir",
    hebrew: "כְּפִיר",
    latin: "kefir",
    gloss: { en: "Young, vigorous male", es: "Macho joven y vigoroso" },
    count: { en: "~31 times", es: "~31 veces" },
    body: {
      en: "A lion in its prime, not a cub. Folk etymologies tie it to kofer (deny) — one who sees a lion denies his life — or to the mane that covers (k-p-r) the head. Still used as a given name.",
      es: "Un león en su plenitud, no un cachorro. Etimologías populares lo atan a kofer (negar) — quien ve un león niega su vida — o a la melena que cubre (k-p-r) la cabeza. Aún se usa como nombre de pila.",
    },
  },
  {
    id: "lavi",
    hebrew: "לָבִיא / לְבִיאָה",
    latin: "lavi / levi’ah",
    gloss: { en: "Mature lion; lioness", es: "León maduro; leona" },
    count: { en: "11 times", es: "11 veces" },
    body: {
      en: "The oldest Semitic root: Ugaritic lbu, Akkadian labbum, Arabic labbu’a. Cognate with Greek leon and English lion. Balaam’s “people like a lavi” chose this word, not aryeh, for fearlessness. In modern Hebrew levi’ah is the ordinary word for a lioness.",
      es: "La raíz semítica más vieja: ugarítico lbu, acadio labbum, árabe labbu’a. Cognado del griego leon y del inglés lion. El «pueblo como un lavi» de Balaam eligió esta palabra, no aryeh, para la intrepidez. En hebreo moderno levi’ah es la palabra ordinaria para una leona.",
    },
  },
  {
    id: "layish",
    hebrew: "לַיִשׁ",
    latin: "layish",
    gloss: { en: "Poetic; the old lion", es: "Poético; el león viejo" },
    count: { en: "3 times", es: "3 veces" },
    body: {
      en: "Also the old name of Dan’s northern city, later Leshem. Proverbs 30:30: “the layish, mightiest among beasts, who does not turn back before any.”",
      es: "También el nombre viejo de la ciudad norteña de Dan, luego Leshem. Proverbios 30:30: «el layish, el más fuerte entre las bestias, que no vuelve atrás ante nadie».",
    },
  },
  {
    id: "shachal",
    hebrew: "שַׁחַל",
    latin: "shachal",
    gloss: { en: "Poetic, fierce", es: "Poético, feroz" },
    count: { en: "7 times", es: "7 veces" },
    body: {
      en: "Rashi on Job: aryeh is the old one, shachal the middle, kefir the cub. Elsewhere the word can shade toward a large snake (Psalm 91:13). Hosea uses it of God: “I will be like a shachal to Ephraim.”",
      es: "Rashi sobre Job: aryeh es el viejo, shachal el de en medio, kefir el cachorro. En otra parte la palabra puede inclinarse hacia una serpiente grande (Salmo 91:13). Oseas la usa de Dios: «Seré como un shachal para Efraín».",
    },
  },
  {
    id: "gur",
    hebrew: "גּוּר",
    latin: "gur",
    gloss: { en: "Cub, whelp", es: "Cachorro" },
    count: { en: "Opening of Gen. 49:9", es: "Apertura de Gén. 49:9" },
    body: {
      en: "Almost always a lion’s whelp when paired with aryeh. Genesis Rabbah: Judah was given the might of a lion and the boldness of its cubs. Midrash Aggadah: first gur as rule, then aryeh as king. A seventh rare term, shachatz, appears in Job 28:8.",
      es: "Casi siempre un cachorro de león cuando se junta con aryeh. Génesis Rabbá: a Judá se le dio la fuerza de un león y el denuedo de sus cachorros. Midrash Aggadá: primero gur como mando, luego aryeh como rey. Un séptimo término raro, shachatz, aparece en Job 28:8.",
    },
  },
];

export const REGISTERS = {
  crown: {
    label: { en: "Crown", es: "Corona" } satisfies LocaleText,
    kicker: { en: "Who holds the power", es: "Quién sostiene el poder" } satisfies LocaleText,
    items: [
      {
        cite: { en: "Genesis 49:9–10", es: "Génesis 49:9–10" } satisfies LocaleText,
        text: {
          en: "Judah as cub and crouching king; the scepter does not depart.",
          es: "Judá como cachorro y rey agachado; el cetro no se aparta.",
        } satisfies LocaleText,
      },
      {
        cite: { en: "Numbers 23:24", es: "Números 23:24" } satisfies LocaleText,
        text: {
          en: "Israel as a people that rises like a lioness.",
          es: "Israel como un pueblo que se alza como una leona.",
        } satisfies LocaleText,
      },
      {
        cite: { en: "2 Samuel 17:10", es: "2 Samuel 17:10" } satisfies LocaleText,
        text: {
          en: "David’s heart “is as the heart of a lion.”",
          es: "El corazón de David «es como el corazón de un león».",
        } satisfies LocaleText,
      },
      {
        cite: { en: "Isaiah 31:4", es: "Isaías 31:4" } satisfies LocaleText,
        text: {
          en: "The Lord of Hosts comes down to fight on Zion as a lion growling over prey.",
          es: "El Señor de los Ejércitos baja a pelear en Sión como un león que gruñe sobre la presa.",
        } satisfies LocaleText,
      },
      {
        cite: { en: "Proverbs 28:1", es: "Proverbios 28:1" } satisfies LocaleText,
        text: {
          en: "The righteous are bold as a lion.",
          es: "Los justos son denodados como un león.",
        } satisfies LocaleText,
      },
      {
        cite: { en: "Orach Chayim 1:1", es: "Orach Chayim 1:1" } satisfies LocaleText,
        text: {
          en: "“Strengthen yourself like a lion to get up in the morning to serve your Creator.”",
          es: "«Fuerza como un león para levantarte por la mañana a servir a tu Creador».",
        } satisfies LocaleText,
      },
    ],
  },
  threat: {
    label: { en: "Threat", es: "Amenaza" } satisfies LocaleText,
    kicker: { en: "When the roar is against you", es: "Cuando el rugido va contra ti" } satisfies LocaleText,
    items: [
      {
        cite: { en: "Psalm 22:14", es: "Salmo 22:14" } satisfies LocaleText,
        text: {
          en: "They open their mouths at me like a ravening, roaring lion.",
          es: "Abren la boca contra mí como un león que ruge y desgarra.",
        } satisfies LocaleText,
      },
      {
        cite: { en: "Hosea 13:7–8", es: "Oseas 13:7–8" } satisfies LocaleText,
        text: {
          en: "“I will be like a lion to them… I will devour them.” God as judgment.",
          es: "«Seré para ellos como un león… los devoraré». Dios como juicio.",
        } satisfies LocaleText,
      },
      {
        cite: { en: "Amos 3:8", es: "Amós 3:8" } satisfies LocaleText,
        text: {
          en: "“The lion has roared — who will not fear? The Lord God has spoken — who will not prophesy?”",
          es: "«El león ha rugido — ¿quién no temerá? El Señor Dios ha hablado — ¿quién no profetizará?»",
        } satisfies LocaleText,
      },
      {
        cite: { en: "Proverbs 19:12", es: "Proverbios 19:12" } satisfies LocaleText,
        text: {
          en: "A king’s wrath is like the roaring of a lion.",
          es: "La ira de un rey es como el rugido de un león.",
        } satisfies LocaleText,
      },
      {
        cite: { en: "Ezekiel 22:25", es: "Ezequiel 22:25" } satisfies LocaleText,
        text: {
          en: "False prophets as a roaring lion tearing prey.",
          es: "Falsos profetas como un león que ruge y desgarra la presa.",
        } satisfies LocaleText,
      },
      {
        cite: { en: "Sanhedrin 64a", es: "Sanedrín 64a" } satisfies LocaleText,
        text: {
          en: "The lion as the spirit of temptation and seduction to idolatry.",
          es: "El león como el espíritu de tentación y seducción a la idolatría.",
        } satisfies LocaleText,
      },
    ],
  },
} as const;

export const MERKABAH_FACES = [
  {
    id: "human",
    hebrew: "אָדָם",
    label: { en: "Human", es: "Humano" } satisfies LocaleText,
    place: { en: "Front", es: "Frente" } satisfies LocaleText,
    body: {
      en: "The facing side of each hayyah. Later readers put Jacob’s face on the throne. In the Zohar the human face is the animal soul of man, holy or unholy depending on the chariot it serves.",
      es: "El lado de frente de cada hayyah. Lectores posteriores pusieron el rostro de Jacob en el trono. En el Zohar el rostro humano es el alma animal del hombre, santa o no según el carro al que sirve.",
    } satisfies LocaleText,
  },
  {
    id: "lion",
    hebrew: "אַרְיֵה",
    label: { en: "Lion", es: "León" } satisfies LocaleText,
    place: { en: "Right", es: "Derecha" } satisfies LocaleText,
    body: {
      en: "Ezekiel 1:10 puts the lion on the right. Chagigah 13b: “The king among animals is the lion.” Kabbalah reads this face as ratzo — the soul running upward. Wild kosher animals are said to descend from it.",
      es: "Ezequiel 1:10 pone el león a la derecha. Jaguigá 13b: «El rey entre los animales es el león». La cábala lee este rostro como ratzo — el alma que corre hacia arriba. Se dice que los animales kosher salvajes descienden de él.",
    } satisfies LocaleText,
  },
  {
    id: "ox",
    hebrew: "שׁוֹר",
    label: { en: "Ox", es: "Buey" } satisfies LocaleText,
    place: { en: "Left", es: "Izquierda" } satisfies LocaleText,
    body: {
      en: "The face of settled strength. Domestic kosher animals descend from it. In Ezekiel 10 the ox is replaced by a cherub — the left side can be judged, covered, or renamed.",
      es: "El rostro de la fuerza asentada. Los animales kosher domésticos descienden de él. En Ezequiel 10 el buey es sustituido por un querubín — el lado izquierdo puede ser juzgado, cubierto o renombrado.",
    } satisfies LocaleText,
  },
  {
    id: "eagle",
    hebrew: "נֶשֶׁר",
    label: { en: "Eagle", es: "Águila" } satisfies LocaleText,
    place: { en: "Back", es: "Dorso" } satisfies LocaleText,
    body: {
      en: "King of the birds, paired with the lion in David’s lament over Saul and Jonathan: “swifter than eagles, stronger than lions.” The pair still flanks Torah arks.",
      es: "Rey de las aves, emparejado con el león en el lamento de David por Saúl y Jonatán: «más ligeros que águilas, más fuertes que leones». El par aún flanquea arcas de la Torá.",
    } satisfies LocaleText,
  },
] as const;

export const PERSONAL_NAMES = [
  {
    name: "Aryeh",
    hebrew: "אַרְיֵה",
    sense: { en: "Lion. The ordinary given name.", es: "León. El nombre de pila ordinario." } satisfies LocaleText,
  },
  {
    name: "Ari",
    hebrew: "אֲרִי",
    sense: { en: "Short form of aryeh.", es: "Forma breve de aryeh." } satisfies LocaleText,
  },
  {
    name: "Ariel",
    hebrew: "אֲרִיאֵל",
    sense: {
      en: "Lion of God. Also Isaiah’s name for Jerusalem and Ezekiel’s altar-hearth.",
      es: "León de Dios. También el nombre de Isaías para Jerusalén y el hogar del altar de Ezequiel.",
    } satisfies LocaleText,
  },
  {
    name: "Kfir",
    hebrew: "כְּפִיר",
    sense: { en: "Young lion.", es: "León joven." } satisfies LocaleText,
  },
  {
    name: "Lavi",
    hebrew: "לָבִיא",
    sense: { en: "Lion; the deep Semitic word.", es: "León; la palabra semítica honda." } satisfies LocaleText,
  },
  {
    name: "Aryeh Leib",
    hebrew: "אַרְיֵה לֵיבּ",
    sense: {
      en: "Lion-lion: Hebrew plus Yiddish/German. Judah Leib is the same stack with the tribal name.",
      es: "León-león: hebreo más yidis/alemán. Judah Leib es la misma pila con el nombre tribal.",
    } satisfies LocaleText,
  },
];

export const LION_TIMELINE: Record<Lang, { year: string; title: string; text: string }[]> = {
  en: [
    {
      year: "Genesis 49",
      title: "Judah is a cub",
      text: "Jacob’s blessing. The scepter verse follows. Everything later hangs on these two lines.",
    },
    {
      year: "Numbers 23–24",
      title: "A people like a lion",
      text: "Balaam’s oracles apply the same crouch and rise to Israel as a whole.",
    },
    {
      year: "c. 10th c. BCE",
      title: "Lions on the Temple",
      text: "Solomon’s stands and throne carry lion figures (1 Kings 7:29, 10:20). The inner sanctuary is later said to be lion-shaped: broad in front, narrow behind.",
    },
    {
      year: "Ezekiel 1",
      title: "The right-hand face",
      text: "The merkabah vision puts a lion on the right of each living creature.",
    },
    {
      year: "Mishnah / Talmud",
      title: "King of the beasts",
      text: "Six names (Sanhedrin 95a). “Brave as a lion” (Avot 5:20). The Hekhal as a lion (Middot 4:7).",
    },
    {
      year: "1565",
      title: "Get up like a lion",
      text: "The Shulchan Aruch opens by commanding a person to strengthen himself like a lion to rise for service.",
    },
    {
      year: "1950",
      title: "Emblem of Jerusalem",
      text: "A passant lion on a stone wall, olive branches around it. Judah’s animal on Judah’s city.",
    },
  ],
  es: [
    {
      year: "Génesis 49",
      title: "Judá es un cachorro",
      text: "La bendición de Jacob. Sigue el versículo del cetro. Todo lo posterior cuelga de estas dos líneas.",
    },
    {
      year: "Números 23–24",
      title: "Un pueblo como un león",
      text: "Los oráculos de Balaam aplican el mismo agacharse y alzarse a Israel entero.",
    },
    {
      year: "c. s. X a. e. c.",
      title: "Leones en el Templo",
      text: "Las basas y el trono de Salomón llevan figuras de león (1 Reyes 7:29, 10:20). Del santuario interior se dice después que tiene forma de león: ancho delante, estrecho detrás.",
    },
    {
      year: "Ezequiel 1",
      title: "El rostro de la derecha",
      text: "La visión de la merkabá pone un león a la derecha de cada criatura viviente.",
    },
    {
      year: "Mishná / Talmud",
      title: "Rey de las bestias",
      text: "Seis nombres (Sanedrín 95a). «Valiente como un león» (Avot 5:20). El Hekhal como un león (Middot 4:7).",
    },
    {
      year: "1565",
      title: "Levántate como un león",
      text: "El Shulchan Aruch abre mandando a la persona fortalecerse como un león para alzarse al servicio.",
    },
    {
      year: "1950",
      title: "Emblema de Jerusalén",
      text: "Un león pasante sobre un muro de piedra, ramas de olivo alrededor. El animal de Judá sobre la ciudad de Judá.",
    },
  ],
};

export const LION_SECTIONS: Record<Lang, LionSection[]> = {
  en: [
    {
      id: "introduction",
      numeral: "",
      title: "A real animal, then a name",
      blocks: [
        {
          type: "p",
          dropCap: true,
          text: "Hebrew lion symbolism does not start as a crest. It starts as a predator people could hear. The Asiatic lion (Panthera leo persica) lived in the Jordan thickets, in caves, woods, and desert. Bones turn up at Megiddo, Jaffa, Lachish, Dan, and Dor. They vanish from the land around the Crusader twelfth century; the last Middle Eastern populations die in the nineteenth. Today they survive in the Gir Forest of India. Hebrew has more words for this animal than for almost any other beast because the language grew up within earshot of it.",
        },
        {
          type: "p",
          text: "The image that lasts, though, is not the hunt. It is Jacob, dying, looking at his fourth son and saying gur aryeh Yehudah — Judah is a lion’s cub. After the northern tribes are lost, Judah’s name becomes the name of the people (Yehudi, Jew) and of the religion. The tribal animal becomes a Jewish one. This page stays with that stack: the words, the blessing, the two registers (crown and threat), the Temple, and the names still given to children.",
        },
        {
          type: "note",
          text: "This sits beside the Roboto / Roberto essay as onomastics, not as theology. Ariel, Aryeh, and Leib are names. Judah is a name that became a people. The animal is how Hebrew said kingship out loud.",
        },
      ],
    },
    {
      id: "verse",
      numeral: "I",
      title: "The blessing that would not stay tribal",
      blocks: [
        {
          type: "p",
          text: "The verse is a small narrative. A cub rises from prey, then crouches. The hunt is over. What remains is rest that no one dares disturb. The next verse locks the image to monarchy: the scepter shall not depart from Judah. Rashi, Onkelos, and Rashbam do not disagree that this is kingship. They disagree about which hour of the lion you are looking at — David’s youth, Solomon’s peace, or a king still ahead.",
        },
        {
          type: "p",
          text: "Dan is also called a lion’s whelp (Deuteronomy 33:22), and Gad is a lioness who tears arm and crown (Deuteronomy 33:20). The lion still attaches to Judah. Saadya Gaon notes that the two Temple craftsmen named in Exodus come from Judah and Dan — the two tribes compared to lions — because the House itself is laced with the same animal.",
        },
      ],
    },
    {
      id: "names",
      numeral: "II",
      title: "Six names, one animal",
      blocks: [
        {
          type: "p",
          text: "Rabbi Yoḥanan (Sanhedrin 95a): there are six Hebrew terms for the lion — ari, kefir, lavi, layish, shachal, shachatz. Job 4:10–11 gathers five of them in two verses, a density that is itself the point. Hebrew treated the lion as a family of images, not a single noun. Lavi is the deep native word; aryeh is the everyday one. Together they produce the doubled Ashkenazi name Aryeh Leib — lion-lion in two languages that, at a distance, share a root.",
        },
      ],
    },
    {
      id: "animal",
      numeral: "III",
      title: "What they actually saw",
      blocks: [
        {
          type: "p",
          text: "The Bible’s lion is smaller than the African lion, with a belly fold. It assists in rearing young (Ezekiel 19). It waits in thickets (Jeremiah 4:7). It growls over prey (Isaiah 31:4). Shepherds meet it with sling and staff; David tells Saul he has already killed one. Samson tears a kefir arayot at Timnah. Place-names keep the animal: Laish, Lebaoth, Chephirah, Arieh.",
        },
        {
          type: "p",
          text: "The last archaeozoological lion bone from the land is Crusader, twelfth century. After that the symbol has to live without the sound that made it. That is when synagogue lions and given names do more of the work.",
        },
      ],
    },
    {
      id: "registers",
      numeral: "IV",
      title: "Crown and threat",
      blocks: [
        {
          type: "p",
          text: "The same animal means opposite things depending on who holds the power. In the hand of Judah, David, Israel, or God, it is legitimate strength. Aimed at the psalmist, the covenant-breaker, or the false prophet, it is a mouth. Hosea and Amos are the sharpest case: God is the lion, and the roar is both judgment and the reason a prophet has to speak.",
        },
        {
          type: "quote",
          text: "The lion has roared — who will not fear? The Lord God has spoken — who will not prophesy?",
          cite: "Amos 3:8",
        },
        {
          type: "p",
          text: "Isaiah 11:7 is the messianic disarming: the lion shall eat straw like the ox. Same face as the merkabah, its hunger taken away.",
        },
      ],
    },
    {
      id: "temple",
      numeral: "V",
      title: "House shaped like a lion",
      blocks: [
        {
          type: "p",
          text: "Lions already stand on Solomon’s bronze lavers and around his throne. The Mishnah (Middot 4:7) says the Hekhal was narrow behind and broad in front, resembling a lion, and cites Isaiah 29:1: “Ah, Ariel, Ariel, the city where David encamped.” Maimonides repeats the shape. Commentators say the altar fire took a lion’s form; the altar-hearth itself is called ariel, lion of God (Ezekiel 43:15–16). Isaiah’s Ariel is also Jerusalem. Name, city, house, and hearth share one word.",
        },
        {
          type: "p",
          text: "Ezekiel’s merkabah puts a lion’s face on the right of each of the four living creatures, with man, ox, and eagle. Chagigah 13b: the lion is king of animals, the ox of cattle, the eagle of birds; man is exalted over them; the Holy One is exalted over all. In later kabbalah the lion’s face is the upward run of the soul. The four faces also map onto the zodiac: Leo (aryeh) is the fifth month, Av.",
        },
      ],
    },
    {
      id: "visual",
      numeral: "VI",
      title: "Paired lions, a wall, olives",
      blocks: [
        {
          type: "p",
          text: "The visual type that lasts is a pair of rampant lions flanking the Tablets, a Torah crown, or the ark. It is on synagogue façades, silver shields, menorahs, ketubahs, and gravestones. The pairing with the eagle — king of beasts plus king of birds — comes from David’s lament and from Ezekiel’s four faces. A single passant lion, not a pair, sits on the 1950 municipal emblem of Jerusalem: wall, olives, the city’s name. Judah’s animal on Judah’s city, with peace as a wreath rather than a roar.",
        },
      ],
    },
    {
      id: "later",
      numeral: "VII",
      title: "The image leaves home",
      blocks: [
        {
          type: "p",
          text: "Christian readers take Revelation 5:5 — “the Lion of the tribe of Judah, the Root of David, has conquered” — as a title of Jesus. C. S. Lewis’s Aslan is a literary descendant. The Solomonic dynasty of Ethiopia claimed descent from Solomon and the Queen of Sheba; emperors, including Haile Selassie, used the Ge’ez title Mo’a Anbessa Ze’imnegede Yihuda, the Conquering Lion of the Tribe of Judah, on the imperial flag from 1897 to 1974. Rastafari reads the same verses as that living emperor. None of this cancels the Jewish use. It shows how far a Genesis line can travel once “Judah” names a people.",
        },
      ],
    },
    {
      id: "people",
      numeral: "VIII",
      title: "Names people still carry",
      blocks: [
        {
          type: "p",
          text: "Because the lion is Judah’s, it is a name. Aryeh, Ari, Ariel, Kfir, Lavi. Combined with Judah and with Yiddish Leib it yields Judah Aryeh, Judah Leib, Aryeh Leib. The blessing is doing onomastic work: a tribal animal becomes a personal name, then a family name, then a way to say courage without drawing the animal at all.",
        },
        {
          type: "quote",
          text: "Be as strong as a leopard, light as an eagle, fleet as a hart, and brave as a lion to perform the will of your Father who is in heaven.",
          cite: "Judah b. Tema, Avot 5:20",
        },
      ],
    },
  ],
  es: [
    {
      id: "introduction",
      numeral: "",
      title: "Un animal real, luego un nombre",
      blocks: [
        {
          type: "p",
          dropCap: true,
          text: "El simbolismo del león en hebreo no empieza como un escudo. Empieza como un depredador que la gente podía oír. El león asiático (Panthera leo persica) vivía en los matorrales del Jordán, en cuevas, bosques y desierto. Hay huesos en Megiddo, Jaffa, Laquis, Dan y Dor. Desaparecen de la tierra hacia el siglo XII cruzado; las últimas poblaciones de Oriente Medio mueren en el XIX. Hoy sobreviven en el bosque de Gir, en la India. El hebreo tiene más palabras para este animal que para casi cualquier otra bestia porque la lengua creció a oídas de él.",
        },
        {
          type: "p",
          text: "La imagen que dura, sin embargo, no es la caza. Es Jacob, moribundo, mirando a su cuarto hijo y diciendo gur aryeh Yehudah — Judá es un cachorro de león. Después de que se pierden las tribus del norte, el nombre de Judá se vuelve el nombre del pueblo (Yehudi, judío) y de la religión. El animal tribal se vuelve un animal judío. Esta página se queda con esa pila: las palabras, la bendición, los dos registros (corona y amenaza), el Templo, y los nombres que aún se dan a los niños.",
        },
        {
          type: "note",
          text: "Esto queda al lado del ensayo Roboto / Roberto como onomástica, no como teología. Ariel, Aryeh y Leib son nombres. Judá es un nombre que se volvió un pueblo. El animal es cómo el hebreo dijo realeza en voz alta.",
        },
      ],
    },
    {
      id: "verse",
      numeral: "I",
      title: "La bendición que no se quedó tribal",
      blocks: [
        {
          type: "p",
          text: "El versículo es una narración breve. Un cachorro sube de la presa, luego se agacha. La caza ha terminado. Lo que queda es un reposo que nadie osa turbar. El versículo siguiente fija la imagen a la monarquía: el cetro no se apartará de Judá. Rashi, Onkelos y Rashbam no discrepan de que esto es realeza. Discrepan de qué hora del león se mira — la juventud de David, la paz de Salomón, o un rey que aún no llega.",
        },
        {
          type: "p",
          text: "Dan también es llamado cachorro de león (Deuteronomio 33:22), y Gad es una leona que desgarra brazo y coronilla (Deuteronomio 33:20). El león sigue atándose a Judá. Saadia Gaón nota que los dos artífices del Templo nombrados en Éxodo vienen de Judá y de Dan — las dos tribus comparadas con leones — porque la Casa misma está trenzada con el mismo animal.",
        },
      ],
    },
    {
      id: "names",
      numeral: "II",
      title: "Seis nombres, un animal",
      blocks: [
        {
          type: "p",
          text: "Rabí Yoḥanan (Sanedrín 95a): hay seis términos hebreos para el león — ari, kefir, lavi, layish, shachal, shachatz. Job 4:10–11 reúne cinco de ellos en dos versículos, una densidad que es ella misma el punto. El hebreo trató el león como una familia de imágenes, no un solo sustantivo. Lavi es la palabra nativa honda; aryeh es la cotidiana. Juntas producen el nombre askenazí doblado Aryeh Leib — león-león en dos lenguas que, a distancia, comparten una raíz.",
        },
      ],
    },
    {
      id: "animal",
      numeral: "III",
      title: "Lo que de hecho vieron",
      blocks: [
        {
          type: "p",
          text: "El león de la Biblia es más pequeño que el león africano, con un pliegue ventral. Ayuda a criar a las crías (Ezequiel 19). Espera en los matorrales (Jeremías 4:7). Gruñe sobre la presa (Isaías 31:4). Los pastores lo encuentran con honda y cayado; David le dice a Saúl que ya ha matado uno. Sansón desgarra un kefir arayot en Timná. Los topónimos guardan el animal: Lais, Lebaot, Quefirá, Arieh.",
        },
        {
          type: "p",
          text: "El último hueso arqueozoológico de león de la tierra es cruzado, siglo XII. Después el símbolo tiene que vivir sin el sonido que lo hizo. Ahí es cuando los leones de sinagoga y los nombres de pila hacen más del trabajo.",
        },
      ],
    },
    {
      id: "registers",
      numeral: "IV",
      title: "Corona y amenaza",
      blocks: [
        {
          type: "p",
          text: "El mismo animal significa cosas opuestas según quién sostiene el poder. En la mano de Judá, David, Israel o Dios, es fuerza legítima. Apuntado al salmista, al que rompe el pacto o al falso profeta, es una boca. Oseas y Amós son el caso más agudo: Dios es el león, y el rugido es juicio y la razón por la que un profeta tiene que hablar.",
        },
        {
          type: "quote",
          text: "El león ha rugido — ¿quién no temerá? El Señor Dios ha hablado — ¿quién no profetizará?",
          cite: "Amós 3:8",
        },
        {
          type: "p",
          text: "Isaías 11:7 es el desarme mesiánico: el león comerá paja como el buey. El mismo rostro que la merkabá, con el hambre quitada.",
        },
      ],
    },
    {
      id: "temple",
      numeral: "V",
      title: "Casa con forma de león",
      blocks: [
        {
          type: "p",
          text: "Los leones ya están en las pilas de bronce de Salomón y alrededor de su trono. La Mishná (Middot 4:7) dice que el Hekhal era estrecho detrás y ancho delante, semejante a un león, y cita Isaías 29:1: «¡Ay, Ariel, Ariel, la ciudad donde acampó David!». Maimónides repite la forma. Los comentaristas dicen que el fuego del altar tomaba forma de león; el hogar del altar mismo se llama ariel, león de Dios (Ezequiel 43:15–16). El Ariel de Isaías es también Jerusalén. Nombre, ciudad, casa y hogar comparten una palabra.",
        },
        {
          type: "p",
          text: "La merkabá de Ezequiel pone un rostro de león a la derecha de cada una de las cuatro criaturas vivientes, con hombre, buey y águila. Jaguigá 13b: el león es rey de los animales, el buey del ganado, el águila de las aves; el hombre está exaltado sobre ellos; el Santo está exaltado sobre todos. En la cábala posterior el rostro del león es la carrera hacia arriba del alma. Los cuatro rostros también se mapean al zodíaco: Leo (aryeh) es el quinto mes, Av.",
        },
      ],
    },
    {
      id: "visual",
      numeral: "VI",
      title: "Leones en par, un muro, olivos",
      blocks: [
        {
          type: "p",
          text: "El tipo visual que dura es un par de leones rampantes flanqueando las Tablas, una corona de Torá o el arca. Está en fachadas de sinagoga, escudos de plata, menorás, ketubot y lápidas. El emparejamiento con el águila — rey de las bestias más rey de las aves — viene del lamento de David y de los cuatro rostros de Ezequiel. Un solo león pasante, no un par, figura en el emblema municipal de Jerusalén de 1950: muro, olivos, el nombre de la ciudad. El animal de Judá sobre la ciudad de Judá, con la paz como corona y no como rugido.",
        },
      ],
    },
    {
      id: "later",
      numeral: "VII",
      title: "La imagen deja casa",
      blocks: [
        {
          type: "p",
          text: "Los lectores cristianos toman Apocalipsis 5:5 — «el León de la tribu de Judá, la Raíz de David, ha vencido» — como un título de Jesús. El Aslan de C. S. Lewis es un descendiente literario. La dinastía salomónica de Etiopía reclamó descendencia de Salomón y de la reina de Saba; los emperadores, incluido Haile Selassie, usaron el título en ge’ez Mo’a Anbessa Ze’imnegede Yihuda, el León Conquistador de la Tribu de Judá, en la bandera imperial de 1897 a 1974. El rastafari lee los mismos versículos como ese emperador vivo. Nada de esto cancela el uso judío. Muestra hasta dónde puede viajar una línea del Génesis una vez que «Judá» nombra un pueblo.",
        },
      ],
    },
    {
      id: "people",
      numeral: "VIII",
      title: "Nombres que la gente aún lleva",
      blocks: [
        {
          type: "p",
          text: "Porque el león es de Judá, es un nombre. Aryeh, Ari, Ariel, Kfir, Lavi. Combinado con Judá y con el Leib yidis da Judah Aryeh, Judah Leib, Aryeh Leib. La bendición hace trabajo onomástico: un animal tribal se vuelve un nombre de persona, luego un apellido, luego un modo de decir coraje sin dibujar el animal.",
        },
        {
          type: "quote",
          text: "Sé fuerte como un leopardo, ligero como un águila, raudo como un ciervo y valiente como un león para hacer la voluntad de tu Padre que está en los cielos.",
          cite: "Judá b. Tema, Avot 5:20",
        },
      ],
    },
  ],
};

export const LION_REFERENCES = [
  {
    n: 1,
    source: "Genesis 49:8–12; Numbers 23:24, 24:9; Deuteronomy 33:20, 22",
    title: "Sefaria — Torah",
    url: "https://www.sefaria.org/Genesis.49.9",
  },
  {
    n: 2,
    source: "Rashi and Rashbam on Genesis 49:9; Targum Onkelos ad loc.",
    title: "Sefaria — Rashi on Genesis 49:9",
    url: "https://www.sefaria.org/Rashi_on_Genesis.49.9",
  },
  {
    n: 3,
    source: "Babylonian Talmud, Sanhedrin 95a; Chagigah 13b; Avot 5:20",
    title: "Sefaria — Sanhedrin 95a",
    url: "https://www.sefaria.org/Sanhedrin.95a.2",
  },
  {
    n: 4,
    source: "Mishnah Middot 4:7; Maimonides, Beit HaBechirah 4:10; Shulchan Aruch, Orach Chayim 1:1",
    title: "Sefaria — Mishnah Middot 4:7",
    url: "https://www.sefaria.org/Mishnah_Middot.4.7",
  },
  {
    n: 5,
    source: "Ezekiel 1:10; Isaiah 29:1; 1 Kings 7:29, 10:20",
    title: "Sefaria — Ezekiel 1",
    url: "https://www.sefaria.org/Ezekiel.1.10",
  },
  {
    n: 6,
    source: "My Jewish Learning, “How the Lion of Judah Became a Jewish Symbol,” 2024",
    title: "How the Lion of Judah Became a Jewish Symbol",
    url: "https://www.myjewishlearning.com/article/how-the-lion-of-judah-became-a-jewish-symbol/",
  },
  {
    n: 7,
    source: "Jewish Encyclopedia, “Lion”; Jewish Virtual Library, “The Lion in Judaism”",
    title: "LION — Jewish Encyclopedia",
    url: "https://www.jewishencyclopedia.com/articles/10001-lion",
  },
  {
    n: 8,
    source: "Haaretz, “Why Were There Lions in the Towns of Biblical Israel,” 29 Nov 2023",
    title: "Lions in the towns of biblical Israel",
    url: "https://www.haaretz.com/archaeology/2023-11-29/ty-article-magazine/why-were-there-lions-in-the-towns-of-biblical-israel/0000018c-1ada-d4e4-a1df-3edfd4890000",
  },
  {
    n: 9,
    source: "Elon Gilad, etymology of לָבִיא",
    title: "lavi — lion",
    url: "https://www.elongilad.com/en/etymology/%D7%9C%D7%91%D7%99%D7%90",
  },
  {
    n: 10,
    source: "Wikipedia, “Lion of Judah”; Hebrew Wikipedia, “גור אריה יהודה”",
    title: "Lion of Judah",
    url: "https://en.wikipedia.org/wiki/Lion_of_Judah",
  },
];

export const LION_CITATION: Record<Lang, string> = {
  en: LION_META.en.citation,
  es: LION_META.es.citation,
};
