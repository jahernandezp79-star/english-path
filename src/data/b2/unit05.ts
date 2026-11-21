import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'b2-u05', level: 'B2', unitNumber: 5, title: 'Hypothetical Situations', subtitle: 'Imagine alternatives, analyse consequences and reflect on the past',
  communicativeGoal: 'Analizar escenarios hipotéticos y sus consecuencias: imaginar cómo habría sido el pasado, cómo sería el presente y qué podría ocurrir, y expresar arrepentimiento o deseo con precisión.',
  objectives: ['Usar el segundo y tercer condicional con seguridad y elegir entre would, could y might.', 'Formar condicionales mixtos (pasado → presente y presente → pasado).', 'Usar alternativas formales y expresivas a if (had I…, were he to…, but for…, suppose).', 'Expresar arrepentimiento y deseo con wish e if only, y razonar sobre escenarios hipotéticos.'],
  grammar: {
    title: 'Second and third conditionals, introduction to mixed conditionals',
    explanation: [
      'Segundo condicional (situaciones hipotéticas del presente o futuro): if + pasado simple, would / could / might + verbo base. If I were in charge, I would change the system. El modal expresa el grado de certeza: would (resultado probable), could (posibilidad o capacidad), might (resultado posible).',
      'Tercer condicional (situaciones imaginarias del pasado, contrarias a la realidad): if + past perfect, would / could / might have + participio. If we had left earlier, we wouldn’t have missed the flight. Sirve para analizar causas, expresar crítica o arrepentimiento y reflexionar sobre alternativas.',
      'Condicionales mixtos: combinan tiempos distintos. Condición pasada → resultado presente: If I had accepted the offer, I would be living abroad now. Condición presente (o permanente) → resultado pasado: If she weren’t so cautious, she would have invested earlier. Funcionan cuando el momento de la condición y el del resultado no coinciden.',
      'Alternativas a if, más formales o más expresivas: inversión (Had I known…; Were he to resign…; Should you need help…), but for / if it weren’t for / if it hadn’t been for (But for your help, we would have failed), suppose / supposing (Suppose you had won, what would you have done?), otherwise (We took a taxi; otherwise we would have missed it) y provided (that).',
      'Deseos y arrepentimientos: wish + pasado simple (deseo sobre el presente: I wish I were taller), wish + past perfect (arrepentimiento sobre el pasado: I wish I had listened) e if only (más enfático: If only we had more time). En el registro formal, were sustituye a was en todas las personas.'
    ],
    forms: [
      { label: 'Second and third conditional', lines: ['If I were in charge, I would change the system.', 'If we had left earlier, we wouldn’t have missed the flight.', 'If she had been more cautious, she might have avoided the loss.', 'What would you have done if you had been in my position?'] },
      { label: 'Mixed conditionals', lines: ['If I had accepted the offer, I would be living abroad now.', 'If she weren’t so cautious, she would have invested earlier.', 'If he had studied medicine, he could be a surgeon today.', 'If it weren’t for the grant, the lab would have closed years ago.'] },
      { label: 'Formal alternatives and wishes', lines: ['Had I known, I would have acted differently.', 'Were the government to resign, an election would follow.', 'But for your help, we would have failed.', 'I wish I had listened. / If only we had more time.'] },
      { label: 'Useful expressions and collocations', lines: ['if only; in hindsight; what if', 'the road not taken; learn the hard way', 'dodge a bullet; have a close shave', 'make or break; against the odds', 'turn out for the best; a blessing in disguise', 'weigh up the consequences; a worst-case scenario', 'a ripple effect; a silver lining', 'hold your ground; leave nothing to chance'] }
    ]
  },
  vocabulary: [
    v('scenario', 'escenario', '/səˈnɑːriəʊ/', 'sce-NA-ri-o'), v('hypothetical', 'hipotético', '/ˌhaɪpəˈθetɪkl/', 'hy-po-THET-i-cal'), v('speculate', 'especular', '/ˈspekjuleɪt/', 'SPEC-u-late'),
    v('counterfactual', 'contrafáctico', '/ˌkaʊntəˈfæktʃuəl/', 'coun-ter-FAC-tu-al'), v('coincidence', 'coincidencia', '/kəʊˈɪnsɪdəns/', 'co-IN-ci-dence'), v('inevitable', 'inevitable', '/ɪnˈevɪtəbl/', 'in-EV-i-ta-ble'),
    v('contingency', 'plan de contingencia', '/kənˈtɪndʒənsi/', 'con-TIN-gen-cy'), v('implication', 'implicación', '/ˌɪmplɪˈkeɪʃn/', 'im-pli-CA-tion'), v('foresee', 'prever', '/fɔːˈsiː/', 'for-SEE'),
    v('avert', 'evitar, impedir', '/əˈvɜːt/', 'a-VERT'), v('jeopardise', 'poner en peligro', '/ˈdʒepədaɪz/', 'JEOP-ar-dise'), v('repercussion', 'repercusión', '/ˌriːpəˈkʌʃn/', 're-per-CUS-sion'),
    v('windfall', 'ganancia inesperada', '/ˈwɪndfɔːl/', 'WIND-fall'), v('mishap', 'contratiempo', '/ˈmɪshæp/', 'MIS-hap'), v('pitfall', 'trampa, peligro oculto', '/ˈpɪtfɔːl/', 'PIT-fall'),
    v('precaution', 'precaución', '/prɪˈkɔːʃn/', 'pre-CAU-tion'), v('narrowly', 'por poco', '/ˈnærəʊli/', 'NAR-row-ly'), v('fate', 'destino', '/feɪt/', 'FATE'),
    v('conjecture', 'conjetura', '/kənˈdʒektʃə/', 'con-JEC-ture'), v('ripple effect', 'efecto dominó', '/ˈrɪpl ɪˌfekt/', 'RIP-ple ef-FECT'), v('worst-case scenario', 'peor escenario', '/ˌwɜːst keɪs səˈnɑːriəʊ/', 'worst-case sce-NA-ri-o'),
    v('silver lining', 'lado positivo', '/ˌsɪlvə ˈlaɪnɪŋ/', 'SIL-ver LI-ning')
  ],
  examples: [
    { en: 'If we had foreseen the repercussions, we would never have approved the merger.', es: 'Si hubiéramos previsto las repercusiones, nunca habríamos aprobado la fusión.' },
    { en: 'Were the funding to be cut, the whole programme would be in jeopardy.', es: 'Si se recortara la financiación, todo el programa correría peligro.' },
    { en: 'But for a last-minute rescue, the expedition would narrowly have ended in tragedy.', es: 'De no ser por un rescate de último momento, la expedición habría terminado por poco en tragedia.' },
    { en: 'If I had taken that job, I would be living abroad now, and I might never have met my partner.', es: 'Si hubiera aceptado ese trabajo, ahora viviría en el extranjero, y quizá nunca habría conocido a mi pareja.' },
    { en: 'Had the warning signs been taken seriously, the mishap could have been averted.', es: 'Si se hubieran tomado en serio las señales de advertencia, el contratiempo podría haberse evitado.' },
    { en: 'Suppose the experiment had failed; would we have had a contingency plan?', es: 'Supón que el experimento hubiera fallado; ¿habríamos tenido un plan de contingencia?' },
    { en: 'I wish I had read the contract more carefully; there are pitfalls that I overlooked.', es: 'Ojalá hubiera leído el contrato con más atención; hay trampas que pasé por alto.' },
    { en: 'If it weren’t for the scholarship, I wouldn’t have been able to study abroad.', es: 'Si no fuera por la beca, no habría podido estudiar en el extranjero.' }
  ],
  dialogue: [
    { speaker: 'Mira', text: 'Do you ever wonder how your life would have turned out if you’d taken that job in Singapore?', es: '¿Alguna vez te preguntas cómo habría sido tu vida si hubieras aceptado ese trabajo en Singapur?' },
    { speaker: 'Oscar', text: 'All the time. If I had said yes, I’d probably be living there now, and I’d never have met Anna.', es: 'Todo el tiempo. Si hubiera dicho que sí, probablemente viviría allí ahora y nunca habría conocido a Anna.' },
    { speaker: 'Mira', text: 'That’s the strange thing about decisions. Had you known that, would you have chosen differently?', es: 'Eso es lo raro de las decisiones. De haberlo sabido, ¿habrías elegido distinto?' },
    { speaker: 'Oscar', text: 'Hard to say. If I’d known I’d meet her, I might have stayed anyway. But if I hadn’t been so cautious back then, I would have a very different career today.', es: 'Difícil decirlo. Si hubiera sabido que la conocería, quizá me habría quedado igual. Pero si no hubiera sido tan cauteloso entonces, tendría una carrera muy distinta hoy.' },
    { speaker: 'Mira', text: 'Cautious or sensible? Because if you’d gone, the company folded the following year.', es: '¿Cauteloso o sensato? Porque si hubieras ido, la empresa quebró al año siguiente.' },
    { speaker: 'Oscar', text: 'True! But for that, I’d have been in the same position as my old colleagues, jobless in a foreign country.', es: '¡Cierto! De no ser por eso, habría estado en la misma situación que mis antiguos colegas, sin trabajo en un país extranjero.' },
    { speaker: 'Mira', text: 'So perhaps the lesson isn’t about right or wrong choices.', es: 'Así que quizá la lección no sea sobre decisiones correctas o equivocadas.' },
    { speaker: 'Oscar', text: 'Which is easy to say with hindsight. Suppose I’d known the company would fail, I wouldn’t have hesitated for a second.', es: 'Lo cual es fácil de decir con la perspectiva actual. Si hubiera sabido que la empresa fracasaría, no habría dudado ni un segundo.' },
    { speaker: 'Mira', text: 'Fair. I suppose I wish I’d been more adventurous myself. If only I had listened to my father and studied abroad.', es: 'Justo. Supongo que ojalá yo hubiera sido más aventurera. Ojalá hubiera escuchado a mi padre y estudiado afuera.' },
    { speaker: 'Oscar', text: 'It’s not too late. If you were to apply now, they’d surely consider you.', es: 'No es tarde. Si solicitaras ahora, seguro te considerarían.' },
    { speaker: 'Mira', text: 'Maybe. If I weren’t so afraid of failing, I’d have applied years ago.', es: 'Quizá. Si no tuviera tanto miedo a fracasar, habría solicitado hace años.' },
    { speaker: 'Oscar', text: 'Well, here’s to the road not taken, and, hopefully, to the one you’re about to take.', es: 'Bueno, brindemos por el camino no tomado y, ojalá, por el que estás a punto de tomar.' }
  ],
  listening: {
    script: [
      { speaker: 'Host', text: 'In September 1983, a Soviet officer called Stanislav Petrov was on duty when the early-warning system reported that American missiles had been launched. Historian, what would have happened if he had followed protocol?' },
      { speaker: 'Historian', text: 'We can only speculate. If he had reported the alert up the chain of command, leaders might well have treated it as a real attack, and the consequences could have been catastrophic.' },
      { speaker: 'Host', text: 'Why did he doubt the system?' },
      { speaker: 'Historian', text: 'Partly because it reported only a handful of missiles. If it had been a real first strike, he reasoned, the attack would have been far larger. He also knew that the system was new and not fully tested.' },
      { speaker: 'Host', text: 'And the alarm turned out to be false.' },
      { speaker: 'Historian', text: 'Yes, caused by sunlight reflecting off clouds, as investigators later established. Had he not hesitated, history might have been very different.' },
      { speaker: 'Host', text: 'Is it fair to call him a hero?' },
      { speaker: 'Historian', text: 'Many people do. Others point out that he was one link in a chain, and that other safeguards might also have prevented escalation. But for his judgement, though, we would be in a much more uncertain position.' }
    ],
    questions: [
      mc('b2u05-l1', 'Why did Petrov doubt the alert?', ['It showed only a few missiles and the system was new', 'The radar was broken', 'He was told it was a drill'], 0, 'It reported only a handful of missiles and the system wasn’t fully tested.'),
      mc('b2u05-l2', 'What does the historian say could have happened if he had reported it as real?', ['Leaders might have treated it as an attack, with catastrophic consequences', 'Nothing', 'The alarm would have stopped'], 0, 'Leaders might well have treated it as real.'),
      mc('b2u05-l3', 'What caused the false alarm?', ['Sunlight reflecting off clouds', 'A computer virus', 'A missile test'], 0, 'Investigators established it was sunlight reflecting off clouds.'),
      tf('b2u05-l4', 'The historian is certain that disaster would have followed.', false, 'He says “we can only speculate” and uses “might”.'),
      mc('b2u05-l5', 'What is the historian’s attitude to calling Petrov a hero?', ['Cautious: acknowledges the view but adds nuance', 'He strongly rejects it', 'He endorses it without qualification'], 0, 'He mentions that many do, but notes other safeguards.')
    ]
  },
  reading: {
    title: 'What if? The value and limits of counterfactuals',
    text: 'Historians are sometimes accused of indulging in idle speculation when they ask what would have happened if a single event had gone differently. If Archduke Franz Ferdinand’s driver hadn’t taken a wrong turn in Sarajevo in 1914, would the First World War have been avoided? Most scholars would answer that it is impossible to know. Yet counterfactual reasoning, properly used, serves a serious purpose: it forces us to identify which factors were truly decisive and which were merely incidental. Had the underlying tensions between the great powers not existed, a single assassination could hardly have produced such consequences; but for those tensions, it might have remained a local tragedy. Critics, however, warn that counterfactuals can easily become exercises in wishful thinking, as authors choose the “what ifs” that flatter their own convictions. A stricter approach, according to some methodologists, requires that the imagined change be minimal and plausible, and that its consequences be traced step by step rather than assumed. By these standards, much popular alternative history would not survive scrutiny. Nevertheless, the exercise is not worthless: if it makes us less certain that the past was inevitable, it may also make us more alert to the choices that shape the present.',
    questions: [
      rc('b2u05-r1', 'What is the purpose of counterfactual reasoning, according to the writer?', ['To identify which factors were truly decisive', 'To prove that history was inevitable', 'To entertain readers'], 0, 'It forces us to identify which factors were decisive and which incidental.'),
      rc('b2u05-r2', 'What does the writer imply about the First World War?', ['Underlying tensions made a single event capable of huge consequences', 'The driver’s turn alone caused it', 'It could not have happened in any case'], 0, 'Without the tensions, the assassination might have remained a local tragedy.'),
      rc('b2u05-r3', 'What is the critics’ concern?', ['Authors may choose “what ifs” that suit their convictions', 'Counterfactuals are too short', 'Nobody reads them'], 0, 'They warn that counterfactuals can become wishful thinking.'),
      rc('b2u05-r4', 'What do stricter methodologists require?', ['A minimal, plausible change traced step by step', 'A large dramatic change', 'No consequences at all'], 0, 'The change must be minimal and plausible, with consequences traced step by step.'),
      rc('b2u05-r5', 'What is the writer’s conclusion?', ['Counterfactuals have limits but can sharpen awareness of choices', 'They are worthless', 'They should replace history'], 0, 'The exercise is not worthless: it may make us more alert to choices.')
    ]
  },
  speaking: { prompt: 'Conversación reflexiva en parejas (4 a 5 minutos): cada uno cuenta una decisión importante de su vida y explora cómo habría sido distinto el resultado. El compañero hace preguntas hipotéticas y propone escenarios alternativos.', tasks: ['Describe a past decision and imagine its alternative with the third conditional.', 'Use a mixed conditional to connect that alternative past with your present.', 'Express a regret or wish with I wish… had… or If only…', 'Use at least one formal alternative (had I…, but for…, were … to…).'] },
  writing: { prompt: 'Write a reflective essay (220 to 260 words) on a moment in your life or in history that could have gone differently. Analyse the alternatives and their consequences using second, third and mixed conditionals, at least one formal alternative to if, and one expression of regret or wish.', rubric: ['Correct and varied use of second, third and mixed conditionals.', 'At least one formal alternative to if (had I…, were … to…, but for…).', 'Expresses regret or wish accurately (wish, if only).', 'Reflective, coherent argumentation with a clear conclusion.'], model: 'Had I accepted the scholarship in Berlin, my life would look very different today. I would probably be working in research, and I might never have started the business I run now. At the time, I hesitated; if I had been less afraid of failure, I would have gone. But for a conversation with my mother, I might never have understood how much that fear was costing me. I sometimes wish I had decided sooner, yet I also recognise that the delay shaped me. Were I to choose again, I would take the risk, but I would no longer regret the path I took. If only we could know beforehand which decisions will matter, we would be less anxious; since we cannot, we must learn to live with uncertainty.' },
  pronunciation: {
    items: [{ word: 'hypothetical', ipa: '/ˌhaɪpəˈθetɪkl/', stress: 'hy-po-THET-i-cal' }, { word: 'contingency', ipa: '/kənˈtɪndʒənsi/', stress: 'con-TIN-gen-cy' }, { word: 'repercussion', ipa: '/ˌriːpəˈkʌʃn/', stress: 're-per-CUS-sion' }, { word: 'inevitable', ipa: '/ɪnˈevɪtəbl/', stress: 'in-EV-i-ta-ble' }, { word: 'counterfactual', ipa: '/ˌkaʊntəˈfæktʃuəl/', stress: 'coun-ter-FAC-tu-al' }],
    tips: ['Would have, could have y might have suenan /wʊd əv/, /kʊd əv/, /maɪt əv/ en el habla rápida: have se reduce a /əv/.', 'En las contracciones I’d, we’d, you’d, el sonido /d/ puede ser would o had; lo decide el verbo siguiente (I’d go / I’d gone).', 'En una oración condicional, la entonación sube al final de la cláusula con if y baja en la cláusula principal.']
  },
  exercises: [
    mc('b2u05-e1', 'If I ___ the email earlier, I would have replied.', ['had seen', 'saw', 'have seen'], 0, 'Third conditional: if + past perfect.', 'Choose the correct form.'),
    fb('b2u05-e2', 'If we had left earlier, we ___ have missed the flight. (negative, short form)', 'wouldn’t', 'wouldn’t have + participle.', ['would not'], 'Write the missing word.'),
    fb('b2u05-e3', '___ I known, I would have acted differently.', 'Had', 'Inversion for formal third conditional: Had I known…', undefined, 'Write the missing word.'),
    wo('b2u05-e4', ['known', 'Had', 'I', 'I', 'would', 'acted', 'have', 'differently'], ['Had', 'I', 'known', 'I', 'would', 'have', 'acted', 'differently'], 'Inversion replaces if.'),
    tf('b2u05-e5', 'In a mixed conditional we can combine a past condition with a present result.', true, 'If I had accepted, I would be living abroad now.'),
    mt('b2u05-e6', 'Match each expression with its function.', [['if only', 'expresses regret or a strong wish'], ['but for', 'if it hadn’t been for'], ['suppose', 'invites the listener to imagine a situation'], ['were … to', 'formal hypothetical future']], 'Alternatives to if.'),
    tr('b2u05-e7', 'Rewrite as a third conditional.', 'I didn’t study, so I failed.', 'If I had studied, I wouldn’t have failed', 'if + past perfect, would have + participle.', ['If I had studied I wouldn’t have failed', 'If I’d studied, I wouldn’t have failed', 'If I’d studied I wouldn’t have failed', 'If I had studied, I would not have failed']),
    tr('b2u05-e8', 'Rewrite with an inversion.', 'If I had known, I would have told you.', 'Had I known, I would have told you', 'Had + subject + participle.', ['Had I known I would have told you']),
    rc('b2u05-e9', 'What can be inferred?', ['The warnings were ignored and the problem went undetected', 'The company followed the engineers’ advice', 'There were no warnings'], 0, 'The warnings were dismissed as alarmist.', 'If the company had listened to its engineers, the problem would probably have been detected earlier. As it was, the warnings were dismissed as alarmist.'),
    sa('b2u05-e10', 'Write 6 to 8 sentences about a decision that could have gone differently. Use one second, one third and one mixed conditional, and one alternative to if (had I…, but for…, if only).', 'Model: “If I had moved abroad, I would be working in a different field now. Had I known the risks, I would have waited. If only I had asked for advice.” Check: verb forms in each clause and a coherent reflection.')
  ],
  assessment: [
    mc('b2u05-t1', 'If she ___ harder, she would have passed the exam.', ['had studied', 'studied', 'would study'], 0, 'Third conditional: if + past perfect.'),
    mc('b2u05-t2', 'If I ___ you, I wouldn’t take that risk.', ['were', 'am', 'had been'], 0, 'Second conditional: were.'),
    fb('b2u05-t3', 'If they hadn’t warned us, we ___ been in trouble.', 'would have', 'would have + participle.', ['’d have', "'d have"], 'Write the missing words.'),
    fb('b2u05-t4', '___ for your help, we would have failed.', 'But', 'But for = if it hadn’t been for.', undefined, 'Write the missing word.'),
    tf('b2u05-t5', '“Wish + past perfect” expresses regret about the past.', true, 'I wish I had listened.'),
    tf('b2u05-t6', 'In third conditional sentences we use “would” in the if-clause.', false, 'The if-clause uses the past perfect.'),
    wo('b2u05-t7', ['hadn’t', 'If', 'it', 'been', 'for', 'you', 'we', 'would', 'have', 'failed'], ['If', 'it', 'hadn’t', 'been', 'for', 'you', 'we', 'would', 'have', 'failed'], 'if it hadn’t been for…'),
    mc('b2u05-t8', 'Choose the mixed conditional.', ['If I had taken the job, I would be living abroad now.', 'If I took the job, I would live abroad.', 'If I had taken the job, I would have lived abroad.'], 0, 'Past condition, present result.'),
    tr('b2u05-t9', 'Rewrite with “were … to”.', 'If the government resigned, an election would follow.', 'Were the government to resign, an election would follow', 'Were + subject + to + verb.', ['Were the government to resign an election would follow']),
    mc('b2u05-t10', 'Which sentence expresses regret?', ['I wish I had listened to her.', 'I hope I listen to her.', 'I wish to listen to her.'], 0, 'wish + past perfect.')
  ],
  review: ['Second conditional: if + past, would / could / might + base (hypothetical present or future).', 'Third conditional: if + past perfect, would / could / might have + participle (imaginary past).', 'Mixed: past condition → present result; present condition → past result.', 'Alternatives: had I known…, were he to…, but for…, suppose…, otherwise.', 'Regret and wishes: wish + past / past perfect; if only.']
};
export default unit;
