import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';

const unit: Unit = {
  id: 'c2-u10',
  level: 'C2',
  unitNumber: 10,
  title: 'C2 Integrated Mastery',
  subtitle: 'Synthesise nuance, rhetoric, style and spontaneous control',
  communicativeGoal:
    'Integrar todas las competencias del nivel C2 con autonomÃ­a y flexibilidad: mediar entre discursos complejos, ajustar el registro en tiempo real, sostener argumentos matizados y expresarse con precisiÃ³n, naturalidad y control editorial.',
  objectives: [
    'Seleccionar al vuelo la estructura gramatical y lÃ©xica Ã³ptima segÃºn propÃ³sito, audiencia, medio y registro.',
    'Mediar y sintetizar posturas enfrentadas identificando supuestos tÃ¡citos, falacias, subtexto e implicaturas.',
    'Autorregular la comunicaciÃ³n oral y escrita: reparar, recalibrar el grado de certeza y evitar el exceso retÃ³rico.',
    'Consolidar estrategias autÃ³nomas de perfeccionamiento continuo mÃ¡s allÃ¡ del curso (observaciÃ³n de corpus, lectura crÃ­tica y revisiÃ³n estilÃ­stica).'
  ],
  grammar: {
    title: 'C2 integrated review: pragmatic control, register, rhetoric and synthesis',
    explanation: [
      'En el nivel C2 Proficiency, el dominio del idioma ya no consiste en recordar reglas aisladas, sino en tomar decisiones simultÃ¡neas de precisiÃ³n lÃ©xica, arquitectura sintÃ¡ctica y adecuaciÃ³n pragmÃ¡tica. Una misma idea puede formularse como afirmaciÃ³n categÃ³rica ("The policy failed"), cautela calibrada ("The evidence suggests the policy fell short of its stated aims"), atribuciÃ³n distante ("The policy is widely held to have misfired"), concesiÃ³n diplomÃ¡tica ("While the policy was not without merit, its execution proved flawed") o ironÃ­a contenida ("The policy was not, shall we say, an unqualified triumph"). Elegir la variante exacta en cada contexto es la esencia de la competencia C2.',
      'SÃ­ntesis gramatical al servicio del sentido: la inversiÃ³n negativa (Seldom, Not only, Little didâ€¦), las oraciones hendidas (What is at stake isâ€¦), los condicionales mixtos e invertidos (Were we toâ€¦, Had they foreseenâ€¦), el subjuntivo mandativo (It is imperative thatâ€¦ beâ€¦), las clÃ¡usulas participiales y absolutas, y la elipsis/sustituciÃ³n forman un repertorio Ãºnico. El hablante experto no acumula estructuras complejas para exhibirse; las reserva para los puntos donde aportan foco, ritmo o economÃ­a.',
      'MediaciÃ³n y sÃ­ntesis crÃ­tica: en contextos profesionales y acadÃ©micos avanzados, rara vez basta con expresar la propia opiniÃ³n. Hay que resumir con fidelidad la postura mÃ¡s fuerte del interlocutor (steelmanning), detectar dÃ³nde divergen los criterios (valores frente a hechos, condiciones necesarias frente a suficientes), seÃ±alar ambigÃ¼edades o sesgos sin caer en la pedanterÃ­a y proponer un terreno comÃºn operativo.',
      'Control en tiempo real y reparaciÃ³n elegante: incluso los hablantes mÃ¡s competentes dudan, reformulan o corrigen el rumbo. FÃ³rmulas como "Let me qualify that", "To put it more precisely", "I may have overstated the point â€” what I meant wasâ€¦" y "Without wishing to labour the distinctionâ€¦" permiten ajustar el tiro sobre la marcha conservando autoridad y claridad.',
      'AutonomÃ­a mÃ¡s allÃ¡ de C2: mantener y afinar este nivel exige leer textos exigentes fijÃ¡ndose en las colocaciones y la prosodia semÃ¡ntica, escuchar discursos y debates observando cÃ³mo se gestiona el turno y el desacuerdo, y revisar lo que uno escribe en voz alta para podar el lastre verbal. La maestrÃ­a no es infalibilidad: es criterio, oÃ­do y capacidad de ajuste.'
    ],
    forms: [
      {
        label: 'Precision, calibration and concession',
        lines: [
          'The findings are, at best, suggestive; they fall well short of establishing causation.',
          'Granted that the pilot lowered costs in the short term; for all that, its scalability remains unproven.',
          'To frame this as a choice between speed and rigour is a false dichotomy.',
          'I may have overstated the risk; let me qualify that in light of the revised figures.'
        ]
      },
      {
        label: 'Diplomacy, subtext and register control',
        lines: [
          'I was hoping we might revisit the clause before either side commits.',
          'While the proposal is not without merit, it sits uneasily with our current remit.',
          'The spokespersonâ€™s reply was studiedly non-committal, leaving room for manoeuvre.',
          'Off the record, the deadline looks tight; on the record, we are reviewing options.'
        ]
      },
      {
        label: 'Rhetoric, style and synthesis',
        lines: [
          'What is at stake is less the wording of the clause than who gets to interpret it.',
          'Had the planners looked beyond the immediate savings, they might have foreseen the bottleneck.',
          'The first report favoured breadth; the second, depth â€” taken together, they tell a coherent story.',
          'It is imperative that every stakeholder be heard before the mandate is renewed.'
        ]
      },
      {
        label: 'Useful expressions and collocations',
        lines: [
          'strike a balance; synthesise competing views; distil the essence',
          'calibrate oneâ€™s claim; qualify a statement; hold two ideas in tension',
          'read the room; adapt on the fly; repair without losing authority',
          'cut through the jargon; separate signal from noise; get to the crux',
          'give credit where it is due; steelman an objection',
          'resist easy binaries; err on the side of precision',
          'seamless transition; earned restraint; intellectual honesty',
          'bring the threads together; leave the door open'
        ]
      }
    ]
  },
  vocabulary: [
    v('synthesis', 'sÃ­ntesis, integraciÃ³n coherente', '/ËˆsÉªnÎ¸É™sÉªs/', 'SYN-the-sis'),
    v('calibration', 'calibraciÃ³n, ajuste preciso', '/ËŒkÃ¦lÉªËˆbreÉªÊƒn/', 'cal-i-BRA-tion'),
    v('mediation', 'mediaciÃ³n (lingÃ¼Ã­stica o de posturas)', '/ËŒmiËdiËˆeÉªÊƒn/', 'me-di-A-tion'),
    v('nuanced', 'matizado, sutil', '/ËˆnjuËÉ‘Ënst/', 'NU-anced'),
    v('register', 'registro lingÃ¼Ã­stico', '/ËˆredÊ’ÉªstÉ™/', 'REG-is-ter'),
    v('pragmatics', 'pragmÃ¡tica (uso contextual del lenguaje)', '/prÃ¦É¡ËˆmÃ¦tÉªks/', 'prag-MAT-ics'),
    v('reconcile', 'conciliar, armonizar', '/ËˆrekÉ™nsaÉªl/', 'REC-on-cile'),
    v('distil', 'destilar, extraer lo esencial', '/dÉªËˆstÉªl/', 'dis-TIL'),
    v('parse', 'analizar con precisiÃ³n (un texto o frase)', '/pÉ‘Ëz/', 'PARSE'),
    v('temper', 'moderar, atemperar', '/ËˆtempÉ™/', 'TEM-per'),
    v('underpin', 'sustentar, servir de base', '/ËŒÊŒndÉ™ËˆpÉªn/', 'un-der-PIN'),
    v('commensurate', 'proporcional, acorde con', '/kÉ™ËˆmenÊƒÉ™rÉ™t/', 'com-MEN-su-rate'),
    v('salient', 'sobresaliente, mÃ¡s relevante', '/ËˆseÉªliÉ™nt/', 'SA-li-ent'),
    v('cogency', 'solidez lÃ³gica, fuerza persuasiva', '/ËˆkÉ™ÊŠdÊ’É™nsi/', 'CO-gen-cy'),
    v('reframe', 'replantear, reencuadrar', '/ËŒriËËˆfreÉªm/', 're-FRAME'),
    v('disentangle', 'desenredar, separar elementos mezclados', '/ËŒdÉªsÉªnËˆtÃ¦Å‹É¡l/', 'dis-en-TAN-gle'),
    v('overstate', 'exagerar, afirmar mÃ¡s de lo debido', '/ËŒÉ™ÊŠvÉ™ËˆsteÉªt/', 'o-ver-STATE'),
    v('understate', 'minimizar, expresar con contenciÃ³n', '/ËŒÊŒndÉ™ËˆsteÉªt/', 'un-der-STATE'),
    v('equanimity', 'ecuanimidad, serenidad', '/ËŒekwÉ™ËˆnÉªmÉ™ti/', 'e-qua-NIM-i-ty'),
    v('tact', 'tacto, delicadeza', '/tÃ¦kt/', 'TACT'),
    v('self-correction', 'autocorrecciÃ³n', '/ËŒself kÉ™ËˆrekÊƒn/', 'self-cor-REC-tion'),
    v('intellectual honesty', 'honestidad intelectual', '/ËŒÉªntÉ™lektÊƒuÉ™l ËˆÉ’nÉ™sti/', 'in-tel-LEC-tu-al HON-es-ty'),
    v('signal from noise', 'lo esencial frente al ruido', '/ËˆsÉªÉ¡nÉ™l frÉ™m nÉ”Éªz/', 'SIG-nal from NOISE'),
    v('hold in tension', 'sostener dos ideas en tensiÃ³n sin simplificar', '/hÉ™ÊŠld Éªn ËˆtenÊƒn/', 'hold in TEN-sion')
  ],
  examples: [
    {
      en: 'A genuinely nuanced reading holds two truths in tension: the reform widened access, yet eroded local autonomy.',
      es: 'Una lectura verdaderamente matizada sostiene dos verdades en tensiÃ³n: la reforma ampliÃ³ el acceso, pero erosionÃ³ la autonomÃ­a local.'
    },
    {
      en: 'Before answering, it helps to disentangle the empirical claim from the value judgement underpinning it.',
      es: 'Antes de responder, conviene separar la afirmaciÃ³n empÃ­rica del juicio de valor que la sustenta.'
    },
    {
      en: 'Let me temper what I said earlier: the figures are not proof of failure, though they do warrant scrutiny.',
      es: 'PermÃ­tame moderar lo que dije antes: las cifras no prueban un fracaso, aunque sÃ­ justifican un examen detenido.'
    },
    {
      en: 'Were we to distil the entire three-hour debate into a single question, it would be who bears the transition cost.',
      es: 'Si destilÃ¡ramos todo el debate de tres horas en una sola pregunta, serÃ­a quiÃ©n asume el costo de la transiciÃ³n.'
    },
    {
      en: 'Her strength as a mediator lies in parsing each sideâ€™s position so fairly that both feel heard.',
      es: 'Su fortaleza como mediadora reside en analizar la postura de cada parte con tanta justicia que ambas se sienten escuchadas.'
    },
    {
      en: 'Confidence in a conclusion ought to be commensurate with the quality of the evidence, never with the volume of the rhetoric.',
      es: 'La confianza en una conclusiÃ³n debe ser proporcional a la calidad de las pruebas, nunca al volumen de la retÃ³rica.'
    },
    {
      en: 'The reportâ€™s tone is measured and its prose crisp â€” proof that authority needs neither jargon nor deadwood.',
      es: 'El tono del informe es mesurado y su prosa limpia: prueba de que la autoridad no necesita ni jerga ni lastre verbal.'
    },
    {
      en: 'Far from signalling weakness, timely self-correction is one of the surest marks of linguistic and intellectual control.',
      es: 'Lejos de seÃ±alar debilidad, la autocorrecciÃ³n oportuna es una de las seÃ±ales mÃ¡s seguras de control lingÃ¼Ã­stico e intelectual.'
    }
  ],
  dialogue: [
    {
      speaker: 'Moderator',
      text: 'Weâ€™ve reached the final round of our symposium. Before we close, could each of you summarise where you see common ground â€” and where the real disagreement still lies?',
      es: 'Hemos llegado a la ronda final de nuestro simposio. Antes de cerrar, Â¿podrÃ­a cada uno resumir dÃ³nde ve terreno comÃºn y dÃ³nde sigue estando el desacuerdo real?'
    },
    {
      speaker: 'Dr Okafor',
      text: 'Gladly. If I may distil the morningâ€™s debate, nobody here disputes that automated screening saves administrative time. Where we part company is on whether speed has been bought at the cost of opacity.',
      es: 'Con gusto. Si puedo destilar el debate de la maÃ±ana, nadie aquÃ­ discute que el filtrado automÃ¡tico ahorra tiempo administrativo. Donde nos separamos es en si la rapidez se ha comprado al precio de la opacidad.'
    },
    {
      speaker: 'Ms Lindqvist',
      text: 'Thatâ€™s a fair summary, and Iâ€™d like to qualify one remark I made earlier. I said human panels were â€œjust as biasedâ€ as algorithms; that was overstated. What I meant was that human bias is harder to audit systematically.',
      es: 'Es un resumen justo, y quisiera matizar un comentario que hice antes. Dije que los tribunales humanos eran â€œigual de sesgadosâ€ que los algoritmos; fue exagerado. Lo que querÃ­a decir es que el sesgo humano es mÃ¡s difÃ­cil de auditar sistemÃ¡ticamente.'
    },
    {
      speaker: 'Dr Okafor',
      text: 'I appreciate that clarification â€” it moves us past a false dichotomy between flawed humans and infallible machines.',
      es: 'Agradezco esa aclaraciÃ³n: nos saca de un falso dilema entre humanos imperfectos y mÃ¡quinas infalibles.'
    },
    {
      speaker: 'Moderator',
      text: 'So the salient question isnâ€™t whether to use tools, but under what safeguards. Would a mandatory audit trail bridge the gap?',
      es: 'AsÃ­ que la cuestiÃ³n central no es si usar herramientas, sino bajo quÃ© garantÃ­as. Â¿CerrarÃ­a la brecha un registro de auditorÃ­a obligatorio?'
    },
    {
      speaker: 'Ms Lindqvist',
      text: 'It might well, provided the audit criteria are public and not merely proprietary.',
      es: 'PodrÃ­a hacerlo, siempre que los criterios de auditorÃ­a sean pÃºblicos y no meramente privados.'
    },
    {
      speaker: 'Dr Okafor',
      text: 'And provided that applicants retain a meaningful right of human review. Without that, transparency risks becoming a polite formality.',
      es: 'Y siempre que los candidatos conserven un derecho real de revisiÃ³n humana. Sin eso, la transparencia corre el riesgo de volverse una formalidad cortÃ©s.'
    },
    {
      speaker: 'Moderator',
      text: 'Look how far weâ€™ve moved from the opening deadlock: two hours ago, one side called the system â€œuntenableâ€ and the other â€œindispensableâ€.',
      es: 'Miren cuÃ¡nto hemos avanzado desde el punto muerto inicial: hace dos horas, un lado llamaba al sistema â€œinsostenibleâ€ y el otro â€œindispensableâ€.'
    },
    {
      speaker: 'Ms Lindqvist',
      text: 'Deadpan rhetoric makes good headlines; nuanced compromise makes workable policy.',
      es: 'La retÃ³rica rotunda da buenos titulares; el compromiso matizado hace polÃ­ticas viables.'
    },
    {
      speaker: 'Dr Okafor',
      text: 'A neat epigram â€” though letâ€™s make sure the compromise has teeth, not just graceful phrasing.',
      es: 'Un epigrama limpio; aunque asegurÃ©monos de que el compromiso tenga fuerza real, no solo buena redacciÃ³n.'
    },
    {
      speaker: 'Moderator',
      text: 'Noted. Let me bring the threads together for the minutes: public audit criteria, human review on appeal, and a twelve-month pilot.',
      es: 'Tomado nota. PermÃ­tanme reunir los hilos para el acta: criterios pÃºblicos de auditorÃ­a, revisiÃ³n humana en apelaciÃ³n y un piloto de doce meses.'
    },
    {
      speaker: 'Ms Lindqvist',
      text: 'That captures it precisely. Thank you both for an unusually candid exchange.',
      es: 'Eso lo recoge con precisiÃ³n. Gracias a ambos por un intercambio inusualmente franco.'
    }
  ],
  listening: {
    script: [
      {
        speaker: 'Host',
        text: 'Youâ€™ve examined C2 candidates and trained simultaneous interpreters for fifteen years. What actually separates mastery from mere advanced competence?'
      },
      {
        speaker: 'Examiner',
        text: 'Flexibility and restraint. At C1, learners can already handle complex grammar and broad vocabulary. At C2, they know when not to use the heaviest word or the longest sentence.'
      },
      {
        speaker: 'Host',
        text: 'So itâ€™s partly about judgement?'
      },
      {
        speaker: 'Examiner',
        text: 'Entirely about judgement. A C2 speaker calibrates certainty to the evidence, shifts register seamlessly when the room changes, and reads subtext without becoming cynical.'
      },
      {
        speaker: 'Host',
        text: 'What happens when a C2 speaker makes a slip or canâ€™t find the exact phrase?'
      },
      {
        speaker: 'Examiner',
        text: 'They repair it with equanimity. Instead of freezing or apologising profusely, they say â€œor ratherâ€, â€œto put it more preciselyâ€, or â€œlet me qualify thatâ€, and keep the listener with them.'
      },
      {
        speaker: 'Host',
        text: 'And how can someone sustain this level once formal classes end?'
      },
      {
        speaker: 'Examiner',
        text: 'Read widely across genres, notice how writers structure arguments and handle disagreement, and edit your own writing aloud. Mastery is not a static certificate; it is an active habit of attention.'
      }
    ],
    questions: [
      mc(
        'c2u10-l1',
        'According to the examiner, what distinguishes C2 mastery from C1 competence?',
        [
          'Flexibility, restraint and judgement about when not to overcomplicate',
          'Memorising obscure dictionary words',
          'Never pausing or correcting oneself'
        ],
        0,
        'She emphasises flexibility, restraint and knowing when not to use the heaviest option.'
      ),
      mc(
        'c2u10-l2',
        'How does a C2 speaker handle a slip or missing phrase?',
        [
          'By repairing smoothly with phrases like â€œto put it more preciselyâ€ without losing poise',
          'By stopping the conversation immediately',
          'By pretending nothing was said'
        ],
        0,
        'They repair with equanimity and keep the listener engaged.'
      ),
      mc(
        'c2u10-l3',
        'What does the examiner say about reading subtext?',
        [
          'C2 speakers read subtext accurately without becoming cynical',
          'C2 speakers ignore subtext and take everything literally',
          'Subtext exists only in literature'
        ],
        0,
        'She notes reading subtext without cynicism.'
      ),
      tf(
        'c2u10-l4',
        'The examiner describes C2 mastery as a permanent state that requires no further attention once achieved.',
        false,
        'She calls it â€œan active habit of attentionâ€, not a static certificate.'
      ),
      mc(
        'c2u10-l5',
        'Which ongoing habits does she recommend after formal classes end?',
        [
          'Wide reading across genres, noticing argumentation and editing aloud',
          'Repeating beginner drills daily',
          'Avoiding complex debates'
        ],
        0,
        'She recommends wide reading, noticing how disagreement is handled and editing aloud.'
      )
    ]
  },
  reading: {
    title: 'Beyond correctness: what proficiency actually looks like',
    text: 'Anyone who has watched a skilled diplomat, editor or scholar work in a second language soon notices that their authority has little to do with grammatical perfection in the narrow sense. Native speakers themselves hesitate, revise mid-clause and occasionally reach for a rough approximation. What marks genuine proficiency at the highest level is something quieter and far more demanding: control over proportion. The proficient speaker matches certainty to evidence, register to occasion and ornament to purpose. They know that a sweeping generalisation invites easy refutation, that an unexamined metaphor can smuggle in an assumption, and that an abrupt shift in tone can undo three paragraphs of patient reasoning. Equally important is the capacity to mediate â€” to parse an opponentâ€™s case in its strongest form before answering it, to separate signal from noise, and to recognise when ambiguity keeps a conversation alive and when it merely stalls it. Such competence is never finished. It grows through attentive reading, candid feedback and the willingness to treat every sentence â€” oneâ€™s own included â€” as something that can be clarified, tempered or pared back.',
    questions: [
      rc(
        'c2u10-r1',
        'What does the author argue marks genuine C2 proficiency?',
        [
          'Control over proportion â€” matching certainty, register and style to context',
          'Total absence of hesitation',
          'Using rare vocabulary in every sentence'
        ],
        0,
        'The text defines proficiency as control over proportion.'
      ),
      rc(
        'c2u10-r2',
        'Why does the author mention that native speakers also hesitate and revise?',
        [
          'To show that mastery is not robotic perfection, but controlled judgement',
          'To argue that grammar does not matter',
          'To discourage learners from editing'
        ],
        0,
        'It separates narrow perfection from genuine communicative control.'
      ),
      rc(
        'c2u10-r3',
        'What can happen if a writer makes an abrupt shift in tone?',
        [
          'It can undermine paragraphs of careful reasoning',
          'It automatically improves persuasion',
          'It solves ambiguity'
        ],
        0,
        'An abrupt shift in tone can undo three paragraphs of patient reasoning.'
      ),
      rc(
        'c2u10-r4',
        'What does mediation involve, according to the passage?',
        [
          'Representing an opponentâ€™s strongest case fairly, separating signal from noise and judging ambiguity',
          'Agreeing with every speaker indiscriminately',
          'Avoiding all disagreement'
        ],
        0,
        'Mediation means parsing the strongest case, filtering noise and judging ambiguity.'
      ),
      rc(
        'c2u10-r5',
        'How does the author view the future of a proficient speakerâ€™s development?',
        [
          'As an ongoing process sustained by attentive reading, feedback and revision',
          'As complete once a test is passed',
          'As impossible without living abroad'
        ],
        0,
        'â€œSuch competence is never finishedâ€ and grows through reading, feedback and revision.'
      )
    ]
  },
  speaking: {
    prompt:
      'Mesa redonda integradora (10 a 12 minutos): en grupos de tres, elijan un dilema pÃºblico complejo (regulaciÃ³n de la IA, vivienda urbana o transiciÃ³n energÃ©tica). Uno actÃºa como moderador/mediador y dos defienden posturas matizadas. Deben conceder, recalibrar afirmaciones, detectar subtexto, reparar al menos una formulaciÃ³n sobre la marcha y cerrar con una sÃ­ntesis comÃºn.',
    tasks: [
      'Present a calibrated position using concession, hedging and precise collocations.',
      'Mediate between two viewpoints by steelmanning each side before proposing common ground.',
      'Self-repair or qualify one statement smoothly mid-turn (Let me temper that; To put it more preciselyâ€¦).',
      'Close with a concise synthesis that separates agreed facts from remaining value differences.'
    ]
  },
  writing: {
    prompt:
      'Write a capstone synthesis essay or policy brief (340 to 400 words) addressing a complex contemporary question of your choice. Integrate at least six C2 features across the course: calibrated hedging, concession, an inverted or mixed conditional, ellipsis/substitution, controlled syntactic rhythm and diplomatic framing of the strongest counter-argument. Add an 80 to 100-word self-assessment evaluating your register, precision and remaining areas for growth.',
    rubric: [
      'Demonstrates cohesive, authoritative command of C2 syntax, lexis and punctuation.',
      'Balances conviction with intellectual honesty: calibrated claims and a steelmanned counter-argument.',
      'Applies editorial economy: zero deadwood, clear end-weight and natural rhythm.',
      'The self-assessment diagnoses real stylistic choices and sets a concrete post-C2 habit.'
    ],
    model:
      'Few public debates suffer more from false binaries than the argument over artificial intelligence in education. Commentators routinely frame the choice as one between wholesale prohibition and uncritical adoption â€” a framing that spares both sides the harder work of institutional design. Granted, unrestricted use of automated drafting can erode foundational writing habits; for all that, blanket bans have proved largely unenforceable and risk penalising students unevenly. What is at stake is less whether learners will encounter these tools than how assessment measures genuine understanding. Were universities to shift weight towards oral defence, iterative drafting and source verification, the incentive to outsource thought would diminish sharply. Critics might object that such reforms demand staff time few departments can spare, and they are right to press the point. Yet doing nothing carries costs of its own, albeit less visible ones on a balance sheet. A workable middle ground is neither naive optimism nor defensive nostalgia, but deliberate redesign: clear boundaries where independent practice matters, and transparent integration where tools aid inquiry. Self-assessment: I paired concession (â€œfor all thatâ€) with an inverted conditional (â€œWere universities toâ€¦â€) and used ellipsis (â€œalbeit less visible onesâ€) to preserve rhythm. I kept claims proportional to evidence, avoiding sweeping predictions. Going forward, I want to read more policy briefs aloud to refine transitions between counter-arguments and recommendations.'
  },
  pronunciation: {
    items: [
      { word: 'commensurate', ipa: '/kÉ™ËˆmenÊƒÉ™rÉ™t/', stress: 'com-MEN-su-rate' },
      { word: 'equanimity', ipa: '/ËŒekwÉ™ËˆnÉªmÉ™ti/', stress: 'e-qua-NIM-i-ty' },
      { word: 'synthesis', ipa: '/ËˆsÉªnÎ¸É™sÉªs/', stress: 'SYN-the-sis' },
      { word: 'salient', ipa: '/ËˆseÉªliÉ™nt/', stress: 'SA-li-ent' },
      { word: 'pragmatics', ipa: '/prÃ¦É¡ËˆmÃ¦tÉªks/', stress: 'prag-MAT-ics' }
    ],
    tips: [
      'En una intervenciÃ³n extensa de nivel C2, utiliza las pausas para marcar estructura lÃ³gica: antes de una concesiÃ³n, antes de una reparaciÃ³n (â€œor ratherâ€¦â€) y antes de la sÃ­ntesis final.',
      'Evita el tono monocorde al leer textos complejos: realza el contraste mediante acento lÃ©xico (â€œnot SPEED, | but conTROLâ€).',
      'En palabras de cuatro o cinco sÃ­labas como commensurate y equanimity, respeta la reducciÃ³n de las sÃ­labas Ã¡tonas para mantener la fluidez natural.'
    ]
  },
  exercises: [
    mc(
      'c2u10-e1',
      'Which self-repair sounds most poised and authoritative in a formal seminar?',
      [
        'I may have overstated that point; let me qualify it in light of the revised data.',
        'Wait, sorry, my English is bad, I said it wrong.',
        'Never mind, forget everything I just said.'
      ],
      0,
      'A calm qualification preserves credibility and refines the claim.',
      'Choose the best option.'
    ),
    fb(
      'c2u10-e2',
      'Confidence in a conclusion ought to be ___ with the quality of the evidence.',
      'commensurate',
      'commensurate with = proportionate to.',
      undefined,
      'Write the missing adjective.'
    ),
    fb(
      'c2u10-e3',
      'A nuanced analysis can hold two competing truths in ___.',
      'tension',
      'hold A and B in tension = keep both valid aspects in view without oversimplifying.',
      undefined,
      'Write the missing noun.'
    ),
    wo(
      'c2u10-e4',
      ['that', 'Granted', 'the', 'evidence', 'is', 'mixed', 'the', 'case', 'remains', 'compelling'],
      ['Granted', 'that', 'the', 'evidence', 'is', 'mixed', 'the', 'case', 'remains', 'compelling'],
      'Concessive framing followed by a qualified conclusion.'
    ),
    tf(
      'c2u10-e5',
      'True C2 mastery requires using the rarest vocabulary and longest possible sentences on every occasion.',
      false,
      'Mastery lies in proportion, restraint and choosing the right level of complexity for the context.'
    ),
    mt(
      'c2u10-e6',
      'Match each C2 competence with its description.',
      [
        ['calibration', 'matching certainty to the strength of evidence'],
        ['steelmanning', 'addressing the strongest version of an opposing view'],
        ['end-weight', 'placing long, complex clauses toward the end of a sentence'],
        ['face-saving', 'preserving dignity and standing during disagreement']
      ],
      'These four pillars integrate grammar, rhetoric and pragmatics.'
    ),
    tr(
      'c2u10-e7',
      'Tighten and calibrate the claim using â€œat best, suggestiveâ€.',
      'In light of the fact that the sample was small, the results clearly prove nothing at all.',
      'Because the sample was small, the results are, at best, suggestive',
      'Replace deadwood with â€œbecauseâ€ and calibrate the claim.',
      [
        'Because the sample was small, the results are at best suggestive',
        'Since the sample was small, the results are, at best, suggestive'
      ]
    ),
    tr(
      'c2u10-e8',
      'Combine with an inverted conditional starting with â€œWereâ€.',
      'If the committee were to adopt a pilot, both sides might find common ground.',
      'Were the committee to adopt a pilot, both sides might find common ground',
      'Were + subject + to-infinitive.',
      ['Were the committee to adopt a pilot both sides might find common ground']
    ),
    rc(
      'c2u10-e9',
      'What does the speakerâ€™s final remark imply?',
      [
        'A compromise must include concrete enforcement, not just diplomatic wording',
        'The wording of the agreement is unimportant',
        'Both sides refused to negotiate'
      ],
      0,
      'â€œHave teethâ€ means having real, enforceable mechanisms rather than mere phrasing.',
      'â€œWe have found graceful phrasing,â€ the mediator noted, â€œyet unless the agreement has teeth, neither delegation will trust it for long.â€'
    ),
    sa(
      'c2u10-e10',
      'Write a 5-sentence synthesis reconciling two opposing views on a topic of your choice. Include one concession, one steelmanned objection, one calibrated claim and crisp editorial economy.',
      'Model: â€œSupporters of congestion charges rightly note that traffic falls and air quality improves. Critics counter, with some force, that flat fees penalise lower-income commuters who lack viable transit. Both points hold. The remedy is not to abandon pricing, but to pair it with targeted exemptions and bus investment. Done carefully, the policy can be at once effective and fair.â€ Check: balance, precision, zero deadwood.'
    )
  ],
  assessment: [
    mc(
      'c2u10-t1',
      'Which statement best captures C2 pragmatic competence?',
      [
        'Adjusting register, certainty and directness to audience, stakes and medium',
        'Using identical formal syntax in casual speech and legal briefs',
        'Avoiding all idiomatic expressions'
      ],
      0,
      'Pragmatic competence is contextual calibration.'
    ),
    mc(
      'c2u10-t2',
      'Which sentence combines concession, hedging and precision?',
      [
        'Granted, the pilot lowered costs; for all that, its long-term scalability remains unproven.',
        'The pilot lowered costs, so it is obviously perfect everywhere.',
        'Cost-lowering pilots are bad, period.'
      ],
      0,
      'It acknowledges a gain while qualifying what has not yet been shown.'
    ),
    fb(
      'c2u10-t3',
      'Before debating, let us ___ the empirical claim from the value judgement.',
      'disentangle',
      'disentangle A from B = separate intertwined issues.',
      ['separate'],
      'Write the missing verb.'
    ),
    fb(
      'c2u10-t4',
      'It is imperative that every delegate ___ briefed before the vote.',
      'be',
      'Mandative subjunctive: base verb â€œbeâ€.',
      undefined,
      'Write the missing word.'
    ),
    tf(
      'c2u10-t5',
      'Calibrating a claim means ensuring the degree of certainty expressed matches the evidence available.',
      true,
      'Proportion between evidence and claim is central to C2 rigour.'
    ),
    tf(
      'c2u10-t6',
      'Self-correction in speech automatically undermines a speakerâ€™s authority.',
      false,
      'Poised self-repair enhances credibility and precision.'
    ),
    wo(
      'c2u10-t7',
      ['not', 'It', 'is', 'so', 'much', 'speed', 'as', 'control', 'that', 'defines', 'mastery'],
      ['It', 'is', 'not', 'so', 'much', 'speed', 'as', 'control', 'that', 'defines', 'mastery'],
      'Cleft structure with â€œnot so much A as Bâ€.'
    ),
    mc(
      'c2u10-t8',
      'What does â€œseparating signal from noiseâ€ mean in critical synthesis?',
      [
        'Distinguishing essential evidence and arguments from distractions or irrelevant detail',
        'Turning up the microphone volume',
        'Ignoring all opposing opinions'
      ],
      0,
      'Signal = meaningful information; noise = distraction.'
    ),
    tr(
      'c2u10-t9',
      'Rewrite more concisely using verbal substitution (â€œdoesâ€).',
      'The first study ignores regional variation, and the second study ignores regional variation too.',
      'The first study ignores regional variation, and so does the second',
      'â€œand so does the secondâ€ avoids repeating the verb phrase.',
      ['The first study ignores regional variation, and the second does too']
    ),
    mc(
      'c2u10-t10',
      'Which ongoing habit best sustains C2 proficiency over time?',
      [
        'Reading widely across genres, noticing collocations and reading your own drafts aloud',
        'Never revising anything you write',
        'Translating word-for-word from Spanish'
      ],
      0,
      'Active attention to usage, genre and cadence keeps proficiency sharp.'
    )
  ],
  review: [
    'Match structure, lexis and register to purpose, audience and medium rather than chasing complexity for its own sake.',
    'Mediate effectively: steelman opposing views, separate facts from values and locate workable common ground.',
    'Calibrate certainty to evidence, read subtext accurately and use ambiguity or directness deliberately.',
    'Repair and qualify in real time with poise (â€œlet me qualify thatâ€, â€œto put it more preciselyâ€).',
    'Sustain C2 mastery through wide reading, corpus-minded attention to collocations and reading your own prose aloud.'
  ]
};

export default unit;
