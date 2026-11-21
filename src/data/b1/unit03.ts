import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'b1-u03', level: 'B1', unitNumber: 3, title: 'Storytelling', subtitle: 'Tell experiences and events in a clear, engaging way',
  communicativeGoal: 'Narrar experiencias y acontecimientos del pasado con orden, contexto y recursos para mantener el interés del oyente.',
  objectives: ['Distinguir y combinar Past Simple, Past Continuous y Past Perfect.', 'Usar conectores de secuencia (when, while, after, before, by the time, as soon as).', 'Usar expresiones propias de la narración oral y escrita.', 'Contar una anécdota con introducción, nudo y desenlace.'],
  grammar: {
    title: 'Past Simple, Past Continuous and Past Perfect',
    explanation: [
      'El Past Simple cuenta los hechos principales de una historia, en orden: I opened the door and saw a strange envelope. El Past Continuous (was/were + -ing) describe el escenario o una acción en curso cuando ocurre otra: It was raining while we were waiting.',
      'El Past Perfect (had + participio) se usa para una acción anterior a otro momento del pasado: By the time we arrived, the film had started (primero empezó la película, después llegamos). Es el “pasado del pasado”. Se usa para explicar causas o antecedentes, no para los hechos principales de la historia.',
      'Con el Past Perfect aparecen a menudo already, just, never … before, by the time, after, before, when. Negativo: hadn’t + participio (She hadn’t seen him before). Pregunta: Had you met her before the party?',
      'Si solo hay una secuencia de hechos en orden, basta el Past Simple: I got up, had breakfast and left. Si necesitas aclarar qué pasó antes de otro hecho pasado, se usa el Past Perfect: I was angry because he had forgotten my birthday.',
      'En una buena narración se combinan los tres tiempos con conectores y expresiones que guían al oyente: at first, meanwhile, all of a sudden, eventually, in the end.'
    ],
    forms: [
      { label: 'Past Simple and Past Continuous', lines: ['It was raining while we were waiting.', 'When the phone rang, I was cooking.', 'I saw her; she was talking to a stranger.', 'What were you doing when it happened?'] },
      { label: 'Past Perfect', lines: ['By the time I arrived, they had left.', 'She hadn’t seen him before.', 'Had you met her before the party? — Yes, I had.', 'After I had finished dinner, I called her.'] },
      { label: 'Combined', lines: ['I was walking home when I realised that I had left my keys at the office.', 'When we got there, the shop had already closed.', 'He was exhausted because he hadn’t slept for two days.'] },
      { label: 'Useful expressions and collocations', lines: ['to cut a long story short; as it turned out', 'out of the blue; all of a sudden', 'to my surprise; it dawned on me that…', 'at that very moment; from that day on', 'little did I know…; looking back', 'tell / share / recount an anecdote', 'keep someone in suspense', 'a surprising twist'] }
    ]
  },
  vocabulary: [
    v('anecdote', 'anécdota', '/ˈænɪkdəʊt/', 'AN-ec-dote'), v('plot', 'trama', '/plɒt/', 'PLOT'), v('narrator', 'narrador', '/nəˈreɪtə/', 'nar-RA-tor'),
    v('setting', 'ambientación, escenario', '/ˈsetɪŋ/', 'SET-ting'), v('suspense', 'suspenso', '/səˈspens/', 'sus-PENSE'), v('twist', 'giro inesperado', '/twɪst/', 'TWIST'),
    v('eventually', 'finalmente', '/ɪˈventʃuəli/', 'e-VEN-tu-al-ly'), v('meanwhile', 'mientras tanto', '/ˈmiːnwaɪl/', 'MEAN-while'), v('afterwards', 'después', '/ˈɑːftəwədz/', 'AF-ter-wards'),
    v('gradually', 'gradualmente', '/ˈɡrædʒuəli/', 'GRAD-u-al-ly'), v('whisper', 'susurrar', '/ˈwɪspə/', 'WHIS-per'), v('glance', 'mirar de reojo; vistazo', '/ɡlɑːns/', 'GLANCE'),
    v('stumble', 'tropezar', '/ˈstʌmbl/', 'STUM-ble'), v('tremble', 'temblar', '/ˈtrembl/', 'TREM-ble'), v('shocked', 'conmocionado', '/ʃɒkt/', 'SHOCKED'),
    v('relieved', 'aliviado', '/rɪˈliːvd/', 're-LIEVED'), v('unexpected', 'inesperado', '/ˌʌnɪkˈspektɪd/', 'un-ex-PEC-ted'), v('mysterious', 'misterioso', '/mɪˈstɪəriəs/', 'mys-TE-ri-ous'),
    v('disappear', 'desaparecer', '/ˌdɪsəˈpɪə/', 'dis-ap-PEAR'), v('reveal', 'revelar', '/rɪˈviːl/', 're-VEAL')
  ],
  examples: [
    { en: 'I was walking home when I realised that I had left my keys at the office.', es: 'Iba caminando a casa cuando me di cuenta de que había dejado mis llaves en la oficina.' },
    { en: 'By the time the ambulance arrived, the crowd had already dispersed.', es: 'Para cuando llegó la ambulancia, la multitud ya se había dispersado.' },
    { en: 'She hadn’t told anyone about the job offer, so everyone was shocked when she resigned.', es: 'No le había contado a nadie la oferta de trabajo, así que todos quedaron conmocionados cuando renunció.' },
    { en: 'While the guests were arriving, the chef was still preparing the main course.', es: 'Mientras llegaban los invitados, el chef aún preparaba el plato principal.' },
    { en: 'Out of the blue, my old teacher called me; we hadn’t spoken for fifteen years.', es: 'De la nada me llamó mi antiguo profesor; no habíamos hablado en quince años.' },
    { en: 'As soon as I had read the message, I knew that something was wrong.', es: 'En cuanto leí el mensaje, supe que algo andaba mal.' },
    { en: 'Gradually, it dawned on him that the letter had never been meant for him.', es: 'Poco a poco se dio cuenta de que la carta nunca había sido para él.' },
    { en: 'To cut a long story short, we missed the flight, but we eventually got home safely.', es: 'Para resumir, perdimos el vuelo, pero finalmente llegamos bien a casa.' }
  ],
  dialogue: [
    { speaker: 'Nina', text: 'You’ll never guess what happened to me last summer.', es: 'No vas a adivinar lo que me pasó el verano pasado.' },
    { speaker: 'Sam', text: 'Go on, I’m all ears.', es: 'Cuenta, soy todo oídos.' },
    { speaker: 'Nina', text: 'I was waiting at the station in Valencia when I realised that I had left my passport at the hotel.', es: 'Esperaba en la estación de Valencia cuando me di cuenta de que había dejado el pasaporte en el hotel.' },
    { speaker: 'Sam', text: 'No way! What did you do?', es: '¡No puede ser! ¿Qué hiciste?' },
    { speaker: 'Nina', text: 'I panicked, obviously. The train was due in ten minutes, so I ran back to the hotel. When I got there, the receptionist told me that someone had already handed it in.', es: 'Entré en pánico, obviamente. El tren salía en diez minutos, así que corrí al hotel. Cuando llegué, la recepcionista me dijo que alguien ya lo había entregado.' },
    { speaker: 'Sam', text: 'Someone had found it? That’s lucky.', es: '¿Alguien lo había encontrado? Qué suerte.' },
    { speaker: 'Nina', text: 'Wait, it gets better. By the time I got back to the station, the train had gone.', es: 'Espera, se pone mejor. Para cuando volví a la estación, el tren ya se había ido.' },
    { speaker: 'Sam', text: 'Oh no.', es: 'Ay no.' },
    { speaker: 'Nina', text: 'Out of the blue, a stranger offered me a lift to the next town, where I caught the same train.', es: 'De repente, un desconocido me ofreció llevarme al siguiente pueblo, donde alcancé el mismo tren.' },
    { speaker: 'Sam', text: 'To cut a long story short, you made it!', es: 'Para resumir, ¡lo lograste!' },
    { speaker: 'Nina', text: 'I did, although I was exhausted. Looking back, it’s actually quite funny.', es: 'Sí, aunque estaba agotada. Mirando atrás, es bastante gracioso.' },
    { speaker: 'Sam', text: 'Funny now, but I bet it wasn’t at the time.', es: 'Gracioso ahora, pero apuesto a que en ese momento no lo fue.' }
  ],
  listening: {
    script: [
      { speaker: 'Presenter', text: 'You were there when the old bridge collapsed, weren’t you?' },
      { speaker: 'Witness', text: 'Yes. I was walking my dog along the river when I heard a strange cracking sound.' },
      { speaker: 'Presenter', text: 'What did you do?' },
      { speaker: 'Witness', text: 'At first I thought it was thunder, but the sky was clear. Then I saw cars stopping at the far end. By that time, most drivers had already left their vehicles.' },
      { speaker: 'Presenter', text: 'So people had noticed the problem before it happened?' },
      { speaker: 'Witness', text: 'Some had. A police officer had closed the road ten minutes earlier because he had seen cracks in the surface.' },
      { speaker: 'Presenter', text: 'Was anyone hurt?' },
      { speaker: 'Witness', text: 'Luckily not. Everybody had got off the bridge by the time it fell.' }
    ],
    questions: [
      mc('b1u03-l1', 'What was the witness doing when he heard the sound?', ['Walking his dog', 'Driving', 'Crossing the bridge'], 0, 'He was walking his dog along the river.'),
      mc('b1u03-l2', 'What did he think the sound was at first?', ['Thunder', 'An explosion', 'A train'], 0, 'At first he thought it was thunder.'),
      mc('b1u03-l3', 'Why had the road been closed?', ['A police officer had seen cracks', 'There had been an accident', 'There was a protest'], 0, 'A police officer had seen cracks in the surface.'),
      tf('b1u03-l4', 'There were people on the bridge when it fell.', false, 'Everybody had got off the bridge by the time it fell.'),
      mc('b1u03-l5', 'Why was nobody hurt?', ['The warning and the closure came in time', 'The bridge was empty by chance', 'The bridge did not fall'], 0, 'The officer closed the road ten minutes earlier, so people had left in time.')
    ]
  },
  reading: {
    title: 'The last train',
    text: 'When Clara reached the platform, the station was deserted. A single lamp was flickering above her head, and the departures board, which had been blank all evening, suddenly came to life. She checked her watch: it was ten minutes to midnight. She had been told that the last train to Oporto had left at eleven, so she was surprised to see a carriage waiting at the end of the platform, its doors open and its lights on. While she was hesitating, a voice behind her whispered, “You’d better hurry.” She turned round, but nobody was there. Heart pounding, she stepped on board. Only when the doors closed did she notice that every seat was occupied by passengers who were looking straight at her, as if they had been waiting for her all along.',
    questions: [
      rc('b1u03-r1', 'What had been blank all evening?', ['The departures board', 'The platform clock', 'The ticket machine'], 0, 'The departures board had been blank all evening.'),
      rc('b1u03-r2', 'Why was Clara surprised to see the carriage?', ['She thought the last train had already left', 'She had no ticket', 'The carriage was empty'], 0, 'She had been told the last train left at eleven.'),
      rc('b1u03-r3', 'What effect does the writer create at the end?', ['Suspense and unease', 'Humour', 'Relief'], 0, 'The passengers staring at her creates a threatening, uneasy mood.'),
      rc('b1u03-r4', 'What does the final phrase suggest?', ['The passengers expected her', 'The passengers were angry', 'The passengers were asleep'], 0, 'As if they had been waiting for her all along.'),
      rc('b1u03-r5', 'Which tense mainly sets the background of the scene?', ['Past Continuous and Past Perfect', 'Present Simple', 'Future'], 0, 'The lamp was flickering; the board had been blank: background information.')
    ]
  },
  speaking: { prompt: 'Cuenta a un compañero una anécdota real o inventada (1 a 2 minutos). Tu compañero hace al menos dos preguntas para pedir detalles.', tasks: ['Set the scene with the Past Continuous: “It was … and I was …”.', 'Tell the main events in order with the Past Simple and sequence words.', 'Include one earlier event with the Past Perfect: “I had already …”.', 'Use two storytelling expressions (out of the blue, to cut a long story short…) and finish with how you felt.'] },
  writing: { prompt: 'Write a story or anecdote of 150 to 180 words that begins with: “I had never felt so nervous in my life.” Use the Past Simple, Past Continuous and Past Perfect, and at least four sequence words or storytelling expressions.', rubric: ['Uses the three past tenses correctly and with purpose.', 'Has a clear beginning (setting), middle (events) and end.', 'Uses sequence words and at least two storytelling expressions.', 'Keeps the reader interested with details or a twist.'], model: 'I had never felt so nervous in my life. It was my first day at the new office, and I was standing in front of the lift when I realised that I had forgotten my badge. All of a sudden, a woman I had never met before appeared and offered to let me in. At first I assumed she was a colleague; however, as it turned out, she was the director of the company. To cut a long story short, she asked me how long I had been working there, and I told her it was my first day. She laughed, and from that day on, she always greeted me by my name.' },
  pronunciation: {
    items: [{ word: 'anecdote', ipa: '/ˈænɪkdəʊt/', stress: 'AN-ec-dote' }, { word: 'eventually', ipa: '/ɪˈventʃuəli/', stress: 'e-VEN-tu-al-ly' }, { word: 'suspense', ipa: '/səˈspens/', stress: 'sus-PENSE' }, { word: 'mysterious', ipa: '/mɪˈstɪəriəs/', stress: 'mys-TE-ri-ous' }, { word: 'unexpected', ipa: '/ˌʌnɪkˈspektɪd/', stress: 'un-ex-PEC-ted' }],
    tips: ['Had se contrae a ’d en el habla (I’d left, she’d gone) y casi no se oye: aprende a reconocerlo.', 'Para crear suspense, baja la velocidad y haz una pausa antes del giro de la historia.', 'La terminación -ed suena /t/, /d/ o /ɪd/: stumbled /d/, glanced /t/, revealed /d/, wanted /ɪd/.']
  },
  exercises: [
    mc('b1u03-e1', 'By the time we arrived, the film ___.', ['had started', 'started', 'was starting'], 0, 'The film started before we arrived → Past Perfect.', 'Choose the correct tense.'),
    fb('b1u03-e2', 'I ___ (cook) when the phone rang.', 'was cooking', 'Action in progress → Past Continuous.', ['wasn’t cooking'], 'Write the correct form.'),
    fb('b1u03-e3', 'She was upset because she ___ (lose) her keys.', 'had lost', 'Earlier cause → Past Perfect.', undefined, 'Write the correct form.'),
    wo('b1u03-e4', ['By', 'the', 'time', 'I', 'arrived', 'they', 'had', 'already', 'left'], ['By', 'the', 'time', 'I', 'arrived', 'they', 'had', 'already', 'left'], 'By the time + Past Simple, Past Perfect.'),
    tf('b1u03-e5', 'We use the Past Perfect for an action that happened before another past action.', true, 'It is the “past of the past”.'),
    mt('b1u03-e6', 'Match each item with its narrative function.', [['It was raining.', 'background action'], ['The phone rang.', 'main event'], ['She had already left.', 'earlier past'], ['Out of the blue,', 'signals an unexpected event']], 'Stories mix background, events and earlier events.'),
    tr('b1u03-e7', 'Join the sentences with “by the time”.', 'The film started. We arrived.', 'By the time we arrived, the film had started', 'Past Simple in the by the time clause; Past Perfect for the earlier event.', ['By the time we arrived the film had started', 'The film had started by the time we arrived']),
    tr('b1u03-e8', 'Make the sentence negative.', 'He had seen the film before.', 'He hadn’t seen the film before', 'hadn’t + participle.', ['He had not seen the film before']),
    rc('b1u03-e9', 'What can be inferred?', ['Someone had taken the papers', 'Tom took the papers', 'The papers were never there'], 0, 'The papers that had been on the desk were gone.', 'When Tom opened the door, the room was empty. The window was open, and the papers that had been on the desk were gone.'),
    sa('b1u03-e10', 'Write a short anecdote (6 to 8 sentences) using the Past Simple, the Past Continuous and the Past Perfect at least once each.', 'Model: “It was raining and I was waiting for the bus when I noticed that I had left my wallet at home. All of a sudden, a friend stopped her car and offered me a lift.” Check: three tenses and sequence words.')
  ],
  assessment: [
    mc('b1u03-t1', 'When I got to the cinema, the film ___.', ['had already started', 'was already starting', 'has already started'], 0, 'Earlier than the arrival → Past Perfect.'),
    mc('b1u03-t2', 'While she ___ home, she saw an accident.', ['was walking', 'had walked', 'walks'], 0, 'Action in progress when another happened.'),
    fb('b1u03-t3', 'He told me he ___ never been abroad before.', 'had', 'had + never + participle.', undefined, 'Write the missing word.'),
    fb('b1u03-t4', 'I was exhausted because I ___ (not sleep) for two days.', 'hadn’t slept', 'Negative Past Perfect.', ['had not slept'], 'Write the correct form.'),
    tf('b1u03-t5', '“By the time” is often followed by the Past Perfect in the main clause.', true, 'By the time I arrived, they had left.'),
    tf('b1u03-t6', 'The Past Perfect is used for the main events of a story.', false, 'Main events use the Past Simple.'),
    wo('b1u03-t7', ['cut', 'To', 'story', 'a', 'short', 'long'], ['To', 'cut', 'a', 'long', 'story', 'short'], 'A common storytelling expression.'),
    mc('b1u03-t8', 'Choose the best sentence.', ['She had finished her work, so she went home.', 'She was finishing her work, so she had gone home.', 'She finishes her work, so she went home.'], 0, 'Earlier action → Past Perfect; main event → Past Simple.'),
    tr('b1u03-t9', 'Combine with “after”.', 'I finished dinner. I called her.', 'After I had finished dinner, I called her', 'after + Past Perfect, Past Simple.', ['After I had finished dinner I called her', 'I called her after I had finished dinner', 'After I finished dinner, I called her', 'After I finished dinner I called her']),
    mc('b1u03-t10', 'Which expression introduces an unexpected event?', ['All of a sudden', 'As a result', 'In addition'], 0, 'All of a sudden = de repente.')
  ],
  review: ['Past Simple = main events in order; Past Continuous = background and actions in progress; Past Perfect = earlier past.', 'Past Perfect = had + participle (hadn’t; Had you…?).', 'Linkers: when, while, after, before, by the time, as soon as, eventually, meanwhile.', 'Storytelling expressions: out of the blue, to cut a long story short, as it turned out, looking back.', 'A good story has setting, events, a twist or turning point, and an ending.']
};
export default unit;
