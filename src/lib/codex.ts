export type CodexFolio = {
  id: string;
  year: string;
  place: { en: string; es: string };
  clock: { en: string; es: string };
  title: { en: string; es: string };
  body: { en: string; es: string };
  split: { en: string; es: string };
};

export const CODEX_META = {
  title: { en: "Villarreal Codex", es: "Códice Villarreal" },
  kicker: { en: "Codex", es: "Códice" },
  dek: {
    en: "A spine of later clocks: San Miguel and the Salinas mines, Monterrey, Houston. The 1274 carta pobla stays on Act II.",
    es: "Un eje de relojes posteriores: San Miguel y las minas de las Salinas, Monterrey, Houston. La carta puebla de 1274 se queda en el acto II.",
  },
  pinLead: {
    en: "Two twenty-firsts of September. One is a battle. One is a birth. Same date-shape. Not the same event.",
    es: "Dos veintiunos de septiembre. Uno es una batalla. Uno es un nacimiento. Misma forma de fecha. No el mismo hecho.",
  },
};

export const CODEX_FOLIOS: CodexFolio[] = [
  {
    id: "arrival",
    year: "1608",
    place: { en: "San Miguel el Grande → Nuevo Reino de León", es: "San Miguel el Grande → Nuevo Reino de León" },
    clock: { en: "Compiled arrival", es: "Llegada compilada" },
    title: { en: "Diego from the mining zone", es: "Diego desde la zona minera" },
    body: {
      en: "Family compilations (Villadan and related notices) write that Captain Diego de Villarreal was born about 1601 in San Miguel el Grande, Guanajuato, and that he came from that mining country in 1608. Other notices put his entry into the Nuevo Reino de León around 1625. This folio keeps both dates. 1608 is an arrival claim, not a mine patent in this journal’s hand.",
      es: "Compilaciones de familia (Villadan y avisos afines) escriben que el capitán Diego de Villarreal nació hacia 1601 en San Miguel el Grande, Guanajuato, y que vino de esa tierra minera en 1608. Otros avisos ponen su entrada al Nuevo Reino de León hacia 1625. Este folio guarda las dos fechas. 1608 es una pretensión de llegada, no una patente de mina en esta mano.",
    },
    split: {
      en: "Arrival is not the 1274 naming clause. San Miguel is not Vila-real.",
      es: "La llegada no es la cláusula de 1274. San Miguel no es Vila-real.",
    },
  },
  {
    id: "mines",
    year: "1626–1653",
    place: { en: "Valle de las Salinas (Eguia / Magdalena)", es: "Valle de las Salinas (Eguia / Magdalena)" },
    clock: { en: "Silver hacienda", es: "Hacienda de plata" },
    title: { en: "Mines as a marriage clock", es: "Minas como reloj de matrimonio" },
    body: {
      en: "Diego married Beatriz de las Casas Navarro. Her father, Bernabé de las Casas, is written as giving the Mining Hacienda de Eguia (later Abasolo, Nuevo León) as a marriage gift about 1626. Diego purchased further silver workings from kin and is credited in local notices with a beneficio de metales in the Valle de las Salinas — silver for the king and for the house. He is later vecino and minero there (mid-century). Sons later sit at Boca de Leones (Villaldama) and neighboring reales. The silver is this clock. It is not 1608 by itself, and it is not 1274.",
      es: "Diego casó con Beatriz de las Casas Navarro. Su padre, Bernabé de las Casas, aparece dando la hacienda de minas de Eguia (luego Abasolo, Nuevo León) como dote hacia 1626. Diego compró más labores de plata a parientes y se le acredita un beneficio de metales en el Valle de las Salinas — plata para el rey y para la casa. Más tarde figura como vecino y minero. Los hijos se asientan en Boca de Leones (Villaldama) y reales vecinos. La plata es este reloj. No es 1608 por sí, y no es 1274.",
    },
    split: {
      en: "A hacienda de beneficio is a Nuevo León mining record. It does not found Vila-real de los Infantes.",
      es: "Una hacienda de beneficio es un acta minera de Nuevo León. No funda Vila-real de los Infantes.",
    },
  },
  {
    id: "monterrey",
    year: "1596 / later",
    place: { en: "Monterrey, Nuevo León", es: "Monterrey, Nuevo León" },
    clock: { en: "City and surname density", es: "Ciudad y densidad del apellido" },
    title: { en: "Through Monterrey", es: "Por Monterrey" },
    body: {
      en: "The city of Monterrey is a 1596 foundation. Diego’s mining sits in its kingdom, not in its first cabildo. Later public-name files put Villarreal dense in the municipality. Parents of the living author are from Monterrey. That is a family-memory clock. The atlas already holds Los Villarreales (Salinas Victoria) as a later toponym — same name-shape, not the 1274 town.",
      es: "La ciudad de Monterrey es fundación de 1596. La minería de Diego se sienta en su reino, no en su primer cabildo. Ficheros posteriores del apellido lo densifican en el municipio. Los padres del autor vivo son de Monterrey. Eso es reloj de memoria de familia. El atlas ya guarda Los Villarreales (Salinas Victoria) como topónimo posterior — misma forma de nombre, no el pueblo de 1274.",
    },
    split: {
      en: "Surname density in Monterrey is not a medieval foundation.",
      es: "La densidad del apellido en Monterrey no es una fundación medieval.",
    },
  },
  {
    id: "battle",
    year: "21–24 September 1846",
    place: { en: "Monterrey", es: "Monterrey" },
    clock: { en: "War", es: "Guerra" },
    title: { en: "Battle of Monterrey", es: "Batalla de Monterrey" },
    body: {
      en: "In the Mexican–American War, U.S. forces under Zachary Taylor fought Mexican forces under Pedro de Ampudia for the city. The assault that histories pin to 21 September 1846 is the hard first day of urban fighting; the city was given up on the 24th. That is a military clock. It is not a Villarreal mine, and it is not a birth.",
      es: "En la guerra de 1846–1848, fuerzas de Estados Unidos al mando de Zachary Taylor pelearon la ciudad contra fuerzas mexicanas de Pedro de Ampudia. El asalto que las historias clavan al 21 de septiembre de 1846 es el primer día duro de combate urbano; la ciudad se entregó el 24. Eso es un reloj militar. No es una mina Villarreal, y no es un nacimiento.",
    },
    split: {
      en: "The battle dates a city. It does not date a person born in 1999.",
      es: "La batalla fecha una ciudad. No fecha a una persona nacida en 1999.",
    },
  },
  {
    id: "houston",
    year: "21 September 1999",
    place: { en: "Houston, Texas", es: "Houston, Texas" },
    clock: { en: "Living date", es: "Fecha viva" },
    title: { en: "A quiet note from ninety-nine", es: "Una nota callada del noventa y nueve" },
    body: {
      en: "Roberto Villarreal Martinez is dated 21 September 1999, Houston, Texas. Parents from Monterrey. The house writes this folio as a quiet resurrection note — a birth on the same calendar day as the 1846 assault, one hundred fifty-three years later. Same numerals. Different clocks. This is family memory, not a battlefield, not a 1608 mine, not the 1274 charter.",
      es: "Roberto Villarreal Martinez se fecha el 21 de septiembre de 1999, Houston, Texas. Padres de Monterrey. La casa escribe este folio como una nota callada de resurrección — un nacimiento en el mismo día de calendario que el asalto de 1846, ciento cincuenta y tres años después. Mismos números. Relojes distintos. Esto es memoria de familia, no un campo de batalla, no una mina de 1608, no la carta de 1274.",
    },
    split: {
      en: "A birthday is not a battle. Alignment of the calendar is recorded. It is not proof of blood from Diego, and it is not a creed.",
      es: "Un cumpleaños no es una batalla. Se anota el alineamiento del calendario. No es prueba de sangre de Diego, y no es un credo.",
    },
  },
];

