import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'b1-u02', level: 'B1', unitNumber: 2, title: 'Professional Communication', subtitle: 'Use modal verbs in meetings, emails and workplace conversations',
  communicativeGoal: 'Comunicarse en situaciones profesionales: pedir permiso, dar consejos, explicar obligaciones y expresar posibilidad con el nivel de formalidad adecuado.',
  objectives: ['Usar modales para obligación, ausencia de obligación y prohibición.', 'Usar modales para consejo, posibilidad, deducción y permiso.', 'Escribir y responder correos profesionales con un tono apropiado.', 'Participar en una reunión: opinar, pedir aclaraciones y llegar a acuerdos.'],
  grammar: {
    title: 'Modal verbs for obligation, advice, possibility and permission',
    explanation: [
      'Obligación: must expresa una obligación fuerte, a menudo impuesta por quien habla o por una norma escrita (All staff must wear a badge). Have to expresa una obligación externa (We have to submit the report by Friday). No obligación: don’t have to / needn’t (You don’t have to attend). Prohibición: mustn’t / can’t (You mustn’t share confidential data).',
      'Consejo: should y ought to (You should talk to your manager), y had better para un consejo con advertencia de que algo malo puede pasar si no se sigue (You’d better confirm, or they may cancel). Para criticar o lamentar algo pasado se usa should have + participio: You should have told me earlier.',
      'Posibilidad: may, might y could expresan posibilidad en presente o futuro (The meeting might be postponed). Deducción: must be (casi seguro: He must be in a meeting) y can’t be (casi imposible: That can’t be right).',
      'Permiso: can (informal), could y may (más formal), y be allowed to (Are we allowed to work from home on Fridays?). Para peticiones muy corteses también se usan estructuras como Would you mind + -ing (Would you mind sending me the agenda?).',
      'Todos los modales van seguidos del verbo base sin to (excepto ought to y have to), no llevan -s en tercera persona, y forman negativos y preguntas sin auxiliar do.'
    ],
    forms: [
      { label: 'Obligation and prohibition', lines: ['All staff must wear an ID badge.', 'We have to submit the report by Friday.', 'You don’t have to attend; it’s optional.', 'Visitors mustn’t enter without permission.'] },
      { label: 'Advice, possibility, deduction', lines: ['You should talk to your manager.', 'You’d better confirm the date, or they may cancel.', 'The meeting might be postponed.', 'He must be in a meeting; his door is closed.', 'You should have told me earlier.'] },
      { label: 'Permission and polite requests', lines: ['May I take a few days off next week?', 'Are we allowed to work from home on Fridays?', 'Could you send me the agenda, please?', 'Would you mind checking this document?'] },
      { label: 'Useful expressions and collocations', lines: ['hold / chair / attend a meeting', 'take the minutes; set the agenda', 'meet / miss a deadline', 'reach an agreement; raise a concern', 'give constructive feedback', 'handle a complaint; ask for clarification', 'keep someone posted; follow up on an email', 'as soon as possible; at your earliest convenience'] }
    ]
  },
  vocabulary: [
    v('agenda', 'orden del día', '/əˈdʒendə/', 'a-GEN-da'), v('minutes', 'acta (de reunión)', '/ˈmɪnɪts/', 'MIN-utes'), v('attendee', 'asistente', '/ˌætenˈdiː/', 'at-ten-DEE'),
    v('proposal', 'propuesta', '/prəˈpəʊzl/', 'pro-PO-sal'), v('feedback', 'retroalimentación', '/ˈfiːdbæk/', 'FEED-back'), v('workload', 'carga de trabajo', '/ˈwɜːkləʊd/', 'WORK-load'),
    v('priority', 'prioridad', '/praɪˈɒrəti/', 'pri-OR-i-ty'), v('delegate', 'delegar', '/ˈdelɪɡeɪt/', 'DEL-e-gate'), v('budget', 'presupuesto', '/ˈbʌdʒɪt/', 'BUD-get'),
    v('stakeholder', 'parte interesada', '/ˈsteɪkhəʊldə/', 'STAKE-hold-er'), v('policy', 'política, normativa', '/ˈpɒləsi/', 'POL-i-cy'), v('confidential', 'confidencial', '/ˌkɒnfɪˈdenʃl/', 'con-fi-DEN-tial'),
    v('overtime', 'horas extra', '/ˈəʊvətaɪm/', 'O-ver-time'), v('performance', 'desempeño', '/pəˈfɔːməns/', 'per-FOR-mance'), v('promotion', 'ascenso', '/prəˈməʊʃn/', 'pro-MO-tion'),
    v('resign', 'renunciar', '/rɪˈzaɪn/', 're-SIGN'), v('commitment', 'compromiso', '/kəˈmɪtmənt/', 'com-MIT-ment'), v('flexible', 'flexible', '/ˈfleksəbl/', 'FLEX-i-ble'),
    v('approval', 'aprobación', '/əˈpruːvl/', 'ap-PRO-val'), v('briefing', 'reunión informativa', '/ˈbriːfɪŋ/', 'BRIEF-ing')
  ],
  examples: [
    { en: 'All employees must complete the safety course before they start working on site.', es: 'Todos los empleados deben completar el curso de seguridad antes de empezar a trabajar en la obra.' },
    { en: 'You don’t have to attend the briefing, but it might help you understand the new policy.', es: 'No tienes que asistir a la reunión informativa, pero podría ayudarte a entender la nueva política.' },
    { en: 'You’d better send the proposal today, or the stakeholders may choose another supplier.', es: 'Más te vale enviar la propuesta hoy, o los interesados podrían elegir otro proveedor.' },
    { en: 'Her door is closed and the lights are off; she must be in a meeting.', es: 'Su puerta está cerrada y las luces apagadas; debe de estar en una reunión.' },
    { en: 'That can’t be the final budget: it doesn’t include the cost of training.', es: 'Ese no puede ser el presupuesto final: no incluye el costo de la capacitación.' },
    { en: 'We should have asked for approval before changing the schedule.', es: 'Deberíamos haber pedido aprobación antes de cambiar el horario.' },
    { en: 'Would you mind sending me the minutes as soon as possible? I need them for tomorrow.', es: '¿Le importaría enviarme el acta lo antes posible? La necesito para mañana.' },
    { en: 'Employees aren’t allowed to share confidential information, even with colleagues from other departments.', es: 'Los empleados no pueden compartir información confidencial, ni siquiera con colegas de otros departamentos.' }
  ],
  dialogue: [
    { speaker: 'Priya', text: 'Do you have a minute, Tom? I’d like to talk about my workload.', es: '¿Tienes un minuto, Tom? Quisiera hablar de mi carga de trabajo.' },
    { speaker: 'Tom', text: 'Of course. Come in. What’s the problem?', es: 'Claro. Pasa. ¿Cuál es el problema?' },
    { speaker: 'Priya', text: 'I’m managing three projects at once, and I may not be able to meet the deadline for the budget report.', es: 'Estoy manejando tres proyectos a la vez y puede que no logre cumplir la fecha del informe de presupuesto.' },
    { speaker: 'Tom', text: 'I see. You should have told me earlier, but let’s focus on solutions. Which project is the most urgent?', es: 'Entiendo. Deberías habérmelo dicho antes, pero centrémonos en soluciones. ¿Cuál proyecto es el más urgente?' },
    { speaker: 'Priya', text: 'The client proposal. It must be ready by Thursday; the other two are more flexible.', es: 'La propuesta para el cliente. Debe estar lista el jueves; los otros dos son más flexibles.' },
    { speaker: 'Tom', text: 'Then you should prioritise the proposal. You could delegate the budget report to Daniel; he might have some free time.', es: 'Entonces deberías priorizar la propuesta. Podrías delegar el informe de presupuesto a Daniel; quizá tenga tiempo libre.' },
    { speaker: 'Priya', text: 'Would you mind asking him? I don’t want it to sound like an order.', es: '¿Te importaría pedírselo tú? No quiero que suene como una orden.' },
    { speaker: 'Tom', text: 'No problem. I’ll mention it at tomorrow’s briefing. By the way, you don’t have to work overtime this week.', es: 'Sin problema. Lo mencionaré en la reunión de mañana. Por cierto, no tienes que hacer horas extra esta semana.' },
    { speaker: 'Priya', text: 'Thanks. Am I allowed to work from home on Wednesday? I need to concentrate.', es: 'Gracias. ¿Puedo trabajar desde casa el miércoles? Necesito concentrarme.' },
    { speaker: 'Tom', text: 'You can, as long as you’re available by phone. Just confirm it by email so there’s a record.', es: 'Puedes, siempre que estés disponible por teléfono. Solo confírmalo por correo para que quede constancia.' },
    { speaker: 'Priya', text: 'Will do. Thank you for being so understanding.', es: 'Así lo haré. Gracias por ser tan comprensivo.' },
    { speaker: 'Tom', text: 'That’s what I’m here for. And remember: if you feel overloaded, tell me sooner next time.', es: 'Para eso estoy. Y recuerda: si te sientes sobrecargada, díselo antes a la próxima.' }
  ],
  listening: {
    script: [
      { speaker: 'HR', text: 'Hello everyone, this is a quick briefing about the new remote-work policy. From next month, employees may work from home up to two days a week, but you have to agree the days with your manager.' },
      { speaker: 'Employee', text: 'Do we need to ask for approval every week?' },
      { speaker: 'HR', text: 'No, you don’t have to. One approval per quarter is enough, unless your schedule changes.' },
      { speaker: 'Employee', text: 'What about client meetings?' },
      { speaker: 'HR', text: 'You must attend important client meetings in person, so you shouldn’t schedule them on remote days if possible.' },
      { speaker: 'Employee', text: 'Can we use our own laptops?' },
      { speaker: 'HR', text: 'You’re not allowed to use personal laptops for confidential documents. The company will provide one.' }
    ],
    questions: [
      mc('b1u02-l1', 'How many days a week may employees work from home?', ['Up to two', 'Exactly three', 'None'], 0, 'They may work from home up to two days a week.'),
      mc('b1u02-l2', 'How often is approval needed?', ['Once per quarter', 'Every week', 'Never'], 0, 'One approval per quarter is enough.'),
      mc('b1u02-l3', 'What must employees do about important client meetings?', ['Attend in person', 'Attend online', 'Skip them'], 0, 'They must attend important client meetings in person.'),
      tf('b1u02-l4', 'Employees can use personal laptops for confidential documents.', false, 'They are not allowed to.'),
      mc('b1u02-l5', 'What can be inferred about the policy?', ['It is flexible but has clear limits', 'It is very strict', 'It has no rules'], 0, 'It allows remote days but sets conditions (days agreed, in-person client meetings, company laptops).')
    ]
  },
  reading: {
    title: 'A difficult email',
    text: 'Subject: Delay in the delivery of the report. Dear Mr Alvarez, I am writing to let you know that we may not be able to deliver the report on Friday as agreed. Two members of the team have been ill, and we have had to redistribute their tasks. We should have informed you earlier, and I apologise for not doing so. We are doing everything we can to finish by Tuesday, although I cannot guarantee it at this stage. In the meantime, you are welcome to review the sections that are already complete. You don’t have to make any decision now, but if the delay creates problems for your schedule, please let me know so that we can look for an alternative. Thank you for your understanding. Kind regards, Laura Smith',
    questions: [
      rc('b1u02-r1', 'Why may the report be late?', ['Team members have been ill', 'The client changed the plan', 'The budget was cut'], 0, 'Two members of the team have been ill.'),
      rc('b1u02-r2', 'What does the writer admit?', ['They should have informed the client earlier', 'They made a mistake in the figures', 'They lost the document'], 0, 'She says: “We should have informed you earlier.”'),
      rc('b1u02-r3', 'What can be inferred about the writer’s tone?', ['Apologetic but professional', 'Angry and defensive', 'Casual and humorous'], 0, 'She apologises, offers options and uses formal language.'),
      rc('b1u02-r4', 'What is the client invited to do?', ['Review the completed sections', 'Cancel the contract', 'Pay in advance'], 0, 'The client is welcome to review the sections that are already complete.'),
      rc('b1u02-r5', 'How certain is the new delivery date?', ['Not guaranteed', 'Completely certain', 'Already cancelled'], 0, 'She says she cannot guarantee finishing by Tuesday.')
    ]
  },
  speaking: { prompt: 'Simula una reunión de 5 minutos con 2 o 3 compañeros: uno dirige (chair), otro toma notas y otro propone una idea. Usen modales para obligaciones, consejos y permisos.', tasks: ['Open the meeting and present the agenda: “Today we have to decide…”.', 'Give advice and make a suggestion with should, could and had better.', 'Ask for permission or clarification politely: “Would you mind…? May I…?”', 'Close the meeting by summarising who must do what and by when.'] },
  writing: { prompt: 'Write a formal email (120 to 150 words) to your manager asking for permission to work from home one day a week. Explain your reasons, offer a solution to possible problems and use at least five different modal expressions.', rubric: ['Appropriate subject line, greeting and closing for a formal email.', 'At least five correct modal expressions (may, could, would you mind, should, must…).', 'Clear reasons and a proposal that anticipates objections.', 'Polite and professional tone throughout.'], model: 'Dear Ms Walker, I would like to ask whether I may work from home on Wednesdays. I think this arrangement could help me concentrate on the budget report, which must be ready by the end of the month. I would be available by phone and email, and I could attend any urgent meeting in person if necessary. If you think this might cause problems for the team, I am happy to discuss alternatives. Would you mind letting me know your decision by Friday? Thank you for considering my request. Kind regards, Camila Torres' },
  pronunciation: {
    items: [{ word: 'agenda', ipa: '/əˈdʒendə/', stress: 'a-GEN-da' }, { word: 'confidential', ipa: '/ˌkɒnfɪˈdenʃl/', stress: 'con-fi-DEN-tial' }, { word: 'priority', ipa: '/praɪˈɒrəti/', stress: 'pri-OR-i-ty' }, { word: 'stakeholder', ipa: '/ˈsteɪkhəʊldə/', stress: 'STAKE-hold-er' }, { word: 'commitment', ipa: '/kəˈmɪtmənt/', stress: 'com-MIT-ment' }],
    tips: ['Should have se pronuncia /ʃʊd əv/ (“shouldav”): no se oye have completo.', 'Mustn’t suena /ˈmʌsnt/ (la primera t no se pronuncia).', 'En peticiones corteses la entonación sube al final: Would you mind checking this?']
  },
  exercises: [
    mc('b1u02-e1', 'Employees ___ wear a badge at all times. It is company policy.', ['have to', 'might', 'could'], 0, 'Rule imposed by the company → have to / must.', 'Choose the best modal.'),
    fb('b1u02-e2', 'You ___ come to the meeting. It’s optional.', 'don’t have to', 'No obligation.', ['do not have to', 'needn’t', 'need not'], 'Write the missing words.'),
    fb('b1u02-e3', 'You ___ have told me earlier! Now it’s too late.', 'should', 'Criticism about the past: should have + participle.', ['ought to'], 'Write the missing word.'),
    wo('b1u02-e4', ['you', 'Would', 'sending', 'mind', 'agenda', 'the', 'me'], ['Would', 'you', 'mind', 'sending', 'me', 'the', 'agenda'], 'Would you mind + -ing…?'),
    tf('b1u02-e5', '“Mustn’t” and “don’t have to” have the same meaning.', false, 'Mustn’t = prohibited; don’t have to = not necessary.'),
    mt('b1u02-e6', 'Match each modal expression with its function.', [['must', 'strong obligation'], ['should', 'advice'], ['might', 'possibility'], ['be allowed to', 'permission']], 'Think of the function first.'),
    tr('b1u02-e7', 'Rewrite using don’t have to.', 'Attendance is not necessary.', 'You don’t have to attend', 'don’t have to + verb.', ['You do not have to attend', 'You needn’t attend', 'You need not attend']),
    tr('b1u02-e8', 'Rewrite using can’t (deduction).', 'It is impossible that it is a mistake.', 'It can’t be a mistake', 'can’t be = I am sure it isn’t.', ['It cannot be a mistake']),
    rc('b1u02-e9', 'What can be inferred from the text?', ['Approval is not guaranteed', 'The proposal was rejected', 'The budget is unlimited'], 0, 'Might + condition shows the outcome is uncertain.', 'The manager said that the proposal might be approved, but only if the budget is reduced.'),
    sa('b1u02-e10', 'Write a short email (5 to 6 sentences) asking your manager for permission to leave early on Friday, with at least three modal expressions.', 'Model: “Dear Ms Walker, may I leave at two o’clock on Friday? I have a medical appointment. I could finish my tasks in the morning, and I would be available by phone. Would you mind letting me know? Thank you.” Check: polite modals, a reason and an offer.')
  ],
  assessment: [
    mc('b1u02-t1', 'Visitors ___ enter the laboratory without permission.', ['mustn’t', 'don’t have to', 'needn’t to'], 0, 'Prohibition → mustn’t.'),
    mc('b1u02-t2', 'You ___ talk to your manager before you decide.', ['should', 'can’t', 'mustn’t'], 0, 'Advice → should.'),
    fb('b1u02-t3', 'I ___ be late, so don’t wait for me. (possibility)', 'might', 'Possibility → might / may / could.', ['may', 'could'], 'Write a modal verb.'),
    fb('b1u02-t4', 'Are we ___ to take photos in the office?', 'allowed', 'be allowed to = permission.', undefined, 'Write the missing word.'),
    tf('b1u02-t5', '“Had better” gives strong advice with a warning.', true, 'You’d better hurry, or you’ll miss it.'),
    tf('b1u02-t6', '“You needn’t” means the same as “You mustn’t”.', false, 'Needn’t = not necessary; mustn’t = prohibited.'),
    wo('b1u02-t7', ['I', 'May', 'tomorrow', 'take', 'day', 'off', 'a'], ['May', 'I', 'take', 'a', 'day', 'off', 'tomorrow'], 'May I + verb…? is a formal request for permission.'),
    mc('b1u02-t8', 'Choose the most polite request.', ['Would you mind checking this?', 'Check this.', 'You have to check this.'], 0, 'Would you mind + -ing is very polite.'),
    tr('b1u02-t9', 'Express regret with should have.', 'I regret not calling the client.', 'I should have called the client', 'should have + participle.', ['I should have phoned the client']),
    mc('b1u02-t10', 'Which sentence shows the speaker is almost certain?', ['He must be in a meeting.', 'He might be in a meeting.', 'He could be in a meeting.'], 0, 'Must be = deduction with high certainty.')
  ],
  review: ['must / have to = obligation; mustn’t = prohibition; don’t have to / needn’t = not necessary.', 'should / ought to / had better = advice; should have + participle = regret or criticism.', 'may / might / could = possibility; must be / can’t be = deduction.', 'can / could / may / be allowed to = permission; Would you mind + -ing = polite request.', 'Formal email: clear subject, polite tone, reason, offer, closing.']
};
export default unit;
