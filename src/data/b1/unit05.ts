import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'b1-u05', level: 'B1', unitNumber: 5, title: 'Technology and Society', subtitle: 'Discuss how technology changes our lives',
  communicativeGoal: 'Analizar cambios tecnológicos y sus consecuencias, usando condicionales para hablar de hechos generales, posibilidades reales y situaciones hipotéticas.',
  objectives: ['Usar el condicional cero para verdades generales.', 'Usar el primer condicional para consecuencias reales y probables.', 'Reconocer y usar de forma básica el segundo condicional para situaciones hipotéticas.', 'Debatir ventajas y riesgos de la tecnología con argumentos claros.'],
  grammar: {
    title: 'Zero and first conditional; introduction to the second conditional',
    explanation: [
      'Condicional cero: if + presente simple, presente simple. Expresa verdades generales y resultados que siempre ocurren: If you heat water to 100 degrees, it boils. If you don’t charge your phone, it dies.',
      'Primer condicional: if + presente simple, will + verbo base. Expresa una posibilidad real o probable en el futuro: If prices fall, more people will buy electric cars. No se usa will en la parte del if: no se dice “If it will rain”. En el resultado pueden ir modales (may, might, can, should) o un imperativo: If you see a suspicious email, don’t open it.',
      'Unless significa if … not: Unless we protect our data, hackers will steal it. También se usan as long as y provided (that) para condiciones (Provided that you turn off recording, it should be safe).',
      'Segundo condicional (introducción): if + pasado simple, would + verbo base. Expresa situaciones imaginarias o poco probables en el presente o futuro: If I had a robot assistant, I would save a lot of time. Con be se suele usar were para todas las personas: If I were you, I wouldn’t share that. Se usa también para consejos y preguntas hipotéticas: What would you do if you lost your phone?',
      'Cómo elegir: primer condicional = lo que piensas que es posible de verdad; segundo = lo imaginario o improbable. Si la cláusula con if va primero, se separa con coma: If it rains, we’ll stay in. Si va al final, no hay coma: We’ll stay in if it rains.'
    ],
    forms: [
      { label: 'Zero conditional', lines: ['If you don’t charge it, the phone dies.', 'If metal is heated, it expands.', 'If I work late, I feel exhausted.', 'Unless you press the button, nothing happens.'] },
      { label: 'First conditional', lines: ['If prices fall, more people will buy electric cars.', 'If you click that link, you might lose your password.', 'Unless we protect our data, hackers will steal it.', 'If you see a suspicious email, don’t open it.'] },
      { label: 'Second conditional (introduction)', lines: ['If I had a robot assistant, I would save a lot of time.', 'What would you do if you lost your phone?', 'If I were you, I wouldn’t share that photo.', 'If everyone worked from home, cities would be quieter.'] },
      { label: 'Useful expressions and collocations', lines: ['stay connected; go offline', 'take a digital detox', 'back up your files; protect your privacy', 'keep up with technology; fall behind', 'raise concerns about; weigh the pros and cons', 'be glued to your screen', 'fall victim to a scam', 'a double-edged sword'] }
    ]
  },
  vocabulary: [
    v('automation', 'automatización', '/ˌɔːtəˈmeɪʃn/', 'au-to-MA-tion'), v('privacy', 'privacidad', '/ˈprɪvəsi/', 'PRIV-a-cy'), v('surveillance', 'vigilancia', '/səˈveɪləns/', 'sur-VEIL-lance'),
    v('data', 'datos', '/ˈdeɪtə/', 'DA-ta'), v('algorithm', 'algoritmo', '/ˈælɡərɪðəm/', 'AL-go-rith-m'), v('addiction', 'adicción', '/əˈdɪkʃn/', 'ad-DIC-tion'),
    v('digital divide', 'brecha digital', '/ˈdɪdʒɪtl dɪˈvaɪd/', 'DIG-i-tal di-VIDE'), v('cybersecurity', 'ciberseguridad', '/ˌsaɪbəsɪˈkjʊərəti/', 'cy-ber-se-CU-ri-ty'), v('hacker', 'pirata informático', '/ˈhækə/', 'HACK-er'),
    v('encryption', 'cifrado', '/ɪnˈkrɪpʃn/', 'en-CRYP-tion'), v('innovation', 'innovación', '/ˌɪnəˈveɪʃn/', 'in-no-VA-tion'), v('obsolete', 'obsoleto', '/ˈɒbsəliːt/', 'OB-so-lete'),
    v('breakthrough', 'avance importante', '/ˈbreɪkθruː/', 'BREAK-through'), v('gadget', 'dispositivo, aparato', '/ˈɡædʒɪt/', 'GAD-get'), v('wearable', 'dispositivo ponible', '/ˈweərəbl/', 'WEAR-a-ble'),
    v('streaming', 'transmisión en línea', '/ˈstriːmɪŋ/', 'STREAM-ing'), v('dependence', 'dependencia', '/dɪˈpendəns/', 'de-PEN-dence'), v('convenience', 'comodidad', '/kənˈviːniəns/', 'con-VE-nience'),
    v('threat', 'amenaza', '/θret/', 'THREAT'), v('regulate', 'regular', '/ˈreɡjuleɪt/', 'REG-u-late')
  ],
  examples: [
    { en: 'If you don’t back up your files regularly, you risk losing years of work.', es: 'Si no haces copias de seguridad con regularidad, corres el riesgo de perder años de trabajo.' },
    { en: 'If the government regulates these apps, our privacy will probably improve.', es: 'Si el gobierno regula estas aplicaciones, nuestra privacidad probablemente mejorará.' },
    { en: 'Unless companies invest in cybersecurity, more data breaches will occur.', es: 'A menos que las empresas inviertan en ciberseguridad, ocurrirán más filtraciones de datos.' },
    { en: 'If I had more free time, I would take a break from social media.', es: 'Si tuviera más tiempo libre, me tomaría un descanso de las redes sociales.' },
    { en: 'What would happen if every device suddenly stopped working?', es: '¿Qué pasaría si todos los dispositivos dejaran de funcionar de repente?' },
    { en: 'As long as you use strong passwords, your accounts should be reasonably safe.', es: 'Siempre que uses contraseñas fuertes, tus cuentas deberían estar razonablemente seguras.' },
    { en: 'If I were you, I would turn off location tracking on most apps.', es: 'Si yo fuera tú, desactivaría el rastreo de ubicación en la mayoría de las aplicaciones.' },
    { en: 'If a software update contains a serious error, millions of users can be affected at once.', es: 'Si una actualización de software contiene un error grave, millones de usuarios pueden verse afectados a la vez.' }
  ],
  dialogue: [
    { speaker: 'Carla', text: 'I’m thinking of buying a smart speaker. If it’s as good as people say, I’ll use it every day.', es: 'Estoy pensando en comprar un parlante inteligente. Si es tan bueno como dicen, lo usaré todos los días.' },
    { speaker: 'Diego', text: 'Honestly, I wouldn’t buy one. If I had a device listening at home all day, I’d feel uncomfortable.', es: 'Sinceramente, yo no compraría uno. Si tuviera un aparato escuchando en casa todo el día, me sentiría incómodo.' },
    { speaker: 'Carla', text: 'But it only listens when you say the activation word.', es: 'Pero solo escucha cuando dices la palabra de activación.' },
    { speaker: 'Diego', text: 'That’s what the companies say. Unless there’s independent evidence, I won’t believe it.', es: 'Eso dicen las empresas. A menos que haya pruebas independientes, no lo creeré.' },
    { speaker: 'Carla', text: 'Fair enough. Still, I think the convenience outweighs the risk. If I forget something, I just ask it.', es: 'Es justo. Aun así, creo que la comodidad pesa más que el riesgo. Si olvido algo, simplemente se lo pregunto.' },
    { speaker: 'Diego', text: 'Convenience is tempting, but if you give away your data, you’ll never get it back.', es: 'La comodidad tienta, pero si entregas tus datos, nunca los recuperarás.' },
    { speaker: 'Carla', text: 'What would you do if you lived alone? Would you still refuse?', es: '¿Qué harías si vivieras solo? ¿Seguirías negándote?' },
    { speaker: 'Diego', text: 'Probably. Although, if the price were much lower, I might try it in the kitchen only.', es: 'Probablemente. Aunque, si el precio fuera mucho más bajo, quizá lo probaría solo en la cocina.' },
    { speaker: 'Carla', text: 'See? You’re already negotiating!', es: '¿Ves? ¡Ya estás negociando!' },
    { speaker: 'Diego', text: 'Okay, okay. If I change my mind, I’ll tell you.', es: 'Vale, vale. Si cambio de opinión, te lo diré.' },
    { speaker: 'Carla', text: 'Deal. And if it spies on me, I’ll return it immediately.', es: 'Trato hecho. Y si me espía, lo devolveré de inmediato.' },
    { speaker: 'Diego', text: 'Make sure you read the privacy settings first. Provided that you turn off recording, it should be safe enough.', es: 'Asegúrate de leer primero la configuración de privacidad. Siempre que desactives la grabación, debería ser bastante seguro.' }
  ],
  listening: {
    script: [
      { speaker: 'Host', text: 'Today we ask: if robots take over routine tasks, what will happen to workers?' },
      { speaker: 'Expert', text: 'It depends. If companies simply replace people, unemployment will rise. But if they invest in training, workers can move to more creative roles.' },
      { speaker: 'Host', text: 'Is that realistic?' },
      { speaker: 'Expert', text: 'It has happened before. When factories were automated, new jobs appeared that nobody had imagined. However, if governments don’t prepare, the transition could be painful.' },
      { speaker: 'Host', text: 'And if you were a student today, what would you study?' },
      { speaker: 'Expert', text: 'I would choose skills that machines can’t easily copy: communication, critical thinking and creativity.' },
      { speaker: 'Host', text: 'Unless the technology changes faster than we expect.' },
      { speaker: 'Expert', text: 'Exactly. Unless that happens, those skills will stay valuable.' }
    ],
    questions: [
      mc('b1u05-l1', 'What will happen if companies simply replace workers?', ['Unemployment will rise', 'Wages will fall', 'Nothing will change'], 0, 'If companies simply replace people, unemployment will rise.'),
      mc('b1u05-l2', 'What can happen if companies invest in training?', ['Workers can move to more creative roles', 'Robots will stop working', 'Companies will close'], 0, 'Workers can move to more creative roles.'),
      mc('b1u05-l3', 'Which skills would the expert advise a student to develop?', ['Communication, critical thinking and creativity', 'Only programming', 'Repetitive manual work'], 0, 'Skills that machines can’t easily copy.'),
      tf('b1u05-l4', 'The expert says the transition will definitely be painless.', false, 'If governments don’t prepare, the transition could be painful.'),
      mc('b1u05-l5', 'What is the expert’s overall attitude?', ['Cautiously optimistic', 'Very pessimistic', 'Indifferent'], 0, 'He mentions risks but also real opportunities.')
    ]
  },
  reading: {
    title: 'The right to disconnect',
    text: 'In recent years, several countries have introduced laws that allow employees to ignore work messages outside office hours. Supporters say that if workers are constantly available, they will eventually burn out, and that rest is essential for productivity. Critics argue that such laws are unrealistic in global companies, where colleagues in different time zones need to communicate. If an urgent problem appears at midnight, they ask, who will solve it? Employers worry that unless the rules are flexible, they will lose competitiveness. Nevertheless, early data suggest that the policy may not be as damaging as feared. In one pilot, employees who were not expected to answer emails after six o’clock reported lower stress, and their output did not fall. If these results are confirmed in larger studies, more governments will probably follow.',
    questions: [
      rc('b1u05-r1', 'What do supporters of these laws believe?', ['Constant availability leads to burnout', 'Workers should always be online', 'Time zones don’t matter'], 0, 'If workers are constantly available, they will eventually burn out.'),
      rc('b1u05-r2', 'What is the employers’ concern?', ['Losing competitiveness if rules are inflexible', 'Paying more taxes', 'Hiring more staff'], 0, 'They worry that unless the rules are flexible, they will lose competitiveness.'),
      rc('b1u05-r3', 'What did the pilot suggest?', ['Stress fell without lower output', 'Output fell sharply', 'Nothing changed'], 0, 'Employees reported lower stress and their output did not fall.'),
      rc('b1u05-r4', 'What does the final sentence imply?', ['More governments may adopt the policy', 'The policy will be cancelled', 'No country will follow'], 0, 'If results are confirmed, more governments will probably follow.'),
      rc('b1u05-r5', 'What is the writer’s stance?', ['Balanced, presenting evidence from both sides', 'Strongly against', 'Strongly in favour'], 0, 'The text presents supporters, critics and early data without taking sides.')
    ]
  },
  speaking: { prompt: 'Debate con un compañero sobre el impacto de una tecnología (por ejemplo, la inteligencia artificial, el teletrabajo o los asistentes de voz). Usa condicionales para mostrar consecuencias y escenarios hipotéticos.', tasks: ['Describe a real, likely consequence with the first conditional.', 'Describe an imaginary situation with the second conditional: “If I had…, I would…”.', 'Use unless or as long as at least once.', 'Ask your partner: “What would you do if…?” and respond to their answer.'] },
  writing: { prompt: 'Write a discursive essay of 150 to 180 words: “Is technology making our lives better?” Include advantages, risks and your conclusion. Use at least one zero, one first and one second conditional.', rubric: ['Structure: introduction, advantages, risks, conclusion.', 'Correct use of zero, first and second conditionals.', 'Uses unless / as long as at least once.', 'Balanced argumentation with examples.'], model: 'Technology has transformed our lives, but is it always for the better? If we use it wisely, it can save time and improve health care. For example, if a doctor has access to a patient’s data, the diagnosis is faster. However, if we depend on it too much, we may lose important skills. Unless companies protect our privacy, personal data will be misused. If I were a legislator, I would regulate apps that collect information without permission. In conclusion, technology is a tool: its value depends on how we use it.' },
  pronunciation: {
    items: [{ word: 'algorithm', ipa: '/ˈælɡərɪðəm/', stress: 'AL-go-rith-m' }, { word: 'cybersecurity', ipa: '/ˌsaɪbəsɪˈkjʊərəti/', stress: 'cy-ber-se-CU-ri-ty' }, { word: 'obsolete', ipa: '/ˈɒbsəliːt/', stress: 'OB-so-lete' }, { word: 'surveillance', ipa: '/səˈveɪləns/', stress: 'sur-VEIL-lance' }, { word: 'convenience', ipa: '/kənˈviːniəns/', stress: 'con-VE-nience' }],
    tips: ['I’ll, you’ll y I’d son contracciones de will y would: se oyen muy poco, pero cambian el significado (I’ll go = voy a ir; I’d go = iría).', 'Wouldn’t suena /ˈwʊdnt/; won’t suena /wəʊnt/: no los confundas.', 'En palabras largas como cybersecurity, la sílaba fuerte es CU y las demás son débiles.']
  },
  exercises: [
    mc('b1u05-e1', 'If you heat water to 100 degrees, it ___.', ['boils', 'will boil', 'would boil'], 0, 'General truth → zero conditional (present, present).', 'Choose the correct form for a general truth.'),
    fb('b1u05-e2', 'If it rains tomorrow, we ___ (stay) at home.', 'will stay', 'First conditional: will + base verb.', ['’ll stay', "'ll stay"], 'Write the correct form.'),
    fb('b1u05-e3', 'If I ___ (have) more time, I would learn Chinese.', 'had', 'Second conditional: if + past simple.', undefined, 'Write the correct form.'),
    wo('b1u05-e4', ['If', 'you', 'click', 'that', 'link', 'you', 'might', 'lose', 'your', 'password'], ['If', 'you', 'click', 'that', 'link', 'you', 'might', 'lose', 'your', 'password'], 'if + present simple, might + base verb.'),
    tf('b1u05-e5', 'We use “will” in the if-clause of a first conditional sentence.', false, 'The if-clause uses the present simple: If it rains, we will stay.'),
    mt('b1u05-e6', 'Match each sentence with its type.', [['If you press this, the screen turns off.', 'zero conditional'], ['If prices fall, more people will buy it.', 'first conditional'], ['If I were rich, I would travel.', 'second conditional'], ['Unless you pay, you can’t enter.', 'unless = if not']], 'Look at the verb forms.'),
    tr('b1u05-e7', 'Rewrite with unless.', 'If you don’t back up your files, you will lose them.', 'Unless you back up your files, you will lose them', 'unless = if … not.', ['Unless you back up your files you will lose them', 'Unless you back up your files, you’ll lose them']),
    tr('b1u05-e8', 'Make a second conditional.', 'I don’t have time, so I don’t learn programming.', 'If I had time, I would learn programming', 'if + past simple, would + base verb.', ['If I had time I would learn programming', 'If I had time, I’d learn programming', 'If I had time I’d learn programming']),
    rc('b1u05-e9', 'What can be inferred?', ['Trust in the company is already falling', 'The company has improved security', 'No users are worried'], 0, 'Some users have already deleted their accounts.', 'If the company doesn’t improve its security, customers will probably leave. Several users have already deleted their accounts.'),
    sa('b1u05-e10', 'Write 4 to 5 sentences about technology using one zero conditional, one first conditional and one second conditional.', 'Model: “If I don’t charge my phone, it dies. If prices fall, I will buy a new laptop. If I had a robot assistant, I would save time.” Check: verb forms in both clauses and comma use.')
  ],
  assessment: [
    mc('b1u05-t1', 'If you ___ the button, the machine starts.', ['press', 'will press', 'pressed'], 0, 'Zero conditional: present + present.'),
    mc('b1u05-t2', 'If it ___ tomorrow, we’ll cancel the trip.', ['rains', 'will rain', 'rained'], 0, 'First conditional: if + present.'),
    fb('b1u05-t3', '___ you back up your data, you may lose it. (if not)', 'Unless', 'unless = if … not.', undefined, 'Write the missing word.'),
    fb('b1u05-t4', 'If I were you, I ___ share that photo.', 'wouldn’t', 'Second conditional advice: would + base verb.', ['would not'], 'Write the missing word.'),
    tf('b1u05-t5', '“Unless” means “if not”.', true, 'Unless you hurry = if you don’t hurry.'),
    tf('b1u05-t6', 'In a second conditional, the if-clause uses the past simple.', true, 'If I had…, I would…'),
    wo('b1u05-t7', ['If', 'we', 'act', 'now', 'we', 'will', 'avoid', 'problems'], ['If', 'we', 'act', 'now', 'we', 'will', 'avoid', 'problems'], 'First conditional.'),
    mc('b1u05-t8', 'Which sentence describes an unlikely or imaginary situation?', ['If I had a time machine, I would visit the future.', 'If it rains, I’ll stay in.', 'If you heat metal, it expands.'], 0, 'Second conditional = imaginary.'),
    tr('b1u05-t9', 'Rewrite with unless.', 'If you don’t update the app, it won’t work.', 'Unless you update the app, it won’t work', 'unless + affirmative verb.', ['Unless you update the app it won’t work', 'Unless you update the app, it will not work', 'Unless you update the app it will not work']),
    mc('b1u05-t10', 'Choose the correct sentence.', ['If prices fall, more people will buy electric cars.', 'If prices will fall, more people buy electric cars.', 'If prices fell, more people will buy electric cars.'], 0, 'First conditional: if + present simple, will + base verb.')
  ],
  review: ['Zero: if + present, present (general truths).', 'First: if + present, will + base verb (real, likely future).', 'Second (intro): if + past simple, would + base verb (imaginary or unlikely).', 'unless = if … not; as long as / provided that = on condition that.', 'Never use will directly after if in these conditionals.']
};
export default unit;
