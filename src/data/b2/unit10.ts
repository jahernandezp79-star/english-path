import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'b2-u10', level: 'B2', unitNumber: 10, title: 'Advanced Communication', subtitle: 'Hold complex conversations and defend arguments with flexibility',
  communicativeGoal: 'Mantener conversaciones complejas y defender argumentos con flexibilidad: matizar, rectificar, interrumpir con cortesía, buscar terreno común y cerrar con precisión.',
  objectives: ['Integrar las estructuras de B2 (concesión, cautela, modales de deducción, condicionales, relativas, participios, énfasis, preguntas indirectas) según el propósito comunicativo.', 'Gestionar una conversación compleja: interrumpir, rectificar, reformular, resumir y buscar acuerdo.', 'Matizar la fuerza de lo que dices (cautela, énfasis, subestimación) y calibrar tu certeza con las pruebas.', 'Defender una postura y reconocer los argumentos del otro sin perder claridad ni cortesía.'],
  grammar: {
    title: 'B2 integrated review: choosing the right structure for the message',
    explanation: [
      'Argumentar y conceder: usa estructuras de concesión y contraste (much as…, albeit, whereas, even so, admittedly) y cautela (It could be argued that…, tend to, arguably). Una concesión bien hecha refuerza tu credibilidad: Admittedly, the sample was small; even so, the effect was consistent.',
      'Especular, criticar y analizar el pasado: modales de deducción y crítica (must have, can’t have, might have, should have, needn’t have) y condicionales (second, third, mixed; had I known…). Narrar con tiempos narrativos y secuenciadores avanzados cuando cuentas lo que ocurrió (Having reviewed the evidence, the team revised its view).',
      'Atribuir y describir: pasivas e impersonales para distanciarte (It is reported that…; He is alleged to have…), verbos de comunicación con su patrón (accuse … of, urge … to, deny + -ing) y oraciones de relativo o de participio para condensar información (the researchers, several of whom…; the data collected last year).',
      'Enfatizar y negociar: oraciones hendidas y la inversión para destacar (What matters is…; Rarely do we…; Only when… can…); preguntas indirectas, modales suavizados y concesiones condicionadas para negociar con diplomacia (Could you tell me whether…? We might be able to…, provided that…).',
      'Gestionar la conversación: reconocer (I take your point), rectificar (I may have overstated the case), interrumpir (If I could just interject…), reformular (What I mean is…), buscar terreno común (I think we can agree that…) y resumir (To sum up, we have agreed that…). Y sobre todo, calibra: el grado de certeza que expresas debe corresponder a la fuerza de las pruebas.'
    ],
    forms: [
      { label: 'Argue, concede and hedge', lines: ['Much as I admire her, I disagree with her conclusion.', 'Admittedly, the data is limited; even so, the trend is clear.', 'It could be argued that the policy has failed.', 'On balance, the benefits seem to outweigh the costs.'] },
      { label: 'Speculate, criticise and imagine', lines: ['He must have known; she can’t have been surprised.', 'We should have consulted the team earlier.', 'Had I known, I would have acted differently.', 'If we had been more cautious, we might have avoided the loss.'] },
      { label: 'Attribute, emphasise and negotiate', lines: ['The minister is alleged to have misled parliament.', 'What matters is not the number but the justification.', 'Could you tell me whether the price includes delivery?', 'We might be able to offer a discount, provided that you commit to two years.'] },
      { label: 'Managing the conversation', lines: ['I take your point, but I’d question the assumption that…', 'If I could just interject, …', 'I may have overstated the case; let me qualify that.', 'To sum up, we agree on the principle but differ on the remedy.'] }
    ]
  },
  vocabulary: [
    v('backtrack', 'rectificar, retroceder', '/ˈbæktræk/', 'BACK-track'), v('qualify', 'matizar', '/ˈkwɒlɪfaɪ/', 'QUAL-i-fy'), v('reiterate', 'reiterar', '/riːˈɪtəreɪt/', 're-IT-er-ate'),
    v('take issue with', 'discrepar de', '/teɪk ˈɪʃuː wɪð/', 'take IS-sue with'), v('play down', 'restar importancia', '/pleɪ daʊn/', 'play DOWN'), v('interject', 'intervenir, interrumpir con un comentario', '/ˌɪntəˈdʒekt/', 'in-ter-JECT'),
    v('hold the floor', 'mantener el turno de palabra', '/həʊld ðə flɔː/', 'hold the FLOOR'), v('tangent', 'digresión', '/ˈtændʒənt/', 'TAN-gent'), v('rhetorical question', 'pregunta retórica', '/rɪˈtɒrɪkl ˈkwestʃən/', 'rhe-TOR-i-cal QUES-tion'),
    v('overstate', 'exagerar', '/ˌəʊvəˈsteɪt/', 'o-ver-STATE'), v('understatement', 'subestimación, eufemismo', '/ˈʌndəsteɪtmənt/', 'UN-der-state-ment'), v('caveat', 'salvedad, advertencia', '/ˈkæviæt/', 'CAV-e-at'),
    v('common ground', 'terreno común', '/ˌkɒmən ˈɡraʊnd/', 'COM-mon GROUND'), v('middle ground', 'punto intermedio', '/ˌmɪdl ˈɡraʊnd/', 'MID-dle GROUND'), v('sidestep', 'esquivar', '/ˈsaɪdstep/', 'SIDE-step'),
    v('pin down', 'precisar, concretar', '/pɪn daʊn/', 'pin DOWN'), v('at odds with', 'en desacuerdo con', '/æt ɒdz wɪð/', 'at ODDS with'), v('counterpoint', 'contrapunto, contraargumento', '/ˈkaʊntəpɔɪnt/', 'COUN-ter-point'),
    v('put into perspective', 'poner en perspectiva', '/pʊt ˈɪntə pəˈspektɪv/', 'put into per-SPEC-tive'), v('sum up', 'resumir', '/sʌm ʌp/', 'sum UP'), v('draw a parallel', 'establecer un paralelismo', '/drɔː ə ˈpærəlel/', 'draw a PAR-al-lel'),
    v('rest one’s case', 'dar por concluida la argumentación', '/rest wʌnz keɪs/', 'rest one’s CASE')
  ],
  examples: [
    { en: 'I’d like to qualify what I said earlier: I may have overstated the case, and I’m happy to backtrack on one point.', es: 'Quisiera matizar lo que dije antes: quizá exageré, y con gusto rectifico en un punto.' },
    { en: 'Much as I take issue with the conclusion, I accept that the methodology is rigorous.', es: 'Aunque discrepo de la conclusión, acepto que la metodología es rigurosa.' },
    { en: 'If I could just interject, the figure you quoted comes from only three cities, all of which have unusually tight housing markets.', es: 'Si me permite intervenir, la cifra que citó procede de solo tres ciudades, todas con mercados de vivienda inusualmente tensos.' },
    { en: 'Rarely do two sides agree so quickly on the diagnosis while differing so sharply on the cure.', es: 'Rara vez dos bandos coinciden tan rápido en el diagnóstico y difieren tanto en el remedio.' },
    { en: 'Having established some common ground, we can now look at where our positions are genuinely at odds.', es: 'Habiendo establecido algún terreno común, podemos ver ahora dónde nuestras posturas están realmente enfrentadas.' },
    { en: 'It was not the content of the proposal that I objected to, but the way in which it was presented.', es: 'Lo que objeté no fue el contenido de la propuesta, sino la manera en que se presentó.' },
    { en: 'To play devil’s advocate, if enforcement is the problem, it’s hard to see why a stricter law would work.', es: 'Para hacer de abogado del diablo: si el problema es la aplicación, cuesta ver por qué funcionaría una ley más estricta.' },
    { en: 'The company, whose spokesperson played down the incident, is reported to have ignored earlier warnings.', es: 'Se informa de que la empresa, cuyo portavoz restó importancia al incidente, ignoró advertencias anteriores.' }
  ],
  dialogue: [
    { speaker: 'Iris', text: 'I’d like to qualify something I said earlier. I may have overstated the case; I don’t think short-term rentals are the sole cause of rising rents.', es: 'Quisiera matizar algo que dije antes. Quizá exageré; no creo que los alquileres de corta estancia sean la única causa del aumento de precios.' },
    { speaker: 'Tomas', text: 'Thank you, that’s fair. Though I’d take issue with the idea that they’re a minor factor. In several cities, the data suggests otherwise.', es: 'Gracias, es justo. Aunque discreparía de la idea de que sean un factor menor. En varias ciudades, los datos indican lo contrario.' },
    { speaker: 'Iris', text: 'If I could just interject: the data you mention comes from three cities, all of which have unusually tight housing markets.', es: 'Si me permite intervenir: los datos que menciona proceden de tres ciudades, todas con mercados de vivienda inusualmente tensos.' },
    { speaker: 'Tomas', text: 'Granted, but that’s precisely my point: where supply is limited, every flat taken off the long-term market matters.', es: 'De acuerdo, pero ese es justo mi punto: donde la oferta es limitada, cada piso que sale del mercado de larga duración importa.' },
    { speaker: 'Iris', text: 'Rarely do I disagree with the premise; what I question is the remedy. A blanket ban would, in my view, be disproportionate.', es: 'Rara vez discrepo de la premisa; lo que cuestiono es el remedio. Una prohibición general sería, en mi opinión, desproporcionada.' },
    { speaker: 'Tomas', text: 'Had the regulations been enforced properly, we might not be having this debate.', es: 'Si las normas se hubieran aplicado bien, quizá no estaríamos teniendo este debate.' },
    { speaker: 'Iris', text: 'Possibly. Though, to play devil’s advocate, if enforcement is the problem, it’s hard to see why a stricter law would work.', es: 'Posiblemente. Aunque, para hacer de abogada del diablo, si el problema es la aplicación, cuesta ver por qué funcionaría una ley más estricta.' },
    { speaker: 'Tomas', text: 'A reasonable counterpoint. Let me sidestep the legal question for a moment and focus on what we could agree on.', es: 'Un contrapunto razonable. Dejemos de lado un momento la cuestión legal y centrémonos en lo que podríamos acordar.' },
    { speaker: 'Iris', text: 'Please. I’d welcome some common ground.', es: 'Por favor. Agradecería algo de terreno común.' },
    { speaker: 'Tomas', text: 'Both of us, I think, accept that hosts should be registered, and that there should be a cap on the number of nights.', es: 'Ambos, creo, aceptamos que los anfitriones deben registrarse y que debe haber un tope de noches.' },
    { speaker: 'Iris', text: 'Yes, and the revenue should arguably be reinvested locally. Not a ban, but not a free-for-all.', es: 'Sí, y los ingresos deberían, probablemente, reinvertirse localmente. No una prohibición, pero tampoco vale todo.' },
    { speaker: 'Tomas', text: 'Then, to sum up: registration, a cap, and local reinvestment. I think that’s a workable middle ground.', es: 'Entonces, para resumir: registro, un tope y reinversión local. Creo que es un punto intermedio viable.' }
  ],
  listening: {
    script: [
      { speaker: 'Host', text: 'Your book argues that winning an argument may not be the goal. Isn’t that a contradiction?' },
      { speaker: 'Coach', text: 'Only if we assume that arguments are battles. What I propose is that the aim is to find the better answer, which sometimes means changing your own mind.' },
      { speaker: 'Host', text: 'That sounds risky in a professional setting.' },
      { speaker: 'Coach', text: 'It can be, but backtracking openly, saying “I may have been wrong about that”, tends to increase credibility rather than damage it. People trust those who are willing to qualify their claims.' },
      { speaker: 'Host', text: 'What about when the other person won’t listen?' },
      { speaker: 'Coach', text: 'Don’t escalate. Reiterate your position calmly, acknowledge the common ground, and ask a question that invites them to explain their reasoning. Often, they will hear their own weaknesses.' },
      { speaker: 'Host', text: 'And if all else fails?' },
      { speaker: 'Coach', text: 'Agree to disagree, but do so deliberately: summarise where you differ so that the disagreement is precise rather than personal.' }
    ],
    questions: [
      mc('b2u10-l1', 'What does the coach say is the aim of an argument?', ['To find the better answer', 'To defeat the other person', 'To avoid conflict'], 0, 'The aim is to find the better answer.'),
      mc('b2u10-l2', 'How does backtracking affect credibility, according to the coach?', ['It tends to increase it', 'It destroys it', 'It has no effect'], 0, 'Backtracking openly tends to increase credibility.'),
      mc('b2u10-l3', 'What does she advise if the other person won’t listen?', ['Stay calm, reiterate and ask a question that invites explanation', 'Raise your voice', 'Leave immediately'], 0, 'Don’t escalate; reiterate calmly and ask an inviting question.'),
      tf('b2u10-l4', 'She recommends avoiding disagreement at all costs.', false, 'She suggests agreeing to disagree deliberately and precisely.'),
      mc('b2u10-l5', 'What can be inferred about her view of disagreement?', ['It can be productive if handled precisely and respectfully', 'It is always harmful', 'It should be hidden'], 0, 'She wants disagreement to be precise rather than personal.')
    ]
  },
  reading: {
    title: 'The art of the qualified claim',
    text: 'Among the habits that distinguish a mature thinker from a merely confident one, perhaps the most telling is the willingness to qualify. A qualified claim, such as “this approach tends to work in small teams”, may appear weaker than an unqualified one, yet it is far harder to refute and far more likely to be true. Beginners often assume that hedging signals uncertainty, and that decisive speakers must be unambiguous. Experienced communicators know otherwise: precision, not volume, is what conveys authority. Had politicians and commentators learned this lesson, public debate might have been less polarised; not only do sweeping generalisations invite equally sweeping rebuttals, they also leave little room for the common ground on which agreement depends. That said, qualification can be abused. A speaker who hedges every statement, or who uses caveats to avoid ever committing to a view, can be as unhelpful as one who overstates. What matters is calibration: the degree of confidence expressed should match the strength of the evidence. Having considered both extremes, one might conclude that good communication is less a matter of choosing between boldness and caution than of knowing, in each case, which is warranted.',
    questions: [
      rc('b2u10-r1', 'What distinguishes a mature thinker?', ['Willingness to qualify claims', 'Absolute confidence', 'Speaking loudly'], 0, 'The willingness to qualify.'),
      rc('b2u10-r2', 'Why is a qualified claim stronger?', ['It is harder to refute and more likely to be true', 'It is shorter', 'It is more popular'], 0, 'It is far harder to refute and far more likely to be true.'),
      rc('b2u10-r3', 'What misconception do beginners hold?', ['That hedging signals uncertainty', 'That hedging is rude', 'That hedging is illegal'], 0, 'They assume that hedging signals uncertainty.'),
      rc('b2u10-r4', 'What is the risk of over-qualification?', ['Avoiding commitment to any view', 'Being too precise', 'Making errors'], 0, 'A speaker may use caveats to avoid ever committing.'),
      rc('b2u10-r5', 'What is calibration?', ['Matching expressed confidence to the strength of the evidence', 'Always using caution', 'Never changing views'], 0, 'The confidence expressed should match the evidence.')
    ]
  },
  speaking: { prompt: 'Debate final de B2 (6 a 8 minutos): en grupos de tres, una persona preside y dos defienden posturas opuestas sobre un tema de actualidad. Todos deben matizar, conceder, rectificar y buscar terreno común. Al final, el moderador resume los acuerdos y los desacuerdos.', tasks: ['Open with a clear, hedged position and use at least one concession (much as…, albeit, admittedly).', 'Interrupt politely once and respond to an interruption (If I could just interject…; I take your point).', 'Backtrack or qualify one of your earlier claims and explain why.', 'Close by summarising common ground, what remains at odds and what would change your mind.'] },
  writing: { prompt: 'Write a reflective discursive essay (240 to 280 words) on: “Is it better to be certain or to be flexible when defending an argument?” Integrate at least eight different B2 structures (concession, hedging, modals of deduction or criticism, conditionals, relative or participle clauses, cleft or inversion, reporting verbs). Include a counter-argument and a reasoned conclusion.', rubric: ['Integrated and accurate use of at least eight different B2 structures.', 'Clear thesis, counter-argument, rebuttal and conclusion.', 'Calibrated tone: hedging where appropriate and emphasis where justified.', 'Cohesion, coherence and formal register throughout.'], model: 'It is often assumed that effective speakers should project certainty. Much as this view is appealing, it overlooks what experience teaches: flexibility is a sign of strength, not weakness. Admittedly, constant hesitation would undermine any argument; even so, it could be argued that the willingness to revise one’s position, having weighed new evidence, enhances credibility. Had politicians accepted this, public debate might have been less polarised. What matters is calibration: the confidence expressed should match the evidence available. Rarely do complex questions allow absolute certainty; a speaker who claims it must have overlooked something. The researchers, several of whom have studied persuasion for decades, report that audiences trust those who acknowledge limits. In conclusion, flexibility and conviction are not opposites: the best arguments are defended firmly, yet held with an open mind.' },
  pronunciation: {
    items: [{ word: 'caveat', ipa: '/ˈkæviæt/', stress: 'CAV-e-at' }, { word: 'rhetorical', ipa: '/rɪˈtɒrɪkl/', stress: 'rhe-TOR-i-cal' }, { word: 'counterpoint', ipa: '/ˈkaʊntəpɔɪnt/', stress: 'COUN-ter-point' }, { word: 'reiterate', ipa: '/riːˈɪtəreɪt/', stress: 're-IT-er-ate' }, { word: 'tangent', ipa: '/ˈtændʒənt/', stress: 'TAN-gent' }],
    tips: ['Para sonar firme y abierto a la vez, baja la entonación al final de la afirmación y sube ligeramente en la invitación: …that’s my view. | What do you think?', 'Al interrumpir con cortesía, usa un tono suave y ritmo más lento: If I could just interject…', 'En el habla espontánea, las pausas permiten pensar y mantener el turno; evita llenarlas con muletillas constantes.']
  },
  exercises: [
    mc('b2u10-e1', 'I’d like to ___ what I said earlier; I may have overstated the case.', ['qualify', 'reiterate', 'pin down'], 0, 'Qualify = add nuance or limits to what you said.', 'Choose the best verb.'),
    fb('b2u10-e2', 'Rarely ___ I disagree with the premise.', 'do', 'Rarely + do + subject + base verb.', undefined, 'Write the missing word.'),
    fb('b2u10-e3', '___ the data been verified, the conclusion would be stronger.', 'Had', 'Inversion for a third conditional.', undefined, 'Write the missing word.'),
    wo('b2u10-e4', ['that', 'It', 'was', 'the', 'council', 'approved', 'the', 'plan'], ['It', 'was', 'the', 'council', 'that', 'approved', 'the', 'plan'], 'A cleft sentence.'),
    tf('b2u10-e5', 'To “sidestep” a question means to answer it directly.', false, 'To sidestep is to avoid it.'),
    mt('b2u10-e6', 'Match each expression with its meaning.', [['reiterate', 'state again'], ['interject', 'interrupt with a comment'], ['take issue with', 'disagree with'], ['common ground', 'shared position']], 'Conversation-management vocabulary.'),
    tr('b2u10-e7', 'Hedge the claim.', 'This policy has failed. → It could be argued that…', 'It could be argued that this policy has failed', 'It could be argued that + clause.'),
    tr('b2u10-e8', 'Combine with a participle clause.', 'She reviewed the evidence. Then she revised her view.', 'Having reviewed the evidence, she revised her view', 'Having + participle, main clause.', ['Having reviewed the evidence she revised her view']),
    rc('b2u10-e9', 'What can be inferred about the author’s position?', ['She acknowledges a limitation but defends her conclusion', 'She rejects the study', 'She ignores the sample size'], 0, 'She concedes the small sample but maintains the effect is consistent.', 'While the author concedes that the sample was small, she maintains that the effect, though modest, is consistent across studies.'),
    sa('b2u10-e10', 'Write a short exchange (8 to 10 lines) in which two speakers debate a topic. Each must concede a point, rebut another and qualify a claim, using at least four structures from B2.', 'Model: “A: Admittedly, remote work saves time; even so, it could be argued that mentoring suffers. B: I take your point, but had companies planned better, new staff would have been supported. A: Granted. Let me qualify that: it tends to work best in hybrid form.” Check: concession, rebuttal, hedging and polite conversation management.')
  ],
  assessment: [
    mc('b2u10-t1', 'Much ___ I admire her, I disagree with her conclusion.', ['as', 'that', 'like'], 0, 'Much as + clause.'),
    mc('b2u10-t2', 'If I ___ known, I would have acted differently.', ['had', 'have', 'would have'], 0, 'Third conditional: if + past perfect.'),
    fb('b2u10-t3', 'She was exhausted; she ___ been working since dawn.', 'had', 'Past Perfect Continuous: had been working.', undefined, 'Write the missing word.'),
    fb('b2u10-t4', 'The researchers, several of ___ were students, found an error.', 'whom', 'several of whom.', undefined, 'Write the missing word.'),
    tf('b2u10-t5', '“Understatement” means expressing something as less important than it really is.', true, 'It plays down the importance.'),
    tf('b2u10-t6', 'A dangling participle clause has a different implied subject from the main clause.', true, 'That is why it is an error.'),
    wo('b2u10-t7', ['have', 'Never', 'I', 'heard', 'such', 'a', 'convincing', 'argument'], ['Never', 'have', 'I', 'heard', 'such', 'a', 'convincing', 'argument'], 'Inversion after never.'),
    mc('b2u10-t8', 'Which response best concedes and counters?', ['Admittedly, the sample was small; even so, the effect was consistent.', 'The sample was small, so you are wrong.', 'I don’t care about the sample.'], 0, 'It acknowledges the limitation and continues the argument.'),
    tr('b2u10-t9', 'Rewrite with an impersonal passive.', 'People say that the minister resigned.', 'The minister is said to have resigned', 'is said to have + participle.'),
    mc('b2u10-t10', 'Which sentence is the most appropriate for a formal written report?', ['Notwithstanding the limitations, the findings are encouraging.', 'Even though it’s limited, it’s kinda promising.', 'Loads of problems, but the results are okay.'], 0, 'Formal vocabulary and structure.')
  ],
  review: ['Choose the structure by purpose: concede and hedge, speculate and criticise, attribute and condense, emphasise and negotiate.', 'Manage conversation: take someone’s point, qualify or backtrack, interrupt politely, reformulate, find common ground, sum up.', 'Calibrate: the certainty you express should match the strength of the evidence.', 'Use inversion and cleft sentences sparingly, for rhetorical effect.', 'B2 means communicating with fluency, flexibility and nuance in complex situations.']
};
export default unit;
