import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';

const unit: Unit = {
  id: 'c2-u06',
  level: 'C2',
  unitNumber: 6,
  title: 'Institutional Discourse and Power',
  subtitle: 'Deconstruct framing, agentless passives and institutional euphemism',
  communicativeGoal:
    'Analizar y responder al discurso institucional, corporativo y mediÃ¡tico: detectar cÃ³mo la pasiva sin agente, la nominalizaciÃ³n opaca, los eufemismos y la presuposiciÃ³n ocultan responsabilidades o naturalizan decisiones, y reescribir mensajes con transparencia.',
  objectives: [
    'Identificar cuÃ¡ndo la pasiva sin agente y la nominalizaciÃ³n ocultan al responsable de una acciÃ³n (agency erasure).',
    'Reconocer la presuposiciÃ³n estratÃ©gica, las preguntas cargadas y el eufemismo corporativo o burocrÃ¡tico (doublespeak).',
    'Deconstruir el encuadre (framing) metafÃ³rico y lÃ©xico en comunicados de crisis, polÃ­ticas internas y noticias.',
    'Reescribir comunicados opacos en prosa clara y responsable, y formular preguntas incisivas pero profesionales ante evasivas.'
  ],
  grammar: {
    title: 'Agentless passives, nominalisation, presupposition and cleft focus',
    explanation: [
      'La gramÃ¡tica no es neutral: decide quiÃ©n aparece como actor y quiÃ©n queda fuera de plano. La pasiva sin agente ("Regrettably, errors were made during the transition") y los verbos ergativos o intransitivos ("Costs escalated"; "Service levels deteriorated") presentan decisiones humanas como si fueran fenÃ³menos meteorolÃ³gicos. Cuando un comunicado dice "positions were eliminated" en lugar de "management cut forty posts", borra la agencia. En C2 hay que distinguir cuÃ¡ndo la pasiva es legÃ­tima (el agente es obvio o irrelevante en un protocolo tÃ©cnico) y cuÃ¡ndo funciona como escudo.',
      'La nominalizaciÃ³n refuerza ese borrado al convertir acciones con sujeto y tiempo en cosas abstractas intemporales: "Following a comprehensive review of operational efficiencies, a strategic realignment has been initiated." AquÃ­ nadie revisa, nadie decide y nadie despide; solo ocurren "realignments". Deconstruir este estilo consiste en restituir sujetos y verbos finitos ("After reviewing costs, directors closed two branches") para hacer visible quiÃ©n responde de quÃ©.',
      'La presuposiciÃ³n institucional introduce premisas discutibles como si ya estuvieran cerradas: mediante posesivos ("our shared commitment to modernisation"), clÃ¡usulas temporales ("once the inevitable restructuring concludes"), adjetivos factivos ("we regret the necessary reductions") o preguntas cargadas ("How can we accelerate this vital reform?"). Quien responde directamente a la pregunta acepta la premisa; la respuesta experta la desactiva primero ("Before discussing pace, we need to ask whether the reform is vital").',
      'Las oraciones hendidas (cleft sentences) y el foco contrastivo permiten devolver el foco al actor o a la causa omitida: "It was not external demand that fell, but internal maintenance that was deferred"; "What the statement omits is who signed off on the waiver." Son herramientas precisas tanto para el anÃ¡lisis crÃ­tico como para el interrogatorio periodÃ­stico o sindical.',
      'Registro: denunciar la opacidad no requiere agresividad ni jerga acadÃ©mica pesada. El tono mÃ¡s eficaz en C2 combina claridad llana, preguntas concretas ("Who authorisedâ€¦? By what criterionâ€¦?") y sustituciÃ³n de eufemismos por tÃ©rminos verificables.'
    ],
    forms: [
      {
        label: 'Agency erasure vs restored agency',
        lines: [
          'Mistakes were made during the rollout. â†’ Management approved the rollout without testing.',
          'A workforce adjustment is underway. â†’ The company is cutting sixty jobs.',
          'Deadlines slipped over the summer. â†’ The contractor missed three delivery dates.',
          'It was felt that further consultation would delay implementation. â†’ Directors chose not to consult staff.'
        ]
      },
      {
        label: 'Unpacking opaque nominalisation',
        lines: [
          'the optimisation of legacy assets â†’ selling older buildings',
          'service-level recalibration â†’ reducing evening opening hours',
          'voluntary separation incentives â†’ redundancy packages',
          'stakeholder alignment initiatives â†’ persuading reluctant partners'
        ]
      },
      {
        label: 'Defusing presuppositions and refocusing',
        lines: [
          'Before asking how fast to proceed, we must question whether the premise holds.',
          'What the memo leaves unsaid is who authorised the exemption.',
          'It was not technical failure that caused the outage, but deferred maintenance.',
          'Calling a cut â€œefficiencyâ€ presupposes that nothing of value is lost.'
        ]
      },
      {
        label: 'Useful expressions and collocations',
        lines: [
          'erase agency; obscure accountability; deflect scrutiny',
          'corporate doublespeak; bureaucratic euphemism; spin',
          'naturalise an assumption; beg the question; shift the blame',
          'pin down responsibility; press for specifics; pierce the jargon',
          'dressed up as; couched in neutral terms; a convenient abstraction',
          'the passive voice of evasion; nominalised fog',
          'challenge the framing; unpack the premise; name the actor',
          'plain speaking; transparent wording; direct attribution'
        ]
      }
    ]
  },
  vocabulary: [
    v('agency', 'agencia, capacidad de actuar o autorÃ­a', '/ËˆeÉªdÊ’É™nsi/', 'A-gen-cy'),
    v('doublespeak', 'lenguaje engaÃ±oso o deliberadamente ambiguo', '/ËˆdÊŒblspiËk/', 'DOU-ble-speak'),
    v('euphemism', 'eufemismo', '/ËˆjuËfÉ™mÉªzÉ™m/', 'EU-phe-mism'),
    v('obfuscate', 'ofuscar, oscurecer el sentido', '/ËˆÉ’bfÊŒskeÉªt/', 'OB-fus-cate'),
    v('accountability', 'rendiciÃ³n de cuentas, responsabilidad', '/É™ËŒkaÊŠntÉ™ËˆbÉªlÉ™ti/', 'ac-coun-ta-BIL-i-ty'),
    v('presupposition', 'presuposiciÃ³n', '/ËŒpriËsÊŒpÉ™ËˆzÉªÊƒn/', 'pre-sup-po-SI-tion'),
    v('framing', 'encuadre discursivo', '/ËˆfreÉªmÉªÅ‹/', 'FRAM-ing'),
    v('boilerplate', 'texto estÃ¡ndar o fÃ³rmula prefabricada', '/ËˆbÉ”ÉªlÉ™pleÉªt/', 'BOIL-er-plate'),
    v('realignment', 'reajuste (a menudo eufemismo de recorte)', '/ËŒriËÉ™ËˆlaÉªnmÉ™nt/', 're-a-LIGN-ment'),
    v('downsize', 'reducir plantilla o tamaÃ±o', '/ËˆdaÊŠnsaÉªz/', 'DOWN-size'),
    v('whitewash', 'encubrir fallos, lavar la imagen', '/ËˆwaÉªtwÉ’Êƒ/', 'WHITE-wash'),
    v('spin', 'giro interesado de la informaciÃ³n', '/spÉªn/', 'SPIN'),
    v('deflect', 'desviar (crÃ­ticas o preguntas)', '/dÉªËˆflekt/', 'de-FLECT'),
    v('scapegoat', 'chivo expiatorio', '/ËˆskeÉªpÉ¡É™ÊŠt/', 'SCAPE-goat'),
    v('naturalise', 'presentar como natural o inevitable', '/ËˆnÃ¦tÊƒrÉ™laÉªz/', 'NAT-u-ral-ise'),
    v('evasion', 'evasiÃ³n, escapatoria', '/ÉªËˆveÉªÊ’n/', 'e-VA-sion'),
    v('opaque', 'opaco, poco transparente', '/É™ÊŠËˆpeÉªk/', 'o-PAQUE'),
    v('candour', 'franqueza', '/ËˆkÃ¦ndÉ™/', 'CAN-dour'),
    v('scrutiny', 'escrutinio, examen atento', '/ËˆskruËtÉ™ni/', 'SCRU-ti-ny'),
    v('sanitise', 'suavizar o maquillar (un relato)', '/ËˆsÃ¦nÉªtaÉªz/', 'SAN-i-tise'),
    v('unattributed', 'sin atribuciÃ³n de autorÃ­a', '/ËŒÊŒnÉ™ËˆtrÉªbjuËtÉªd/', 'un-at-TRIB-u-ted'),
    v('convenient abstraction', 'abstracciÃ³n conveniente', '/kÉ™nËˆviËniÉ™nt Ã¦bËˆstrÃ¦kÊƒn/', 'con-VE-nient ab-STRAC-tion'),
    v('ergative', 'ergativo (verbo que oculta al agente)', '/ËˆÉœËÉ¡É™tÉªv/', 'ER-ga-tive'),
    v('pin down', 'concretar, exigir precisiÃ³n', '/pÉªn ËˆdaÊŠn/', 'pin DOWN')
  ],
  examples: [
    {
      en: 'Saying â€œerrors were madeâ€ uses the passive voice of evasion: it acknowledges a mishap while deleting everyone who made it.',
      es: 'Decir â€œse cometieron erroresâ€ usa la pasiva de la evasiÃ³n: admite un fallo mientras borra a todo aquel que lo cometiÃ³.'
    },
    {
      en: 'â€œWorkforce right-sizingâ€ is corporate doublespeak designed to sanitise layoffs as an exercise in symmetry.',
      es: 'â€œAdecuaciÃ³n de plantillaâ€ es lenguaje corporativo engaÃ±oso pensado para maquillar despidos como un ejercicio de simetrÃ­a.'
    },
    {
      en: 'The memo presupposes that the cuts are â€œinevitableâ€, leaving readers to debate only their timing.',
      es: 'El memorando presupone que los recortes son â€œinevitablesâ€, dejando que los lectores debatan solo su calendario.'
    },
    {
      en: 'When a press release says â€œdelays emergedâ€, an ergative verb makes a management failure sound like the weather.',
      es: 'Cuando un comunicado dice â€œsurgieron retrasosâ€, un verbo intransitivo hace que un fallo de gestiÃ³n suene como el clima.'
    },
    {
      en: 'What the annual report omits behind its boilerplate praise is who signed off on the unhedged loan.',
      es: 'Lo que el informe anual omite tras sus elogios prefabricados es quiÃ©n autorizÃ³ el prÃ©stamo sin cobertura.'
    },
    {
      en: 'To pierce the nominalised fog, simply ask two questions: who did what, and to whom?',
      es: 'Para atravesar la niebla nominalizada, basta hacer dos preguntas: Â¿quiÃ©n hizo quÃ© y a quiÃ©n?'
    },
    {
      en: 'It was not the frontline staff who resisted transparency, but senior legal advisers who insisted on redacting the appendix.',
      es: 'No fue el personal de primera lÃ­nea quien se resistiÃ³ a la transparencia, sino los asesores jurÃ­dicos sÃ©nior quienes insistieron en tachar el anexo.'
    },
    {
      en: 'Good accountability journalism replaces convenient abstractions with named actors and verifiable dates.',
      es: 'El buen periodismo de rendiciÃ³n de cuentas sustituye abstracciones convenientes por actores con nombre y fechas verificables.'
    }
  ],
  dialogue: [
    {
      speaker: 'Nadia',
      text: 'Have you seen the internal announcement about closing the night desk? Itâ€™s a masterclass in obfuscation.',
      es: 'Â¿Has visto el comunicado interno sobre el cierre del turno nocturno? Es una clase magistral de ofuscaciÃ³n.'
    },
    {
      speaker: 'Tom',
      text: 'Read me the opening line.',
      es: 'LÃ©eme la primera lÃ­nea.'
    },
    {
      speaker: 'Nadia',
      text: 'â€œFollowing an extensive evaluation of shifting operational demands, a reconfiguration of overnight coverage has been scheduled to optimise responsiveness.â€',
      es: 'â€œTras una extensa evaluaciÃ³n de las demandas operativas cambiantes, se ha programado una reconfiguraciÃ³n de la cobertura nocturna para optimizar la capacidad de respuestaâ€.'
    },
    {
      speaker: 'Tom',
      text: 'Not a single human being in the entire sentence. Who evaluated? Who scheduled it? And what does â€œreconfigurationâ€ actually mean?',
      es: 'Ni un solo ser humano en toda la oraciÃ³n. Â¿QuiÃ©n evaluÃ³? Â¿QuiÃ©n lo programÃ³? Â¿Y quÃ© significa realmente â€œreconfiguraciÃ³nâ€?'
    },
    {
      speaker: 'Nadia',
      text: 'It means theyâ€™re shutting the desk from midnight to six and laying off four coordinators. Notice also â€œshifting operational demandsâ€ â€” as if night calls just evaporated on their own.',
      es: 'Significa que cierran el servicio de medianoche a seis y despiden a cuatro coordinadores. FÃ­jate tambiÃ©n en â€œdemandas operativas cambiantesâ€, como si las llamadas nocturnas se hubieran evaporado solas.'
    },
    {
      speaker: 'Tom',
      text: 'And the presupposition in â€œoptimise responsivenessâ€: it implies cutting night staff will somehow make service faster.',
      es: 'Y la presuposiciÃ³n en â€œoptimizar la capacidad de respuestaâ€: implica que recortar personal nocturno harÃ¡ de algÃºn modo el servicio mÃ¡s rÃ¡pido.'
    },
    {
      speaker: 'Nadia',
      text: 'Exactly. Plus the Q&A at the bottom asks: â€œHow can teams support a smooth transition?â€',
      es: 'Exacto. AdemÃ¡s, las preguntas frecuentes al final dicen: â€œÂ¿CÃ³mo pueden los equipos apoyar una transiciÃ³n fluida?â€'
    },
    {
      speaker: 'Tom',
      text: 'A classic loaded question. Answering it accepts that the closure is a settled fact and turns staff into co-managers of their own cuts.',
      es: 'Una pregunta cargada clÃ¡sica. Responderla da por sentado que el cierre es un hecho consumado y convierte al personal en cogestor de sus propios recortes.'
    },
    {
      speaker: 'Nadia',
      text: 'So how do we respond at tomorrowâ€™s staff forum without sounding theatrical?',
      es: 'Entonces, Â¿cÃ³mo respondemos en el foro de maÃ±ana sin sonar teatrales?'
    },
    {
      speaker: 'Tom',
      text: 'Translate the jargon calmly. Ask: â€œWho signed off on closing the night desk, what call-volume figures supported that decision, and what happens to urgent cases after midnight?â€',
      es: 'Traduce la jerga con calma. Pregunta: â€œÂ¿QuiÃ©n autorizÃ³ el cierre del turno nocturno, quÃ© cifras de llamadas respaldaron esa decisiÃ³n y quÃ© ocurre con los casos urgentes pasada la medianoche?â€'
    },
    {
      speaker: 'Nadia',
      text: 'Concrete actors, verifiable numbers, no abstractions. Much harder to deflect with boilerplate.',
      es: 'Actores concretos, cifras verificables, sin abstracciones. Mucho mÃ¡s difÃ­cil de desviar con frases prefabricadas.' },
    {
      speaker: 'Tom',
      text: 'And if they answer â€œmistakes were made in communication,â€ ask who made them.',
      es: 'Y si responden â€œse cometieron errores de comunicaciÃ³nâ€, pregunta quiÃ©n los cometiÃ³.'
    }
  ],
  listening: {
    script: [
      {
        speaker: 'Host',
        text: 'As a former corporate communications director, why do organisations reach so quickly for phrases like â€œright-sizingâ€ or â€œerrors were madeâ€?'
      },
      {
        speaker: 'Guest',
        text: 'Usually out of legal caution and discomfort. Lawyers dislike active verbs that assign blame, and executives dislike saying â€œwe misjudged the market and have to lay people off.â€'
      },
      {
        speaker: 'Host',
        text: 'Does euphemism actually protect the organisation?'
      },
      {
        speaker: 'Guest',
        text: 'Rarely. Employees and journalists translate it within seconds. Worse, when a memo dresses up a painful cut as â€œefficiency enhancementâ€, people feel insulted as well as worried.'
      },
      {
        speaker: 'Host',
        text: 'What distinguishes legitimate institutional language from spin?'
      },
      {
        speaker: 'Guest',
        text: 'Testability. A technical policy uses precise terms so obligations are clear. Spin uses grand abstractions so nobody can pin down what was promised or who is accountable.'
      },
      {
        speaker: 'Host',
        text: 'If you were advising a spokesperson today, what would you tell them?'
      },
      {
        speaker: 'Guest',
        text: 'Name the decision, own who made it, state the reason plainly, and skip the euphemism. Candour doesnâ€™t prevent criticism, but it keeps credibility intact.'
      }
    ],
    questions: [
      mc(
        'c2u06-l1',
        'Why do organisations often use phrases like â€œerrors were madeâ€?',
        [
          'Out of legal caution and reluctance to accept direct blame',
          'Because English lacks active verbs for business',
          'To make memos easier for junior staff to read'
        ],
        0,
        'Legal caution and discomfort with admitting misjudgement drive agentless phrasing.'
      ),
      mc(
        'c2u06-l2',
        'How do employees usually react when painful cuts are dressed up as â€œefficiency enhancementâ€?',
        [
          'They decode it immediately and feel insulted as well as anxious',
          'They believe nobody is losing a job',
          'They praise the style of the memo'
        ],
        0,
        'Audiences translate the euphemism in seconds and resent the spin.'
      ),
      mc(
        'c2u06-l3',
        'How does the guest distinguish legitimate technical language from spin?',
        [
          'Technical language clarifies obligations; spin uses abstractions to evade accountability',
          'Technical language is always longer',
          'Spin never uses passive verbs'
        ],
        0,
        'The criterion is testability and clear accountability.'
      ),
      tf(
        'c2u06-l4',
        'The guest claims that plain candour eliminates all public criticism.',
        false,
        'She says candour does not prevent criticism, but it protects credibility.'
      ),
      mc(
        'c2u06-l5',
        'What is her final advice to spokespeople?',
        [
          'State the decision, name who made it, give the reason plainly and drop euphemisms',
          'Always blame external market forces',
          'Publish only boilerplate statements'
        ],
        0,
        'She urges direct ownership and plain explanation.'
      )
    ]
  },
  reading: {
    title: 'The grammar of nobody in particular',
    text: 'When institutions wish to announce bad news without appearing to have caused it, they rarely invent facts; they rearrange grammar. Three devices do most of the work. First, the agentless passive converts an action into an orphan event: â€œfunding was discontinuedâ€ leaves no trace of the committee that voted. Second, ergative verbs allow processes to happen seemingly by themselves: â€œstandards slippedâ€ or â€œtensions escalatedâ€, as though institutions were weather systems. Third, dense nominalisation freezes decisions into abstract nouns â€” â€œrestructuringâ€, â€œoptimisationâ€, â€œstreamliningâ€ â€” that resist questions because they have no subject and no tense. Combined with presuppositions (â€œfollowing the necessary adjustmentsâ€), such prose naturalises choices as inevitabilities. Reading critically means performing a small grammatical audit: turning nouns back into verbs, asking who sits behind every passive, and refusing to answer loaded questions until their hidden premise has been unpacked. Clarity is not merely an aesthetic preference; in public life, it is the precondition of accountability.',
    questions: [
      rc(
        'c2u06-r1',
        'According to the passage, how do institutions often soften bad news without lying outright?',
        [
          'By rearranging grammar to obscure who acted and why',
          'By translating documents into foreign languages',
          'By deleting all numbers from reports'
        ],
        0,
        'They rearrange grammar through passives, ergatives and nominalisation.'
      ),
      rc(
        'c2u06-r2',
        'Why does the author compare ergative verbs like â€œstandards slippedâ€ to weather systems?',
        [
          'Because they make human or managerial failures seem like spontaneous natural events',
          'Because institutions are affected by rainfall',
          'Because weather forecasts use passive voice'
        ],
        0,
        'Ergatives present outcomes as happening by themselves without an agent.'
      ),
      rc(
        'c2u06-r3',
        'Why do dense nominalisations like â€œstreamliningâ€ resist critical questions?',
        [
          'They have no grammatical subject or tense, hiding who acted and when',
          'They are too short to notice',
          'They are always positive adjectives'
        ],
        0,
        'Turning actions into nouns removes actors and time.'
      ),
      rc(
        'c2u06-r4',
        'What does a â€œgrammatical auditâ€ involve when reading critically?',
        [
          'Turning abstract nouns back into verbs, identifying missing agents and unpacking premises',
          'Counting how many adjectives appear per page',
          'Checking punctuation marks only'
        ],
        0,
        'It reverses opacity by restoring verbs, agents and testing hidden premises.'
      ),
      rc(
        'c2u06-r5',
        'What is the authorâ€™s closing claim about clarity?',
        [
          'In public life, clarity is essential for holding decision-makers accountable',
          'Clarity matters only to fiction writers',
          'Accountability requires using more euphemisms'
        ],
        0,
        'Clarity is called the precondition of accountability.'
      )
    ]
  },
  speaking: {
    prompt:
      'Rueda de prensa simulada en parejas o trÃ­os (8 a 10 minutos): un portavoz institucional intenta defender un comunicado opaco sobre un fallo de servicio o recorte; los periodistas/representantes aplican una â€œauditorÃ­a gramaticalâ€ oral, desactivan presuposiciones cargadas y exigen respuestas concretas sin perder la cortesÃ­a profesional.',
    tasks: [
      'Spot and challenge at least two instances of agentless passive or corporate euphemism.',
      'Defuse a loaded question by questioning its hidden premise before answering.',
      'Use a cleft sentence (What the statement omits isâ€¦; It was not X thatâ€¦, but Yâ€¦) to refocus on accountability.',
      'Translate one opaque sentence into plain, verifiable English on the spot.'
    ]
  },
  writing: {
    prompt:
      'Analyse the following institutional statement (180â€“200 words) and then rewrite it transparently (100â€“120 words): â€œFollowing a holistic review of regional service delivery, it was determined that a phased consolidation of branch operations is required to ensure long-term sustainability. Consequently, a number of local offices will be transitioned out of active operation, while affected personnel are supported through structured redeployment pathways.â€ Identify the grammatical mechanisms used to obscure agency and justify your plain-English rewrite.',
    rubric: [
      'Accurately identifies agentless passives, opaque nominalisations, ergatives/euphemisms and presuppositions.',
      'Explains the pragmatic effect of each device on accountability and reader perception.',
      'Provides a rewrite that restores clear subjects, active verbs and candid wording without becoming informal or rude.',
      'Uses analytical C2 prose with cleft focus and precise linguistic terminology.'
    ],
    model:
      'Analysis. The statement conceals agency through three interlocking devices. First, the extraposed passive â€œit was determined thatâ€ deletes whoever took the decision, while the noun â€œreviewâ€ hides who conducted it. Second, heavy nominalisations â€” â€œa phased consolidation of branch operationsâ€ and â€œstructured redeployment pathwaysâ€ â€” turn closing branches and reassigning or dismissing staff into bloodless administrative objects. Third, the adjective â€œrequiredâ€ combined with â€œlong-term sustainabilityâ€ presupposes that closure is an objective necessity rather than one strategic choice among others. Even â€œwill be transitioned out of active operationâ€ sanitises closure as a gradual drift. Transparent rewrite: â€œAfter reviewing regional costs, the board has decided to close four local branches over the next six months to reduce operating expenses. Sixteen staff members will lose their current roles; management will offer severance packages or interviews for vacancies in neighbouring towns, and will publish the branch-by-branch criteria on Friday.â€ Restoring actors (â€œthe boardâ€, â€œmanagementâ€) and active verbs (â€œcloseâ€, â€œloseâ€) preserves a formal tone while enabling real accountability.'
  },
  pronunciation: {
    items: [
      { word: 'obfuscate', ipa: '/ËˆÉ’bfÊŒskeÉªt/', stress: 'OB-fus-cate' },
      { word: 'euphemism', ipa: '/ËˆjuËfÉ™mÉªzÉ™m/', stress: 'EU-phe-mism' },
      { word: 'accountability', ipa: '/É™ËŒkaÊŠntÉ™ËˆbÉªlÉ™ti/', stress: 'ac-coun-ta-BIL-i-ty' },
      { word: 'presupposition', ipa: '/ËŒpriËsÊŒpÉ™ËˆzÉªÊƒn/', stress: 'pre-sup-po-SI-tion' },
      { word: 'sanitise', ipa: '/ËˆsÃ¦nÉªtaÉªz/', stress: 'SAN-i-tise' }
    ],
    tips: [
      'Al formular preguntas incisivas en inglÃ©s, mantÃ©n un tono calmado y acentÃºa el elemento interrogativo o el actor omitido: â€œWHO signed off on that waiver?â€',
      'En palabras con varios prefijos y sufijos como presupposition y accountability, marca el acento secundario y el principal para no atropellar las sÃ­labas.',
      'En cleft sentences para contrastar (â€œIt was NOT demand that fell, | but maintenance that was deFERREDâ€), el contraste entonativo deja clara la correcciÃ³n.'
    ]
  },
  exercises: [
    mc(
      'c2u06-e1',
      'Which sentence most clearly erases human agency?',
      [
        'Regrettably, errors were made during the transition.',
        'The operations director approved the transition without final testing.',
        'Staff reported three billing errors on Monday.'
      ],
      0,
      'â€œErrors were madeâ€ omits who made them.',
      'Choose the best option.'
    ),
    fb(
      'c2u06-e2',
      'Corporate ___ uses euphemisms like â€œright-sizingâ€ to disguise layoffs.',
      'doublespeak',
      'doublespeak = deliberately misleading or euphemistic language.',
      ['jargon', 'spin'],
      'Write the missing noun.'
    ),
    fb(
      'c2u06-e3',
      'Asking â€œHow fast should we implement this essential cut?â€ hides a ___ that the cut is essential.',
      'presupposition',
      'presupposition = a background assumption treated as already settled.',
      ['premise'],
      'Write the missing noun.'
    ),
    wo(
      'c2u06-e4',
      ['passive', 'An', 'agentless', 'often', 'obscures', 'who', 'took', 'the', 'decision'],
      ['An', 'agentless', 'passive', 'often', 'obscures', 'who', 'took', 'the', 'decision'],
      'Core grammatical insight of the unit.'
    ),
    tf(
      'c2u06-e5',
      'The passive voice is always manipulative and should never be used in professional writing.',
      false,
      'Passives are legitimate when the actor is obvious, unknown or genuinely irrelevant.'
    ),
    mt(
      'c2u06-e6',
      'Match each institutional euphemism with its plain-English meaning.',
      [
        ['realignment of headcount', 'cutting staff jobs'],
        ['negative cash flow', 'losing money'],
        ['suboptimal outcome', 'a failure or bad result'],
        ['sunset a service', 'shut down a service']
      ],
      'Translating euphemisms restores clarity.'
    ),
    tr(
      'c2u06-e7',
      'Restore agency and active verbs using â€œThe boardâ€.',
      'A decision was taken to discontinue the night service.',
      'The board decided to discontinue the night service',
      'Restoring the actor and the verb removes evasion.',
      ['The board took a decision to discontinue the night service']
    ),
    tr(
      'c2u06-e8',
      'Refocus accountability using a cleft sentence starting with â€œWhatâ€.',
      'The memo omits who authorised the exemption.',
      'What the memo omits is who authorised the exemption',
      'What-cleft highlights the missing information.',
      ['What is omitted by the memo is who authorised the exemption']
    ),
    rc(
      'c2u06-e9',
      'Why is the spokespersonâ€™s phrasing misleading?',
      [
        'An ergative verb (â€œescalatedâ€) and passive (â€œwere incurredâ€) make human decisions sound spontaneous',
        'It gives too many specific dates and names',
        'It uses overly casual slang'
      ],
      0,
      'The grammar deletes the contractors and managers responsible.',
      'â€œOver the summer, construction costs escalated and unavoidable delays were incurred,â€ the statement read, naming neither the contractor nor the supervisor.'
    ),
    sa(
      'c2u06-e10',
      'Rewrite this opaque statement into 2 plain, candid sentences (preserving a formal tone) and name one device you removed: â€œFollowing an assessment of facility utilisation, a temporary suspension of weekend access has been enacted.â€',
      'Model: â€œAfter reviewing visitor numbers, management has decided to close the building on weekends until further notice. Staff schedules will be adjusted from next month, and users may request weekday access. Removed: the agentless passive (â€˜has been enactedâ€™) and abstract nominalisation (â€˜facility utilisationâ€™).â€ Check: actor named, active verb, formal clarity.'
    )
  ],
  assessment: [
    mc(
      'c2u06-t1',
      'Which rewrite best restores accountability to â€œIt was felt that public consultation was unnecessaryâ€?',
      [
        'Senior managers decided not to consult the public.',
        'Consultation was deemed non-essential in the circumstances.',
        'Public consultation did not happen to occur.'
      ],
      0,
      'Naming the decision-makers and using an active verb restores accountability.'
    ),
    mc(
      'c2u06-t2',
      'What is the effect of an ergative verb like â€œtensions escalatedâ€ in a crisis report?',
      [
        'It portrays the conflict as arising on its own without human actors',
        'It identifies the exact official at fault',
        'It makes the sentence informal'
      ],
      0,
      'Ergative verbs remove the causer from grammatical view.'
    ),
    fb(
      'c2u06-t3',
      'To ___ jargon means to cut through opaque language to the concrete meaning.',
      'pierce',
      'pierce the jargon (or cut through).',
      ['unpack'],
      'Write the missing verb.'
    ),
    fb(
      'c2u06-t4',
      'A standard, pre-written institutional formula repeated with little thought is called ___.',
      'boilerplate',
      'boilerplate = stock text used routinely.',
      undefined,
      'Write the missing noun.'
    ),
    tf(
      'c2u06-t5',
      'Answering a loaded question directly without questioning its premise usually accepts the premise implicitly.',
      true,
      'To reject the premise, you must defuse it before answering.'
    ),
    tf(
      'c2u06-t6',
      'Turning opaque nominalisations back into verbs with subjects makes accountability clearer.',
      true,
      'Verbs require tenses and subjects, revealing who acted.'
    ),
    wo(
      'c2u06-t7',
      ['is', 'What', 'omitted', 'often', 'matters', 'more', 'than', 'what', 'is', 'stated'],
      ['What', 'is', 'omitted', 'often', 'matters', 'more', 'than', 'what', 'is', 'stated'],
      'Cleft contrast focusing on omission.'
    ),
    mc(
      'c2u06-t8',
      'Which response best defuses the loaded question â€œWhy is your union blocking vital modernisation?â€?',
      [
        'Before discussing pace, we question whether cutting safety staff qualifies as modernisation.',
        'Because we like blocking things every Tuesday.',
        'Modernisation is always good and we support all cuts.'
      ],
      0,
      'It challenges the hidden premise (â€œvital modernisationâ€) before answering.'
    ),
    tr(
      'c2u06-t9',
      'Unpack the nominalisation into an active clause with â€œDirectorsâ€.',
      'The initiation of a phased reduction of evening hours was announced.',
      'Directors announced that they will gradually reduce evening hours',
      'Restoring actor and finite verbs clarifies the announcement.',
      [
        'Directors announced a gradual reduction in evening hours',
        'Directors announced that evening hours will be gradually reduced'
      ]
    ),
    mc(
      'c2u06-t10',
      'What makes institutional doublespeak counterproductive in the long run?',
      [
        'Audiences quickly recognise the evasion and lose trust in the speaker',
        'It makes sentences grammatically ungrammatical',
        'It forces companies to publish too many figures'
      ],
      0,
      'Euphemistic spin erodes credibility once decoded.'
    )
  ],
  review: [
    'Audit institutional prose for three evasion tools: agentless passives, ergative verbs and stacked nominalisations.',
    'Defuse loaded questions and presuppositions before answering their surface question.',
    'Translate corporate doublespeak into named actors, finite verbs and verifiable facts.',
    'Use cleft focus (â€œWhat the memo omits isâ€¦â€) to bring hidden responsibility back into view.',
    'Remember that passives are legitimate when agents are obvious or irrelevant â€” only evasion is a flaw.'
  ]
};

export default unit;
