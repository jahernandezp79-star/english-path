import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'b1-u01', level: 'B1', unitNumber: 1, title: 'Opinions and Arguments', subtitle: 'Give your opinion and support it with reasons',
  communicativeGoal: 'Expresar opiniones, justificarlas con razones y responder a otras posturas usando conectores de causa, resultado, contraste y adición.',
  objectives: ['Usar conectores de causa y resultado (because, as, since, so, therefore).', 'Usar conectores de contraste (although, however, despite, nevertheless).', 'Estructurar una opinión: postura, razón, ejemplo y conclusión.', 'Mostrar acuerdo y desacuerdo con cortesía y mantener una discusión.'],
  grammar: {
    title: 'Linking words: although, however, because, therefore',
    explanation: [
      'Los conectores unen ideas y muestran la relación entre ellas. Los de causa (because, as, since) explican la razón: I stayed at home because it was raining. Los de resultado (so, therefore, consequently) muestran la consecuencia: It was raining; therefore, we cancelled the trip.',
      'Los de contraste se comportan de forma distinta. Although / even though / while van dentro de la misma oración y se siguen de sujeto + verbo: Although it was expensive, I bought it. Despite / in spite of se siguen de un sustantivo o de un verbo en -ing: Despite the price, I bought it. Despite being expensive, I bought it. However / nevertheless / on the other hand unen dos oraciones y llevan coma detrás: It was expensive. However, I bought it.',
      'Error frecuente: no se dice “Despite it was expensive” (despite no admite sujeto + verbo directo) ni “Although… but” en la misma oración. Tampoco se une con coma: “It was expensive, however I bought it” es incorrecto; hace falta punto o punto y coma antes de however.',
      'Para añadir ideas se usan in addition, moreover, besides y what is more. Para presentar una opinión en inglés natural: In my opinion, As far as I’m concerned, I’m convinced that, It seems to me that. Para matizar o discrepar con cortesía: I see your point, but…, I’m not convinced that…, That’s true up to a point.'
    ],
    forms: [
      { label: 'Reason and result', lines: ['I stayed at home because it was raining.', 'As it was raining, we cancelled the trip.', 'It was raining, so we stayed in.', 'It was raining; therefore, we cancelled the trip.'] },
      { label: 'Contrast', lines: ['Although it was expensive, I bought it.', 'Despite the price, I bought it.', 'It was expensive. However, I bought it.', 'It was expensive; nevertheless, it was worth it.'] },
      { label: 'Opinions and agreement', lines: ['In my opinion, remote work is more productive.', 'I see your point, but I disagree.', 'I’m not convinced that it will work.', 'Moreover, it saves a lot of time.'] },
      { label: 'Useful expressions and collocations', lines: ['give / express / share an opinion', 'make a point; raise an issue', 'weigh up the pros and cons', 'a strong / convincing argument', 'reach a conclusion', 'take sides; agree to disagree', 'back up a claim with evidence', 'play devil’s advocate'] }
    ]
  },
  vocabulary: [
    v('argument', 'argumento; discusión', '/ˈɑːɡjumənt/', 'AR-gu-ment'), v('opinion', 'opinión', '/əˈpɪnjən/', 'o-PIN-ion'), v('point of view', 'punto de vista', '/pɔɪnt əv vjuː/', 'point of VIEW'),
    v('evidence', 'evidencia, pruebas', '/ˈevɪdəns/', 'EV-i-dence'), v('claim', 'afirmación; afirmar', '/kleɪm/', 'CLAIM'), v('convince', 'convencer', '/kənˈvɪns/', 'con-VINCE'),
    v('persuade', 'persuadir', '/pəˈsweɪd/', 'per-SUADE'), v('disagree', 'no estar de acuerdo', '/ˌdɪsəˈɡriː/', 'dis-a-GREE'), v('issue', 'tema, asunto', '/ˈɪʃuː/', 'IS-sue'),
    v('debate', 'debate; debatir', '/dɪˈbeɪt/', 'de-BATE'), v('advantage', 'ventaja', '/ədˈvɑːntɪdʒ/', 'ad-VAN-tage'), v('drawback', 'inconveniente', '/ˈdrɔːbæk/', 'DRAW-back'),
    v('conclusion', 'conclusión', '/kənˈkluːʒn/', 'con-CLU-sion'), v('reasonable', 'razonable', '/ˈriːznəbl/', 'REA-son-a-ble'), v('biased', 'sesgado, parcial', '/ˈbaɪəst/', 'BI-ased'),
    v('controversial', 'polémico', '/ˌkɒntrəˈvɜːʃl/', 'con-tro-VER-sial'), v('assume', 'suponer', '/əˈsjuːm/', 'as-SUME'), v('valid', 'válido', '/ˈvælɪd/', 'VAL-id'),
    v('outweigh', 'pesar más que', '/ˌaʊtˈweɪ/', 'out-WEIGH'), v('justify', 'justificar', '/ˈdʒʌstɪfaɪ/', 'JUS-ti-fy')
  ],
  examples: [
    { en: 'Although several studies support the idea, I’m not convinced that it would work in every sector.', es: 'Aunque varios estudios apoyan la idea, no estoy convencido de que funcione en todos los sectores.' },
    { en: 'Despite the high cost, most residents voted in favour of the new tram line.', es: 'A pesar del alto costo, la mayoría de los residentes votó a favor de la nueva línea de tranvía.' },
    { en: 'The company has cut its budget; therefore, we won’t be hiring anyone this year.', es: 'La empresa ha recortado su presupuesto; por lo tanto, este año no contrataremos a nadie.' },
    { en: 'Remote work saves commuting time. Moreover, it allows companies to hire people from anywhere.', es: 'El teletrabajo ahorra tiempo de desplazamiento. Además, permite a las empresas contratar personas de cualquier lugar.' },
    { en: 'As far as I’m concerned, the advantages clearly outweigh the drawbacks.', es: 'En lo que a mí respecta, las ventajas superan claramente los inconvenientes.' },
    { en: 'I see your point, but you’re assuming that everybody has a quiet place to work at home.', es: 'Entiendo tu punto, pero estás suponiendo que todos tienen un lugar tranquilo para trabajar en casa.' },
    { en: 'The article is biased: it presents only the evidence that supports the author’s claim.', es: 'El artículo está sesgado: presenta solo las pruebas que apoyan la afirmación del autor.' },
    { en: 'She wasn’t trying to persuade me; she simply wanted me to consider another point of view.', es: 'Ella no intentaba persuadirme; simplemente quería que considerara otro punto de vista.' }
  ],
  dialogue: [
    { speaker: 'Elena', text: 'Did you see the proposal for a four-day working week? I think it’s a brilliant idea.', es: '¿Viste la propuesta de una semana laboral de cuatro días? Me parece una idea brillante.' },
    { speaker: 'Marco', text: 'Honestly, I’m not convinced. Although it sounds attractive, I doubt it would work in every sector.', es: 'Sinceramente, no estoy convencido. Aunque suena atractiva, dudo que funcione en todos los sectores.' },
    { speaker: 'Elena', text: 'Fair point. However, several studies show that productivity actually goes up, because people are more rested.', es: 'Buen punto. Sin embargo, varios estudios muestran que la productividad sube, porque la gente está más descansada.' },
    { speaker: 'Marco', text: 'Possibly, but those studies were done in small tech companies. A hospital can’t simply close on Fridays.', es: 'Es posible, pero esos estudios se hicieron en pequeñas empresas tecnológicas. Un hospital no puede cerrar los viernes.' },
    { speaker: 'Elena', text: 'True, but nobody is suggesting that. Each sector could adapt the model; therefore, it wouldn’t look the same everywhere.', es: 'Cierto, pero nadie propone eso. Cada sector podría adaptar el modelo; por lo tanto, no sería igual en todas partes.' },
    { speaker: 'Marco', text: 'Hmm, that’s more reasonable. My other concern is cost: employers would have to hire more people.', es: 'Mmm, eso es más razonable. Mi otra preocupación es el costo: los empleadores tendrían que contratar más gente.' },
    { speaker: 'Elena', text: 'In the short term, yes. Nevertheless, they’d save money on absences and staff turnover.', es: 'A corto plazo, sí. Sin embargo, ahorrarían en ausencias y rotación de personal.' },
    { speaker: 'Marco', text: 'I see your point. I’d still want to see more evidence before supporting it.', es: 'Entiendo tu punto. Aun así, querría ver más pruebas antes de apoyarlo.' },
    { speaker: 'Elena', text: 'Fair enough. Shall we agree to disagree for now and look at the data together?', es: 'Justo. ¿Dejamos el desacuerdo por ahora y miramos los datos juntos?' },
    { speaker: 'Marco', text: 'Deal. Send me the studies and I’ll read them over the weekend.', es: 'Trato hecho. Mándame los estudios y los leeré durante el fin de semana.' },
    { speaker: 'Elena', text: 'Will do. Thanks for listening to my argument.', es: 'Lo haré. Gracias por escuchar mi argumento.' },
    { speaker: 'Marco', text: 'Anytime. You made a stronger case than I expected.', es: 'Cuando quieras. Defendiste tu caso mejor de lo que esperaba.' }
  ],
  listening: {
    script: [
      { speaker: 'Presenter', text: 'Today’s question: should schools make uniforms compulsory? Dr Lane, you’re in favour.' },
      { speaker: 'Dr Lane', text: 'Yes. Uniforms reduce social pressure, since nobody is judged by their clothes. Moreover, they save families money in the long run.' },
      { speaker: 'Presenter', text: 'Mr Ortiz, you disagree?' },
      { speaker: 'Mr Ortiz', text: 'I do. Although the idea of equality is appealing, uniforms don’t solve inequality; they just hide it. Besides, children should learn to express themselves.' },
      { speaker: 'Dr Lane', text: 'Expression matters, of course. However, school isn’t the only place to do that.' },
      { speaker: 'Mr Ortiz', text: 'Despite that, I think the decision should belong to each school community, not to the government.' },
      { speaker: 'Presenter', text: 'A fair compromise, perhaps. Thank you both.' }
    ],
    questions: [
      mc('b1u01-l1', 'What is Dr Lane’s main argument?', ['Uniforms reduce social pressure', 'Uniforms are fashionable', 'Uniforms improve grades'], 0, 'He says uniforms reduce social pressure because nobody is judged by clothes.'),
      mc('b1u01-l2', 'How does Mr Ortiz respond to the equality argument?', ['He says uniforms hide inequality rather than solve it', 'He agrees completely', 'He says uniforms are too expensive'], 0, 'He argues that uniforms don’t solve inequality; they just hide it.'),
      mc('b1u01-l3', 'Who does Mr Ortiz think should decide the matter?', ['Each school community', 'The government', 'Parents only'], 0, 'He says the decision should belong to each school community.'),
      tf('b1u01-l4', 'Dr Lane thinks self-expression is unimportant.', false, 'He says: “Expression matters, of course.” He only argues that school isn’t the only place for it.'),
      mc('b1u01-l5', 'What is the presenter’s attitude?', ['Neutral, suggesting a compromise', 'Strongly against uniforms', 'Strongly in favour'], 0, 'She calls the idea “a fair compromise”, which shows she doesn’t take sides.')
    ]
  },
  reading: {
    title: 'Phones in the classroom: ban or manage?',
    text: 'Few debates divide teachers and parents as sharply as the question of smartphones in classrooms. Supporters of a ban argue that phones are a constant distraction: even when students are not using them, their mere presence reduces concentration. Moreover, several schools that introduced bans reported fewer conflicts and more conversation during breaks. Critics, however, point out that phones are also useful learning tools, and that students who are never allowed to use them at school will not learn to manage them responsibly. Some parents also worry about being unable to reach their children in an emergency. Although both positions have merit, the evidence so far is mixed: bans seem to work best when they are accompanied by clear rules and when teachers explain the reasons behind them. Therefore, it may be wiser to focus on how phones are used rather than on whether they are allowed.',
    questions: [
      rc('b1u01-r1', 'What is the main argument of those who support a ban?', ['Phones are a constant distraction', 'Phones are expensive', 'Phones are unsafe'], 0, 'They say the mere presence of phones reduces concentration.'),
      rc('b1u01-r2', 'What is one argument of the critics?', ['Students must learn to use phones responsibly', 'Phones make breaks longer', 'Parents don’t care'], 0, 'Critics say students never allowed to use phones won’t learn to manage them responsibly.'),
      rc('b1u01-r3', 'What does the writer imply about bans?', ['They work better with clear rules and explanations', 'They never work', 'They always work'], 0, 'Bans work best when accompanied by clear rules and explanations.'),
      rc('b1u01-r4', 'What does the writer finally suggest?', ['Focus on how phones are used', 'Ban phones completely', 'Allow phones everywhere'], 0, 'The conclusion: focus on how phones are used rather than whether they are allowed.'),
      rc('b1u01-r5', 'What is the writer’s purpose?', ['To present both sides and suggest a balanced approach', 'To attack teachers', 'To advertise a phone'], 0, 'The text weighs both positions and ends with a balanced suggestion.')
    ]
  },
  speaking: { prompt: 'Debate con un compañero un tema actual (por ejemplo, la semana laboral de cuatro días o los uniformes escolares). Cada uno defiende una postura durante 2 minutos y luego responde al otro.', tasks: ['State your opinion with “In my opinion…” and give two reasons with because and therefore.', 'Acknowledge the other side with “I see your point, but…” and use although or however.', 'Back up one claim with an example or evidence.', 'Finish by summarising both positions and saying where you agree and where you agree to disagree.'] },
  writing: { prompt: 'Write an opinion essay of about 150 words: “Should remote work become the norm?” Present your opinion, two reasons, a counter-argument and a conclusion. Use at least five different linking words.', rubric: ['Clear opinion in the introduction and a conclusion that reflects it.', 'At least five correct linkers (because, although, however, therefore, despite…).', 'Includes a counter-argument and a response to it.', 'Punctuation of linkers is correct (However, … / Although …, …).'], model: 'In my opinion, remote work should become the norm for office jobs, mainly because it saves time and money. Employees avoid long commutes; moreover, companies can reduce office costs. Admittedly, some people feel isolated when they work alone. However, this problem can be solved with regular meetings and flexible schedules. Despite these difficulties, the advantages clearly outweigh the drawbacks. Therefore, I believe companies should offer remote work whenever the job allows it.' },
  pronunciation: {
    items: [{ word: 'argument', ipa: '/ˈɑːɡjumənt/', stress: 'AR-gu-ment' }, { word: 'controversial', ipa: '/ˌkɒntrəˈvɜːʃl/', stress: 'con-tro-VER-sial' }, { word: 'evidence', ipa: '/ˈevɪdəns/', stress: 'EV-i-dence' }, { word: 'advantage', ipa: '/ədˈvɑːntɪdʒ/', stress: 'ad-VAN-tage' }, { word: 'persuade', ipa: '/pəˈsweɪd/', stress: 'per-SUADE' }],
    tips: ['Los conectores como however o therefore suelen llevar una pequeña pausa y una entonación que baja al final de la expresión: However, …', 'En advantage la fuerza va en VAN; en disadvantage, en VAN también (dis-ad-VAN-tage).', 'Al discrepar con cortesía, la entonación y las expresiones suavizan el mensaje: I see your point, but…']
  },
  exercises: [
    mc('b1u01-e1', '___ the traffic was terrible, we arrived on time.', ['Although', 'Because', 'Therefore'], 0, 'Contrast inside one sentence → although.', 'Choose the best linker.'),
    fb('b1u01-e2', 'He didn’t study at all; ___, he failed the exam.', 'therefore', 'Result → therefore / consequently.', ['consequently', 'as a result'], 'Write a linker of result.'),
    fb('b1u01-e3', '___ the high price, the product sold very well.', 'Despite', 'Despite + noun phrase.', ['In spite of'], 'Write a linker followed by a noun.'),
    wo('b1u01-e4', ['I', 'see', 'your', 'point', 'but', 'I', 'disagree'], ['I', 'see', 'your', 'point', 'but', 'I', 'disagree'], 'A polite way to disagree.'),
    tf('b1u01-e5', '“However” can join two clauses in one sentence with only a comma.', false, 'However needs a full stop or a semicolon before it.'),
    mt('b1u01-e6', 'Match each linker with its function.', [['therefore', 'result'], ['although', 'contrast inside one sentence'], ['moreover', 'adds a further point'], ['nevertheless', 'contrast between sentences']], 'Function decides punctuation and position.'),
    tr('b1u01-e7', 'Rewrite with although.', 'The film was long. I enjoyed it.', 'Although the film was long, I enjoyed it', 'although + clause, main clause.', ['Although the film was long I enjoyed it', 'I enjoyed the film although it was long', 'I enjoyed the film, although it was long']),
    tr('b1u01-e8', 'Rewrite with despite.', 'Although it was raining, we went out.', 'Despite the rain, we went out', 'despite + noun.', ['Despite the rain we went out', 'In spite of the rain, we went out', 'In spite of the rain we went out', 'Despite the fact that it was raining, we went out', 'Despite the fact that it was raining we went out']),
    rc('b1u01-e9', 'What can be inferred about the government’s position?', ['It believes the benefits outweigh the costs', 'It ignores the critics', 'It wants to cancel the tax'], 0, 'It argues the extra income will fund something many workers rely on.', 'Critics say the new tax will hurt small businesses. However, the government argues that the extra income will fund public transport, which many workers rely on.'),
    sa('b1u01-e10', 'Write a short paragraph (4 to 5 sentences) giving your opinion on a current issue, with at least three different linkers.', 'Model: “In my opinion, public transport should be free in big cities. Although it would be expensive, it would reduce traffic; therefore, the air would be cleaner. However, the government should also improve the service.” Check: opinion, reasons, contrast and correct punctuation.')
  ],
  assessment: [
    mc('b1u01-t1', 'She is very experienced; ___, she got the job.', ['therefore', 'although', 'despite'], 0, 'Result → therefore.'),
    mc('b1u01-t2', '___ he was tired, he finished the report.', ['Although', 'Because', 'So'], 0, 'Contrast → although.'),
    fb('b1u01-t3', '___ the weather, we enjoyed the trip.', 'Despite', 'Despite + noun phrase.', ['In spite of'], 'Write the missing linker.'),
    fb('b1u01-t4', 'I agree up to a point; ___, I think there is another side to the issue.', 'however', 'Contrast between sentences.', ['nevertheless', 'on the other hand'], 'Write a linker of contrast.'),
    tf('b1u01-t5', '“Despite” can be followed by a noun or an -ing form.', true, 'Despite the rain / Despite being tired.'),
    tf('b1u01-t6', '“Because of” can introduce a full clause with subject and verb.', false, 'Because of + noun; because + clause.'),
    wo('b1u01-t7', ['agree', 'Let’s', 'to', 'disagree'], ['Let’s', 'agree', 'to', 'disagree'], 'A common expression to end a debate.'),
    mc('b1u01-t8', 'Which expression best softens a disagreement?', ['I see your point, but I’m not convinced.', 'You are wrong.', 'That is nonsense.'], 0, 'Acknowledge first, then disagree.'),
    tr('b1u01-t9', 'Combine with therefore.', 'He missed the bus. He was late.', 'He missed the bus; therefore, he was late', 'Use ; before therefore and a comma after.', ['He missed the bus. Therefore, he was late', 'He missed the bus. Therefore he was late', 'He missed the bus; therefore he was late']),
    mc('b1u01-t10', 'Choose the sentence with correct punctuation.', ['It was expensive. However, it was worth it.', 'It was expensive, however it was worth it.', 'It was expensive however, it was worth it.'], 0, 'However starts a new sentence and is followed by a comma.')
  ],
  review: ['Reason: because, as, since. Result: so, therefore, consequently.', 'Contrast in one sentence: although, even though, while; with a noun: despite, in spite of.', 'Contrast between sentences: However, Nevertheless, On the other hand (with a comma).', 'Add ideas: moreover, in addition, besides.', 'Disagree politely: I see your point, but…; I’m not convinced that…']
};
export default unit;
