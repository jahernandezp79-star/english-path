import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'a2-u06', level: 'A2', unitNumber: 6, title: 'Problems and Solutions', subtitle: 'Explain obligations, problems and how to solve them',
  communicativeGoal: 'Explicar obligaciones y reglas, describir problemas cotidianos y proponer soluciones.',
  objectives: ['Usar have to y don’t have to para obligaciones y ausencia de obligación.', 'Diferenciar don’t have to de mustn’t.', 'Usar must y mustn’t para reglas y prohibiciones.', 'Describir un problema y proponer una solución con cortesía.'],
  grammar: {
    title: 'Have to, don’t have to, must and mustn’t',
    explanation: [
      'Have to expresa obligación que viene de reglas, leyes o circunstancias: I have to wear a uniform (es la regla). Con he/she/it se usa has to: She has to start at seven. En pasado: had to (We had to wait an hour).',
      'Don’t have to / doesn’t have to significa que NO es necesario, aunque se puede hacer: You don’t have to pay (es gratis). No significa “prohibido”.',
      'Must expresa una obligación fuerte, normalmente impuesta por quien habla o por una norma escrita: You must show your passport. Mustn’t expresa prohibición: You mustn’t use your phone here. Must no tiene pasado: para el pasado se usa had to.',
      'Comparación clave: You mustn’t park here (está prohibido) ≠ You don’t have to park here (no es necesario, puedes elegir). Preguntas con have to: Do you have to wear a tie? Does she have to work on Saturday?',
      'Para proponer soluciones: We could…, Why don’t we…?, The best solution is to…, We have to…'
    ],
    forms: [
      { label: 'Have to', lines: ['I have to wear a uniform.', 'She has to start at seven.', 'We had to wait an hour.', 'Do you have to wear a tie? — Yes, I do.'] },
      { label: 'Don’t have to', lines: ['You don’t have to pay. It’s free.', 'He doesn’t have to work on Saturday.', 'We didn’t have to wait.', 'Does she have to come? — No, she doesn’t.'] },
      { label: 'Must / mustn’t', lines: ['Passengers must show their passports.', 'You mustn’t use your phone here.', 'You mustn’t park here.', 'You must arrive before six.'] }
    ]
  },
  vocabulary: [v('rule', 'regla', '/ruːl/', 'RULE'), v('obligation', 'obligación', '/ˌɒblɪˈɡeɪʃn/', 'ob-li-GA-tion'), v('allowed', 'permitido', '/əˈlaʊd/', 'al-LOWED'), v('forbidden', 'prohibido', '/fəˈbɪdn/', 'for-BID-den'), v('fine', 'multa', '/faɪn/', 'FINE'), v('problem', 'problema', '/ˈprɒbləm/', 'PROB-lem'), v('solution', 'solución', '/səˈluːʃn/', 'so-LU-tion'), v('solve', 'resolver', '/sɒlv/', 'SOLVE'), v('complain', 'quejarse', '/kəmˈpleɪn/', 'com-PLAIN'), v('broken', 'roto, dañado', '/ˈbrəʊkən/', 'BRO-ken'), v('repair', 'reparar', '/rɪˈpeə/', 're-PAIR'), v('refund', 'reembolso', '/ˈriːfʌnd/', 'RE-fund'), v('replace', 'reemplazar', '/rɪˈpleɪs/', 're-PLACE'), v('urgent', 'urgente', '/ˈɜːdʒənt/', 'UR-gent'), v('apologise', 'disculparse', '/əˈpɒlədʒaɪz/', 'a-POL-o-gise'), v('warranty', 'garantía', '/ˈwɒrənti/', 'WAR-ran-ty')],
  examples: [
    { en: 'Employees have to wear an ID card at all times.', es: 'Los empleados tienen que llevar su carné en todo momento.' },
    { en: 'You don’t have to pay for the repair because it is under warranty.', es: 'No tienes que pagar la reparación porque está en garantía.' },
    { en: 'Drivers mustn’t use their phones; the fine is very high.', es: 'Los conductores no deben usar el celular; la multa es muy alta.' },
    { en: 'We had to wait two hours because the system was down.', es: 'Tuvimos que esperar dos horas porque el sistema estaba caído.' },
    { en: 'Do you have to work on weekends in your new job?', es: '¿Tienes que trabajar los fines de semana en tu nuevo trabajo?' },
    { en: 'She didn’t have to complain; they gave her a refund immediately.', es: 'Ella no tuvo que quejarse; le dieron el reembolso enseguida.' },
    { en: 'It’s urgent, so we must solve the problem today.', es: 'Es urgente, así que debemos resolver el problema hoy.' },
    { en: 'We could replace the broken part instead of buying a new machine.', es: 'Podríamos reemplazar la pieza dañada en lugar de comprar una máquina nueva.' }
  ],
  dialogue: [
    { speaker: 'Agent', text: 'Customer service. How can I help you?', es: 'Servicio al cliente. ¿En qué puedo ayudarle?' },
    { speaker: 'Customer', text: 'Hello. I bought a laptop last week and it doesn’t turn on.', es: 'Hola. Compré un portátil la semana pasada y no enciende.' },
    { speaker: 'Agent', text: 'I’m sorry to hear that. Do you have the receipt?', es: 'Lamento oírlo. ¿Tiene el recibo?' },
    { speaker: 'Customer', text: 'Yes, I do. Do I have to bring the laptop to the shop?', es: 'Sí. ¿Tengo que llevar el portátil a la tienda?' },
    { speaker: 'Agent', text: 'Yes, you do, but you don’t have to pay anything because it’s under warranty.', es: 'Sí, pero no tiene que pagar nada porque está en garantía.' },
    { speaker: 'Customer', text: 'Great. Do I have to make an appointment?', es: 'Genial. ¿Tengo que pedir una cita?' },
    { speaker: 'Agent', text: 'No, you don’t. But you must bring the receipt and your ID, and you must arrive before six because the shop closes then.', es: 'No. Pero debe traer el recibo y su documento, y debe llegar antes de las seis porque la tienda cierra a esa hora.' },
    { speaker: 'Customer', text: 'And if you can’t repair it?', es: '¿Y si no pueden repararlo?' },
    { speaker: 'Agent', text: 'Then we have to replace it or give you a refund. You can choose.', es: 'Entonces tenemos que reemplazarlo o darle un reembolso. Usted elige.' },
    { speaker: 'Customer', text: 'Perfect. I’m going to go tomorrow morning. Thank you.', es: 'Perfecto. Voy a ir mañana por la mañana. Gracias.' }
  ],
  listening: {
    script: [
      { speaker: 'Manager', text: 'Welcome to the team! Let me explain the main rules.' }, { speaker: 'Employee', text: 'Thank you. Do I have to wear a uniform?' },
      { speaker: 'Manager', text: 'No, you don’t have to. But you must wear your ID card at all times.' }, { speaker: 'Employee', text: 'What time do I have to start?' },
      { speaker: 'Manager', text: 'You have to be here at eight thirty, but on Fridays you don’t have to come before ten.' }, { speaker: 'Employee', text: 'And can I use my phone at my desk?' },
      { speaker: 'Manager', text: 'You mustn’t use it with clients, but you can use it during breaks.' }
    ],
    questions: [
      mc('a2u06-l1', 'Does the employee have to wear a uniform?', ['No, he doesn’t.', 'Yes, he does.', 'Only on Fridays.'], 0, 'The manager says: “No, you don’t have to.”'),
      mc('a2u06-l2', 'What must he wear at all times?', ['An ID card', 'A tie', 'A jacket'], 0, 'He must wear his ID card.'),
      mc('a2u06-l3', 'What is true about Fridays?', ['He doesn’t have to come before ten', 'He must come at eight', 'He doesn’t work'], 0, 'On Fridays he doesn’t have to come before ten.'),
      tf('a2u06-l4', 'He can use his phone with clients.', false, 'He mustn’t use it with clients.')
    ]
  },
  reading: {
    title: 'The broken oven',
    text: 'Last month, Elena bought an oven online for her small restaurant. When it arrived, she discovered it didn’t work. She had to call customer service three times and she had to send photos of the problem. The company said she didn’t have to return the oven, because it was too heavy, but she must keep the box and the receipt. After a week, a technician came to repair it. Unfortunately, he couldn’t solve the problem, so the company decided to replace it. Elena says she is happy with the result, although she lost a lot of time. “Customers have to be patient,” she says, “but companies must respect their promises.”',
    questions: [
      rc('a2u06-r1', 'What was wrong with the oven?', ['It didn’t work', 'It was too small', 'It was the wrong colour'], 0, 'She discovered it didn’t work.'),
      rc('a2u06-r2', 'What did Elena have to do?', ['Call customer service and send photos', 'Return the oven', 'Pay for the repair'], 0, 'She had to call three times and send photos.'),
      rc('a2u06-r3', 'How did the company solve the problem?', ['They replaced the oven', 'They gave a refund', 'They repaired it'], 0, 'The technician couldn’t repair it, so they replaced it.'),
      rc('a2u06-r4', 'What does Elena think of the result?', ['It was good but it took a lot of time', 'The company was terrible', 'She doesn’t want another oven'], 0, 'She is happy with the result although she lost a lot of time.')
    ]
  },
  speaking: { prompt: 'Haz un juego de roles: un cliente tiene un problema con un producto y un agente explica las reglas y las soluciones.', tasks: ['Describe the problem and ask: “Do I have to…?”', 'Explain two rules with have to and must, and one thing that isn’t necessary with don’t have to.', 'Say one prohibition with mustn’t.', 'Offer or choose a solution with “We could… / The best solution is to…”.'] },
  writing: { prompt: 'Write an email (8 to 10 sentences) complaining about a faulty product. Explain the problem, what you had to do, what you don’t have to do and what solution you want.', rubric: ['Uses have to / had to and don’t have to correctly.', 'Uses must or mustn’t at least once.', 'Describes the problem clearly and suggests a solution.', 'Uses a formal tone and polite closing.'], model: 'Dear Customer Service, I bought a blender last week and it doesn’t work. I had to call your shop twice and nobody helped me. I know I don’t have to pay for the repair because of the warranty, and I must keep my receipt. I would like a replacement or a refund. It is urgent because I need it for my restaurant. Best regards, Laura' },
  pronunciation: {
    items: [{ word: 'warranty', ipa: '/ˈwɒrənti/', stress: 'WAR-ran-ty' }, { word: 'obligation', ipa: '/ˌɒblɪˈɡeɪʃn/', stress: 'ob-li-GA-tion' }, { word: 'refund', ipa: '/ˈriːfʌnd/', stress: 'RE-fund' }, { word: 'apologise', ipa: '/əˈpɒlədʒaɪz/', stress: 'a-POL-o-gise' }, { word: 'have to', ipa: '/ˈhæf tə/', stress: 'HAF-to' }],
    tips: ['Have to se pronuncia /hæf tə/: la v suena como f.', 'Must y mustn’t se distinguen por la t final y la n silábica: /ˈmʌsnt/.', 'Refund (sustantivo) lleva fuerza en RE; refund (verbo) en reFUND.']
  },
  exercises: [
    mc('a2u06-e1', 'In this school, students ___ wear a uniform. It’s the rule.', ['have to', 'has to', 'must to'], 0, 'Students → have to.', 'Choose the correct form.'),
    fb('a2u06-e2', 'You ___ pay to enter. It’s free.', 'don’t have to', 'No obligation → don’t have to.', ['do not have to'], 'Write the missing words.'),
    fb('a2u06-e3', 'She ___ to work on Sundays. It’s part of her job.', 'has', 'She → has to.', undefined, 'Write have or has.'),
    wo('a2u06-e4', ['you', 'Do', 'to', 'wear', 'have', 'a', 'tie'], ['Do', 'you', 'have', 'to', 'wear', 'a', 'tie'], 'Do + subject + have to + verb.'),
    tf('a2u06-e5', '“You mustn’t come” means “It’s not necessary to come”.', false, 'Mustn’t = prohibited. Not necessary = don’t have to.'),
    mt('a2u06-e6', 'Match each sentence with its meaning.', [['You mustn’t park here.', 'prohibition'], ['You don’t have to pay.', 'no obligation'], ['You have to show your ID.', 'obligation from the rules'], ['We had to wait.', 'obligation in the past']], 'Think: forbidden, not necessary or required?'),
    tr('a2u06-e7', 'Make the sentence past (yesterday).', 'I must wear a helmet.', 'I had to wear a helmet yesterday', 'Must has no past: use had to.'),
    tr('a2u06-e8', 'Make the sentence negative.', 'She has to work on Saturday.', 'She doesn’t have to work on Saturday', 'doesn’t have to + verb.', ['She does not have to work on Saturday']),
    rc('a2u06-e9', 'Why is Tom going to the library?', ['His printer is broken', 'He likes books', 'He has no report'], 0, 'His printer is broken and he has to send the report.', 'Tom’s printer is broken. He has to send the report today, so he is going to use the printer in the library.'),
    sa('a2u06-e10', 'Write 4 sentences about the rules in your job or school: two with have to, one with don’t have to and one with mustn’t.', 'Model: “I have to arrive at eight. Students have to wear a uniform. We don’t have to come on Saturdays. You mustn’t use your phone in class.” Check: obligation, no obligation and prohibition.')
  ],
  assessment: [
    mc('a2u06-t1', 'You ___ smoke in the hospital.', ['mustn’t', 'don’t have to', 'haven’t to'], 0, 'Prohibition → mustn’t.'),
    mc('a2u06-t2', 'She ___ work tomorrow. It’s a holiday.', ['doesn’t have to', 'mustn’t', 'has not to'], 0, 'It is not necessary → doesn’t have to.'),
    fb('a2u06-t3', 'Do you ___ to wear a uniform?', 'have', 'Do + subject + have to.', undefined, 'Write the missing word.'),
    fb('a2u06-t4', 'We ___ to wait an hour yesterday.', 'had', 'Past of have to → had to.', undefined, 'Write the missing word.'),
    tf('a2u06-t5', 'Must has a past form “musted”.', false, 'The past of must is had to.'),
    tf('a2u06-t6', '“Don’t have to” means it isn’t necessary.', true, 'You don’t have to = no es necesario.'),
    wo('a2u06-t7', ['to', 'have', 'I', 'finish', 'this', 'today'], ['I', 'have', 'to', 'finish', 'this', 'today'], 'Subject + have to + verb.'),
    mc('a2u06-t8', 'Choose the correct sentence.', ['He doesn’t has to pay.', 'He doesn’t have to pay.', 'He hasn’t to pay.'], 1, 'doesn’t + base form: have.'),
    tr('a2u06-t9', 'Make the sentence a question.', 'They have to wear helmets.', 'Do they have to wear helmets', 'Do + they + have to…', undefined),
    mc('a2u06-t10', 'Choose the best solution: “The printer is broken.”', ['We could use the library printer.', 'We mustn’t print.', 'We don’t have to printer.'], 0, 'We could + verb offers a solution.')
  ],
  review: ['have to / had to = obligation from rules or circumstances.', 'don’t have to = not necessary; mustn’t = prohibited.', 'must = strong obligation, no past form (use had to).', 'Questions: Do/Does + subject + have to…?', 'Solutions: We could…, Why don’t we…?, The best solution is to…']
};
export default unit;
