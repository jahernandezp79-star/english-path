import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'a2-u01', level: 'A2', unitNumber: 1, title: 'Personal Experiences', subtitle: 'Talk about what you have done in your life',
  communicativeGoal: 'Hablar de experiencias personales: lo que has hecho, lo que nunca has hecho y lo que todavía no has hecho.',
  objectives: ['Formar el Present Perfect (have/has + participio) en afirmativo, negativo y pregunta.', 'Usar ever, never, already y yet en la posición correcta.', 'Distinguir cuándo usar Present Perfect y cuándo Past Simple.', 'Contar experiencias de vida con detalles en una conversación.'],
  grammar: {
    title: 'Present Perfect with ever, never, already and yet',
    explanation: [
      'El Present Perfect se forma con have/has + participio pasado: I have visited Spain. She has seen that film. Se usa para experiencias de vida cuando el momento exacto no importa o no se dice: he estado, he probado, he visto. Se traduce muchas veces con “he/has + participio”.',
      'Los participios regulares terminan en -ed (visited, climbed). Los irregulares hay que aprenderlos: be → been, see → seen, eat → eaten, do → done, go → gone/been, meet → met, ride → ridden, write → written, fly → flown.',
      'Ever (alguna vez) se usa en preguntas: Have you ever climbed a mountain? Never (nunca) va en afirmativo con sentido negativo: I have never ridden a horse. Already (ya) va en afirmativo, antes del participio o al final: I’ve already finished. Yet (todavía / ya) va al final de negativos y preguntas: I haven’t finished yet. Have you finished yet?',
      'No uses el Present Perfect con un momento terminado del pasado (yesterday, last year, in 2020): ahí se usa el Past Simple. Compara: I have visited Rome (experiencia) / I visited Rome last summer (cuándo). Also: has been to (fue y volvió) frente a has gone to (está allí ahora).'
    ],
    forms: [
      { label: 'Affirmative', lines: ['I have visited Spain. / I’ve visited Spain.', 'She has already finished her report.', 'We have never eaten sushi.', 'They’ve been to Mexico twice.'] },
      { label: 'Negative', lines: ['I haven’t tried Japanese food.', 'He hasn’t called me yet.', 'We haven’t decided yet.', 'I have never ridden a horse.'] },
      { label: 'Questions and short answers', lines: ['Have you ever climbed a mountain? — Yes, I have. / No, I haven’t.', 'Has she finished yet? — Yes, she has. / No, she hasn’t.', 'How many countries have you visited?', 'What is the most exciting thing you have done?'] }
    ]
  },
  vocabulary: [v('experience', 'experiencia', '/ɪkˈspɪəriəns/', 'ex-PE-ri-ence'), v('abroad', 'en el extranjero', '/əˈbrɔːd/', 'a-BROAD'), v('adventure', 'aventura', '/ədˈventʃə/', 'ad-VEN-ture'), v('try', 'probar, intentar', '/traɪ/', 'TRY'), v('climb', 'escalar', '/klaɪm/', 'CLIMB'), v('ride', 'montar', '/raɪd/', 'RIDE'), v('meet', 'conocer, encontrarse', '/miːt/', 'MEET'), v('famous', 'famoso', '/ˈfeɪməs/', 'FA-mous'), v('scary', 'aterrador', '/ˈskeəri/', 'SCA-ry'), v('exciting', 'emocionante', '/ɪkˈsaɪtɪŋ/', 'ex-CI-ting'), v('amazing', 'increíble', '/əˈmeɪzɪŋ/', 'a-MA-zing'), v('lucky', 'afortunado', '/ˈlʌki/', 'LU-cky'), v('mountain', 'montaña', '/ˈmaʊntən/', 'MOUN-tain'), v('festival', 'festival', '/ˈfestɪvl/', 'FES-ti-val'), v('volunteer', 'voluntario; ser voluntario', '/ˌvɒlənˈtɪə/', 'vo-lun-TEER'), v('once', 'una vez', '/wʌns/', 'ONCE')],
  examples: [
    { en: 'I have visited five countries, but I have never been to Asia.', es: 'He visitado cinco países, pero nunca he estado en Asia.' },
    { en: 'Have you ever tried Colombian coffee from the mountains?', es: '¿Alguna vez has probado café colombiano de las montañas?' },
    { en: 'She has already booked her flight, so she is very excited.', es: 'Ella ya reservó su vuelo, así que está muy emocionada.' },
    { en: 'We haven’t seen the new exhibition yet.', es: 'Todavía no hemos visto la nueva exposición.' },
    { en: 'He has met several famous people because he works in television.', es: 'Ha conocido a varias personas famosas porque trabaja en televisión.' },
    { en: 'I have climbed a mountain once; I did it two years ago.', es: 'He escalado una montaña una vez; lo hice hace dos años.' },
    { en: 'They have never ridden a horse, but they would love to try.', es: 'Nunca han montado a caballo, pero les encantaría intentarlo.' },
    { en: 'Has your brother ever worked abroad?', es: '¿Tu hermano alguna vez ha trabajado en el extranjero?' }
  ],
  dialogue: [
    { speaker: 'Nora', text: 'Dan, have you ever travelled abroad?', es: 'Dan, ¿alguna vez has viajado al extranjero?' },
    { speaker: 'Dan', text: 'Yes, I have. I’ve been to Mexico and Peru, but I’ve never been to Europe.', es: 'Sí. He estado en México y Perú, pero nunca he estado en Europa.' },
    { speaker: 'Nora', text: 'Really? I’ve already visited three European countries.', es: '¿En serio? Yo ya he visitado tres países europeos.' },
    { speaker: 'Dan', text: 'Wow! Have you ever tried the local food there?', es: '¡Vaya! ¿Alguna vez has probado la comida local de allá?' },
    { speaker: 'Nora', text: 'Of course. I’ve eaten paella in Spain and pizza in Italy.', es: 'Claro. He comido paella en España y pizza en Italia.' },
    { speaker: 'Dan', text: 'That sounds amazing. Have you ever done anything scary?', es: 'Suena increíble. ¿Alguna vez has hecho algo aterrador?' },
    { speaker: 'Nora', text: 'Well, I’ve climbed a mountain. I did it in Switzerland last summer.', es: 'Bueno, he escalado una montaña. Lo hice en Suiza el verano pasado.' },
    { speaker: 'Dan', text: 'Was it difficult?', es: '¿Fue difícil?' },
    { speaker: 'Nora', text: 'Very, but I haven’t forgotten the view. Have you booked your trip yet?', es: 'Muy difícil, pero no he olvidado la vista. ¿Ya reservaste tu viaje?' },
    { speaker: 'Dan', text: 'Not yet. I haven’t decided where to go.', es: 'Todavía no. No he decidido adónde ir.' }
  ],
  listening: {
    script: [
      { speaker: 'Host', text: 'Today we’re talking about interesting experiences. Carla, have you ever lived abroad?' },
      { speaker: 'Carla', text: 'Yes, I lived in Canada for two years, so I’ve already learned a lot about different cultures.' },
      { speaker: 'Host', text: 'Have you ever worked as a volunteer?' },
      { speaker: 'Carla', text: 'I have. Last year I worked in a school in Africa. It was an amazing experience.' },
      { speaker: 'Host', text: 'Is there anything you haven’t tried yet?' },
      { speaker: 'Carla', text: 'Yes! I’ve never flown in a hot air balloon, but I’m going to do it next summer.' }
    ],
    questions: [
      mc('a2u01-l1', 'How long did Carla live in Canada?', ['One year', 'Two years', 'Five years'], 1, 'She lived in Canada for two years.'),
      mc('a2u01-l2', 'Where did she work as a volunteer?', ['In a school', 'In a hospital', 'In a restaurant'], 0, 'She worked in a school in Africa.'),
      tf('a2u01-l3', 'Carla has flown in a hot air balloon.', false, 'She says she has never flown in one.'),
      mc('a2u01-l4', 'What is Carla going to do next summer?', ['Fly in a hot air balloon', 'Live in Canada again', 'Climb a mountain'], 0, 'She is going to fly in a hot air balloon.')
    ]
  },
  reading: {
    title: 'A year of firsts',
    text: 'Last year, Javier decided to leave his comfort zone. He has always been shy, but he has now tried many things he never thought about. He has joined a theatre group and he has performed in front of two hundred people. He has also travelled alone for the first time: he has visited Chile and Argentina, and he has met people from ten different countries. Although he hasn’t learned to dance yet, he has taken three salsa lessons. His sister says he has changed a lot. “Javier has never been so happy,” she says.',
    questions: [
      rc('a2u01-r1', 'What did Javier decide to do last year?', ['Leave his comfort zone', 'Move to Chile', 'Change jobs'], 0, 'He decided to leave his comfort zone.'),
      rc('a2u01-r2', 'What has Javier done in front of an audience?', ['Performed in a theatre group', 'Taught a class', 'Sung a song'], 0, 'He has performed in front of two hundred people.'),
      rc('a2u01-r3', 'Has Javier learned to dance?', ['Yes, he has completely.', 'Not yet, but he has had lessons.', 'No, he has never tried.'], 1, 'He hasn’t learned to dance yet, but he has taken three salsa lessons.'),
      rc('a2u01-r4', 'What does his sister think?', ['He has changed and is happier', 'He has become more shy', 'He travels too much'], 0, 'She says he has changed a lot and has never been so happy.')
    ]
  },
  speaking: { prompt: 'Haz una conversación libre de 2 minutos con un compañero sobre sus experiencias de vida. Tú también contestas.', tasks: ['Ask three “Have you ever…?” questions (travel, food, sports).', 'Answer with a short answer and add one detail in the Past Simple.', 'Say one thing you have never done and one thing you have already done this year.', 'Say something you haven’t done yet but you want to do.'] },
  writing: { prompt: 'Write 8 to 10 sentences about your life experiences. Include places, food and activities. Use ever, never, already and yet at least once each.', rubric: ['Uses have/has + past participle correctly.', 'Uses ever, never, already and yet in the right position.', 'Uses the Past Simple when you say when something happened.', 'Links ideas with words like but, although and because.'], model: 'I have visited four cities, but I have never been abroad. I have already tried Japanese food and I loved it. Last year I climbed a small mountain with my friends. I haven’t ridden a horse yet, but I would like to try. Have you ever done anything scary?' },
  pronunciation: {
    items: [{ word: 'experience', ipa: '/ɪkˈspɪəriəns/', stress: 'ex-PE-ri-ence' }, { word: 'adventure', ipa: '/ədˈventʃə/', stress: 'ad-VEN-ture' }, { word: 'volunteer', ipa: '/ˌvɒlənˈtɪə/', stress: 'vo-lun-TEER' }, { word: 'mountain', ipa: '/ˈmaʊntən/', stress: 'MOUN-tain' }, { word: 'haven’t', ipa: '/ˈhævnt/', stress: 'HAV-n’t' }],
    tips: ['I’ve y she’s son contracciones: se pronuncian rápido y sin fuerza.', 'En volunteer la fuerza cae en la última sílaba, algo poco habitual.', 'Ever suena /ˈevə/: la r final casi no se pronuncia en inglés británico.']
  },
  exercises: [
    mc('a2u01-e1', 'I ___ never been to Japan.', ['has', 'have', 'am'], 1, 'I → have.', 'Choose the correct word.'),
    fb('a2u01-e2', 'She has ___ (see) that film three times.', 'seen', 'see → saw → seen.', undefined, 'Write the past participle.'),
    fb('a2u01-e3', 'Have you ___ tried Colombian coffee?', 'ever', 'ever = alguna vez, in questions.', undefined, 'Write the missing word.'),
    wo('a2u01-e4', ['you', 'ever', 'Have', 'visited', 'Spain'], ['Have', 'you', 'ever', 'visited', 'Spain'], 'Have + subject + ever + participle.'),
    tf('a2u01-e5', '“I have visited Paris last year” is correct.', false, 'With last year use the Past Simple: “I visited Paris last year.”'),
    mt('a2u01-e6', 'Match each word with its use.', [['ever', 'in questions: at any time in your life'], ['never', 'not at any time'], ['already', 'affirmative: before now'], ['yet', 'negatives and questions: until now']], 'Position matters: already before the participle, yet at the end.'),
    tr('a2u01-e7', 'Rewrite in the Present Perfect with already.', 'She visited Peru.', 'She has already visited Peru', 'has + already + participle.', ['She’s already visited Peru']),
    tr('a2u01-e8', 'Add yet to the sentence.', 'He hasn’t called.', 'He hasn’t called yet', 'yet goes at the end.', ['He has not called yet']),
    rc('a2u01-e9', 'What hasn’t Mia done yet?', ['Finished her degree', 'Found a job', 'Sent applications'], 1, 'She hasn’t found a job yet.', 'Mia has already finished her degree, but she hasn’t found a job yet. She has sent twenty applications.'),
    sa('a2u01-e10', 'Write 4 sentences about your experiences: two with ever or never, one with already and one with yet.', 'Model: “I have never ridden a horse. Have you ever been to Cartagena? I have already finished my course. I haven’t seen that film yet.” Check: have/has + participle and the position of the adverbs.')
  ],
  assessment: [
    mc('a2u01-t1', 'Have you ___ eaten sushi?', ['ever', 'yet', 'already'], 0, 'Ever is used in questions about experience.'),
    mc('a2u01-t2', 'He ___ his homework already.', ['has done', 'have done', 'did done'], 0, 'He → has + done.'),
    fb('a2u01-t3', 'I haven’t finished my report ___.', 'yet', 'yet at the end of negatives.', undefined, 'Write the missing word.'),
    fb('a2u01-t4', 'They have ___ been to Asia. (not once)', 'never', 'never = not at any time.', undefined, 'Write the missing word.'),
    tf('a2u01-t5', 'We use the Present Perfect with “yesterday”.', false, 'With yesterday use the Past Simple.'),
    tf('a2u01-t6', '“Never” means “not at any time”.', true, 'I have never been to Asia = I haven’t been there at any time.'),
    wo('a2u01-t7', ['you', 'Have', 'ever', 'climbed', 'a', 'mountain'], ['Have', 'you', 'ever', 'climbed', 'a', 'mountain'], 'Have you ever + participle…?'),
    mc('a2u01-t8', 'Choose the correct sentence.', ['I have seen her last week.', 'I saw her last week.', 'I have saw her last week.'], 1, 'Last week is a finished time → Past Simple.'),
    tr('a2u01-t9', 'Make the sentence negative and add yet.', 'She has finished her report.', 'She hasn’t finished her report yet', 'hasn’t + participle + yet.', ['She has not finished her report yet']),
    mc('a2u01-t10', 'Choose the past participle of “ride”.', ['rode', 'ridden', 'rided'], 1, 'ride → rode → ridden.')
  ],
  review: ['Present Perfect = have/has + past participle.', 'Use it for life experiences and results connected to now.', 'ever in questions, never in affirmatives, already in affirmatives, yet in negatives and questions.', 'Do not use it with finished times (yesterday, last year, in 2020).', 'been to = went and came back; gone to = is there now.']
};
export default unit;
