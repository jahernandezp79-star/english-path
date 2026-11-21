import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'b1-u07', level: 'B1', unitNumber: 7, title: 'Problems and Decisions', subtitle: 'Weigh up options, imagine consequences and decide',
  communicativeGoal: 'Plantear hipótesis y soluciones, comparar opciones y tomar decisiones usando primer y segundo condicional.',
  objectives: ['Distinguir el primer condicional (posible) del segundo (hipotético).', 'Usar what if, in case, otherwise, as long as y unless.', 'Dar consejos con If I were you…', 'Analizar un dilema y justificar una decisión.'],
  grammar: {
    title: 'First and second conditional',
    explanation: [
      'Primer condicional: if + presente simple, will + verbo base. Se usa para posibilidades reales que pueden ocurrir en el futuro: If we leave now, we’ll catch the train. En el resultado pueden aparecer modales: If you don’t decide soon, we might lose the offer.',
      'Segundo condicional: if + pasado simple, would + verbo base. Habla de situaciones imaginarias, poco probables o contrarias a la realidad presente: If I had the money, I would buy it (pero no la tengo). Con be se usa were: If I were you, I’d accept the offer. No se usa would en la parte del if.',
      'La diferencia es de actitud del hablante: If I win the lottery, I’ll travel (lo veo posible) frente a If I won the lottery, I’d travel (lo veo improbable). Para preguntar: What would you do if you lost your job? What if the plan doesn’t work? (What if + presente: ¿y si sale mal?).',
      'Otros conectores condicionales: as long as / provided that (con la condición de que), unless (= if not), otherwise (si no, entonces: Apply today; otherwise, you’ll miss the deadline) e in case (como precaución, no como condición: Take an umbrella in case it rains).',
      'Cuando la cláusula con if va primero, se separa con coma: If it rains, we’ll stay in. Si va después, no hay coma: We’ll stay in if it rains. Cuidado: if no es igual que when: When it rains (seguro que llueve) / If it rains (quizá).'
    ],
    forms: [
      { label: 'First conditional', lines: ['If we leave now, we’ll catch the train.', 'If you don’t decide soon, we might lose the offer.', 'What if the plan doesn’t work?', 'I’ll take the job as long as the salary is reasonable.'] },
      { label: 'Second conditional', lines: ['If I had the money, I would buy it.', 'If I were in your position, I’d accept the offer.', 'What would you do if you lost your job?', 'If we lived closer, we could meet more often.'] },
      { label: 'Other conditional words', lines: ['Take a jacket in case it gets cold.', 'Apply today; otherwise, you’ll miss the deadline.', 'Unless we cut costs, the project will fail.', 'Provided that you pay on time, there’s no penalty.'] },
      { label: 'Useful expressions and collocations', lines: ['weigh up the options; make a decision', 'take a risk; play it safe', 'sleep on it; jump to conclusions', 'be torn between A and B', 'keep your options open; it’s a tough call', 'cut your losses; a pros and cons list', 'reach a compromise; on the one hand… on the other hand…', 'it all depends on…'] }
    ]
  },
  vocabulary: [
    v('dilemma', 'dilema', '/dɪˈlemə/', 'di-LEM-ma'), v('option', 'opción', '/ˈɒpʃn/', 'OP-tion'), v('alternative', 'alternativa', '/ɔːlˈtɜːnətɪv/', 'al-TER-na-tive'),
    v('consequence', 'consecuencia', '/ˈkɒnsɪkwəns/', 'CON-se-quence'), v('risk', 'riesgo', '/rɪsk/', 'RISK'), v('compromise', 'acuerdo, concesión', '/ˈkɒmprəmaɪz/', 'COM-pro-mise'),
    v('hesitate', 'dudar', '/ˈhezɪteɪt/', 'HES-i-tate'), v('impulsive', 'impulsivo', '/ɪmˈpʌlsɪv/', 'im-PUL-sive'), v('cautious', 'cauteloso', '/ˈkɔːʃəs/', 'CAU-tious'),
    v('outcome', 'resultado', '/ˈaʊtkʌm/', 'OUT-come'), v('regret', 'lamentar; arrepentimiento', '/rɪˈɡret/', 're-GRET'), v('afford', 'permitirse (económicamente)', '/əˈfɔːd/', 'af-FORD'),
    v('overwhelmed', 'abrumado', '/ˌəʊvəˈwelmd/', 'o-ver-WHELMED'), v('reconsider', 'reconsiderar', '/ˌriːkənˈsɪdə/', 're-con-SI-der'), v('sacrifice', 'sacrificio; sacrificar', '/ˈsækrɪfaɪs/', 'SAC-ri-fice'),
    v('gamble', 'apuesta; arriesgarse', '/ˈɡæmbl/', 'GAM-ble'), v('rational', 'racional', '/ˈræʃnəl/', 'RA-tion-al'), v('unavoidable', 'inevitable', '/ˌʌnəˈvɔɪdəbl/', 'un-a-VOID-a-ble'),
    v('setback', 'contratiempo', '/ˈsetbæk/', 'SET-back'), v('resolve', 'resolver', '/rɪˈzɒlv/', 're-SOLVE')
  ],
  examples: [
    { en: 'If you accept the offer, you’ll earn more, but you’ll have to move to another city.', es: 'Si aceptas la oferta ganarás más, pero tendrás que mudarte a otra ciudad.' },
    { en: 'If I were in your position, I would take some time to reconsider before signing.', es: 'Si yo estuviera en tu lugar, me tomaría tiempo para reconsiderar antes de firmar.' },
    { en: 'What would you do if the company offered you a promotion abroad?', es: '¿Qué harías si la empresa te ofreciera un ascenso en el extranjero?' },
    { en: 'We’ll go ahead with the project as long as the budget doesn’t increase.', es: 'Seguiremos adelante con el proyecto siempre que el presupuesto no aumente.' },
    { en: 'Back up your files today; otherwise, you could lose everything.', es: 'Haz hoy una copia de seguridad de tus archivos; de lo contrario, podrías perderlo todo.' },
    { en: 'Unless the market improves, we won’t be able to afford a bigger office.', es: 'A menos que el mercado mejore, no podremos permitirnos una oficina más grande.' },
    { en: 'If everyone chose the cheapest option, many small shops would disappear.', es: 'Si todos eligieran la opción más barata, muchas tiendas pequeñas desaparecerían.' },
    { en: 'Take your passport in case they ask for identification.', es: 'Lleva tu pasaporte por si piden identificación.' }
  ],
  dialogue: [
    { speaker: 'Elisa', text: 'I’ve been offered a job in Lisbon, and I can’t decide. If I accept, I’ll have to leave my flat and my friends.', es: 'Me ofrecieron un trabajo en Lisboa y no puedo decidirme. Si acepto, tendré que dejar mi piso y a mis amigos.' },
    { speaker: 'Pablo', text: 'That’s a big decision. What would you do if the salary were the same as here?', es: 'Es una gran decisión. ¿Qué harías si el sueldo fuera igual que aquí?' },
    { speaker: 'Elisa', text: 'I’d probably stay. But it’s almost twice as much, so I’m tempted.', es: 'Probablemente me quedaría. Pero es casi el doble, así que me tienta.' },
    { speaker: 'Pablo', text: 'Then the question is: if you stay, will you regret it in five years?', es: 'Entonces la pregunta es: si te quedas, ¿te arrepentirás dentro de cinco años?' },
    { speaker: 'Elisa', text: 'Possibly. If I were younger, I’d go without thinking. But now I have a mortgage.', es: 'Posiblemente. Si fuera más joven, iría sin pensarlo. Pero ahora tengo una hipoteca.' },
    { speaker: 'Pablo', text: 'If you’re worried about the money, you could rent your flat out. Then the mortgage would pay for itself.', es: 'Si te preocupa el dinero, podrías alquilar tu piso. Así la hipoteca se pagaría sola.' },
    { speaker: 'Elisa', text: 'That’s an idea. What if the job doesn’t work out, though?', es: 'Es una idea. ¿Y si el trabajo no funciona?' },
    { speaker: 'Pablo', text: 'In that case you can always come back. Companies here would welcome someone with international experience.', es: 'En ese caso siempre puedes volver. Las empresas de aquí recibirían bien a alguien con experiencia internacional.' },
    { speaker: 'Elisa', text: 'True. Unless the market gets worse, I shouldn’t have problems finding something.', es: 'Cierto. A menos que el mercado empeore, no debería tener problemas para encontrar algo.' },
    { speaker: 'Pablo', text: 'And if I were you, I’d ask for a six-month trial period before committing.', es: 'Y si yo fuera tú, pediría un periodo de prueba de seis meses antes de comprometerme.' },
    { speaker: 'Elisa', text: 'Good point. I’ll sleep on it and give them an answer on Friday.', es: 'Buen punto. Lo consultaré con la almohada y les daré una respuesta el viernes.' },
    { speaker: 'Pablo', text: 'Take your time, but don’t wait too long; otherwise they may offer it to someone else.', es: 'Tómate tu tiempo, pero no esperes demasiado; de lo contrario podrían ofrecérselo a otra persona.' }
  ],
  listening: {
    script: [
      { speaker: 'Host', text: 'Our next caller is Sam, who has a dilemma. Sam, what’s the problem?' },
      { speaker: 'Sam', text: 'I’ve been offered a promotion, but it means moving to another city. My partner has a good job here.' },
      { speaker: 'Host', text: 'What would happen if you turned it down?' },
      { speaker: 'Sam', text: 'Probably nothing in the short term, but I think they might not offer me another chance.' },
      { speaker: 'Host', text: 'And if your partner came with you?' },
      { speaker: 'Sam', text: 'She could work remotely, but she’d miss her family.' },
      { speaker: 'Host', text: 'My advice? Don’t decide today. If I were you, I’d talk to your partner about the long term and ask the company whether they’d accept a trial period.' },
      { speaker: 'Sam', text: 'That makes sense. If we agree on a plan, I’ll call my boss on Monday.' }
    ],
    questions: [
      mc('b1u07-l1', 'What is Sam’s dilemma?', ['Accepting a promotion that requires moving', 'Quitting his job', 'Buying a house'], 0, 'The promotion means moving to another city.'),
      mc('b1u07-l2', 'What could happen if Sam turns the promotion down?', ['He might not get another chance', 'He will be fired', 'He will get a raise'], 0, 'He thinks they might not offer another chance.'),
      mc('b1u07-l3', 'What does the host advise?', ['Talk to his partner and ask about a trial period', 'Accept immediately', 'Refuse immediately'], 0, 'He suggests discussing it and asking for a trial period.'),
      tf('b1u07-l4', 'Sam’s partner could move without any concern.', false, 'She would miss her family.'),
      mc('b1u07-l5', 'What is the host’s approach?', ['Encouraging a careful decision', 'Pushing for a quick decision', 'Avoiding giving advice'], 0, 'He says: “Don’t decide today.”')
    ]
  },
  reading: {
    title: 'Decision fatigue: do we choose worse when we are tired?',
    text: 'Every day we make thousands of decisions, from what to wear to whether to answer an email. Psychologists use the term “decision fatigue” to describe the idea that the quality of our choices declines after a long period of decision-making. If you have ever ordered the first thing on a menu because you were too tired to compare options, you will recognise the feeling. One famous study claimed that judges made stricter rulings late in the day, although later researchers have questioned that conclusion. Some experts nevertheless recommend taking important decisions early, and simplifying routine ones: if you always wear similar clothes, you will save mental energy for more significant choices. Critics caution that the evidence is not conclusive and that motivation also matters. If people believe a decision is important, they might perform well even when tired. Perhaps the most useful lesson is a simple one: if a choice matters, don’t make it when you are exhausted.',
    questions: [
      rc('b1u07-r1', 'What does “decision fatigue” mean?', ['Choices get worse after long periods of deciding', 'People refuse to decide', 'Decisions become easier'], 0, 'The quality of choices declines after a long period of decision-making.'),
      rc('b1u07-r2', 'What do some experts recommend?', ['Taking important decisions early', 'Avoiding all decisions', 'Deciding at night'], 0, 'They recommend taking important decisions early.'),
      rc('b1u07-r3', 'What do the critics say?', ['The evidence is not conclusive', 'The theory is perfect', 'Motivation is irrelevant'], 0, 'They caution that the evidence is not conclusive.'),
      rc('b1u07-r4', 'What can be inferred about the study on judges?', ['It is famous but disputed', 'It is fully proven', 'It is about teachers'], 0, 'Later researchers have questioned its conclusion.'),
      rc('b1u07-r5', 'What is the main practical advice?', ['Don’t make important choices when exhausted', 'Always decide quickly', 'Avoid routines'], 0, 'If a choice matters, don’t make it when you are exhausted.')
    ]
  },
  speaking: { prompt: 'Presenta a un compañero un dilema real o inventado (aceptar un trabajo, mudarse, comprar algo caro). Tu compañero te da consejos y te hace preguntas hipotéticas.', tasks: ['Describe the dilemma and two options using if + present, will.', 'Imagine an unlikely situation with if + past, would.', 'Give your partner advice with “If I were you, I’d…”.', 'Use at least two of: unless, as long as, otherwise, in case, what if.'] },
  writing: { prompt: 'Write a letter or email (150 to 180 words) to a friend asking for advice about a difficult decision. Describe the situation, the options and the possible consequences using first and second conditionals.', rubric: ['Describes the dilemma clearly with two options.', 'Uses first and second conditionals correctly.', 'Uses at least two of unless, as long as, otherwise, in case, what if.', 'Ends by asking for advice politely.'], model: 'Dear Clara, I need your advice. I’ve been offered a job in another city. If I accept, I’ll earn more, but I’ll be far from my family. If I stayed here, I would feel safer, but I might regret not trying. What would you do if you were me? I’ll take the job as long as the contract is long enough; otherwise it’s too risky. Unless I get a trial period, I won’t move. What do you think? Love, Laura' },
  pronunciation: {
    items: [{ word: 'dilemma', ipa: '/dɪˈlemə/', stress: 'di-LEM-ma' }, { word: 'consequence', ipa: '/ˈkɒnsɪkwəns/', stress: 'CON-se-quence' }, { word: 'alternative', ipa: '/ɔːlˈtɜːnətɪv/', stress: 'al-TER-na-tive' }, { word: 'reconsider', ipa: '/ˌriːkənˈsɪdə/', stress: 're-con-SI-der' }, { word: 'compromise', ipa: '/ˈkɒmprəmaɪz/', stress: 'COM-pro-mise' }],
    tips: ['I’d y I’ll suenan casi igual en el habla rápida: escucha el contexto (If I’d known / If I’ll go).', 'En un condicional, la cláusula con if suele terminar con entonación ascendente y la cláusula principal con entonación descendente.', 'Wouldn’t se pronuncia /ˈwʊdnt/ (la l no suena).']
  },
  exercises: [
    mc('b1u07-e1', 'If I ___ you, I would accept the offer.', ['were', 'am', 'will be'], 0, 'Second conditional with be: were.', 'Choose the correct form.'),
    fb('b1u07-e2', 'If we leave now, we ___ (catch) the train.', 'will catch', 'First conditional.', ['’ll catch', "'ll catch"], 'Write the correct form.'),
    fb('b1u07-e3', 'What would you do if you ___ (lose) your job?', 'lost', 'Second conditional: if + past simple.', undefined, 'Write the correct form.'),
    wo('b1u07-e4', ['If', 'I', 'were', 'you', 'I', 'would', 'accept', 'it'], ['If', 'I', 'were', 'you', 'I', 'would', 'accept', 'it'], 'A common way to give advice.'),
    tf('b1u07-e5', '“If I will have time, I will help you” is correct.', false, 'No will in the if-clause: “If I have time, I will help you.”'),
    mt('b1u07-e6', 'Match each word with its meaning.', [['in case', 'as a precaution'], ['otherwise', 'if not, then'], ['as long as', 'on the condition that'], ['unless', 'if … not']], 'They are not interchangeable.'),
    tr('b1u07-e7', 'Rewrite with unless.', 'If you don’t hurry, you’ll miss the bus.', 'Unless you hurry, you’ll miss the bus', 'unless = if … not.', ['Unless you hurry you’ll miss the bus', 'Unless you hurry, you will miss the bus', 'Unless you hurry you will miss the bus']),
    tr('b1u07-e8', 'Make a second conditional.', 'I don’t have the money, so I can’t buy it.', 'If I had the money, I could buy it', 'if + past simple, could/would + base verb.', ['If I had the money I could buy it', 'If I had the money, I would buy it', 'If I had the money I would buy it']),
    rc('b1u07-e9', 'What can be inferred?', ['The salary is the main reason she is tempted', 'She has already decided to stay', 'She doesn’t care about her family'], 0, 'She would stay if the salary were the same.', 'Ana can’t decide whether to accept the job. If she moves, she’ll earn more, but she’ll be far from her family. She says she would stay if the salary were the same.'),
    sa('b1u07-e10', 'Describe a real dilemma in 5 to 6 sentences. Use the first and second conditional and one decision expression (sleep on it, weigh up the options…).', 'Model: “I have to choose between two courses. If I take the cheaper one, I’ll save money. If I had more savings, I would take the better one. I’ll sleep on it.” Check: correct verb forms and a clear conclusion.')
  ],
  assessment: [
    mc('b1u07-t1', 'If you ___ the offer today, you’ll get a discount.', ['accept', 'will accept', 'accepted'], 0, 'First conditional: if + present.'),
    mc('b1u07-t2', 'If I ___ more money, I would travel more.', ['had', 'have', 'would have'], 0, 'Second conditional: if + past simple.'),
    fb('b1u07-t3', 'Take a jacket ___ it gets cold.', 'in case', 'in case = as a precaution.', undefined, 'Write two words.'),
    fb('b1u07-t4', 'Apply today; ___, you will miss the deadline.', 'otherwise', 'otherwise = if not.', ['or else'], 'Write the missing word.'),
    tf('b1u07-t5', 'We can use “would” in the if-clause of a second conditional.', false, 'The if-clause uses the past simple.'),
    tf('b1u07-t6', '“What if + present simple” asks about a possible future problem.', true, 'What if it rains?'),
    wo('b1u07-t7', ['you', 'What', 'if', 'would', 'do', 'lost', 'you', 'your', 'job'], ['What', 'would', 'you', 'do', 'if', 'you', 'lost', 'your', 'job'], 'A second conditional question.'),
    mc('b1u07-t8', 'Which sentence is a first conditional?', ['If you ask now, they will probably agree.', 'If you asked now, they would agree.', 'If you had asked, they would have agreed.'], 0, 'if + present, will.'),
    tr('b1u07-t9', 'Rewrite with if.', 'Hurry up or you’ll be late.', 'If you don’t hurry up, you’ll be late', 'or = if you don’t.', ['If you don’t hurry up you’ll be late', 'If you don’t hurry up, you will be late', 'If you don’t hurry up you will be late']),
    mc('b1u07-t10', 'Choose the best advice with a second conditional.', ['If I were you, I’d ask for more time.', 'If I am you, I ask for more time.', 'If I would be you, I’d ask for more time.'], 0, 'If I were you, I would…')
  ],
  review: ['First conditional: if + present, will (real, possible).', 'Second conditional: if + past, would (imaginary or unlikely); were for all persons.', 'What if… / unless / as long as / in case / otherwise.', 'If I were you, I’d… = advice.', 'Decision language: weigh up the options, sleep on it, be torn between…']
};
export default unit;
