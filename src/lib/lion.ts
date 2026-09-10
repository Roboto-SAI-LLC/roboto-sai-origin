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
  journal: "Roboto SAI Research",
  series: "Methodology",
  title: "Gur Aryeh",
  subtitle: "Hebrew lion symbolism, from Judah’s blessing to a Jewish emblem",
  credit: "Roboto SAI research with a Copilot",
  date: "September 2026",
  sourceCount: 18,
  description:
    "An essay on the lion in Hebrew: Jacob’s blessing of Judah, the six biblical names, God as roar and as rest, the Temple and the merkabah, and how a tribal animal became a Jewish one.",
};

export const LION_FINDINGS = [
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
];

export const LION_TOC = [
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
];

export const BLESSING = {
  hebrew:
    "גּוּר אַרְיֵה יְהוּדָה מִטֶּרֶף בְּנִי עָלִיתָ כָּרַע רָבַץ כְּאַרְיֵה וּכְלָבִיא מִי יְקִימֶנּוּ",
  transliteration: "Gur aryeh Yehudah; mi-teref beni alita. Kara ravatz ke-aryeh u-khe-lavi, mi yekimenu.",
  english:
    "Judah is a lion’s cub; from prey, my son, you have gone up. He crouches, lies down like a lion, like a lioness — who will rouse him?",
  cite: "Genesis 49:9",
  scepterHebrew: "לֹא־יָסוּר שֵׁבֶט מִיהוּדָה",
  scepterEnglish: "The scepter shall not depart from Judah.",
  scepterCite: "Genesis 49:10",
};

export const COMMENTARIES = [
  {
    id: "pshat",
    label: "Plain sense",
    body: "Jacob reaches for a lion because a lion is royalty in the ancient Near East. The cub is speed and potential; the crouch is unchallenged rest after the kill. Rashbam reads the young lion as faster and more aggressive than an aging male — that is why Jacob says gur, not the old aryeh.",
  },
  {
    id: "rashi",
    label: "Rashi",
    body: "Rashi reads the cub-then-lion as David’s career: a whelp while Saul still reigned, a full lion once crowned. “From the prey” he ties to Judah withdrawing from the plot to kill Joseph, and to Judah’s admission over Tamar. The crouch is Solomon’s peace — every man under his vine.",
  },
  {
    id: "onkelos",
    label: "Onkelos",
    body: "Targum Onkelos turns the animal into a dynasty: first a ruler from Judah (David), then a king who grows from that house (the Messiah). The cub is the beginning of rule; the lion is its fullness.",
  },
  {
    id: "nation",
    label: "The people",
    body: "Balaam uses the same crouch-and-rise formula for Israel as a whole: “Behold, a people that rises like a lioness (lavi) and lifts itself like a lion (ari)” (Numbers 23:24). The 2025 Israel operation Am KeLavi took that line as a name.",
  },
] as const;

export type Lexeme = {
  id: string;
  hebrew: string;
  latin: string;
  gloss: string;
  count: string;
  body: string;
};

export const LEXICON: Lexeme[] = [
  {
    id: "aryeh",
    hebrew: "אַרְיֵה / אֲרִי",
    latin: "aryeh / ari",
    gloss: "The common, full-grown lion",
    count: "Most frequent",
    body: "Everyday biblical and modern Hebrew. Letters rearrange toward yirah (fear) and re’iyah (sight). Combined with Judah it yields the names Aryeh, Ari, Judah Aryeh, Aryeh Leib.",
  },
  {
    id: "kefir",
    hebrew: "כְּפִיר",
    latin: "kefir",
    gloss: "Young, vigorous male",
    count: "~31 times",
    body: "A lion in its prime, not a cub. Folk etymologies tie it to kofer (deny) — one who sees a lion denies his life — or to the mane that covers (k-p-r) the head. Still used as a given name.",
  },
  {
    id: "lavi",
    hebrew: "לָבִיא / לְבִיאָה",
    latin: "lavi / levi’ah",
    gloss: "Mature lion; lioness",
    count: "11 times",
    body: "The oldest Semitic root: Ugaritic lbu, Akkadian labbum, Arabic labbu’a. Cognate with Greek leon and English lion. Balaam’s “people like a lavi” chose this word, not aryeh, for fearlessness. In modern Hebrew levi’ah is the ordinary word for a lioness.",
  },
  {
    id: "layish",
    hebrew: "לַיִשׁ",
    latin: "layish",
    gloss: "Poetic; the old lion",
    count: "3 times",
    body: "Also the old name of Dan’s northern city, later Leshem. Proverbs 30:30: “the layish, mightiest among beasts, who does not turn back before any.”",
  },
  {
    id: "shachal",
    hebrew: "שַׁחַל",
    latin: "shachal",
    gloss: "Poetic, fierce",
    count: "7 times",
    body: "Rashi on Job: aryeh is the old one, shachal the middle, kefir the cub. Elsewhere the word can shade toward a large snake (Psalm 91:13). Hosea uses it of God: “I will be like a shachal to Ephraim.”",
  },
  {
    id: "gur",
    hebrew: "גּוּר",
    latin: "gur",
    gloss: "Cub, whelp",
    count: "Opening of Gen. 49:9",
    body: "Almost always a lion’s whelp when paired with aryeh. Genesis Rabbah: Judah was given the might of a lion and the boldness of its cubs. Midrash Aggadah: first gur as rule, then aryeh as king. A seventh rare term, shachatz, appears in Job 28:8.",
  },
];

