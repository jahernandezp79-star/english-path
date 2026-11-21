import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'a1-u09', level: 'A1', unitNumber: 9, title: 'Yesterday', subtitle: 'Talk about simple events in the past',
  communicativeGoal: 'Contar qué hiciste ayer, el fin de semana pasado o en tus vacaciones, con acciones y experiencias pasadas sencillas.',
  objectives: ['Formar el Past Simple de verbos regulares (-ed).', 'Usar verbos irregulares comunes (went, had, saw, ate, bought).', 'Formar negativos con didn’t y preguntas con Did.', 'Usar expresiones de tiempo pasado: yesterday, last night, last week, ago.'],
  grammar: {
    title: 'Past Simple: regular and common irregular verbs',
    explanation: [
      'El Past Simple se usa para acciones terminadas en el pasado: I visited my aunt yesterday. Suele acompañarse de expresiones como yesterday, last night, last week, two days ago.',
      'Los verbos regulares añaden -ed: work → worked. Si terminan en -e, solo -d: like → liked. Si terminan en consonante + y, la y cambia a -ied: study → studied. Algunos duplican la consonante: stop → stopped. La terminación suena /t/, /d/ o /ɪd/.',
      'Los verbos irregulares tienen una forma propia que hay que aprender: go → went, have → had, see → saw, eat → ate, buy → bought, do → did, make → made. El verbo to be tiene was (I/he/she/it) y were (you/we/they).',
      'Para negar se usa didn’t + verbo base, igual para todas las personas: I didn’t go. Para preguntar se usa Did + sujeto + verbo base: Did you go? Respuesta corta: Yes, I did. / No, I didn’t. Con was/were: Was it good? — Yes, it was.'
    ],
    forms: [
      { label: 'Affirmative', lines: ['I visited my grandmother.', 'She went to the party.', 'We ate a lot of food.', 'They were tired.'] },
      { label: 'Negative', lines: ['I didn’t visit my grandmother.', 'She didn’t go to the party.', 'We didn’t eat much.', 'They weren’t tired.'] },
      { label: 'Questions and short answers', lines: ['Did you visit her? — Yes, I did. / No, I didn’t.', 'What did you do yesterday?', 'Was it good? — Yes, it was.', 'Where did they go on holiday?'] }
    ]
  },
  vocabulary: [v('yesterday', 'ayer', '/ˈjestədeɪ/', 'YES-ter-day'), v('last night', 'anoche', '/lɑːst naɪt/', 'last NIGHT'), v('last week', 'la semana pasada', '/lɑːst wiːk/', 'last WEEK'), v('ago', 'hace (tiempo)', '/əˈɡəʊ/', 'a-GO'), v('visit', 'visitar', '/ˈvɪzɪt/', 'VI-sit'), v('walk', 'caminar', '/wɔːk/', 'WALK'), v('stay', 'quedarse', '/steɪ/', 'STAY'), v('travel', 'viajar', '/ˈtrævl/', 'TRA-vel'), v('buy', 'comprar', '/baɪ/', 'BUY'), v('see', 'ver', '/siː/', 'SEE'), v('eat', 'comer', '/iːt/', 'EAT'), v('go out', 'salir', '/ɡəʊ aʊt/', 'go OUT'), v('party', 'fiesta', '/ˈpɑːti/', 'PAR-ty'), v('holiday', 'vacaciones', '/ˈhɒlədeɪ/', 'HOL-i-day')],
  examples: [
    { en: 'I visited my aunt yesterday.', es: 'Visité a mi tía ayer.' }, { en: 'She went to the park last Sunday.', es: 'Ella fue al parque el domingo pasado.' },
    { en: 'We ate fish for dinner last night.', es: 'Comimos pescado en la cena anoche.' }, { en: 'He didn’t see the movie.', es: 'Él no vio la película.' },
    { en: 'Did you buy a new bag?', es: '¿Compraste un bolso nuevo?' }, { en: 'They travelled two years ago.', es: 'Ellos viajaron hace dos años.' },
    { en: 'What did you do at the weekend?', es: '¿Qué hiciste el fin de semana?' }, { en: 'The party was great, but I was tired.', es: 'La fiesta fue genial, pero yo estaba cansado.' }
  ],
  dialogue: [
    { speaker: 'Rita', text: 'Hi, Ben! What did you do at the weekend?', es: '¡Hola, Ben! ¿Qué hiciste el fin de semana?' },
    { speaker: 'Ben', text: 'I visited my grandmother on Saturday.', es: 'Visité a mi abuela el sábado.' },
    { speaker: 'Rita', text: 'Did you stay at her house?', es: '¿Te quedaste en su casa?' },
    { speaker: 'Ben', text: 'No, I didn’t. I went home at night. And you?', es: 'No. Volví a casa por la noche. ¿Y tú?' },
    { speaker: 'Rita', text: 'I went to a party on Saturday night.', es: 'Fui a una fiesta el sábado en la noche.' },
    { speaker: 'Ben', text: 'Was it good?', es: '¿Estuvo buena?' },
    { speaker: 'Rita', text: 'Yes, it was. We danced and ate a lot of food.', es: 'Sí. Bailamos y comimos mucha comida.' },
    { speaker: 'Ben', text: 'Great! I stayed at home on Sunday and watched a movie.', es: '¡Genial! El domingo me quedé en casa y vi una película.' }
  ],
  listening: {
    script: [
      { speaker: 'Friend', text: 'Paul, where did you go on holiday last week?' }, { speaker: 'Paul', text: 'I went to the beach with my family.' },
      { speaker: 'Friend', text: 'Did you travel by plane?' }, { speaker: 'Paul', text: 'No, we didn’t. We travelled by bus.' },
      { speaker: 'Friend', text: 'What did you do there?' }, { speaker: 'Paul', text: 'I walked every day and I ate a lot of fish. My wife bought a hat.' }
    ],
    questions: [
      mc('a1u09-l1', 'Where did Paul go on holiday?', ['To the beach', 'To the mountains', 'To a city'], 0, 'He went to the beach.'),
      tf('a1u09-l2', 'Paul travelled by plane.', false, 'He says: “We travelled by bus.”'),
      mc('a1u09-l3', 'What did Paul eat?', ['Fish', 'Chicken', 'Rice'], 0, 'He ate a lot of fish.'),
      mc('a1u09-l4', 'What did his wife buy?', ['A hat', 'A bag', 'Shoes'], 0, 'His wife bought a hat.')
    ]
  },
  reading: {
    title: 'Marta’s Saturday',
    text: 'Last Saturday Marta got up late. She had breakfast at ten o’clock and then she visited her friend Elena. They walked in the park and talked for two hours. In the afternoon they went to a shop and Marta bought a blue jacket. In the evening she cooked dinner for her family. She didn’t watch TV because she was tired. She went to bed at ten.',
    questions: [
      rc('a1u09-r1', 'What time did Marta have breakfast?', ['At ten', 'At eight', 'At twelve'], 0, 'She had breakfast at ten o’clock.'),
      rc('a1u09-r2', 'Where did Marta and Elena walk?', ['In the park', 'At a shop', 'At home'], 0, 'They walked in the park.'),
      rc('a1u09-r3', 'What did Marta buy?', ['A blue jacket', 'Shoes', 'A bag'], 0, 'She bought a blue jacket.'),
      rc('a1u09-r4', 'Why didn’t Marta watch TV?', ['She was tired', 'She went out', 'She had no TV'], 0, 'She was tired.')
    ]
  },
  speaking: { prompt: 'Cuenta en voz alta lo que hiciste ayer o el fin de semana pasado.', tasks: ['Say two things you did yesterday: “I … and I …”.', 'Say one thing you didn’t do: “I didn’t …”.', 'Use a time word: yesterday, last night, last week or ago.', 'Ask a partner: “What did you do at the weekend?”'] },
  writing: { prompt: 'Write 6 sentences about your last weekend or holiday. Use at least two irregular verbs and one negative sentence.', rubric: ['Uses Past Simple verbs correctly.', 'Uses at least two irregular verbs (went, had, saw…).', 'Includes one negative with didn’t + base verb.', 'Uses a past time expression (yesterday, last week, ago).'], model: 'Last weekend I visited my aunt. On Saturday I went to the market and I bought some fruit. I ate lunch with my cousins. I didn’t watch TV. On Sunday I stayed at home and I studied English.' },
  pronunciation: {
    items: [{ word: 'visited', ipa: '/ˈvɪzɪtɪd/', stress: 'VI-si-ted' }, { word: 'walked', ipa: '/wɔːkt/', stress: 'WALKED' }, { word: 'played', ipa: '/pleɪd/', stress: 'PLAYED' }, { word: 'yesterday', ipa: '/ˈjestədeɪ/', stress: 'YES-ter-day' }, { word: 'bought', ipa: '/bɔːt/', stress: 'BOUGHT' }],
    tips: ['La terminación -ed suena /t/ (walked), /d/ (played) o /ɪd/ (visited, wanted).', 'En bought las letras gh no se pronuncian.', 'En yesterday la fuerza va en la primera sílaba.']
  },
  exercises: [
    mc('a1u09-e1', 'She ___ to the park yesterday.', ['go', 'goes', 'went'], 2, 'go → went.', 'Choose the correct verb.'),
    fb('a1u09-e2', 'We ___ (visit) our aunt last week.', 'visited', 'Regular verb: visit + ed.', undefined, 'Write the Past Simple.'),
    fb('a1u09-e3', 'I ___ (see) a good movie last night.', 'saw', 'see → saw (irregular).', undefined, 'Write the Past Simple.'),
    wo('a1u09-e4', ['you', 'What', 'do', 'did', 'yesterday'], ['What', 'did', 'you', 'do', 'yesterday'], 'Question word + did + subject + base verb.'),
    tf('a1u09-e5', '“He didn’t went home” is correct.', false, 'After didn’t use the base verb: “He didn’t go home.”'),
    mt('a1u09-e6', 'Match each verb with its past form.', [['go', 'went'], ['eat', 'ate'], ['buy', 'bought'], ['see', 'saw']], 'Irregular verbs must be learned.'),
    tr('a1u09-e7', 'Make the sentence negative.', 'I visited my aunt.', 'I didn’t visit my aunt', 'didn’t + base verb.', ['I did not visit my aunt']),
    tr('a1u09-e8', 'Make the sentence a question.', 'You went to the party.', 'Did you go to the party', 'Did + subject + base verb.'),
    rc('a1u09-e9', 'Why did Tom go to bed early?', ['He was tired', 'He was hungry', 'He was at a party'], 0, 'He was tired.', 'Tom arrived at six. He ate dinner and went to bed early because he was tired.'),
    sa('a1u09-e10', 'Write 3 sentences about yesterday.', 'Model: “I got up at six. I went to work. I didn’t cook dinner.” Check: Past Simple and one negative.')
  ],
  assessment: [
    mc('a1u09-t1', 'I ___ my homework last night.', ['do', 'did', 'doed'], 1, 'do → did.'),
    mc('a1u09-t2', 'She ___ to school yesterday.', ['didn’t go', 'didn’t went', 'doesn’t go'], 0, 'didn’t + base verb.'),
    fb('a1u09-t3', '___ you watch TV last night?', 'Did', 'Past question → Did.', undefined, 'Write the missing word.'),
    fb('a1u09-t4', 'They ___ (buy) a new car two years ago.', 'bought', 'buy → bought.', undefined, 'Write the Past Simple.'),
    tf('a1u09-t5', '“Ago” is used with a time in the past, like “two days ago”.', true, 'Two days ago = hace dos días.'),
    tf('a1u09-t6', 'In the past negative we say “didn’t + past verb”.', false, 'After didn’t we use the base verb.'),
    wo('a1u09-t7', ['to', 'went', 'We', 'the', 'beach', 'yesterday'], ['We', 'went', 'to', 'the', 'beach', 'yesterday'], 'Subject + past verb + place + time.'),
    mc('a1u09-t8', 'Choose the past of “study”.', ['studyed', 'studied', 'studid'], 1, 'Consonant + y → ied.'),
    tr('a1u09-t9', 'Make the sentence negative.', 'He ate fish.', 'He didn’t eat fish', 'didn’t + eat.', ['He did not eat fish']),
    mc('a1u09-t10', 'Choose the correct question.', ['Did you visit her?', 'Did you visited her?', 'Do you visited her?'], 0, 'Did + base verb.')
  ],
  review: ['Past Simple = finished action in the past.', 'Regular: verb + ed. Irregular: learn them (went, had, saw, ate, bought).', 'Negative: didn’t + base verb. Question: Did + subject + base verb.', 'was/were is the past of to be.', 'Time words: yesterday, last night, last week, ago.']
};
export default unit;
