export type OnomasticNote = {
  query: string;
  queryEs: string;
  tokens: { en: string; es: string };
  roots: { en: string; es: string };
  clock: { en: string; es: string };
  split: { en: string; es: string };
};

export const SCRIPTURE_NOTES: OnomasticNote[] = [
  {
    query: "John 1:1-5",
    queryEs: "Juan 1:1-5",
    tokens: {
      en: "Word (Logos). No personal name. No toponym. No Villarreal.",
      es: "Verbo (Logos). Sin nombre de persona. Sin topónimo. Sin Villarreal.",
    },
    roots: {
      en: "Greek lógos beside Latin nōmen and Hebrew shem. Name as utterance.",
      es: "Griego lógos junto al latín nōmen y el hebreo shem. El nombre como enunciado.",
    },
    clock: {
      en: "Comparative text for Act I (Labor Nominis). Not the 1274 charter clock.",
      es: "Texto comparativo del acto I (Labor Nominis). No es el reloj de la carta de 1274.",
    },
    split: {
      en: "The verse attests a Greek name for speech. It does not date Vila-real or the house line Roberto = Roboto.",
      es: "El versículo atestigua un nombre griego del habla. No fecha Vila-real ni la línea Roberto = Roboto.",
    },
  },
  {
    query: "Genesis 2:19-20",
    queryEs: "Génesis 2:19-20",
    tokens: {
      en: "Adam. Naming of living creatures. Labor of names as an act in the text.",
      es: "Adán. Nombrar a los seres vivos. La labor de los nombres como acto en el texto.",
    },
    roots: {
      en: "Hebrew shem. Latin nōmen in the Vulgate tradition. English “name” is the gloss.",
      es: "Hebreo shem. Latín nōmen en la tradición de la Vulgata. “Nombre” es la glosa.",
    },
    clock: {
      en: "Comparative text for Act I. Adjacent to the title Labor Nominis. Not a family clock.",
      es: "Texto comparativo del acto I. Junto al título Labor Nominis. No es un reloj de familia.",
    },
    split: {
      en: "The passage attests naming as labor in Hebrew narrative. It does not attest Villarreal or Martinez.",
      es: "El pasaje atestigua el nombrar como labor en la narración hebrea. No atestigua Villarreal ni Martinez.",
    },
  },
  {
    query: "Genesis 32:28",
    queryEs: "Génesis 32:28",
    tokens: {
      en: "Jacob → Israel. A name change inside one life. Two forms, one person.",
      es: "Jacob → Israel. Un cambio de nombre en una vida. Dos formas, una persona.",
    },
    roots: {
      en: "Hebrew Yaʿaqov / Yisraʾel. Greek Iakōbos / Israēl. Latin Iacobus / Israhel. English Jacob / Israel.",
      es: "Hebreo Yaʿaqov / Yisraʾel. Griego Iakōbos / Israēl. Latín Iacobus / Israhel. Inglés Jacob / Israel.",
    },
    clock: {
      en: "Act III homophony. Yisrael and Israel can look like twins in English type.",
      es: "Acto III homofonía. Yisrael e Israel pueden parecer gemelos en tipo inglés.",
    },
    split: {
      en: "The verse attests a Hebrew name-shift. It does not make Villarreal and Martinez kin, and it does not date 1274.",
      es: "El versículo atestigua un cambio de nombre hebreo. No hace parientes a Villarreal y Martinez, y no fecha 1274.",
    },
  },
  {
    query: "Genesis 17:5",
    queryEs: "Génesis 17:5",
    tokens: {
      en: "Abram → Abraham. A second Hebrew name-shift in the same book.",
      es: "Abram → Abraham. Un segundo cambio de nombre hebreo en el mismo libro.",
    },
    roots: {
      en: "Hebrew ʾAvram / ʾAvraham. The added heh is a grapheme, not a new bloodline on another clock.",
      es: "Hebreo ʾAvram / ʾAvraham. La heh añadida es un grafema, no un linaje nuevo en otro reloj.",
    },
    clock: {
      en: "Act III method: same person, new spelling. Documents keep both forms.",
      es: "Método del acto III: la misma persona, nueva grafía. Los documentos guardan las dos formas.",
    },
    split: {
      en: "The verse attests a rename. It is not a proof of Iberian surnames.",
      es: "El versículo atestigua un renombre. No es prueba de apellidos ibéricos.",
    },
  },
  {
    query: "Matthew 4:21",
    queryEs: "Mateo 4:21",
    tokens: {
      en: "James the son of Zebedee. English James for Greek Iakōbos.",
      es: "Jacobo hijo de Zebedeo. Inglés James para el griego Iakōbos.",
    },
    roots: {
      en: "Hebrew Yaʿaqov → Greek Iakōbos → Latin Iacobus → English James / Spanish Jacobo or Santiago.",
      es: "Hebreo Yaʿaqov → griego Iakōbos → latín Iacobus → inglés James / español Jacobo o Santiago.",
    },
    clock: {
      en: "Act V: two King James towns. The English royal name James sits on this transmission line.",
      es: "Acto V: dos villas de un rey Jaime. El inglés James se sienta en esta línea de transmisión.",
    },
    split: {
      en: "The verse attests a disciple named Iakōbos. It does not found Vila-real (1274) or Jamestown.",
      es: "El versículo atestigua un discípulo llamado Iakōbos. No funda Vila-real (1274) ni Jamestown.",
    },
  },
  {
    query: "Genesis 49:9",
    queryEs: "Génesis 49:9",
    tokens: {
      en: "Judah. Lion. Tribal animal in a blessing, not a street in Vila-real.",
      es: "Judá. León. Animal tribal en una bendición, no una calle en Vila-real.",
    },
    roots: {
      en: "Hebrew Yehudah. Companion essay Gur Aryeh (lion of Judah). Separate from Act II’s 1274 naming clause.",
      es: "Hebreo Yehudah. Ensayo compañero Gur Aryeh (león de Judá). Aparte de la cláusula de 1274 del acto II.",
    },
    clock: {
      en: "Gur Aryeh companion, not the carta pobla clock.",
      es: "Compañero Gur Aryeh, no el reloj de la carta puebla.",
    },
    split: {
      en: "The verse attests Judah as a lion in Hebrew poetry. It does not name Ville Regalis.",
      es: "El versículo atestigua a Judá como león en poesía hebrea. No nombra Ville Regalis.",
    },
  },
];

export const SCRIPTURE_PRESETS = SCRIPTURE_NOTES.map((note) => ({
  q: note.query,
  qEs: note.queryEs,
}));

export function noteForQuery(query: string): OnomasticNote | undefined {
  const needle = query.trim().toLowerCase();
  if (!needle) return undefined;
  return SCRIPTURE_NOTES.find(
    (note) => note.query.toLowerCase() === needle || note.queryEs.toLowerCase() === needle,
  );
}
