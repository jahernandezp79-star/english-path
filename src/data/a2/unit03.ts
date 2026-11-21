import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'a2-u03', level: 'A2', unitNumber: 3, title: 'Travel', subtitle: 'Book, travel and solve everyday problems on a trip',
  communicativeGoal: 'Viajar, hacer reservas y resolver situaciones habituales en aeropuertos y hoteles, y contar viajes pasados.',
  objectives: ['Distinguir el Past Simple (momento terminado) del Present Perfect (experiencia o resultado actual).', 'Usar just, already, yet y expresiones como last summer o two years ago con el tiempo correcto.', 'Hacer y confirmar reservas y resolver problemas de viaje.', 'Contar un viaje con detalles en orden.'],
  grammar: {
    title: 'Past Simple vs Present Perfect',
    explanation: [
      'Usamos el Past Simple cuando hablamos de un momento terminado del pasado, dicho o claramente entendido: I went to Cartagena last summer. When did you arrive? Aparece con yesterday, last week, in 2019, two years ago.',
      'Usamos el Present Perfect (have/has + participio) cuando no importa cuándo pasó o cuando el resultado importa ahora: I have lost my passport (y no lo tengo). Have you ever flown alone? Aparece con ever, never, just, already, yet, recently y periodos que no han terminado: this week, this year, so far.',
      'Patrón muy común: empezar con el Present Perfect y dar detalles con el Past Simple. Have you ever been to Peru? — Yes, I have. I went there in 2022 and I visited Machu Picchu.',
      'Con When…? y con un momento concreto se usa siempre el Past Simple: When did you book the hotel? — I booked it last week. Nunca: “I have booked it last week”.'
    ],
    forms: [
      { label: 'Past Simple', lines: ['I went to Cartagena last year.', 'We didn’t stay in a hotel.', 'When did you arrive? — We arrived at six.', 'The flight was late.'] },
      { label: 'Present Perfect', lines: ['I have lost my luggage.', 'They haven’t arrived yet.', 'The flight has just left.', 'Have you ever flown alone? — Yes, I have.'] },
      { label: 'Contrast', lines: ['I have visited Lima. I went there in 2021.', 'She has already checked in. She did it online this morning.', 'We have had three trips this year, but we didn’t go abroad last year.'] }
    ]
  },
  vocabulary: [v('reservation', 'reserva', '/ˌrezəˈveɪʃn/', 'res-er-VA-tion'), v('flight', 'vuelo', '/flaɪt/', 'FLIGHT'), v('passport', 'pasaporte', '/ˈpɑːspɔːt/', 'PASS-port'), v('luggage', 'equipaje', '/ˈlʌɡɪdʒ/', 'LUG-gage'), v('delay', 'retraso; retrasar', '/dɪˈleɪ/', 'de-LAY'), v('cancel', 'cancelar', '/ˈkænsl/', 'CAN-cel'), v('check in', 'registrarse', '/tʃek ɪn/', 'check IN'), v('reception', 'recepción', '/rɪˈsepʃn/', 're-CEP-tion'), v('available', 'disponible', '/əˈveɪləbl/', 'a-VAI-la-ble'), v('double room', 'habitación doble', '/ˈdʌbl ruːm/', 'DOU-ble room'), v('tourist', 'turista', '/ˈtʊərɪst/', 'TOU-rist'), v('souvenir', 'recuerdo', '/ˌsuːvəˈnɪə/', 'sou-ve-NIR'), v('journey', 'viaje, trayecto', '/ˈdʒɜːni/', 'JOUR-ney'), v('destination', 'destino', '/ˌdestɪˈneɪʃn/', 'des-ti-NA-tion'), v('receipt', 'recibo', '/rɪˈsiːt/', 're-CEIPT'), v('lost', 'perdido', '/lɒst/', 'LOST')],
  examples: [
    { en: 'I have visited Cusco twice. The first time I went with my school in 2018.', es: 'He visitado Cusco dos veces. La primera vez fui con mi colegio en 2018.' },
    { en: 'The flight has been late, so we haven’t had lunch yet.', es: 'El vuelo se ha retrasado, así que todavía no hemos almorzado.' },
    { en: 'When did you book the hotel? — I booked it a month ago.', es: '¿Cuándo reservaste el hotel? — Lo reservé hace un mes.' },
    { en: 'She has just checked in and she is going to the room.', es: 'Ella acaba de registrarse y va a la habitación.' },
    { en: 'We didn’t visit the museum because it was closed.', es: 'No visitamos el museo porque estaba cerrado.' },
    { en: 'Have you ever lost your passport? — Yes, I lost it in Madrid last year.', es: '¿Alguna vez has perdido tu pasaporte? — Sí, lo perdí en Madrid el año pasado.' },
    { en: 'This year I have travelled to three cities already.', es: 'Este año ya he viajado a tres ciudades.' },
    { en: 'They bought a lot of souvenirs, but they haven’t paid yet.', es: 'Compraron muchos recuerdos, pero todavía no han pagado.' }
  ],
  dialogue: [
    { speaker: 'Receptionist', text: 'Good evening. Do you have a reservation?', es: 'Buenas noches. ¿Tiene una reserva?' },
    { speaker: 'Guest', text: 'Yes, I do. I booked a double room online two weeks ago. The name is Torres.', es: 'Sí. Reservé una habitación doble por internet hace dos semanas. El apellido es Torres.' },
    { speaker: 'Receptionist', text: 'I can see it. How many nights are you staying?', es: 'La veo. ¿Cuántas noches se queda?' },
    { speaker: 'Guest', text: 'Three nights. I’ve just arrived from Bogotá and my flight was delayed, so I’m very tired.', es: 'Tres noches. Acabo de llegar de Bogotá y mi vuelo se retrasó, así que estoy muy cansado.' },
    { speaker: 'Receptionist', text: 'I’m sorry to hear that. Have you filled in the registration form?', es: 'Lamento oírlo. ¿Ha llenado el formulario de registro?' },
    { speaker: 'Guest', text: 'Not yet. Also, I’ve lost my luggage. The airline hasn’t found it yet.', es: 'Todavía no. Además, he perdido mi equipaje. La aerolínea todavía no lo ha encontrado.' },
    { speaker: 'Receptionist', text: 'Oh no. Have you spoken to the airline?', es: 'Ay no. ¿Ha hablado con la aerolínea?' },
    { speaker: 'Guest', text: 'Yes, I called them an hour ago. They told me to wait until tomorrow.', es: 'Sí, los llamé hace una hora. Me dijeron que esperara hasta mañana.' },
    { speaker: 'Receptionist', text: 'In the meantime, we can lend you a toothbrush and some towels. Here is your key. Room 305.', es: 'Mientras tanto, podemos prestarle un cepillo de dientes y toallas. Aquí está su llave. Habitación 305.' },
    { speaker: 'Guest', text: 'Thank you very much. What time is breakfast?', es: 'Muchas gracias. ¿A qué hora es el desayuno?' }
  ],
  listening: {
    script: [
      { speaker: 'Agent', text: 'Good morning. Passport and booking, please.' }, { speaker: 'Passenger', text: 'Here you are. I’ve already checked in online.' },
      { speaker: 'Agent', text: 'Perfect. Did you pack your bag yourself?' }, { speaker: 'Passenger', text: 'Yes, I did. I packed it last night.' },
      { speaker: 'Agent', text: 'I’m sorry, your flight is delayed. It leaves at six instead of four.' }, { speaker: 'Passenger', text: 'Oh no! Has the gate changed?' },
      { speaker: 'Agent', text: 'Not yet. Please check the screen in an hour.' }
    ],
    questions: [
      mc('a2u03-l1', 'How did the passenger check in?', ['Online', 'At a machine', 'At the gate'], 0, 'She has already checked in online.'),
      mc('a2u03-l2', 'When did the passenger pack the bag?', ['This morning', 'Last night', 'Two days ago'], 1, 'She says: “I packed it last night.”'),
      mc('a2u03-l3', 'What time does the flight leave now?', ['At four', 'At six', 'At eight'], 1, 'It leaves at six instead of four.'),
      tf('a2u03-l4', 'The gate has already changed.', false, 'The agent says: “Not yet.”')
    ]
  },
  reading: {
    title: 'A trip that went wrong',
    text: 'Last July, Daniela travelled to Spain with her sister. They booked everything online, but nothing went as planned. Their flight was delayed for five hours, and when they finally arrived in Madrid, the airline had lost one of their suitcases. At the hotel, the receptionist said there was no reservation under their name. Daniela has travelled many times, but she has never had so many problems in one day. In the end, a kind manager gave them a room and the next day the airline delivered the suitcase. Now Daniela always keeps copies of her bookings. She says the experience has taught her to be more careful.',
    questions: [
      rc('a2u03-r1', 'What happened to the flight?', ['It was delayed five hours', 'It was cancelled', 'It left early'], 0, 'The flight was delayed for five hours.'),
      rc('a2u03-r2', 'What problem did they have at the hotel?', ['There was no reservation in their name', 'The room was dirty', 'The hotel was closed'], 0, 'The receptionist said there was no reservation.'),
      rc('a2u03-r3', 'How did the story end?', ['A manager gave them a room and the suitcase arrived next day', 'They went home', 'They slept at the airport'], 0, 'A manager gave them a room and the airline delivered the suitcase.'),
      rc('a2u03-r4', 'What has Daniela learned?', ['To be more careful with bookings', 'Never to travel again', 'To fly less'], 0, 'She keeps copies of her bookings and is more careful.')
    ]
  },
  speaking: { prompt: 'Cuenta a un compañero un viaje real o imaginario y simula una conversación en recepción de hotel o en el aeropuerto.', tasks: ['Start with a Present Perfect question: “Have you ever been to …?” and answer with details in the Past Simple.', 'Role-play at a hotel: check in, mention a problem and ask for a solution.', 'Describe one problem on a trip: “The flight was delayed, so we …”.', 'Say what you haven’t done yet on a future trip.'] },
  writing: { prompt: 'Write 8 to 10 sentences about a trip you have taken or would like to take. Use the Past Simple for what happened and the Present Perfect for experiences or results.', rubric: ['Uses the Past Simple with finished time expressions.', 'Uses the Present Perfect for experiences and recent results.', 'Includes just, already or yet at least once.', 'Tells the story in a clear order (first, then, finally).'], model: 'I have travelled to four cities in Colombia. Last year I went to Cartagena with my family. First we flew from Bogotá and then we took a taxi to the hotel. We visited the old city and I bought some souvenirs. I haven’t been to San Andrés yet, but I have already looked at hotels online.' },
  pronunciation: {
    items: [{ word: 'passport', ipa: '/ˈpɑːspɔːt/', stress: 'PASS-port' }, { word: 'luggage', ipa: '/ˈlʌɡɪdʒ/', stress: 'LUG-gage' }, { word: 'reservation', ipa: '/ˌrezəˈveɪʃn/', stress: 'res-er-VA-tion' }, { word: 'souvenir', ipa: '/ˌsuːvəˈnɪə/', stress: 'sou-ve-NIR' }, { word: 'destination', ipa: '/ˌdestɪˈneɪʃn/', stress: 'des-ti-NA-tion' }],
    tips: ['Las palabras terminadas en -tion suenan /ʃn/ y la fuerza va en la sílaba anterior (reserVAtion).', 'En passport la a es larga /ɑː/ y la t suele casi no oírse.', 'He’s, I’ve y haven’t se pronuncian rápido y sin fuerza.']
  },
  exercises: [
    mc('a2u03-e1', 'I ___ my passport. Can you help me look for it?', ['lost', 'have lost', 'was losing'], 1, 'The result is important now → Present Perfect.', 'Choose the correct tense.'),
    fb('a2u03-e2', 'We ___ (arrive) in Lima two hours ago.', 'arrived', 'two hours ago → Past Simple.', undefined, 'Write the Past Simple.'),
    fb('a2u03-e3', 'Have you ___ (be) to Cartagena?', 'been', 'be → was/were → been.', undefined, 'Write the past participle.'),
    wo('a2u03-e4', ['did', 'When', 'you', 'arrive'], ['When', 'did', 'you', 'arrive'], 'When + did + subject + base verb.'),
    tf('a2u03-e5', '“I have been to Rome in 2019” is correct.', false, 'With in 2019 use the Past Simple: “I went to Rome in 2019.”'),
    mt('a2u03-e6', 'Match each sentence with its use.', [['I went to Cusco in 2019.', 'finished time: Past Simple'], ['I have been to Cusco twice.', 'experience: Present Perfect'], ['I have just arrived.', 'recent action: Present Perfect + just'], ['When did you arrive?', 'question about a finished time']], 'Look for time expressions.'),
    tr('a2u03-e7', 'Rewrite in the Present Perfect.', 'I lost my luggage.', 'I have lost my luggage', 'have + participle.', ['I’ve lost my luggage']),
    tr('a2u03-e8', 'Add “last week” and change the tense.', 'They have booked a hotel.', 'They booked a hotel last week', 'With last week use the Past Simple.'),
    rc('a2u03-e9', 'Why is Tom nervous?', ['He has never flown', 'He lost his ticket', 'He hates Quito'], 0, 'Tom has never flown.', 'Tom has never flown, so he is nervous. Last month he bought a ticket to Quito.'),
    sa('a2u03-e10', 'Write 4 sentences about a trip: two in the Past Simple and two in the Present Perfect.', 'Model: “I went to Santa Marta last year. We stayed in a small hotel. I have visited five cities. I haven’t been abroad yet.” Check: finished time → Past Simple; experience or result → Present Perfect.')
  ],
  assessment: [
    mc('a2u03-t1', 'We ___ to Italy last year.', ['have been', 'went', 'have gone'], 1, 'Last year → Past Simple.'),
    mc('a2u03-t2', 'I ___ my keys. I can’t get into the room.', ['lost', 'have lost', 'was losing'], 1, 'Present result → Present Perfect.'),
    fb('a2u03-t3', 'When ___ you check in?', 'did', 'When + did + subject.', undefined, 'Write the missing word.'),
    fb('a2u03-t4', 'They haven’t received the receipt ___.', 'yet', 'yet at the end of negatives.', undefined, 'Write the missing word.'),
    tf('a2u03-t5', 'We use the Past Simple with “two days ago”.', true, 'Two days ago is a finished time.'),
    tf('a2u03-t6', '“Have you ever visited London last year?” is correct.', false, 'Ever is used for experience; last year needs the Past Simple.'),
    wo('a2u03-t7', ['has', 'The', 'flight', 'just', 'left'], ['The', 'flight', 'has', 'just', 'left'], 'has + just + participle.'),
    mc('a2u03-t8', 'Choose the correct sentence.', ['I have seen him yesterday.', 'I saw him yesterday.', 'I have saw him yesterday.'], 1, 'Yesterday → Past Simple.'),
    tr('a2u03-t9', 'Rewrite in the Present Perfect with already.', 'She booked the room.', 'She has already booked the room', 'has + already + participle.', ['She’s already booked the room']),
    mc('a2u03-t10', 'Choose the best answer to: “Have you ever lost your luggage?”', ['Yes, I lost it in 2021.', 'Yes, I have. It happened in 2021.', 'Yes, I have lost it in 2021.'], 1, 'Short answer in the Present Perfect, details in the Past Simple.')
  ],
  review: ['Past Simple = finished time (last year, in 2019, ago, When did…?).', 'Present Perfect = experience or present result (ever, never, just, already, yet).', 'Start with Present Perfect, give details in Past Simple.', 'Never use the Present Perfect with a finished time expression.', 'Travel language: reservation, check in, delay, luggage, receipt.']
};
export default unit;
