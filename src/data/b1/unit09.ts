import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'b1-u09', level: 'B1', unitNumber: 9, title: 'Goals and Personal Development', subtitle: 'Talk about goals, skills and professional growth',
  communicativeGoal: 'Hablar de objetivos, habilidades y desarrollo profesional, usando gerundios, infinitivos y modales con precisión.',
  objectives: ['Elegir entre gerundio (-ing) e infinitivo (to + verbo) después de verbos, adjetivos y preposiciones.', 'Reconocer los verbos que cambian de significado (remember, stop, try).', 'Usar modales para habilidad, posibilidad, consejo y obligación en contextos de desarrollo personal.', 'Describir metas, puntos fuertes y planes de mejora.'],
  grammar: {
    title: 'Gerunds and infinitives, modal verbs',
    explanation: [
      'El gerundio (verbo + -ing) se usa después de ciertos verbos (enjoy, avoid, finish, keep, suggest, consider, practise, mind, risk), después de preposiciones (interested in learning, good at solving) y como sujeto de la oración: Learning languages is rewarding.',
      'El infinitivo (to + verbo) se usa después de verbos como want, decide, hope, plan, manage, afford, refuse, promise, agree, expect y aim; después de muchos adjetivos (happy to help); para expresar finalidad (I study to improve my English); y con verbo + objeto: advise / allow / ask / want someone to + verbo.',
      'Algunos verbos admiten ambas formas sin cambiar el significado (like, love, hate, prefer, start, begin, continue). Otros cambian: remember doing (recuerdo haberlo hecho) / remember to do (recordar hacerlo); stop doing (dejar de hacer algo) / stop to do (parar para hacer algo); try doing (probar a hacerlo) / try to do (intentar hacerlo).',
      'Los modales (can, could, should, must, might, will, would) van seguidos del verbo base sin to. Para habilidad: can / could (pasado general) y was able to (una ocasión concreta: I was able to finish on time). Para posibilidad: might, may, could. Consejo: should, ought to. Obligación: must, have to. Futuro de capacidad: will be able to.',
      'Para metas y planes se combinan: I hope to get promoted, I’m planning to take a course, I might apply next year, I should stop procrastinating.'
    ],
    forms: [
      { label: 'Gerund', lines: ['I enjoy learning new skills.', 'She avoids procrastinating.', 'He is interested in joining a workshop.', 'Setting goals is the first step.'] },
      { label: 'Infinitive', lines: ['I hope to get a promotion.', 'They decided to start a business.', 'My mentor advised me to take the course.', 'I study English to find a better job.'] },
      { label: 'Change of meaning and modals', lines: ['I remember meeting her. / Remember to call her.', 'He stopped smoking. / He stopped to rest.', 'I could swim when I was five, but I couldn’t dive.', 'Next year I’ll be able to take the exam.'] },
      { label: 'Useful expressions and collocations', lines: ['set / achieve / reach a goal', 'step out of your comfort zone', 'make progress; keep track of', 'learn from your mistakes', 'take the initiative; lead by example', 'work towards a goal; reach your full potential', 'learn the ropes; overcome an obstacle', 'a steep learning curve'] }
    ]
  },
  vocabulary: [
    v('skill', 'habilidad', '/skɪl/', 'SKILL'), v('strength', 'punto fuerte', '/streŋθ/', 'STRENGTH'), v('weakness', 'punto débil', '/ˈwiːknəs/', 'WEAK-ness'),
    v('mentor', 'mentor', '/ˈmentɔː/', 'MEN-tor'), v('internship', 'prácticas, pasantía', '/ˈɪntɜːnʃɪp/', 'IN-tern-ship'), v('qualification', 'titulación', '/ˌkwɒlɪfɪˈkeɪʃn/', 'qual-i-fi-CA-tion'),
    v('motivation', 'motivación', '/ˌməʊtɪˈveɪʃn/', 'mo-ti-VA-tion'), v('perseverance', 'perseverancia', '/ˌpɜːsɪˈvɪərəns/', 'per-se-VER-ance'), v('self-confidence', 'seguridad en uno mismo', '/ˌself ˈkɒnfɪdəns/', 'self-CON-fi-dence'),
    v('time management', 'gestión del tiempo', '/taɪm ˈmænɪdʒmənt/', 'time MAN-age-ment'), v('networking', 'creación de contactos', '/ˈnetwɜːkɪŋ/', 'NET-work-ing'), v('mindset', 'mentalidad', '/ˈmaɪndset/', 'MIND-set'),
    v('resilience', 'resiliencia', '/rɪˈzɪliəns/', 're-ZIL-ience'), v('milestone', 'hito', '/ˈmaɪlstəʊn/', 'MILE-stone'), v('workshop', 'taller', '/ˈwɜːkʃɒp/', 'WORK-shop'),
    v('aspire', 'aspirar', '/əˈspaɪə/', 'as-PIRE'), v('pursue', 'perseguir, dedicarse a', '/pəˈsjuː/', 'pur-SUE'), v('overcome', 'superar', '/ˌəʊvəˈkʌm/', 'o-ver-COME'),
    v('procrastinate', 'postergar', '/prəʊˈkræstɪneɪt/', 'pro-CRAS-ti-nate'), v('thrive', 'prosperar', '/θraɪv/', 'THRIVE')
  ],
  examples: [
    { en: 'I enjoy learning new skills, but I sometimes avoid asking for feedback.', es: 'Disfruto aprendiendo habilidades nuevas, pero a veces evito pedir comentarios.' },
    { en: 'She decided to take an internship abroad to improve her English.', es: 'Decidió hacer unas prácticas en el extranjero para mejorar su inglés.' },
    { en: 'My mentor advised me not to take on too many projects at once.', es: 'Mi mentor me aconsejó no asumir demasiados proyectos a la vez.' },
    { en: 'I remember attending my first workshop; I was very nervous.', es: 'Recuerdo haber asistido a mi primer taller; estaba muy nervioso.' },
    { en: 'Remember to update your CV before you apply.', es: 'Acuérdate de actualizar tu currículum antes de postularte.' },
    { en: 'He stopped procrastinating when he started setting small milestones.', es: 'Dejó de postergar cuando empezó a fijarse pequeños hitos.' },
    { en: 'I wasn’t able to finish the course last year, but I’ll be able to do it this time.', es: 'El año pasado no pude terminar el curso, pero esta vez podré hacerlo.' },
    { en: 'Being resilient doesn’t mean never failing; it means learning to keep going.', es: 'Ser resiliente no significa no fracasar nunca; significa aprender a seguir adelante.' }
  ],
  dialogue: [
    { speaker: 'Rosa', text: 'So, Javier, what would you like to achieve this year?', es: 'Entonces, Javier, ¿qué te gustaría lograr este año?' },
    { speaker: 'Javier', text: 'I’d like to get promoted, but I’m afraid of asking for more responsibility.', es: 'Me gustaría que me ascendieran, pero me da miedo pedir más responsabilidad.' },
    { speaker: 'Rosa', text: 'That’s normal. Have you considered taking on a small project to show what you can do?', es: 'Es normal. ¿Has considerado asumir un proyecto pequeño para demostrar lo que puedes hacer?' },
    { speaker: 'Javier', text: 'I’ve thought about volunteering for the new client campaign, but I’m not sure I’m ready.', es: 'He pensado en ofrecerme para la nueva campaña del cliente, pero no estoy seguro de estar listo.' },
    { speaker: 'Rosa', text: 'You might surprise yourself. I remember feeling the same when I was your age.', es: 'Podrías sorprenderte. Recuerdo sentir lo mismo cuando tenía tu edad.' },
    { speaker: 'Javier', text: 'Really? You seem so confident.', es: '¿En serio? Pareces muy segura.' },
    { speaker: 'Rosa', text: 'It took years of practising. I decided to speak at one meeting a week, even when I felt nervous. Gradually, it became easier.', es: 'Me llevó años de práctica. Decidí hablar en una reunión por semana, aun sintiéndome nerviosa. Poco a poco se volvió más fácil.' },
    { speaker: 'Javier', text: 'That’s a good idea. I should stop worrying so much about making mistakes.', es: 'Es una buena idea. Debería dejar de preocuparme tanto por cometer errores.' },
    { speaker: 'Rosa', text: 'Exactly. And try to keep a record of your achievements; it will help when you ask for a promotion.', es: 'Exacto. Y procura llevar un registro de tus logros; te ayudará cuando pidas un ascenso.' },
    { speaker: 'Javier', text: 'I’ll start today. I also want to improve my English, so I’m planning to take a business course.', es: 'Empiezo hoy. También quiero mejorar mi inglés, así que planeo hacer un curso de negocios.' },
    { speaker: 'Rosa', text: 'Excellent. Would you like me to introduce you to someone who could help you with networking?', es: 'Excelente. ¿Quieres que te presente a alguien que pueda ayudarte con los contactos profesionales?' },
    { speaker: 'Javier', text: 'That would be great. I’m looking forward to working with you on this.', es: 'Eso sería genial. Tengo ganas de trabajar contigo en esto.' }
  ],
  listening: {
    script: [
      { speaker: 'Host', text: 'Today’s guest is a coach who helps people achieve their goals. What’s the most common mistake?' },
      { speaker: 'Coach', text: 'Setting goals that are too vague. People say they want to be healthier, but they don’t decide what that means.' },
      { speaker: 'Host', text: 'So what should they do?' },
      { speaker: 'Coach', text: 'They should start by defining one specific goal, such as walking thirty minutes a day, and then break it into small steps.' },
      { speaker: 'Host', text: 'What about motivation?' },
      { speaker: 'Coach', text: 'Don’t rely on it. Motivation can disappear after a bad week. It’s better to create habits that don’t require willpower, like preparing your clothes the night before.' },
      { speaker: 'Host', text: 'And if you fail?' },
      { speaker: 'Coach', text: 'Avoid being too hard on yourself. Treat mistakes as information, and try to understand what went wrong.' }
    ],
    questions: [
      mc('b1u09-l1', 'What is the most common mistake, according to the coach?', ['Setting vague goals', 'Setting too many goals', 'Having no friends'], 0, 'Setting goals that are too vague.'),
      mc('b1u09-l2', 'What should people define first?', ['One specific goal', 'A big dream', 'A schedule for the year'], 0, 'They should start by defining one specific goal.'),
      mc('b1u09-l3', 'Why shouldn’t you rely on motivation?', ['It can disappear after a bad week', 'It is expensive', 'It is dangerous'], 0, 'Motivation can disappear after a bad week.'),
      tf('b1u09-l4', 'The coach recommends being very hard on yourself when you fail.', false, 'She says: “Avoid being too hard on yourself.”'),
      mc('b1u09-l5', 'What is the coach’s philosophy?', ['Build habits and learn from mistakes', 'Wait for inspiration', 'Avoid goals'], 0, 'Create habits and treat mistakes as information.')
    ]
  },
  reading: {
    title: 'The skills that will matter',
    text: 'Many young professionals worry about choosing the right career, but experts increasingly suggest that learning how to learn matters more than any single qualification. Employers say they are looking for people who can adapt quickly, communicate clearly and work well in teams. Those skills, they argue, cannot be acquired by memorising facts; they develop through practising, receiving feedback and reflecting on mistakes. Career advisers recommend taking short courses, volunteering for challenging projects and finding a mentor who is willing to share experience. However, they also warn against trying to do everything at once. Setting realistic milestones, such as completing one course per term, is more effective than making vague promises to “improve”. Finally, resilience seems to be essential: people who manage to recover from setbacks tend to progress further than those who avoid taking risks.',
    questions: [
      rc('b1u09-r1', 'What matters more than any single qualification?', ['Learning how to learn', 'Memorising facts', 'Having a famous university'], 0, 'Experts suggest learning how to learn matters more.'),
      rc('b1u09-r2', 'How are skills like adaptability developed?', ['Practising, receiving feedback and reflecting', 'Memorising facts', 'Avoiding mistakes'], 0, 'They develop through practising, feedback and reflection.'),
      rc('b1u09-r3', 'What do advisers warn against?', ['Trying to do everything at once', 'Taking courses', 'Finding mentors'], 0, 'They warn against trying to do everything at once.'),
      rc('b1u09-r4', 'What can be inferred about resilience?', ['It helps people progress after failures', 'It is unimportant', 'It prevents any risk'], 0, 'People who recover from setbacks tend to progress further.'),
      rc('b1u09-r5', 'What does the writer recommend about goals?', ['Set realistic milestones', 'Make vague promises', 'Avoid goals'], 0, 'Realistic milestones are more effective than vague promises.')
    ]
  },
  speaking: { prompt: 'Habla con un compañero de tus objetivos para los próximos tres años y de lo que estás haciendo para alcanzarlos. Tu compañero actúa como mentor y te hace preguntas y recomendaciones.', tasks: ['Say two goals with “I hope to… / I’m planning to… / I’d like to…”.', 'Describe a strength and a weakness with a gerund (“I’m good at… / I find it hard…”).', 'Give your partner advice with should and a verb + object + to pattern (“I advise you to…”).', 'Explain one thing you remember doing and one thing you must remember to do.'] },
  writing: { prompt: 'Write a personal development plan (150 to 180 words): your goal for the next year, why it matters, three actions to achieve it, one possible obstacle and how you will overcome it. Use at least five gerund or infinitive structures and three modals.', rubric: ['Clear goal and logical action plan.', 'Correct use of gerunds and infinitives (decide to, enjoy -ing, in order to…).', 'Appropriate modals (should, might, will be able to, must…).', 'Realistic milestones and a way to measure progress.'], model: 'My goal for next year is to become fluent in English. It matters because I hope to work abroad. First, I’m going to practise speaking for thirty minutes every day. Second, I plan to take an online course, and third, I’ll try to find a language partner. I might struggle to keep going when I’m busy, so I should avoid skipping practice. If I set small milestones, such as finishing one unit per week, I’ll be able to see my progress.' },
  pronunciation: {
    items: [{ word: 'perseverance', ipa: '/ˌpɜːsɪˈvɪərəns/', stress: 'per-se-VER-ance' }, { word: 'qualification', ipa: '/ˌkwɒlɪfɪˈkeɪʃn/', stress: 'qual-i-fi-CA-tion' }, { word: 'procrastinate', ipa: '/prəʊˈkræstɪneɪt/', stress: 'pro-CRAS-ti-nate' }, { word: 'resilience', ipa: '/rɪˈzɪliəns/', stress: 're-ZIL-ience' }, { word: 'internship', ipa: '/ˈɪntɜːnʃɪp/', stress: 'IN-tern-ship' }],
    tips: ['To en infinitivo suena débil /tə/: I want to go → /aɪ ˈwɒntə ɡəʊ/.', 'Las palabras con -tion y -ssion suenan /ʃn/ y la fuerza va en la sílaba anterior: qualifiCAtion.', 'En to + verbo, no hay pausa entre to y el verbo; sí puede haberla antes de to de finalidad: I study, to improve my English.']
  },
  exercises: [
    mc('b1u09-e1', 'I enjoy ___ new languages.', ['learning', 'to learn', 'learn'], 0, 'enjoy + verb-ing.', 'Choose the correct form.'),
    fb('b1u09-e2', 'They decided ___ a business. (start)', 'to start', 'decide + to + verb.', undefined, 'Write the correct form.'),
    fb('b1u09-e3', 'She’s interested ___ taking a course.', 'in', 'interested in + -ing.', undefined, 'Write the preposition.'),
    wo('b1u09-e4', ['advised', 'My', 'take', 'me', 'course', 'mentor', 'to', 'the'], ['My', 'mentor', 'advised', 'me', 'to', 'take', 'the', 'course'], 'advise + object + to + verb.'),
    tf('b1u09-e5', 'After “enjoy” we use the infinitive (to + verb).', false, 'enjoy + -ing: enjoy learning.'),
    mt('b1u09-e6', 'Match each sentence with its meaning.', [['stop smoking', 'quit the habit'], ['stop to smoke', 'pause in order to smoke'], ['remember locking the door', 'recall a past action'], ['remember to lock the door', 'not forget a task']], 'The form changes the meaning.'),
    tr('b1u09-e7', 'Rewrite with a gerund as the subject.', 'It is rewarding to learn languages.', 'Learning languages is rewarding', 'Gerund as subject.'),
    tr('b1u09-e8', 'Rewrite with an infinitive of purpose.', 'I study English because I want to get a better job.', 'I study English to get a better job', 'to + verb = purpose.'),
    rc('b1u09-e9', 'What can be inferred?', ['She learned from a past mistake', 'She doesn’t want a scholarship', 'She never had a mentor'], 0, 'She regrets not applying and prepares earlier this time.', 'Marta regrets not applying for the scholarship last year. This time she has decided to prepare early and to ask her mentor for advice.'),
    sa('b1u09-e10', 'Write 4 to 5 sentences about your goals using two gerunds, two infinitives and one modal.', 'Model: “I want to improve my English. I enjoy watching films in English. I plan to take a course. I should stop procrastinating. I might apply for a scholarship.” Check: -ing after enjoy/stop, to + verb after want/plan, base verb after modals.')
  ],
  assessment: [
    mc('b1u09-t1', 'She avoids ___ late.', ['working', 'to work', 'work'], 0, 'avoid + -ing.'),
    mc('b1u09-t2', 'He hopes ___ a promotion this year.', ['to get', 'getting', 'get'], 0, 'hope + to + verb.'),
    fb('b1u09-t3', 'I’m looking forward ___ meeting you.', 'to', 'look forward to + -ing (to is a preposition).', undefined, 'Write the missing word.'),
    fb('b1u09-t4', 'My boss allowed me ___ from home.', 'to work', 'allow + object + to + verb.', undefined, 'Write the missing words.'),
    tf('b1u09-t5', 'After prepositions we normally use the -ing form.', true, 'interested in learning, good at solving.'),
    tf('b1u09-t6', '“I can to swim” is correct.', false, 'After can use the base verb: “I can swim.”'),
    wo('b1u09-t7', ['to', 'plan', 'We', 'a', 'take', 'course'], ['We', 'plan', 'to', 'take', 'a', 'course'], 'plan + to + verb.'),
    mc('b1u09-t8', 'Choose the correct sentence.', ['I stopped smoking two years ago.', 'I stopped to smoking two years ago.', 'I stopped smoke two years ago.'], 0, 'stop + -ing = quit.'),
    tr('b1u09-t9', 'Rewrite with be able to.', 'I can’t attend the workshop next week.', 'I won’t be able to attend the workshop next week', 'Future of can: will be able to.', ['I will not be able to attend the workshop next week']),
    mc('b1u09-t10', 'Which sentence expresses a purpose?', ['I took a course to improve my skills.', 'I took a course improving my skills.', 'I took a course for improve my skills.'], 0, 'to + verb = purpose.')
  ],
  review: ['Gerund after enjoy, avoid, finish, consider, keep, practise and after prepositions.', 'Infinitive after want, decide, hope, plan, manage, afford, promise, and for purpose.', 'Change of meaning: remember / stop / try + -ing or to.', 'Modals + base verb; was able to = a specific past occasion; will be able to = future.', 'Set specific goals, realistic milestones and learn from mistakes.']
};
export default unit;
