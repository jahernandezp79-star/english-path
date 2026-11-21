import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';

const unit: Unit = {
  id: 'c2-u05',
  level: 'C2',
  unitNumber: 5,
  title: 'Evidence, Causation and Uncertainty',
  subtitle: 'Evaluate complex claims, counterfactuals and degrees of proof',
  communicativeGoal:
    'Evaluar pruebas empÃ­ricas, explicaciones causales e incertidumbre en debates cientÃ­ficos y pÃºblicos: graduar la certeza epistÃ©mica, formular contrafÃ¡cticos rigurosos y comunicar lÃ­mites metodolÃ³gicos sin fomentar el cinismo.',
  objectives: [
    'Graduar con precisiÃ³n la certeza epistÃ©mica y la fuerza probatoria (corroborate, be consistent with, underdetermine, refute).',
    'Formular condicionales contrafÃ¡cticos y anÃ¡lisis causales complejos evitando confundir correlaciÃ³n, confusiÃ³n estadÃ­stica y causalidad.',
    'Compactar relaciones lÃ³gicas complejas mediante sintagmas nominales largos y clÃ¡usulas participiales sin perder legibilidad.',
    'Comunicar hallazgos inciertos o provisionales a pÃºblicos no especialistas sin caer ni en el alarmismo ni en la falsa certeza.'
  ],
  grammar: {
    title: 'Epistemic modality, counterfactuals and complex nominal groups',
    explanation: [
      'En el discurso cientÃ­fico y analÃ­tico de nivel C2, la gramÃ¡tica refleja el estado exacto de la prueba. Entre la certeza absoluta y la ignorancia existe una escala fina de modalidad epistÃ©mica y verbos evidenciales: establish / demonstrate (prueba sÃ³lida), corroborate (refuerza una hipÃ³tesis independiente), be consistent with (encaja sin demostrar), point tentatively toward (indicio preliminar) y underdetermine (los datos admiten mÃ¡s de una teorÃ­a incompatible). Decir "the data prove" cuando solo "suggest" es un error tanto metodolÃ³gico como lingÃ¼Ã­stico.',
      'El razonamiento causal requiere distinguir condiciones necesarias, condiciones suficientes, factores coadyuvantes y variables de confusiÃ³n (confounding variables). En inglÃ©s formal se emplean sintagmas preposicionales y verbos de relaciÃ³n causal calibrada: attribute X partly to Y; stem from; be mediated by; confound the relationship between A and B; reverse causality (Â¿A causa B, o B causa A?). El condicional contrafÃ¡ctico ("Had the control group not been exposedâ€¦", "Were this factor alone responsible, we would expect to observeâ€¦") permite contrastar predicciones frente a hipÃ³tesis rivales.',
      'Los sintagmas nominales complejos permiten empaquetar procesos, muestras y salvedades en unidades manejables: "the apparent inverse correlation between early screening and late-stage mortality in cohorts followed for ten years". Para no sobrecargar la memoria del lector, sitÃºa las aclaraciones de mÃ©todo en incisos o aposiciones bien puntuados y aplica el principio de peso final cuando la conclusiÃ³n sea larga.',
      'Comunicar incertidumbre al pÃºblico plantea un dilema retÃ³rico: los especialistas temen exagerar; los lectores buscan respuestas tajantes. FÃ³rmulas como "the best available estimate", "within the margin of error", "subject to revision as further data emerge" y "while uncertainty remains about the magnitude, the direction of the effect is clear" transmiten rigor sin sonar evasivas.',
      'Registro: en un artÃ­culo revisado por pares predominan la cautela, los intervalos de confianza y la voz impersonal; en divulgaciÃ³n rigurosa se mantienen las reservas esenciales traduciendo la jerga tÃ©cnica a ejemplos concretos.'
    ],
    forms: [
      {
        label: 'Evidential verbs and epistemic calibration',
        lines: [
          'The trial results are consistent with the hypothesis, though they hardly prove it.',
          'Independent replication would corroborate what remains a preliminary finding.',
          'The available evidence underdetermines which of the two mechanisms is at work.',
          'To speak of proof here is to outrun the data.'
        ]
      },
      {
        label: 'Counterfactuals and causal testing',
        lines: [
          'Were this variable alone responsible, we would expect a uniform rise across regions.',
          'Had the baseline differed, the apparent gain might well have vanished.',
          'Even allowing for measurement error, the gap remains statistically significant.',
          'Reverse causality cannot be ruled out in an observational design.'
        ]
      },
      {
        label: 'Complex nominal groups and precision',
        lines: [
          'the failure of short-term trials to capture delayed side effects',
          'a modest, albeit statistically robust, reduction in hospital admissions',
          'the confounding effect of socioeconomic status on both diet and longevity',
          'an absence of evidence that should not be mistaken for evidence of absence'
        ]
      },
      {
        label: 'Useful expressions and collocations',
        lines: [
          'outrun the evidence; cherry-pick data; move the goalposts',
          'confounding variable; selection bias; reverse causality; sample size',
          'statistically significant; margin of error; confidence interval',
          'absence of evidence vs evidence of absence; null result',
          'rule out an alternative; control for a variable; hold constant',
          'anomalous outlier; spurious correlation; robust finding',
          'preliminary indication; working hypothesis; open to revision',
          'within reasonable bounds; on the balance of probabilities'
        ]
      }
    ]
  },
  vocabulary: [
    v('corroborate', 'corroborar, confirmar independientemente', '/kÉ™ËˆrÉ’bÉ™reÉªt/', 'cor-ROB-o-rate'),
    v('underdetermine', 'infradeterminar (no bastar para elegir una teorÃ­a)', '/ËŒÊŒndÉ™dÉªËˆtÉœËmÉªn/', 'un-der-de-TER-mine'),
    v('confound', 'confundir o distorsionar (una variable)', '/kÉ™nËˆfaÊŠnd/', 'con-FOUND'),
    v('causality', 'causalidad', '/kÉ”ËËˆzÃ¦lÉ™ti/', 'cau-SAL-i-ty'),
    v('spurious', 'espurio, aparente pero falso', '/ËˆspjÊŠÉ™riÉ™s/', 'SPUR-i-ous'),
    v('outlier', 'valor atÃ­pico', '/ËˆaÊŠtlaÉªÉ™/', 'OUT-li-er'),
    v('robust', 'sÃ³lido, resistente a variaciones', '/rÉ™ÊŠËˆbÊŒst/', 'ro-BUST'),
    v('tentative', 'provisional, tentativo', '/ËˆtentÉ™tÉªv/', 'TEN-ta-tive'),
    v('inconclusive', 'no concluyente', '/ËŒÉªnkÉ™nËˆkluËsÉªv/', 'in-con-CLU-sive'),
    v('discrepancy', 'discrepancia', '/dÉªËˆskrepÉ™nsi/', 'dis-CREP-an-cy'),
    v('artifact', 'artefacto (error de mediciÃ³n o mÃ©todo)', '/ËˆÉ‘ËtÉªfÃ¦kt/', 'AR-ti-fact'),
    v('inference', 'inferencia, conclusiÃ³n deducida', '/ËˆÉªnfÉ™rÉ™ns/', 'IN-fer-ence'),
    v('proxy', 'indicador indirecto o sustituto', '/ËˆprÉ’ksi/', 'PROX-y'),
    v('null result', 'resultado nulo (sin efecto observado)', '/ËˆnÊŒl rÉªËˆzÊŒlt/', 'NULL re-SULT'),
    v('magnitude', 'magnitud, tamaÃ±o del efecto', '/ËˆmÃ¦É¡nÉªtjuËd/', 'MAG-ni-tude'),
    v('cohort', 'cohorte, grupo de estudio', '/ËˆkÉ™ÊŠhÉ”Ët/', 'CO-hort'),
    v('baseline', 'lÃ­nea base, punto de referencia', '/ËˆbeÉªslaÉªn/', 'BASE-line'),
    v('empirical', 'empÃ­rico', '/ÉªmËˆpÉªrÉªkl/', 'em-PIR-i-cal'),
    v('falsify', 'refutar, falsear', '/ËˆfÉ”ËlsÉªfaÉª/', 'FAL-si-fy'),
    v('extrapolate', 'extrapolar', '/ÉªkËˆstrÃ¦pÉ™leÉªt/', 'ex-TRAP-o-late'),
    v('mediate', 'mediar (actuar como vÃ­a intermedia)', '/ËˆmiËdieÉªt/', 'ME-di-ate'),
    v('anomaly', 'anomalÃ­a', '/É™ËˆnÉ’mÉ™li/', 'a-NOM-a-ly'),
    v('provisional', 'provisional', '/prÉ™ËˆvÉªÊ’É™nl/', 'pro-VI-sion-al'),
    v('rule out', 'descartar', '/ruËl ËˆaÊŠt/', 'rule OUT')
  ],
  examples: [
    {
      en: 'Even after controlling for income and age, the researchers found a modest correlation, though reverse causality could not be ruled out.',
      es: 'Incluso tras controlar por ingresos y edad, los investigadores hallaron una correlaciÃ³n modesta, aunque no pudo descartarse causalidad inversa.'
    },
    {
      en: 'An absence of evidence in a small, underpowered study is not evidence of absence.',
      es: 'La ausencia de pruebas en un estudio pequeÃ±o y con poca potencia estadÃ­stica no equivale a prueba de ausencia.'
    },
    {
      en: 'Were the effect merely an artifact of the new sensor, older instruments would not show the same pattern.',
      es: 'Si el efecto fuera un mero artefacto del nuevo sensor, los instrumentos antiguos no mostrarÃ­an el mismo patrÃ³n.'
    },
    {
      en: 'The two datasets are consistent with the working hypothesis, yet they underdetermine which pathway dominates.',
      es: 'Ambos conjuntos de datos son compatibles con la hipÃ³tesis de trabajo, pero no bastan para determinar quÃ© vÃ­a predomina.'
    },
    {
      en: 'Extrapolating a trend observed over six weeks to an entire decade is to outrun the evidence.',
      es: 'Extrapolar a toda una dÃ©cada una tendencia observada durante seis semanas es ir mÃ¡s allÃ¡ de lo que permiten las pruebas.'
    },
    {
      en: 'Test scores are at best an imperfect proxy for learning; mistaking the proxy for the goal distorts behaviour.',
      es: 'Las notas de examen son, como mucho, un indicador imperfecto del aprendizaje; confundir el indicador con la meta distorsiona la conducta.'
    },
    {
      en: 'While uncertainty remains regarding the exact magnitude, the direction of the trend has been corroborated across three cohorts.',
      es: 'Aunque persiste la incertidumbre sobre la magnitud exacta, la direcciÃ³n de la tendencia se ha corroborado en tres cohortes.'
    },
    {
      en: 'Had the team pre-registered its baseline criteria, the post-hoc exclusion of two outliers would look far less suspect.',
      es: 'Si el equipo hubiera pre-registrado sus criterios de referencia, la exclusiÃ³n posterior de dos valores atÃ­picos parecerÃ­a mucho menos sospechosa.'
    }
  ],
  dialogue: [
    {
      speaker: 'Dr Lin',
      text: 'Have you looked at the press release for the sleep study? The headline reads: â€œLate dinners cause memory loss.â€',
      es: 'Â¿Viste el comunicado de prensa del estudio sobre el sueÃ±o? El titular dice: â€œCenar tarde provoca pÃ©rdida de memoriaâ€.'
    },
    {
      speaker: 'Samir',
      text: 'I read the paper itself last night. The headline wildly outruns the evidence.',
      es: 'LeÃ­ el artÃ­culo anoche. El titular va muchÃ­simo mÃ¡s allÃ¡ de las pruebas.'
    },
    {
      speaker: 'Dr Lin',
      text: 'Observational cohort, I assume?',
      es: 'Cohorte observacional, supongo.'
    },
    {
      speaker: 'Samir',
      text: 'Yes, self-reported meal times over four weeks, with no randomisation. Worse, they didnâ€™t control for shift work or chronic stress â€” obvious confounding variables.',
      es: 'SÃ­, horarios de cena autodeclarados durante cuatro semanas, sin aleatorizaciÃ³n. Peor aÃºn: no controlaron por trabajo a turnos ni por estrÃ©s crÃ³nico, variables de confusiÃ³n evidentes.'
    },
    {
      speaker: 'Dr Lin',
      text: 'Plus reverse causality: people experiencing early cognitive fatigue might simply eat later because their routines are disrupted.',
      es: 'AdemÃ¡s de causalidad inversa: quienes sufren fatiga cognitiva temprana quizÃ¡ simplemente cenan mÃ¡s tarde porque sus rutinas estÃ¡n alteradas.'
    },
    {
      speaker: 'Samir',
      text: 'Exactly. The authorsâ€™ own discussion section is quite tentative; they say the pattern is â€œconsistent withâ€ a metabolic link, not proof of one.',
      es: 'Exacto. La propia secciÃ³n de discusiÃ³n de los autores es bastante cauta; dicen que el patrÃ³n es â€œcompatible conâ€ un vÃ­nculo metabÃ³lico, no prueba de Ã©l.'
    },
    {
      speaker: 'Dr Lin',
      text: 'So why did the press office turn â€œconsistent withâ€ into â€œcausesâ€?',
      es: 'Â¿Entonces por quÃ© la oficina de prensa convirtiÃ³ â€œcompatible conâ€ en â€œprovocaâ€?'
    },
    {
      speaker: 'Samir',
      text: 'Because nuance doesnâ€™t travel well in headlines. Yet exaggerating certainty erodes public trust when a follow-up trial produces a null result.',
      es: 'Porque el matiz no viaja bien en los titulares. Sin embargo, exagerar la certeza erosiona la confianza pÃºblica cuando un ensayo posterior arroja un resultado nulo.'
    },
    {
      speaker: 'Dr Lin',
      text: 'True. Though thereâ€™s an opposite trap: pretending that any uncertainty means we know nothing at all.',
      es: 'Cierto. Aunque hay una trampa opuesta: fingir que cualquier incertidumbre significa que no sabemos nada.'
    },
    {
      speaker: 'Samir',
      text: 'Fair point. How would you phrase it for a general reader without distorting it?',
      es: 'Buen punto. Â¿CÃ³mo lo formularÃ­as para un lector general sin distorsionarlo?'
    },
    {
      speaker: 'Dr Lin',
      text: 'Something like: â€œPeople who eat late score slightly lower on recall tests, though stress or work schedules could explain the link.â€',
      es: 'Algo como: â€œQuienes cenan tarde obtienen puntuaciones ligeramente menores en pruebas de recuerdo, aunque el estrÃ©s o los horarios laborales podrÃ­an explicar el vÃ­nculoâ€.'
    },
    {
      speaker: 'Samir',
      text: 'Accurate, readable, and nobody has to retract it next year.',
      es: 'Preciso, legible y nadie tendrÃ¡ que retractarse el aÃ±o que viene.'
    }
  ],
  listening: {
    script: [
      {
        speaker: 'Host',
        text: 'Dr Alvarez, why do non-specialists often lose patience when scientists say â€œthe evidence is uncertainâ€?'
      },
      {
        speaker: 'Dr Alvarez',
        text: 'Because in everyday speech, â€œuncertainâ€ sounds like â€œwe have no idea.â€ In science, uncertainty is usually bounded: we may not know whether a temperature rise will be two degrees or three, while being virtually certain it wonâ€™t be zero.'
      },
      {
        speaker: 'Host',
        text: 'And what about null results â€” studies that find no effect?'
      },
      {
        speaker: 'Dr Alvarez',
        text: 'Theyâ€™re vital, yet journals rarely publish them. That creates publication bias: we see the ten trials that found a flashy correlation and miss the ninety that didnâ€™t.'
      },
      {
        speaker: 'Host',
        text: 'How can a careful reader spot weak causal claims in the news?'
      },
      {
        speaker: 'Dr Alvarez',
        text: 'Ask three questions: was there a comparison group, were obvious confounders controlled for, and did the authors distinguish a proxy measure from the real outcome?'
      },
      {
        speaker: 'Host',
        text: 'Any final rule of thumb?'
      },
      {
        speaker: 'Dr Alvarez',
        text: 'Be wary of single studies hailed as breakthroughs. Robust knowledge comes from independent replication across different methods.'
      }
    ],
    questions: [
      mc(
        'c2u05-l1',
        'Why do non-specialists sometimes misinterpret â€œthe evidence is uncertainâ€?',
        [
          'They hear it as total ignorance rather than a bounded range of possibilities',
          'Scientists refuse to use numbers',
          'All scientific studies contradict one another'
        ],
        0,
        'In everyday speech â€œuncertainâ€ sounds like â€œwe have no ideaâ€, whereas scientific uncertainty is bounded.'
      ),
      mc(
        'c2u05-l2',
        'What problem does Dr Alvarez say results from journals rarely publishing null results?',
        [
          'Publication bias that exaggerates apparent correlations',
          'Higher subscription prices',
          'Longer peer-review delays only'
        ],
        0,
        'Readers see positive findings and miss the ninety studies that found no effect.'
      ),
      mc(
        'c2u05-l3',
        'Which check does she recommend for spotting weak causal claims?',
        [
          'Checking whether there was a comparison group and whether confounders were controlled',
          'Checking how many journalists shared the headline',
          'Looking only at the length of the article'
        ],
        0,
        'She asks about comparison groups, confounders and proxy measures.'
      ),
      tf(
        'c2u05-l4',
        'Dr Alvarez advises trusting single breakthrough studies more than independent replications.',
        false,
        'She warns against single breakthroughs and says robust knowledge comes from replication.'
      ),
      mc(
        'c2u05-l5',
        'What does â€œbounded uncertaintyâ€ imply in her example?',
        [
          'The exact magnitude may vary, yet the existence or direction of the effect is well established',
          'Nothing at all can be predicted',
          'Every measurement error is infinite'
        ],
        0,
        'Not knowing whether it is two or three degrees differs from thinking it could be zero.'
      )
    ]
  },
  reading: {
    title: 'When the measure becomes the target',
    text: 'In policy as in science, we rarely measure what we care about directly. Unable to observe â€œeducational qualityâ€ or â€œhospital safetyâ€ with a thermometer, institutions rely on proxies: exam pass rates, waiting times, publication counts. Up to a point, proxies are indispensable; without them, large systems cannot be evaluated. Yet a well-documented distortion follows whenever a proxy is treated as proof rather than clue. Known as Goodhartâ€™s law, the principle warns that once a measure becomes a target, it ceases to be a good measure. Schools judged solely on pass rates may narrow the curriculum to test drills; researchers judged on publication volume may split one solid finding into four thin papers. Meanwhile, the original baseline shifts, making historical comparisons spurious. None of this argues for abandoning data. Rather, it calls for epistemic modesty: pairing quantitative indicators with independent qualitative scrutiny, rotating metrics before actors game them, and remembering that a correlation between a proxy and an outcome is an inference open to revision, never an identity.',
    questions: [
      rc(
        'c2u05-r1',
        'Why do institutions rely on proxy measures according to the text?',
        [
          'Because complex qualities like safety or learning cannot be observed directly like temperature',
          'Because proxies are always perfectly accurate',
          'Because qualitative observation is illegal'
        ],
        0,
        'Complex qualities cannot be measured directly, so proxies are indispensable up to a point.'
      ),
      rc(
        'c2u05-r2',
        'What does Goodhartâ€™s law warn against?',
        [
          'Treating a proxy indicator as a high-stakes target, which distorts behaviour and ruins the measure',
          'Using any numbers in hospital administration',
          'Comparing historical data from different countries'
        ],
        0,
        'When a measure becomes a target, actors game it and it ceases to be reliable.'
      ),
      rc(
        'c2u05-r3',
        'Which example of distortion is given in the passage?',
        [
          'Splitting one solid research finding into four thin papers to boost publication counts',
          'Hiring more teachers to reduce class sizes',
          'Extending library opening hours'
        ],
        0,
        'Researchers judged on volume may fragment one finding into multiple thin papers.'
      ),
      rc(
        'c2u05-r4',
        'What does â€œepistemic modestyâ€ involve in the conclusion?',
        [
          'Combining metrics with independent qualitative scrutiny and rotating indicators',
          'Abandoning all quantitative data',
          'Keeping all performance metrics secret'
        ],
        0,
        'The author rejects abandoning data and recommends pairing indicators with qualitative checks.'
      ),
      rc(
        'c2u05-r5',
        'What distinction does the final clause draw?',
        [
          'A proxy correlates with an outcome provisionally; it is not identical with the outcome itself',
          'Outcomes are always less important than proxies',
          'Inferences never require revision'
        ],
        0,
        'A correlation is a revisable inference, never an identity.'
      )
    ]
  },
  speaking: {
    prompt:
      'Briefing cientÃ­fico-pÃºblico en parejas (8 a 10 minutos): uno actÃºa como periodista que pregunta por quÃ© los expertos cambian de opiniÃ³n o parecen dudar sobre un estudio reciente; el otro actÃºa como investigador que explica quÃ© estÃ¡ sÃ³lidamente establecido, quÃ© sigue infradeterminado y cÃ³mo interpretar las cifras sin exagerar ni sembrar desconfianza.',
    tasks: [
      'Distinguish clearly between â€œconsistent withâ€, â€œcorroboratedâ€ and â€œprovenâ€.',
      'Use at least one counterfactual conditional (Had the sampleâ€¦, Were this alone responsibleâ€¦).',
      'Explain one confounding variable or proxy distortion in plain, accurate language.',
      'Close with a calibrated takeaway that communicates bounded uncertainty responsibly.'
    ]
  },
  writing: {
    prompt:
      'Write a critical evidence brief (300 to 350 words) assessing a striking causal headline (either real or the â€œlate dinners cause memory lossâ€ example). Evaluate the study design, confounders, reverse causality and proxy measures, using calibrated epistemic language, at least two counterfactual conditionals and compact nominal groups, and conclude with how the finding ought to be communicated to the public.',
    rubric: [
      'Grades epistemic certainty accurately without conflating correlation, plausibility and proof.',
      'Identifies methodological limits (confounders, reverse causality, sample size or proxies) clearly.',
      'Uses counterfactuals and complex nominal groups accurately and readably.',
      'Balances critical scrutiny with constructive public communication.'
    ],
    model:
      'The widely shared headline â€œLate dinners cause memory lossâ€ significantly outruns the underlying study. The paper reports a modest inverse correlation between evening meal times and scores on a brief recall task across a four-week observational cohort. While the pattern is consistent with metabolic hypotheses, it falls well short of establishing causation. First, reliance on self-reported meal times introduces measurement error, and a single recall quiz serves only as a crude proxy for long-term memory. Second, the analysis fails to control adequately for shift work, chronic stress and sleep fragmentation â€” plausible confounding variables capable of driving both late eating and poorer concentration. Reverse causality is equally conceivable: early cognitive fatigue may disrupt daily routines rather than the reverse. Were meal timing alone responsible, we would expect a sharper dose-response pattern even among rested participants; had the authors pre-registered subgroup tests, the post-hoc exclusion of outliers would carry greater weight. None of this renders the observation worthless. It simply means the evidence underdetermines the causal story. Responsible public communication should report the association tentatively, note the unmeasured confounders and await controlled trials before issuing dietary prescriptions.'
  },
  pronunciation: {
    items: [
      { word: 'corroborate', ipa: '/kÉ™ËˆrÉ’bÉ™reÉªt/', stress: 'cor-ROB-o-rate' },
      { word: 'spurious', ipa: '/ËˆspjÊŠÉ™riÉ™s/', stress: 'SPUR-i-ous' },
      { word: 'discrepancy', ipa: '/dÉªËˆskrepÉ™nsi/', stress: 'dis-CREP-an-cy' },
      { word: 'causality', ipa: '/kÉ”ËËˆzÃ¦lÉ™ti/', stress: 'cau-SAL-i-ty' },
      { word: 'anomaly', ipa: '/É™ËˆnÉ’mÉ™li/', stress: 'a-NOM-a-ly' }
    ],
    tips: [
      'En palabras con el sufijo -ate verbal como corroborate y extrapolate, la sÃ­laba final suena /eÉªt/ claramente; en adjetivos homÃ³grafos como tentative o provisional no.',
      'Al exponer salvedades epistÃ©micas (â€œconsistent with, | though not proof ofâ€), una pausa breve antes de though marca el contraste probatorio.',
      'En anomaly y causality, evita trasladar el acento al inicio: a-NOM-a-ly, cau-SAL-i-ty.'
    ]
  },
  exercises: [
    mc(
      'c2u05-e1',
      'Which verb accurately states that two independent studies support the same hypothesis without claiming absolute finality?',
      ['corroborate', 'falsify', 'confound'],
      0,
      'Corroborate = provide independent supporting evidence.',
      'Choose the best verb.'
    ),
    fb(
      'c2u05-e2',
      'An absence of evidence in a tiny study is not evidence of ___.',
      'absence',
      'absence of evidence vs evidence of absence.',
      undefined,
      'Write the missing noun.'
    ),
    fb(
      'c2u05-e3',
      'Using exam scores as a substitute for genuine understanding treats scores as a ___ measure.',
      'proxy',
      'proxy = indirect stand-in measure.',
      undefined,
      'Write the missing word.'
    ),
    wo(
      'c2u05-e4',
      ['cannot', 'Correlation', 'by', 'itself', 'establish', 'a', 'causal', 'link'],
      ['Correlation', 'cannot', 'by', 'itself', 'establish', 'a', 'causal', 'link'],
      'Core causal principle.'
    ),
    tf(
      'c2u05-e5',
      'â€œUnderdetermineâ€ means that the available data leave room for more than one incompatible explanation.',
      true,
      'Evidence underdetermines a theory when multiple theories fit the same data.'
    ),
    mt(
      'c2u05-e6',
      'Match each methodological term with its meaning.',
      [
        ['confounder', 'an unmeasured third factor distorting an apparent link'],
        ['outlier', 'an extreme observation far from the main cluster'],
        ['null result', 'a study finding no statistically significant effect'],
        ['reverse causality', 'when the supposed effect actually drives the supposed cause']
      ],
      'Each term identifies a distinct evidential pitfall.'
    ),
    tr(
      'c2u05-e7',
      'Rewrite as a formal counterfactual starting with â€œWereâ€.',
      'If this factor alone were responsible, we would observe a uniform effect.',
      'Were this factor alone responsible, we would observe a uniform effect',
      'Were + subject + adjective/to-infinitive.',
      ['Were this factor alone responsible we would observe a uniform effect']
    ),
    tr(
      'c2u05-e8',
      'Tone down the overstatement using â€œis consistent with, though it does not proveâ€.',
      'The survey proves our theory.',
      'The survey is consistent with our theory, though it does not prove it',
      'Calibrates the claim to observational evidence.',
      ['The survey is consistent with our theory though it does not prove it']
    ),
    rc(
      'c2u05-e9',
      'What methodological weakness undermines the claim?',
      [
        'Survivorship/selection bias and lack of a comparison group of non-users',
        'The sample lasted too long',
        'Too many participants used the app'
      ],
      0,
      'Surveying only people who remained active for a year ignores dropouts.',
      'A wellness app surveyed users who had remained subscribed for twelve months and concluded that 92% experienced reduced stress, without tracking users who cancelled after week one.'
    ),
    sa(
      'c2u05-e10',
      'Write a 4-sentence critique of the claim â€œCities with more bicycles have lower obesity, so building bike lanes cures obesity.â€ Mention one confounder, reverse causality and a calibrated conclusion.',
      'Model: â€œWhile the correlation is consistent with an active-transport benefit, it does not establish causation. Wealthier or flatter cities may build more bike lanes while already having healthier populations â€” a clear confounder. Reverse causality is also plausible, as fitter residents may demand cycling infrastructure. Controlled longitudinal comparisons are needed before estimating the policyâ€™s true magnitude.â€ Check: confounder, reverse causality, calibrated tone.'
    )
  ],
  assessment: [
    mc(
      'c2u05-t1',
      'Which phrasing calibrates observational evidence most responsibly?',
      [
        'The data are consistent with a modest effect, though unmeasured confounders remain.',
        'The data conclusively prove the mechanism beyond doubt.',
        'Observational data never show anything useful.'
      ],
      0,
      'It states compatibility and acknowledges confounding limits.'
    ),
    mc(
      'c2u05-t2',
      'What happens when a proxy indicator becomes a high-stakes target (Goodhartâ€™s law)?',
      [
        'Actors optimise the indicator itself, distorting its link to the real goal',
        'Measurement becomes cheaper and more reliable',
        'Confounding variables vanish automatically'
      ],
      0,
      'Targeting the proxy induces gaming and erodes validity.'
    ),
    fb(
      'c2u05-t3',
      'A finding that turns out to be a false pattern caused by faulty calibration is an experimental ___.',
      'artifact',
      'artifact = spurious result created by the tool or method.',
      ['artefact'],
      'Write the missing noun.'
    ),
    fb(
      'c2u05-t4',
      'By claiming proof from a tiny pilot, the headline ___ the evidence.',
      'outruns',
      'outrun the evidence = claim more than the data support.',
      ['exceeds', 'overstates'],
      'Write the missing verb (present simple).'
    ),
    tf(
      'c2u05-t5',
      'Publication bias occurs when null results are systematically less likely to be published than striking positive ones.',
      true,
      'Suppressing null results skews the apparent evidence base.'
    ),
    tf(
      'c2u05-t6',
      'If a study finds no statistically significant effect, it automatically proves that zero effect exists.',
      false,
      'An underpowered study can miss a real effect.'
    ),
    wo(
      'c2u05-t7',
      ['larger', 'Had', 'the', 'trial', 'been', 'we', 'might', 'have', 'known'],
      ['Had', 'the', 'trial', 'been', 'larger', 'we', 'might', 'have', 'known'],
      'Inverted past counterfactual.'
    ),
    mc(
      'c2u05-t8',
      'Which phrase expresses â€œbounded uncertaintyâ€ rather than total ignorance?',
      [
        'While the exact magnitude remains uncertain, the direction of the trend is robust.',
        'Nobody knows anything at all about the topic.',
        'Every estimate is equally likely to be zero.'
      ],
      0,
      'Bounded uncertainty narrows the range even when exact values vary.'
    ),
    tr(
      'c2u05-t9',
      'Rewrite starting with â€œTo extrapolateâ€.',
      'Extrapolating six weeks of data to ten years outruns the evidence.',
      'To extrapolate six weeks of data to ten years is to outrun the evidence',
      'Infinitive subject paired with â€œis to + infinitiveâ€.',
      ['To extrapolate six weeks of data to ten years outruns the evidence']
    ),
    mc(
      'c2u05-t10',
      'Why is independent replication valuable in science?',
      [
        'It tests whether a finding holds beyond the original sample, method and researchers',
        'It guarantees that every study gets media coverage',
        'It eliminates the need for control groups'
      ],
      0,
      'Replication separates robust patterns from chance or local artifacts.'
    )
  ],
  review: [
    'Match verbs to proof strength: consistent with, corroborate, underdetermine, establish, falsify.',
    'Check every causal claim for comparison groups, confounders, reverse causality and proxy distortion.',
    'Use inverted counterfactuals (Wereâ€¦ toâ€¦, Hadâ€¦) to test competing explanations rigorously.',
    'Communicate bounded uncertainty honestly: distinguish unknown exact magnitude from total ignorance.',
    'Remember that absence of evidence in an underpowered sample is not evidence of absence.'
  ]
};

export default unit;
