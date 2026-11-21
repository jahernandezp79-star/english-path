import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'a1-u03', level: 'A1', unitNumber: 3, title: 'Daily Life', subtitle: 'Talk about your routines, times and habits',
  communicativeGoal: 'Describir tu rutina diaria: a qué hora haces las cosas, con qué frecuencia y cómo es el día de otras personas.',
  objectives: ['Formar el Present Simple afirmativo, negativo y en pregunta.', 'Usar la -s de la tercera persona (he/she/it).', 'Decir la hora y usar at, in y on con momentos del día.', 'Usar adverbios de frecuencia: always, usually, sometimes, never.'],
  grammar: {
    title: 'Present Simple',
    explanation: [
      'El Present Simple se usa para rutinas, hábitos y hechos: I get up at six. She works in a bank.',
      'Con I/you/we/they el verbo no cambia. Con he/she/it se añade -s: works. Si el verbo termina en -ch, -sh, -s, -x u -o se añade -es: watches, goes. Si termina en consonante + y, la y cambia a -ies: study → studies.',
      'Para negar se usa don’t (I/you/we/they) o doesn’t (he/she/it) + verbo base: She doesn’t work. Con doesn’t el verbo NO lleva -s.',
      'Para preguntar se usa Do o Does al principio: Do you work? Does she work? La respuesta corta usa el mismo auxiliar: Yes, she does.',
      'Los adverbios de frecuencia van antes del verbo principal: I always have coffee. Para la hora usamos at (at seven o’clock), in (in the morning) y on (on Mondays).'
    ],
    forms: [
      { label: 'Affirmative', lines: ['I work in a bank.', 'You get up early.', 'He works in a bank.', 'She watches TV.', 'It starts at nine.', 'They study English.'] },
      { label: 'Negative', lines: ['I don’t work on Sundays.', 'You don’t get up early.', 'He doesn’t work on Sundays.', 'She doesn’t watch TV.'] },
      { label: 'Questions and short answers', lines: ['Do you work? — Yes, I do. / No, I don’t.', 'Does she work? — Yes, she does. / No, she doesn’t.', 'What time do you get up?', 'What time does he start work?'] }
    ]
  },
  vocabulary: [v('wake up', 'despertarse', '/weɪk ʌp/', 'WAKE up'), v('get up', 'levantarse', '/ɡet ʌp/', 'GET up'), v('have breakfast', 'desayunar', '/hæv ˈbrekfəst/', 'BREAK-fast'), v('go to work', 'ir al trabajo', '/ɡəʊ tə wɜːk/', 'go to WORK'), v('start work', 'empezar a trabajar', '/stɑːt wɜːk/', 'START work'), v('finish work', 'terminar de trabajar', '/ˈfɪnɪʃ wɜːk/', 'FI-nish work'), v('have lunch', 'almorzar', '/hæv lʌntʃ/', 'have LUNCH'), v('go home', 'ir a casa', '/ɡəʊ həʊm/', 'go HOME'), v('go to bed', 'irse a dormir', '/ɡəʊ tə bed/', 'go to BED'), v('o’clock', 'en punto', '/əˈklɒk/', 'o-CLOCK'), v('always', 'siempre', '/ˈɔːlweɪz/', 'AL-ways'), v('usually', 'normalmente', '/ˈjuːʒuəli/', 'U-su-al-ly'), v('sometimes', 'a veces', '/ˈsʌmtaɪmz/', 'SOME-times'), v('never', 'nunca', '/ˈnevə/', 'NE-ver')],
  examples: [
    { en: 'I get up at six o’clock.', es: 'Me levanto a las seis en punto.' }, { en: 'She usually has breakfast at home.', es: 'Ella normalmente desayuna en casa.' },
    { en: 'He doesn’t work on Sundays.', es: 'Él no trabaja los domingos.' }, { en: 'Do you go to work by bus?', es: '¿Vas al trabajo en bus?' },
    { en: 'We always have lunch at one.', es: 'Siempre almorzamos a la una.' }, { en: 'My brother never goes to bed early.', es: 'Mi hermano nunca se acuesta temprano.' },
    { en: 'What time does she finish work?', es: '¿A qué hora termina ella de trabajar?' }, { en: 'They sometimes study in the evening.', es: 'A veces estudian por la noche.' }
  ],
  dialogue: [
    { speaker: 'Nina', text: 'What time do you get up, Jack?', es: '¿A qué hora te levantas, Jack?' },
    { speaker: 'Jack', text: 'I usually get up at six o’clock.', es: 'Normalmente me levanto a las seis.' },
    { speaker: 'Nina', text: 'Do you have breakfast at home?', es: '¿Desayunas en casa?' },
    { speaker: 'Jack', text: 'No, I don’t. I have breakfast at work.', es: 'No. Desayuno en el trabajo.' },
    { speaker: 'Nina', text: 'When do you start work?', es: '¿Cuándo empiezas a trabajar?' },
    { speaker: 'Jack', text: 'I start at eight and I finish at five.', es: 'Empiezo a las ocho y termino a las cinco.' },
    { speaker: 'Nina', text: 'Does your wife work too?', es: '¿Tu esposa también trabaja?' },
    { speaker: 'Jack', text: 'Yes, she does. She works in a school.', es: 'Sí. Trabaja en una escuela.' }
  ],
  listening: {
    script: [
      { speaker: 'Interviewer', text: 'Tina, what time do you wake up?' }, { speaker: 'Tina', text: 'I wake up at seven and I get up at seven thirty.' },
      { speaker: 'Interviewer', text: 'What do you have for breakfast?' }, { speaker: 'Tina', text: 'I always have coffee and toast.' },
      { speaker: 'Interviewer', text: 'Do you work on Saturdays?' }, { speaker: 'Tina', text: 'No, I don’t. I sometimes go to the gym on Saturdays.' }
    ],
    questions: [
      mc('a1u03-l1', 'What time does Tina wake up?', ['Six', 'Seven', 'Seven thirty'], 1, 'She says: “I wake up at seven.”'),
      mc('a1u03-l2', 'What does Tina always have for breakfast?', ['Coffee and toast', 'Eggs and milk', 'Only coffee'], 0, 'She always has coffee and toast.'),
      tf('a1u03-l3', 'Tina works on Saturdays.', false, 'She says: “No, I don’t.”'),
      mc('a1u03-l4', 'What does Tina sometimes do on Saturdays?', ['She goes to work', 'She goes to the gym', 'She goes to school'], 1, 'She sometimes goes to the gym.')
    ]
  },
  reading: {
    title: 'A day in Peter’s life',
    text: 'Peter is a baker. He gets up at four o’clock in the morning because he starts work at five. He makes bread for the neighbourhood. He finishes work at one o’clock and has lunch at home. In the afternoon he sometimes plays football. He always goes to bed at nine o’clock. He doesn’t work on Sundays.',
    questions: [
      rc('a1u03-r1', 'What is Peter’s job?', ['Baker', 'Driver', 'Teacher'], 0, 'Peter is a baker.'),
      rc('a1u03-r2', 'What time does Peter start work?', ['At four', 'At five', 'At nine'], 1, 'He starts work at five.'),
      rc('a1u03-r3', 'When does Peter play football?', ['Every morning', 'Sometimes in the afternoon', 'Never'], 1, 'In the afternoon he sometimes plays football.'),
      rc('a1u03-r4', 'Does Peter work on Sundays?', ['Yes, he does.', 'No, he doesn’t.', 'Sometimes.'], 1, 'He doesn’t work on Sundays.')
    ]
  },
  speaking: { prompt: 'Cuenta tu día normal en voz alta, de la mañana a la noche.', tasks: ['Say when you get up: “I get up at … o’clock.”', 'Say what you do before and after work or school.', 'Use two frequency words: always, usually, sometimes, never.', 'Ask a partner: “What time do you go to bed?”'] },
  writing: { prompt: 'Write 6 sentences about your daily routine. Use at least two times and two frequency adverbs.', rubric: ['Uses the Present Simple correctly.', 'Adds -s with he/she/it if you describe another person.', 'Includes times (at seven) and adverbs (always, never).', 'Uses capital letters and full stops.'], model: 'I get up at six o’clock. I always have breakfast at home. I go to work by bus and I start at eight. I usually have lunch at one. I never work on Sundays. I go to bed at ten.' },
  pronunciation: {
    items: [{ word: 'usually', ipa: '/ˈjuːʒuəli/', stress: 'U-su-al-ly' }, { word: 'breakfast', ipa: '/ˈbrekfəst/', stress: 'BREAK-fast' }, { word: 'always', ipa: '/ˈɔːlweɪz/', stress: 'AL-ways' }, { word: 'watches', ipa: '/ˈwɒtʃɪz/', stress: 'WATCH-es' }, { word: 'o’clock', ipa: '/əˈklɒk/', stress: 'o-CLOCK' }],
    tips: ['La -s final suena /s/ (works), /z/ (plays) o /ɪz/ (watches).', 'En breakfast la e suena corta: BREK-fast.', 'En o’clock la fuerza va en la segunda sílaba.']
  },
  exercises: [
    mc('a1u03-e1', 'She ___ up at six.', ['get', 'gets', 'getting'], 1, 'She → gets.', 'Choose the correct verb.'),
    fb('a1u03-e2', 'He ___ (work) in a bank.', 'works', 'He → works.', undefined, 'Write the verb in the Present Simple.'),
    fb('a1u03-e3', 'My sister ___ (study) English.', 'studies', 'Consonant + y → ies: studies.', undefined, 'Write the verb in the Present Simple.'),
    wo('a1u03-e4', ['do', 'What', 'you', 'time', 'get', 'up'], ['What', 'time', 'do', 'you', 'get', 'up'], 'Question word + do + subject + verb.'),
    tf('a1u03-e5', '“She don’t like coffee” is correct.', false, 'With she we use doesn’t: “She doesn’t like coffee.”'),
    mt('a1u03-e6', 'Match each adverb with its meaning.', [['always', '100% of the time'], ['usually', 'most of the time'], ['sometimes', 'not every time'], ['never', '0% of the time']], 'Frequency adverbs go before the main verb.'),
    tr('a1u03-e7', 'Make the sentence negative.', 'I work on Sundays.', 'I don’t work on Sundays', 'I + don’t + verb.', ['I do not work on Sundays']),
    tr('a1u03-e8', 'Make the sentence a question.', 'He plays tennis.', 'Does he play tennis', 'Does + subject + base verb (no -s).'),
    rc('a1u03-e9', 'What time does Lara go to work?', ['At seven', 'At eight', 'At nine'], 2, 'She goes to work at nine.', 'Lara gets up at seven. She has breakfast at eight and goes to work at nine.'),
    sa('a1u03-e10', 'Describe your morning routine in 3 sentences.', 'Model: “I get up at six. I have breakfast at home. I go to work at eight.” Check: Present Simple, times and full stops.')
  ],
  assessment: [
    mc('a1u03-t1', 'My brother ___ in a hospital.', ['work', 'works', 'working'], 1, 'My brother = he → works.'),
    mc('a1u03-t2', 'I ___ watch TV in the morning.', ['don’t', 'doesn’t', 'not'], 0, 'I → don’t.'),
    fb('a1u03-t3', '___ she live in Lima?', 'Does', 'She → Does.', undefined, 'Write Do or Does.'),
    fb('a1u03-t4', 'We ___ lunch at one o’clock.', 'have', 'We → have.', undefined, 'Write the correct verb.'),
    tf('a1u03-t5', '“He go to school” is correct.', false, 'With he we use goes.'),
    tf('a1u03-t6', 'Adverbs like always go before the main verb.', true, 'For example: “I always have coffee.”'),
    wo('a1u03-t7', ['usually', 'I', 'up', 'early', 'get'], ['I', 'usually', 'get', 'up', 'early'], 'Subject + adverb + verb.'),
    mc('a1u03-t8', 'Choose the correct sentence.', ['She doesn’t drink coffee.', 'She don’t drinks coffee.', 'She doesn’t drinks coffee.'], 0, 'After doesn’t the verb has no -s.'),
    tr('a1u03-t9', 'Make the sentence a question.', 'They finish work at six.', 'Do they finish work at six', 'Do + they + finish…', ['Do they finish work at 6']),
    mc('a1u03-t10', 'Choose the correct sentence.', ['He watches TV at night.', 'He watchs TV at night.', 'He watch TV at night.'], 0, 'Verbs in -ch take -es.')
  ],
  review: ['Present Simple: routines and habits.', 'he/she/it + verb with -s/-es/-ies.', 'Negative: don’t/doesn’t + base verb. Questions: Do/Does + subject + base verb.', 'Frequency adverbs go before the main verb.', 'Times: at seven, in the morning, on Mondays.']
};
export default unit;
