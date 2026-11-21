import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'a1-u07', level: 'A1', unitNumber: 7, title: 'Free Time', subtitle: 'Talk about your hobbies, likes and abilities',
  communicativeGoal: 'Expresar gustos y habilidades: qué te gusta hacer en tu tiempo libre y qué sabes hacer.',
  objectives: ['Usar like, love y hate con sustantivos y con verbos en -ing.', 'Usar can y can’t para hablar de habilidades.', 'Preguntar y responder sobre gustos y habilidades.', 'Hablar de hobbies y actividades de fin de semana.'],
  grammar: {
    title: 'Like / love / hate + noun or -ing, and can / can’t',
    explanation: [
      'Para expresar gustos usamos like (me gusta), love (me encanta) y hate (odio). Después va un sustantivo (I like music) o un verbo en -ing (I love dancing).',
      'Con he/she/it el verbo lleva -s: She loves cooking. Para negar se usa don’t/doesn’t like: He doesn’t like football. Para preguntar: Do you like swimming? — Yes, I do. / No, I don’t.',
      'Can expresa habilidad: I can swim (sé nadar). Es el mismo para todas las personas y NO lleva -s: she can swim. Después de can va el verbo base: can dance, no “can to dance”.',
      'Negativo: can’t (cannot). Pregunta: Can you play the guitar? — Yes, I can. / No, I can’t.'
    ],
    forms: [
      { label: 'Like / love / hate', lines: ['I like music.', 'She loves dancing.', 'He hates cooking.', 'I don’t like football.', 'Do you like drawing? — Yes, I do.'] },
      { label: 'Can — affirmative and negative', lines: ['I can swim.', 'She can play the guitar.', 'They can’t dance.', 'He can’t cook.'] },
      { label: 'Can — questions', lines: ['Can you sing? — Yes, I can. / No, I can’t.', 'Can she swim? — Yes, she can. / No, she can’t.'] }
    ]
  },
  vocabulary: [v('hobby', 'pasatiempo', '/ˈhɒbi/', 'HOB-by'), v('music', 'música', '/ˈmjuːzɪk/', 'MU-sic'), v('football', 'fútbol', '/ˈfʊtbɔːl/', 'FOOT-ball'), v('swim', 'nadar', '/swɪm/', 'SWIM'), v('cook', 'cocinar', '/kʊk/', 'COOK'), v('dance', 'bailar', '/dɑːns/', 'DANCE'), v('sing', 'cantar', '/sɪŋ/', 'SING'), v('draw', 'dibujar', '/drɔː/', 'DRAW'), v('read', 'leer', '/riːd/', 'READ'), v('guitar', 'guitarra', '/ɡɪˈtɑː/', 'gui-TAR'), v('movie', 'película', '/ˈmuːvi/', 'MO-vie'), v('game', 'juego', '/ɡeɪm/', 'GAME'), v('weekend', 'fin de semana', '/ˌwiːkˈend/', 'week-END'), v('free time', 'tiempo libre', '/friː taɪm/', 'FREE time')],
  examples: [
    { en: 'I love music.', es: 'Me encanta la música.' }, { en: 'She likes swimming at the weekend.', es: 'A ella le gusta nadar el fin de semana.' },
    { en: 'He hates cooking.', es: 'Él odia cocinar.' }, { en: 'We don’t like long movies.', es: 'No nos gustan las películas largas.' },
    { en: 'Can you play the guitar?', es: '¿Sabes tocar la guitarra?' }, { en: 'I can swim, but I can’t dance.', es: 'Sé nadar, pero no sé bailar.' },
    { en: 'My brother can draw very well.', es: 'Mi hermano dibuja muy bien.' }, { en: 'Do your friends like football?', es: '¿A tus amigos les gusta el fútbol?' }
  ],
  dialogue: [
    { speaker: 'Sara', text: 'What do you do in your free time, Pablo?', es: '¿Qué haces en tu tiempo libre, Pablo?' },
    { speaker: 'Pablo', text: 'I love music. I can play the guitar.', es: 'Me encanta la música. Sé tocar la guitarra.' },
    { speaker: 'Sara', text: 'Wow! Can you sing too?', es: '¡Vaya! ¿También sabes cantar?' },
    { speaker: 'Pablo', text: 'No, I can’t. I hate singing! But I like dancing.', es: 'No. ¡Odio cantar! Pero me gusta bailar.' },
    { speaker: 'Sara', text: 'Me too. Do you like football?', es: 'A mí también. ¿Te gusta el fútbol?' },
    { speaker: 'Pablo', text: 'Yes, I do. I play football with my friends every weekend.', es: 'Sí. Juego fútbol con mis amigos cada fin de semana.' },
    { speaker: 'Sara', text: 'Great. I can’t play football, but I can swim very well.', es: 'Genial. No sé jugar fútbol, pero nado muy bien.' },
    { speaker: 'Pablo', text: 'Good idea! Do you want to go swimming on Saturday?', es: '¡Buena idea! ¿Quieres ir a nadar el sábado?' }
  ],
  listening: {
    script: [
      { speaker: 'Interviewer', text: 'Julia, what do you like doing at the weekend?' }, { speaker: 'Julia', text: 'I love cooking. I cook for my family on Sundays.' },
      { speaker: 'Interviewer', text: 'Can you play a sport?' }, { speaker: 'Julia', text: 'I can swim, but I can’t play football.' },
      { speaker: 'Interviewer', text: 'Do you like watching movies?' }, { speaker: 'Julia', text: 'Yes, I do, but I don’t like long movies.' }
    ],
    questions: [
      mc('a1u07-l1', 'What does Julia love doing?', ['Cooking', 'Dancing', 'Drawing'], 0, 'She says: “I love cooking.”'),
      tf('a1u07-l2', 'Julia can play football.', false, 'She can’t play football.'),
      mc('a1u07-l3', 'What can Julia do?', ['Swim', 'Sing', 'Play the guitar'], 0, 'She can swim.'),
      tf('a1u07-l4', 'Julia doesn’t like long movies.', true, 'She says: “I don’t like long movies.”')
    ]
  },
  reading: {
    title: 'Two brothers',
    text: 'Carlos and Mateo are brothers, but they like different things. Carlos loves sports. He plays football and he can swim very well. He hates reading. Mateo doesn’t like sports. He loves music and he can play the guitar and the piano. He likes drawing too. At the weekend Carlos plays football with his friends and Mateo draws in his room. They can’t cook, but they like eating!',
    questions: [
      rc('a1u07-r1', 'What does Carlos hate?', ['Reading', 'Football', 'Swimming'], 0, 'Carlos hates reading.'),
      rc('a1u07-r2', 'What can Mateo play?', ['The guitar and the piano', 'Football', 'Nothing'], 0, 'He can play the guitar and the piano.'),
      rc('a1u07-r3', 'Does Mateo like sports?', ['Yes, he does.', 'No, he doesn’t.', 'The text doesn’t say.'], 1, 'Mateo doesn’t like sports.'),
      rc('a1u07-r4', 'What can’t the brothers do?', ['Cook', 'Swim', 'Draw'], 0, 'They can’t cook.')
    ]
  },
  speaking: { prompt: 'Habla de lo que te gusta hacer y de lo que sabes hacer.', tasks: ['Say three things you like: “I like … / I love … / I hate …”.', 'Say two things you can do and one you can’t.', 'Ask a partner: “Can you …? Do you like …?”', 'Invite a partner to an activity: “Do you want to go swimming?”'] },
  writing: { prompt: 'Write 6 sentences about your free time. Use like/love/hate with -ing and can/can’t.', rubric: ['Uses like, love or hate + noun or -ing.', 'Uses can or can’t with a base verb.', 'Adds -s to like/love/hate for he/she/it, but not to can.', 'Uses capital letters and full stops.'], model: 'I love music and I can play the guitar. I like swimming, but I can’t dance. My brother hates cooking. He likes football. We can’t sing, but we love listening to music.' },
  pronunciation: {
    items: [{ word: 'guitar', ipa: '/ɡɪˈtɑː/', stress: 'gui-TAR' }, { word: 'weekend', ipa: '/ˌwiːkˈend/', stress: 'week-END' }, { word: 'can’t', ipa: '/kɑːnt/', stress: 'CAN’T' }, { word: 'swimming', ipa: '/ˈswɪmɪŋ/', stress: 'SWIM-ming' }, { word: 'hobby', ipa: '/ˈhɒbi/', stress: 'HOB-by' }],
    tips: ['Can suena débil /kən/ en una frase afirmativa; can’t suena fuerte /kɑːnt/, por eso se distingue.', 'En guitar la fuerza va en la segunda sílaba.', 'En la terminación -ing la g es muy suave: /ɪŋ/.']
  },
  exercises: [
    mc('a1u07-e1', 'She ___ dancing.', ['love', 'loves', 'loving'], 1, 'She → loves.', 'Choose the correct form.'),
    fb('a1u07-e2', 'I ___ swim. It’s easy for me.', 'can', 'Ability → can.', undefined, 'Write can or can’t.'),
    fb('a1u07-e3', 'He doesn’t like ___ (cook).', 'cooking', 'like + verb-ing.', undefined, 'Write the -ing form.'),
    wo('a1u07-e4', ['you', 'Can', 'guitar', 'the', 'play'], ['Can', 'you', 'play', 'the', 'guitar'], 'Can + subject + base verb.'),
    tf('a1u07-e5', '“She cans swim” is correct.', false, 'Can never takes -s: “She can swim.”'),
    mt('a1u07-e6', 'Match each verb with a typical use.', [['swim', 'in a pool'], ['sing', 'with your voice'], ['draw', 'with a pencil'], ['read', 'a book']], 'Link each verb to an image.'),
    tr('a1u07-e7', 'Make the sentence negative.', 'I can swim.', 'I can’t swim', 'can → can’t.', ['I cannot swim']),
    tr('a1u07-e8', 'Make the sentence a question.', 'He likes football.', 'Does he like football', 'Does + he + like…'),
    rc('a1u07-e9', 'What can’t Ana do?', ['Dance', 'Sing', 'Swim'], 1, 'Ana can’t sing.', 'Ana loves dancing, but she can’t sing.'),
    sa('a1u07-e10', 'Write 3 sentences about your hobbies.', 'Model: “I love music. I like swimming. I can’t draw.” Check: like/love + noun/-ing and can/can’t.')
  ],
  assessment: [
    mc('a1u07-t1', 'I ___ cooking.', ['love', 'loves', 'can'], 0, 'I → love.'),
    mc('a1u07-t2', 'My sister ___ swim.', ['can', 'cans', 'can to'], 0, 'Can never takes -s or to.'),
    fb('a1u07-t3', '___ you like music? — Yes, I do.', 'Do', 'Present Simple question → Do.', undefined, 'Write the missing word.'),
    fb('a1u07-t4', 'He ___ play the piano, so he doesn’t play it.', 'can’t', 'He is not able to play.', ['cannot'], 'Write can or can’t.'),
    tf('a1u07-t5', 'After can we use the base verb.', true, 'can + base verb: can swim.'),
    tf('a1u07-t6', '“She likes to dances” is correct.', false, 'After likes use -ing (likes dancing) or to + base verb (likes to dance).'),
    wo('a1u07-t7', ['hates', 'He', 'early', 'getting', 'up'], ['He', 'hates', 'getting', 'up', 'early'], 'hate + verb-ing.'),
    mc('a1u07-t8', 'Do you like ___?', ['draw', 'drawing', 'drawn'], 1, 'like + verb-ing.'),
    tr('a1u07-t9', 'Make the sentence a question.', 'She can dance.', 'Can she dance', 'Can + she + base verb.'),
    mc('a1u07-t10', 'Choose the correct sentence.', ['They love singing.', 'They loves singing.', 'They love sing.'], 0, 'They → love + -ing.')
  ],
  review: ['like / love / hate + noun or verb-ing.', 'he/she/it: likes, loves, hates; negative: doesn’t like.', 'can + base verb (no -s); negative can’t.', 'Questions: Do you like…? Can you…?', 'Short answers: Yes, I do. / No, I can’t.']
};
export default unit;