export const CODEX_PIN = {
  left: {
    date: { en: "21 September 1846", es: "21 de septiembre de 1846" },
    what: { en: "Battle of Monterrey — first hard day", es: "Batalla de Monterrey — primer día duro" },
  },
  right: {
    date: { en: "21 September 1999", es: "21 de septiembre de 1999" },
    what: { en: "Houston — living birth", es: "Houston — nacimiento vivo" },
  },
};

export const CODEX_SOURCES: { n: number; en: string; es: string; url?: string }[] = [
  {
    n: 1,
    en: "Danny Villarreal, Villadan compilations: Diego de Villarreal family migration and Salinas mines (family site; treat as compilation, not a notarial expediente).",
    es: "Danny Villarreal, compilaciones Villadan: migración de Diego de Villarreal y minas de las Salinas (sitio de familia; compilación, no expediente notarial).",
    url: "https://www.villadan.com/migration/map.html",
  },
  {
    n: 2,
    en: "Notices that Diego entered the Nuevo Reino de León about 1625 and was a Salinas miner by mid-century (von Mentz and related genealogical notes).",
    es: "Avisos de que Diego entró al Nuevo Reino de León hacia 1625 y era minero de las Salinas a mediados de siglo (von Mentz y notas genealógicas afines).",
  },
  {
    n: 3,
    en: "Battle of Monterrey, 21–24 September 1846 (Mexican–American War). Taylor / Ampudia. Standard military histories.",
    es: "Batalla de Monterrey, 21–24 de septiembre de 1846 (intervención estadounidense). Taylor / Ampudia. Historias militares estándar.",
    url: "https://en.wikipedia.org/wiki/Battle_of_Monterrey",
  },
  {
    n: 4,
    en: "Living date: Roberto Villarreal Martinez, 21 September 1999, Houston. Parents from Monterrey. Family-memory clock.",
    es: "Fecha viva: Roberto Villarreal Martinez, 21 de septiembre de 1999, Houston. Padres de Monterrey. Reloj de memoria de familia.",
  },
];