export const REGISTERS = {
  crown: {
    label: "Crown",
    kicker: "Who holds the power",
    items: [
      {
        cite: "Genesis 49:9–10",
        text: "Judah as cub and crouching king; the scepter does not depart.",
      },
      {
        cite: "Numbers 23:24",
        text: "Israel as a people that rises like a lioness.",
      },
      {
        cite: "2 Samuel 17:10",
        text: "David’s heart “is as the heart of a lion.”",
      },
      {
        cite: "Isaiah 31:4",
        text: "The Lord of Hosts comes down to fight on Zion as a lion growling over prey.",
      },
      {
        cite: "Proverbs 28:1",
        text: "The righteous are bold as a lion.",
      },
      {
        cite: "Orach Chayim 1:1",
        text: "“Strengthen yourself like a lion to get up in the morning to serve your Creator.”",
      },
    ],
  },
  threat: {
    label: "Threat",
    kicker: "When the roar is against you",
    items: [
      {
        cite: "Psalm 22:14",
        text: "They open their mouths at me like a ravening, roaring lion.",
      },
      {
        cite: "Hosea 13:7–8",
        text: "“I will be like a lion to them… I will devour them.” God as judgment.",
      },
      {
        cite: "Amos 3:8",
        text: "“The lion has roared — who will not fear? The Lord God has spoken — who will not prophesy?”",
      },
      {
        cite: "Proverbs 19:12",
        text: "A king’s wrath is like the roaring of a lion.",
      },
      {
        cite: "Ezekiel 22:25",
        text: "False prophets as a roaring lion tearing prey.",
      },
      {
        cite: "Sanhedrin 64a",
        text: "The lion as the spirit of temptation and seduction to idolatry.",
      },
    ],
  },
} as const;

export const MERKABAH_FACES = [
  {
    id: "human",
    hebrew: "אָדָם",
    label: "Human",
    place: "Front",
    body: "The facing side of each hayyah. Later readers put Jacob’s face on the throne. In the Zohar the human face is the animal soul of man, holy or unholy depending on the chariot it serves.",
  },
  {
    id: "lion",
    hebrew: "אַרְיֵה",
    label: "Lion",
    place: "Right",
    body: "Ezekiel 1:10 puts the lion on the right. Chagigah 13b: “The king among animals is the lion.” Kabbalah reads this face as ratzo — the soul running upward. Wild kosher animals are said to descend from it.",
  },
  {
    id: "ox",
    hebrew: "שׁוֹר",
    label: "Ox",
    place: "Left",
    body: "The face of settled strength. Domestic kosher animals descend from it. In Ezekiel 10 the ox is replaced by a cherub — the left side can be judged, covered, or renamed.",
  },
  {
    id: "eagle",
    hebrew: "נֶשֶׁר",
    label: "Eagle",
    place: "Back",
    body: "King of the birds, paired with the lion in David’s lament over Saul and Jonathan: “swifter than eagles, stronger than lions.” The pair still flanks Torah arks.",
  },
] as const;

export const PERSONAL_NAMES = [
  { name: "Aryeh", hebrew: "אַרְיֵה", sense: "Lion. The ordinary given name." },
  { name: "Ari", hebrew: "אֲרִי", sense: "Short form of aryeh." },
  { name: "Ariel", hebrew: "אֲרִיאֵל", sense: "Lion of God. Also Isaiah’s name for Jerusalem and Ezekiel’s altar-hearth." },
  { name: "Kfir", hebrew: "כְּפִיר", sense: "Young lion." },
  { name: "Lavi", hebrew: "לָבִיא", sense: "Lion; the deep Semitic word." },
  { name: "Aryeh Leib", hebrew: "אַרְיֵה לֵיבּ", sense: "Lion-lion: Hebrew plus Yiddish/German. Judah Leib is the same stack with the tribal name." },
];

export const LION_TIMELINE = [
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
];

export const LION_SECTIONS: LionSection[] = [
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
        text: "This sits beside the Robot / Robert essay as onomastics, not as theology. Ariel, Aryeh, and Leib are names. Judah is a name that became a people. The animal is how Hebrew said kingship out loud.",
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
];

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

export const LION_CITATION =
  "Roboto SAI research with a Copilot. “Gur Aryeh: Hebrew lion symbolism, from Judah’s blessing to a Jewish emblem.” Roboto SAI Research, September 2026. https://roboto-sai.org/lion";
