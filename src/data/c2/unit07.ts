import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';

const unit: Unit = {
  id: 'c2-u07',
  level: 'C2',
  unitNumber: 7,
  title: 'Diplomacy, Ambiguity and Subtext',
  subtitle: 'Navigate high-stakes disagreement, strategic ambiguity and coded meaning',
  communicativeGoal:
    'Gestionar desacuerdos delicados y negociaciones de alto nivel mediante la ambigÃ¼edad estratÃ©gica, la atenuaciÃ³n pragmÃ¡tica y la lectura precisa del subtexto institucional y diplomÃ¡tico.',
  objectives: [
    'Modular el grado de compromiso con estructuras de distanciamiento, cautela y modalidad diplomÃ¡tica.',
    'Emplear la ambigÃ¼edad estratÃ©gica y la cortesÃ­a negativa para preservar la imagen propia y ajena (face-saving).',
    'Decodificar fÃ³rmulas codificadas de desacuerdo, rechazo o advertencia en comunicados y reuniones formales.',
    'Alternar con precisiÃ³n entre el registro pÃºblico conciliador y la franqueza privada sin perder credibilidad.'
  ],
  grammar: {
    title: 'Strategic ambiguity, distancing and pragmatic hedging',
    explanation: [
      'En la comunicaciÃ³n diplomÃ¡tica e institucional de nivel C2, lo que se deja sin decir suele pesar tanto como lo que se afirma. El distanciamiento gramatical permite seÃ±alar reservas sin acusar directamente: el pasado de cortesÃ­a (I was hoping we might revisitâ€¦; I wondered if you had consideredâ€¦), la extraposiciÃ³n impersonal (It would appear thatâ€¦; It remains to be seen whetherâ€¦) y los verbos de percepciÃ³n o informe (I gather thatâ€¦; We are led to believe thatâ€¦). Estas formas protegen la imagen del interlocutor (face-saving) y evitan encerrar a las partes en posiciones irreversibles.',
      'La ambigÃ¼edad estratÃ©gica consiste en formular una postura de modo que admita mÃ¡s de una lectura legÃ­tima mientras avanza la negociaciÃ³n. Se apoya en sustantivos abstractos de alcance amplio (appropriate measures, in due course, a mutually acceptable arrangement), condicionales suavizados (Should circumstances permitâ€¦; Were an accommodation to be reachedâ€¦) y clÃ¡usulas restrictivas (insofar as existing commitments allow; subject to further review). La clave en C2 es distinguir cuÃ¡ndo esta vaguedad es constructiva (mantiene abierta la mesa) y cuÃ¡ndo se vuelve evasiva.',
      'La cortesÃ­a negativa y la atenuaciÃ³n pragmÃ¡tica suavizan actos que amenazan la imagen del otro, como rechazar, corregir o pedir cuentas. Recursos habituales: la litotes (not entirely convinced, not without merit), las clÃ¡usulas concesivas previas al desacuerdo (While I appreciate the spirit of the proposal, I have reservations aboutâ€¦), y los marcadores de encuadre (with respect, strictly speaking, for the sake of clarity). En inglÃ©s britÃ¡nico e internacional, fÃ³rmulas aparentemente neutras como "That is certainly one way of looking at it" o "We have noted your concern" funcionan a menudo como desacuerdos firmes o negativas educadas.',
      'La presuposiciÃ³n y la implicatura permiten decir sin afirmar. Estructuras como "When we finally address the shortfallâ€¦" dan por hecho que existe un dÃ©ficit, mientras que "I would not wish to suggest that the delay was deliberate" introduce precisamente esa sospecha por vÃ­a de negaciÃ³n. Reconocer estos mecanismos es indispensable para responder al subtexto y no solo al sentido literal.',
      'Registro y calibraciÃ³n: en un comunicado oficial o en una mesa multilateral predominan las nominalizaciones, las pasivas impersonales y la cautela; en una conversaciÃ³n a puerta cerrada (off the record) se espera mayor precisiÃ³n directa. El dominio de C2 reside en elegir el grado exacto de explicitud que exige cada fase del diÃ¡logo.'
    ],
    forms: [
      {
        label: 'Distancing and diplomatic modals',
        lines: [
          'I was hoping we might revisit the timetable before anything is finalised.',
          'It remains to be seen whether the assurances will prove sufficient.',
          'We are given to understand that a revised draft is forthcoming.',
          'Should circumstances permit, we would be inclined to reconsider.'
        ]
      },
      {
        label: 'Coded disagreement and face-saving',
        lines: [
          'That is certainly one interpretation of the figures.',
          'While the proposal is not without merit, it raises practical difficulties.',
          'I would not wish to pre-empt the committeeâ€™s findings.',
          'With the greatest respect, I think we may be talking at cross purposes.'
        ]
      },
      {
        label: 'Strategic ambiguity and scope',
        lines: [
          'Appropriate steps will be taken in due course.',
          'We are committed to supporting the initiative, insofar as our mandate allows.',
          'Any arrangement would be subject to satisfactory verification.',
          'The parties agreed to explore a mutually acceptable framework.'
        ]
      },
      {
        label: 'Useful expressions and collocations',
        lines: [
          'save face; leave room for manoeuvre; keep channels open',
          'read between the lines; at cross purposes; a veiled warning',
          'off the record; on the record; constructive ambiguity',
          'a diplomatic impasse; broker a compromise; paper over the cracks',
          'couch something in careful terms; soften the blow',
          'toe the line; tread on thin ice; strike a conciliatory note',
          'take something as read; reserve judgement',
          'in due course; without prejudice to'
        ]
      }
    ]
  },
  vocabulary: [
    v('subtext', 'subtexto, sentido implÃ­cito', '/ËˆsÊŒbtekst/', 'SUB-text'),
    v('face-saving', 'que preserva la imagen o dignidad', '/ËˆfeÉªs ËŒseÉªvÉªÅ‹/', 'FACE-sav-ing'),
    v('ambiguity', 'ambigÃ¼edad', '/ËŒÃ¦mbÉªËˆÉ¡juËÉ™ti/', 'am-bi-GU-i-ty'),
    v('communiquÃ©', 'comunicado oficial', '/kÉ™ËˆmjuËnÉªkeÉª/', 'com-MU-ni-quÃ©'),
    v('impasse', 'punto muerto, callejÃ³n sin salida', '/ËˆÃ¦mpÉ‘Ës/', 'IM-passe'),
    v('rapprochement', 'acercamiento diplomÃ¡tico', '/rÃ¦ËˆprÉ’ÊƒmÉ’Ìƒ/', 'rap-PROCHE-ment'),
    v('prevaricate', 'evadir una respuesta directa, dar largas', '/prÉªËˆvÃ¦rÉªkeÉªt/', 'pre-VAR-i-cate'),
    v('equivocal', 'equÃ­voco, deliberadamente ambiguo', '/ÉªËˆkwÉªvÉ™kl/', 'e-QUIV-o-cal'),
    v('non-committal', 'evasivo, que no se compromete', '/ËŒnÉ’nkÉ™ËˆmÉªtl/', 'non-com-MIT-tal'),
    v('tacit', 'tÃ¡cito, sobreentendido', '/ËˆtÃ¦sÉªt/', 'TAC-it'),
    v('implicit', 'implÃ­cito', '/ÉªmËˆplÉªsÉªt/', 'im-PLIC-it'),
    v('conciliatory', 'conciliador', '/kÉ™nËˆsÉªliÉ™tri/', 'con-CIL-i-a-to-ry'),
    v('veiled', 'velado, encubierto', '/veÉªld/', 'VEILED'),
    v('circumspect', 'circunspecto, prudente', '/ËˆsÉœËkÉ™mspekt/', 'CIR-cum-spect'),
    v('disingenuous', 'poco sincero, que finge ingenuidad', '/ËŒdÉªsÉªnËˆdÊ’enjuÉ™s/', 'dis-in-GEN-u-ous'),
    v('ploy', 'tÃ¡ctica, estratagema', '/plÉ”Éª/', 'PLOY'),
    v('concession', 'concesiÃ³n', '/kÉ™nËˆseÊƒn/', 'con-CES-sion'),
    v('impugn', 'cuestionar, poner en tela de juicio', '/ÉªmËˆpjuËn/', 'im-PUGN'),
    v('oblique', 'oblicuo, indirecto', '/É™ËˆbliËk/', 'ob-LIQUE'),
    v('remit', 'Ã¡mbito de competencia, mandato', '/ËˆriËmÉªt/', 'RE-mit'),
    v('in due course', 'a su debido tiempo', '/Éªn djuË ËˆkÉ”Ës/', 'in due COURSE'),
    v('at cross purposes', 'con malentendidos mutuos', '/Ã¦t krÉ’s ËˆpÉœËpÉ™sÉªz/', 'at cross PUR-pos-es'),
    v('paper over the cracks', 'disimular las discrepancias', '/ËˆpeÉªpÉ™r ËˆÉ™ÊŠvÉ™ Ã°É™ krÃ¦ks/', 'PA-per over the CRACKS'),
    v('without prejudice to', 'sin perjuicio de', '/wÉªËˆÃ°aÊŠt ËˆpredÊ’É™dÉªs tuË/', 'with-out PREJ-u-dice to')
  ],
  examples: [
    {
      en: 'While the draft is not without merit, we are not convinced that it addresses our core concerns.',
      es: 'Aunque el borrador no carece de mÃ©rito, no estamos convencidos de que aborde nuestras preocupaciones centrales.'
    },
    {
      en: 'The spokespersonâ€™s reply was studiedly non-committal, leaving room for manoeuvre ahead of Fridayâ€™s talks.',
      es: 'La respuesta del portavoz fue deliberadamente evasiva, dejando margen de maniobra antes de las conversaciones del viernes.'
    },
    {
      en: 'To say that the meeting was â€œrobustâ€ is a polite way of admitting that the parties barely remained in the room.',
      es: 'Decir que la reuniÃ³n fue â€œintensaâ€ es una manera educada de admitir que las partes apenas permanecieron en la sala.'
    },
    {
      en: 'I would not wish to impugn anyoneâ€™s motives, yet the timing of the leak is, to say the least, curious.',
      es: 'No quisiera cuestionar los motivos de nadie, pero el momento de la filtraciÃ³n es, por decirlo suavemente, curioso.'
    },
    {
      en: 'We are prepared to endorse the framework, without prejudice to our right to revisit the funding formula.',
      es: 'Estamos dispuestos a respaldar el marco, sin perjuicio de nuestro derecho a revisar la fÃ³rmula de financiaciÃ³n.'
    },
    {
      en: 'The communiquÃ© papered over the cracks, announcing consensus while deferring every contentious detail.',
      es: 'El comunicado disimulÃ³ las grietas al anunciar consenso mientras aplazaba cada detalle polÃ©mico.'
    },
    {
      en: 'It was a veiled warning, couched in the warmest diplomatic language.',
      es: 'Fue una advertencia velada, envuelta en el lenguaje diplomÃ¡tico mÃ¡s cordial.'
    },
    {
      en: 'I fear we may be talking at cross purposes: my remit covers compliance, not commercial strategy.',
      es: 'Me temo que estamos hablando sin entendernos: mi competencia abarca el cumplimiento normativo, no la estrategia comercial.'
    }
  ],
  dialogue: [
    {
      speaker: 'Helena',
      text: 'Have you read the ministryâ€™s response to our proposal? On the surface, itâ€™s remarkably warm.',
      es: 'Â¿Has leÃ­do la respuesta del ministerio a nuestra propuesta? En apariencia, es notablemente cordial.'
    },
    {
      speaker: 'Julian',
      text: 'On the surface, yes. Look at the third paragraph, though: â€œWe have noted your suggestions with interest and will consider them in due course.â€',
      es: 'En apariencia, sÃ­. FÃ­jate en el tercer pÃ¡rrafo, sin embargo: â€œHemos tomado nota de sus sugerencias con interÃ©s y las consideraremos a su debido tiempoâ€.'
    },
    {
      speaker: 'Helena',
      text: 'Which, in civil-service English, means itâ€™s going into a drawer.',
      es: 'Lo cual, en inglÃ©s de la administraciÃ³n pÃºblica, significa que va directo a un cajÃ³n.'
    },
    {
      speaker: 'Julian',
      text: 'Not necessarily into a drawer, but certainly not onto next weekâ€™s agenda. Notice also what isnâ€™t there: thereâ€™s no mention of a timetable, and no named official.',
      es: 'No necesariamente a un cajÃ³n, pero desde luego no al orden del dÃ­a de la prÃ³xima semana. FÃ­jate tambiÃ©n en lo que falta: no se menciona ningÃºn calendario ni a ningÃºn funcionario concreto.'
    },
    {
      speaker: 'Helena',
      text: 'Still, they didnâ€™t reject it outright. They left the door ajar.',
      es: 'Aun asÃ­, no lo rechazaron de plano. Dejaron la puerta entreabierta.'
    },
    {
      speaker: 'Julian',
      text: 'They did, and thatâ€™s deliberate. Rejecting it would force a public disagreement; leaving it vague lets both sides save face while we sound out the other departments.',
      es: 'SÃ­, y es deliberado. Rechazarlo forzarÃ­a un desacuerdo pÃºblico; dejarlo vago permite que ambas partes salven las apariencias mientras sondeamos a los demÃ¡s departamentos.'
    },
    {
      speaker: 'Helena',
      text: 'So how should we reply? If we push too hard, we risk sounding tone-deaf.',
      es: 'Entonces, Â¿cÃ³mo deberÃ­amos responder? Si presionamos demasiado, corremos el riesgo de parecer poco hÃ¡biles.'
    },
    {
      speaker: 'Julian',
      text: 'Match the register, but anchor it. Thank them for their constructive engagement, and say weâ€™d welcome a brief technical call â€œto clarify scope ahead of the autumn review.â€',
      es: 'Iguala el registro, pero Ã¡nclalo. Agradece su disposiciÃ³n constructiva y di que agradecerÃ­amos una breve llamada tÃ©cnica â€œpara aclarar el alcance antes de la revisiÃ³n de otoÃ±oâ€.'
    },
    {
      speaker: 'Helena',
      text: 'Clever. It sounds accommodating, yet it gently reintroduces a deadline.',
      es: 'Inteligente. Suena conciliador, pero reintroduce suavemente un plazo.'
    },
    {
      speaker: 'Julian',
      text: 'Exactly. Never force a concession in writing when a quiet phone call will do the work.',
      es: 'Exacto. Nunca fuerces una concesiÃ³n por escrito cuando una llamada discreta puede hacer el trabajo.' },
    {
      speaker: 'Helena',
      text: 'And if they prevaricate on the call?',
      es: 'Â¿Y si dan largas en la llamada?'
    },
    {
      speaker: 'Julian',
      text: 'Then weâ€™ll have our answer without anyone having had to say no.',
      es: 'Entonces tendremos nuestra respuesta sin que nadie haya tenido que decir que no.'
    }
  ],
  listening: {
    script: [
      {
        speaker: 'Interviewer',
        text: 'Youâ€™ve spent twenty years drafting international communiquÃ©s. People often mock them for being vague. Is that fair?'
      },
      {
        speaker: 'Diplomat',
        text: 'Only if you assume the purpose of a communiquÃ© is to settle every argument. Frequently, its real purpose is to allow two delegations that still disagree to leave the room without breaking off talks.'
      },
      {
        speaker: 'Interviewer',
        text: 'So the ambiguity is intentional.'
      },
      {
        speaker: 'Diplomat',
        text: 'Entirely. We call it constructive ambiguity. If a phrase can be read in two ways, each side can present the text to its domestic audience as consistent with its principles, while work continues quietly.'
      },
      {
        speaker: 'Interviewer',
        text: 'Isnâ€™t there a danger that it simply papers over the cracks?'
      },
      {
        speaker: 'Diplomat',
        text: 'There is, and when itâ€™s abused, those cracks widen later. Good diplomacy uses ambiguity to buy time for trust to build, not as a substitute for resolving the substance.'
      },
      {
        speaker: 'Interviewer',
        text: 'And how do seasoned delegates read a text like that?'
      },
      {
        speaker: 'Diplomat',
        text: 'They look at the verbs and the qualifiers. â€œWelcomesâ€ is warm; â€œtakes note ofâ€ is cool; â€œviews with concernâ€ is a warning. Every adjective has been weighed on a jewellerâ€™s scale.'
      }
    ],
    questions: [
      mc(
        'c2u07-l1',
        'According to the diplomat, what is often the real purpose of a communiquÃ©?',
        [
          'To let disagreeing parties conclude a meeting without ending talks',
          'To settle every legal detail permanently',
          'To confuse the press'
        ],
        0,
        'He explains it allows delegations that still disagree to leave without breaking off talks.'
      ),
      mc(
        'c2u07-l2',
        'Why is â€œconstructive ambiguityâ€ used?',
        [
          'To hide grammatical mistakes in translation',
          'So each side can interpret the wording consistently with its principles while talks continue',
          'To force one side to surrender publicly'
        ],
        1,
        'Each delegation can present the text at home while work continues.'
      ),
      mc(
        'c2u07-l3',
        'When does the diplomat say ambiguity becomes problematic?',
        [
          'When it is used instead of addressing the underlying substance',
          'Whenever it appears in English',
          'When journalists read it aloud'
        ],
        0,
        'Ambiguity should buy time for trust, not substitute for resolving substance.'
      ),
      tf(
        'c2u07-l4',
        'In diplomatic texts, â€œtakes note ofâ€ conveys warmer approval than â€œwelcomesâ€.',
        false,
        'â€œWelcomesâ€ is warm; â€œtakes note ofâ€ is cool.'
      ),
      mc(
        'c2u07-l5',
        'What does â€œweighed on a jewellerâ€™s scaleâ€ suggest about diplomatic drafting?',
        [
          'Every word is chosen with extreme precision',
          'Texts are written quickly under pressure',
          'Only financial terms matter'
        ],
        0,
        'It highlights the meticulous care behind each adjective and verb.'
      )
    ]
  },
  reading: {
    title: 'The grammar of saying no without saying no',
    text: 'In high-stakes negotiations, an explicit refusal is rarely the first move. Saying â€œnoâ€ directly closes an avenue, forces the other party to defend its pride and turns a difference of interest into a contest of wills. Experienced negotiators therefore rely on a repertoire of indirect refusals whose meaning is unmistakable to insiders yet deniable on the page. Phrases such as â€œThat falls slightly outside our current remitâ€ or â€œWe would need rather more clarity before committingâ€ signal rejection without closing the door. Linguists describe these strategies as forms of negative politeness: they acknowledge the interlocutorâ€™s autonomy and soften the threat to their standing. Yet indirectness carries its own risks. When one party mistakes a coded refusal for genuine hesitation, months can be lost pursuing an option that was never on the table. Conversely, an overly blunt response from someone unfamiliar with the convention can be misread as hostility rather than candour. The skill lies not in avoiding directness altogether, but in calibrating it: knowing when a veiled signal preserves the relationship and when clarity is the kinder, and more honest, course.',
    questions: [
      rc(
        'c2u07-r1',
        'Why do experienced negotiators often avoid an explicit â€œnoâ€ at first?',
        [
          'It hardens positions and turns the discussion into a contest of pride',
          'It is grammatically incorrect in formal English',
          'It takes longer to say'
        ],
        0,
        'An explicit refusal closes avenues and forces the other party to defend its pride.'
      ),
      rc(
        'c2u07-r2',
        'What is the purpose of â€œnegative politenessâ€ strategies in the text?',
        [
          'To soften threats to the other partyâ€™s standing while signalling a boundary',
          'To express anger politely',
          'To avoid answering any questions'
        ],
        0,
        'They acknowledge autonomy and soften the threat to the listenerâ€™s standing.'
      ),
      rc(
        'c2u07-r3',
        'What risk of indirectness does the author identify?',
        [
          'The other party may mistake a polite refusal for mere hesitation',
          'The text becomes too short to publish',
          'Translators refuse to translate it'
        ],
        0,
        'Months can be lost if a coded refusal is misread as genuine hesitation.'
      ),
      rc(
        'c2u07-r4',
        'How can bluntness from an outsider be misread?',
        [
          'As hostility rather than simple candour',
          'As agreement',
          'As irony'
        ],
        0,
        'Someone unfamiliar with the convention may sound hostile when intending only candour.'
      ),
      rc(
        'c2u07-r5',
        'What does the author conclude is the real skill?',
        [
          'Calibrating between veiled signals and honest clarity depending on the situation',
          'Never saying no under any circumstances',
          'Using as many passive verbs as possible'
        ],
        0,
        'The final sentence stresses calibrating when to use veiled signals and when to be clear.'
      )
    ]
  },
  speaking: {
    prompt:
      'SimulaciÃ³n diplomÃ¡tica en parejas o trÃ­os (8 a 10 minutos): dos representantes negocian un acuerdo con intereses parcialmente opuestos (por ejemplo, horarios de trabajo hÃ­brido o financiaciÃ³n de un proyecto). Deben expresar reservas, rechazar una exigencia sin romper el diÃ¡logo y redactar oralmente una fÃ³rmula de compromiso.',
    tasks: [
      'Use at least two distancing structures (I was hoping we mightâ€¦; It remains to be seen whetherâ€¦).',
      'Deliver one polite, coded refusal without using the word â€œnoâ€ directly.',
      'Decode or clarify a vague phrase from your partner (When you say â€œin due courseâ€, could we anchor that to a date?).',
      'Agree on one face-saving formulation that both sides can present to their teams.'
    ]
  },
  writing: {
    prompt:
      'Write a formal diplomatic email (280 to 330 words) declining a partner organisationâ€™s request for immediate exclusivity while keeping future collaboration open. Follow it with a short analytical note (70 to 90 words) explaining three pragmatic choices you made (distancing, hedging, face-saving or strategic ambiguity).',
    rubric: [
      'Maintains a poised, formal and conciliatory register throughout.',
      'Declines the core request unmistakably without bluntness, preserving the relationship.',
      'Uses distancing, litotes, conditional hedging and non-committal scope markers naturally.',
      'The analytical note accurately explains the intended pragmatic effect of three specific choices.'
    ],
    model:
      'Dear Dr Vance, Thank you for your letter of 14 October and for the thoughtful spirit in which the revised partnership framework has been drafted. We value the progress our teams have made over the past year and remain committed to exploring areas of shared priority. Having reviewed the exclusivity clause with our board, however, we feel that a binding commitment of that nature would sit somewhat uneasily with our existing public remit. While the proposal is not without merit, we would be reluctant to enter into an arrangement that might constrain our ability to collaborate with regional partners in due course. We are, nevertheless, given to understand that your primary concern is protecting joint research prior to publication. Should that be the case, we would be pleased to consider narrower confidentiality safeguards, subject to review by our legal counsel. I was hoping we might arrange a brief call next week to see whether a mutually acceptable formula can be found. Yours sincerely, Clara MÃ©ndez. Note: I used â€œsit somewhat uneasily withâ€ (understatement) to reject exclusivity without hostility, â€œnot without meritâ€ (litotes) to acknowledge effort before declining, and â€œin due courseâ€ with â€œnarrower safeguardsâ€ to keep future options open while redirecting the negotiation toward a workable compromise.'
  },
  pronunciation: {
    items: [
      { word: 'communiquÃ©', ipa: '/kÉ™ËˆmjuËnÉªkeÉª/', stress: 'com-MU-ni-quÃ©' },
      { word: 'equivocal', ipa: '/ÉªËˆkwÉªvÉ™kl/', stress: 'e-QUIV-o-cal' },
      { word: 'conciliatory', ipa: '/kÉ™nËˆsÉªliÉ™tri/', stress: 'con-CIL-i-a-to-ry' },
      { word: 'disingenuous', ipa: '/ËŒdÉªsÉªnËˆdÊ’enjuÉ™s/', stress: 'dis-in-GEN-u-ous' },
      { word: 'impugn', ipa: '/ÉªmËˆpjuËn/', stress: 'im-PUGN' }
    ],
    tips: [
      'En las fÃ³rmulas diplomÃ¡ticas, la entonaciÃ³n descendente suave evita sonar cortante: That is CERtainly one way of looking at it.',
      'En impugn la g es muda: /ÉªmËˆpjuËn/.',
      'En palabras de cinco sÃ­labas como conciliatory y disingenuous, mantÃ©n claras las vocales Ã¡tonas sin perder el acento principal.'
    ]
  },
  exercises: [
    mc(
      'c2u07-e1',
      'Which reply most clearly signals a polite refusal in a formal workplace context?',
      [
        'That falls slightly outside our current remit, Iâ€™m afraid.',
        'Iâ€™m busy right now, call me later.',
        'Yes, we will start tomorrow.'
      ],
      0,
      'Citing oneâ€™s remit is a classic indirect refusal.',
      'Choose the best option.'
    ),
    fb(
      'c2u07-e2',
      'The wording was deliberately vague, leaving both sides room for ___.',
      'manoeuvre',
      'room for manoeuvre is a fixed diplomatic collocation.',
      ['maneuver'],
      'Write the missing noun.'
    ),
    fb(
      'c2u07-e3',
      'We are prepared to sign, without ___ to our right to review the terms later.',
      'prejudice',
      'without prejudice to = without harming or giving up a right.',
      undefined,
      'Write the missing word.'
    ),
    wo(
      'c2u07-e4',
      ['remains', 'It', 'to', 'be', 'seen', 'whether', 'the', 'assurances', 'hold'],
      ['It', 'remains', 'to', 'be', 'seen', 'whether', 'the', 'assurances', 'hold'],
      'Extraposed diplomatic hedging.'
    ),
    tf(
      'c2u07-e5',
      'â€œConstructive ambiguityâ€ always means accidental confusion caused by poor translation.',
      false,
      'It is deliberate vagueness used to keep negotiations moving.'
    ),
    mt(
      'c2u07-e6',
      'Match each diplomatic expression with its pragmatic function.',
      [
        ['paper over the cracks', 'conceal disagreement behind superficial unity'],
        ['at cross purposes', 'misunderstanding each otherâ€™s aims'],
        ['prevaricate', 'avoid giving a direct answer'],
        ['save face', 'preserve dignity and standing']
      ],
      'Each expression captures a distinct interpersonal dynamic.'
    ),
    tr(
      'c2u07-e7',
      'Soften the refusal using â€œnot without meritâ€ and â€œreservationsâ€.',
      'Your proposal is good, but we reject the budget.',
      'While your proposal is not without merit, we have reservations about the budget',
      'Concede with litotes before stating the objection.',
      [
        'While your proposal is not without merit we have reservations about the budget',
        'Your proposal is not without merit, but we have reservations about the budget'
      ]
    ),
    tr(
      'c2u07-e8',
      'Rewrite with a distancing past continuous to make the suggestion more tentative.',
      'I hope we can revisit the deadline.',
      'I was hoping we might revisit the deadline',
      'Past continuous + might softens a request.',
      ['I was hoping we could revisit the deadline']
    ),
    rc(
      'c2u07-e9',
      'What is the subtext of the chairâ€™s remark?',
      [
        'The proposal is unlikely to be approved soon, if at all',
        'The committee will fund the proposal immediately',
        'The chair did not read the proposal'
      ],
      0,
      'â€œNoted with interestâ€ and â€œin due courseâ€ without a timeline signal polite shelving.',
      'â€œThe committee has noted your proposal with considerable interest,â€ the chair wrote, â€œand will revisit it in due course, should resources permit.â€'
    ),
    sa(
      'c2u07-e10',
      'Rewrite the blunt sentence â€œNo, we wonâ€™t pay for that, and your timeline is unrealisticâ€ as a 3-sentence diplomatic reply using distancing, litotes and a constructive next step.',
      'Model: â€œWhile we appreciate the ambition behind the schedule, we have some reservations about whether the current timeline is achievable. As regards the additional costs, I am afraid they fall outside our existing remit. I was hoping we might meet briefly to explore a phased alternative.â€ Check: no blunt â€œnoâ€, clear boundary, conciliatory tone.'
    )
  ],
  assessment: [
    mc(
      'c2u07-t1',
      'Which sentence uses grammatical distancing to soften a request?',
      [
        'I was hoping we might revisit the clause before signing.',
        'Revisit the clause before signing.',
        'We must revisit the clause right now.'
      ],
      0,
      'Past continuous + might creates polite distance.'
    ),
    mc(
      'c2u07-t2',
      'In a formal communiquÃ©, which verb signals the coolest or most non-committal stance?',
      ['takes note of', 'enthusiastically endorses', 'warmly welcomes'],
      0,
      'â€œTakes note ofâ€ acknowledges without approving.'
    ),
    fb(
      'c2u07-t3',
      'The deal merely papered over the ___, leaving core disputes unresolved.',
      'cracks',
      'paper over the cracks = hide deeper problems.',
      undefined,
      'Write the missing word.'
    ),
    fb(
      'c2u07-t4',
      'I think we may be talking at cross ___; let me clarify my remit.',
      'purposes',
      'talk at cross purposes = misunderstand each other.',
      undefined,
      'Write the missing word.'
    ),
    tf(
      'c2u07-t5',
      'â€œDissemblingâ€ or â€œdisingenuousâ€ describes a person who pretends to be more naive or sincere than they really are.',
      true,
      'Disingenuous = insincere while feigning innocence.'
    ),
    tf(
      'c2u07-t6',
      'Indirect refusals never carry any risk of misunderstanding.',
      false,
      'They can be misread as hesitation if the listener misses the code.'
    ),
    wo(
      'c2u07-t7',
      ['would', 'I', 'not', 'wish', 'to', 'impugn', 'anyoneâ€™s', 'motives'],
      ['I', 'would', 'not', 'wish', 'to', 'impugn', 'anyoneâ€™s', 'motives'],
      'A classic diplomatic disclaimer.'
    ),
    mc(
      'c2u07-t8',
      'Which phrase best keeps a negotiation open while setting a condition?',
      [
        'Should circumstances permit, we would be inclined to reconsider.',
        'We will never reconsider under any circumstances.',
        'Do whatever you want.'
      ],
      0,
      'Inverted conditional + inclined to leaves room to manoeuvre.'
    ),
    tr(
      'c2u07-t9',
      'Rewrite impersonally with â€œIt remains to be seenâ€.',
      'We do not yet know whether the compromise will last.',
      'It remains to be seen whether the compromise will last',
      'Extraposed hedging formula.',
      ['It remains to be seen if the compromise will last']
    ),
    mc(
      'c2u07-t10',
      'What is a â€œveiled warningâ€?',
      [
        'A warning expressed indirectly through polite or guarded language',
        'A loud public threat',
        'An apology'
      ],
      0,
      'Veiled = disguised or indirect.'
    )
  ],
  review: [
    'Use distancing (I was hoping we mightâ€¦; It remains to be seenâ€¦) to avoid cornering your interlocutor.',
    'Recognise coded diplomatic language: takes note of, in due course, not without merit, at cross purposes.',
    'Strategic ambiguity buys time and preserves face, but must not replace real resolution indefinitely.',
    'Negative politeness protects standing; calibrate between tact and clarity so the boundary remains unmistakable.',
    'Read subtext by checking what is omitted (deadlines, named actors, commitments) as well as what is stated.'
  ]
};

export default unit;
