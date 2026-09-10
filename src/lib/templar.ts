import type { Section } from "@/lib/research";
import type { Lang } from "@/lib/i18n";

export const TEMPLAR_META = {
  en: {
    title: "Poor Knights of the Temple",
    subtitle: "The Order on the road to Jerusalem, and why Vila-real is era and frontier, not lineage",
    description:
      "A short history of the Knights Templar, from Hugh of Payns to the pyre of Jacques de Molay, cut against the 1274 foundation of Vila-real. Neighbors on the Plana. Not namers.",
    kicker: "A static research page · 8 sources",
    skip: "Skip to essay",
    citeTitle: "Cite this page",
    citation:
      "Roboto SAI research with a Copilot. “Poor Knights of the Temple.” Roboto SAI Research, September 2026.",
    chronology: "A brief chronology",
    chronologyLead: "From nine knights on the road to Jerusalem to memory on the Valencian coast.",
    references: "References",
    back: "Back to the brief",
    listen: "Hear the spoken tag",
    photoAlt: "An empty limestone fortress under a pale sky, no flags, no people.",
    photoCaption: "A frontier fortress. On this coast the Temple is a neighboring lordship, not a family name.",
  },
  es: {
    title: "Pobres caballeros del Templo",
    subtitle:
      "La orden en el camino a Jerusalén, y por qué Vila-real es época y frontera, no linaje",
    description:
      "Historia breve de los Caballeros Templarios, de Hugo de Payns a la hoguera de Jacques de Molay, cortada contra la fundación de Vila-real en 1274. Vecinos en la Plana. No nominadores.",
    kicker: "Página de investigación · 8 fuentes",
    skip: "Saltar al ensayo",
    citeTitle: "Citar esta página",
    citation:
      "Roboto SAI research with a Copilot. «Pobres caballeros del Templo». Roboto SAI Research, septiembre de 2026.",
    chronology: "Una cronología breve",
    chronologyLead: "De nueve caballeros en el camino a Jerusalén a la memoria en la costa valenciana.",
    references: "Fuentes",
    back: "Volver a la síntesis",
    listen: "Oír la etiqueta hablada",
    photoAlt: "Una fortaleza de caliza vacía bajo un cielo pálido, sin banderas ni gente.",
    photoCaption: "Una fortaleza de frontera. En esta costa el Templo es un señorío vecino, no un apellido.",
  },
};

export const TEMPLAR_FINDINGS: Record<Lang, { kicker: string; text: string }[]> = {
  en: [
    {
      kicker: "Nine knights",
      text: "Hugh of Payns and eight companions, after the First Crusade, to guard pilgrims on roads full of bandits.",
    },
    {
      kicker: "Temple, then bank",
      text: "Baldwin II housed them at Al-Aqsa. They became the feared field force of the crusades — and Europe’s richest traveling bank.",
    },
    {
      kicker: "One night",
      text: "Philip IV, who owed them a fortune, had them seized on 13 October 1307. Clement V dissolved the order in 1312. Molay burned in 1314.",
    },
    {
      kicker: "Era, not lineage",
      text: "No published 1269–1274 grant names a Templar household as the namer of Vila-real. Neighbors at Xivert and Burriana. Not a bloodline.",
    },
  ],
  es: [
    {
      kicker: "Nueve caballeros",
      text: "Hugo de Payns y ocho compañeros, después de la Primera Cruzada, para guardar peregrinos en caminos llenos de bandidos.",
    },
    {
      kicker: "Templo, luego banco",
      text: "Balduino II los alojó en Al-Aqsa. Se volvieron la fuerza más temida de las cruzadas — y el banco viajero más rico de Europa.",
    },
    {
      kicker: "Una noche",
      text: "Felipe IV, que les debía una fortuna, los hizo prender el 13 de octubre de 1307. Clemente V disolvió la orden en 1312. Molay ardió en 1314.",
    },
    {
      kicker: "Época, no linaje",
      text: "Ninguna merced publicada de 1269–1274 nombra a una casa templaria como nominadora de Vila-real. Vecinos en Xivert y Burriana. No una línea de sangre.",
    },
  ],
};

