import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'b2-u02', level: 'B2', unitNumber: 2, title: 'Career and Leadership', subtitle: 'Lead, negotiate and give critical feedback with tact',
  communicativeGoal: 'Ejercer y analizar el liderazgo: negociar, dar retroalimentación crítica con diplomacia, especular sobre causas y asumir responsabilidades, con el registro adecuado.',
  objectives: ['Usar modales de deducción en presente y pasado (must have, can’t have, might have).', 'Expresar obligación, expectativa y crítica (be supposed to, needn’t have, should have, could have).', 'Dar retroalimentación crítica de forma diplomática y constructiva.', 'Analizar situaciones de liderazgo, conflicto y negociación.'],
  grammar: {
    title: 'Modal verbs of deduction, obligation and criticism',
    explanation: [
      'Deducción en el presente: must be (estoy casi seguro de que es), can’t be (estoy casi seguro de que no es), might / may / could be (es posible). Con acción en curso: He must be working; she can’t be sleeping at this hour. Cuanto más segura es la deducción, más fuerte es el modal: must / can’t > may / might / could.',
      'Deducción en el pasado: must have + participio (casi seguro que ocurrió), can’t / couldn’t have + participio (casi seguro que no ocurrió), might / may / could have + participio (es posible que ocurriera). Para procesos largos: They must have been negotiating all night. Atención: no se usa mustn’t have para deducir.',
      'Obligación y expectativa: must (la impone quien habla o una norma), have to (obligación externa), be required / obliged to (formal), be supposed to (se espera que, aunque a menudo no se cumple: You’re supposed to inform HR). Ausencia de obligación: needn’t / don’t have to. Diferencia clave: needn’t have + participio (lo hiciste y no hacía falta) frente a didn’t need to (no hacía falta; no sabemos si se hizo).',
      'Crítica y arrepentimiento: should / ought to have + participio (era lo correcto y no se hizo), shouldn’t have + participio (se hizo algo que no convenía), could have + participio (había una posibilidad que no se aprovechó), might have + participio (crítica suave, a veces irritada: You might have warned me!).',
      'Registro y tono: la crítica directa (You should have consulted us) suena más fuerte que la que incluye a quien habla o suaviza (With hindsight, we could have involved the team earlier; I’m afraid that wasn’t quite what we agreed). En liderazgo, un buen feedback separa el hecho de la persona, ofrece alternativas y evita absolutos.'
    ],
    forms: [
      { label: 'Deduction', lines: ['He must be in a meeting; his door is closed.', 'That can’t be right; the figures don’t add up.', 'She might have forgotten; she was under a lot of pressure.', 'They must have been negotiating all night.'] },
      { label: 'Obligation and expectation', lines: ['Managers are required to file a report by Friday.', 'You’re supposed to inform HR before hiring anyone.', 'You needn’t have stayed; we had already finished.', 'You don’t have to attend, but it would be wise to.'] },
      { label: 'Criticism and regret', lines: ['You should have consulted the team first.', 'We could have avoided the conflict.', 'You might have warned me!', 'With hindsight, we shouldn’t have promised a fixed date.'] },
      { label: 'Useful expressions and collocations', lines: ['lead by example; set the tone', 'build rapport; manage expectations', 'break a deadlock; reach an agreement', 'take ownership; hold someone accountable', 'see eye to eye; back someone up', 'read the room; give constructive feedback', 'escalate an issue; delegate responsibility', 'with hindsight; take the blame'] }
    ]
  },
  vocabulary: [
    v('accountable', 'responsable ante alguien', '/əˈkaʊntəbl/', 'ac-COUNT-a-ble'), v('empower', 'dar autonomía, facultar', '/ɪmˈpaʊə/', 'em-POW-er'), v('micromanage', 'microgestionar, controlar en exceso', '/ˈmaɪkrəʊˌmænɪdʒ/', 'MI-cro-man-age'),
    v('mediate', 'mediar', '/ˈmiːdieɪt/', 'ME-di-ate'), v('negotiate', 'negociar', '/nɪˈɡəʊʃieɪt/', 'ne-GO-ti-ate'), v('leverage', 'influencia; aprovechar', '/ˈliːvərɪdʒ/', 'LE-ver-age'),
    v('bottleneck', 'cuello de botella', '/ˈbɒtlnek/', 'BOT-tle-neck'), v('buy-in', 'apoyo, aceptación', '/ˈbaɪ ɪn/', 'BUY-in'), v('escalate', 'escalar, agravar', '/ˈeskəleɪt/', 'ES-ca-late'),
    v('mandate', 'mandato', '/ˈmændeɪt/', 'MAN-date'), v('hierarchy', 'jerarquía', '/ˈhaɪərɑːki/', 'HI-er-ar-chy'), v('inclusive', 'inclusivo', '/ɪnˈkluːsɪv/', 'in-CLU-sive'),
    v('rapport', 'buena relación', '/ræˈpɔː/', 'ra-PORT'), v('assertive', 'asertivo', '/əˈsɜːtɪv/', 'as-SER-tive'), v('tactful', 'diplomático, con tacto', '/ˈtæktfl/', 'TACT-ful'),
    v('deadlock', 'punto muerto', '/ˈdedlɒk/', 'DEAD-lock'), v('onboarding', 'incorporación de personal', '/ˈɒnbɔːdɪŋ/', 'ON-board-ing'), v('turnover', 'rotación de personal', '/ˈtɜːnəʊvə/', 'TURN-o-ver'),
    v('reprimand', 'reprender; reprimenda', '/ˈreprɪmɑːnd/', 'REP-ri-mand'), v('oversight', 'supervisión; descuido', '/ˈəʊvəsaɪt/', 'O-ver-sight'), v('ultimatum', 'ultimátum', '/ˌʌltɪˈmeɪtəm/', 'ul-ti-MA-tum'),
    v('impartial', 'imparcial', '/ɪmˈpɑːʃl/', 'im-PAR-tial')
  ],
  examples: [
    { en: 'The supplier must have known about the shortage for weeks; they can’t have been surprised.', es: 'El proveedor debe de haber sabido de la escasez desde hacía semanas; no pueden haberse sorprendido.' },
    { en: 'She might have been reluctant to escalate the issue for fear of damaging the relationship.', es: 'Es posible que ella dudara en escalar el problema por miedo a dañar la relación.' },
    { en: 'Team leaders are supposed to flag risks early, but in practice few of them do.', es: 'Se supone que los líderes de equipo deben señalar los riesgos pronto, pero en la práctica pocos lo hacen.' },
    { en: 'You needn’t have promised a fixed date; a range would have been far safer.', es: 'No hacía falta que prometieras una fecha fija; un rango habría sido mucho más seguro.' },
    { en: 'We could have avoided the deadlock if we had involved the unions from the start.', es: 'Podríamos haber evitado el punto muerto si hubiéramos involucrado a los sindicatos desde el principio.' },
    { en: 'You might have told me that the client was unhappy before the meeting!', es: '¡Podrías haberme dicho que el cliente estaba descontento antes de la reunión!' },
    { en: 'With hindsight, we shouldn’t have restructured the department during peak season.', es: 'Con la perspectiva actual, no deberíamos haber reestructurado el departamento en plena temporada alta.' },
    { en: 'An impartial mediator may be able to break the deadlock where the parties themselves could not.', es: 'Un mediador imparcial quizá logre romper el punto muerto donde las partes no pudieron.' }
  ],
  dialogue: [
    { speaker: 'Helena', text: 'Tom, I’d like to understand what happened with the Brazilian launch. The client must have been furious.', es: 'Tom, quisiera entender qué pasó con el lanzamiento en Brasil. El cliente debe de haber estado furioso.' },
    { speaker: 'Tom', text: 'They were, and rightly so. I should have escalated the delay as soon as we noticed it.', es: 'Lo estaba, y con razón. Debí escalar el retraso en cuanto lo notamos.' },
    { speaker: 'Helena', text: 'It can’t have been easy to admit that to the team. Why didn’t you?', es: 'No debió de ser fácil admitirlo ante el equipo. ¿Por qué no lo hiciste?' },
    { speaker: 'Tom', text: 'I assumed we could catch up. In hindsight, I might have been overly optimistic, and I didn’t want to alarm anyone.', es: 'Supuse que podríamos recuperarnos. Visto ahora, quizá fui demasiado optimista y no quería alarmar a nadie.' },
    { speaker: 'Helena', text: 'That’s understandable, but you’re supposed to flag risks early; that’s part of the role.', es: 'Es comprensible, pero se supone que debes señalar los riesgos pronto; eso forma parte del cargo.' },
    { speaker: 'Tom', text: 'I know. And I needn’t have promised the client a fixed date either; I should have offered a range.', es: 'Lo sé. Y tampoco hacía falta prometer una fecha fija al cliente; debí ofrecer un rango.' },
    { speaker: 'Helena', text: 'Agreed. Still, let’s not forget that the supplier could have warned us too. They must have known about the shortage for weeks.', es: 'De acuerdo. Aun así, no olvidemos que el proveedor también pudo avisarnos. Deben de haber sabido de la escasez desde hacía semanas.' },
    { speaker: 'Tom', text: 'That’s a fair point. I could have included a clearer clause in the contract.', es: 'Es un buen punto. Pude haber incluido una cláusula más clara en el contrato.' },
    { speaker: 'Helena', text: 'Which is something we can fix. What would you do differently?', es: 'Eso es algo que podemos corregir. ¿Qué harías de otra manera?' },
    { speaker: 'Tom', text: 'I’d set up weekly check-ins, and I’d make every team member accountable for a specific deliverable.', es: 'Organizaría revisiones semanales y haría que cada miembro del equipo fuera responsable de un entregable concreto.' },
    { speaker: 'Helena', text: 'Good. I’ll back that proposal at the next board meeting, but I expect you to present it yourself.', es: 'Bien. Respaldaré esa propuesta en la próxima junta, pero espero que la presentes tú mismo.' },
    { speaker: 'Tom', text: 'Of course. Thank you for giving me the chance to put it right.', es: 'Por supuesto. Gracias por darme la oportunidad de corregirlo.' }
  ],
  listening: {
    script: [
      { speaker: 'Host', text: 'You’ve led three companies. What’s the biggest leadership mistake you’ve made?' },
      { speaker: 'CEO', text: 'Micromanaging. In my first role I thought I had to check everything personally. In hindsight, I should have trusted my team much earlier.' },
      { speaker: 'Host', text: 'What changed?' },
      { speaker: 'CEO', text: 'A colleague told me, quite bluntly, that I was the bottleneck. She might have softened it, but she didn’t, and I’m grateful.' },
      { speaker: 'Host', text: 'How do you handle conflict now?' },
      { speaker: 'CEO', text: 'I don’t assume I know the whole story. If two people are in a deadlock, there must be something each of them values that the other is overlooking, so I try to mediate before anyone escalates.' },
      { speaker: 'Host', text: 'Any advice for new managers?' },
      { speaker: 'CEO', text: 'Be tactful, but don’t confuse tact with avoiding difficult conversations. People can’t improve if nobody tells them what they could have done better.' }
    ],
    questions: [
      mc('b2u02-l1', 'What was the CEO’s biggest mistake?', ['Micromanaging', 'Ignoring clients', 'Hiring too quickly'], 0, 'He says: “Micromanaging.”'),
      mc('b2u02-l2', 'What did the colleague tell him?', ['That he was the bottleneck', 'That he was too generous', 'That he was always late'], 0, 'She told him bluntly that he was the bottleneck.'),
      mc('b2u02-l3', 'How does he approach conflict now?', ['He tries to understand what each side values and mediates early', 'He assigns blame at once', 'He avoids it'], 0, 'He mediates before anyone escalates.'),
      tf('b2u02-l4', 'He believes that tact means avoiding difficult conversations.', false, 'He warns against confusing tact with avoidance.'),
      mc('b2u02-l5', 'How does the CEO feel about the colleague’s blunt feedback?', ['Grateful', 'Resentful', 'Indifferent'], 0, 'He says: “and I’m grateful.”')
    ]
  },
  reading: {
    title: 'The paradox of the visible leader',
    text: 'It is often assumed that the best leaders are the most visible: those who chair every meeting, answer every email and appear at every event. Yet a growing body of research suggests that excessive visibility may be counter-productive. Managers who are constantly present can unintentionally discourage initiative; employees, assuming that the leader will intervene, may wait for approval rather than act. This phenomenon, sometimes described as “learned helplessness” in organisations, is particularly common in hierarchical cultures, where challenging a superior is considered inappropriate. By contrast, leaders who deliberately step back, defining goals but letting teams decide how to reach them, tend to build greater accountability. Of course, stepping back should not be confused with disappearing. The leaders who succeed are typically those who are available when needed, yet restrained enough to let others fail occasionally and learn from it. Several executives interviewed for the study admitted that they should have delegated sooner, and that they might have retained more talented staff had they given them real responsibility. The challenge, then, is not how much a leader does, but what the leader chooses not to do.',
    questions: [
      rc('b2u02-r1', 'What common assumption does the text challenge?', ['The best leaders are the most visible', 'Leaders should delegate', 'Hierarchies are useful'], 0, 'It challenges the idea that visibility equals good leadership.'),
      rc('b2u02-r2', 'Why can constant presence discourage initiative?', ['Employees wait for the leader’s approval', 'Employees dislike meetings', 'Leaders make mistakes'], 0, 'Employees may wait for approval rather than act.'),
      rc('b2u02-r3', 'What does the writer say about stepping back?', ['It builds accountability but is not the same as disappearing', 'It always reduces productivity', 'It is only for small teams'], 0, 'Leaders should be available when needed yet restrained.'),
      rc('b2u02-r4', 'What do the executives admit?', ['They should have delegated sooner', 'They never delegate', 'They enjoy micromanaging'], 0, 'They admit they should have delegated sooner.'),
      rc('b2u02-r5', 'What is the main message of the text?', ['Effective leadership involves choosing what not to do', 'Leaders must always be visible', 'Leaders should avoid setting goals'], 0, 'The final sentence states it.')
    ]
  },
  speaking: { prompt: 'Simulación de una reunión de análisis posterior a un proyecto fallido (5 a 6 minutos). Un compañero es el director, otro el líder del proyecto y un tercero el proveedor. Cada uno defiende su versión, hace deducciones sobre lo que pasó y propone cambios.', tasks: ['Speculate about causes with must have, can’t have and might have.', 'Take responsibility diplomatically (“With hindsight, I should have…”) and criticise others tactfully.', 'Explain what was expected with supposed to / required to, and what wasn’t necessary with needn’t have.', 'Close by agreeing on concrete changes and who will be accountable for each.'] },
  writing: { prompt: 'Write a post-project review (220 to 260 words) addressed to senior management about a project that did not meet its objectives. Analyse the probable causes (deduction), identify what should have been done differently (criticism), explain obligations that were not met, and propose specific measures in a diplomatic tone.', rubric: ['Uses modals of deduction and criticism in the past correctly and with appropriate strength.', 'Uses be supposed to / required to / needn’t have appropriately.', 'Tone is diplomatic and constructive, not accusatory.', 'Clear structure: summary, analysis, lessons learned and recommendations.'], model: 'Summary. The launch was delayed by six weeks and the client expressed serious concerns. Analysis. The delay must have started during the design phase, when two key approvals were postponed; the supplier’s warnings can’t have reached the project team, since no one escalated them. Lessons learned. In hindsight, we should have appointed a single person accountable for risk and we could have avoided much of the disruption by holding weekly check-ins. We also needn’t have committed to a fixed date, as the contract allowed a range. Recommendations. Project leads are supposed to flag risks at the first sign of delay; we propose to make this a formal requirement, supported by a simple escalation protocol. I believe this will help us act earlier next time.' },
  pronunciation: {
    items: [{ word: 'accountable', ipa: '/əˈkaʊntəbl/', stress: 'ac-COUNT-a-ble' }, { word: 'hierarchy', ipa: '/ˈhaɪərɑːki/', stress: 'HI-er-ar-chy' }, { word: 'rapport', ipa: '/ræˈpɔː/', stress: 'ra-PORT' }, { word: 'ultimatum', ipa: '/ˌʌltɪˈmeɪtəm/', stress: 'ul-ti-MA-tum' }, { word: 'impartial', ipa: '/ɪmˈpɑːʃl/', stress: 'im-PAR-tial' }],
    tips: ['Must have, should have y could have suenan /məst əv/, /ʃʊd əv/, /kʊd əv/: have se reduce a /əv/ y no se oye completo.', 'En la deducción, el modal lleva la fuerza: He MUST have been angry. En la crítica, la fuerza va en el participio o en have: You should HAVE told me.', 'Rapport es una palabra francesa: la p y la t finales no se pronuncian: /ræˈpɔː/.']
  },
  exercises: [
    mc('b2u02-e1', 'The lights are on. They ___ still be in the office.', ['must', 'should have', 'needn’t'], 0, 'Present deduction (very likely) → must be.', 'Choose the best modal.'),
    fb('b2u02-e2', 'He ___ have seen the email; he was on holiday all week.', 'can’t', 'Almost certain that it did not happen → can’t have.', ['cannot', 'couldn’t'], 'Write the missing word.'),
    fb('b2u02-e3', 'We ___ have avoided this problem if we had consulted the team.', 'could', 'could have + participle = missed possibility.', undefined, 'Write the missing word.'),
    wo('b2u02-e4', ['must', 'They', 'negotiating', 'been', 'have', 'night', 'all'], ['They', 'must', 'have', 'been', 'negotiating', 'all', 'night'], 'must have been + -ing.'),
    tf('b2u02-e5', '“You needn’t have come” means that you came and it wasn’t necessary.', true, 'needn’t have + participle = done unnecessarily.'),
    mt('b2u02-e6', 'Match each structure with its meaning.', [['must have + participle', 'strong deduction about the past'], ['might have + participle', 'possible past event'], ['should have + participle', 'criticism or regret'], ['be supposed to', 'expected duty (often not met)']], 'Think of certainty, possibility and judgement.'),
    tr('b2u02-e7', 'Rewrite with a modal of deduction.', 'I’m sure she forgot the meeting.', 'She must have forgotten the meeting', 'must have + participle.'),
    tr('b2u02-e8', 'Rewrite as criticism with “should have”.', 'You didn’t consult the team.', 'You should have consulted the team', 'should have + participle.', ['You ought to have consulted the team']),
    rc('b2u02-e9', 'What can be inferred?', ['Communication failed during the reorganisation', 'The team ignored the instructions', 'The director forgot the deadline'], 0, 'Nobody had received instructions; the message was probably lost.', 'The new director insisted that the team was supposed to deliver the proposal on Monday, yet nobody had received instructions. It seems the message must have been lost in the reorganisation.'),
    sa('b2u02-e10', 'Write a diplomatic paragraph (5 to 6 sentences) giving critical feedback on a failed project. Use at least three modals of deduction or criticism in the past.', 'Model: “The delay must have started in the planning phase. With hindsight, we could have involved the client earlier, and we shouldn’t have promised a fixed date. The supplier might have warned us sooner, but we also should have asked.” Check: tone, strength of each modal and constructive proposals.')
  ],
  assessment: [
    mc('b2u02-t1', 'She didn’t answer the phone. She ___ in a meeting.', ['may have been', 'should have been', 'needn’t have been'], 0, 'Possibility about the past → may have been.'),
    mc('b2u02-t2', 'You ___ have worried. Everything went fine.', ['needn’t', 'mustn’t', 'oughtn’t'], 0, 'needn’t have + participle = unnecessary action.'),
    fb('b2u02-t3', 'That ___ be the right figure; the total doesn’t add up.', 'can’t', 'Strong negative deduction → can’t be.', ['cannot'], 'Write the missing word.'),
    fb('b2u02-t4', 'We were ___ to submit the form by Friday. (expected)', 'supposed', 'be supposed to = expected.', undefined, 'Write the missing word.'),
    tf('b2u02-t5', '“Should have + participle” can express criticism of a past action.', true, 'You should have consulted us.'),
    tf('b2u02-t6', '“Can’t have + participle” expresses a strong deduction that something did NOT happen.', true, 'He can’t have seen it.'),
    wo('b2u02-t7', ['warned', 'might', 'You', 'have', 'me'], ['You', 'might', 'have', 'warned', 'me'], 'A mildly irritated criticism.'),
    mc('b2u02-t8', 'Which sentence is the most diplomatic way to criticise a decision?', ['With hindsight, we could have involved the team earlier.', 'You messed up.', 'That was a stupid decision.'], 0, 'It softens the criticism and includes the speaker.'),
    tr('b2u02-t9', 'Rewrite with a modal of deduction.', 'I’m sure they received the invitation.', 'They must have received the invitation', 'must have + participle.'),
    mc('b2u02-t10', 'Which sentence implies that the action was done but wasn’t necessary?', ['You needn’t have called.', 'You didn’t need to call.', 'You shouldn’t call.'], 0, 'needn’t have + participle implies it was done.')
  ],
  review: ['Deduction: must be / can’t be / might be (present); must have / can’t have / might have + participle (past).', 'Obligation and expectation: must, have to, be required to, be supposed to; no obligation: needn’t, don’t have to; needn’t have = done unnecessarily.', 'Criticism and regret: should have, ought to have, could have, might have, shouldn’t have.', 'Diplomatic feedback: include yourself (we could have…), describe facts, offer alternatives.', 'Leadership language: accountable, delegate, escalate, mediate, build rapport, hold someone accountable.']
};
export default unit;
