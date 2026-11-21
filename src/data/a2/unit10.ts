import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'a2-u10', level: 'A2', unitNumber: 10, title: 'Future and Goals', subtitle: 'Talk about goals, predictions and plans',
  communicativeGoal: 'Hablar de metas, predicciones y planes, distinguiendo promesas, planes decididos y citas ya acordadas.',
  objectives: ['Usar will para predicciones, decisiones espontáneas y promesas.', 'Usar be going to para planes decididos y predicciones con evidencia.', 'Usar el Present Continuous para arreglos fijos en el futuro.', 'Hablar de metas personales y profesionales con claridad.'],
  grammar: {
    title: 'Will, going to and Present Continuous for the future',
    explanation: [
      'Will + verbo base se usa para predicciones basadas en opinión (I think it will be difficult), decisiones espontáneas (I’ll help you) y promesas (I won’t be late). El negativo es won’t. Preguntas: Will you be there? — Yes, I will. / No, I won’t. Se acompaña de I think, I hope, I’m sure, probably, definitely.',
      'Be going to se usa para planes que ya habías decidido (I’m going to study medicine) y para predicciones con evidencia presente (Look at the clouds: it’s going to rain).',
      'El Present Continuous se usa para arreglos fijos: hay hora, lugar o personas involucradas, y casi siempre ya está organizado. I’m meeting the director on Friday at ten. We’re flying to Quito on Saturday. Are you doing anything this weekend?',
      'Comparación: I’ll carry that for you (decisión en el momento). I’m going to learn English this year (plan). I’m seeing the dentist on Monday (cita acordada). Cuando hay duda, going to y el Present Continuous suelen ser intercambiables para planes; will es lo más natural para opiniones y promesas.'
    ],
    forms: [
      { label: 'Will', lines: ['I think technology will change our jobs.', 'It won’t be easy.', 'Will you be at the meeting? — Yes, I will.', 'I’ll call you later. I promise.'] },
      { label: 'Going to', lines: ['I’m going to learn English this year.', 'She isn’t going to apply for that job.', 'Look at the sky: it’s going to rain.', 'Are you going to study abroad?'] },
      { label: 'Present Continuous', lines: ['I’m meeting my boss at ten tomorrow.', 'We’re flying to Quito on Friday.', 'Are you doing anything this weekend?', 'She isn’t working next Monday.'] }
    ]
  },
  vocabulary: [v('goal', 'meta, objetivo', '/ɡəʊl/', 'GOAL'), v('ambition', 'ambición', '/æmˈbɪʃn/', 'am-BI-tion'), v('achieve', 'lograr', '/əˈtʃiːv/', 'a-CHIEVE'), v('improve', 'mejorar', '/ɪmˈpruːv/', 'im-PROVE'), v('prediction', 'predicción', '/prɪˈdɪkʃn/', 'pre-DIC-tion'), v('career', 'carrera profesional', '/kəˈrɪə/', 'ca-REER'), v('degree', 'título universitario', '/dɪˈɡriː/', 'de-GREE'), v('save', 'ahorrar', '/seɪv/', 'SAVE'), v('opportunity', 'oportunidad', '/ˌɒpəˈtjuːnəti/', 'op-por-TU-ni-ty'), v('challenge', 'reto', '/ˈtʃælɪndʒ/', 'CHAL-lenge'), v('success', 'éxito', '/səkˈses/', 'suc-CESS'), v('fail', 'fracasar, reprobar', '/feɪl/', 'FAIL'), v('probably', 'probablemente', '/ˈprɒbəbli/', 'PROB-a-bly'), v('definitely', 'definitivamente', '/ˈdefɪnətli/', 'DEF-i-nite-ly'), v('hope', 'esperar; esperanza', '/həʊp/', 'HOPE'), v('expect', 'esperar, suponer', '/ɪkˈspekt/', 'ex-PECT')],
  examples: [
    { en: 'I think technology will definitely change the way we work.', es: 'Creo que la tecnología definitivamente va a cambiar la forma en que trabajamos.' },
    { en: 'I’m going to save money this year because I want to study abroad.', es: 'Voy a ahorrar dinero este año porque quiero estudiar en el extranjero.' },
    { en: 'We’re meeting the new client at ten tomorrow, so I can’t come to the call.', es: 'Nos reunimos con el nuevo cliente mañana a las diez, así que no puedo conectarme a la llamada.' },
    { en: 'Look at those clouds! It’s going to rain any minute.', es: '¡Mira esas nubes! Va a llover en cualquier momento.' },
    { en: 'I won’t be late, I promise. I’ll text you when I arrive.', es: 'No llegaré tarde, lo prometo. Te escribiré cuando llegue.' },
    { en: 'Are you doing anything special this weekend? — Yes, I’m visiting my parents.', es: '¿Haces algo especial este fin de semana? — Sí, voy a visitar a mis padres.' },
    { en: 'She hopes she will achieve her goals, but she knows it won’t be easy.', es: 'Ella espera lograr sus metas, pero sabe que no será fácil.' },
    { en: 'It’s difficult? Don’t worry. I’ll help you with the report.', es: '¿Es difícil? No te preocupes. Yo te ayudo con el informe.' }
  ],
  dialogue: [
    { speaker: 'Advisor', text: 'Hello Daniel. Tell me about your goals for the next five years.', es: 'Hola Daniel. Cuéntame sobre tus metas para los próximos cinco años.' },
    { speaker: 'Daniel', text: 'Well, I’m going to finish my degree next year. After that I’d like to work abroad.', es: 'Bueno, voy a terminar mi carrera el próximo año. Después me gustaría trabajar en el extranjero.' },
    { speaker: 'Advisor', text: 'Great. Have you made any arrangements yet?', es: 'Genial. ¿Ya ha hecho algún arreglo?' },
    { speaker: 'Daniel', text: 'Yes. I’m meeting a recruiter on Friday, and I’m applying to three companies this month.', es: 'Sí. Me reúno con un reclutador el viernes y este mes estoy postulando a tres empresas.' },
    { speaker: 'Advisor', text: 'That’s a good start. Do you think it will be difficult?', es: 'Es un buen comienzo. ¿Cree que será difícil?' },
    { speaker: 'Daniel', text: 'Probably. I think I’ll need to improve my English first, so I’m going to take a course.', es: 'Probablemente. Creo que necesitaré mejorar mi inglés primero, así que voy a tomar un curso.' },
    { speaker: 'Advisor', text: 'I’m sure you’ll do well. Will you study at night?', es: 'Estoy seguro de que le irá bien. ¿Estudiará por la noche?' },
    { speaker: 'Daniel', text: 'Yes, I will, because I won’t stop working yet.', es: 'Sí, porque todavía no voy a dejar de trabajar.' },
    { speaker: 'Advisor', text: 'Then my advice is to organise your time. If you need help, I’ll send you some information.', es: 'Entonces mi consejo es que organice su tiempo. Si necesita ayuda, le enviaré información.' },
    { speaker: 'Daniel', text: 'Thank you! That would be great.', es: '¡Gracias! Eso sería genial.' }
  ],
  listening: {
    script: [
      { speaker: 'Host', text: 'What do you think life will be like in 2050?' }, { speaker: 'Guest', text: 'I think most people will work from home. Cities won’t be as crowded as today.' },
      { speaker: 'Host', text: 'And transport?' }, { speaker: 'Guest', text: 'Electric cars will be common, and I’m sure trains will be faster.' },
      { speaker: 'Host', text: 'Are you doing anything special to prepare?' }, { speaker: 'Guest', text: 'Yes. I’m starting a course on renewable energy next month, and I’m going to open a small company next year.' }
    ],
    questions: [
      mc('a2u10-l1', 'What will most people do in 2050, according to the guest?', ['Work from home', 'Work in factories', 'Stop working'], 0, 'Most people will work from home.'),
      mc('a2u10-l2', 'What will be common?', ['Electric cars', 'Flying cars', 'Bicycles only'], 0, 'Electric cars will be common.'),
      mc('a2u10-l3', 'When is the guest starting a course?', ['Next month', 'Next year', 'Tomorrow'], 0, 'She is starting a course next month.'),
      tf('a2u10-l4', 'The guest is going to open a company next year.', true, 'She says: “I’m going to open a small company next year.”')
    ]
  },
  reading: {
    title: 'Mariana’s five-year plan',
    text: 'Mariana is twenty-four and she has clear goals. This year she is saving money because she is going to study a master’s degree in Spain. She has already arranged an interview with the university: she is meeting the director on 15 March. Mariana knows it won’t be easy, but she is confident. She thinks she will probably find a part-time job there, and she hopes to improve her English quickly. In five years she wants to return to Colombia and open a language school. “I don’t know if I will succeed,” she says, “but I’ll never know if I don’t try.”',
    questions: [
      rc('a2u10-r1', 'Why is Mariana saving money?', ['To study a master’s degree in Spain', 'To buy a house', 'To open a shop now'], 0, 'She is going to study a master’s degree in Spain.'),
      rc('a2u10-r2', 'What arrangement has she made?', ['An interview with the director on 15 March', 'A job contract', 'A flight to Colombia'], 0, 'She is meeting the director on 15 March.'),
      rc('a2u10-r3', 'What can we infer about her attitude?', ['She is realistic and determined', 'She is afraid of the future', 'She doesn’t care about the plan'], 0, 'She knows it won’t be easy but she is confident and prepares.'),
      rc('a2u10-r4', 'What does she want to do in five years?', ['Open a language school in Colombia', 'Stay in Spain', 'Work in a bank'], 0, 'She wants to return to Colombia and open a language school.')
    ]
  },
  speaking: { prompt: 'Presenta a un compañero tus metas para los próximos años y sus detalles. Tu compañero te hace preguntas y te da su opinión.', tasks: ['Say two goals with going to and explain why.', 'Say one arrangement you already have with the Present Continuous (time and place).', 'Make one prediction about the future with I think… will… and one promise with I’ll… / I won’t…', 'Ask your partner: “What are you going to do after this course? Are you doing anything special this weekend?”'] },
  writing: { prompt: 'Write 8 to 10 sentences about your goals for the next five years. Use going to for plans, will for predictions or promises, and the Present Continuous for at least one arrangement.', rubric: ['Uses going to for plans and will for predictions or promises.', 'Uses the Present Continuous for a fixed arrangement.', 'Uses probably, definitely, I hope or I think at least once.', 'Explains each goal with because or so and organises ideas in order.'], model: 'This year I’m going to save money because I want to study abroad. I’m meeting an adviser on Friday to talk about scholarships. I think it won’t be easy, but I will definitely try. Next year I’m going to improve my English, and I hope I will find a good job after my degree. I won’t give up, I promise.' },
  pronunciation: {
    items: [{ word: 'ambition', ipa: '/æmˈbɪʃn/', stress: 'am-BI-tion' }, { word: 'opportunity', ipa: '/ˌɒpəˈtjuːnəti/', stress: 'op-por-TU-ni-ty' }, { word: 'definitely', ipa: '/ˈdefɪnətli/', stress: 'DEF-i-nite-ly' }, { word: 'won’t', ipa: '/wəʊnt/', stress: 'WON’T' }, { word: 'I’ll', ipa: '/aɪl/', stress: 'I’LL' }],
    tips: ['Won’t suena /wəʊnt/ y will suena débil /wɪl/ o /l/ en I’ll: no los confundas.', 'En opportunity la fuerza va en TU y las demás sílabas son débiles.', 'En going to, el habla rápida suena “gonna”: es normal oírla, pero escribe going to.']
  },
  exercises: [
    mc('a2u10-e1', 'Look at those clouds! It ___ rain.', ['will', 'is going to', 'is raining'], 1, 'Present evidence → going to.', 'Choose the best form.'),
    fb('a2u10-e2', 'I’m tired. I think I ___ go to bed early.', 'will', 'A decision or prediction at the moment → will.', ['’ll', "'ll"], 'Write the missing word.'),
    fb('a2u10-e3', 'We ___ (fly) to Quito on Friday. The tickets are booked.', 'are flying', 'Fixed arrangement → Present Continuous.', ['’re flying', "'re flying"], 'Write the verb in the Present Continuous.'),
    wo('a2u10-e4', ['will', 'I', 'think', 'pass', 'I', 'the', 'exam'], ['I', 'think', 'I', 'will', 'pass', 'the', 'exam'], 'I think + subject + will + verb.'),
    tf('a2u10-e5', '“I am meeting my boss at ten tomorrow” can express a fixed arrangement.', true, 'Present Continuous for arrangements with time and person.'),
    mt('a2u10-e6', 'Match each sentence with its use.', [['I’ll help you with the bags.', 'spontaneous offer'], ['I’m going to study medicine.', 'plan already decided'], ['I’m seeing the dentist on Monday.', 'fixed arrangement'], ['It will be sunny tomorrow.', 'prediction']], 'Ask: decided before, arranged, or said now?'),
    tr('a2u10-e7', 'Use the short negative form.', 'I will not go to the party.', 'I won’t go to the party', 'will not → won’t.'),
    tr('a2u10-e8', 'Make the sentence a question.', 'You are going to study tonight.', 'Are you going to study tonight', 'Are + subject + going to…?'),
    rc('a2u10-e9', 'What is Leo going to do after the meeting?', ['Write a report', 'Meet another client', 'Go home'], 0, 'He is going to write a report.', 'Leo is meeting a client at nine tomorrow. After that, he is going to write a report.'),
    sa('a2u10-e10', 'Write 4 sentences about your future: one with will, one with going to, one with the Present Continuous and one promise.', 'Model: “I think I will find a better job. I’m going to take an English course. I’m meeting a recruiter on Friday. I won’t give up.” Check: choose the right future form for each idea.')
  ],
  assessment: [
    mc('a2u10-t1', 'I’m sure you ___ pass the exam.', ['will', 'are', 'do'], 0, 'Opinion/prediction → will.'),
    mc('a2u10-t2', 'We ___ to Cartagena on Saturday. The hotel is booked.', ['are driving', 'drives', 'will driving'], 0, 'Fixed arrangement → Present Continuous.'),
    fb('a2u10-t3', 'She ___ be late. I promise.', 'won’t', 'Promise (negative) → won’t.', ['will not'], 'Write the missing word.'),
    fb('a2u10-t4', 'Are you ___ to apply for the job?', 'going', 'Are you going to…?', undefined, 'Write the missing word.'),
    tf('a2u10-t5', 'We use “going to” for plans already decided.', true, 'I’m going to study medicine.'),
    tf('a2u10-t6', '“Will” is always used for fixed arrangements.', false, 'Fixed arrangements use the Present Continuous.'),
    wo('a2u10-t7', ['you', 'Will', 'at', 'be', 'home', 'tonight'], ['Will', 'you', 'be', 'at', 'home', 'tonight'], 'Will + subject + base verb…?'),
    mc('a2u10-t8', 'Choose the best sentence for a spontaneous decision.', ['I’ll carry that for you.', 'I’m going to carry that for you.', 'I’m carrying that for you.'], 0, 'Spontaneous decision → I’ll.'),
    tr('a2u10-t9', 'Say it as an arrangement.', 'I meet the doctor tomorrow at nine.', 'I’m meeting the doctor tomorrow at nine', 'Present Continuous for arrangements.', ['I am meeting the doctor tomorrow at nine']),
    mc('a2u10-t10', 'Choose the best prediction with evidence.', ['Look at that car! It’s going to crash.', 'Look at that car! It will crash.', 'Look at that car! It crashes.'], 0, 'Present evidence → going to.')
  ],
  review: ['will = opinion, spontaneous decision, promise (won’t = negative).', 'going to = plan already decided, or prediction with evidence.', 'Present Continuous = fixed arrangement (time, place, people).', 'Useful words: probably, definitely, I think, I hope, I’m sure.', 'Goal vocabulary: achieve, improve, career, degree, opportunity.']
};
export default unit;
