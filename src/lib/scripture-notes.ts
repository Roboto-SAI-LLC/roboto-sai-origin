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
    query: "Matthew 9:9-13",
    queryEs: "Mateo 9:9-13",
    tokens: {
      en: "Matthew. Jesus. Publicans. Pharisees. The man is named at the receipt of custom.",
      es: "Mateo. Jesús. Publicanos. Fariseos. El hombre se nombra en el banco de aduana.",
    },
    roots: {
      en: "Greek Matthaios < Hebrew Mattityahu, “gift of YHWH.” Latin Matthaeus. Spanish Mateo. English Matthew. Western feast: 21 September.",
      es: "Griego Matthaios < hebreo Mattityahu, «don de YHWH». Latín Matthaeus. Español Mateo. Inglés Matthew. Fiesta occidental: 21 de septiembre.",
    },
    clock: {
      en: "Liturgical + family-memory. 21 September is St Matthew’s Day in the Western church and the Houston birth date. Same date-shape. Not one event.",
      es: "Litúrgico + memoria de familia. El 21 de septiembre es la fiesta de San Mateo en occidente y la fecha de nacimiento en Houston. Misma forma de fecha. No un solo hecho.",
    },
    split: {
      en: "The passage attests a tax collector named Matthew who follows. It does not date Vila-real, Diego’s mines, or a 1999 birth.",
      es: "El pasaje atestigua a un publicano llamado Mateo que sigue. No fecha Vila-real, las minas de Diego, ni un nacimiento de 1999.",
    },
  },
  {
    query: "Matthew 1:1",
    queryEs: "Mateo 1:1",
    tokens: {
      en: "Jesus Christ. David. Abraham. A book of generation — names in a line.",
      es: "Jesucristo. David. Abraham. Libro de la generación — nombres en una línea.",
    },
    roots: {
      en: "Greek biblos geneseōs. Hebrew sefer toldot as the older form for a name-list. Labor Nominis as method, not as this verse’s subject.",
      es: "Griego biblos geneseōs. Hebreo sefer toldot como forma más antigua de lista de nombres. Labor Nominis como método, no como sujeto de este versículo.",
    },
    clock: {
      en: "Comparative text for the house gospel. Genealogy is a name-clock. Not the 1274 charter.",
      es: "Texto comparativo del evangelio de casa. La genealogía es un reloj de nombres. No es la carta de 1274.",
    },
    split: {
      en: "Matthew 1:1 attests a lineage of names. It does not attest Villarreal.",
      es: "Mateo 1:1 atestigua un linaje de nombres. No atestigua Villarreal.",
    },
  },
  {
    query: "Matthew 1:21-23",
    queryEs: "Mateo 1:21-23",
    tokens: {
      en: "Jesus. Emmanuel. A son named, then a second name interpreted: God with us.",
      es: "Jesús. Emmanuel. Un hijo nombrado, luego un segundo nombre interpretado: Dios con nosotros.",
    },
    roots: {
      en: "Hebrew Yehoshua / Yeshua → Greek Iēsous. Hebrew ʿImmanuʾel, “God with us.” The verse itself does the onomastic gloss.",
      es: "Hebreo Yehoshua / Yeshua → griego Iēsous. Hebreo ʿImmanuʾel, «Dios con nosotros». El versículo mismo hace la glosa onomástica.",
    },
    clock: {
      en: "Act I method: a name is given and then parsed. Adjacent to Labor Nominis. Not a family clock.",
      es: "Método del acto I: se da un nombre y luego se glosa. Junto a Labor Nominis. No es un reloj de familia.",
    },
    split: {
      en: "The verses attest two theonyms and an interpretation. They do not name Roberto or Vila-real.",
      es: "Los versículos atestiguan dos teónimos y una interpretación. No nombran a Roberto ni Vila-real.",
    },
  },
  {
    query: "Matthew 10:2-4",
    queryEs: "Mateo 10:2-4",
    tokens: {
      en: "Simon called Peter. Andrew. James. John. Philip. Bartholomew. Thomas. Matthew the publican. James son of Alphaeus. Lebbaeus Thaddaeus. Simon the Canaanite. Judas Iscariot.",
      es: "Simón llamado Pedro. Andrés. Jacobo. Juan. Felipe. Bartolomé. Tomás. Mateo el publicano. Jacobo hijo de Alfeo. Lebeo Tadeo. Simón el cananeo. Judas Iscariote.",
    },
    roots: {
      en: "A roll of ónoma. Matthew is marked “the publican” — occupation as a second name. James is Iakōbos again.",
      es: "Un rol de ónoma. Mateo lleva «el publicano» — oficio como segundo nombre. Jacobo es otra vez Iakōbos.",
    },
    clock: {
      en: "House gospel name-list. Comparative to Act III (homophony) and Act V (James).",
      es: "Lista de nombres del evangelio de casa. Comparativo del acto III (homofonía) y del acto V (Jaime).",
    },
    split: {
      en: "The list attests twelve named men. It is not a 1274 witness list and not a Villarreal pedigree.",
      es: "La lista atestigua doce hombres nombrados. No es una lista de testigos de 1274 ni un pedigrí Villarreal.",
    },
  },
  {
    query: "Matthew 16:16-18",
    queryEs: "Mateo 16:16-18",
    tokens: {
      en: "Simon Peter. Simon Bar-jona. Christ. Peter / rock. A rename inside one life.",
      es: "Simón Pedro. Simón Bar-joná. Cristo. Pedro / piedra. Un renombre en una vida.",
    },
    roots: {
      en: "Aramaic Kēpha → Greek Petros. Bar-jona is “son of Jonah.” Same method as Jacob → Israel: two forms, one person.",
      es: "Arameo Kēpha → griego Petros. Bar-joná es «hijo de Jonás». El mismo método que Jacob → Israel: dos formas, una persona.",
    },
    clock: {
      en: "Act III name-shift, in the house gospel. Adjacent, not glued to Monterrey or 1274.",
      es: "Cambio de nombre del acto III, en el evangelio de casa. Vecino, no pegado a Monterrey ni a 1274.",
    },
    split: {
      en: "The verses attest Simon named Peter. They do not found a royal village and they do not date 21 September.",
      es: "Los versículos atestiguan a Simón nombrado Pedro. No fundan una villa real y no fechan el 21 de septiembre.",
    },
  },
  {
    query: "Leviticus 23:27",
    queryEs: "Levítico 23:27",
    tokens: {
      en: "A named day: day of atonement. Tenth day of the seventh month. The LORD. No Villarreal.",
      es: "Un día nombrado: día de expiación. Diez del mes séptimo. El SEÑOR. Sin Villarreal.",
    },
    roots: {
      en: "Hebrew yom hakippurim. Yom is day. Kippur is covering / atonement. Latin dies expiationum. English Day of Atonement.",
      es: "Hebreo yom hakippurim. Yom es día. Kipur es cubierta / expiación. Latín dies expiationum. Inglés Day of Atonement.",
    },
    clock: {
      en: "Hebrew liturgical clock. 10 Tishrei 5787 falls sundown 20 September–nightfall 21 September 2026. Same civil numeral as the Houston birth. Not the birth.",
      es: "Reloj litúrgico hebreo. El 10 de Tishrei 5787 cae de la puesta del 20 al anochecer del 21 de septiembre de 2026. El mismo numeral civil que el nacimiento en Houston. No es el nacimiento.",
    },
    split: {
      en: "The verse names a convocation. It does not schedule 1999, 1846, or St Matthew’s Day. Recurrence of 21 September is a Gregorian overlay.",
      es: "El versículo nombra una convocación. No programa 1999, 1846 ni San Mateo. La repetición del 21 de septiembre es un overlay gregoriano.",
    },
  },
  {
    query: "Hosea 6:6",
    queryEs: "Oseas 6:6",
    tokens: {
      en: "Mercy. Sacrifice. Knowledge of God. No personal name. No toponym.",
      es: "Misericordia. Sacrificio. Conocimiento de Dios. Sin nombre de persona. Sin topónimo.",
    },
    roots: {
      en: "Hebrew ḥesed, not zebach. Matthew 9:13 quotes this line in the feast reading of the tax collector.",
      es: "Hebreo ḥesed, no zebach. Mateo 9:13 cita esta línea en la lectura de la fiesta del publicano.",
    },
    clock: {
      en: "Adjacent to the house gospel this week, beside Yom Kippur 5787. Two texts on mercy and covering. Not one liturgy.",
      es: "Vecino del evangelio de casa esta semana, junto a Yom Kipur 5787. Dos textos sobre misericordia y cubierta. No una sola liturgia.",
    },
    split: {
      en: "Hosea attests a prophetic contrast. It does not make Yom Kippur into Matthew, and it does not date a Houston birth.",
      es: "Oseas atestigua un contraste profético. No convierte Yom Kipur en Mateo, y no fecha un nacimiento en Houston.",
    },
  },
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
