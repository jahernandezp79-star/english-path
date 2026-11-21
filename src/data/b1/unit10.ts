import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'b1-u10', level: 'B1', unitNumber: 10, title: 'Real-Life Communication', subtitle: 'Put everything together in everyday and professional situations',
  communicativeGoal: 'Participar con soltura en conversaciones cotidianas y profesionales: aclarar, resumir, interrumpir con cortesía y resolver malentendidos usando todo lo aprendido en B1.',
  objectives: ['Elegir la estructura adecuada (tiempo verbal, voz pasiva, condicional, estilo indirecto, relativo) según lo que quieres comunicar.', 'Gestionar una conversación: aclarar, resumir, interrumpir y reformular.', 'Resolver malentendidos y problemas en un contexto profesional.', 'Producir mensajes claros, coherentes y con el tono apropiado.'],
  grammar: {
    title: 'B1 integrated review: choosing the right structure',
    explanation: [
      'Narrar y contar lo que pasó: usa el Past Simple para los hechos principales, el Past Continuous para el escenario y el Past Perfect para lo que ocurrió antes (When I arrived, the meeting had already started). Para contar lo que otros dijeron, usa el estilo indirecto con retroceso de tiempos (She said she would send it; he asked if I had read it).',
      'Opinar y argumentar: conecta ideas con because, although, however, therefore y despite. Para obligación, consejo y permiso usa modales: must, have to, should, may, could. Para consecuencias y situaciones hipotéticas usa los condicionales: If you hurry, you’ll catch it (primero); If I were you, I’d ask (segundo).',
      'Describir e identificar: usa oraciones de relativo (a colleague who works in finance; the report, which was sent yesterday, …) y la voz pasiva cuando importa la acción y no quién la hizo (The deadline has been moved).',
      'Metas y planes: gerundio e infinitivo (I plan to apply; I’m interested in joining), will para decisiones y promesas, going to para planes y el Present Continuous para citas fijas. Para gestionar la conversación: Sorry to interrupt, but…; Could you clarify…?; Let me summarise…; What I mean is…',
      'Antes de hablar o escribir, pregúntate: ¿es un hecho pasado, una opinión, una condición o algo que dijo otra persona? Esa pregunta te ayuda a elegir la estructura correcta en pocos segundos.'
    ],
    forms: [
      { label: 'Choosing a tense or structure', lines: ['Main events: I called the client. Background: She was working. Earlier: He had already left.', 'Reported: He said he had finished. / She asked if I could help.', 'Passive: The date has been brought forward.', 'Conditionals: If we hire a freelancer, we could finish on time.'] },
      { label: 'Connecting ideas', lines: ['Although it was late, we kept working.', 'The deadline is tight; therefore, we need extra help.', 'Despite the problems, the launch was a success.', 'He was late because he had missed the train.'] },
      { label: 'Managing a conversation', lines: ['Sorry to interrupt, but could I clarify something?', 'Could you repeat that, please?', 'Let me summarise what we have agreed.', 'What I mean is that we need more time.'] },
      { label: 'Useful expressions and phrasal verbs', lines: ['bring up a topic; point out a problem', 'sort out a misunderstanding; come up with an idea', 'set up a meeting; put forward a proposal', 'follow up on an email; run into a problem', 'back out of a deal; carry on working', 'reach out to someone; get your message across', 'make small talk; clarify what you mean', 'jump to conclusions'] }
    ]
  },
  vocabulary: [
    v('clarify', 'aclarar', '/ˈklærɪfaɪ/', 'CLA-ri-fy'), v('summarise', 'resumir', '/ˈsʌməraɪz/', 'SUM-ma-rise'), v('interrupt', 'interrumpir', '/ˌɪntəˈrʌpt/', 'in-ter-RUPT'),
    v('rephrase', 'reformular', '/riːˈfreɪz/', 're-PHRASE'), v('misunderstanding', 'malentendido', '/ˌmɪsʌndəˈstændɪŋ/', 'mis-un-der-STAND-ing'), v('small talk', 'conversación trivial', '/smɔːl tɔːk/', 'SMALL talk'),
    v('brainstorm', 'hacer una lluvia de ideas', '/ˈbreɪnstɔːm/', 'BRAIN-storm'), v('outline', 'esbozar; esquema', '/ˈaʊtlaɪn/', 'OUT-line'), v('bring up', 'sacar un tema', '/brɪŋ ʌp/', 'bring UP'),
    v('point out', 'señalar', '/pɔɪnt aʊt/', 'point OUT'), v('sort out', 'resolver, arreglar', '/sɔːt aʊt/', 'sort OUT'), v('come up with', 'ocurrírsele, proponer', '/kʌm ʌp wɪð/', 'come UP with'),
    v('set up', 'organizar, establecer', '/set ʌp/', 'set UP'), v('put forward', 'proponer', '/pʊt ˈfɔːwəd/', 'put FOR-ward'), v('follow up', 'dar seguimiento', '/ˈfɒləʊ ʌp/', 'fol-low UP'),
    v('run into', 'toparse con', '/rʌn ˈɪntuː/', 'run IN-to'), v('back out', 'echarse atrás', '/bæk aʊt/', 'back OUT'), v('reach out', 'contactar', '/riːtʃ aʊt/', 'reach OUT'),
    v('carry on', 'continuar', '/ˈkæri ɒn/', 'CAR-ry ON'), v('get your message across', 'hacerte entender', '/ɡet jɔː ˈmesɪdʒ əˈkrɒs/', 'get your MES-sage a-CROSS')
  ],
  examples: [
    { en: 'Sorry to interrupt, but could I clarify something? I thought the launch had been moved to March.', es: 'Perdón por interrumpir, pero ¿podría aclarar algo? Pensé que el lanzamiento se había movido a marzo.' },
    { en: 'If I had known earlier, I would have prepared the materials, but nobody told me.', es: 'Si lo hubiera sabido antes, habría preparado los materiales, pero nadie me lo dijo.' },
    { en: 'He said that the date had been brought forward and that we had to send the design by the 15th.', es: 'Dijo que la fecha se había adelantado y que teníamos que enviar el diseño antes del 15.' },
    { en: 'Although the budget hasn’t changed, we won’t meet the deadline unless we get extra help.', es: 'Aunque el presupuesto no ha cambiado, no cumpliremos el plazo a menos que recibamos ayuda extra.' },
    { en: 'The colleague who suggested the freelancer said that she had worked with her before.', es: 'La colega que sugirió a la freelance dijo que había trabajado con ella antes.' },
    { en: 'Could you summarise what has changed so that I can update my team?', es: '¿Podrías resumir lo que ha cambiado para que pueda poner al día a mi equipo?' },
    { en: 'I’m planning to follow up with an email this afternoon, in case anyone missed the call.', es: 'Pienso dar seguimiento con un correo esta tarde, por si alguien no pudo asistir a la llamada.' },
    { en: 'Don’t jump to conclusions; it may simply be a misunderstanding.', es: 'No saques conclusiones precipitadas; puede ser simplemente un malentendido.' }
  ],
  dialogue: [
    { speaker: 'Alba', text: 'Sorry to interrupt, but could I just clarify something? I thought the launch had been moved to March.', es: 'Perdón por interrumpir, pero ¿puedo aclarar algo? Pensé que el lanzamiento se había movido a marzo.' },
    { speaker: 'Ben', text: 'It was, but the client asked us on Monday to bring it forward to February.', es: 'Así era, pero el cliente nos pidió el lunes que lo adelantáramos a febrero.' },
    { speaker: 'Alba', text: 'Nobody told me. If I had known, I would have prepared the materials earlier.', es: 'Nadie me lo dijo. Si lo hubiera sabido, habría preparado los materiales antes.' },
    { speaker: 'Ben', text: 'That’s my fault. I assumed the email had been sent to everyone. Let me sort it out right now.', es: 'Es culpa mía. Supuse que el correo se había enviado a todos. Déjame arreglarlo ahora mismo.' },
    { speaker: 'Alba', text: 'Thanks. Could you summarise what has changed so that I can update my team?', es: 'Gracias. ¿Podrías resumir qué ha cambiado para que pueda poner al día a mi equipo?' },
    { speaker: 'Ben', text: 'Of course. The date has been brought forward, the budget hasn’t changed, and we have to send the final design by the 15th.', es: 'Claro. La fecha se ha adelantado, el presupuesto no ha cambiado y tenemos que enviar el diseño final antes del 15.' },
    { speaker: 'Alba', text: 'The 15th? That’s only two weeks away. Unless we get extra help, we won’t meet the deadline.', es: '¿El 15? Faltan solo dos semanas. A menos que recibamos ayuda extra, no cumpliremos el plazo.' },
    { speaker: 'Ben', text: 'I know. That’s why I’m putting forward a proposal: if we hire a freelancer, we could finish on time.', es: 'Lo sé. Por eso estoy proponiendo algo: si contratamos a una freelance, podríamos terminar a tiempo.' },
    { speaker: 'Alba', text: 'Who suggested that?', es: '¿Quién lo sugirió?' },
    { speaker: 'Ben', text: 'Marta did. She said she had worked with someone who might be available.', es: 'Marta. Dijo que había trabajado con alguien que quizá esté disponible.' },
    { speaker: 'Alba', text: 'OK. Let’s set up a call with her tomorrow, and I’ll follow up with an email this afternoon.', es: 'Bien. Organicemos una llamada con ella mañana y yo daré seguimiento con un correo esta tarde.' },
    { speaker: 'Ben', text: 'Perfect. Thanks for bringing it up before it became a bigger problem.', es: 'Perfecto. Gracias por plantearlo antes de que se volviera un problema mayor.' }
  ],
  listening: {
    script: [
      { speaker: 'Agent', text: 'Good morning, customer support. How can I help?' },
      { speaker: 'Caller', text: 'Hello. I ordered a laptop two weeks ago, but it hasn’t been delivered yet.' },
      { speaker: 'Agent', text: 'I’m sorry to hear that. Can I take your order number?' },
      { speaker: 'Caller', text: 'It’s 4471. When I called last week, someone told me that it would arrive on Tuesday.' },
      { speaker: 'Agent', text: 'Let me check. I can see that the package was sent on Monday, but it was returned because, according to the courier, nobody was at the address.' },
      { speaker: 'Caller', text: 'That’s strange. I was working from home all week.' },
      { speaker: 'Agent', text: 'Perhaps the courier didn’t ring the bell. If you give me a time, I’ll ask them to deliver it again.' },
      { speaker: 'Caller', text: 'Tomorrow afternoon would be fine. I don’t want to wait any longer, so if it isn’t here by Friday, I’ll ask for a refund.' },
      { speaker: 'Agent', text: 'Understood. I’ll note that on your file and send you a confirmation by email.' }
    ],
    questions: [
      mc('b1u10-l1', 'What is the caller’s problem?', ['The laptop hasn’t been delivered', 'The laptop is broken', 'The laptop was too expensive'], 0, 'He says the laptop hasn’t been delivered yet.'),
      mc('b1u10-l2', 'What was the caller told last week?', ['It would arrive on Tuesday', 'It was lost', 'It was free'], 0, 'Someone told him it would arrive on Tuesday.'),
      mc('b1u10-l3', 'Why was the package returned, according to the courier?', ['Nobody was at the address', 'The address was wrong', 'The caller refused it'], 0, 'According to the courier, nobody was at the address.'),
      tf('b1u10-l4', 'The caller will ask for a refund immediately.', false, 'He will ask for a refund only if it isn’t there by Friday.'),
      mc('b1u10-l5', 'What does the caller imply by saying he was working from home all week?', ['The courier’s explanation may not be accurate', 'He lied', 'He was away'], 0, 'He suggests somebody was at home, so the explanation seems doubtful.')
    ]
  },
  reading: {
    title: 'A misunderstanding at work',
    text: 'Last Monday, Daniel received an email from his manager that said simply: “We need to talk about the report.” He spent the rest of the day imagining what he might have done wrong. By the evening, he had convinced himself that he was going to be fired. When he walked into the meeting room the next morning, his manager, who was smiling, asked him how he had managed to write such a clear analysis in such a short time. It turned out that the other department wanted to use the report as a model for future projects. Daniel, who had hardly slept, felt both relieved and a little embarrassed. His manager laughed and admitted that if she had written a longer message, he wouldn’t have worried. From then on, she promised to be more careful with her wording, and Daniel decided not to jump to conclusions.',
    questions: [
      rc('b1u10-r1', 'What did the email say?', ['“We need to talk about the report.”', '“You are fired.”', '“Great job on the report.”'], 0, 'The email was very short: “We need to talk about the report.”'),
      rc('b1u10-r2', 'How did Daniel feel by the evening?', ['Convinced that he would lose his job', 'Excited about a promotion', 'Indifferent'], 0, 'He had convinced himself that he was going to be fired.'),
      rc('b1u10-r3', 'What did the manager really want?', ['To praise the report', 'To fire him', 'To change the report'], 0, 'She wanted to ask how he had written such a clear analysis.'),
      rc('b1u10-r4', 'What did each person decide?', ['She will be more careful with her wording; he won’t jump to conclusions', 'Nothing changed', 'They will avoid emails'], 0, 'She promised to be more careful and he decided not to jump to conclusions.'),
      rc('b1u10-r5', 'What is the tone of the text?', ['Light and reassuring', 'Tragic', 'Angry'], 0, 'The misunderstanding ends well and with humour.')
    ]
  },
  speaking: { prompt: 'Simula con un compañero una conversación profesional en la que hay un malentendido (una fecha cambiada, un pedido que no llegó, un mensaje ambiguo). Deben aclararlo, resumir el acuerdo y proponer una solución.', tasks: ['Interrupt politely and ask for clarification: “Sorry to interrupt, but could I clarify…?”', 'Explain what happened with a past tense and, if you can, the passive voice (“The date has been changed”).', 'Report what somebody said and propose a solution with a conditional.', 'Summarise what you agreed and say who will do what.'] },
  writing: { prompt: 'Write a follow-up email (150 to 180 words) after a meeting in which there was a misunderstanding. Summarise what happened, apologise or clarify, report what was said, and propose next steps. Use at least six different structures from B1.', rubric: ['Clear purpose, polite tone and appropriate closing.', 'At least six different B1 structures used correctly (tenses, passive, conditional, relative clause, reported speech, modals, linkers).', 'Summary of agreements and next steps with deadlines.', 'Well-organised paragraphs and coherent linkers.'], model: 'Dear all, Thank you for yesterday’s meeting. I would like to clarify a misunderstanding about the delivery date. Marco said that it had been moved to March, but the client has asked us to bring it forward to February. I apologise because I should have informed you earlier. As a result, the final design must be sent by the 15th. If we hire a freelancer, we could finish on time, so I’m going to set up a call tomorrow. Could you please confirm your availability? Although the situation is difficult, I’m confident that we will manage. Kind regards, Alba' },
  pronunciation: {
    items: [{ word: 'misunderstanding', ipa: '/ˌmɪsʌndəˈstændɪŋ/', stress: 'mis-un-der-STAND-ing' }, { word: 'clarify', ipa: '/ˈklærɪfaɪ/', stress: 'CLA-ri-fy' }, { word: 'summarise', ipa: '/ˈsʌməraɪz/', stress: 'SUM-ma-rise' }, { word: 'interrupt', ipa: '/ˌɪntəˈrʌpt/', stress: 'in-ter-RUPT' }, { word: 'follow up', ipa: '/ˈfɒləʊ ʌp/', stress: 'FOL-low UP' }],
    tips: ['En los phrasal verbs la fuerza suele ir en la partícula cuando son verbos: bring UP, sort OUT, set UP.', 'Usa la entonación para suavizar: Sorry to interrupt, (sube) but could I clarify something? (sube al final).', 'Haz pausas cortas entre ideas al resumir: First, … Second, … Finally, …']
  },
  exercises: [
    mc('b1u10-e1', 'I’ll call you as soon as I ___ there.', ['get', 'will get', 'got'], 0, 'After as soon as, use the present simple for future time.', 'Choose the correct form.'),
    fb('b1u10-e2', 'By the time she arrived, we ___ (finish).', 'had finished', 'Earlier past → Past Perfect.', undefined, 'Write the correct form.'),
    fb('b1u10-e3', 'The report ___ (send) yesterday.', 'was sent', 'Past passive.', undefined, 'Write the correct form.'),
    wo('b1u10-e4', ['asked', 'He', 'if', 'I', 'the', 'had', 'finished', 'report'], ['He', 'asked', 'if', 'I', 'had', 'finished', 'the', 'report'], 'Reported yes/no question.'),
    tf('b1u10-e5', '“Although” and “however” can be used in exactly the same way.', false, 'Although joins clauses in one sentence; However starts a new sentence.'),
    mt('b1u10-e6', 'Match each expression with its meaning.', [['clarify', 'make something clearer'], ['summarise', 'give the main points briefly'], ['bring up', 'mention a topic'], ['back out', 'withdraw from an agreement']], 'Phrasal verbs often have a single-word synonym.'),
    tr('b1u10-e7', 'Combine with a relative clause.', 'I spoke to a woman. She works for the client.', 'I spoke to a woman who works for the client', 'who replaces she.', ['I spoke to a woman that works for the client']),
    tr('b1u10-e8', 'Report the sentence.', '“I’m leaving tomorrow,” she said.', 'She said she was leaving the next day', 'present continuous → past continuous; tomorrow → the next day.', ['She said that she was leaving the next day', 'She said she was leaving the following day', 'She said that she was leaving the following day']),
    rc('b1u10-e9', 'What can be inferred?', ['The delay was beyond the team’s control', 'The team forgot the meeting', 'The manager cancelled the project'], 0, 'The trains had been cancelled, so people arrived late.', 'The meeting was supposed to start at nine, but half the team arrived late because the trains had been cancelled. The manager decided to postpone the discussion until the afternoon.'),
    sa('b1u10-e10', 'Write a short email (6 to 8 sentences) following up after a misunderstanding in a meeting. Use at least four different B1 structures (tense, passive, conditional, relative clause, reported speech or a modal).', 'Model: “Dear Marta, I’m writing to clarify what was said yesterday. You said that the report was due on Friday, but it has been moved to Monday. If you need more time, we could talk. I’m sorry for the confusion.” Check: variety of structures and a polite tone.')
  ],
  assessment: [
    mc('b1u10-t1', 'She was exhausted ___ she had been working all night.', ['because', 'although', 'despite'], 0, 'Reason → because.'),
    mc('b1u10-t2', 'The report ___ by the team last week.', ['was completed', 'completed', 'is completing'], 0, 'Past passive.'),
    fb('b1u10-t3', 'If I ___ you, I would ask for clarification.', 'were', 'Second conditional: If I were you…', undefined, 'Write the missing word.'),
    fb('b1u10-t4', 'He said he ___ read the message the day before.', 'had', 'Past simple → past perfect in reported speech.', undefined, 'Write the missing word.'),
    tf('b1u10-t5', '“Despite” can be followed by a full clause with subject and verb.', false, 'Despite + noun or -ing; although + clause.'),
    tf('b1u10-t6', 'The Past Perfect can show that one past action happened before another.', true, 'By the time I arrived, they had left.'),
    wo('b1u10-t7', ['you', 'Could', 'clarify', 'what', 'you', 'mean'], ['Could', 'you', 'clarify', 'what', 'you', 'mean'], 'A polite request for clarification.'),
    mc('b1u10-t8', 'Choose the best way to interrupt politely.', ['Sorry to interrupt, but could I ask something?', 'Stop talking.', 'Wait.'], 0, 'Apologise first and ask permission.'),
    tr('b1u10-t9', 'Combine with because.', 'He missed the train. He was late.', 'He was late because he missed the train', 'because + reason.', ['He was late because he had missed the train']),
    mc('b1u10-t10', 'Choose the sentence that is correct and natural.', ['He told me that he would call later.', 'He said me that he would call later.', 'He told that he would call later.'], 0, 'tell + person; say + that.')
  ],
  review: ['Choose the structure by the message: past events, opinions, conditions, reported speech or description.', 'Connect ideas: because, although, however, therefore, despite.', 'Manage conversations: interrupt politely, clarify, summarise, rephrase.', 'Resolve misunderstandings: state the facts, apologise, propose a solution, confirm in writing.', 'B1 means handling most everyday and work situations with clear, coherent language.']
};
export default unit;
