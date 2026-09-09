export type Block =
  | { type: "p"; text: string; dropCap?: boolean }
  | { type: "h3"; id: string; title: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "note"; text: string }
  | { type: "table"; id: string; caption: string; headers: string[]; rows: string[][] };

export type Section = {
  id: string;
  numeral: string;
  title: string;
  blocks: Block[];
};

export const META = {
  journal: "Roboto SAI Research",
  series: "Onomastics",
  title: "The Names Robot and Robert",
  subtitle: "Linguistic Origins, Historical Usage, and Cultural Migrations",
  credit: "Roboto SAI research with a Copilot",
  date: "September 2026",
  sourceCount: 37,
  description: "A research essay tracing Robot and Robert from Slavic labor vocabulary and Proto-Germanic fame-compounds through royalty, surnames, inscriptions, and sound-alike names with divergent meanings. Includes a 1274 Vila-real network atlas, a carta pobla close reading, a claim-by-claim dossier, and a later Monterrey migration node."
};
export const FINDINGS = [
  {
    kicker: "Not kin",
    text: "Robot and Robert rhyme in English. They are not etymological relatives."
  },
  {
    kicker: "1920 coinage",
    text: "Robot entered world languages from Čapek’s Czech play R.U.R., from Slavic robota, forced labor."
  },
  {
    kicker: "Bright fame",
    text: "Robert is Proto-Germanic *Hrōþiberhtaz — fame + bright — carried by dukes, kings, and saints."
  },
  {
    kicker: "Sound vs sense",
    text: "Pairs like Yisrael / Israel and Villarreal / Martinez show how homophony can hide separate histories."
  },
  {
    kicker: "Three clocks",
    text: "Documents, DNA, and family memory keep different time. Date each clock. Do not merge them."
  }
];
export const TOC = [
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
    title: "Three clocks"
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
export const SECTIONS: Section[] = [
  {
    id: "introduction",
    numeral: "",
    title: "Introduction",
    blocks: [
      {
        type: "p",
        dropCap: true,
        text: "Names are more than mere labels; they are vessels of history, culture, and identity. The study of names—encompassing their origins, transformations, and migrations—offers a unique lens through which to view human societies across time and space. This report explores the names Robot and Robert, tracing their etymological roots, historical usage, and cultural journeys."
      },
      {
        type: "p",
        text: "It also examines the phenomenon of similar-sounding names with divergent meanings, such as Yisroel and Israel or Villarreal and Martinez, and delves into the symbolic associations that names can carry, exemplified by the link between Martinez and Mars, the Roman god of war."
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
    blocks: [
      {
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
      },
      {
        type: "table",
        id: "table-key-events",
        caption: "Key events in the history of Robert, Robot, and Villarreal",
        headers: [
          "Date",
          "Event / context"
        ],
        rows: [
          [
            "9th–10th c.",
            "Early use of Robert in Germany and France"
          ],
          [
            "1000–1035",
            "Robert I, Duke of Normandy"
          ],
          [
            "1274",
            "Foundation of Villarreal by King James I"
          ],
          [
            "1233",
            "Templars receive Xivert after Burriana"
          ],
          [
            "1269–72",
            "Pre-charter grants at Villa Regalis"
          ],
          [
            "12 May 1274",
            "Acequia of Ville Regalis funded through Frey Petrus Peyronet"
          ],
          [
            "12 Sep 1279",
            "Peter III re-issues privileges; invites Saracens from Castalla–Biar"
          ],
          [
            "1312–19",
            "Temple suppressed; Valencian goods pass to Montesa"
          ],
          [
            "13th–14th c.",
            "Robert the Bruce, King of Scotland"
          ],
          [
            "1391",
            "Assaults on aljamas; Vila-real’s community shrinks by conversion and flight"
          ],
          [
            "1429",
            "Looked for as a dated expulsion; not found in the sources used here"
          ],
          [
            "1492",
            "Alhambra Decree; remnant Jewish households leave or convert"
          ],
          [
            "1607",
            "Jamestown, Virginia, named for James I of England"
          ],
          [
            "15th–16th c.",
            "Spread of Martinez and other Iberian surnames"
          ],
          [
            "1920",
            "Robot coined in Czech; enters English soon after"
          ],
          [
            "1893",
            "Fábricas Apolo warehouse in Monterrey centro; later Hotel La Mansión Villarreal"
          ],
          [
            "1914",
            "Antonio I. Villarreal, governor of Nuevo León — a named bearer, not a namer of places"
          ],
          [
            "2020",
            "INEGI census: Los Villarreales, Salinas Victoria, 633 inhabitants"
          ]
        ]
      }
    ]
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
        text: "Three archives keep different time. Charters tick in years and name offices. Genomes tick in segments and haplogroups. Family memory ticks in compressed generations: it often keeps the pressure and loses the year."
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
        rows: [
          [
            "Vila-real",
            "1274",
            "James I of Aragon",
            "Status / office",
            "Royal village (Villa Regalis)"
          ],
          [
            "Jamestown",
            "1607",
            "James I of England",
            "Given name",
            "James"
          ]
        ]
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
        text: "The names Robot and Robert exemplify the interplay of language, culture, and history in personal and collective identity. Robot, born from the Slavic tradition and popularized through Czech theater, has become a global symbol of technological transformation and ethical debate. Robert, rooted in Proto-Germanic and carried across Europe by royalty, saints, and commoners, illustrates the power of names to connect individuals to heritage and to broader historical narratives."
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
    blocks: [
      {
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
      }
    ]
  }
];
export const TIMELINE = [
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
  }
];
export const REFERENCES: { n: number; title: string; source: string; url: string }[] = [
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
  }
];
export const CITATION =
  "Roboto SAI, with a Copilot. “The Names Robot and Robert: Linguistic Origins, Historical Usage, and Cultural Migrations.” Roboto SAI Research, September 2026.";
