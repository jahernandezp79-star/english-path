import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'a2-u02', level: 'A2', unitNumber: 2, title: 'Work and Jobs', subtitle: 'Describe your job, responsibilities and current activities',
  communicativeGoal: 'Describir tu empleo, tus responsabilidades y lo que estás haciendo ahora o este mes en el trabajo.',
  objectives: ['Distinguir el uso del Present Simple (rutinas, hechos) y del Present Continuous (ahora, temporal).', 'Formar el Present Continuous y escribir bien el gerundio (-ing).', 'Reconocer los verbos que normalmente no se usan en continuo (need, know, want, like).', 'Hablar de trabajo en una conversación con colegas.'],
  grammar: {
    title: 'Present Simple vs Present Continuous',
    explanation: [
      'El Present Simple se usa para rutinas, hechos permanentes y horarios: She works at a bank. We have a meeting every Monday. Se acompaña de always, usually, every day, on Fridays.',
      'El Present Continuous (am/is/are + verbo-ing) se usa para lo que ocurre ahora, alrededor de ahora o de forma temporal: I’m writing a report. He’s working from home this week. Se acompaña de now, at the moment, this week, currently.',
      'Ortografía del -ing: la -e final se pierde (write → writing), se duplica la consonante en verbos cortos (run → running, stop → stopping) y -ie cambia a -y (lie → lying).',
      'Los verbos de estado o pensamiento (know, need, want, like, love, hate, understand, believe) normalmente no se usan en continuo: I need your help (no “I’m needing”). Have como posesión tampoco: I have a car; pero have como actividad sí: We are having a meeting.',
      'Preguntas: Do you work in an office? (rutina) / Are you working today? (ahora). What do you do? pregunta por la profesión; What are you doing? pregunta por lo que haces ahora.'
    ],
    forms: [
      { label: 'Present Simple', lines: ['She manages a team of ten people.', 'He doesn’t work on Fridays.', 'Do you work in an office? — Yes, I do.', 'What time does the meeting start?'] },
      { label: 'Present Continuous', lines: ['I’m writing a report at the moment.', 'They aren’t having a meeting now.', 'Is he working from home today? — No, he isn’t.', 'What are you working on this week?'] },
      { label: 'Contrast and stative verbs', lines: ['I usually work in the office, but this week I’m working from home.', 'She knows the client well. (not “is knowing”)', 'We need more time. (not “are needing”)', 'He has a new car / He’s having lunch.'] }
    ]
  },
  vocabulary: [v('employee', 'empleado', '/ɪmˈplɔɪiː/', 'em-PLOY-ee'), v('manager', 'gerente', '/ˈmænɪdʒə/', 'MA-na-ger'), v('colleague', 'colega', '/ˈkɒliːɡ/', 'COL-league'), v('meeting', 'reunión', '/ˈmiːtɪŋ/', 'MEE-ting'), v('deadline', 'fecha límite', '/ˈdedlaɪn/', 'DEAD-line'), v('schedule', 'horario', '/ˈʃedjuːl/', 'SCHE-dule'), v('project', 'proyecto', '/ˈprɒdʒekt/', 'PRO-ject'), v('client', 'cliente', '/ˈklaɪənt/', 'CLI-ent'), v('report', 'informe', '/rɪˈpɔːt/', 're-PORT'), v('office', 'oficina', '/ˈɒfɪs/', 'OF-fice'), v('task', 'tarea', '/tɑːsk/', 'TASK'), v('shift', 'turno', '/ʃɪft/', 'SHIFT'), v('salary', 'salario', '/ˈsæləri/', 'SA-la-ry'), v('apply', 'postularse', '/əˈplaɪ/', 'a-PPLY'), v('responsibility', 'responsabilidad', '/rɪˌspɒnsəˈbɪləti/', 're-spon-si-BI-li-ty'), v('team', 'equipo', '/tiːm/', 'TEAM')],
  examples: [
    { en: 'She works as a nurse and usually starts her shift at seven.', es: 'Ella trabaja como enfermera y normalmente empieza su turno a las siete.' },
    { en: 'This week he is working from home because the office is closed.', es: 'Esta semana él trabaja desde casa porque la oficina está cerrada.' },
    { en: 'We have a team meeting every Monday, but today we are meeting a client.', es: 'Tenemos reunión de equipo cada lunes, pero hoy nos reunimos con un cliente.' },
    { en: 'I don’t work on weekends, so I’m not answering emails right now.', es: 'No trabajo los fines de semana, así que no estoy contestando correos ahora.' },
    { en: 'Is your manager visiting the new office this month?', es: '¿Tu gerente está visitando la nueva oficina este mes?' },
    { en: 'What does your company do, and what are you working on at the moment?', es: '¿A qué se dedica tu empresa y en qué estás trabajando en este momento?' },
    { en: 'He knows the project well, but he needs more time to finish the report.', es: 'Él conoce bien el proyecto, pero necesita más tiempo para terminar el informe.' },
    { en: 'They are hiring new employees because the company is growing.', es: 'Están contratando nuevos empleados porque la empresa está creciendo.' }
  ],
  dialogue: [
    { speaker: 'Hugo', text: 'Hi Rosa! Are you busy at the moment?', es: 'Hola Rosa, ¿estás ocupada en este momento?' },
    { speaker: 'Rosa', text: 'A bit. I’m preparing a report for the client.', es: 'Un poco. Estoy preparando un informe para el cliente.' },
    { speaker: 'Hugo', text: 'What does your job involve exactly? You work in marketing, right?', es: '¿En qué consiste exactamente tu trabajo? Trabajas en marketing, ¿no?' },
    { speaker: 'Rosa', text: 'Yes. Normally I manage social media campaigns, but this month I’m helping the sales team.', es: 'Sí. Normalmente gestiono campañas en redes sociales, pero este mes estoy ayudando al equipo de ventas.' },
    { speaker: 'Hugo', text: 'That sounds interesting. Do you work in the office every day?', es: 'Suena interesante. ¿Trabajas en la oficina todos los días?' },
    { speaker: 'Rosa', text: 'No, I usually work from home on Fridays. And you? Are you working on a new project?', es: 'No, normalmente trabajo desde casa los viernes. ¿Y tú? ¿Estás trabajando en un proyecto nuevo?' },
    { speaker: 'Hugo', text: 'Yes, we’re designing a new website. We have a meeting at nine every Monday.', es: 'Sí, estamos diseñando un sitio web nuevo. Tenemos reunión a las nueve cada lunes.' },
    { speaker: 'Rosa', text: 'Who is managing the project?', es: '¿Quién dirige el proyecto?' },
    { speaker: 'Hugo', text: 'Carlos manages it. He knows a lot about web design.', es: 'Lo dirige Carlos. Sabe mucho de diseño web.' },
    { speaker: 'Rosa', text: 'Great. I need to finish this report now. See you later!', es: 'Genial. Necesito terminar este informe ahora. ¡Hasta luego!' }
  ],
  listening: {
    script: [
      { speaker: 'Manager', text: 'Hello, Sam. Where are you? We’re starting the meeting.' },
      { speaker: 'Sam', text: 'Sorry, I’m stuck in traffic. I usually take the train, but today the trains aren’t running.' },
      { speaker: 'Manager', text: 'Don’t worry. Are you coming by car?' },
      { speaker: 'Sam', text: 'Yes, I’m driving now. I’m arriving in twenty minutes.' },
      { speaker: 'Manager', text: 'OK. We’re discussing the budget first, so you aren’t missing anything important.' },
      { speaker: 'Sam', text: 'Great, thanks.' }
    ],
    questions: [
      mc('a2u02-l1', 'Why is Sam late?', ['He is stuck in traffic', 'He is ill', 'He forgot the meeting'], 0, 'He says he is stuck in traffic.'),
      mc('a2u02-l2', 'How does Sam usually travel to work?', ['By train', 'By car', 'By bus'], 0, 'He usually takes the train.'),
      tf('a2u02-l3', 'Sam is coming by car today.', true, 'He says: “I’m driving now.”'),
      mc('a2u02-l4', 'What is the team discussing now?', ['The budget', 'A new client', 'Holidays'], 0, 'They are discussing the budget first.')
    ]
  },
  reading: {
    title: 'Ana’s demanding month',
    text: 'Ana works as a nurse in a hospital. She usually works the morning shift, from seven to three, and she has four days off each month. This month, however, she is working nights because a colleague is on holiday. Ana says it is difficult: she is sleeping during the day and she doesn’t see her children very much. At the moment she is also studying online to become a manager. She likes helping patients, but she wants a job with more regular hours. “I’m learning a lot,” she says, “and I’m saving money for my future.”',
    questions: [
      rc('a2u02-r1', 'What is Ana’s normal shift?', ['Mornings', 'Nights', 'Afternoons'], 0, 'She usually works the morning shift.'),
      rc('a2u02-r2', 'Why is she working nights this month?', ['A colleague is on holiday', 'She asked for a change', 'The hospital is closed'], 0, 'Because a colleague is on holiday.'),
      rc('a2u02-r3', 'What can we infer about her situation?', ['She is tired and very busy', 'She is bored at work', 'She wants to stop working'], 0, 'She sleeps in the day, studies and rarely sees her children.'),
      rc('a2u02-r4', 'What is Ana studying for?', ['To become a manager', 'To be a teacher', 'To become a doctor'], 0, 'She is studying online to become a manager.')
    ]
  },
  speaking: { prompt: 'Hagan un juego de roles: dos colegas se encuentran en la oficina. Cada uno describe su trabajo y lo que hace esta semana.', tasks: ['Explain what you do and what your normal schedule is (Present Simple).', 'Explain one thing that is different this week or this month (Present Continuous).', 'Ask your partner what they are working on at the moment.', 'Use at least one verb of state (need, know, want) in the Present Simple.'] },
  writing: { prompt: 'Write 8 to 10 sentences comparing your usual work or study routine with what you are doing this week. Use both tenses and link the ideas.', rubric: ['Uses the Present Simple for routines and the Present Continuous for temporary actions.', 'Spells -ing forms correctly.', 'Does not use verbs like need, know or want in the continuous.', 'Uses linkers such as but, however and because.'], model: 'I usually work in an office from eight to five, but this week I’m working from home because my building is closed. Normally I manage emails and meetings. At the moment I’m preparing a report for a client. I don’t like working alone, but I need quiet to finish my tasks.' },
  pronunciation: {
    items: [{ word: 'colleague', ipa: '/ˈkɒliːɡ/', stress: 'COL-league' }, { word: 'schedule', ipa: '/ˈʃedjuːl/', stress: 'SCHE-dule' }, { word: 'responsibility', ipa: '/rɪˌspɒnsəˈbɪləti/', stress: 'res-pon-si-BI-li-ty' }, { word: 'employee', ipa: '/ɪmˈplɔɪiː/', stress: 'em-PLOY-ee' }, { word: 'working', ipa: '/ˈwɜːkɪŋ/', stress: 'WORK-ing' }],
    tips: ['En colleague la -ague suena /iːɡ/ y la fuerza va en la primera sílaba.', 'En schedule, la sch suena /ʃ/ en inglés británico y /sk/ en americano.', 'En las palabras largas como responsibility, hay una sílaba fuerte (BI) y las demás son débiles.']
  },
  exercises: [
    mc('a2u02-e1', 'He usually ___ at nine.', ['starts', 'is starting', 'start'], 0, 'Usually → Present Simple, he → starts.', 'Choose the correct form.'),
    fb('a2u02-e2', 'Right now I ___ (write) a report.', 'am writing', 'now → Present Continuous: am writing.', ['’m writing', "'m writing"], 'Write the verb in the Present Continuous.'),
    fb('a2u02-e3', 'She ___ (not work) on Sundays.', 'doesn’t work', 'Routine → Present Simple negative.', ['does not work'], 'Write the verb in the Present Simple.'),
    wo('a2u02-e4', ['are', 'What', 'doing', 'you', 'at', 'the', 'moment'], ['What', 'are', 'you', 'doing', 'at', 'the', 'moment'], 'Question word + are + subject + -ing.'),
    tf('a2u02-e5', '“I am knowing the answer” is correct.', false, 'Know is a stative verb: “I know the answer.”'),
    mt('a2u02-e6', 'Match each sentence with its meaning.', [['She works at a bank.', 'a permanent job'], ['She is working from home today.', 'a temporary situation'], ['She is writing an email now.', 'an action in progress'], ['She starts at nine every day.', 'a routine']], 'Think: permanent, temporary, in progress or routine.'),
    tr('a2u02-e7', 'Change to the Present Continuous (now).', 'He works from home.', 'He is working from home', 'am/is/are + -ing.', ['He’s working from home']),
    tr('a2u02-e8', 'Make the sentence negative.', 'They are having a meeting.', 'They aren’t having a meeting', 'be + not + -ing.', ['They are not having a meeting']),
    rc('a2u02-e9', 'Why is Leo working from home?', ['The office is closed', 'He is ill', 'He likes it'], 0, 'The office is closed this week.', 'Leo usually works in the office, but this week he is working from home because the office is closed.'),
    sa('a2u02-e10', 'Write 4 sentences about your job: two routines and two things you are doing this week.', 'Model: “I work from eight to five. I usually have lunch at one. This week I’m training a new colleague. I’m also studying English.” Check: Present Simple for routines, Present Continuous for temporary actions.')
  ],
  assessment: [
    mc('a2u02-t1', 'I ___ in a bank. It’s my job.', ['am working', 'work', 'works'], 1, 'Permanent job → Present Simple.'),
    mc('a2u02-t2', 'Be quiet! The manager ___ a call.', ['makes', 'is making', 'make'], 1, 'Happening now → Present Continuous.'),
    fb('a2u02-t3', 'What ___ you doing right now?', 'are', 'you → are.', undefined, 'Write the missing word.'),
    fb('a2u02-t4', 'She ___ (not like) working at night.', 'doesn’t like', 'Like is a stative verb → Present Simple.', ['does not like'], 'Write the verb in the Present Simple.'),
    tf('a2u02-t5', 'Verbs like “need” and “know” are not normally used in continuous forms.', true, 'They are stative verbs.'),
    tf('a2u02-t6', '“Every Monday” usually goes with the Present Continuous.', false, 'Every Monday = routine → Present Simple.'),
    wo('a2u02-t7', ['from', 'working', 'is', 'She', 'home', 'today'], ['She', 'is', 'working', 'from', 'home', 'today'], 'Subject + is + -ing + place + time.'),
    mc('a2u02-t8', 'Choose the correct sentence.', ['I need your help now.', 'I am needing your help now.', 'I needing your help now.'], 0, 'Need is stative.'),
    tr('a2u02-t9', 'Use the Present Continuous.', 'We have a meeting at the moment.', 'We are having a meeting at the moment', 'Here have = an activity, so continuous is possible.', ['We’re having a meeting at the moment']),
    mc('a2u02-t10', 'Choose the correct question.', ['Do you working today?', 'Are you working today?', 'Does you work today?'], 1, 'Are + subject + -ing.')
  ],
  review: ['Present Simple = routines, permanent facts, schedules.', 'Present Continuous = now, temporary, in progress (am/is/are + -ing).', '-ing spelling: write → writing, run → running, lie → lying.', 'Stative verbs (know, need, want, like) are not usually continuous.', 'Compare: I usually work… but this week I’m working…']
};
export default unit;
