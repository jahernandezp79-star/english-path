import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'b2-u06', level: 'B2', unitNumber: 6, title: 'Science and Innovation', subtitle: 'Explain discoveries and evaluate evidence concisely',
  communicativeGoal: 'Explicar descubrimientos e innovaciones con precisión y concisión, valorando la solidez de las pruebas y usando estructuras compactas propias del discurso científico.',
  objectives: ['Usar oraciones de relativo avanzadas (preposición + which/whom, of which/whom, which referido a toda la oración, what).', 'Reducir oraciones de relativo y usar cláusulas de participio (-ing, perfecto, pasado).', 'Evitar errores frecuentes como el participio “colgante”.', 'Evaluar la solidez de una investigación y explicarla a un público no especializado.'],
  grammar: {
    title: 'Relative clauses and introduction to participle clauses',
    explanation: [
      'Relativas avanzadas: con preposición, la preposición puede ir antes del pronombre en registro formal (the method by which the data was gathered; the study on which the policy was based) o al final en registro natural (the method we gathered the data by). Con cantidades: some of which, several of whom, none of whom (The researchers, several of whom were students, found an anomaly). Which puede referirse a toda la oración anterior: The trial was successful, which surprised everyone.',
      'What funciona como pronombre relativo con el significado de “lo que / aquello que”: What the study shows is that the effect is small. Whatever, whoever y whichever añaden el sentido de “cualquiera que”: Whatever the outcome, it will shed light on the problem. Los adverbios relativos where, when y why también aparecen tras un sustantivo: the reason why; the moment when.',
      'Relativas reducidas: en las especificativas se puede omitir el pronombre y el verbo to be o usar un participio: The scientists (who are) working on the project received funding; The data (that was) collected last year was inconclusive; Anyone wishing to apply must submit a proposal. Dan concisión y son típicas del estilo científico y periodístico.',
      'Cláusulas de participio: el participio de presente expresa acción simultánea o causa (Working in the lab, she noticed an anomaly); el perfecto, una acción anterior (Having analysed the data, the team published the findings); el de pasado, un sentido pasivo (Published in 2019, the study changed the field). También con conjunciones: while working, after analysing, before publishing. Negativo: Not knowing the cause, they ran further tests.',
      'Regla de oro: el sujeto implícito de la cláusula de participio debe ser el mismo que el de la cláusula principal. Error frecuente: “Walking down the street, the building looked old” (el edificio no camina). Correcto: Walking down the street, I noticed that the building looked old. En registro informal se prefieren las oraciones completas; en escritura académica, las cláusulas de participio aportan densidad y fluidez.'
    ],
    forms: [
      { label: 'Advanced relative clauses', lines: ['The method by which the data was gathered was flawed.', 'The researchers, several of whom were students, found an anomaly.', 'The trial was successful, which surprised everyone.', 'What the study shows is that the effect is small.'] },
      { label: 'Reduced relative clauses', lines: ['The scientists working on the project received funding.', 'The data collected last year was inconclusive.', 'Anyone wishing to apply must submit a proposal.', 'The results published last month are promising.'] },
      { label: 'Participle clauses', lines: ['Having analysed the data, the team published the findings.', 'Published in 2019, the study changed the field.', 'Not knowing the cause, they ran further tests.', 'While working in the lab, she noticed an anomaly.'] },
      { label: 'Useful expressions and collocations', lines: ['shed light on; break new ground', 'push the boundaries; draw a conclusion', 'back up a theory; rule out an explanation', 'run an experiment; a peer-reviewed journal', 'a leap forward; reinvent the wheel', 'trial and error; the jury is still out', 'a proof of concept; a major breakthrough', 'secure funding; file a patent'] }
    ]
  },
  vocabulary: [
    v('hypothesis', 'hipótesis', '/haɪˈpɒθəsɪs/', 'hy-POTH-e-sis'), v('empirical', 'empírico', '/ɪmˈpɪrɪkl/', 'em-PIR-i-cal'), v('replicate', 'replicar', '/ˈreplɪkeɪt/', 'REP-li-cate'),
    v('prototype', 'prototipo', '/ˈprəʊtətaɪp/', 'PRO-to-type'), v('pioneering', 'pionero', '/ˌpaɪəˈnɪərɪŋ/', 'pi-o-NEER-ing'), v('groundbreaking', 'innovador, revolucionario', '/ˈɡraʊndbreɪkɪŋ/', 'GROUND-break-ing'),
    v('cutting-edge', 'de vanguardia', '/ˌkʌtɪŋ ˈedʒ/', 'cut-ting EDGE'), v('viable', 'viable', '/ˈvaɪəbl/', 'VI-a-ble'), v('scalable', 'escalable', '/ˈskeɪləbl/', 'SCALE-a-ble'),
    v('emerge', 'surgir', '/ɪˈmɜːdʒ/', 'e-MERGE'), v('disrupt', 'alterar, revolucionar', '/dɪsˈrʌpt/', 'dis-RUPT'), v('trial', 'ensayo, prueba', '/ˈtraɪəl/', 'TRI-al'),
    v('variable', 'variable', '/ˈveəriəbl/', 'VAR-i-a-ble'), v('findings', 'hallazgos', '/ˈfaɪndɪŋz/', 'FIND-ings'), v('conclusive', 'concluyente', '/kənˈkluːsɪv/', 'con-CLU-sive'),
    v('anomaly', 'anomalía', '/əˈnɒməli/', 'a-NOM-a-ly'), v('mechanism', 'mecanismo', '/ˈmekənɪzəm/', 'MECH-a-nism'), v('catalyst', 'catalizador', '/ˈkætəlɪst/', 'CAT-a-lyst'),
    v('funding', 'financiación', '/ˈfʌndɪŋ/', 'FUND-ing'), v('patent', 'patente', '/ˈpætnt/', 'PAT-ent'), v('interdisciplinary', 'interdisciplinario', '/ˌɪntəˈdɪsəplɪnəri/', 'in-ter-DIS-ci-pli-nar-y'),
    v('benchmark', 'referencia, punto de comparación', '/ˈbentʃmɑːk/', 'BENCH-mark')
  ],
  examples: [
    { en: 'The method by which the samples were collected raises serious questions about the validity of the findings.', es: 'El método con el que se recogieron las muestras plantea serias dudas sobre la validez de los hallazgos.' },
    { en: 'The team, several of whom had worked together for a decade, developed a prototype that could be scaled up.', es: 'El equipo, varios de cuyos miembros habían trabajado juntos durante una década, desarrolló un prototipo que podía ampliarse.' },
    { en: 'Having failed to replicate the original result, the researchers revised their hypothesis.', es: 'Al no lograr replicar el resultado original, los investigadores revisaron su hipótesis.' },
    { en: 'Funded by a private foundation, the project was able to run for five years without commercial pressure.', es: 'Financiado por una fundación privada, el proyecto pudo funcionar cinco años sin presión comercial.' },
    { en: 'Any hypothesis put forward must be testable; otherwise it cannot be called scientific.', es: 'Toda hipótesis que se plantee debe poder comprobarse; de lo contrario, no puede llamarse científica.' },
    { en: 'The trial, which involved only forty participants, was too small to be conclusive, a limitation the authors openly acknowledged.', es: 'El ensayo, que incluyó solo a cuarenta participantes, era demasiado pequeño para ser concluyente, una limitación que los autores reconocieron abiertamente.' },
    { en: 'What distinguishes a pioneering study is not its result but the question it dares to ask.', es: 'Lo que distingue un estudio pionero no es su resultado, sino la pregunta que se atreve a plantear.' },
    { en: 'Not knowing the mechanism behind the effect, the engineers proceeded by trial and error.', es: 'Sin conocer el mecanismo detrás del efecto, los ingenieros procedieron por ensayo y error.' }
  ],
  dialogue: [
    { speaker: 'Leila', text: 'Have you seen the paper published last month on the new battery prototype? The one from the Lisbon group?', es: '¿Viste el artículo publicado el mes pasado sobre el nuevo prototipo de batería? El del grupo de Lisboa.' },
    { speaker: 'Hugo', text: 'Yes. Having read it twice, I’m still not sure I believe the headline figure.', es: 'Sí. Después de leerlo dos veces, aún no estoy seguro de creerme la cifra principal.' },
    { speaker: 'Leila', text: 'Why? The method by which they measured capacity seems standard.', es: '¿Por qué? El método con el que midieron la capacidad parece estándar.' },
    { speaker: 'Hugo', text: 'It is, but the sample, which consisted of only twelve cells, was far too small. Several of the results, none of which were replicated, look like outliers.', es: 'Lo es, pero la muestra, que constaba de solo doce celdas, era demasiado pequeña. Varios resultados, ninguno de los cuales se replicó, parecen valores atípicos.' },
    { speaker: 'Leila', text: 'Fair point. Still, the researchers behind the study have a good track record. Working with such limited funding, they did remarkably well.', es: 'Buen punto. Aun así, los investigadores tienen buen historial. Trabajando con tan poca financiación, lo hicieron notablemente bien.' },
    { speaker: 'Hugo', text: 'Agreed, and what impressed me most was how transparently the limitations were described.', es: 'De acuerdo, y lo que más me impresionó fue lo transparente que fue la descripción de las limitaciones.' },
    { speaker: 'Leila', text: 'Not knowing the cause of the anomaly in cell seven, they admitted it rather than hiding it.', es: 'Sin conocer la causa de la anomalía en la celda siete, la admitieron en lugar de ocultarla.' },
    { speaker: 'Hugo', text: 'Which is why I’d call the findings promising, not conclusive.', es: 'Por eso yo llamaría a los hallazgos prometedores, no concluyentes.' },
    { speaker: 'Leila', text: 'What would convince you?', es: '¿Qué te convencería?' },
    { speaker: 'Hugo', text: 'A larger trial, conducted independently, using the same protocol. Anyone claiming a breakthrough before that is getting ahead of the evidence.', es: 'Un ensayo más grande, realizado de forma independiente y con el mismo protocolo. Quien proclame un avance antes de eso se adelanta a las pruebas.' },
    { speaker: 'Leila', text: 'Well, I’ve contacted the lead author. Having been invited to review the follow-up, I’ll let you know what they say.', es: 'Bueno, he contactado a la autora principal. Como me invitaron a revisar el seguimiento, te cuento qué dicen.' },
    { speaker: 'Hugo', text: 'Please do. Whatever the outcome, it will shed light on whether the design is scalable.', es: 'Por favor. Sea cual sea el resultado, arrojará luz sobre si el diseño es escalable.' }
  ],
  listening: {
    script: [
      { speaker: 'Host', text: 'Dr Rao, your team has developed a low-cost water filter which is already being tested in three villages. How did it begin?' },
      { speaker: 'Dr Rao', text: 'With a frustration, really. Many of the filters available at the time, most of which cost far more than a family could afford, broke down within months. Having spent two years in the field, I realised that the real problem wasn’t technology but maintenance.' },
      { speaker: 'Host', text: 'So what did you change?' },
      { speaker: 'Dr Rao', text: 'We designed a filter with no moving parts, made from locally sourced materials. Anyone knowing basic plumbing can repair it.' },
      { speaker: 'Host', text: 'Is it scalable?' },
      { speaker: 'Dr Rao', text: 'That remains to be seen. The results from the first trial, which involved about two hundred households, were encouraging, but the sample isn’t large enough to be conclusive. We’re waiting for the second phase, funded by a foundation whose mandate is rural health.' },
      { speaker: 'Host', text: 'And if it fails?' },
      { speaker: 'Dr Rao', text: 'Then we’ll have learned something. Science rarely progresses in a straight line, and negative results, honestly reported, are as valuable as positive ones.' }
    ],
    questions: [
      mc('b2u06-l1', 'What problem did Dr Rao identify with existing filters?', ['They were expensive and hard to maintain', 'They were too small', 'They were too slow'], 0, 'Most cost too much and broke down within months; the real problem was maintenance.'),
      mc('b2u06-l2', 'What characterises the new filter’s design?', ['No moving parts and locally sourced materials', 'A digital screen', 'Imported steel parts'], 0, 'It has no moving parts and uses local materials.'),
      mc('b2u06-l3', 'Why isn’t the first trial conclusive?', ['The sample is not large enough', 'It failed', 'It was cancelled'], 0, 'She says the sample isn’t large enough to be conclusive.'),
      tf('b2u06-l4', 'Dr Rao believes that negative results are worthless.', false, 'She says they are as valuable as positive ones.'),
      mc('b2u06-l5', 'What does Dr Rao’s attitude suggest?', ['Cautiously optimistic and scientifically rigorous', 'Overconfident', 'Pessimistic'], 0, 'She is encouraged by results but careful not to overstate them.')
    ]
  },
  reading: {
    title: 'Why replication matters',
    text: 'In 2015, a large team of researchers attempted to reproduce the results of one hundred published psychology studies. Fewer than half of the findings could be replicated, a result that sent a shock through the scientific community. Commentators, many of whom had long suspected a problem, spoke of a “replication crisis”. The causes, according to those studying the phenomenon, are varied: small samples, selective reporting, and pressure to publish striking results, which tend to attract funding and attention. Journals, for their part, have traditionally preferred novelty to confirmation, meaning that a study repeating earlier work was unlikely to be published. Several reforms have since been introduced. Researchers are increasingly encouraged to register their hypotheses in advance, thereby limiting the temptation to adjust the analysis after seeing the data. Some journals now accept studies based on their methods rather than their results. Not everyone is convinced, however: some scholars argue that failure to replicate does not always mean the original finding was wrong, since small differences in context can change outcomes. Having acknowledged the difficulty, most agree on one point: science, which depends on self-correction, is strengthened rather than weakened by exposing its own weaknesses.',
    questions: [
      rc('b2u06-r1', 'What did the 2015 project find?', ['Fewer than half of the studies could be replicated', 'All studies were replicated', 'Half were retracted'], 0, 'Fewer than half of the findings could be replicated.'),
      rc('b2u06-r2', 'Which factor contributes to the problem?', ['Pressure to publish striking results and selective reporting', 'Lack of computers', 'Too many replications'], 0, 'Small samples, selective reporting and pressure to publish striking results.'),
      rc('b2u06-r3', 'Which reform is mentioned?', ['Registering hypotheses in advance', 'Banning small samples', 'Closing journals'], 0, 'Researchers are encouraged to register their hypotheses in advance.'),
      rc('b2u06-r4', 'What do some scholars argue?', ['Failure to replicate doesn’t always mean the original was wrong', 'All studies are wrong', 'Context never matters'], 0, 'Small differences in context can change outcomes.'),
      rc('b2u06-r5', 'What is the writer’s final view?', ['Self-correction makes science stronger', 'Science is unreliable', 'Replication is unnecessary'], 0, 'Science is strengthened by exposing its own weaknesses.')
    ]
  },
  speaking: { prompt: 'Presentación breve (3 a 4 minutos) para un público no especialista sobre un descubrimiento o innovación que te interese. Tu compañero hace preguntas críticas sobre las pruebas, los límites y las aplicaciones.', tasks: ['Explain the idea concisely using at least two reduced relative clauses or participle clauses.', 'Describe how the evidence was obtained using “the method by which…” or “several of which…”.', 'Evaluate the strength of the evidence and admit a limitation (“Not knowing…, …”).', 'Answer questions and explain a technical term in simple language.'] },
  writing: { prompt: 'Write a concise summary (220 to 260 words) of a scientific study or innovation for an educated non-specialist audience. Explain the idea, how it was tested, what was found, its limits, and your assessment of the evidence. Use at least four participle clauses or reduced relatives and two advanced relative clauses.', rubric: ['Accurate use of participle clauses and reduced relative clauses (no dangling participles).', 'Advanced relative clauses (by which, of whom, which referring to a whole clause).', 'Clear explanation of method, results and limitations.', 'Neutral, precise register with appropriate hedging.'], model: 'Published last year, the study examined whether a low-cost filter could improve drinking water in rural areas. The team, several of whom had worked in the field for years, designed a device with no moving parts. The method by which it was tested involved two hundred households, which made it larger than most earlier trials. Having analysed the data, the researchers found that contamination fell significantly. Not knowing the long-term effects, however, they cautioned that the results were encouraging rather than conclusive. Funded by a foundation, the second phase will involve a larger sample. What matters most, in my view, is that the authors were transparent about the limitations, which strengthens the credibility of the findings.' },
  pronunciation: {
    items: [{ word: 'hypothesis', ipa: '/haɪˈpɒθəsɪs/', stress: 'hy-POTH-e-sis' }, { word: 'interdisciplinary', ipa: '/ˌɪntəˈdɪsəplɪnəri/', stress: 'in-ter-DIS-ci-pli-nar-y' }, { word: 'anomaly', ipa: '/əˈnɒməli/', stress: 'a-NOM-a-ly' }, { word: 'scalable', ipa: '/ˈskeɪləbl/', stress: 'SCALE-a-ble' }, { word: 'catalyst', ipa: '/ˈkætəlɪst/', stress: 'CAT-a-lyst' }],
    tips: ['En las cláusulas de participio, haz una pausa breve después de la cláusula inicial: Having analysed the data, | the team published the findings.', 'Whom suena /huːm/; de los cuales: several of whom → /ˈsevrəl əv huːm/.', 'Los términos científicos largos tienen una sola sílaba fuerte: hyPOTHesis, interDISciplinary.']
  },
  exercises: [
    mc('b2u06-e1', 'The method ___ the data was analysed was flawed.', ['by which', 'which', 'that by'], 0, 'Preposition + which in a formal relative clause.', 'Choose the correct structure.'),
    fb('b2u06-e2', 'The researchers, several of ___ were students, found an anomaly.', 'whom', 'several of whom (people).', undefined, 'Write the relative pronoun.'),
    fb('b2u06-e3', '___ analysed the data, the team published the findings.', 'Having', 'A perfect participle shows that one action comes before another.', undefined, 'Write the missing word.'),
    wo('b2u06-e4', ['collected', 'The', 'last', 'data', 'year', 'inconclusive', 'was'], ['The', 'data', 'collected', 'last', 'year', 'was', 'inconclusive'], 'A reduced relative clause.'),
    tf('b2u06-e5', '“What we need is more data” uses “what” as a relative pronoun meaning “the thing that”.', true, 'What = the thing that.'),
    mt('b2u06-e6', 'Match each clause with its function.', [['Having analysed the data,', 'action completed before the main one'], ['Published in 2019,', 'passive participle: the study was published'], ['Not knowing the cause,', 'negative participle clause'], ['While working in the lab,', 'simultaneous action with a conjunction']], 'Participles have different time values.'),
    tr('b2u06-e7', 'Reduce the relative clause.', 'The scientists who are working on the project received funding.', 'The scientists working on the project received funding', 'Omit who are.'),
    tr('b2u06-e8', 'Combine with a participle clause.', 'She analysed the data. Then she noticed an anomaly.', 'Having analysed the data, she noticed an anomaly', 'Having + participle, main clause.', ['Having analysed the data she noticed an anomaly']),
    rc('b2u06-e9', 'What can be inferred?', ['The authors were transparent about the limits of their study', 'The study was conclusive', 'The authors hid the sample size'], 0, 'They openly acknowledged that the trial was too small.', 'The trial, which involved only forty participants, was too small to be conclusive, a limitation the authors openly acknowledged.'),
    sa('b2u06-e10', 'Write a concise paragraph (6 to 8 sentences) summarising a scientific idea or innovation. Use at least two advanced relative clauses and two participle clauses.', 'Model: “The device, which was developed by a team of engineers, several of whom had worked in the field, reduces contamination. Tested in three villages, it proved reliable. Not knowing the long-term effects, the authors urge caution.” Check: participle subjects, relative pronouns and concision.')
  ],
  assessment: [
    mc('b2u06-t1', 'The study, ___ was funded by the university, was inconclusive.', ['which', 'what', 'that'], 0, 'Non-defining clause → which.'),
    mc('b2u06-t2', 'The researchers, none of ___ had experience, made mistakes.', ['whom', 'who', 'which'], 0, 'none of whom (people).'),
    fb('b2u06-t3', '___ in 2019, the study changed the field. (publish)', 'Published', 'Past participle clause with passive meaning.', undefined, 'Write the participle.'),
    fb('b2u06-t4', '___ knowing the cause, they ran more tests.', 'Not', 'Negative participle clause: Not knowing…', undefined, 'Write the missing word.'),
    tf('b2u06-t5', 'The implied subject of a participle clause should be the same as the subject of the main clause.', true, 'Otherwise the participle “dangles”.'),
    tf('b2u06-t6', '“Walking down the street, the building looked old” is a correct sentence.', false, 'The building is not walking: dangling participle.'),
    wo('b2u06-t7', ['we', 'is', 'What', 'need', 'data', 'more'], ['What', 'we', 'need', 'is', 'more', 'data'], 'What-clause as subject.'),
    mc('b2u06-t8', 'Which sentence uses a reduced relative clause?', ['The results published last year were disappointing.', 'The results which were published last year were disappointing.', 'The results, which were published last year, were disappointing.'], 0, 'The relative pronoun and was are omitted.'),
    tr('b2u06-t9', 'Rewrite with a participle clause.', 'After they had finished the trial, they published the results.', 'Having finished the trial, they published the results', 'Having + participle.', ['After finishing the trial, they published the results', 'After finishing the trial they published the results', 'Having finished the trial they published the results']),
    mc('b2u06-t10', 'Choose the most formal and concise version.', ['Anyone wishing to apply must submit a proposal.', 'People who want to apply must submit a proposal.', 'If somebody wants to apply, they must submit a proposal.'], 0, 'A participle clause makes the sentence compact and formal.')
  ],
  review: ['Advanced relative clauses: by which, on which, several of whom, none of which, which for a whole clause, what for “the thing that”.', 'Reduced relative clauses: omit the pronoun and be (the data collected…, the scientists working…).', 'Participle clauses: -ing (simultaneous or cause), having + participle (earlier), past participle (passive).', 'Avoid dangling participles: the subject must be the same as in the main clause.', 'Evaluate evidence: sample size, replication, funding, transparency about limitations.']
};
export default unit;
