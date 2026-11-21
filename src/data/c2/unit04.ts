import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';

const unit: Unit = {
  id: 'c2-u04',
  level: 'C2',
  unitNumber: 4,
  title: 'Ethics, Policy and Moral Reasoning',
  subtitle: 'Weigh competing principles, duties and trade-offs with precision',
  communicativeGoal:
    'Razonar sobre dilemas Ã©ticos y decisiones de polÃ­tica pÃºblica con rigor conceptual: distinguir afirmaciones descriptivas de normativas, formular deberes y derechos con modalidad precisa y sopesar principios en conflicto.',
  objectives: [
    'Distinguir con claridad la modalidad deÃ³ntica (obligaciÃ³n, permiso, deber) de la modalidad epistÃ©mica (probabilidad o deducciÃ³n).',
    'Emplear estructuras normativas formales (it is incumbent uponâ€¦, be entitled toâ€¦, ought to haveâ€¦) y clÃ¡usulas de salvedad.',
    'Evitar la falacia naturalista (deducir lo que debe ser de lo que es) y explicitar los criterios de justicia o utilidad.',
    'Debatir dilemas de polÃ­tica pÃºblica reconociendo conflictos genuinos entre principios vÃ¡lidos.'
  ],
  grammar: {
    title: 'Normative modality, deontic vs epistemic meaning and formal conditionals',
    explanation: [
      'En inglÃ©s avanzado, los mismos verbos modales expresan tanto deber o permiso (sentido deÃ³ntico) como probabilidad o deducciÃ³n (sentido epistÃ©mico). CompÃ¡rese "The board must publish its reasons" (obligaciÃ³n moral o legal) con "The board must have overlooked the clause" (deducciÃ³n sobre el pasado). En C2 es esencial evitar ambigÃ¼edades cuando ambos sentidos compiten: para obligaciÃ³n inequÃ­voca en textos normativos se prefieren fÃ³rmulas como be obliged to, be required to, it is incumbent upon X toâ€¦ o shall en lenguaje jurÃ­dico, reservando may well / is bound to / must have para el juicio epistÃ©mico.',
      'La crÃ­tica moral y la evaluaciÃ³n de polÃ­ticas retrospectivas recurren a modales perfectos: ought to have + participio y should have + participio seÃ±alan un deber incumplido ("The regulator ought to have intervened sooner"), mientras que need not have + participio indica que una medida costosa era innecesaria y could reasonably have been expected toâ€¦ calibra la responsabilidad segÃºn lo que era previsible en ese momento, evitando juzgar con sesgo retrospectivo.',
      'El razonamiento Ã©tico riguroso separa las afirmaciones descriptivas (lo que ocurre de hecho) de las normativas (lo que deberÃ­a ocurrir). Deslizarse sin justificaciÃ³n de "many citizens do X" a "therefore X is acceptable" incurre en la guillotina de Hume (isâ€“ought gap). Para salvar ese salto hace falta explicitar un principio puente: utilidad agregada, equidad distributiva, autonomÃ­a o deber fiduciario.',
      'Las clÃ¡usulas de salvedad y condicionales formales permiten formular principios sin absolutismos ingenuos: prima facie (a primera vista, vÃ¡lido salvo razÃ³n de mayor peso), unless overriding harm would ensue, provided that due process is observed, subject to proportionality y notwithstanding competing claims. En condicionales Ã©ticos, "Were a city to prioritiseâ€¦", "Even if a policy were to yieldâ€¦" y "Granting that privacy matters, it does not follow that it overridesâ€¦" permiten explorar consecuencias sin caricaturizar al adversario.',
      'Registro: el discurso Ã©tico-polÃ­tico exige precisiÃ³n terminolÃ³gica (equity frente a equality, right frente a privilege, harm frente a offence) y un tono ecuÃ¡nime que reconozca cuÃ¡ndo un dilema enfrenta dos bienes genuinos y no un bien contra un mal evidente.'
    ],
    forms: [
      {
        label: 'Deontic vs epistemic clarity',
        lines: [
          'It is incumbent upon public bodies to justify exemptions openly. (deontic)',
          'The regulator must have known about the shortfall months earlier. (epistemic)',
          'Applicants are entitled to a reasoned explanation, not merely a refusal.',
          'The authority ought to have consulted residents before revising the route.'
        ]
      },
      {
        label: 'Exceptions, proportionality and principles',
        lines: [
          'Prima facie, individuals have a right to privacy, unless overriding harm is at stake.',
          'No restriction is justified provided less intrusive means remain untried.',
          'What ought to be cannot be deduced directly from what happens to be.',
          'Even if a measure were to raise efficiency, it might still offend against fairness.'
        ]
      },
      {
        label: 'Retrospective responsibility',
        lines: [
          'Officials could reasonably have been expected to anticipate the bottleneck.',
          'They need not have suspended the entire programme to address the flaw.',
          'In hindsight, the trade-off between speed and scrutiny was poorly struck.',
          'Responsibility cannot be diffused across a committee so that no one answers.'
        ]
      },
      {
        label: 'Useful expressions and collocations',
        lines: [
          'strike a fair balance; weigh competing claims; an ethical trade-off',
          'isâ€“ought gap; prima facie duty; overriding consideration',
          'due process; fiduciary duty; conflict of interest; moral hazard',
          'the lesser of two evils; a slippery slope; collateral harm',
          'hold to account; diffuse responsibility; pass the buck',
          'err on the side of caution; disproportionate burden',
          'offend against fairness; compatible with dignity',
          'in the public interest; without fear or favour'
        ]
      }
    ]
  },
  vocabulary: [
    v('deontic', 'deÃ³ntico (relativo al deber o norma)', '/diËËˆÉ’ntÉªk/', 'de-ON-tic'),
    v('epistemic', 'epistÃ©mico (relativo al conocimiento o certeza)', '/ËŒepÉªËˆstiËmÉªk/', 'ep-i-STE-mic'),
    v('prima facie', 'a primera vista, salvo razÃ³n superior', '/ËŒpraÉªmÉ™ ËˆfeÉªÊƒi/', 'PRI-ma FA-cie'),
    v('incumbent upon', 'que incumbe o corresponde a', '/ÉªnËˆkÊŒmbÉ™nt É™ËˆpÉ’n/', 'in-CUM-bent u-pon'),
    v('proportionality', 'proporcionalidad', '/prÉ™ËŒpÉ”ËÊƒÉ™ËˆnÃ¦lÉªti/', 'pro-por-tion-AL-i-ty'),
    v('due process', 'debido proceso', '/djuË ËˆprÉ™ÊŠses/', 'due PRO-cess'),
    v('fiduciary', 'fiduciario, de confianza y lealtad', '/fÉªËˆdjuËÊƒÉ™ri/', 'fi-DU-ci-ar-y'),
    v('moral hazard', 'riesgo moral', '/ËˆmÉ’rÉ™l ËˆhÃ¦zÉ™d/', 'MOR-al HAZ-ard'),
    v('utilitarian', 'utilitarista', '/ËŒjuËtÉªlÉªËˆteÉ™riÉ™n/', 'u-til-i-TAR-i-an'),
    v('equity', 'equidad', '/ËˆekwÉ™ti/', 'EQ-ui-ty'),
    v('redress', 'reparaciÃ³n, desagravio', '/rÉªËˆdres/', 're-DRESS'),
    v('culpability', 'culpabilidad, grado de culpa', '/ËŒkÊŒlpÉ™ËˆbÉªlÉ™ti/', 'cul-pa-BIL-i-ty'),
    v('complicity', 'complicidad', '/kÉ™mËˆplÉªsÉ™ti/', 'com-PLIC-i-ty'),
    v('disproportionate', 'desproporcionado', '/ËŒdÉªsprÉ™ËˆpÉ”ËÊƒÉ™nÉ™t/', 'dis-pro-POR-tion-ate'),
    v('inviolable', 'inviolable', '/ÉªnËˆvaÉªÉ™lÉ™bl/', 'in-VI-o-la-ble'),
    v('overriding', 'preponderante, prioritario', '/ËŒÉ™ÊŠvÉ™ËˆraÉªdÉªÅ‹/', 'o-ver-RI-ding'),
    v('entitled', 'con derecho a', '/ÉªnËˆtaÉªtld/', 'en-TI-tled'),
    v('mitigate', 'mitigar, atenuar', '/ËˆmÉªtÉªÉ¡eÉªt/', 'MIT-i-gate'),
    v('sanction', 'sancionar; sanciÃ³n o autorizaciÃ³n', '/ËˆsÃ¦Å‹kÊƒn/', 'SANC-tion'),
    v('arbitrariness', 'arbitrariedad', '/ËŒÉ‘ËbÉªËˆtrerÉªnÉ™s/', 'ar-bi-TRAR-i-ness'),
    v('diffuse', 'diluir, dispersar', '/dÉªËˆfjuËz/', 'dif-FUSE'),
    v('pass the buck', 'eludir la responsabilidad culpando a otro', '/pÉ‘Ës Ã°É™ ËˆbÊŒk/', 'pass the BUCK'),
    v('public interest', 'interÃ©s pÃºblico', '/ËˆpÊŒblÉªk ËˆÉªntrÉ™st/', 'PUB-lic IN-ter-est'),
    v('trade-off', 'contrapartida, equilibrio entre costes y beneficios', '/ËˆtreÉªd É’f/', 'TRADE-off')
  ],
  examples: [
    {
      en: 'It is incumbent upon any authority exercising emergency powers to demonstrate that ordinary measures are inadequate.',
      es: 'Incumbe a toda autoridad que ejerza poderes de emergencia demostrar que las medidas ordinarias son insuficientes.'
    },
    {
      en: 'Even if a surveillance scheme were to deter minor offences, that outcome alone would not justify a disproportionate intrusion.',
      es: 'Incluso si un sistema de vigilancia disuadiera delitos menores, ese resultado por sÃ­ solo no justificarÃ­a una intromisiÃ³n desproporcionada.'
    },
    {
      en: 'Citizens are entitled not merely to formal appeals, but to timely redress when an error occurs.',
      es: 'Los ciudadanos tienen derecho no solo a recursos formales, sino a una reparaciÃ³n oportuna cuando se produce un error.'
    },
    {
      en: 'The fact that a practice has become widespread does not establish that it ought to be tolerated.',
      es: 'El hecho de que una prÃ¡ctica se haya generalizado no demuestra que deba tolerarse.'
    },
    {
      en: 'Engineers could reasonably have been expected to flag the structural fault before the bridge opened.',
      es: 'CabÃ­a esperar razonablemente que los ingenieros seÃ±alaran el fallo estructural antes de inaugurarse el puente.'
    },
    {
      en: 'Protecting privacy is a prima facie duty, yet it may yield where an overriding threat to life is at stake.',
      es: 'Proteger la privacidad es un deber prima facie, pero puede ceder cuando estÃ¡ en juego una amenaza preponderante para la vida.'
    },
    {
      en: 'Insulating decision-makers from losses creates moral hazard, encouraging risks whose costs fall elsewhere.',
      es: 'Aislar de las pÃ©rdidas a quienes toman decisiones genera riesgo moral, alentando riesgos cuyos costes recaen en otros.'
    },
    {
      en: 'When committees diffuse responsibility across six signatures, everyone can pass the buck and nobody answers.',
      es: 'Cuando los comitÃ©s diluyen la responsabilidad entre seis firmas, todos pueden eludir la culpa y nadie responde.'
    }
  ],
  dialogue: [
    {
      speaker: 'Clara',
      text: 'The cityâ€™s ethics panel meets tomorrow on whether to keep congestion cameras running overnight with facial recognition.',
      es: 'El comitÃ© de Ã©tica de la ciudad se reÃºne maÃ±ana para decidir si mantiene las cÃ¡maras de trÃ¡fico por la noche con reconocimiento facial.'
    },
    {
      speaker: 'Marcus',
      text: 'I saw the briefing note. It argues that because citizens already accept cameras on motorways, they shouldnâ€™t object to this.',
      es: 'Vi la nota informativa. Sostiene que, como los ciudadanos ya aceptan cÃ¡maras en las autopistas, no deberÃ­an oponerse a esto.'
    },
    {
      speaker: 'Clara',
      text: 'Classic isâ€“ought slide. That people tolerate one tool doesnâ€™t mean they ought to accept another with a far broader reach.',
      es: 'ClÃ¡sico salto del ser al deber ser. Que la gente tolere una herramienta no significa que deba aceptar otra con un alcance mucho mayor.'
    },
    {
      speaker: 'Marcus',
      text: 'Agreed. Still, the police say it helped locate two missing elderly residents last winter. Surely thereâ€™s a genuine trade-off here.',
      es: 'De acuerdo. Aun asÃ­, la policÃ­a dice que ayudÃ³ a localizar a dos ancianos desaparecidos el invierno pasado. Sin duda hay una contrapartida real.'
    },
    {
      speaker: 'Clara',
      text: 'There is, and we shouldnâ€™t caricature their case. Privacy isnâ€™t absolute; itâ€™s a prima facie right. The test is proportionality.',
      es: 'La hay, y no deberÃ­amos caricaturizar su postura. La privacidad no es absoluta; es un derecho prima facie. La prueba es la proporcionalidad.'
    },
    {
      speaker: 'Marcus',
      text: 'Meaning: could they achieve the same rescue goal through less intrusive means?',
      es: 'Es decir: Â¿podrÃ­an lograr el mismo objetivo de rescate por medios menos intrusivos?'
    },
    {
      speaker: 'Clara',
      text: 'Precisely. And if they canâ€™t, itâ€™s incumbent upon the council to limit data retention strictly and guarantee independent oversight.',
      es: 'Exactamente. Y si no pueden, incumbe al ayuntamiento limitar estrictamente la conservaciÃ³n de datos y garantizar supervisiÃ³n independiente.'
    },
    {
      speaker: 'Marcus',
      text: 'Notice how the draft says â€œdata may be reviewed where necessary.â€ Thatâ€™s far too vague â€” â€œmayâ€ sounds permissive, and â€œnecessaryâ€ isnâ€™t defined.',
      es: 'FÃ­jate en que el borrador dice â€œlos datos podrÃ¡n revisarse cuando sea necesarioâ€. Es demasiado vago: â€œpodrÃ¡nâ€ suena permisivo y â€œnecesarioâ€ no se define.'
    },
    {
      speaker: 'Clara',
      text: 'Right. We need clear deontic language: â€œofficers shall access footage only under judicial warrant,â€ and citizens must be entitled to redress if abused.',
      es: 'Cierto. Necesitamos lenguaje deÃ³ntico claro: â€œlos agentes solo accederÃ¡n a las grabaciones con orden judicialâ€, y los ciudadanos deben tener derecho a reparaciÃ³n si hay abuso.'
    },
    {
      speaker: 'Marcus',
      text: 'Otherwise, if something goes wrong, every department will pass the buck.',
      es: 'De lo contrario, si algo sale mal, cada departamento se pasarÃ¡ la pelota.'
    },
    {
      speaker: 'Clara',
      text: 'Which is why naming a single accountable official matters more than lofty preamble.',
      es: 'Por eso nombrar a un Ãºnico responsable importa mÃ¡s que un preÃ¡mbulo grandilocuente.' },
    {
      speaker: 'Marcus',
      text: 'Letâ€™s put that in our minority memo before the vote.',
      es: 'Incluyamos eso en nuestro voto particular antes de la votaciÃ³n.'
    }
  ],
  listening: {
    script: [
      {
        speaker: 'Moderator',
        text: 'Professor Patel, when governments weigh public health restrictions against individual liberty, why do debates become so polarised?'
      },
      {
        speaker: 'Prof. Patel',
        text: 'Often because speakers pretend there is no trade-off at all. One side treats liberty as inviolable regardless of consequence; the other treats safety as overriding everything else.'
      },
      {
        speaker: 'Moderator',
        text: 'How should a fair policy framework handle that clash?'
      },
      {
        speaker: 'Prof. Patel',
        text: 'By applying three tests: necessity, proportionality and due process. Even if a measure pursues a legitimate aim, it ought not to remain in force once less restrictive alternatives exist.'
      },
      {
        speaker: 'Moderator',
        text: 'And what about accountability after the crisis passes?'
      },
      {
        speaker: 'Prof. Patel',
        text: 'We must distinguish genuine negligence from hindsight bias. Officials ought to be judged on what they could reasonably have been expected to know at the time, not on outcomes visible only years later.'
      },
      {
        speaker: 'Moderator',
        text: 'So humility cuts both ways.'
      },
      {
        speaker: 'Prof. Patel',
        text: 'Indeed. Power requires justification when exercised, and judgement requires fairness when reviewed.'
      }
    ],
    questions: [
      mc(
        'c2u04-l1',
        'Why does Prof. Patel say public health vs liberty debates become polarised?',
        [
          'Both sides often deny that a genuine trade-off exists',
          'Politicians refuse to speak on television',
          'Citizens do not understand statistics'
        ],
        0,
        'Each side treats its favoured principle as absolute instead of acknowledging a trade-off.'
      ),
      mc(
        'c2u04-l2',
        'Which three tests does she propose for a fair policy framework?',
        [
          'Speed, popularity and low cost',
          'Necessity, proportionality and due process',
          'Secrecy, flexibility and consensus'
        ],
        1,
        'She explicitly names necessity, proportionality and due process.'
      ),
      mc(
        'c2u04-l3',
        'When should a restrictive measure be lifted, according to Prof. Patel?',
        [
          'As soon as less restrictive alternatives can achieve the aim',
          'Only after an election',
          'Whenever media criticism stops'
        ],
        0,
        'It ought not to remain once less restrictive alternatives exist.'
      ),
      tf(
        'c2u04-l4',
        'Prof. Patel argues that officials should be judged strictly by outcomes known years later.',
        false,
        'She warns against hindsight bias and says they should be judged on what they could reasonably have known at the time.'
      ),
      mc(
        'c2u04-l5',
        'What does â€œhumility cuts both waysâ€ refer to in the closing exchange?',
        [
          'Those exercising power must justify it, and critics reviewing it must judge fairly',
          'Both political parties should resign',
          'Scientists and journalists should avoid each other'
        ],
        0,
        'Power requires justification, and retrospective judgement requires fairness.'
      )
    ]
  },
  reading: {
    title: 'When rights collide',
    text: 'Hard cases in ethics and public policy rarely pit a clear virtue against an obvious vice; far more often, they force a choice between two principles that any decent society would wish to honour. Free expression collides with protection from harassment; transparency collides with medical confidentiality; equal treatment collides with targeted redress for past exclusion. In such moments, slogans fail because they treat a prima facie duty as an absolute rule. Serious moral reasoning begins by acknowledging what is lost under every available option. It then asks whether the burden of a policy falls disproportionately on those least able to bear it, whether less intrusive remedies have been exhausted, and whether those affected have any meaningful avenue of appeal. Above all, it resists the temptation to infer what ought to be done merely from what is technically possible or widely practised. A rule that cannot survive scrutiny once its full consequences are stated plainly is rarely salvaged by calling it inevitable.',
    questions: [
      rc(
        'c2u04-r1',
        'Why do hard cases in ethics resist easy slogans, according to the text?',
        [
          'Because they involve conflicts between two genuinely valuable principles',
          'Because people dislike moral philosophy',
          'Because laws are written in Latin'
        ],
        0,
        'Hard cases pit two principles a decent society wishes to honour against each other.'
      ),
      rc(
        'c2u04-r2',
        'What mistake do slogans make in ethical disputes?',
        [
          'They treat a prima facie duty as an absolute, exceptionless rule',
          'They are too long to remember',
          'They use too many modal verbs'
        ],
        0,
        'Slogans fail by treating prima facie duties as absolutes.'
      ),
      rc(
        'c2u04-r3',
        'Which question is part of serious moral reasoning in the passage?',
        [
          'Whether the burden falls disproportionately on vulnerable groups',
          'Whether the policy wins short-term applause',
          'Whether the rule is older than fifty years'
        ],
        0,
        'It asks whether burdens fall disproportionately on those least able to bear them.'
      ),
      rc(
        'c2u04-r4',
        'What error does the author warn against near the end?',
        [
          'Inferring what ought to be done simply from what is possible or common',
          'Consulting affected citizens before passing a law',
          'Allowing appeals against administrative decisions'
        ],
        0,
        'This refers to the isâ€“ought gap: common practice or capability does not prove moral acceptability.'
      ),
      rc(
        'c2u04-r5',
        'What does the final sentence imply about calling a policy â€œinevitableâ€?',
        [
          'Inevitability is often used to shield a weak rule from moral scrutiny',
          'Inevitable policies are always fair',
          'Scrutiny is pointless once a policy is passed'
        ],
        0,
        'Calling a rule inevitable cannot salvage it if it fails scrutiny when stated plainly.'
      )
    ]
  },
  speaking: {
    prompt:
      'Audiencia Ã©tica en grupos de tres (8 a 10 minutos): debatan una medida real o hipotÃ©tica (por ejemplo, priorizar recursos mÃ©dicos escasos o exigir verificaciÃ³n de identidad en redes sociales). Uno presenta el caso a favor de la medida, otro defiende los lÃ­mites de derechos/privacidad y el tercero actÃºa como juez Ã©tico aplicando los criterios de necesidad, proporcionalidad y debido proceso.',
    tasks: [
      'Formulate duties and rights using precise deontic language (it is incumbent uponâ€¦, be entitled toâ€¦).',
      'Acknowledge a genuine trade-off rather than caricaturing the opposing principle.',
      'Spot and challenge any isâ€“ought fallacy or hindsight bias in the discussion.',
      'Conclude as panel or mediator with one concrete safeguard (oversight, sunset clause or redress).'
    ]
  },
  writing: {
    prompt:
      'Write a policy commentary (300 to 350 words) evaluating a controversial rule or proposal (for example, algorithmic grading, mandatory biometric checks at work or congestion pricing). Distinguish descriptive facts from normative principles, weigh two competing values using prima facie and proportionality criteria, and propose concrete safeguards using clear deontic modality.',
    rubric: [
      'Clearly separates empirical claims from normative principles without committing the isâ€“ought fallacy.',
      'Uses deontic and epistemic modals unambiguously (shall/be required to vs may well/must have).',
      'Applies proportionality, necessity and redress seriously rather than relying on slogans.',
      'Maintains a poised, impartial, analytical C2 register.'
    ],
    model:
      'Proposals to monitor remote employees through keystroke and webcam software illustrate how easily technical capability is mistaken for moral legitimacy. Defenders argue that firms already track attendance on-site and that remote oversight merely preserves parity. Yet that comparison bridges the isâ€“ought gap too hastily: the fact that some monitoring occurs in offices does not establish that continuous domestic surveillance ought to be tolerated. Prima facie, employers have a legitimate interest in verifying work; employees, equally, have a claim to privacy and dignity at home. Under a proportionality test, invasive software fails whenever less intrusive alternatives â€” such as clear deliverable targets and regular check-ins â€” remain effective. Were an organisation nevertheless to demonstrate an overriding security need, such as handling sensitive medical records, it would be incumbent upon management to limit monitoring strictly to work devices, prohibit covert capture and publish clear retention rules. Furthermore, workers ought to be entitled to inspect any automated performance flag and seek human redress before disciplinary action is taken. Efficiency gained by eroding trust rarely proves durable, and convenience alone cannot justify what offends against proportionality.'
  },
  pronunciation: {
    items: [
      { word: 'prima facie', ipa: '/ËŒpraÉªmÉ™ ËˆfeÉªÊƒi/', stress: 'PRI-ma FA-cie' },
      { word: 'fiduciary', ipa: '/fÉªËˆdjuËÊƒÉ™ri/', stress: 'fi-DU-ci-ar-y' },
      { word: 'culpability', ipa: '/ËŒkÊŒlpÉ™ËˆbÉªlÉ™ti/', stress: 'cul-pa-BIL-i-ty' },
      { word: 'arbitrariness', ipa: '/ËŒÉ‘ËbÉªËˆtrerÉªnÉ™s/', stress: 'ar-bi-TRAR-i-ness' },
      { word: 'inviolable', ipa: '/ÉªnËˆvaÉªÉ™lÉ™bl/', stress: 'in-VI-o-la-ble' }
    ],
    tips: [
      'En prima facie, la pronunciaciÃ³n habitual en discurso jurÃ­dico y acadÃ©mico en inglÃ©s es /ËŒpraÉªmÉ™ ËˆfeÉªÊƒi/ (o /ËˆfeÉªÊƒÉ™/).',
      'Al contrastar una concesiÃ³n Ã©tica con una condiciÃ³n, marca la entonaciÃ³n en la salvedad: â€œPrima facie it is a right, | unLESS overriding harm is at stake.â€',
      'No confundas la fuerza de â€œMUSTâ€ epistÃ©mico (tono ligeramente mÃ¡s bajo y fluido) con â€œMUSTâ€ deÃ³ntico (mÃ¡s marcado en textos normativos).'
    ]
  },
  exercises: [
    mc(
      'c2u04-e1',
      'In which sentence is â€œmustâ€ clearly epistemic rather than deontic?',
      [
        'The auditors must have overlooked the footnote when approving the accounts.',
        'All auditors must disclose any conflict of interest prior to review.',
        'Candidates must submit their appeals within fourteen days.'
      ],
      0,
      'â€œMust have + past participleâ€ expresses a deduction about the past.',
      'Choose the best option.'
    ),
    fb(
      'c2u04-e2',
      'Privacy is a ___ facie right, meaning it holds unless an overriding duty outweighs it.',
      'prima',
      'prima facie = valid at first sight unless outweighed.',
      undefined,
      'Write the missing Latin word.'
    ),
    fb(
      'c2u04-e3',
      'Citizens affected by an automated error ought to be entitled to timely ___.',
      'redress',
      'entitled to redress = right to remedy or compensation.',
      ['appeal', 'compensation'],
      'Write the missing noun.'
    ),
    wo(
      'c2u04-e4',
      ['incumbent', 'It', 'is', 'upon', 'the', 'board', 'to', 'explain', 'the', 'delay'],
      ['It', 'is', 'incumbent', 'upon', 'the', 'board', 'to', 'explain', 'the', 'delay'],
      'Formal deontic extraposition.'
    ),
    tf(
      'c2u04-e5',
      'The â€œisâ€“ought gapâ€ refers to deriving a moral obligation solely from a factual description without an ethical premise.',
      true,
      'Descriptive facts alone do not entail normative conclusions.'
    ),
    mt(
      'c2u04-e6',
      'Match each ethical or policy term with its definition.',
      [
        ['moral hazard', 'taking greater risks because someone else bears the cost'],
        ['due process', 'fair, established legal or administrative procedure'],
        ['pass the buck', 'shift blame or responsibility onto another party'],
        ['proportionality', 'ensuring a restriction is no greater than the aim requires']
      ],
      'Precision in policy terms avoids vague moralising.'
    ),
    tr(
      'c2u04-e7',
      'Rewrite with â€œneed not haveâ€ to show the action was done unnecessarily.',
      'The ministry suspended the entire grant, although only one clause was flawed.',
      'The ministry need not have suspended the entire grant',
      'need not have + past participle = unnecessary past action.',
      [
        'The ministry neednâ€™t have suspended the entire grant',
        'The ministry need not have suspended the entire grant, although only one clause was flawed'
      ]
    ),
    tr(
      'c2u04-e8',
      'Rewrite using an inverted conditional starting with â€œWereâ€.',
      'If a firm were to ignore safety warnings, its liability would increase.',
      'Were a firm to ignore safety warnings, its liability would increase',
      'Were + subject + to-infinitive.',
      ['Were a firm to ignore safety warnings its liability would increase']
    ),
    rc(
      'c2u04-e9',
      'What flaw in the speakerâ€™s reasoning is exposed?',
      [
        'An isâ€“ought fallacy: treating widespread practice as moral justification',
        'Hindsight bias about past technology',
        'A grammatical confusion between past and future'
      ],
      0,
      'Common practice (â€œevery competitor does itâ€) does not prove it is right.',
      'â€œEvery competitor collects user location data continuously,â€ the executive argued, â€œso there can be nothing improper about our doing the same.â€'
    ),
    sa(
      'c2u04-e10',
      'Write a 4-sentence ethical evaluation of a rule in your workplace or university using one deontic structure (incumbent upon / entitled to), one prima facie qualification and one proportionality test.',
      'Model: â€œIt is incumbent upon the university to protect exam integrity. Prima facie, however, students are entitled to privacy in their own homes. Continuous webcam recording fails proportionality when oral checks or open-book tasks remain viable. Without narrow safeguards, convenience overrides dignity.â€ Check: clear normative framing and balanced trade-off.'
    )
  ],
  assessment: [
    mc(
      'c2u04-t1',
      'Which sentence expresses deontic obligation most unambiguously in a policy text?',
      [
        'Inspectors shall record every exemption in writing.',
        'Inspectors may well have recorded the exemption.',
        'Inspectors must have recorded it yesterday.'
      ],
      0,
      'â€œShallâ€ in formal policy/legal drafting states a binding requirement.'
    ),
    mc(
      'c2u04-t2',
      'What does â€œcould reasonably have been expected to foreseeâ€ guard against?',
      [
        'Judging past actors unfairly with hindsight bias',
        'Requiring written contracts',
        'Using active verbs'
      ],
      0,
      'It anchors responsibility to what was foreseeable at the time.'
    ),
    fb(
      'c2u04-t3',
      'Bailing out reckless lenders without penalty creates moral ___.',
      'hazard',
      'moral hazard.',
      undefined,
      'Write the missing word.'
    ),
    fb(
      'c2u04-t4',
      'The committee ought to ___ consulted residents before closing the clinic.',
      'have',
      'ought to have + past participle = unfulfilled past duty.',
      undefined,
      'Write the missing word.'
    ),
    tf(
      'c2u04-t5',
      'A prima facie duty is one that can never be overridden by any competing consideration.',
      false,
      'Prima facie duties hold unless outweighed by a stronger competing duty.'
    ),
    tf(
      'c2u04-t6',
      'â€œEquityâ€ and â€œequalityâ€ are identical in meaning in policy analysis.',
      false,
      'Equality treats everyone identically; equity adjusts for differing needs or starting points.'
    ),
    wo(
      'c2u04-t7',
      ['ought', 'What', 'to', 'be', 'does', 'not', 'follow', 'from', 'what', 'is'],
      ['What', 'ought', 'to', 'be', 'does', 'not', 'follow', 'from', 'what', 'is'],
      'Summary of Humeâ€™s isâ€“ought distinction.'
    ),
    mc(
      'c2u04-t8',
      'Which phrase best signals a conflict between two valid principles?',
      [
        'This is not a clash between right and wrong, but a genuine trade-off between two competing goods.',
        'Only an idiot could disagree with our policy.',
        'The opposition simply hates fairness.'
      ],
      0,
      'Mature ethical reasoning recognises competing valid goods.'
    ),
    tr(
      'c2u04-t9',
      'Rewrite formally using â€œentitled toâ€.',
      'Every resident has the right to a written explanation.',
      'Every resident is entitled to a written explanation',
      'be entitled to + noun phrase.',
      ['Residents are entitled to a written explanation']
    ),
    mc(
      'c2u04-t10',
      'What does â€œdiffusing responsibilityâ€ usually result in?',
      [
        'Allowing individuals to avoid accountability when things go wrong',
        'Faster decision-making',
        'Clearer legal remedies'
      ],
      0,
      'When everyone is vaguely responsible, nobody answers.'
    )
  ],
  review: [
    'Separate deontic modality (obligation/permission) from epistemic modality (deduction/probability).',
    'Never jump from descriptive fact (â€œisâ€) to moral rule (â€œoughtâ€) without stating a normative principle.',
    'Test policies with necessity, proportionality, due process and accessible redress.',
    'Use prima facie framing to weigh competing goods fairly without caricaturing either side.',
    'Evaluate past decisions against what could reasonably have been foreseen at the time, avoiding hindsight bias.'
  ]
};

export default unit;