export const TEMPLAR_TOC: Record<Lang, { id: string; numeral: string; title: string }[]> = {
  en: [
    { id: "introduction", numeral: "", title: "Introduction" },
    { id: "order", numeral: "I", title: "The order" },
    { id: "money", numeral: "II", title: "The bank" },
    { id: "end", numeral: "III", title: "The night and the pyre" },
    { id: "plana", numeral: "IV", title: "The Plana cut" },
    { id: "references", numeral: "", title: "References" },
  ],
  es: [
    { id: "introduction", numeral: "", title: "Introducción" },
    { id: "order", numeral: "I", title: "La orden" },
    { id: "money", numeral: "II", title: "El banco" },
    { id: "end", numeral: "III", title: "La noche y la hoguera" },
    { id: "plana", numeral: "IV", title: "El corte de la Plana" },
    { id: "references", numeral: "", title: "Fuentes" },
  ],
};

export const TEMPLAR_SECTIONS: Record<Lang, Section[]> = {
  en: [
    {
      id: "introduction",
      numeral: "",
      title: "A real order, then a rumor",
      blocks: [
        {
          type: "p",
          dropCap: true,
          text: "The Knights Templar were a military and religious order founded in 1119 by nine French knights led by Hugh of Payns, just after the First Crusade. Their first job was to protect Christian pilgrims traveling to Jerusalem, because the roads were full of bandits. That is the living order. What follows on this page is that order, then the cut this journal already makes on the Plana: era and frontier, not a family named Villarreal.",
        },
        {
          type: "note",
          text: "The dossier already steelmans the live claims — a Templar-Jewish household as namer; an assassination bargain paid with a royal town — and cuts them. This essay is the history those claims borrow, kept on its own clock.",
        },
      ],
    },
    {
      id: "order",
      numeral: "I",
      title: "Poor Knights of Christ and of the Temple of Solomon",
      blocks: [
        {
          type: "p",
          text: "King Baldwin II of Jerusalem gave them quarters in the Al-Aqsa mosque, which they took to be Solomon’s Temple — hence the name: Poor Knights of Christ and of the Temple of Solomon. In 1129 the pope approved them at the Council of Troyes. From then they grew as almost no other order grew: the most feared warriors of the crusades, under vows of poverty, chastity, and obedience, in a white mantle with a red cross.",
        },
        {
          type: "p",
          text: "On this frontier they are not a rumor. For help at the conquest of Burriana, James I granted the castle of Xivert to the Templars in 1233; they also received a third of Burriana itself. Vila-real is later carved from Burriana’s term. The Order is the neighboring lord, not the naming agent in the 1274 clause.",
        },
      ],
    },
    {
      id: "money",
      numeral: "II",
      title: "What made them powerful was not only the sword",
      blocks: [
        {
          type: "p",
          text: "They invented a traveling bank: the pilgrim deposited in his own country and withdrew in the Holy Land. In less than a century they were among the richest bankers in Europe. That is why a king who owed them a fortune could want them gone, and why a letter of credit is not a grant of a royal village.",
        },
      ],
    },
    {
      id: "end",
      numeral: "III",
      title: "One night, then a pyre",
      blocks: [
        {
          type: "p",
          text: "On 13 October 1307, Philip IV of France, who owed the Temple a fortune, accused them of heresy, had them arrested in a single night, and tortured confessions. Pope Clement V dissolved the order in 1312. Their last grand master, Jacques de Molay, was burned in Paris in 1314. In the kingdom of Valencia the Temple’s goods passed to the new Order of Montesa in 1317–19. After that date “Templar” on this coast is memory, not a living order.",
        },
      ],
    },
    {
      id: "plana",
      numeral: "IV",
      title: "Villarreal and the Temple: no document names them as one",
      blocks: [
        {
          type: "p",
          text: "There is no published document that connects them directly as namers. Templars did operate on the peninsula — Aragon, Castile, Portugal — but Villarreal de los Infantes was founded by James I of Aragon in 1274, after the order already existed. The connection is of era and of frontier, not of lineage.",
        },
        {
          type: "p",
          text: "A separate, earlier graph must stay separate: after the death of Peter II at Muret in 1213, Templars under Guillem de Montrodón recovered the child James from Simon de Montfort and raised him at Monzón. That is documented protection and education. It is not a 1274 bargain in which a royal town is paid as ransom for a warning of assassination.",
        },
        {
          type: "p",
          text: "Frey Petrus Peyronet, the king’s almoner funding the acequia of Ville Regalis on 12 May 1274, may be the Peter Peyronet listed as Templar commander at Burriana around 1273–77. Treat the two tokens as a dossier problem: probable, not proven by this page. Even if they are one man, an almoner paying for a canal is not a household naming a town.",
        },
        {
          type: "quote",
          text: "Neighbors on the Plana. Not a bloodline. Not a naming clause.",
          cite: "This journal’s cut",
        },
      ],
    },
  ],
  es: [
    {
      id: "introduction",
      numeral: "",
      title: "Una orden real, luego un rumor",
      blocks: [
        {
          type: "p",
          dropCap: true,
          text: "Los Caballeros Templarios fueron una orden militar y religiosa fundada en mil ciento diecinueve por nueve caballeros franceses liderados por Hugo de Payns, justo después de la Primera Cruzada. Su misión original era proteger a los peregrinos cristianos que viajaban a Jerusalén, porque los caminos estaban llenos de bandidos. Esa es la orden viva. Lo que sigue en esta página es esa orden, y luego el corte que esta revista ya hace en la Plana: época y frontera, no una familia llamada Villarreal.",
        },
        {
          type: "note",
          text: "El dossier ya hace el steelman de las afirmaciones vivas — una casa templaria-judía como nominadora; un pacto de asesinato pagado con una villa real — y las corta. Este ensayo es la historia que esas afirmaciones piden prestada, en su propio reloj.",
        },
      ],
    },
    {
      id: "order",
      numeral: "I",
      title: "Pobres caballeros de Cristo y del Templo de Salomón",
      blocks: [
        {
          type: "p",
          text: "El rey Balduino II les dio como cuartel la mezquita de Al-Aqsa, que ellos creían era el Templo de Salomón — de ahí el nombre: Pobres Caballeros de Cristo y del Templo de Salomón. En mil ciento veintinueve el papa los aprobó oficialmente en el Concilio de Troyes, y desde entonces crecieron como nadie: se volvieron los guerreros más temidos de las cruzadas, con votos de pobreza, castidad y obediencia, y un manto blanco con cruz roja.",
        },
        {
          type: "p",
          text: "En esta frontera no son un rumor. Por la ayuda en la conquista de Burriana, Jaime I otorgó el castillo de Xivert a los templarios en 1233; también recibieron un tercio de la propia Burriana. Vila-real se talla después del término de Burriana. La Orden es el señor vecino, no el agente que nombra en la cláusula de 1274.",
        },
      ],
    },
    {
      id: "money",
      numeral: "II",
      title: "Lo que los hizo poderosos no fue solo la espada",
      blocks: [
        {
          type: "p",
          text: "Inventaron un sistema de bancos: el peregrino depositaba en su país y retiraba en Tierra Santa. En menos de un siglo eran los banqueros más ricos de Europa. Por eso un rey que les debía una fortuna podía quererlos fuera, y por eso una carta de crédito no es la merced de una villa real.",
        },
      ],
    },
    {
      id: "end",
      numeral: "III",
      title: "Una noche, luego una hoguera",
      blocks: [
        {
          type: "p",
          text: "El 13 de octubre de 1307, el rey Felipe IV de Francia, que les debía una fortuna, los acusó de herejía, los arrestó a todos en una sola noche y torturó confesiones. El papa Clemente V los disolvió en 1312, y su último gran maestre, Jacques de Molay, fue quemado en la hoguera en París en 1314. En el reino de Valencia los bienes del Templo pasan a la nueva Orden de Montesa en 1317–19. Después de esa fecha, «templario» en esta costa es memoria, no una orden viva.",
        },
      ],
    },
    {
      id: "plana",
      numeral: "IV",
      title: "Villarreal y los templarios: no hay documento que los una como nominadores",
      blocks: [
        {
          type: "p",
          text: "No hay documento publicado que los conecte directamente como nominadores. Los templarios sí operaron en la península — Aragón, Castilla, Portugal — pero Villarreal de los Infantes fue fundada por Jaime I de Aragón en mil doscientos setenta y cuatro, ya después de que la orden existiera. La conexión es de época y de frontera, no de linaje.",
        },
        {
          type: "p",
          text: "Un grafo anterior, distinto, debe quedarse aparte: tras la muerte de Pedro II en Muret en 1213, templarios bajo Guillem de Montrodón recuperaron al niño Jaime de Simón de Montfort y lo criaron en Monzón. Eso es protección y educación documentadas. No es un pacto de 1274 en el que una villa real se paga como rescate por el aviso de un asesinato.",
        },
        {
          type: "p",
          text: "Frey Petrus Peyronet, limosnero del rey que financia la acequia de Ville Regalis el 12 de mayo de 1274, puede ser el Peter Peyronet listado como comendador templario de Burriana hacia 1273–77. Trátense los dos tokens como un problema de dossier: probable, no probado por esta página. Aunque fueran un solo hombre, un limosnero que paga un canal no es una casa que nombra una villa.",
        },
        {
          type: "quote",
          text: "Vecinos en la Plana. No una línea de sangre. No una cláusula de nombre.",
          cite: "El corte de esta revista",
        },
      ],
    },
  ],
};

