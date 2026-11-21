import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';

const unit: Unit = {
  id: 'c2-u09',
  level: 'C2',
  unitNumber: 9,
  title: 'Editorial Precision and Style',
  subtitle: 'Shape rhythm, emphasis, ellipsis and authorial voice across genres',
  communicativeGoal:
    'Editar, condensar y pulir textos complejos en inglÃ©s con criterio estilÃ­stico: controlar la elipsis, la sustituciÃ³n, el peso informativo, el ritmo sintÃ¡ctico y la voz autoral segÃºn el gÃ©nero.',
  objectives: [
    'Emplear la elipsis y la sustituciÃ³n (verbal, nominal y clausal) para eliminar repeticiones sin sacrificar claridad.',
    'Aplicar los principios de peso final (end-weight) y foco final (end-focus) para estructurar oraciones largas con fluidez.',
    'Alternar parataxis, hipotaxis y variaciÃ³n rÃ­tmica para construir una voz autoral reconocible.',
    'Podar redundancias, nominalizaciones innecesarias y prosa inflada (deadwood) manteniendo el registro adecuado.'
  ],
  grammar: {
    title: 'Ellipsis, substitution, information flow and syntactic rhythm',
    explanation: [
      'En el nivel C2, la elegancia y la economÃ­a expresiva dependen en gran medida de lo que se omite con precisiÃ³n. La elipsis elimina elementos recuperables por el contexto: elipsis verbal tras auxiliares ("She promised to revise the draft, and she has [revised it]"), elipsis en coordinaciÃ³n ("One editor preferred brevity; the other, nuance") y elipsis comparativa ("The second edition is tighter than the first [was]"). La sustituciÃ³n reemplaza constituyentes enteros mediante proformas: do / does / did para verbos, one / ones para sustantivos contables, y so / not para clÃ¡usulas tras verbos como think, believe, hope, appear y seem ("Will the deadline hold? â€” I believe so / I fear not").',
      'La arquitectura de la oraciÃ³n inglesa responde a dos principios complementarios: end-focus (la informaciÃ³n nueva o mÃ¡s relevante tiende a colocarse al final) y end-weight (los constituyentes largos o sintÃ¡cticamente pesados suenan mÃ¡s naturales al final que en posiciÃ³n de sujeto). Un sujeto excesivamente largo ("That the board failed to anticipate the regulatory backlash despite repeated warnings surprised nobody") se vuelve mucho mÃ¡s legible mediante extraposiciÃ³n ("It surprised nobody that the board failed to anticipate the regulatory backlash despite repeated warnings") o mediante pasiva y tematizaciÃ³n controlada.',
      'El ritmo sintÃ¡ctico nace de contrastar estructuras. La parataxis (clÃ¡usulas breves yuxtapuestas o coordinadas: "He read the proof, marked three lines, and sent it back") acelera el pulso y transmite decisiÃ³n; la hipotaxis (subordinaciÃ³n graduada con incisos, aposiciones y participios) ralentiza la lectura para desplegar matices y relaciones lÃ³gicas. Alternar ambas evita la monotonÃ­a tanto de la prosa telegrÃ¡fica como del pÃ¡rrafo laberÃ­ntico.',
      'La ediciÃ³n profesional distingue entre complejidad genuina y peso muerto (deadwood). Locuciones infladas ("due to the fact that", "at this point in time", "in the event that") y nominalizaciones vacÃ­as ("conduct an investigation into" frente a "investigate") diluyen la fuerza de los verbos. Conviene conservar la nominalizaciÃ³n cuando el proceso pasa a ser tema de la oraciÃ³n siguiente, y devolver la acciÃ³n al verbo cuando importa quiÃ©n hace quÃ©.',
      'La voz autoral y el gÃ©nero: un artÃ­culo de opiniÃ³n, un informe tÃ©cnico, una reseÃ±a crÃ­tica y una nota ejecutiva exigen distinta densidad sintÃ¡ctica, distinto grado de presencia de la primera persona y distinta tolerancia a las figuras retÃ³ricas. Editar en C2 significa ajustar cada frase al lector real y al propÃ³sito del texto.'
    ],
    forms: [
      {
        label: 'Ellipsis and substitution',
        lines: [
          'She promised to tighten the opening chapter, and she has.',
          'The first draft favoured speed; the second, precision.',
          'Will the revised edition appear this autumn? â€” The publisher hopes so; the author fears not.',
          'We expected resistance, and so we encountered.'
        ]
      },
      {
        label: 'End-weight and extraposition',
        lines: [
          'It surprised nobody that the board overlooked the warning.',
          'What the revision removes is the clutter, not the argument.',
          'Crucial to the essayâ€™s success is its restraint in the final section.',
          'There remains the question of who will fund the translation.'
        ]
      },
      {
        label: 'Syntactic rhythm and pruning',
        lines: [
          'He opened the file, deleted three adjectives, and restored the verb. (parataxis)',
          'Although the prose is dense â€” and, at times, deliberately austere â€” its logic never falters. (hypotaxis)',
          'due to the fact that â†’ because; in order to â†’ to; conduct an inquiry into â†’ inquire into',
          'The committeeâ€™s refusal to compromise â†’ The committee refused to compromise (when agency matters)'
        ]
      },
      {
        label: 'Useful expressions and collocations',
        lines: [
          'trim the fat; cut deadwood; tighten the prose',
          'strike the right cadence; read aloud well; flow seamlessly',
          'bury the lead; lose the thread; labour a point',
          'overwrought prose; pedestrian style; effortless clarity',
          'economy of expression; syntactic variety; authorial voice',
          'a telling detail; an apt metaphor; a jarring shift',
          'polish a draft; pare something back; leave room to breathe',
          'to put it crisply; for the sake of euphony'
        ]
      }
    ]
  },
  vocabulary: [
    v('ellipsis', 'elipsis, omisiÃ³n contextual', '/ÉªËˆlÉªpsÉªs/', 'e-LIP-sis'),
    v('substitution', 'sustituciÃ³n gramatical', '/ËŒsÊŒbstÉªËˆtjuËÊƒn/', 'sub-sti-TU-tion'),
    v('parataxis', 'parataxis, yuxtaposiciÃ³n sin subordinaciÃ³n', '/ËŒpÃ¦rÉ™ËˆtÃ¦ksÉªs/', 'par-a-TAX-is'),
    v('hypotaxis', 'hipotaxis, subordinaciÃ³n sintÃ¡ctica', '/ËŒhaÉªpÉ™ËˆtÃ¦ksÉªs/', 'hy-po-TAX-is'),
    v('extraposition', 'extraposiciÃ³n', '/ËŒekstrÉ™pÉ™ËˆzÉªÊƒn/', 'ex-tra-po-SI-tion'),
    v('cadence', 'cadencia, ritmo de la prosa', '/ËˆkeÉªdns/', 'CA-dence'),
    v('euphony', 'eufonÃ­a, sonoridad agradable', '/ËˆjuËfÉ™ni/', 'EU-pho-ny'),
    v('tautology', 'tautologÃ­a, repeticiÃ³n innecesaria', '/tÉ”ËËˆtÉ’lÉ™dÊ’i/', 'tau-TOL-o-gy'),
    v('pleonasm', 'pleonasmo, redundancia lÃ©xica', '/ËˆpliËÉ™nÃ¦zÉ™m/', 'PLE-o-nasm'),
    v('verbiage', 'verbosidad vacÃ­a, palabrerÃ­a', '/ËˆvÉœËbiÉªdÊ’/', 'VER-bi-age'),
    v('deadwood', 'lastre verbal, palabras sobrantes', '/ËˆdedwÊŠd/', 'DEAD-wood'),
    v('overwrought', 'recargado, exagerado en estilo', '/ËŒÉ™ÊŠvÉ™ËˆrÉ”Ët/', 'o-ver-WROUGHT'),
    v('pedestrian', 'prosaico, falto de brillo', '/pÉ™ËˆdestriÉ™n/', 'pe-DES-tri-an'),
    v('crisp', 'preciso, limpio y conciso', '/krÉªsp/', 'CRISP'),
    v('turgid', 'ampuloso, pesado', '/ËˆtÉœËdÊ’Éªd/', 'TUR-gid'),
    v('jarring', 'chirriante, disonante', '/ËˆdÊ’É‘ËrÉªÅ‹/', 'JAR-ring'),
    v('pare back', 'recortar, reducir a lo esencial', '/peÉ™ ËˆbÃ¦k/', 'pare BACK'),
    v('prune', 'podar (un texto)', '/pruËn/', 'PRUNE'),
    v('bury the lead', 'esconder la idea principal', '/Ëˆberi Ã°É™ ËˆliËd/', 'BUR-y the LEAD'),
    v('labour a point', 'insistir demasiado en algo ya claro', '/ËˆleÉªbÉ™r É™ ËˆpÉ”Éªnt/', 'LA-bour a POINT'),
    v('seamless', 'fluido, sin costuras visibles', '/ËˆsiËmlÉ™s/', 'SEAM-less'),
    v('idiosyncratic', 'peculiar, propio de un estilo personal', '/ËŒÉªdiÉ™sÉªÅ‹ËˆkrÃ¦tÉªk/', 'id-i-o-syn-CRAT-ic'),
    v('lucidity', 'lucidez, claridad expositiva', '/luËËˆsÉªdÉ™ti/', 'lu-CID-i-ty'),
    v('authorial voice', 'voz autoral', '/É”ËËˆÎ¸É”ËriÉ™l ËˆvÉ”Éªs/', 'au-THOR-i-al VOICE')
  ],
  examples: [
    {
      en: 'She promised to pare back the third chapter by half, and she has, without losing a single essential example.',
      es: 'PrometiÃ³ recortar el tercer capÃ­tulo a la mitad, y lo ha hecho sin perder un solo ejemplo esencial.'
    },
    {
      en: 'The opening relies on parataxis for urgency; the middle section, on hypotaxis for nuance.',
      es: 'El comienzo se apoya en la parataxis para dar urgencia; la parte central, en la hipotaxis para aportar matices.'
    },
    {
      en: 'It was not the length of the sentence that fatigued the reader, but the absence of any clear destination.',
      es: 'No fue la longitud de la oraciÃ³n lo que fatigÃ³ al lector, sino la ausencia de un destino claro.'
    },
    {
      en: 'One reviewer praised the monographâ€™s lucidity; another, its quiet wit.',
      es: 'Un reseÃ±ista elogiÃ³ la claridad de la monografÃ­a; otro, su discreto ingenio.'
    },
    {
      en: 'Will the editorial board accept an idiosyncratic voice? â€” I believe so, provided the argument remains rigorous.',
      es: 'Â¿AceptarÃ¡ el consejo editorial una voz peculiar? â€” Creo que sÃ­, siempre que el argumento siga siendo riguroso.'
    },
    {
      en: 'By pruning three pleonasms and restoring active verbs, the editor cut the paragraph by a third.',
      es: 'Al podar tres pleonasmos y restituir verbos activos, la editora redujo el pÃ¡rrafo en un tercio.'
    },
    {
      en: 'Burying the lead in paragraph four ensures that busy readers never discover why the study matters.',
      es: 'Esconder la idea principal en el cuarto pÃ¡rrafo garantiza que los lectores ocupados nunca descubran por quÃ© importa el estudio.'
    },
    {
      en: 'What distinguishes crisp prose from pedestrian writing is not ornament, but the exactness of its verbs.',
      es: 'Lo que distingue la prosa limpia de la escritura prosaica no es el adorno, sino la exactitud de sus verbos.'
    }
  ],
  dialogue: [
    {
      speaker: 'Sonia',
      text: 'Iâ€™ve finished editing your essay. The argument is sharp, though the first two pages are carrying rather a lot of deadwood.',
      es: 'He terminado de editar tu ensayo. El argumento es agudo, aunque las dos primeras pÃ¡ginas arrastran bastante lastre verbal.'
    },
    {
      speaker: 'David',
      text: 'Ouch. Too many qualifiers?',
      es: 'Ay. Â¿Demasiados matizadores?'
    },
    {
      speaker: 'Sonia',
      text: 'Not qualifiers â€” inflated prepositions and noun clusters. You wrote â€œin light of the fact that the city undertook an expansion of its network.â€ Why not â€œbecause the city expanded its networkâ€?',
      es: 'No matizadores, sino preposiciones infladas y acumulaciÃ³n de sustantivos. Escribiste â€œin light of the fact that the city undertook an expansion of its networkâ€. Â¿Por quÃ© no â€œbecause the city expanded its networkâ€?'
    },
    {
      speaker: 'David',
      text: 'I suppose I wanted it to sound authoritative.',
      es: 'Supongo que querÃ­a que sonara con autoridad.'
    },
    {
      speaker: 'Sonia',
      text: 'Authority comes from precision, not syllable count. Look at paragraph three: you repeat â€œthe urban plannersâ€ four times in five lines.',
      es: 'La autoridad viene de la precisiÃ³n, no del nÃºmero de sÃ­labas. Mira el tercer pÃ¡rrafo: repites â€œthe urban plannersâ€ cuatro veces en cinco lÃ­neas.'
    },
    {
      speaker: 'David',
      text: 'Right, I could use ellipsis or â€œtheyâ€ in the coordinated clauses.',
      es: 'Cierto, podrÃ­a usar elipsis o â€œtheyâ€ en las clÃ¡usulas coordinadas.'
    },
    {
      speaker: 'Sonia',
      text: 'Yes, and look at the rhythm. Every sentence in that section is twenty-five words long with a subordinate clause at the front. It reads like a metronome.',
      es: 'SÃ­, y mira el ritmo. Cada oraciÃ³n de esa secciÃ³n mide veinticinco palabras con una subordinada delante. Suena como un metrÃ³nomo.'
    },
    {
      speaker: 'David',
      text: 'So vary the length â€” drop in a short declarative after a complex sentence?',
      es: 'Entonces variar la longitud: Â¿meter una declarativa corta tras una oraciÃ³n compleja?'
    },
    {
      speaker: 'Sonia',
      text: 'Exactly. Give the readerâ€™s ear a landing place. Also, your best insight is tucked into the middle of page two; move it to the opening paragraph.',
      es: 'Exacto. Dale al oÃ­do del lector un punto de aterrizaje. AdemÃ¡s, tu mejor hallazgo estÃ¡ escondido en mitad de la pÃ¡gina dos; llÃ©valo al primer pÃ¡rrafo.'
    },
    {
      speaker: 'David',
      text: 'I buried the lead.',
      es: 'EscondÃ­ la idea principal.'
    },
    {
      speaker: 'Sonia',
      text: 'You did. Bring it forward, trim the verbiage, and let the cadence breathe.',
      es: 'AsÃ­ es. TrÃ¡ela al frente, recorta la palabrerÃ­a y deja respirar la cadencia.' },
    {
      speaker: 'David',
      text: 'Will that leave enough room for the counter-argument? â€” I think so, if I stop labouring the background.',
      es: 'Â¿DejarÃ¡ eso espacio suficiente para el contraargumento? â€” Creo que sÃ­, si dejo de insistir demasiado en los antecedentes.'
    }
  ],
  listening: {
    script: [
      {
        speaker: 'Host',
        text: 'As a senior magazine editor, what separates a competent C1 writer from a truly accomplished C2 stylist?'
      },
      {
        speaker: 'Editor',
        text: 'Control of rhythm and omission. Competent writers know how to build long, accurate sentences; accomplished stylists know when to break them up and what to leave out.'
      },
      {
        speaker: 'Host',
        text: 'Can you give a concrete example of what gets cut on your desk?'
      },
      {
        speaker: 'Editor',
        text: 'Unnecessary repetition and throat-clearing. Writers often spend two paragraphs warming up before stating what their piece is actually about. I almost always delete the first paragraph.'
      },
      {
        speaker: 'Host',
        text: 'What about sentence structure?'
      },
      {
        speaker: 'Editor',
        text: 'Watch where the heavy material sits. If a reader has to climb through a fifteen-word subject before reaching the verb, they lose patience. Put the short, familiar anchor first and let the new, complex point land at the end.'
      },
      {
        speaker: 'Host',
        text: 'And how do you check whether a piece works?'
      },
      {
        speaker: 'Editor',
        text: 'Read it aloud. Any jarring shift, any tautology, any clumsy cadence shows up in the breath before it shows up on the screen.'
      }
    ],
    questions: [
      mc(
        'c2u09-l1',
        'According to the editor, what distinguishes a C2 stylist from a competent writer?',
        [
          'Control of rhythm and knowing what to omit',
          'Using the longest possible sentences',
          'Avoiding all subordinate clauses'
        ],
        0,
        'She highlights rhythm and knowing when to break sentences and leave things out.'
      ),
      mc(
        'c2u09-l2',
        'What does the editor mean by â€œthroat-clearingâ€?',
        [
          'Introductory paragraphs that delay getting to the main point',
          'Speaking too quietly in interviews',
          'Using technical vocabulary'
        ],
        0,
        'Writers spend paragraphs warming up before stating what the piece is about.'
      ),
      mc(
        'c2u09-l3',
        'Why should heavy material usually appear at the end of a sentence?',
        [
          'So the reader reaches the verb quickly and processes the new point smoothly',
          'Because English grammar forbids long subjects',
          'To make paragraphs look shorter'
        ],
        0,
        'Long subjects strain memory before the verb arrives.'
      ),
      tf(
        'c2u09-l4',
        'The editor recommends checking prose solely by running automated grammar software.',
        false,
        'She recommends reading the text aloud to catch jarring shifts and clumsy cadence.'
      ),
      mc(
        'c2u09-l5',
        'What does reading aloud reveal â€œin the breathâ€?',
        [
          'Clumsy cadence, tautologies and jarring shifts',
          'Spelling mistakes only',
          'Whether the topic is popular'
        ],
        0,
        'The ear and breath expose rhythmic and stylistic flaws immediately.'
      )
    ]
  },
  reading: {
    title: 'In praise of the red pen',
    text: 'Most writers imagine that revision means adding: another example, a sharper adjective, a qualifying clause to ward off critics. In reality, editorial mastery is largely subtractive. Every sentence carries a fixed budget of reader attention; words that merely announce an intention (â€œit is worth noting at this juncture thatâ€¦â€) spend that budget without buying meaning. Equally costly is the habit of treating nominalisation as a badge of seriousness. While abstract nouns allow a writer to condense a prior argument into a compact reference, piling them indiscriminately (â€œthe implementation of the optimisation of deliveryâ€) strips prose of actors and momentum. Good editors restore verbs where verbs belong, use ellipsis where the context already supplies the missing term, and vary sentence length so that complex hypotaxis is relieved by moments of crisp parataxis. None of this produces a single uniform style: a legal brief, a literary profile and an executive memo have different tolerances for ornament and compression. What unites them is economy â€” not the poverty of having little to say, but the discipline of letting every remaining word earn its place.',
    questions: [
      rc(
        'c2u09-r1',
        'What misconception about revision does the opening sentence describe?',
        [
          'That revising mainly means adding more material',
          'That revising is unnecessary for experienced writers',
          'That editors dislike examples'
        ],
        0,
        'Most writers imagine revision means adding, whereas mastery is largely subtractive.'
      ),
      rc(
        'c2u09-r2',
        'Why does the author compare reader attention to a â€œbudgetâ€?',
        [
          'Because empty filler words waste limited attention without adding meaning',
          'Because magazines pay writers by the word',
          'Because readers only read financial articles'
        ],
        0,
        'Empty phrases spend attention without buying meaning.'
      ),
      rc(
        'c2u09-r3',
        'What happens when abstract nominalisations are piled indiscriminately?',
        [
          'Prose loses actors and forward momentum',
          'The argument becomes more persuasive',
          'Sentences become too short'
        ],
        0,
        'Piling nominalisations strips prose of actors and momentum.'
      ),
      rc(
        'c2u09-r4',
        'Does editorial economy require every genre to sound identical?',
        [
          'No; different genres have different tolerances for ornament and compression',
          'Yes; all genres should use short sentences only',
          'Only legal briefs require precision'
        ],
        0,
        'Legal briefs, profiles and memos differ, yet share the discipline of economy.'
      ),
      rc(
        'c2u09-r5',
        'How does the author define â€œeconomyâ€ in the final sentence?',
        [
          'Ensuring every remaining word earns its place',
          'Writing as few words as possible regardless of meaning',
          'Avoiding all metaphors'
        ],
        0,
        'Economy is the discipline of letting every remaining word earn its place.'
      )
    ]
  },
  speaking: {
    prompt:
      'ClÃ­nica editorial en parejas (8 a 10 minutos): uno lee en voz alta un pÃ¡rrafo denso o recargado (propio o preparado), y el otro propone mejoras orales en tiempo real: dÃ³nde aplicar elipsis, quÃ© verbo restituir, dÃ³nde dividir una oraciÃ³n larga y cÃ³mo variar el ritmo. Luego intercambian roles.',
    tasks: [
      'Identify two pieces of deadwood or pleonasm and replace them with tighter phrasing.',
      'Use ellipsis or substitution (do so, hopes so, the latter) to remove an unnecessary repetition.',
      'Restructure one heavy-subject sentence using extraposition or end-weight.',
      'Contrast one complex hypotactic sentence with a crisp paratactic follow-up and read both aloud to test the cadence.'
    ]
  },
  writing: {
    prompt:
      'Rewrite and tighten a bloated 120-word paragraph (or draft a 260-word editorial/op-ed on a public topic) so that every sentence earns its place. Combine at least two instances of ellipsis or substitution, one extraposed or cleft sentence for end-weight, and deliberate alternation between hypotaxis and parataxis. Add a 70 to 90-word editorial note explaining three specific cuts or rhythmic revisions.',
    rubric: [
      'Eliminates deadwood, pleonasms and unnecessary nominalisations without losing nuance.',
      'Uses ellipsis, substitution and end-weight accurately and naturally.',
      'Demonstrates conscious rhythmic contrast between complex and crisp sentences.',
      'The editorial note analyses concrete stylistic revisions rather than giving vague impressions.'
    ],
    model:
      'Public consultations rarely fail for lack of enthusiasm; they fail because nobody explains what the responses will actually change. Residents attend evening meetings, fill out lengthy questionnaires, and wait. Months later, a glossy summary arrives â€” polite, reassuring, and suspiciously silent on every contested point. Critics blame apathy when turnout drops the following year; yet apathy is the symptom, not the cause. It surprises nobody that citizens disengage when consultation resembles theatre. Were authorities to publish, in plain language, which proposals were adopted and which rejected â€” and why â€” participation would recover quickly. Some officials fear that candour invites conflict; experience suggests it does the opposite. Trust is not built by consensus alone. It is built by showing that listening has consequences. Editorial note: I cut an opening sentence of throat-clearing (â€œIt is widely recognised at this junctureâ€¦â€), replaced â€œthe implementation of plain-language publicationâ€ with â€œpublish, in plain languageâ€, used verbal substitution (â€œdoes the oppositeâ€) to avoid repeating â€œinvites conflictâ€, and closed with two short paratactic sentences to sharpen the cadence.'
  },
  pronunciation: {
    items: [
      { word: 'cadence', ipa: '/ËˆkeÉªdns/', stress: 'CA-dence' },
      { word: 'euphony', ipa: '/ËˆjuËfÉ™ni/', stress: 'EU-pho-ny' },
      { word: 'tautology', ipa: '/tÉ”ËËˆtÉ’lÉ™dÊ’i/', stress: 'tau-TOL-o-gy' },
      { word: 'turgid', ipa: '/ËˆtÉœËdÊ’Éªd/', stress: 'TUR-gid' },
      { word: 'pleonasm', ipa: '/ËˆpliËÉ™nÃ¦zÉ™m/', stress: 'PLE-o-nasm' }
    ],
    tips: [
      'Al leer en voz alta para revisar estilo, marca las pausas naturales: si te falta el aire antes del verbo principal, el sujeto es demasiado largo.',
      'En estructuras con elipsis (â€œthe first draft favoured speed; the second, precisionâ€), haz una pausa breve donde se omite el verbo.',
      'En palabras de origen griego como tautology y hypotaxis, el acento recae en la antepenÃºltima o penÃºltima sÃ­laba: tau-TOL-o-gy, hy-po-TAX-is.'
    ]
  },
  exercises: [
    mc(
      'c2u09-e1',
      'Which sentence uses ellipsis most naturally to avoid repetition?',
      [
        'The first draft favoured speed; the second, precision.',
        'The first draft favoured speed; the second draft favoured precision too.',
        'The first draft favoured speed; the second one it favoured precision.'
      ],
      0,
      'Omitting the repeated noun and verb creates crisp editorial balance.',
      'Choose the best option.'
    ),
    fb(
      'c2u09-e2',
      'Will the revised edition be ready by October? â€” The editor hopes ___.',
      'so',
      'Clause substitution: hope so / fear not.',
      undefined,
      'Write the missing proform.'
    ),
    fb(
      'c2u09-e3',
      'Saying â€œa free giftâ€ or â€œan unexpected surpriseâ€ is an example of a ___.',
      'pleonasm',
      'Pleonasm = using redundant words whose meaning is already contained.',
      ['tautology'],
      'Write the stylistic term.'
    ),
    wo(
      'c2u09-e4',
      ['had', 'Seldom', 'an', 'editor', 'cut', 'so', 'much', 'with', 'so', 'little', 'regret'],
      ['Seldom', 'had', 'an', 'editor', 'cut', 'so', 'much', 'with', 'so', 'little', 'regret'],
      'Inverted opening with rhythmic parallelism.'
    ),
    tf(
      'c2u09-e5',
      'End-weight recommends placing the longest, most complex element at the start of a sentence as the grammatical subject.',
      false,
      'End-weight places heavy elements toward the end of the clause.'
    ),
    mt(
      'c2u09-e6',
      'Match each stylistic term with its definition.',
      [
        ['parataxis', 'placing short clauses side by side without subordination'],
        ['hypotaxis', 'linking clauses through hierarchical subordination'],
        ['extraposition', 'moving a heavy subject clause to the end using dummy â€œitâ€'],
        ['bury the lead', 'hide the central point deep inside a text']
      ],
      'Knowing the terms helps diagnose and repair prose.'
    ),
    tr(
      'c2u09-e7',
      'Prune the deadwood and nominalisation into a crisp active sentence.',
      'Due to the fact that the committee conducted an investigation into the leak, the launch was delayed.',
      'Because the committee investigated the leak, the launch was delayed',
      'Replace â€œdue to the fact thatâ€ with â€œbecauseâ€ and restore the verb â€œinvestigatedâ€.',
      [
        'Because the committee investigated the leak the launch was delayed',
        'Since the committee investigated the leak, the launch was delayed'
      ]
    ),
    tr(
      'c2u09-e8',
      'Improve end-weight using extraposition starting with â€œItâ€.',
      'That the board ignored the auditorâ€™s warning despite three memos astonished everyone.',
      'It astonished everyone that the board ignored the auditorâ€™s warning despite three memos',
      'Dummy â€œItâ€ moves the heavy that-clause to the end.',
      ['It astonished everyone that the board had ignored the auditorâ€™s warning despite three memos']
    ),
    rc(
      'c2u09-e9',
      'What editorial flaw does the passage exemplify?',
      [
        'Bloated phrasing and noun stacking that obscure agency',
        'Excessive use of short paratactic sentences',
        'Informal slang inappropriate for a report'
      ],
      0,
      'â€œAt this junctureâ€ and stacked abstract nouns dilute the action.',
      'â€œAt this point in time, the facilitation of the implementation of the revised guidelines is being undertaken by the relevant stakeholders.â€'
    ),
    sa(
      'c2u09-e10',
      'Edit this bloated sentence into two crisp sentences (one hypotactic, one paratactic) without losing any factual detail: â€œIn spite of the fact that the author made a promise to shorten the introduction, which was very long, she actually ended up adding two more pages, and this disappointed the editor.â€',
      'Model: â€œAlthough the author had promised to shorten her sprawling introduction, she added two further pages. The editor was not pleased.â€ Check: deadwood removed, rhythmic contrast achieved.'
    )
  ],
  assessment: [
    mc(
      'c2u09-t1',
      'Which sentence demonstrates effective end-weight?',
      [
        'It became clear that the committee had overlooked two crucial witnesses.',
        'That the committee had overlooked two crucial witnesses became clear.',
        'Two crucial witnesses by the committee overlooked became clear.'
      ],
      0,
      'Extraposition with â€œItâ€ places the heavy clause at the end.'
    ),
    mc(
      'c2u09-t2',
      'Complete the substitution naturally: â€œDo we need to rewrite the conclusion?â€ â€” â€œIâ€™m afraid ___.â€',
      ['so', 'it', 'that'],
      0,
      'â€œIâ€™m afraid soâ€ substitutes for the affirmative clause.',
    ),
    fb(
      'c2u09-t3',
      'She said she would trim the appendix, and she ___.',
      'has',
      'Auxiliary ellipsis: â€œand she has [trimmed it]â€ (or â€œdidâ€).',
      ['did'],
      'Write the missing auxiliary.'
    ),
    fb(
      'c2u09-t4',
      'Unnecessary filler and inflated wording in a draft are often called ___.',
      'deadwood',
      'deadwood = superfluous words that weigh down prose.',
      ['verbiage'],
      'Write the editorial term.'
    ),
    tf(
      'c2u09-t5',
      'Nominalisation should always be avoided in academic and professional writing.',
      false,
      'It is useful for compact back-reference when controlled, though harmful when stacked.'
    ),
    tf(
      'c2u09-t6',
      'Reading a draft aloud helps detect awkward cadence and misplaced emphasis.',
      true,
      'The ear catches rhythmic problems that silent reading misses.'
    ),
    wo(
      'c2u09-t7',
      ['one', 'What', 'leaves', 'out', 'often', 'matters', 'more', 'than', 'what', 'one', 'keeps'],
      ['What', 'one', 'leaves', 'out', 'often', 'matters', 'more', 'than', 'what', 'one', 'keeps'],
      'Balanced cleft/nominal-relative contrast.'
    ),
    mc(
      'c2u09-t8',
      'Which revision best eliminates the pleonasm in â€œthe true facts of the actual matterâ€?',
      [
        'the facts of the matter',
        'the very true facts of the actual matter',
        'the real facts of the matter itself'
      ],
      0,
      'Facts are already true; cutting â€œtrueâ€ and â€œactualâ€ removes redundancy.'
    ),
    tr(
      'c2u09-t9',
      'Replace the inflated phrase with a single verb: â€œmake an adjustment toâ€.',
      'We need to make an adjustment to the opening paragraph.',
      'We need to adjust the opening paragraph',
      'Restoring the verb tightens the clause.',
      ['We must adjust the opening paragraph']
    ),
    mc(
      'c2u09-t10',
      'What is the effect of alternating long hypotactic sentences with a short paratactic statement?',
      [
        'It creates rhythmic relief and highlights the concluding point',
        'It makes the argument illogical',
        'It removes all cohesion'
      ],
      0,
      'Short statements after complex ones land with emphasis.'
    )
  ],
  review: [
    'Use ellipsis and substitution (so, not, do, one) to eliminate repetition cleanly.',
    'Apply end-focus and end-weight: keep subjects manageable and let complex or new ideas land at the end.',
    'Alternate hypotaxis (nuance and subordination) with parataxis (pace and punch).',
    'Prune deadwood, pleonasms and stacked nominalisations while keeping nominalisation where back-reference helps.',
    'Read drafts aloud to test cadence, breath and register fit across genres.'
  ]
};

export default unit;
