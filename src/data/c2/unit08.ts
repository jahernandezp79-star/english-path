import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';

const unit: Unit = {
  id: 'c2-u08',
  level: 'C2',
  unitNumber: 8,
  title: 'Humour, Irony and Cultural Register',
  subtitle: 'Master understatement, satire, register clashes and cultural wit',
  communicativeGoal:
    'Comprender y emplear el humor sutil, la ironÃ­a impasible, el contraste de registros y la sÃ¡tira en inglÃ©s, calibrando cuÃ¡ndo un guiÃ±o cultural funciona y cuÃ¡ndo puede malinterpretarse.',
  objectives: [
    'Reconocer y producir efectos de contraste de registro (bathos, mock-formal) y humor impasible (deadpan).',
    'Emplear la subestimaciÃ³n cultural, las preguntas eco y los comentarios parentÃ©ticos con intenciÃ³n irÃ³nica.',
    'Variar con control expresiones fijas y modismos conocidos sin perder naturalidad.',
    'Evaluar el riesgo pragmÃ¡tico e intercultural de la ironÃ­a, la autoparodia y la sÃ¡tira segÃºn la audiencia.'
  ],
  grammar: {
    title: 'Register clashes, bathos, mock-formal syntax and idiomatic play',
    explanation: [
      'El humor en inglÃ©s â€”sobre todo en el ensayo, la crÃ³nica y la conversaciÃ³n cultaâ€” depende con frecuencia del choque de registros (register clash) y del batos (bathos): descender bruscamente de un tono solemne o grandilocuente a un detalle trivial o cotidiano. Por ejemplo: "History will judge this committee harshly, or at least until someone remembers where the biscuits were kept." Para que el efecto funcione, la primera mitad debe sonar impecablemente formal en sintaxis y lÃ©xico; cualquier exceso previo arruina la sorpresa.',
      'La sintaxis falsamente solemne (mock-formal) utiliza estructuras propias del derecho, la academia o la Ã©pica para describir asuntos menores: inversiones negativas (Little did the committee realise that the printer was out of ink), pasivas impersonales (It has been reliably reported that the kettle has failed again) y oraciones periÃ³dicas cuyo desenlace se retrasa hasta la Ãºltima palabra. El contraste entre el peso gramatical y la ligereza del contenido genera ironÃ­a sin necesidad de signos de exclamaciÃ³n.',
      'En la interacciÃ³n oral, la subestimaciÃ³n (understatement), las coletillas irÃ³nicas (tag questions) y los incisos parentÃ©ticos transmiten complicidad: "Heâ€™s not exactly overburdened with modesty" o "The merger, if one may call a hostile takeover by so gentle a name, proceeded smoothly." Las preguntas eco repiten parte de lo dicho por el interlocutor con entonaciÃ³n ascendente para expresar incredulidad o burla cortÃ©s: "A minor oversight?" frente a un error millonario.',
      'El juego idiomÃ¡tico (idiomatic variation) solo resulta ingenioso en C2 cuando el hablante domina la forma canÃ³nica. Alterar un modismo conocido ("crossing that bridge when we burn it", mezcla de dos modismos; o "a storm in a remarkably expensive teacup") funciona porque el oyente reconoce la plantilla original. Si se deforma por accidente, suena a error; si se modifica con precisiÃ³n, aÃ±ade comentario crÃ­tico.',
      'Riesgos pragmÃ¡ticos y culturales: la ironÃ­a impasible (deadpan) y la autoparodia (self-deprecation) son recursos muy valorados en contextos britÃ¡nicos y acadÃ©micos, pero pueden resultar opacos o desconcertantes en entornos internacionales, escritos sin tono vocal o con interlocutores que esperan franqueza literal. El hablante C2 sabe leer la sala antes de ironizar.'
    ],
    forms: [
      {
        label: 'Bathos and mock-formal syntax',
        lines: [
          'Never in the history of the department has a tea rota provoked such constitutional crisis.',
          'The summit ended, as summits often do, with lofty promises and lukewarm coffee.',
          'It is widely acknowledged that the printer possesses a will of its own.',
          'Little did we suspect that the missing file was propping up the table.'
        ]
      },
      {
        label: 'Parentheticals, echo questions and understatement',
        lines: [
          'The restructuring â€” if one may use so clinical a word for chaos â€” took six months.',
          'He is not what you would call overly burdened by self-doubt.',
          'â€œA slight delay?â€ â€” â€œOnly three years, give or take.â€',
          'The reception was, shall we say, less than rapturous.'
        ]
      },
      {
        label: 'Idiomatic variation and wordplay',
        lines: [
          'We will cross that bridge when we come to it â€” or burn it on arrival.',
          'It turned out to be a storm in a rather pricey teacup.',
          'She has a gift for stating the obvious with the air of an explorer.',
          'He Damned the proposal with the faintest of praise.'
        ]
      },
      {
        label: 'Useful expressions and collocations',
        lines: [
          'tongue-in-cheek; deadpan delivery; dry wit',
          'self-deprecating humour; wry observation; sardonic aside',
          'take something with a pinch of salt; miss the joke',
          'fall flat; strike a false note; lose something in translation',
          'mock-serious; send up; poke fun at',
          'play it straight; keep a straight face',
          'read the room; know your audience',
          'a backhanded compliment; a thinly veiled dig'
        ]
      }
    ]
  },
  vocabulary: [
    v('deadpan', 'impasible, serio al bromear', '/ËˆdedpÃ¦n/', 'DEAD-pan'),
    v('bathos', 'batos, caÃ­da brusca de lo solemne a lo trivial', '/ËˆbeÉªÎ¸É’s/', 'BA-thos'),
    v('tongue-in-cheek', 'en broma pero con apariencia seria', '/ËŒtÊŒÅ‹ Éªn ËˆtÊƒiËk/', 'TONGUE-in-cheek'),
    v('wry', 'irÃ³nico, mordaz y contenido', '/raÉª/', 'WRY'),
    v('sardonic', 'sardÃ³nico, burlÃ³n y escÃ©ptico', '/sÉ‘ËËˆdÉ’nÉªk/', 'sar-DON-ic'),
    v('satire', 'sÃ¡tira', '/ËˆsÃ¦taÉªÉ™/', 'SAT-ire'),
    v('lampoon', 'ridiculizar con sÃ¡tira', '/lÃ¦mËˆpuËn/', 'lam-POON'),
    v('parody', 'parodia', '/ËˆpÃ¦rÉ™di/', 'PAR-o-dy'),
    v('self-deprecating', 'autocrÃ­tico con humor, modesto', '/ËŒself ËˆdeprÉ™keÉªtÉªÅ‹/', 'self-DEP-re-cat-ing'),
    v('facetious', 'jocoso fuera de lugar, burlÃ³n', '/fÉ™ËˆsiËÊƒÉ™s/', 'fa-CE-tious'),
    v('droll', 'gracioso de forma seca o peculiar', '/drÉ™ÊŠl/', 'DROLL'),
    v('quip', 'ocurrencia breve y aguda', '/kwÉªp/', 'QUIP'),
    v('repartee', 'rÃ©plica rÃ¡pida e ingeniosa', '/ËŒrepÉ‘ËËˆtiË/', 'rep-ar-TEE'),
    v('backhanded compliment', 'cumplido envenenado', '/ËŒbÃ¦khÃ¦ndÉªd ËˆkÉ’mplÉªmÉ™nt/', 'back-hand-ed COM-pli-ment'),
    v('double entendre', 'doble sentido', '/ËŒduËbl É’nËˆtÉ’ndrÉ™/', 'DOU-ble on-TON-dre'),
    v('pun', 'juego de palabras', '/pÊŒn/', 'PUN'),
    v('juxtaposition', 'yuxtaposiciÃ³n', '/ËŒdÊ’ÊŒkstÉ™pÉ™ËˆzÉªÊƒn/', 'jux-ta-po-SI-tion'),
    v('send up', 'parodiar, burlarse de', '/send ËˆÊŒp/', 'send UP'),
    v('fall flat', 'no hacer gracia, fracasar un chiste', '/fÉ”Ël ËˆflÃ¦t/', 'fall FLAT'),
    v('keep a straight face', 'aguantar la risa', '/kiËp É™ streÉªt ËˆfeÉªs/', 'keep a STRAIGHT face'),
    v('mock-heroic', 'falso heroico, burlesco', '/ËŒmÉ’k hÉªËˆrÉ™ÊŠÉªk/', 'mock-he-RO-ic'),
    v('aside', 'comentario aparte o inciso', '/É™ËˆsaÉªd/', 'a-SIDE'),
    v('barbed', 'punzante, con pulla', '/bÉ‘Ëbd/', 'BARBED'),
    v('wit', 'ingenio', '/wÉªt/', 'WIT')
  ],
  examples: [
    {
      en: 'Never in the annals of local government has a missing stapler prompted so many emergency memos.',
      es: 'Nunca en los anales de la administraciÃ³n local una grapadora perdida habÃ­a suscitado tantos memorandos de urgencia.'
    },
    {
      en: 'â€œItâ€™s a bold choice,â€ she murmured, in the tone usually reserved for disastrous haircuts.',
      es: 'â€œEs una elecciÃ³n valienteâ€, murmurÃ³ ella, con el tono reservado habitualmente para los cortes de pelo desastrosos.'
    },
    {
      en: 'His speech was full of tongue-in-cheek praise for a committee that had taken three years to choose a font.',
      es: 'Su discurso estuvo lleno de elogios irÃ³nicos hacia un comitÃ© que habÃ­a tardado tres aÃ±os en elegir una tipografÃ­a.'
    },
    {
      en: 'To call the hotel â€œrusticâ€ is to stretch a euphemism to breaking point: the roof leaked in four places.',
      es: 'Llamar â€œrÃºsticoâ€ al hotel es estirar un eufemismo hasta romperlo: el techo goteaba por cuatro sitios.'
    },
    {
      en: 'Self-deprecating humour can disarm a room, provided the speaker does not appear genuinely unsure.',
      es: 'El humor autocrÃ­tico puede desarmar a una sala, siempre que quien habla no parezca realmente inseguro.'
    },
    {
      en: 'The joke fell flat in the translated transcript, where the pun on â€œinterestâ€ disappeared altogether.',
      es: 'El chiste perdiÃ³ toda su gracia en la transcripciÃ³n traducida, donde el juego de palabras con â€œinterestâ€ desapareciÃ³ por completo.'
    },
    {
      en: 'She has a dry wit that catches listeners off guard precisely because she delivers every line with a straight face.',
      es: 'Tiene un ingenio seco que pilla desprevenidos a los oyentes precisamente porque suelta cada frase sin inmutarse.'
    },
    {
      en: 'What began as a solemn tribute to innovation ended, rather bathos-like, with a plea to return the office mugs.',
      es: 'Lo que empezÃ³ como un solemne homenaje a la innovaciÃ³n terminÃ³, con cierto batos, en una sÃºplica para devolver las tazas de la oficina.'
    }
  ],
  dialogue: [
    {
      speaker: 'Owen',
      text: 'Did you see the review of our conference panel? It called our session â€œan ambitious triumph of stamina over brevityâ€.',
      es: 'Â¿Viste la reseÃ±a de nuestra mesa en el congreso? LlamÃ³ a nuestra sesiÃ³n â€œun ambicioso triunfo de la resistencia sobre la brevedadâ€.'
    },
    {
      speaker: 'Beatriz',
      text: 'Ouch. Thatâ€™s a textbook backhanded compliment. Essentially: we talked for far too long.',
      es: 'Ay. Eso es un cumplido envenenado de manual. En esencia: hablamos demasiado tiempo.'
    },
    {
      speaker: 'Owen',
      text: 'And notice the register â€” â€œambitious triumphâ€ sounds grand, which makes the punchline, â€œover brevityâ€, sting twice as hard.',
      es: 'Y fÃ­jate en el registro: â€œambicioso triunfoâ€ suena grandilocuente, lo que hace que el remate, â€œsobre la brevedadâ€, duela el doble.'
    },
    {
      speaker: 'Beatriz',
      text: 'At least itâ€™s witty. Worse was the chairâ€™s comment at the end: â€œWell, that certainly covered a lot of ground.â€',
      es: 'Al menos tiene ingenio. Peor fue el comentario de la moderadora al final: â€œBueno, eso sin duda cubriÃ³ mucho terrenoâ€.'
    },
    {
      speaker: 'Owen',
      text: 'Deadpan understatement. She couldnâ€™t very well say weâ€™d wandered off topic, so she praised the acreage.',
      es: 'SubestimaciÃ³n impasible. No podÃ­a decir sin mÃ¡s que nos habÃ­amos salido del tema, asÃ­ que elogiÃ³ la extensiÃ³n.'
    },
    {
      speaker: 'Beatriz',
      text: 'I tried to lighten the mood halfway through with a joke about our budget, though I think it fell completely flat.',
      es: 'IntentÃ© aliviar el ambiente a mitad de la charla con una broma sobre nuestro presupuesto, aunque creo que no hizo ninguna gracia.'
    },
    {
      speaker: 'Owen',
      text: 'To be fair, half the room was listening through simultaneous translation. Irony rarely survives a three-second delay.',
      es: 'Para ser justos, la mitad de la sala escuchaba por traducciÃ³n simultÃ¡nea. La ironÃ­a rara vez sobrevive a un retraso de tres segundos.'
    },
    {
      speaker: 'Beatriz',
      text: 'Good point. And when I said â€œIâ€™m no expert, of courseâ€, the visiting delegation looked genuinely alarmed.',
      es: 'Buen punto. Y cuando dije â€œno soy ninguna experta, por supuestoâ€, la delegaciÃ³n visitante pareciÃ³ alarmarse de verdad.'
    },
    {
      speaker: 'Owen',
      text: 'Classic cultural mismatch. Self-deprecation reads as modesty in London and as a confession of incompetence almost everywhere else.',
      es: 'ClÃ¡sico desajuste cultural. La autocrÃ­tica humorÃ­stica se lee como modestia en Londres y como confesiÃ³n de incompetencia en casi cualquier otro sitio.'
    },
    {
      speaker: 'Beatriz',
      text: 'Lesson learned: save the wry asides for the coffee break, and play it straight from the podium.',
      es: 'LecciÃ³n aprendida: guarda los apartes irÃ³nicos para la pausa del cafÃ© y mantÃ©n un tono directo desde el estrado.'
    },
    {
      speaker: 'Owen',
      text: 'Sound advice. Though I may still frame that review for my office wall.',
      es: 'Buen consejo. Aunque quizÃ¡ enmarque esa reseÃ±a para la pared de mi despacho.' },
    {
      speaker: 'Beatriz',
      text: 'Right next to the certificate for â€œmost thorough slidesâ€.',
      es: 'Justo al lado del diploma a las â€œdiapositivas mÃ¡s exhaustivasâ€.'
    }
  ],
  listening: {
    script: [
      {
        speaker: 'Host',
        text: 'As a comedy writer who also works in international business, when does humour help and when does it misfire?'
      },
      {
        speaker: 'Writer',
        text: 'It helps when it punctures pomposity â€” especially your own. A brief self-deprecating remark at the start of a talk signals confidence, not weakness.'
      },
      {
        speaker: 'Host',
        text: 'And when does it misfire?'
      },
      {
        speaker: 'Writer',
        text: 'Usually when people rely on deadpan irony across cultures or over email. Without vocal pitch or facial expression, a tongue-in-cheek remark looks indistinguishable from a literal statement.'
      },
      {
        speaker: 'Host',
        text: 'Can you give an example?'
      },
      {
        speaker: 'Writer',
        text: 'A manager wrote, â€œBrilliant, another mandatory workshop on time management.â€ Half the team thought he was thrilled; the other half felt mocked. Puns and wordplay also struggle in translation, whereas observational humour about shared frustrations travels surprisingly well.'
      },
      {
        speaker: 'Host',
        text: 'So the rule is to know your room.'
      },
      {
        speaker: 'Writer',
        text: 'Know your room, and never punch down. If the joke makes someone in the room smaller, it isnâ€™t wit; itâ€™s just poor manners.'
      }
    ],
    questions: [
      mc(
        'c2u08-l1',
        'When does the writer say self-deprecating humour works well?',
        [
          'Briefly at the start of a talk to signal confidence',
          'Throughout a formal legal contract',
          'When criticising junior staff'
        ],
        0,
        'A brief self-deprecating remark at the start signals confidence.'
      ),
      mc(
        'c2u08-l2',
        'Why does deadpan irony often misfire in emails?',
        [
          'Written text lacks vocal pitch and facial expression',
          'Emails are always too long',
          'People do not read emails carefully'
        ],
        0,
        'Without pitch or expression, tongue-in-cheek lines look literal.'
      ),
      mc(
        'c2u08-l3',
        'Which kind of humour does the writer say travels best internationally?',
        [
          'Observational humour about shared frustrations',
          'Complex puns on English idioms',
          'Sarcastic emails to teams'
        ],
        0,
        'Shared frustrations travel well, whereas puns struggle in translation.'
      ),
      tf(
        'c2u08-l4',
        'The writer advises using irony freely even if someone in the room feels belittled.',
        false,
        'She warns: never punch down; making someone smaller is poor manners.'
      ),
      mc(
        'c2u08-l5',
        'What happened with the managerâ€™s email about the workshop?',
        [
          'Some readers took it literally while others felt mocked',
          'Everyone laughed together',
          'The workshop was cancelled immediately'
        ],
        0,
        'Half thought he was thrilled; half felt mocked.'
      )
    ]
  },
  reading: {
    title: 'The art of the straight face',
    text: 'Satire rarely announces itself with a wink. From Jonathan Swift to modern columns, its sharpest effects have come from adopting a tone of impeccable seriousness while advancing an absurd or unsettling premise. Linguists note that this mock-formal strategy relies on a deliberate mismatch between register and content: the syntax of a committee report is applied to a trivial office dispute, or the calm vocabulary of cost-benefit analysis is used to expose moral indifference. When it succeeds, the reader supplies the outrage or the laughter that the narrator withholds. Yet deadpan writing walks a narrow ridge. Because it omits explicit signposts, it depends entirely on shared assumptions between writer and audience. A reader who misses the register clash may take the parody at face value, while one who catches only the mockery may dismiss the piece as flippant. In an increasingly global readership, where irony cannot rely on uniform cultural cues, the straight face remains one of English proseâ€™s finest tools â€” and one of its riskiest.',
    questions: [
      rc(
        'c2u08-r1',
        'How does mock-formal satire achieve its sharpest effects, according to the text?',
        [
          'By pairing solemn, formal language with absurd or trivial content',
          'By using slang and exclamation marks',
          'By explaining every joke explicitly'
        ],
        0,
        'It relies on a mismatch between serious register and absurd or trivial content.'
      ),
      rc(
        'c2u08-r2',
        'What is the readerâ€™s role when deadpan satire succeeds?',
        [
          'To supply the outrage or laughter that the narrator withholds',
          'To ignore the tone',
          'To rewrite the syntax'
        ],
        0,
        'The narrator withholds emotion so the reader supplies it.'
      ),
      rc(
        'c2u08-r3',
        'Why does deadpan writing â€œwalk a narrow ridgeâ€?',
        [
          'Without explicit signposts, readers may take it literally or dismiss it as flippant',
          'It is difficult to print',
          'It is always illegal'
        ],
        0,
        'It depends on shared assumptions; without them, readers miss the clash or find it flippant.'
      ),
      rc(
        'c2u08-r4',
        'Why is the straight face riskier for a global readership?',
        [
          'Readers do not all share the same cultural cues for irony',
          'Global readers dislike prose',
          'English has no formal register'
        ],
        0,
        'Irony cannot rely on uniform cultural cues across a global readership.'
      ),
      rc(
        'c2u08-r5',
        'What is the authorâ€™s overall assessment of deadpan prose?',
        [
          'It is a powerful literary tool that requires careful judgement of the audience',
          'It should be abandoned completely',
          'It only works in spoken comedy'
        ],
        0,
        'It is described as one of English proseâ€™s finest and riskiest tools.'
      )
    ]
  },
  speaking: {
    prompt:
      'Taller de humor y registro (8 a 10 minutos): en parejas, elijan una situaciÃ³n cotidiana menor (una impresora atascada, un retraso de cinco minutos en el metro, una reuniÃ³n interminable) y descrÃ­banla primero en estilo falsamente solemne (mock-formal / bathos) y despuÃ©s analicen quÃ© pasarÃ­a si ese comentario se hiciera ante un pÃºblico internacional.',
    tasks: [
      'Deliver a 45-second mock-formal description of a trivial mishap, ending with bathos.',
      'Include one parenthetical aside or echo question for wry effect.',
      'Vary one well-known idiom deliberately without breaking its rhythm.',
      'Discuss with your partner where the joke could misfire in writing or across cultures.'
    ]
  },
  writing: {
    prompt:
      'Write a short satirical or tongue-in-cheek column (280 to 330 words) on a minor modern annoyance (for example, endless video calls, automated customer-service menus or office jargon), using mock-formal syntax, bathos and at least one idiomatic variation. Add a brief note (60 to 80 words) identifying one audience for whom the piece might misfire and why.',
    rubric: [
      'Sustains a controlled mock-formal register so the bathos lands cleanly.',
      'Uses parenthetical asides, understatement or inversion for dry wit.',
      'Modifies at least one idiom purposefully without sounding accidental.',
      'The note shows realistic pragmatic awareness of cultural or textual risk.'
    ],
    model:
      'Few achievements of modern civilisation rival the automated telephone menu for sheer philosophical patience. Never in the history of human inquiry have so many citizens been informed, at twenty-second intervals, that their call is important to an institution that has clearly misplaced its staff. Having pressed four for billing and seven to confirm that one is not a robot, the caller is rewarded with a soothing synthesiser rendition of Vivaldi, interrupted periodically by an earnest voice urging one to visit the website one has just spent forty minutes failing to log into. It is, to say the least, a triumph of optimism over geometry: a circle disguised as a queue. Naturally, the system invites us to complete a brief survey afterwards â€” if one may call a fourteen-question inquest brief â€” to rate our â€œexperienceâ€. One is tempted to cross that bridge when one burns it, yet the music plays on, serenely indifferent. Note: Written in deadpan prose, this piece relies on readers recognising mock-heroic exaggeration; a literal reader unfamiliar with British-style understatement might miss the irony or find the opening line confusing.'
  },
  pronunciation: {
    items: [
      { word: 'bathos', ipa: '/ËˆbeÉªÎ¸É’s/', stress: 'BA-thos' },
      { word: 'sardonic', ipa: '/sÉ‘ËËˆdÉ’nÉªk/', stress: 'sar-DON-ic' },
      { word: 'facetious', ipa: '/fÉ™ËˆsiËÊƒÉ™s/', stress: 'fa-CE-tious' },
      { word: 'repartee', ipa: '/ËŒrepÉ‘ËËˆtiË/', stress: 'rep-ar-TEE' },
      { word: 'self-deprecating', ipa: '/ËŒself ËˆdeprÉ™keÉªtÉªÅ‹/', stress: 'self-DEP-re-cat-ing' }
    ],
    tips: [
      'En el humor impasible (deadpan), evita exagerar la entonaciÃ³n: mantÃ©n un tono neutro y haz una pausa mÃ­nima antes del remate.',
      'Las preguntas eco irÃ³nicas (â€œA slight delay?â€) suben bruscamente al final para marcar incredulidad.',
      'En repartee el acento principal cae en la Ãºltima sÃ­laba: rep-ar-TEE.'
    ]
  },
  exercises: [
    mc(
      'c2u08-e1',
      'Which sentence best illustrates bathos?',
      [
        'History will judge this committee harshly, or at least until someone finds the biscuits.',
        'History will judge this committee for decades to come.',
        'We need to buy more biscuits for the meeting.'
      ],
      0,
      'It drops abruptly from solemn grandeur to a trivial detail.',
      'Choose the best option.'
    ),
    fb(
      'c2u08-e2',
      'His praise for the delayed report was entirely tongue-in-___.',
      'cheek',
      'tongue-in-cheek = ironically insincere.',
      undefined,
      'Write the missing word.'
    ),
    fb(
      'c2u08-e3',
      'She delivered the absurd line with a completely ___ face.',
      'straight',
      'keep / deliver with a straight face = without smiling.',
      undefined,
      'Write the missing word.'
    ),
    wo(
      'c2u08-e4',
      ['not', 'He', 'is', 'overly', 'burdened', 'by', 'self-doubt'],
      ['He', 'is', 'not', 'overly', 'burdened', 'by', 'self-doubt'],
      'Ironical understatement.'
    ),
    tf(
      'c2u08-e5',
      'A â€œbackhanded complimentâ€ is always meant as pure, unambiguous praise.',
      false,
      'It disguises criticism inside apparent praise.'
    ),
    mt(
      'c2u08-e6',
      'Match each term with its definition.',
      [
        ['deadpan', 'humour delivered with an expressionless, serious manner'],
        ['bathos', 'an abrupt descent from the lofty to the trivial'],
        ['quip', 'a short, witty remark'],
        ['fall flat', 'fail to amuse or impress an audience']
      ],
      'Each term describes a distinct comic or rhetorical effect.'
    ),
    tr(
      'c2u08-e7',
      'Rewrite with mock-formal inversion starting with â€œNeverâ€.',
      'A missing stapler has never caused so many emergency emails.',
      'Never has a missing stapler caused so many emergency emails',
      'Negative inversion heightens mock-seriousness.',
      ['Never before has a missing stapler caused so many emergency emails']
    ),
    tr(
      'c2u08-e8',
      'Add a dry parenthetical aside with â€œshall we sayâ€.',
      'The reception was cool.',
      'The reception was, shall we say, cool',
      'Parenthetical hedging sharpens understatement.',
      ['The reception was, shall we say, less than warm']
    ),
    rc(
      'c2u08-e9',
      'What is the reviewerâ€™s true judgement of the play?',
      [
        'It was far too long and boring',
        'It was short and thrilling',
        'The seats were uncomfortable only'
      ],
      0,
      'â€œTriumph of stamina over brevityâ€ is a backhanded compliment meaning overly long.',
      'The review praised the three-hour play as â€œa remarkable triumph of stamina over brevity, offering the audience ample time to admire the ceiling.â€'
    ),
    sa(
      'c2u08-e10',
      'Write a 4-sentence mock-formal paragraph about a minor everyday annoyance (for example, an umbrella turning inside out or a slow lift), ending with bathos.',
      'Model: â€œRarely has urban engineering posed so profound a test of human character as the third-floor lift. Designed, it would seem, for contemplation rather than transport, it ascends at a pace that encourages reflection on oneâ€™s life choices. By the time the doors open, one has aged perceptibly and forgotten why one wanted a coffee.â€ Check: formal syntax, trivial subject, dry ending.'
    )
  ],
  assessment: [
    mc(
      'c2u08-t1',
      'What creates the humour in mock-formal satire?',
      [
        'A deliberate clash between solemn register and trivial subject matter',
        'Frequent exclamation marks and slang',
        'Explaining why the joke is funny afterwards'
      ],
      0,
      'The mismatch between register and content produces the wit.'
    ),
    mc(
      'c2u08-t2',
      'Which remark is a backhanded compliment?',
      [
        'Youâ€™re remarkably brave to wear that to a board meeting.',
        'Your presentation was clear and well structured.',
        'Thank you for sending the minutes promptly.'
      ],
      0,
      'Calling an outfit â€œbraveâ€ implies it was inappropriate.'
    ),
    fb(
      'c2u08-t3',
      'Her joke fell ___ because nobody in the room knew the cultural reference.',
      'flat',
      'fall flat = fail to get a laugh.',
      undefined,
      'Write the missing word.'
    ),
    fb(
      'c2u08-t4',
      'The comedian is famous for his ___ delivery: he never smiles once.',
      'deadpan',
      'deadpan delivery = completely serious manner.',
      undefined,
      'Write the missing word.'
    ),
    tf(
      'c2u08-t5',
      'Self-deprecating humour is always interpreted identically across all cultures.',
      false,
      'In some settings it can be read literally as low confidence or incompetence.'
    ),
    tf(
      'c2u08-t6',
      'Deliberate idiomatic variation works best when the listener recognises the original fixed expression.',
      true,
      'The wit depends on contrasting the twist with the canonical form.'
    ),
    wo(
      'c2u08-t7',
      ['a', 'It', 'storm', 'was', 'in', 'a', 'pricey', 'teacup'],
      ['It', 'was', 'a', 'storm', 'in', 'a', 'pricey', 'teacup'],
      'An idiomatic variation.'
    ),
    mc(
      'c2u08-t8',
      'Why is deadpan irony risky in international emails?',
      [
        'Without tone of voice, readers may take an ironic line literally',
        'Emails cannot contain adjectives',
        'It makes messages load more slowly'
      ],
      0,
      'Written text removes prosody and facial cues.'
    ),
    tr(
      'c2u08-t9',
      'Rewrite as dry understatement using â€œnot exactlyâ€.',
      'The software update was a disaster.',
      'The software update was not exactly a triumph',
      'Understatement reduces the force on the surface to sharpen the irony.',
      ['The software update was not exactly a success']
    ),
    mc(
      'c2u08-t10',
      'Which adjective describes humour that is dry, slightly mocking and sceptical?',
      ['wry', 'literal', 'melodramatic'],
      0,
      'Wry = dry, ironic and slightly mocking.'
    )
  ],
  review: [
    'Bathos and mock-formal syntax achieve wit through the contrast between elevated grammar and trivial content.',
    'Deadpan delivery, parenthetical asides and echo questions rely on restraint rather than exaggeration.',
    'Idiomatic variation works only when the canonical idiom is controlled and recognisable.',
    'Backhanded compliments and understated remarks require reading tone and context, not just literal words.',
    'Calibrate humour to the medium and audience: irony without vocal cues travels poorly across cultures and emails.'
  ]
};

export default unit;