export const TEMPLAR_TIMELINE: Record<Lang, { year: string; title: string; text: string }[]> = {
  en: [
    { year: "1119", title: "Nine knights", text: "Hugh of Payns and eight companions. Guard the roads to Jerusalem." },
    { year: "1129", title: "Troyes", text: "Papal approval. White mantle, red cross, a rule." },
    { year: "1233", title: "Xivert", text: "James I grants Chivert for help at Burriana. Neighboring lordship." },
    { year: "1274", title: "Vila-real", text: "James founds a royal village in Burriana’s term. After the order already exists." },
    { year: "1307", title: "One night", text: "Philip IV seizes the Temple in France on 13 October." },
    { year: "1312–14", title: "Dissolved, then burned", text: "Clement V suppresses the order. Molay dies on the pyre in 1314." },
    { year: "1317–19", title: "Montesa", text: "Valencian Templar goods pass to a new order. Memory, not a living Temple." },
  ],
  es: [
    { year: "1119", title: "Nueve caballeros", text: "Hugo de Payns y ocho compañeros. Guardar los caminos a Jerusalén." },
    { year: "1129", title: "Troyes", text: "Aprobación papal. Manto blanco, cruz roja, una regla." },
    { year: "1233", title: "Xivert", text: "Jaime I otorga Chivert por la ayuda en Burriana. Señorío vecino." },
    { year: "1274", title: "Vila-real", text: "Jaime funda una villa real en el término de Burriana. La orden ya existe." },
    { year: "1307", title: "Una noche", text: "Felipe IV prende al Templo en Francia el 13 de octubre." },
    { year: "1312–14", title: "Disueltos, luego la hoguera", text: "Clemente V suprime la orden. Molay muere en la hoguera en 1314." },
    { year: "1317–19", title: "Montesa", text: "Los bienes templarios valencianos pasan a una orden nueva. Memoria, no Templo vivo." },
  ],
};

