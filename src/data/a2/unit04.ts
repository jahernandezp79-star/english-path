import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'a2-u04', level: 'A2', unitNumber: 4, title: 'Health and Lifestyle', subtitle: 'Describe habits and give advice',
  communicativeGoal: 'Describir hábitos de vida y salud, y dar o pedir recomendaciones con should, shouldn’t y must.',
  objectives: ['Usar should y shouldn’t para dar consejos.', 'Usar must y mustn’t para obligación fuerte y prohibición.', 'Hablar de síntomas, hábitos y rutinas saludables.', 'Pedir y dar consejos en una consulta o entre amigos.'],
  grammar: {
    title: 'Should, shouldn’t, must and basic advice',
    explanation: [
      'Should y shouldn’t se usan para dar consejos y opiniones: You should rest (deberías descansar). You shouldn’t drink coffee at night (no deberías tomar café de noche). Se usan con el verbo base, sin to, y son iguales para todas las personas.',
      'Para preguntar un consejo se invierte el orden: Should I see a doctor? — Yes, you should. / No, you shouldn’t. También: What should I do?',
      'Must expresa una obligación fuerte o una necesidad personal: You must see a doctor if the fever continues. Mustn’t expresa prohibición: You mustn’t smoke here. Mustn’t NO significa “no hace falta”: significa “está prohibido”.',
      'Frases útiles para aconsejar: I think you should…, Why don’t you…?, It’s a good idea to… Para pedir consejo: What do you think I should do?'
    ],
    forms: [
      { label: 'Should / shouldn’t', lines: ['You should drink more water.', 'He shouldn’t eat so much sugar.', 'Should I take this medicine? — Yes, you should.', 'What should I do?'] },
      { label: 'Must / mustn’t', lines: ['You must see a doctor if you have a fever.', 'You mustn’t smoke in the hospital.', 'You must finish the medicine.', 'Drivers mustn’t use their phones.'] },
      { label: 'Useful phrases', lines: ['I think you should rest.', 'Why don’t you go to bed earlier?', 'It’s a good idea to walk every day.', 'What do you think I should do?'] }
    ]
  },
  vocabulary: [v('healthy', 'saludable', '/ˈhelθi/', 'HEAL-thy'), v('unhealthy', 'poco saludable', '/ʌnˈhelθi/', 'un-HEAL-thy'), v('exercise', 'ejercicio; hacer ejercicio', '/ˈeksəsaɪz/', 'EX-er-cise'), v('diet', 'dieta, alimentación', '/ˈdaɪət/', 'DI-et'), v('stress', 'estrés', '/stres/', 'STRESS'), v('habit', 'hábito', '/ˈhæbɪt/', 'HA-bit'), v('headache', 'dolor de cabeza', '/ˈhedeɪk/', 'HEAD-ache'), v('fever', 'fiebre', '/ˈfiːvə/', 'FE-ver'), v('cough', 'tos', '/kɒf/', 'COUGH'), v('medicine', 'medicina', '/ˈmedsn/', 'MED-i-cine'), v('appointment', 'cita', '/əˈpɔɪntmənt/', 'a-POINT-ment'), v('rest', 'descansar; descanso', '/rest/', 'REST'), v('advice', 'consejo(s)', '/ədˈvaɪs/', 'ad-VICE'), v('junk food', 'comida chatarra', '/dʒʌŋk fuːd/', 'JUNK food'), v('fit', 'en forma', '/fɪt/', 'FIT'), v('recover', 'recuperarse', '/rɪˈkʌvə/', 're-CO-ver')],
  examples: [
    { en: 'You should sleep at least seven hours every night.', es: 'Deberías dormir al menos siete horas cada noche.' },
    { en: 'He shouldn’t eat so much junk food if he wants to stay fit.', es: 'No debería comer tanta comida chatarra si quiere mantenerse en forma.' },
    { en: 'You must see a doctor if the fever lasts more than three days.', es: 'Debes ver a un médico si la fiebre dura más de tres días.' },
    { en: 'Patients mustn’t use their phones in the operating room.', es: 'Los pacientes no deben usar el celular en el quirófano.' },
    { en: 'Should I make an appointment or just go to the pharmacy?', es: '¿Debería pedir una cita o simplemente ir a la farmacia?' },
    { en: 'Why don’t you walk to work instead of taking the bus?', es: '¿Por qué no caminas al trabajo en vez de tomar el bus?' },
    { en: 'I think we should eat more vegetables and less sugar.', es: 'Creo que deberíamos comer más verduras y menos azúcar.' },
    { en: 'You shouldn’t stay up late when you are recovering from a cold.', es: 'No deberías trasnochar cuando te estás recuperando de un resfriado.' }
  ],
  dialogue: [
    { speaker: 'Doctor', text: 'Good morning. What seems to be the problem?', es: 'Buenos días. ¿Cuál parece ser el problema?' },
    { speaker: 'Patient', text: 'I have a terrible headache and a cough. I’ve felt tired for a week.', es: 'Tengo un dolor de cabeza terrible y tos. Llevo una semana cansado.' },
    { speaker: 'Doctor', text: 'Do you sleep well?', es: '¿Duerme bien?' },
    { speaker: 'Patient', text: 'Not really. I usually go to bed after midnight because I work late.', es: 'No mucho. Normalmente me acuesto después de medianoche porque trabajo hasta tarde.' },
    { speaker: 'Doctor', text: 'I think you should go to bed earlier. You shouldn’t drink coffee in the evening either.', es: 'Creo que debería acostarse más temprano. Tampoco debería tomar café por la noche.' },
    { speaker: 'Patient', text: 'I know. And what about the cough? Should I take medicine?', es: 'Lo sé. ¿Y la tos? ¿Debería tomar medicina?' },
    { speaker: 'Doctor', text: 'Yes, you should take this twice a day. You must finish the whole box, even if you feel better.', es: 'Sí, debería tomar esto dos veces al día. Debe terminar toda la caja, aunque se sienta mejor.' },
    { speaker: 'Patient', text: 'OK. Can I exercise?', es: 'Bien. ¿Puedo hacer ejercicio?' },
    { speaker: 'Doctor', text: 'You should rest for a few days. After that, you should walk for thirty minutes every day. You mustn’t run yet.', es: 'Debería descansar unos días. Después, debería caminar treinta minutos al día. Todavía no debe correr.' },
    { speaker: 'Patient', text: 'Thank you, doctor. I’m going to follow your advice.', es: 'Gracias, doctor. Voy a seguir sus consejos.' }
  ],
  listening: {
    script: [
      { speaker: 'Host', text: 'Dr Ruiz, what should people do to stay healthy?' }, { speaker: 'Dr Ruiz', text: 'First, you should sleep at least seven hours every night. Many people sleep too little.' },
      { speaker: 'Host', text: 'What about food?' }, { speaker: 'Dr Ruiz', text: 'You shouldn’t eat too much junk food. You should eat fruit and vegetables every day.' },
      { speaker: 'Host', text: 'And exercise?' }, { speaker: 'Dr Ruiz', text: 'Thirty minutes a day is enough. And you must see a doctor if you have a fever for more than three days.' }
    ],
    questions: [
      mc('a2u04-l1', 'How many hours should people sleep?', ['At least seven', 'Five', 'Ten'], 0, 'At least seven hours every night.'),
      mc('a2u04-l2', 'What shouldn’t people eat too much?', ['Junk food', 'Vegetables', 'Fruit'], 0, 'You shouldn’t eat too much junk food.'),
      mc('a2u04-l3', 'How much exercise is enough?', ['Thirty minutes a day', 'One hour a week', 'Two hours a day'], 0, 'Thirty minutes a day is enough.'),
      tf('a2u04-l4', 'People must see a doctor if they have a fever for more than three days.', true, 'The doctor says you must see a doctor.')
    ]
  },
  reading: {
    title: 'Small changes, big difference',
    text: 'Last year Marcos felt tired all the time. His doctor told him that he should change some habits, so he made three small changes. First, he started going to bed at ten o’clock. Second, he stopped eating junk food at lunch; now he has a salad or a sandwich with vegetables. Finally, he walks to work instead of taking the bus. After two months he feels much better and his stress has fallen. “I mustn’t forget how bad I felt,” he says. “You shouldn’t wait until you are ill to look after yourself.”',
    questions: [
      rc('a2u04-r1', 'What did the doctor recommend?', ['Change some habits', 'Take medicine', 'Stop working'], 0, 'The doctor said he should change some habits.'),
      rc('a2u04-r2', 'What does Marcos eat now at lunch?', ['A salad or a vegetable sandwich', 'Junk food', 'Nothing'], 0, 'He has a salad or a sandwich with vegetables.'),
      rc('a2u04-r3', 'How does Marcos get to work now?', ['He walks', 'By bus', 'By car'], 0, 'He walks instead of taking the bus.'),
      rc('a2u04-r4', 'What is Marcos’s advice to others?', ['Look after yourself before you are ill', 'Wait for the doctor', 'Eat more at night'], 0, 'You shouldn’t wait until you are ill to look after yourself.')
    ]
  },
  speaking: { prompt: 'Practica una consulta médica o una conversación entre amigos en la que uno pide consejo y el otro aconseja.', tasks: ['Describe a problem (tired, headache, stress) and ask: “What should I do?”', 'Give three pieces of advice with should, shouldn’t and Why don’t you…?', 'Say one strong obligation or prohibition with must / mustn’t.', 'Describe one healthy habit you have and one you want to change.'] },
  writing: { prompt: 'Write 8 to 10 sentences giving advice to a friend who is tired and stressed. Use should, shouldn’t, must and mustn’t, and explain why.', rubric: ['Uses should/shouldn’t with a base verb (no to).', 'Uses must or mustn’t correctly for strong obligation or prohibition.', 'Explains each piece of advice with because or so.', 'Organises the advice (sleep, food, exercise).'], model: 'You should go to bed earlier because sleep is very important. You shouldn’t drink coffee at night. Why don’t you walk for thirty minutes every day? You must eat more vegetables, and you shouldn’t eat junk food so often. If you still feel bad, you must see a doctor.' },
  pronunciation: {
    items: [{ word: 'should', ipa: '/ʃʊd/', stress: 'SHOULD' }, { word: 'healthy', ipa: '/ˈhelθi/', stress: 'HEAL-thy' }, { word: 'medicine', ipa: '/ˈmedsn/', stress: 'MED-i-cine' }, { word: 'headache', ipa: '/ˈhedeɪk/', stress: 'HEAD-ache' }, { word: 'advice', ipa: '/ədˈvaɪs/', stress: 'ad-VICE' }],
    tips: ['En should la l no se pronuncia: /ʃʊd/.', 'Advice (sustantivo) suena /ədˈvaɪs/ con s; advise (verbo) suena /ədˈvaɪz/ con z.', 'En medicine se pronuncian solo dos sílabas fuertes: MED-sn.']
  },
  exercises: [
    mc('a2u04-e1', 'You ___ drink more water.', ['should', 'shoulds', 'are should'], 0, 'Should never takes -s.', 'Choose the correct form.'),
    fb('a2u04-e2', 'You ___ smoke here. It is forbidden.', 'mustn’t', 'Prohibition → mustn’t.', ['must not'], 'Write the missing word.'),
    fb('a2u04-e3', 'I have a fever. ___ I see a doctor?', 'Should', 'Asking for advice → Should I…?', undefined, 'Write the missing word.'),
    wo('a2u04-e4', ['should', 'You', 'rest', 'more'], ['You', 'should', 'rest', 'more'], 'Subject + should + base verb.'),
    tf('a2u04-e5', '“He shoulds go to bed early” is correct.', false, 'Should has no -s: “He should go to bed early.”'),
    mt('a2u04-e6', 'Match each modal with its use.', [['should', 'advice'], ['shouldn’t', 'advice not to do something'], ['must', 'strong obligation or necessity'], ['mustn’t', 'prohibition']], 'Decide: advice or obligation?'),
    tr('a2u04-e7', 'Give negative advice with shouldn’t.', 'You eat too much sugar.', 'You shouldn’t eat too much sugar', 'shouldn’t + base verb.', ['You should not eat too much sugar']),
    tr('a2u04-e8', 'Give strong advice with must.', 'You see a doctor.', 'You must see a doctor', 'must + base verb.'),
    rc('a2u04-e9', 'What mustn’t Ana do?', ['Go to work', 'Drink water', 'Rest'], 0, 'She mustn’t go to work for two days.', 'Ana has a cold. Her doctor says she should rest and drink a lot of water. She mustn’t go to work for two days.'),
    sa('a2u04-e10', 'Write 4 pieces of advice for a friend who is always tired.', 'Model: “You should sleep more. You shouldn’t drink coffee at night. Why don’t you walk every day? You must see a doctor if you feel worse.” Check: should/shouldn’t/must + base verb.')
  ],
  assessment: [
    mc('a2u04-t1', 'You ___ eat so much sugar. It’s bad for you.', ['shouldn’t', 'mustn’t to', 'don’t should'], 0, 'shouldn’t + base verb.'),
    mc('a2u04-t2', 'Doctors say we ___ exercise regularly.', ['should', 'should to', 'are should'], 0, 'should + base verb.'),
    fb('a2u04-t3', '___ I take this medicine twice a day?', 'Should', 'Should I…?', undefined, 'Write the missing word.'),
    fb('a2u04-t4', 'You ___ park here. It’s not allowed.', 'mustn’t', 'Prohibition → mustn’t.', ['must not'], 'Write the missing word.'),
    tf('a2u04-t5', 'After should we use the base verb.', true, 'should + base verb.'),
    tf('a2u04-t6', '“Mustn’t” means you don’t need to do it.', false, 'Mustn’t = prohibition.'),
    wo('a2u04-t7', ['I', 'Should', 'see', 'a', 'doctor'], ['Should', 'I', 'see', 'a', 'doctor'], 'Should + I + base verb?'),
    mc('a2u04-t8', 'Choose the best advice for a headache.', ['You should rest and drink water.', 'You must to run.', 'You should to sleep.'], 0, 'No “to” after should or must.'),
    tr('a2u04-t9', 'Give advice with should.', 'Eat more vegetables.', 'You should eat more vegetables', 'You should + base verb.'),
    mc('a2u04-t10', 'Which sentence expresses the strongest obligation?', ['You could rest.', 'You should rest.', 'You must rest.'], 2, 'Must is stronger than should.')
  ],
  review: ['should / shouldn’t + base verb = advice.', 'must = strong obligation; mustn’t = prohibition.', 'Ask for advice: Should I…? What should I do?', 'Other ways to advise: Why don’t you…? I think you should…', 'Health vocabulary: fever, cough, headache, medicine, appointment.']
};
export default unit;
