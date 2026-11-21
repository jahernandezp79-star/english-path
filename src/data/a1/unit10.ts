import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'a1-u10', level: 'A1', unitNumber: 10, title: 'My Plans', subtitle: 'Talk about your plans and intentions',
  communicativeGoal: 'Expresar planes e intenciones para mañana, la próxima semana o el próximo año.',
  objectives: ['Formar be going to en afirmativo, negativo y pregunta.', 'Usar expresiones de futuro: tomorrow, tonight, next week, next year, soon.', 'Preguntar y responder sobre planes.', 'Hablar de metas personales sencillas.'],
  grammar: {
    title: 'Be going to and basic future expressions',
    explanation: [
      'Be going to se usa para hablar de planes e intenciones que ya tienes decididos: I’m going to study tonight (voy a estudiar esta noche).',
      'Se forma con el verbo to be (am/is/are) + going to + verbo base: She is going to travel. El verbo después de going to nunca lleva -s ni -ing.',
      'Para negar se pone not después de be: I’m not going to work, he isn’t going to come, we aren’t going to buy a car. Para preguntar se invierte be y sujeto: Are you going to visit her? — Yes, I am. / No, I’m not.',
      'Expresiones de futuro: tomorrow, tonight, next week/month/year, soon, later. Además, want to + verbo sirve para decir lo que quieres hacer: I want to learn English.'
    ],
    forms: [
      { label: 'Affirmative', lines: ['I’m going to study tonight.', 'She’s going to travel next month.', 'They’re going to move next year.'] },
      { label: 'Negative', lines: ['I’m not going to work tomorrow.', 'He isn’t going to come.', 'We aren’t going to buy a car.'] },
      { label: 'Questions and short answers', lines: ['Are you going to visit her? — Yes, I am. / No, I’m not.', 'What are you going to do tomorrow?', 'Is he going to learn English? — Yes, he is. / No, he isn’t.'] }
    ]
  },
  vocabulary: [v('plan', 'plan', '/plæn/', 'PLAN'), v('tomorrow', 'mañana', '/təˈmɒrəʊ/', 'to-MOR-row'), v('tonight', 'esta noche', '/təˈnaɪt/', 'to-NIGHT'), v('next week', 'la próxima semana', '/nekst wiːk/', 'next WEEK'), v('next month', 'el próximo mes', '/nekst mʌnθ/', 'next MONTH'), v('next year', 'el próximo año', '/nekst jɪə/', 'next YEAR'), v('soon', 'pronto', '/suːn/', 'SOON'), v('later', 'más tarde', '/ˈleɪtə/', 'LA-ter'), v('birthday', 'cumpleaños', '/ˈbɜːθdeɪ/', 'BIRTH-day'), v('trip', 'viaje', '/trɪp/', 'TRIP'), v('ticket', 'billete, tiquete', '/ˈtɪkɪt/', 'TI-cket'), v('learn', 'aprender', '/lɜːn/', 'LEARN'), v('move', 'mudarse', '/muːv/', 'MOVE'), v('surprise', 'sorpresa', '/səˈpraɪz/', 'sur-PRISE')],
  examples: [
    { en: 'I’m going to study tonight.', es: 'Voy a estudiar esta noche.' }, { en: 'She’s going to travel next month.', es: 'Ella va a viajar el próximo mes.' },
    { en: 'We’re going to have a surprise party.', es: 'Vamos a hacer una fiesta sorpresa.' }, { en: 'He isn’t going to work tomorrow.', es: 'Él no va a trabajar mañana.' },
    { en: 'Are you going to buy a ticket?', es: '¿Vas a comprar un tiquete?' }, { en: 'What are they going to do next week?', es: '¿Qué van a hacer la próxima semana?' },
    { en: 'I want to learn English.', es: 'Quiero aprender inglés.' }, { en: 'My parents are going to move next year.', es: 'Mis padres se van a mudar el próximo año.' }
  ],
  dialogue: [
    { speaker: 'Laura', text: 'What are you going to do next weekend, Chris?', es: '¿Qué vas a hacer el próximo fin de semana, Chris?' },
    { speaker: 'Chris', text: 'I’m going to visit my parents. They live in Cali.', es: 'Voy a visitar a mis padres. Viven en Cali.' },
    { speaker: 'Laura', text: 'Are you going to travel by bus?', es: '¿Vas a viajar en bus?' },
    { speaker: 'Chris', text: 'No, I’m not. I’m going to travel by plane. I have my ticket.', es: 'No. Voy a viajar en avión. Ya tengo mi tiquete.' },
    { speaker: 'Laura', text: 'Nice! Is it your mother’s birthday?', es: '¡Qué bien! ¿Es el cumpleaños de tu mamá?' },
    { speaker: 'Chris', text: 'Yes, it is. We’re going to have a surprise party.', es: 'Sí. Vamos a hacer una fiesta sorpresa.' },
    { speaker: 'Laura', text: 'That’s a great plan. I’m not going to do anything special.', es: 'Qué buen plan. Yo no voy a hacer nada especial.' },
    { speaker: 'Chris', text: 'Do you want to come with me?', es: '¿Quieres venir conmigo?' }
  ],
  listening: {
    script: [
      { speaker: 'Interviewer', text: 'Sofia, what are your plans for next year?' }, { speaker: 'Sofia', text: 'I’m going to move to a new city and I’m going to start a new job.' },
      { speaker: 'Interviewer', text: 'Are you going to study too?' }, { speaker: 'Sofia', text: 'Yes, I am. I’m going to learn English at night.' },
      { speaker: 'Interviewer', text: 'And are you going to travel?' }, { speaker: 'Sofia', text: 'No, I’m not. But I’m going to have a short trip next month.' }
    ],
    questions: [
      mc('a1u10-l1', 'What is Sofia going to do next year?', ['Move to a new city', 'Study medicine', 'Buy a house'], 0, 'She is going to move to a new city.'),
      mc('a1u10-l2', 'When is she going to learn English?', ['At night', 'In the morning', 'At the weekend'], 0, 'She is going to learn English at night.'),
      tf('a1u10-l3', 'Sofia is going to travel next year.', false, 'She says: “No, I’m not.”'),
      mc('a1u10-l4', 'When is her short trip?', ['Next month', 'Tomorrow', 'Next week'], 0, 'She is going to have a short trip next month.')
    ]
  },
  reading: {
    title: 'Plans for the new year',
    text: 'It is December. Tomás has a lot of plans for next year. He is going to start university in February and he is going to study engineering. He isn’t going to work, because he wants to study. He is going to learn to cook and he is going to cook dinner for his family on Sundays. His friends are going to visit him in July. He is very happy about next year.',
    questions: [
      rc('a1u10-r1', 'What is Tomás going to study?', ['Engineering', 'Medicine', 'English'], 0, 'He is going to study engineering.'),
      rc('a1u10-r2', 'When is he going to start university?', ['In February', 'In July', 'In December'], 0, 'He is going to start in February.'),
      rc('a1u10-r3', 'Is he going to work?', ['Yes, he is.', 'No, he isn’t.', 'The text doesn’t say.'], 1, 'He isn’t going to work.'),
      rc('a1u10-r4', 'Who is going to visit him in July?', ['His friends', 'His parents', 'His teacher'], 0, 'His friends are going to visit him.')
    ]
  },
  speaking: { prompt: 'Habla de tus planes para mañana, para el próximo fin de semana y para el próximo año.', tasks: ['Say one plan for tomorrow: “I’m going to …”.', 'Say one thing you aren’t going to do: “I’m not going to …”.', 'Say a goal for next year: “Next year I’m going to …”.', 'Ask a partner: “What are you going to do next weekend?”'] },
  writing: { prompt: 'Write 6 sentences about your plans. Use be going to in affirmative and negative, and at least two future time expressions.', rubric: ['Uses am/is/are + going to + base verb.', 'Includes at least one negative sentence.', 'Uses tomorrow, next week/month/year or soon.', 'Uses capital letters and full stops.'], model: 'Tomorrow I’m going to work until five. Next weekend I’m going to visit my parents. I’m not going to travel by bus. Next month my sister is going to start a new job. Next year I’m going to learn English. We’re going to have a party soon.' },
  pronunciation: {
    items: [{ word: 'going to', ipa: '/ˈɡəʊɪŋ tə/', stress: 'GO-ing to' }, { word: 'tomorrow', ipa: '/təˈmɒrəʊ/', stress: 'to-MOR-row' }, { word: 'birthday', ipa: '/ˈbɜːθdeɪ/', stress: 'BIRTH-day' }, { word: 'surprise', ipa: '/səˈpraɪz/', stress: 'sur-PRISE' }, { word: 'ticket', ipa: '/ˈtɪkɪt/', stress: 'TI-cket' }],
    tips: ['En el habla rápida, going to suena como “gonna”; en escritura formal usa going to.', 'En tomorrow la fuerza va en la segunda sílaba.', 'En birthday, la th suena suave: /θ/.']
  },
  exercises: [
    mc('a1u10-e1', 'I ___ going to study tonight.', ['am', 'is', 'are'], 0, 'I → am.', 'Choose the correct form of be.'),
    fb('a1u10-e2', 'She ___ going to travel next month.', 'is', 'She → is.', undefined, 'Write am, is or are.'),
    fb('a1u10-e3', 'We aren’t ___ to buy a car.', 'going', 'be + going to.', undefined, 'Write the missing word.'),
    wo('a1u10-e4', ['are', 'What', 'going', 'you', 'do', 'to', 'tomorrow'], ['What', 'are', 'you', 'going', 'to', 'do', 'tomorrow'], 'Question word + be + subject + going to + verb.'),
    tf('a1u10-e5', '“He going to visit us” is correct.', false, 'You need is: “He is going to visit us.”'),
    mt('a1u10-e6', 'Match each future expression with its meaning.', [['tomorrow', 'the day after today'], ['tonight', 'this evening or night'], ['next week', 'the week after this one'], ['soon', 'in a short time']], 'Use them with going to.'),
    tr('a1u10-e7', 'Make the sentence negative.', 'I’m going to work tomorrow.', 'I’m not going to work tomorrow', 'Put not after am.', ['I am not going to work tomorrow']),
    tr('a1u10-e8', 'Make the sentence a question.', 'They are going to move.', 'Are they going to move', 'Are + subject + going to + verb?'),
    rc('a1u10-e9', 'What are they going to do?', ['Cook a big lunch', 'Go to the beach', 'Study'], 0, 'They are going to cook a big lunch.', 'Next Saturday Lina is going to visit her aunt. They are going to cook a big lunch.'),
    sa('a1u10-e10', 'Write 3 sentences about your plans for next week.', 'Model: “I’m going to visit my aunt. I’m not going to work on Saturday. We’re going to cook lunch.” Check: be + going to + base verb.')
  ],
  assessment: [
    mc('a1u10-t1', 'She ___ going to call me tonight.', ['are', 'is', 'am'], 1, 'She → is.'),
    mc('a1u10-t2', 'We ___ going to watch a movie.', ['am', 'is', 'are'], 2, 'We → are.'),
    fb('a1u10-t3', '___ you going to study tomorrow?', 'Are', 'You → Are.', undefined, 'Write am, is or are.'),
    fb('a1u10-t4', 'I’m not going ___ work next week.', 'to', 'going to + verb.', undefined, 'Write the missing word.'),
    tf('a1u10-t5', 'After “going to” we use the base verb.', true, 'going to + base verb: going to study.'),
    tf('a1u10-t6', '“I going to travel” is correct.', false, 'You need am: “I am going to travel.”'),
    wo('a1u10-t7', ['going', 'is', 'to', 'She', 'learn', 'English'], ['She', 'is', 'going', 'to', 'learn', 'English'], 'Subject + is + going to + verb.'),
    mc('a1u10-t8', 'Choose the correct sentence.', ['He isn’t going to come.', 'He doesn’t going to come.', 'He not going to come.'], 0, 'be + not + going to.'),
    tr('a1u10-t9', 'Make the sentence a question.', 'He is going to buy a ticket.', 'Is he going to buy a ticket', 'Is + he + going to…?'),
    mc('a1u10-t10', 'Choose the time expression for the future.', ['yesterday', 'next week', 'last year'], 1, 'Next week is in the future.')
  ],
  review: ['be going to = plans and intentions.', 'am/is/are + going to + base verb.', 'Negative: be + not + going to. Question: be + subject + going to…?', 'Future words: tomorrow, tonight, next week/month/year, soon, later.', 'want to + verb expresses what you want to do.']
};
export default unit;