export const TEMPLAR_REFERENCES = [
  {
    n: 1,
    source: "Malcolm Barber, The New Knighthood: A History of the Order of the Temple",
    title: "WorldCat record",
    url: "https://search.worldcat.org/oclc/27172197",
  },
  {
    n: 2,
    source: "Helen Nicholson, The Knights Templar: A New History",
    title: "The Knights Templar: A New History",
    url: "https://search.worldcat.org/oclc/50645405",
  },
  {
    n: 3,
    source: "A. J. Forey, The Templars in the Corona de Aragón",
    title: "The Templars in the Corona de Aragón",
    url: "https://search.worldcat.org/oclc/1366051",
  },
  {
    n: 4,
    source: "Council of Troyes, 1129; papal approval of the Temple",
    title: "Templars — overview",
    url: "https://www.britannica.com/topic/Templars",
  },
  {
    n: 5,
    source: "Arrests of 13 October 1307; Clement V, Vox in excelso, 1312; execution of Jacques de Molay, 18 March 1314",
    title: "Suppression of the Templars",
    url: "https://www.britannica.com/topic/Templars",
  },
  {
    n: 6,
    source: "James I, carta puebla of Vila-real, 20 February 1274",
    title: "Foundation of Vila-real",
    url: "https://www.vila-real.es/",
  },
  {
    n: 7,
    source: "Grant of Xivert/Chivert to the Templars, 1233, for help at Burriana",
    title: "Forey on Xivert",
    url: "https://search.worldcat.org/oclc/1366051",
  },
  {
    n: 8,
    source: "Order of Montesa, 1317–19, receiving Valencian Templar estates",
    title: "Order of Montesa",
    url: "https://www.britannica.com/topic/Order-of-Montesa",
  },
];
