import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'a2-u05', level: 'A2', unitNumber: 5, title: 'Technology', subtitle: 'Talk about devices, apps and tech problems',
  communicativeGoal: 'Hablar de dispositivos, aplicaciones y problemas tecnológicos, y pedir ayuda o permiso con cortesía.',
  objectives: ['Usar can y could para habilidad, posibilidad y peticiones.', 'Usar may para pedir permiso de forma formal y expresar posibilidad.', 'Describir problemas tecnológicos y pedir ayuda.', 'Elegir el nivel de cortesía adecuado (can, could, may).'],
  grammar: {
    title: 'Can, could, may and basic modal verbs',
    explanation: [
      'Los verbos modales (can, could, may, must, should) no cambian con la persona (no llevan -s), van seguidos del verbo base sin to, y forman negativos y preguntas sin do/does: She can’t come. Can you help me?',
      'Can expresa habilidad (I can use this app), posibilidad y permiso informal (Can I borrow your charger?). Could es el pasado de can para habilidad (I could read at four; I couldn’t connect yesterday) y también sirve para peticiones más corteses (Could you help me?).',
      'May se usa para pedir permiso de forma formal (May I use your phone?) y para expresar posibilidad (It may be a problem with the Wi-Fi). El negativo may not indica posibilidad o prohibición formal.',
      'Escala de cortesía para pedir algo: Can I…? (informal) < Could I…? (más cortés) < May I…? (formal). Para pedir ayuda a otra persona: Can you…? / Could you…?'
    ],
    forms: [
      { label: 'Can / could', lines: ['I can use this app.', 'She couldn’t open the file yesterday.', 'Can you send me the link?', 'Could you help me, please?'] },
      { label: 'May', lines: ['May I use your laptop?', 'It may be a battery problem.', 'You may not copy files here.', 'The update may take a few minutes.'] },
      { label: 'Short answers', lines: ['Can you install it? — Yes, I can. / No, I can’t.', 'Could he connect? — Yes, he could. / No, he couldn’t.', 'May I sit here? — Yes, you may. / Of course.'] }
    ]
  },
  vocabulary: [v('device', 'dispositivo', '/dɪˈvaɪs/', 'de-VICE'), v('app', 'aplicación', '/æp/', 'APP'), v('screen', 'pantalla', '/skriːn/', 'SCREEN'), v('password', 'contraseña', '/ˈpɑːswɜːd/', 'PASS-word'), v('battery', 'batería', '/ˈbætri/', 'BAT-te-ry'), v('charger', 'cargador', '/ˈtʃɑːdʒə/', 'CHAR-ger'), v('download', 'descargar', '/ˌdaʊnˈləʊd/', 'down-LOAD'), v('install', 'instalar', '/ɪnˈstɔːl/', 'in-STALL'), v('update', 'actualizar; actualización', '/ʌpˈdeɪt/', 'up-DATE'), v('connect', 'conectar', '/kəˈnekt/', 'con-NECT'), v('Wi-Fi', 'wifi', '/ˈwaɪfaɪ/', 'WI-fi'), v('website', 'sitio web', '/ˈwebsaɪt/', 'WEB-site'), v('laptop', 'portátil', '/ˈlæptɒp/', 'LAP-top'), v('error', 'error', '/ˈerə/', 'ER-ror'), v('delete', 'borrar', '/dɪˈliːt/', 'de-LETE'), v('online', 'en línea', '/ˌɒnˈlaɪn/', 'on-LINE')],
  examples: [
    { en: 'I can install the app, but I can’t log in because I forgot my password.', es: 'Puedo instalar la aplicación, pero no puedo entrar porque olvidé mi contraseña.' },
    { en: 'When I was a child, I couldn’t use a computer, but my sister could.', es: 'Cuando era niño no sabía usar un computador, pero mi hermana sí.' },
    { en: 'Could you help me update my phone, please?', es: '¿Podrías ayudarme a actualizar mi celular, por favor?' },
    { en: 'May I use your charger? My battery is almost dead.', es: '¿Puedo usar su cargador? Mi batería casi se acaba.' },
    { en: 'The website may be down; try again in a few minutes.', es: 'Puede que el sitio web esté caído; intenta de nuevo en unos minutos.' },
    { en: 'He couldn’t connect to the Wi-Fi because the router was off.', es: 'No pudo conectarse al wifi porque el router estaba apagado.' },
    { en: 'You may not install apps on company laptops without permission.', es: 'No se pueden instalar aplicaciones en los portátiles de la empresa sin permiso.' },
    { en: 'Can you download the file while I check the error message?', es: '¿Puedes descargar el archivo mientras reviso el mensaje de error?' }
  ],
  dialogue: [
    { speaker: 'Employee', text: 'Hi, could you help me? I can’t connect to the Wi-Fi.', es: 'Hola, ¿podría ayudarme? No puedo conectarme al wifi.' },
    { speaker: 'IT', text: 'Of course. Is it a laptop or a phone?', es: 'Claro. ¿Es un portátil o un celular?' },
    { speaker: 'Employee', text: 'A laptop. It could connect yesterday, but today it says “no internet”.', es: 'Un portátil. Ayer se podía conectar, pero hoy dice “sin internet”.' },
    { speaker: 'IT', text: 'It may be a problem with the router. Can you check if other devices work?', es: 'Puede ser un problema del router. ¿Puede ver si otros dispositivos funcionan?' },
    { speaker: 'Employee', text: 'Let me try… My phone can’t connect either.', es: 'Déjeme probar… Mi celular tampoco se conecta.' },
    { speaker: 'IT', text: 'Then the problem isn’t your laptop. May I come to your desk in ten minutes?', es: 'Entonces el problema no es su portátil. ¿Puedo ir a su escritorio en diez minutos?' },
    { speaker: 'Employee', text: 'Yes, please. Also, I couldn’t open the new report because the file was too big.', es: 'Sí, por favor. Además, no pude abrir el informe nuevo porque el archivo era muy grande.' },
    { speaker: 'IT', text: 'You can download it from the shared folder. It may take a few minutes.', es: 'Puede descargarlo de la carpeta compartida. Puede tardar unos minutos.' },
    { speaker: 'Employee', text: 'Thanks. Could you also help me change my password?', es: 'Gracias. ¿También podría ayudarme a cambiar mi contraseña?' },
    { speaker: 'IT', text: 'Sure, I can do it when I come.', es: 'Claro, puedo hacerlo cuando vaya.' }
  ],
  listening: {
    script: [
      { speaker: 'Assistant', text: 'Good afternoon. How can I help you?' }, { speaker: 'Customer', text: 'My phone’s battery doesn’t last long. It can’t work for more than three hours.' },
      { speaker: 'Assistant', text: 'It may need a new battery. Could I see it, please?' }, { speaker: 'Customer', text: 'Of course. Can I keep using it while you check?' },
      { speaker: 'Assistant', text: 'I’m afraid not. May I keep it until Friday?' }, { speaker: 'Customer', text: 'Friday is fine. Could you contact me when it’s ready?' },
      { speaker: 'Assistant', text: 'Yes, we can send you a message.' }
    ],
    questions: [
      mc('a2u05-l1', 'What is the problem with the phone?', ['The battery doesn’t last long', 'The screen is broken', 'It can’t connect to Wi-Fi'], 0, 'The battery doesn’t last long.'),
      mc('a2u05-l2', 'How long can the phone work?', ['Less than three hours', 'Ten hours', 'All day'], 0, 'It can’t work for more than three hours.'),
      tf('a2u05-l3', 'The customer can keep using the phone while the assistant checks it.', false, 'The assistant says: “I’m afraid not.”'),
      mc('a2u05-l4', 'How will the shop contact the customer?', ['By message', 'By email', 'By letter'], 0, 'They can send a message.')
    ]
  },
  reading: {
    title: 'Digital detox',
    text: 'Sofía works with computers all day and she can’t imagine life without her phone. Last month, however, she lost her charger on a trip and her battery died on the first day. At first she was nervous: she couldn’t check her messages or use the map. Then she realised that she could talk to people, take photos with a small camera and ask for directions. When she got home, she decided to turn off notifications at night. “I may not be able to give up my phone completely,” she says, “but I can use it more wisely.”',
    questions: [
      rc('a2u05-r1', 'Why did Sofía’s phone stop working?', ['Her battery died and she had no charger', 'It broke', 'She lost it'], 0, 'Her battery died because she lost her charger.'),
      rc('a2u05-r2', 'What couldn’t she do at first?', ['Check messages or use the map', 'Take photos', 'Talk to people'], 0, 'She couldn’t check her messages or use the map.'),
      rc('a2u05-r3', 'What does the text suggest?', ['She became more aware of her phone use', 'She hates technology', 'She bought a new phone'], 0, 'She discovered other options and decided to use her phone more wisely.'),
      rc('a2u05-r4', 'What did she decide to do?', ['Turn off notifications at night', 'Sell her phone', 'Stop working'], 0, 'She decided to turn off notifications at night.')
    ]
  },
  speaking: { prompt: 'Simula una llamada o visita al soporte técnico. Uno describe un problema y el otro pregunta y ofrece soluciones con cortesía.', tasks: ['Describe a problem: “I can’t … / I couldn’t … yesterday.”', 'Ask for help politely with Could you…? and ask permission with May I…?', 'Suggest possible causes with “It may be …”.', 'Say two things you can do with your phone or laptop and one thing you couldn’t do five years ago.'] },
  writing: { prompt: 'Write an email (8 to 10 sentences) to the IT department about a technology problem. Describe the problem, say what you could and couldn’t do, and make polite requests.', rubric: ['Uses can/can’t and could/couldn’t correctly.', 'Uses Could you… or May I… for polite requests.', 'Uses may to express possible causes.', 'Uses a formal greeting and closing.'], model: 'Dear IT team, I can’t connect to the Wi-Fi in my office. Yesterday it worked, but today I couldn’t open any website. It may be a router problem. Could you help me, please? May I leave my laptop at your desk this afternoon? Thank you for your help. Best regards, Laura' },
  pronunciation: {
    items: [{ word: 'download', ipa: '/ˌdaʊnˈləʊd/', stress: 'down-LOAD' }, { word: 'password', ipa: '/ˈpɑːswɜːd/', stress: 'PASS-word' }, { word: 'battery', ipa: '/ˈbætri/', stress: 'BAT-te-ry' }, { word: 'update', ipa: '/ʌpˈdeɪt/', stress: 'up-DATE' }, { word: 'could', ipa: '/kʊd/', stress: 'COULD' }],
    tips: ['Could suena /kʊd/ (la l no se pronuncia), igual que should y would.', 'Can’t suena /kɑːnt/ con vocal larga en inglés británico; can suena débil /kən/.', 'Update y download tienen la fuerza en la segunda sílaba cuando son verbos.']
  },
  exercises: [
    mc('a2u05-e1', '___ you help me with this app?', ['Could', 'Do', 'Are'], 0, 'Polite request → Could you…?', 'Choose the best word.'),
    fb('a2u05-e2', 'I ___ connect to the Wi-Fi. It isn’t working.', 'can’t', 'Not possible now → can’t.', ['cannot'], 'Write the missing word.'),
    fb('a2u05-e3', 'She ___ read when she was four.', 'could', 'Past ability → could.', undefined, 'Write the missing word.'),
    wo('a2u05-e4', ['I', 'May', 'your', 'use', 'laptop'], ['May', 'I', 'use', 'your', 'laptop'], 'May + I + base verb.'),
    tf('a2u05-e5', '“She cans use the app” is correct.', false, 'Modals never take -s: “She can use the app.”'),
    mt('a2u05-e6', 'Match each sentence with its function.', [['Could you help me?', 'polite request'], ['I could swim at five.', 'past ability'], ['May I sit here?', 'formal permission'], ['It may be a virus.', 'possibility']], 'Function decides the modal.'),
    tr('a2u05-e7', 'Make the sentence past and negative (yesterday).', 'I can open the file.', 'I couldn’t open the file yesterday', 'could + not.', ['I could not open the file yesterday']),
    tr('a2u05-e8', 'Make a polite request with could.', 'You help me.', 'Could you help me', 'Could + you + base verb.'),
    rc('a2u05-e9', 'What may be the problem?', ['The router', 'The laptop screen', 'The battery'], 0, 'It may be a problem with the router.', 'Dan’s laptop can’t connect to the internet. It may be a problem with the router.'),
    sa('a2u05-e10', 'Write 4 sentences about a tech problem: one with can’t, one with could or couldn’t, one polite request and one with may.', 'Model: “I can’t install the app. Yesterday I couldn’t open the file. Could you help me, please? It may be a memory problem.” Check: no -s on modals and base verbs.')
  ],
  assessment: [
    mc('a2u05-t1', '___ I use your phone, please?', ['May', 'Do', 'Am'], 0, 'May I… is a formal request.'),
    mc('a2u05-t2', 'I ___ open the file yesterday. It was damaged.', ['can’t', 'couldn’t', 'don’t can'], 1, 'Past + negative → couldn’t.'),
    fb('a2u05-t3', 'She ___ type very fast. She is an expert.', 'can', 'Ability → can.', undefined, 'Write the missing word.'),
    fb('a2u05-t4', '___ you send me the link, please?', 'Could', 'Polite request → Could you…?', ['Can'], 'Write the missing word.'),
    tf('a2u05-t5', 'Modal verbs take -s in the third person.', false, 'Modals do not change: she can, he may.'),
    tf('a2u05-t6', 'May can express possibility: “It may be a virus.”', true, 'May = possibly.'),
    wo('a2u05-t7', ['you', 'Could', 'password', 'help', 'me', 'my', 'reset'], ['Could', 'you', 'help', 'me', 'reset', 'my', 'password'], 'Could + you + base verb + object.'),
    mc('a2u05-t8', 'Choose the correct sentence.', ['He can to use the app.', 'He can use the app.', 'He cans use the app.'], 1, 'can + base verb.'),
    tr('a2u05-t9', 'Make the sentence past (yesterday).', 'He can’t connect to the Wi-Fi.', 'He couldn’t connect to the Wi-Fi yesterday', 'can’t → couldn’t.', ['He could not connect to the Wi-Fi yesterday']),
    mc('a2u05-t10', 'Which sentence is the most formal request?', ['Can I borrow it?', 'Could I borrow it?', 'May I borrow it?'], 2, 'May is the most formal.')
  ],
  review: ['Modals: no -s, base verb, no do/does.', 'can = ability and informal permission; could = past ability and polite request.', 'may = formal permission and possibility.', 'Politeness: Can I… < Could I… < May I…', 'Tech vocabulary: device, app, password, battery, update, download.']
};
export default unit;
