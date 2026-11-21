import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'a2-u08', level: 'A2', unitNumber: 8, title: 'Stories and Memories', subtitle: 'Tell stories about the past',
  communicativeGoal: 'Narrar historias y recuerdos, distinguiendo lo que estaba pasando de lo que ocurrió de repente.',
  objectives: ['Formar el Past Continuous (was/were + -ing).', 'Combinar Past Continuous y Past Simple con when y while.', 'Contar una historia con orden, contexto y acciones.', 'Preguntar y responder sobre lo que alguien estaba haciendo.'],
  grammar: {
    title: 'Past Continuous + Past Simple, when and while',
    explanation: [
      'El Past Continuous se forma con was/were + verbo-ing y describe una acción en progreso en un momento del pasado o la situación de fondo de una historia: At eight I was cooking. They were playing football.',
      'El Past Simple expresa acciones terminadas o cortas, sobre todo las que interrumpen: I was walking home when it started to rain. La acción larga va en Past Continuous y la corta que la interrumpe, en Past Simple.',
      'When se usa normalmente con la acción corta (Past Simple): I was cooking when he arrived. While se usa con la acción larga (Past Continuous): While I was cooking, he arrived. Dos acciones largas a la vez: While I was cooking, he was watching TV.',
      'Negativo: wasn’t / weren’t + -ing. Preguntas: Was he sleeping? What were you doing at nine? Los verbos de estado (know, like, want) no se usan en continuo: I knew the answer (no “I was knowing”).',
      'Para contar una secuencia de acciones terminadas se usa solo el Past Simple: I opened the door, saw the box and called the police.'
    ],
    forms: [
      { label: 'Past Continuous', lines: ['I was studying at ten.', 'They were playing football.', 'We weren’t sleeping.', 'Were you working? — Yes, I was. / No, I wasn’t.'] },
      { label: 'Questions', lines: ['What were you doing at nine?', 'Who was she talking to?', 'Was it raining when you left?', 'Where were they living in 2015?'] },
      { label: 'Combining tenses', lines: ['I was walking home when I saw an accident.', 'While we were eating, the lights went out.', 'When she called, I was driving.', 'While I was cooking, he was watching TV.'] }
    ]
  },
  vocabulary: [v('memory', 'recuerdo, memoria', '/ˈmeməri/', 'ME-mo-ry'), v('childhood', 'infancia', '/ˈtʃaɪldhʊd/', 'CHILD-hood'), v('event', 'evento, suceso', '/ɪˈvent/', 'e-VENT'), v('wedding', 'boda', '/ˈwedɪŋ/', 'WED-ding'), v('accident', 'accidente', '/ˈæksɪdənt/', 'AC-ci-dent'), v('suddenly', 'de repente', '/ˈsʌdənli/', 'SUD-den-ly'), v('notice', 'notar, darse cuenta', '/ˈnəʊtɪs/', 'NO-tice'), v('realise', 'darse cuenta', '/ˈrɪəlaɪz/', 'RE-a-lise'), v('remember', 'recordar', '/rɪˈmembə/', 're-MEM-ber'), v('forget', 'olvidar', '/fəˈɡet/', 'for-GET'), v('laugh', 'reír', '/lɑːf/', 'LAUGH'), v('cry', 'llorar', '/kraɪ/', 'CRY'), v('argue', 'discutir', '/ˈɑːɡjuː/', 'AR-gue'), v('surprised', 'sorprendido', '/səˈpraɪzd/', 'sur-PRISED'), v('embarrassed', 'avergonzado', '/ɪmˈbærəst/', 'em-BA-rassed'), v('storm', 'tormenta', '/stɔːm/', 'STORM')],
  examples: [
    { en: 'I was walking home when I saw an accident.', es: 'Iba caminando a casa cuando vi un accidente.' },
    { en: 'While we were having dinner, the lights went out.', es: 'Mientras cenábamos, se fue la luz.' },
    { en: 'What were you doing at ten o’clock last night?', es: '¿Qué estabas haciendo anoche a las diez?' },
    { en: 'She wasn’t listening because she was thinking about the exam.', es: 'Ella no escuchaba porque estaba pensando en el examen.' },
    { en: 'When I arrived, my parents were already waiting for me.', es: 'Cuando llegué, mis padres ya me estaban esperando.' },
    { en: 'It was raining heavily, so we stayed at home.', es: 'Llovía muy fuerte, así que nos quedamos en casa.' },
    { en: 'While he was driving, he noticed a strange noise.', es: 'Mientras conducía, notó un ruido extraño.' },
    { en: 'We were laughing so much that we forgot the time.', es: 'Nos reíamos tanto que olvidamos la hora.' }
  ],
  dialogue: [
    { speaker: 'Ana', text: 'Pedro, do you remember our trip to the beach when we were children?', es: 'Pedro, ¿te acuerdas de nuestro viaje a la playa cuando éramos niños?' },
    { speaker: 'Pedro', text: 'Of course! We were playing in the sand when a huge wave came.', es: '¡Claro! Estábamos jugando en la arena cuando llegó una ola enorme.' },
    { speaker: 'Ana', text: 'Yes! Mum was reading under the umbrella while Dad was buying ice cream.', es: '¡Sí! Mamá leía bajo la sombrilla mientras papá compraba helados.' },
    { speaker: 'Pedro', text: 'And suddenly the wave took our bags. We were so surprised.', es: 'Y de repente la ola se llevó nuestras bolsas. Estábamos muy sorprendidos.' },
    { speaker: 'Ana', text: 'I was crying, but you were laughing.', es: 'Yo lloraba, pero tú te reías.' },
    { speaker: 'Pedro', text: 'Because Dad was running after the bags! He looked so funny.', es: '¡Porque papá corría detrás de las bolsas! Se veía muy gracioso.' },
    { speaker: 'Ana', text: 'Then a man helped him while we were watching from the sand.', es: 'Después un hombre lo ayudó mientras mirábamos desde la arena.' },
    { speaker: 'Pedro', text: 'Later we were eating ice cream and Dad was telling the story to everyone.', es: 'Más tarde comíamos helado y papá le contaba la historia a todo el mundo.' },
    { speaker: 'Ana', text: 'He was a bit embarrassed, wasn’t he?', es: 'Estaba un poco avergonzado, ¿no?' },
    { speaker: 'Pedro', text: 'Yes, but he was laughing too. It’s my favourite memory.', es: 'Sí, pero él también se reía. Es mi recuerdo favorito.' }
  ],
  listening: {
    script: [
      { speaker: 'Police', text: 'Can you tell me what you were doing when the accident happened?' }, { speaker: 'Witness', text: 'I was waiting for the bus at the corner.' },
      { speaker: 'Police', text: 'What did you see?' }, { speaker: 'Witness', text: 'A red car was driving fast while a boy was crossing the street. The driver didn’t notice him.' },
      { speaker: 'Police', text: 'What happened then?' }, { speaker: 'Witness', text: 'The car stopped suddenly and the boy ran to the pavement. Luckily nobody was hurt.' },
      { speaker: 'Police', text: 'Were you talking to anyone at that moment?' }, { speaker: 'Witness', text: 'No, I was listening to music, but I heard the noise and I looked up.' }
    ],
    questions: [
      mc('a2u08-l1', 'What was the witness doing?', ['Waiting for the bus', 'Driving', 'Crossing the street'], 0, 'He was waiting for the bus at the corner.'),
      mc('a2u08-l2', 'What was the red car doing?', ['Driving fast', 'Parking', 'Waiting'], 0, 'A red car was driving fast.'),
      tf('a2u08-l3', 'Somebody was hurt.', false, 'The witness says nobody was hurt.'),
      mc('a2u08-l4', 'What was the witness listening to?', ['Music', 'The radio news', 'A phone call'], 0, 'He was listening to music.')
    ]
  },
  reading: {
    title: 'My first day at school',
    text: 'I still remember my first day at school. It was a rainy morning and I was wearing a uniform that was too big. While my mother was talking to the teacher, I was looking at the other children. Some were crying and others were laughing. Suddenly, a boy came to me and asked, “Do you want to play?” We were building a tower with blocks when the bell rang. I was so embarrassed because I didn’t know what it meant. The boy laughed and explained that it was time to go home. He is still my best friend today.',
    questions: [
      rc('a2u08-r1', 'What was the narrator wearing?', ['A uniform that was too big', 'A raincoat', 'A new jacket'], 0, 'The uniform was too big.'),
      rc('a2u08-r2', 'What was the narrator’s mother doing?', ['Talking to the teacher', 'Waiting outside', 'Crying'], 0, 'She was talking to the teacher.'),
      rc('a2u08-r3', 'What were they doing when the bell rang?', ['Building a tower', 'Playing outside', 'Having lunch'], 0, 'They were building a tower with blocks.'),
      rc('a2u08-r4', 'Why was the narrator embarrassed?', ['They didn’t know what the bell meant', 'They were crying', 'The boy laughed at the uniform'], 0, 'They didn’t know what the bell meant.')
    ]
  },
  speaking: { prompt: 'Cuéntale a un compañero un recuerdo importante de tu infancia o un suceso inesperado. Tu compañero hace preguntas.', tasks: ['Set the scene: “It was a … day. I was … when …”.', 'Use when with a sudden action and while with a longer action.', 'Describe how you felt: “I was surprised / embarrassed because …”.', 'Ask your partner: “What were you doing when …?”'] },
  writing: { prompt: 'Write a story or memory (8 to 10 sentences). Describe the situation with the Past Continuous and the main events with the Past Simple, and use when, while and suddenly.', rubric: ['Uses the Past Continuous for background and actions in progress.', 'Uses the Past Simple for the main events.', 'Uses when and while correctly.', 'Has a beginning, an event and an ending.'], model: 'It was a stormy night and I was studying in my room. My brother was watching TV in the living room. Suddenly, the lights went out. While I was looking for a torch, I heard a loud noise. I opened the door and saw my brother. He was laughing because he had fallen off the sofa in the dark.' },
  pronunciation: {
    items: [{ word: 'was', ipa: '/wəz/', stress: 'was (weak)' }, { word: 'were', ipa: '/wə/', stress: 'were (weak)' }, { word: 'suddenly', ipa: '/ˈsʌdənli/', stress: 'SUD-den-ly' }, { word: 'embarrassed', ipa: '/ɪmˈbærəst/', stress: 'em-BA-rassed' }, { word: 'childhood', ipa: '/ˈtʃaɪldhʊd/', stress: 'CHILD-hood' }],
    tips: ['Was y were suenan débiles /wəz/ y /wə/ en una frase normal; solo suenan fuertes en respuestas cortas (Yes, I was).', 'Las terminaciones -ed después de t o d suenan /ɪd/ (waited).', 'En suddenly la fuerza va en la primera sílaba.']
  },
  exercises: [
    mc('a2u08-e1', 'I ___ when the phone rang.', ['was sleeping', 'slept', 'sleeping'], 0, 'Action in progress → Past Continuous.', 'Choose the correct form.'),
    fb('a2u08-e2', 'We ___ (watch) TV when the lights went out.', 'were watching', 'we → were + -ing.', undefined, 'Write the Past Continuous.'),
    fb('a2u08-e3', 'While she ___ (cook), he was cleaning.', 'was cooking', 'she → was + -ing.', undefined, 'Write the Past Continuous.'),
    wo('a2u08-e4', ['were', 'What', 'doing', 'you', 'at', 'nine'], ['What', 'were', 'you', 'doing', 'at', 'nine'], 'Question word + were + subject + -ing.'),
    tf('a2u08-e5', 'In “While I was walking, it started to rain”, walking is the longer action.', true, 'The long action uses the Past Continuous.'),
    mt('a2u08-e6', 'Match each item with its use.', [['I was walking home', 'action in progress'], ['it started to rain', 'sudden action'], ['while', 'goes with a long action'], ['when', 'goes with a short or interrupting action']], 'Long action = background; short action = event.'),
    tr('a2u08-e7', 'Use the Past Continuous for the first action.', 'I walked home when it started to rain.', 'I was walking home when it started to rain', 'was + -ing for the longer action.'),
    tr('a2u08-e8', 'Make the sentence negative.', 'They were playing football.', 'They weren’t playing football', 'weren’t + -ing.', ['They were not playing football']),
    rc('a2u08-e9', 'What was Sara doing when the lights went out?', ['Cooking dinner', 'Watching TV', 'Sleeping'], 0, 'She was cooking dinner.', 'Sara was cooking dinner when the lights went out. She was scared, but her brother was holding a torch.'),
    sa('a2u08-e10', 'Write 4 sentences about a memory: two with the Past Continuous, one with when and one with while.', 'Model: “It was raining. I was walking home when I met an old friend. While we were talking, the bus left.” Check: was/were + -ing and the Past Simple for the sudden events.')
  ],
  assessment: [
    mc('a2u08-t1', 'While I ___ home, I saw an accident.', ['was walking', 'walked', 'am walking'], 0, 'Long action with while → Past Continuous.'),
    mc('a2u08-t2', 'She ___ when I called.', ['was driving', 'drive', 'has driving'], 0, 'Action in progress → was driving.'),
    fb('a2u08-t3', 'What ___ you doing at ten last night?', 'were', 'you → were.', undefined, 'Write the missing word.'),
    fb('a2u08-t4', 'I was sleeping ___ the phone rang.', 'when', 'When goes with the short action.', undefined, 'Write when or while.'),
    tf('a2u08-t5', 'We use the Past Continuous for a sudden short action.', false, 'Sudden actions use the Past Simple.'),
    tf('a2u08-t6', 'While usually goes with a longer action in progress.', true, 'While + Past Continuous.'),
    wo('a2u08-t7', ['was', 'I', 'cooking', 'when', 'arrived', 'he'], ['I', 'was', 'cooking', 'when', 'he', 'arrived'], 'Long action + when + short action.'),
    mc('a2u08-t8', 'Choose the correct sentence.', ['I was knowing the answer.', 'I knew the answer.', 'I was knew the answer.'], 1, 'Know is a stative verb.'),
    tr('a2u08-t9', 'Make the sentence a question.', 'They were waiting for the bus.', 'Were they waiting for the bus', 'Were + subject + -ing?'),
    mc('a2u08-t10', 'Choose the best ending: “While we were having dinner, …”', ['the lights went out.', 'the lights were going out.', 'the lights goes out.'], 0, 'The interrupting event uses the Past Simple.')
  ],
  review: ['Past Continuous = was/were + -ing (action in progress, background).', 'Past Simple = short, finished or interrupting action.', 'when + short action; while + long action.', 'Negative: wasn’t / weren’t + -ing. Question: Was/Were + subject + -ing?', 'Stative verbs (know, like, want) do not usually take the continuous.']
};
export default unit;
