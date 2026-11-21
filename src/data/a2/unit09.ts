import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'a2-u09', level: 'A2', unitNumber: 9, title: 'Social Situations', subtitle: 'Invite, accept, decline and make offers politely',
  communicativeGoal: 'Invitar, aceptar, rechazar con cortesía, proponer actividades y hacer ofrecimientos en situaciones sociales.',
  objectives: ['Usar would like para invitar, ofrecer y pedir con cortesía.', 'Usar could para hacer peticiones corteses.', 'Usar let’s para proponer actividades.', 'Aceptar y rechazar invitaciones de forma natural y educada.'],
  grammar: {
    title: 'Would like, could, let’s, invitations and offers',
    explanation: [
      'Would like es una forma cortés de decir want. Se usa para pedir (I’d like a coffee, please), invitar (Would you like to come to my party?) y ofrecer (Would you like some tea?). La contracción es I’d like. Después puede ir un sustantivo o to + verbo: I’d like to book a table.',
      'Para ofrecer ayuda se dice Would you like me to + verbo (Would you like me to carry that?) o Can I help you? Respuestas: Yes, please. / That would be great. / No, thank you, I’m fine.',
      'Could permite pedir algo con cortesía: Could you open the window, please? Could I use your phone? Could we start at six? Es más cortés que can.',
      'Let’s + verbo base propone una actividad entre quienes hablan: Let’s go to the cinema. Let’s not be late. Respuestas: Good idea! / Yes, let’s. / Sorry, I can’t.',
      'Aceptar: I’d love to. / That sounds great. Rechazar con cortesía: Thanks for asking, but I’m afraid I can’t. / I’m sorry, I’m busy that day. Es habitual dar una razón breve y proponer otra fecha.'
    ],
    forms: [
      { label: 'Would like', lines: ['I’d like a table for two, please.', 'Would you like some coffee? — Yes, please. / No, thank you.', 'Would you like to come to my party? — I’d love to.', 'I’d like to book a room.'] },
      { label: 'Could and let’s', lines: ['Could you open the window, please?', 'Could I use your phone?', 'Let’s go to the cinema tonight.', 'Let’s not be late.'] },
      { label: 'Invitations and offers', lines: ['Would you like me to carry that?', 'Thanks for the invitation. I’d love to.', 'I’m afraid I can’t. I have to work.', 'How about Friday instead?'] }
    ]
  },
  vocabulary: [v('invitation', 'invitación', '/ˌɪnvɪˈteɪʃn/', 'in-vi-TA-tion'), v('invite', 'invitar', '/ɪnˈvaɪt/', 'in-VITE'), v('accept', 'aceptar', '/əkˈsept/', 'ac-CEPT'), v('decline', 'rechazar, declinar', '/dɪˈklaɪn/', 'de-CLINE'), v('offer', 'ofrecer; oferta', '/ˈɒfə/', 'OF-fer'), v('suggest', 'sugerir', '/səˈdʒest/', 'sug-GEST'), v('join', 'unirse', '/dʒɔɪn/', 'JOIN'), v('host', 'anfitrión', '/həʊst/', 'HOST'), v('guest', 'invitado', '/ɡest/', 'GUEST'), v('gift', 'regalo', '/ɡɪft/', 'GIFT'), v('celebrate', 'celebrar', '/ˈselɪbreɪt/', 'CE-le-brate'), v('anniversary', 'aniversario', '/ˌænɪˈvɜːsəri/', 'an-ni-VER-sa-ry'), v('busy', 'ocupado', '/ˈbɪzi/', 'BU-sy'), v('polite', 'educado, cortés', '/pəˈlaɪt/', 'po-LITE'), v('pity', 'lástima', '/ˈpɪti/', 'PI-ty'), v('instead', 'en su lugar', '/ɪnˈsted/', 'in-STEAD')],
  examples: [
    { en: 'Would you like to come to my birthday dinner on Saturday?', es: '¿Te gustaría venir a mi cena de cumpleaños el sábado?' },
    { en: 'I’d love to, but I’m afraid I can’t because I have to work.', es: 'Me encantaría, pero me temo que no puedo porque tengo que trabajar.' },
    { en: 'Could you tell me where the guests can leave their coats?', es: '¿Podría decirme dónde pueden dejar los abrigos los invitados?' },
    { en: 'Let’s celebrate our anniversary at that new restaurant.', es: 'Celebremos nuestro aniversario en ese restaurante nuevo.' },
    { en: 'Would you like me to bring a dessert or some drinks?', es: '¿Quieres que lleve un postre o algo de beber?' },
    { en: 'Thanks for the invitation. How about meeting next week instead?', es: 'Gracias por la invitación. ¿Qué tal si nos vemos la próxima semana?' },
    { en: 'Could we start a bit later? I’m busy until six.', es: '¿Podríamos empezar un poco más tarde? Estoy ocupado hasta las seis.' },
    { en: 'That’s a pity. Let’s try again on Sunday.', es: 'Qué lástima. Intentémoslo de nuevo el domingo.' }
  ],
  dialogue: [
    { speaker: 'Sofia', text: 'Hi Marcos! Would you like to come to my birthday dinner on Saturday?', es: '¡Hola Marcos! ¿Te gustaría venir a mi cena de cumpleaños el sábado?' },
    { speaker: 'Marcos', text: 'Thanks for the invitation! I’d love to. What time does it start?', es: '¡Gracias por la invitación! Me encantaría. ¿A qué hora empieza?' },
    { speaker: 'Sofia', text: 'At eight, at my house. Could you bring a dessert?', es: 'A las ocho, en mi casa. ¿Podrías llevar un postre?' },
    { speaker: 'Marcos', text: 'Of course. Would you like me to bring a cake?', es: 'Claro. ¿Quieres que lleve una torta?' },
    { speaker: 'Sofia', text: 'That would be great, thanks. Oh, and Andrea is coming too.', es: 'Eso sería genial, gracias. Ah, y también viene Andrea.' },
    { speaker: 'Marcos', text: 'Great! Let’s go together. Could you pick me up?', es: '¡Genial! Vamos juntos. ¿Podrías recogerme?' },
    { speaker: 'Sofia', text: 'I’m sorry, I can’t. I have to cook! But Andrea can take you.', es: 'Lo siento, no puedo. ¡Tengo que cocinar! Pero Andrea puede llevarte.' },
    { speaker: 'Marcos', text: 'No problem. Let’s ask her now.', es: 'Sin problema. Preguntémosle ahora.' },
    { speaker: 'Sofia', text: 'Perfect. Would you like something to drink before you go?', es: 'Perfecto. ¿Quieres algo de beber antes de irte?' },
    { speaker: 'Marcos', text: 'No, thank you, I’m fine. See you on Saturday!', es: 'No, gracias, estoy bien. ¡Nos vemos el sábado!' }
  ],
  listening: {
    script: [
      { speaker: 'Tom', text: 'Hi Laura, it’s Tom. Would you like to go to the cinema tonight?' }, { speaker: 'Laura', text: 'Oh, thanks for asking, but I’m afraid I can’t. I have to finish a report.' },
      { speaker: 'Tom', text: 'That’s a pity. How about tomorrow evening?' }, { speaker: 'Laura', text: 'Tomorrow sounds good. Could we go to the early show? I have to work on Friday.' },
      { speaker: 'Tom', text: 'Sure. Let’s meet at six outside the cinema.' }, { speaker: 'Laura', text: 'Perfect. Would you like me to book the tickets?' },
      { speaker: 'Tom', text: 'Yes, please. That would be very helpful.' }
    ],
    questions: [
      mc('a2u09-l1', 'Why can’t Laura go tonight?', ['She has to finish a report', 'She is ill', 'She is travelling'], 0, 'She has to finish a report.'),
      mc('a2u09-l2', 'When do they decide to go?', ['Tomorrow evening', 'Friday morning', 'Tonight'], 0, 'They agree on tomorrow evening.'),
      mc('a2u09-l3', 'Where are they going to meet?', ['Outside the cinema', 'At Laura’s house', 'At a restaurant'], 0, 'Tom says: “Let’s meet at six outside the cinema.”'),
      tf('a2u09-l4', 'Tom is going to book the tickets.', false, 'Laura offers to book the tickets.')
    ]
  },
  reading: {
    title: 'How to say no politely',
    text: 'Saying no is not always easy, especially when someone invites you to an event and you don’t want to hurt their feelings. Experts say you should answer quickly and be honest, but kind. First, thank the person for the invitation. Then say that you can’t go and, if you want, give a short reason: “I’d love to, but I have other plans.” You don’t have to explain everything. Finally, suggest another time: “Could we meet next week instead?” This way the other person understands that you value the friendship. Remember that it is better to refuse politely than to accept and cancel at the last minute.',
    questions: [
      rc('a2u09-r1', 'What should you do first when you refuse an invitation?', ['Thank the person', 'Give a long explanation', 'Cancel immediately'], 0, 'First, thank the person for the invitation.'),
      rc('a2u09-r2', 'Do you have to give a long explanation?', ['No, a short reason is enough', 'Yes, always', 'Only to friends'], 0, 'You don’t have to explain everything.'),
      rc('a2u09-r3', 'Why is it a good idea to suggest another time?', ['It shows you value the friendship', 'It avoids the invitation', 'It changes the subject'], 0, 'The other person understands that you value the friendship.'),
      rc('a2u09-r4', 'What does the writer prefer?', ['Refusing politely', 'Accepting and cancelling later', 'Not answering'], 0, 'It is better to refuse politely than to accept and cancel at the last minute.')
    ]
  },
  speaking: { prompt: 'Haz un juego de roles con un compañero: uno invita a un evento y el otro acepta o rechaza con cortesía y propone otra opción.', tasks: ['Invite your partner with Would you like to…? and give day, time and place.', 'Accept with I’d love to, or decline with Thanks, but I’m afraid I can’t… and give a short reason.', 'Make a suggestion with Let’s… and a polite request with Could you…?', 'Make an offer: “Would you like me to…?”'] },
  writing: { prompt: 'Write an invitation (4 to 5 sentences) to an event and a reply (4 to 5 sentences) in which you decline politely and suggest another day.', rubric: ['Uses would like for the invitation and the offer.', 'Uses could for at least one polite request.', 'Declines politely with a short reason and suggests another time.', 'Uses a friendly and polite tone.'], model: 'Hi Ana, would you like to come to my house for dinner on Friday at eight? Could you bring a dessert? Let’s celebrate my new job together! — Hi Laura, thanks for the invitation, but I’m afraid I can’t come on Friday because I have to work. Could we have dinner on Saturday instead? I’d like to bring a cake. Thank you again!' },
  pronunciation: {
    items: [{ word: 'invitation', ipa: '/ˌɪnvɪˈteɪʃn/', stress: 'in-vi-TA-tion' }, { word: 'anniversary', ipa: '/ˌænɪˈvɜːsəri/', stress: 'an-ni-VER-sa-ry' }, { word: 'celebrate', ipa: '/ˈselɪbreɪt/', stress: 'CE-le-brate' }, { word: 'I’d like', ipa: '/aɪd laɪk/', stress: 'I’d LIKE' }, { word: 'polite', ipa: '/pəˈlaɪt/', stress: 'po-LITE' }],
    tips: ['I’d like suena rápido /aɪd laɪk/; no se pronuncia would completo.', 'En anniversary la fuerza va en VER, no al principio.', 'Con entonación ascendente al final, una pregunta como Would you like some tea? suena más amable.']
  },
  exercises: [
    mc('a2u09-e1', '___ you like some tea?', ['Would', 'Are', 'Can to'], 0, 'Would you like…? is a polite offer.', 'Choose the correct word.'),
    fb('a2u09-e2', 'I’d ___ a table for two, please.', 'like', 'I’d like = I would like.', undefined, 'Write the missing word.'),
    fb('a2u09-e3', '___ go to the cinema tonight!', 'Let’s', 'Let’s + base verb makes a suggestion.', ["Let's"], 'Write the missing word.'),
    wo('a2u09-e4', ['you', 'Would', 'like', 'to', 'come', 'to', 'my', 'party'], ['Would', 'you', 'like', 'to', 'come', 'to', 'my', 'party'], 'Would you like to + verb…?'),
    tf('a2u09-e5', '“Let’s to go” is correct.', false, 'After let’s use the base verb: “Let’s go.”'),
    mt('a2u09-e6', 'Match each sentence with its function.', [['I’d love to.', 'accepting an invitation'], ['I’m afraid I can’t.', 'declining politely'], ['Would you like some help?', 'making an offer'], ['Let’s meet at six.', 'making a suggestion']], 'Decide who speaks and why.'),
    tr('a2u09-e7', 'Make it more polite with would like.', 'I want a coffee.', 'I’d like a coffee', 'I’d like is more polite than I want.', ['I would like a coffee']),
    tr('a2u09-e8', 'Make a polite request with could.', 'Can you open the window?', 'Could you open the window', 'Could is more polite than can.'),
    rc('a2u09-e9', 'What did Sam suggest?', ['Lunch next week', 'A barbecue on Sunday', 'A party'], 0, 'He suggested lunch the following week.', 'Kate invited Sam to a barbecue on Sunday. Sam is busy, so he thanked her and suggested lunch the following week.'),
    sa('a2u09-e10', 'Write a short invitation (2 sentences) and a polite reply declining it (2 sentences).', 'Model: “Would you like to come to the cinema on Friday? Let’s meet at seven. — Thanks for asking, but I’m afraid I can’t. Could we go on Saturday instead?” Check: would like, let’s, could and a reason.')
  ],
  assessment: [
    mc('a2u09-t1', '___ you like to join us for dinner?', ['Would', 'Do', 'Are'], 0, 'Would you like to…?'),
    mc('a2u09-t2', 'I’m afraid I ___ come on Saturday.', ['can’t', 'don’t', 'mustn’t to'], 0, 'I’m afraid I can’t = politely declining.'),
    fb('a2u09-t3', 'Would you like me ___ help you with the bags?', 'to', 'Would you like me to + verb?', undefined, 'Write the missing word.'),
    fb('a2u09-t4', '___ have lunch together tomorrow!', 'Let’s', 'Let’s + base verb.', ["Let's"], 'Write the missing word.'),
    tf('a2u09-t5', 'After “would like” we can use “to + verb”.', true, 'I’d like to book a room.'),
    tf('a2u09-t6', '“Let’s” is followed by the base verb.', true, 'Let’s go, let’s start.'),
    wo('a2u09-t7', ['you', 'Could', 'open', 'the', 'window', 'please'], ['Could', 'you', 'open', 'the', 'window', 'please'], 'Could you + base verb…?'),
    mc('a2u09-t8', 'Choose the most polite way to decline.', ['No.', 'I’m sorry, but I can’t. Thanks for asking.', 'I don’t want to.'], 1, 'Thank, apologise and give a short reason.'),
    tr('a2u09-t9', 'Make a polite invitation.', 'You come to dinner on Friday.', 'Would you like to come to dinner on Friday', 'Would you like to + verb…?'),
    mc('a2u09-t10', 'Choose the best answer to: “Would you like some coffee?”', ['Yes, please.', 'Yes, I like.', 'I would coffee.'], 0, 'Yes, please. / No, thank you.')
  ],
  review: ['Would like = polite want: I’d like…, Would you like…?', 'Offers: Would you like me to…? / Can I help you?', 'Could makes requests more polite than can.', 'Let’s + base verb = suggestion.', 'Decline politely: thank, apologise, give a short reason, suggest another time.']
};
export default unit;
