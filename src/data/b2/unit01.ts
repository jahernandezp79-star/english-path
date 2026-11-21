import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'b2-u01', level: 'B2', unitNumber: 1, title: 'Complex Opinions and Debate', subtitle: 'Argue, concede, rebut and defend a position',
  communicativeGoal: 'Argumentar, debatir y defender puntos de vista con matices: reconocer los méritos de la otra postura, contrarrestarla con precisión y estructurar un razonamiento sólido.',
  objectives: ['Usar estructuras avanzadas de concesión y contraste (much as, albeit, whereas, however + adjetivo, notwithstanding).', 'Matizar afirmaciones con lenguaje de cautela (hedging) y evitar generalizaciones.', 'Identificar y cuestionar falacias y supuestos débiles en un argumento.', 'Estructurar un debate: plantear, conceder, refutar y concluir con el registro adecuado.'],
  grammar: {
    title: 'Advanced linking devices, concession and contrast',
    explanation: [
      'En B2 ya no basta con although y however: la concesión (reconocer algo a favor de la otra postura) se expresa con una gama de estructuras que cambian el tono. Cláusulas concesivas: although / though / even though; much as (Much as I respect her, I disagree: “por mucho que la respete”); however + adjetivo/adverbio (However strong the evidence, we must be cautious); no matter how / whatever / whoever; y la inversión con though o as (Strange though it may seem, the test was negative; Brilliant as she is, she makes mistakes).',
      'Para contrastar hechos se usa whereas / while (The north is wealthy, whereas the south struggles). Con sustantivo o -ing: despite / in spite of (+ the fact that), y el formal notwithstanding (Notwithstanding the delays, the project was completed). Adverbios que van entre comas: nevertheless, nonetheless, even so, that said, all the same, admittedly, granted, to be fair. Albeit reduce una concesión a una frase: a compelling, albeit flawed, argument.',
      'Estructura retórica útil: conceder y refutar. Admittedly, the data is limited; even so, the trend is clear. Reconocer el mejor argumento del otro antes de rebatirlo hace tu posición más creíble y menos agresiva, y es una de las claves de un buen debate.',
      'Lenguaje de cautela (hedging): It could be argued that…, There seems to be…, To some extent…, Arguably…, tend to… Evita afirmaciones absolutas (always, never, everyone) que invitan a la refutación. Para cuestionar con precisión: I’d question the assumption that…, That’s a sweeping generalisation, Could you substantiate that?',
      'Registro: albeit, notwithstanding y granted son formales o escritos; that said y even so funcionan en ambos registros; en una conversación informal se diría simplemente but o still. Elegir el nivel adecuado es tan importante como la gramática.'
    ],
    forms: [
      { label: 'Concessive structures', lines: ['Much as I respect her, I disagree with her conclusion.', 'However strong the evidence, we must remain cautious.', 'Strange though it may seem, the test was negative.', 'No matter how hard we try, we can’t please everyone.'] },
      { label: 'Contrast and concession', lines: ['The plan is ambitious, albeit costly.', 'The north is wealthy, whereas the south struggles.', 'Admittedly, the data is limited; even so, the trend is clear.', 'Notwithstanding the delays, the project was completed.'] },
      { label: 'Hedging and challenging', lines: ['It could be argued that the policy has failed.', 'To some extent that’s true, but…', 'I’d question the assumption that this applies to every case.', 'On balance, the benefits outweigh the costs.'] },
      { label: 'Useful expressions and collocations', lines: ['concede a point; make a case for / against', 'play devil’s advocate; hold a position', 'cherry-pick evidence; move the goalposts', 'a sweeping generalisation; a straw man', 'a slippery slope; shift the burden of proof', 'stand your ground; agree to disagree', 'strike a balance; rest your case', 'a compelling / flimsy argument'] }
    ]
  },
  vocabulary: [
    v('rebuttal', 'refutación', '/rɪˈbʌtl/', 're-BUT-tal'), v('premise', 'premisa', '/ˈpremɪs/', 'PREM-ise'), v('fallacy', 'falacia', '/ˈfæləsi/', 'FAL-la-cy'),
    v('generalisation', 'generalización', '/ˌdʒenrəlaɪˈzeɪʃn/', 'gen-er-al-i-SA-tion'), v('counter-argument', 'contraargumento', '/ˈkaʊntər ˌɑːɡjumənt/', 'COUN-ter-ar-gu-ment'), v('stance', 'postura', '/stɑːns/', 'STANCE'),
    v('undermine', 'socavar', '/ˌʌndəˈmaɪn/', 'un-der-MINE'), v('refute', 'refutar', '/rɪˈfjuːt/', 're-FUTE'), v('substantiate', 'fundamentar con pruebas', '/səbˈstænʃieɪt/', 'sub-STAN-ti-ate'),
    v('concede', 'conceder, admitir', '/kənˈsiːd/', 'con-CEDE'), v('nuance', 'matiz', '/ˈnjuːɑːns/', 'NU-ance'), v('rhetoric', 'retórica', '/ˈretərɪk/', 'RHET-o-ric'),
    v('consensus', 'consenso', '/kənˈsensəs/', 'con-SEN-sus'), v('dissent', 'disidencia; disentir', '/dɪˈsent/', 'dis-SENT'), v('sceptical', 'escéptico', '/ˈskeptɪkl/', 'SCEP-ti-cal'),
    v('plausible', 'plausible', '/ˈplɔːzəbl/', 'PLAU-si-ble'), v('flawed', 'defectuoso, con fallos', '/flɔːd/', 'FLAWED'), v('compelling', 'convincente', '/kəmˈpelɪŋ/', 'com-PEL-ling'),
    v('tenable', 'sostenible (un argumento)', '/ˈtenəbl/', 'TEN-a-ble'), v('rigorous', 'riguroso', '/ˈrɪɡərəs/', 'RIG-or-ous'), v('oversimplify', 'simplificar en exceso', '/ˌəʊvəˈsɪmplɪfaɪ/', 'o-ver-SIM-pli-fy'),
    v('burden of proof', 'carga de la prueba', '/ˈbɜːdn əv pruːf/', 'BUR-den of PROOF')
  ],
  examples: [
    { en: 'Much as I admire her ambition, I’m not convinced that the proposal is financially tenable.', es: 'Por mucho que admire su ambición, no estoy convencido de que la propuesta sea sostenible financieramente.' },
    { en: 'However compelling the argument may appear, it rests on a premise that has never been substantiated.', es: 'Por convincente que parezca el argumento, se apoya en una premisa que nunca se ha fundamentado.' },
    { en: 'Early trials were encouraging, albeit on a very small scale.', es: 'Los primeros ensayos fueron alentadores, aunque a escala muy reducida.' },
    { en: 'Whereas the first study was rigorous, the second relied heavily on anecdotal evidence.', es: 'Mientras que el primer estudio fue riguroso, el segundo se basó sobre todo en pruebas anecdóticas.' },
    { en: 'Admittedly, the sample was small; that said, the effect was consistent across all groups.', es: 'Es cierto que la muestra era pequeña; dicho esto, el efecto fue constante en todos los grupos.' },
    { en: 'To suggest that all critics are motivated by self-interest is a sweeping generalisation.', es: 'Sugerir que todos los críticos actúan por interés propio es una generalización excesiva.' },
    { en: 'Notwithstanding the objections, the committee approved the plan by a narrow margin.', es: 'A pesar de las objeciones, el comité aprobó el plan por un estrecho margen.' },
    { en: 'It could be argued that the real issue isn’t the policy itself but how it was communicated.', es: 'Podría argumentarse que el verdadero problema no es la política en sí, sino cómo se comunicó.' }
  ],
  dialogue: [
    { speaker: 'Irene', text: 'I’ll be honest, I find the idea of algorithms screening job applicants deeply troubling.', es: 'Seré sincera: me parece muy inquietante que unos algoritmos filtren a los candidatos.' },
    { speaker: 'Marcus', text: 'Troubling, perhaps, but is it really worse than the status quo? Human recruiters are hardly neutral.', es: 'Inquietante, quizá, pero ¿es realmente peor que lo actual? Los reclutadores humanos difícilmente son neutrales.' },
    { speaker: 'Irene', text: 'Granted, humans are biased. That said, a biased algorithm biases thousands of candidates at once, and does so invisibly.', es: 'De acuerdo, los humanos tienen sesgos. Dicho esto, un algoritmo sesgado perjudica a miles de candidatos a la vez, y de forma invisible.' },
    { speaker: 'Marcus', text: 'Fair, although the same scale works in the other direction: once you fix the bias, you fix it everywhere.', es: 'Justo, aunque esa misma escala funciona al revés: una vez corriges el sesgo, lo corriges en todas partes.' },
    { speaker: 'Irene', text: 'If you can fix it. Much as I’d like to share your optimism, the evidence so far isn’t encouraging.', es: 'Si se puede corregir. Por mucho que quisiera compartir tu optimismo, la evidencia hasta ahora no es alentadora.' },
    { speaker: 'Marcus', text: 'I’d question that. Admittedly, a few high-profile failures made the headlines, but those were poorly designed systems, not proof that the whole approach is flawed.', es: 'Yo lo pondría en duda. Es cierto que algunos fracasos muy sonados llegaron a los titulares, pero eran sistemas mal diseñados, no prueba de que todo el enfoque sea defectuoso.' },
    { speaker: 'Irene', text: 'Isn’t that a convenient move? Every failed system gets dismissed as “poorly designed”.', es: '¿No es un movimiento conveniente? Todo sistema que fracasa se descarta como “mal diseñado”.' },
    { speaker: 'Marcus', text: 'Touché. Let me rephrase: whereas early systems were opaque, newer ones can be audited.', es: 'Touché. Lo reformulo: mientras que los primeros sistemas eran opacos, los nuevos pueden auditarse.' },
    { speaker: 'Irene', text: 'Audited by whom, though? Unless there’s independent oversight, “auditable” is just a marketing label.', es: '¿Auditados por quién? A menos que haya supervisión independiente, “auditable” es solo una etiqueta de marketing.' },
    { speaker: 'Marcus', text: 'On that we agree entirely. Regulation would have to come first.', es: 'En eso coincidimos del todo. La regulación tendría que ir primero.' },
    { speaker: 'Irene', text: 'Then perhaps we’re closer than we thought.', es: 'Entonces quizá estamos más cerca de lo que pensábamos.' },
    { speaker: 'Marcus', text: 'Possibly. I’d still say the burden of proof lies with those who oppose it, but I’ll concede it’s a close call.', es: 'Posiblemente. Aun así, diría que la carga de la prueba recae en quienes se oponen, pero admito que está muy reñido.' }
  ],
  listening: {
    script: [
      { speaker: 'Moderator', text: 'Many European cities are restricting cars in their centres. Dr Hale, is this progress or overreach?' },
      { speaker: 'Dr Hale', text: 'Progress, on balance. Cities that have pedestrianised their centres report cleaner air, fewer accidents and, contrary to expectations, busier shops.' },
      { speaker: 'Mr Cole', text: 'Much as I admire those results, they come from cities with excellent public transport. Try the same in a place with poor bus services and you penalise the people who can least afford alternatives.' },
      { speaker: 'Dr Hale', text: 'A fair concession, albeit one that argues for better transport rather than for more cars.' },
      { speaker: 'Mr Cole', text: 'Perhaps, but however good the plan, it takes years to build. In the meantime, night-shift workers and disabled residents are left stranded.' },
      { speaker: 'Dr Hale', text: 'Which is precisely why exemptions are part of every serious proposal. It’s a straw man to suggest that nobody will be allowed in.' },
      { speaker: 'Mr Cole', text: 'Admittedly, I’m simplifying, but the rhetoric of supporters often does the same. Even so, I’d accept a trial period.' },
      { speaker: 'Moderator', text: 'A rare point of agreement. Let’s take a break and then look at the data.' }
    ],
    questions: [
      mc('b2u01-l1', 'What does Dr Hale say happened in cities that pedestrianised their centres?', ['Cleaner air, fewer accidents and busier shops', 'More traffic', 'Fewer visitors'], 0, 'He mentions cleaner air, fewer accidents and busier shops.'),
      mc('b2u01-l2', 'What is Mr Cole’s main objection?', ['Alternatives such as public transport may not exist yet', 'Cars are cheaper', 'Cities are too clean'], 0, 'He says the results come from cities with excellent public transport.'),
      mc('b2u01-l3', 'How does Dr Hale respond to the objection?', ['He accepts the point but says it supports better transport', 'He ignores it', 'He agrees to ban nothing'], 0, 'He calls it a fair concession that argues for better transport.'),
      mc('b2u01-l4', 'Which fallacy does Dr Hale accuse Mr Cole of?', ['A straw man', 'A slippery slope', 'Circular reasoning'], 0, 'He says it’s a straw man to suggest nobody will be allowed in.'),
      mc('b2u01-l5', 'What can be inferred about Mr Cole’s final position?', ['He is open to a compromise', 'He rejects any change', 'He supports a total ban'], 0, 'He would accept a trial period.')
    ]
  },
  reading: {
    title: 'The art of disagreeing well',
    text: 'In an age when social media rewards outrage, disagreeing well has become something of a lost art. Debates now tend to follow a familiar pattern: each side presents its strongest evidence, dismisses the other’s as biased, and withdraws, more convinced than before. Yet research on persuasion suggests that this approach is precisely the one least likely to change anyone’s mind. People rarely abandon a position when attacked; they dig in. By contrast, those who feel that their view has been understood are more willing to reconsider it. Skilled debaters therefore begin by stating the opponent’s argument so accurately that its holder would say, “That is exactly what I think.” Only then do they explain where, and why, they disagree. This is not mere politeness. It forces the speaker to engage with the strongest version of the opposing case rather than a caricature, which, in turn, makes the eventual criticism harder to dismiss. Admittedly, the technique has limits: it assumes that both parties are arguing in good faith, and it cannot resolve disputes that are really about values rather than facts. Even so, its defenders argue that a debate in which each side leaves slightly better informed, if unconvinced, should be counted as a success.',
    questions: [
      rc('b2u01-r1', 'What usually happens in modern debates, according to the text?', ['Each side presents evidence, dismisses the other, and ends up more convinced', 'Both sides compromise quickly', 'Debates are avoided'], 0, 'Each side dismisses the other’s evidence and withdraws more convinced.'),
      rc('b2u01-r2', 'What makes people more willing to reconsider a view?', ['Feeling that their view has been understood', 'Being attacked', 'Receiving more statistics'], 0, 'Those who feel understood are more willing to reconsider.'),
      rc('b2u01-r3', 'What do skilled debaters do first?', ['State the opponent’s argument accurately', 'Attack the opponent’s evidence', 'Change the subject'], 0, 'They state the opponent’s argument so accurately that its holder agrees.'),
      rc('b2u01-r4', 'Which limitation does the writer admit?', ['It assumes good faith and cannot settle disputes about values', 'It takes too long', 'It is only for experts'], 0, 'It assumes good faith and doesn’t resolve disputes about values.'),
      rc('b2u01-r5', 'What is the writer’s attitude towards the technique?', ['Qualified support', 'Total rejection', 'Indifference'], 0, 'The writer recognises limits but ends on a positive evaluation.')
    ]
  },
  speaking: { prompt: 'Debate estructurado en parejas (4 a 5 minutos): elijan una moción controvertida (por ejemplo, “Los algoritmos deberían participar en decisiones de contratación”). Uno defiende, otro se opone y luego intercambian roles. Un tercer compañero puede tomar notas sobre las estrategias usadas.', tasks: ['Open with a clear position and hedge appropriately (It could be argued that…; On balance…).', 'Concede a point with admittedly, granted or much as… and then rebut it.', 'Challenge a claim politely: “I’d question the assumption that…” or “Could you substantiate that?”', 'Close with a short summary of both positions and say where you agree.'] },
  writing: { prompt: 'Write a discursive essay of 220 to 260 words on: “Should universities ban the use of generative AI in assessed coursework?” Present both sides, include at least two concessions and one rebuttal, use hedging, and reach a reasoned conclusion. Use at least six advanced linking devices.', rubric: ['A clear thesis and a coherent structure (introduction, both sides, conclusion).', 'At least two concessions and one rebuttal with advanced linkers (much as, albeit, whereas, notwithstanding…).', 'Hedging instead of absolute claims; no obvious fallacies.', 'Register: formal, objective and precise.'], model: 'Few topics have divided universities as sharply as generative AI. Proponents of a ban argue that assessed work should reflect a student’s own thinking; much as one may sympathise with this view, it rests on the assumption that a ban can be enforced. Detection tools, albeit improving, remain unreliable, and false accusations carry serious consequences. Whereas some institutions have chosen prohibition, others have redesigned assessment, favouring oral examinations and in-class tasks. It could be argued that the second approach is more tenable: notwithstanding the extra cost, it measures what students actually understand. Admittedly, such reforms will not suit every discipline. Even so, on balance, rethinking assessment seems more promising than attempting to prohibit a technology that students will use regardless.' },
  pronunciation: {
    items: [{ word: 'concede', ipa: '/kənˈsiːd/', stress: 'con-CEDE' }, { word: 'nuance', ipa: '/ˈnjuːɑːns/', stress: 'NU-ance' }, { word: 'rhetoric', ipa: '/ˈretərɪk/', stress: 'RHET-o-ric' }, { word: 'sceptical', ipa: '/ˈskeptɪkl/', stress: 'SCEP-ti-cal' }, { word: 'substantiate', ipa: '/səbˈstænʃieɪt/', stress: 'sub-STAN-ti-ate' }],
    tips: ['En concesiones, la entonación importa: Admittedly, | the data is limited; | even so, | the trend is clear. Sube ligeramente en la concesión y baja con firmeza en la conclusión.', 'Para sonar cauto sin sonar inseguro, acentúa el matiz (It could be ARGUED…) y baja el tono al final.', 'En palabras largas como generalisation y substantiate, la fuerza va en la sílaba anterior a -tion / -ate: gen-er-al-i-SA-tion.']
  },
  exercises: [
    mc('b2u01-e1', '___ I admire her work, I can’t agree with her conclusion.', ['Much as', 'As much', 'Despite as'], 0, 'Much as + subject + verb = por mucho que.', 'Choose the correct structure.'),
    fb('b2u01-e2', '___ hard we try, we can’t please everyone.', 'However', 'However + adjective/adverb + subject + verb.', ['No matter how'], 'Write the missing word(s).'),
    fb('b2u01-e3', 'It was a compelling, ___ flawed, argument.', 'albeit', 'albeit = although it is.', undefined, 'Write the missing word.'),
    wo('b2u01-e4', ['though', 'Strange', 'may', 'it', 'seem', 'the', 'test', 'was', 'negative'], ['Strange', 'though', 'it', 'may', 'seem', 'the', 'test', 'was', 'negative'], 'Adjective + though + subject + verb.'),
    tf('b2u01-e5', '“Notwithstanding” is typical of informal conversation.', false, 'It is a formal, mostly written, word.'),
    mt('b2u01-e6', 'Match each device with its function.', [['whereas', 'contrasts two facts'], ['albeit', 'reduces a concession to a short phrase'], ['that said', 'qualifies the previous point'], ['it could be argued that', 'hedges a claim']], 'Function and register go together.'),
    tr('b2u01-e7', 'Rewrite with “much as”.', 'I respect his opinion, but I disagree.', 'Much as I respect his opinion, I disagree', 'Much as + clause, main clause.', ['Much as I respect his opinion I disagree']),
    tr('b2u01-e8', 'Rewrite with “albeit”.', 'The plan is ambitious but costly.', 'The plan is ambitious, albeit costly', 'albeit + adjective.', ['The plan is ambitious albeit costly']),
    rc('b2u01-e9', 'Which weakness in the critics’ reasoning does the writer point out?', ['They ignore other possible causes', 'They use false statistics', 'They support the policy'], 0, 'Unemployment rose elsewhere too, so the cause may lie elsewhere.', 'Critics claim the policy has failed because unemployment rose. Yet unemployment also rose in neighbouring countries that did not adopt it, which suggests that the cause may lie elsewhere.'),
    sa('b2u01-e10', 'Write a concession-and-rebuttal paragraph (5 to 6 sentences) on a topic of your choice using at least three structures from the unit.', 'Model: “Much as I admire the idea of remote work, I’m not convinced it suits everyone. Admittedly, it saves time; even so, junior staff often lose mentoring, whereas senior staff thrive. It could be argued that hybrid models are more tenable.” Check: concession, rebuttal, hedging and formal register.')
  ],
  assessment: [
    mc('b2u01-t1', 'The evidence is limited; ___, the trend is clear.', ['even so', 'as a result', 'whereas'], 0, 'Even so introduces a concession.'),
    mc('b2u01-t2', 'Choose the most formal concession.', ['Notwithstanding the delays, the project was completed.', 'Even though there were delays, we finished.', 'Delays or not, we finished.'], 0, 'Notwithstanding is the most formal option.'),
    fb('b2u01-t3', '___ strange it may seem, he declined the offer.', 'However', 'However + adjective + subject + verb.', ['No matter how'], 'Write the missing word(s).'),
    fb('b2u01-t4', 'The south is poor, ___ the north is wealthy.', 'whereas', 'whereas = contrast between two facts.', ['while'], 'Write the missing word.'),
    tf('b2u01-t5', '“Admittedly” introduces a point that weakens the speaker’s own case before countering it.', true, 'It concedes before the rebuttal.'),
    tf('b2u01-t6', 'A straw man misrepresents the opponent’s argument in order to refute it easily.', true, 'It attacks a distorted version of the argument.'),
    wo('b2u01-t7', ['It', 'could', 'argued', 'be', 'that', 'the', 'policy', 'failed'], ['It', 'could', 'be', 'argued', 'that', 'the', 'policy', 'failed'], 'A hedging structure.'),
    mc('b2u01-t8', 'Which response challenges a claim most precisely and politely?', ['I’d question the assumption that this applies to every case.', 'That’s ridiculous.', 'You never listen.'], 0, 'It targets the assumption without attacking the person.'),
    tr('b2u01-t9', 'Rewrite with “albeit”.', 'Although the results are promising, they are preliminary.', 'The results are promising, albeit preliminary', 'albeit + adjective.', ['The results are promising albeit preliminary']),
    mc('b2u01-t10', 'Identify the fallacy: “If we allow one exception, soon there will be no rules at all.”', ['Slippery slope', 'Straw man', 'Circular reasoning'], 0, 'It predicts an extreme chain of consequences without evidence.')
  ],
  review: ['Concession: although, much as, however + adjective, whereas; formal: notwithstanding, albeit; adverbs: even so, that said, admittedly.', 'Concede and rebut: acknowledge the best point of the other side, then explain where and why you disagree.', 'Hedge your claims (It could be argued that…, tend to, arguably) and avoid sweeping generalisations.', 'Challenge assumptions: I’d question the assumption that…; Could you substantiate that?', 'Watch for fallacies: straw man, slippery slope, cherry-picking, shifting the burden of proof.']
};
export default unit;
