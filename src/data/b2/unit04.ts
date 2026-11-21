import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'b2-u04', level: 'B2', unitNumber: 4, title: 'Media and Critical Thinking', subtitle: 'Analyse news, sources and the way stories are framed',
  communicativeGoal: 'Analizar noticias, fuentes y puntos de vista con espíritu crítico, atribuyendo la información con precisión y distinguiendo hechos, afirmaciones y valoraciones.',
  objectives: ['Usar estructuras pasivas avanzadas (con modales, infinitivos, gerundios, impersonales y causativas).', 'Elegir verbos de comunicación con el patrón y el grado de distancia adecuados (claim, allege, urge, accuse…).', 'Evaluar la fiabilidad de una fuente y reconocer encuadre, lenguaje cargado y estadísticas engañosas.', 'Escribir y hablar sobre noticias con objetividad y cautela.'],
  grammar: {
    title: 'Passive structures and reporting verbs',
    explanation: [
      'La pasiva avanzada combina be con modales y formas no personales: must be verified, could have been avoided, to be informed, being asked, having been told. También existe la pasiva con get (informal: He got fired) y la causativa have / get + objeto + participio, cuando alguien hace algo por nosotros (We had the report checked).',
      'La pasiva impersonal se usa en noticias y textos formales para atribuir información sin comprometerse: It is believed / said / reported / alleged that the minister knew; The minister is believed to have known (infinitivo perfecto: referido al pasado); There is said to be a leak. Así se mantiene distancia: el hablante no afirma, solo informa de lo que otros dicen.',
      'Los verbos de comunicación (reporting verbs) llevan patrones distintos: + that (claim, insist, maintain, argue); + to infinitivo (claim, refuse, promise, threaten); + objeto + to infinitivo (urge, warn, advise, remind, encourage); + -ing (admit, deny, suggest, recommend); y + objeto + preposición + -ing (accuse sb of, blame sb for, criticise sb for, warn sb against, congratulate sb on). Ejemplos: She claimed to have seen the document; He was accused of leaking information; They denied ever having met.',
      'El verbo elegido transmite actitud y distancia: state y say son neutros; claim y allege marcan que no está probado; insist y maintain indican firmeza; admit reconoce algo desfavorable. Los adverbios allegedly, reportedly y apparently refuerzan esa distancia: The company reportedly ignored warnings.',
      'Pensamiento crítico: identifica quién habla (fuente), cómo se enmarca la historia (framing), qué lenguaje cargado se usa, qué falta (la otra versión) y qué se afirma como hecho frente a opinión. Distingue correlación de causalidad: que dos cosas ocurran a la vez no prueba que una cause la otra.'
    ],
    forms: [
      { label: 'Advanced passive', lines: ['The figures must be verified before publication.', 'The crisis could have been avoided.', 'He denied having been informed.', 'We had the report checked by an independent expert.'] },
      { label: 'Impersonal passive', lines: ['It is widely believed that the minister knew.', 'The minister is believed to have known.', 'There is said to be a leak at the ministry.', 'The company is reported to be in talks.'] },
      { label: 'Reporting verbs', lines: ['She claimed to have seen the document.', 'The union urged members to reject the offer.', 'He was accused of leaking information.', 'They denied ever having met.'] },
      { label: 'Useful expressions and collocations', lines: ['break a story; go to press; run a story', 'take something out of context; read between the lines', 'set the agenda; a hidden agenda', 'shape public opinion; a balanced view', 'check the facts; sit on the fence', 'be taken in by; spin a story', 'go viral; issue a retraction', 'a reliable source; an anonymous tip-off'] }
    ]
  },
  vocabulary: [
    v('framing', 'encuadre', '/ˈfreɪmɪŋ/', 'FRAM-ing'), v('spin', 'sesgo interesado, manipulación', '/spɪn/', 'SPIN'), v('propaganda', 'propaganda', '/ˌprɒpəˈɡændə/', 'prop-a-GAN-da'),
    v('sensationalism', 'sensacionalismo', '/senˈseɪʃnəlɪzəm/', 'sen-SA-tion-al-ism'), v('clickbait', 'cebo de clics', '/ˈklɪkbeɪt/', 'CLICK-bait'), v('disinformation', 'desinformación deliberada', '/ˌdɪsɪnfəˈmeɪʃn/', 'dis-in-for-MA-tion'),
    v('credibility', 'credibilidad', '/ˌkredəˈbɪləti/', 'cred-i-BIL-i-ty'), v('scrutiny', 'escrutinio', '/ˈskruːtəni/', 'SCRU-ti-ny'), v('impartiality', 'imparcialidad', '/ˌɪmpɑːʃiˈæləti/', 'im-par-ti-AL-i-ty'),
    v('echo chamber', 'cámara de resonancia', '/ˈekəʊ ˌtʃeɪmbə/', 'ECH-o CHAM-ber'), v('correlation', 'correlación', '/ˌkɒrəˈleɪʃn/', 'cor-re-LA-tion'), v('causation', 'causalidad', '/kɔːˈzeɪʃn/', 'cau-SA-tion'),
    v('peer-reviewed', 'revisado por pares', '/ˌpɪə rɪˈvjuːd/', 'peer re-VIEWED'), v('provenance', 'procedencia, origen', '/ˈprɒvənəns/', 'PROV-e-nance'), v('allegation', 'acusación sin pruebas', '/ˌælɪˈɡeɪʃn/', 'al-le-GA-tion'),
    v('whistleblower', 'denunciante', '/ˈwɪslbləʊə/', 'WHIS-tle-blow-er'), v('transparency', 'transparencia', '/trænsˈpærənsi/', 'trans-PAR-en-cy'), v('op-ed', 'columna de opinión', '/ˈɒp ed/', 'OP-ed'),
    v('loaded language', 'lenguaje cargado', '/ˈləʊdɪd ˈlæŋɡwɪdʒ/', 'LOAD-ed LAN-guage'), v('vested interest', 'interés particular', '/ˌvestɪd ˈɪntrəst/', 'VEST-ed IN-trest'), v('anecdotal', 'anecdótico', '/ˌænɪkˈdəʊtl/', 'an-ec-DO-tal'),
    v('verify', 'verificar', '/ˈverɪfaɪ/', 'VER-i-fy')
  ],
  examples: [
    { en: 'The minister is alleged to have misled parliament, although no formal charge has been brought.', es: 'Se alega que el ministro engañó al parlamento, aunque no se ha presentado ninguna acusación formal.' },
    { en: 'The article should have been checked by an editor before it went to press.', es: 'El artículo debería haber sido revisado por un editor antes de ir a imprenta.' },
    { en: 'She denied having leaked the documents and accused her colleagues of spreading rumours.', es: 'Negó haber filtrado los documentos y acusó a sus colegas de difundir rumores.' },
    { en: 'The study is said to have been peer-reviewed, but the journal has not confirmed this.', es: 'Se dice que el estudio fue revisado por pares, pero la revista no lo ha confirmado.' },
    { en: 'The government urged citizens to treat unverified reports with caution.', es: 'El gobierno instó a los ciudadanos a tratar con cautela los informes no verificados.' },
    { en: 'The outlet was criticised for quoting the statement out of context.', es: 'El medio fue criticado por citar el comunicado fuera de contexto.' },
    { en: 'There is reported to be growing unease among investors, though the figures are anecdotal.', es: 'Se informa de un creciente malestar entre los inversores, aunque las cifras son anecdóticas.' },
    { en: 'Correlation is not causation: the fact that two trends coincide does not prove that one causes the other.', es: 'Correlación no es causalidad: que dos tendencias coincidan no prueba que una cause la otra.' }
  ],
  dialogue: [
    { speaker: 'Nora', text: 'Have you read the piece on the clinic closure? The headline says it was “forced to close after a scandal”.', es: '¿Leíste la nota sobre el cierre de la clínica? El titular dice que fue “obligada a cerrar tras un escándalo”.' },
    { speaker: 'Felix', text: 'I did, and I was struck by how carefully it’s worded. The director is alleged to have misused funds, but nowhere does it say that any charge has been brought.', es: 'Sí, y me llamó la atención lo cuidadosa que es la redacción. Se alega que la directora malversó fondos, pero en ningún sitio dice que se haya presentado cargo alguno.' },
    { speaker: 'Nora', text: 'Right. And the “scandal” is only mentioned in the headline, which is what most people read.', es: 'Cierto. Y el “escándalo” solo se menciona en el titular, que es lo que lee la mayoría.' },
    { speaker: 'Felix', text: 'Exactly. It’s been shared thousands of times, but I doubt anyone checked the source.', es: 'Exacto. Se ha compartido miles de veces, pero dudo que alguien haya comprobado la fuente.' },
    { speaker: 'Nora', text: 'Who is quoted, anyway?', es: '¿A quién citan, por cierto?' },
    { speaker: 'Felix', text: 'A former employee, who claims to have witnessed irregularities, and an unnamed “insider”.', es: 'A un exempleado, que afirma haber presenciado irregularidades, y a un “informante” sin nombre.' },
    { speaker: 'Nora', text: 'So two sources, one anonymous, both potentially with a vested interest.', es: 'O sea, dos fuentes, una anónima, ambas con posible interés particular.' },
    { speaker: 'Felix', text: 'And the clinic’s side? It’s summed up in one line: “The clinic declined to comment.”', es: '¿Y la versión de la clínica? Se resume en una línea: “La clínica declinó hacer comentarios”.' },
    { speaker: 'Nora', text: 'Which could mean it wasn’t asked properly. I’ve seen it done: a journalist emails at five in the afternoon and publishes by six.', es: 'Lo cual podría significar que no se le preguntó bien. Lo he visto: un periodista envía un correo a las cinco y publica a las seis.' },
    { speaker: 'Felix', text: 'That’s a bit cynical, though I agree the story should have been held until a right of reply had been obtained.', es: 'Es algo cínico, aunque estoy de acuerdo en que la nota debió retenerse hasta obtener el derecho de réplica.' },
    { speaker: 'Nora', text: 'Should we write to the editor? The article might also be flagged for the corrections page.', es: '¿Le escribimos al editor? Quizá el artículo deba señalarse para la sección de rectificaciones.' },
    { speaker: 'Felix', text: 'Let’s have the facts checked first. If the claims turn out to be baseless, we’ll ask for a retraction; if not, at least we’ll have done our homework.', es: 'Primero verifiquemos los hechos. Si las afirmaciones resultan infundadas, pediremos una retractación; si no, al menos habremos hecho los deberes.' }
  ],
  listening: {
    script: [
      { speaker: 'Host', text: 'You’ve spent years analysing how numbers are used in the news. What’s the commonest trick?' },
      { speaker: 'Researcher', text: 'Confusing correlation with causation. A headline will say that people who drink coffee live longer, and the implication is that coffee extends your life.' },
      { speaker: 'Host', text: 'But it may not?' },
      { speaker: 'Researcher', text: 'It may not. Coffee drinkers could also be wealthier, or have better healthcare. The study itself usually says so, but that caution is rarely reported.' },
      { speaker: 'Host', text: 'Is that deliberate?' },
      { speaker: 'Researcher', text: 'Sometimes. More often it’s a combination of time pressure and the pursuit of clicks. Headlines are written to be shared, not to be accurate.' },
      { speaker: 'Host', text: 'What should readers do?' },
      { speaker: 'Researcher', text: 'Ask who funded the study, how many people were involved, and whether it has been peer-reviewed. And be wary of anything described as a breakthrough on the basis of a single trial.' }
    ],
    questions: [
      mc('b2u04-l1', 'According to the researcher, what is the commonest trick?', ['Confusing correlation with causation', 'Inventing statistics', 'Using small fonts'], 0, 'She names confusing correlation with causation.'),
      mc('b2u04-l2', 'What might explain why coffee drinkers live longer?', ['They may be wealthier or have better healthcare', 'Coffee is poisonous', 'They sleep less'], 0, 'Other factors, such as wealth or healthcare, could explain it.'),
      mc('b2u04-l3', 'Why are misleading headlines often written?', ['Time pressure and the pursuit of clicks', 'Journalists want to lie', 'Readers demand lies'], 0, 'More often it is time pressure and the pursuit of clicks.'),
      mc('b2u04-l4', 'What does the researcher advise readers to check?', ['Funding, sample size and peer review', 'The author’s age', 'The date of the newspaper'], 0, 'Who funded the study, how many people, whether it was peer-reviewed.'),
      tf('b2u04-l5', 'The researcher thinks all misleading headlines are deliberate.', false, 'She says “sometimes”, but more often it is time pressure and clicks.')
    ]
  },
  reading: {
    title: 'Framing the story',
    text: 'Two newspapers reported on the same economic figures on the same day. One headline read: “Unemployment falls to its lowest level in a decade”. The other: “Wages fail to keep pace as jobless numbers fall”. Neither was, strictly speaking, false. Yet readers who saw only one headline would have come away with very different impressions of the economy. This is what media scholars call framing: the process by which journalists, often unintentionally, select certain aspects of a story and make them more prominent. Framing is unavoidable, since no report can include everything; what matters is whether it is done transparently. Critics, however, point out that audiences are rarely shown how a story has been framed, and that the frames chosen are frequently shaped by the outlet’s commercial interests or political leanings. Some scholars therefore recommend “lateral reading”: instead of reading an article closely, readers should leave the page and check what other independent sources say about its author and its claims. In experiments, those who did so were far more likely to identify misleading stories. It would be naive, the researchers concede, to expect everyone to do this for every article; but a habit of occasionally comparing coverage might at least make readers less easy to manipulate.',
    questions: [
      rc('b2u04-r1', 'What do the two headlines illustrate?', ['Different framings of the same facts', 'One true and one false report', 'A mistake in the figures'], 0, 'Both are accurate but emphasise different aspects.'),
      rc('b2u04-r2', 'Why is framing unavoidable?', ['No report can include everything', 'Journalists enjoy it', 'Readers demand it'], 0, 'Every report must select what to include.'),
      rc('b2u04-r3', 'What is “lateral reading”?', ['Leaving the page to check what other sources say about the author and claims', 'Reading very quickly', 'Reading in two languages'], 0, 'Readers leave the page and check other independent sources.'),
      rc('b2u04-r4', 'What do the researchers concede?', ['It is unrealistic to expect everyone to do it for every article', 'It never works', 'It is illegal'], 0, 'It would be naive to expect everyone to do this for every article.'),
      rc('b2u04-r5', 'What can be inferred about the writer’s view?', ['Critical habits are useful but not a complete solution', 'Media can’t be trusted at all', 'Framing is always deliberate deception'], 0, 'The writer says it “might at least” make readers less easy to manipulate.')
    ]
  },
  speaking: { prompt: 'Análisis oral de una noticia (4 a 5 minutos): elijan un titular real o inventado y analícenlo en pareja. Uno actúa como periodista que defiende la noticia y otro como lector crítico que pregunta por fuentes, encuadre y lenguaje.', tasks: ['Describe the story using impersonal passives (It is reported that…; He is alleged to have…).', 'Identify two sources and assess their credibility and possible vested interests.', 'Point out framing, loaded language or something that is missing from the story.', 'Use at least three reporting verbs with the right pattern (accuse… of, urge… to, deny + -ing).'] },
  writing: { prompt: 'Write a critical analysis (220 to 260 words) of a news story or headline of your choice. Evaluate its sources, framing, language and evidence, and say what additional information would be needed. Use advanced passives, reporting verbs and appropriate hedging.', rubric: ['Objective, formal tone with accurate attribution of claims.', 'At least four advanced passive or impersonal structures and three reporting verbs with correct patterns.', 'Clear evaluation of sources, framing and evidence (not just a summary).', 'Logical structure and a reasoned conclusion with hedging.'], model: 'The article, published on a popular news site, reports that a local clinic was “forced to close after a scandal”. A closer reading shows that the director is alleged to have misused funds, but it is nowhere stated that any charge has been brought. Two sources are quoted: a former employee, who claims to have witnessed irregularities, and an anonymous insider. Both may have a vested interest, which should have been acknowledged. The clinic’s response is limited to a single line stating that it declined to comment, which suggests that a right of reply may not have been adequately sought. The headline, moreover, uses loaded language (“scandal”) that is not supported by the body of the text. To evaluate the story properly, we would need independent confirmation of the allegations and the clinic’s full response. Until then, the piece is better described as a report of accusations than as an established fact.' },
  pronunciation: {
    items: [{ word: 'allegedly', ipa: '/əˈledʒɪdli/', stress: 'al-LEDGE-ed-ly' }, { word: 'credibility', ipa: '/ˌkredəˈbɪləti/', stress: 'cred-i-BIL-i-ty' }, { word: 'provenance', ipa: '/ˈprɒvənəns/', stress: 'PROV-e-nance' }, { word: 'disinformation', ipa: '/ˌdɪsɪnfəˈmeɪʃn/', stress: 'dis-in-for-MA-tion' }, { word: 'whistleblower', ipa: '/ˈwɪslbləʊə/', stress: 'WHIS-tle-blow-er' }],
    tips: ['En una noticia oral, la entonación cae en los hechos y se mantiene plana o sube ligeramente en las atribuciones (allegedly, reportedly) para marcar distancia.', 'En to have + participio, to have suena /tə əv/ muy débil: is said to have resigned → /tə əv/.', 'Las palabras en -ity y -tion llevan la fuerza en la sílaba anterior: credibILity, disinforMAtion.']
  },
  exercises: [
    mc('b2u04-e1', 'The figures ___ before they are published.', ['must be verified', 'must verify', 'must have verify'], 0, 'must + be + participle.', 'Choose the correct form.'),
    fb('b2u04-e2', 'He denied ___ been informed of the decision.', 'having', 'deny + -ing; perfect gerund: having been informed.', undefined, 'Write the missing word.'),
    fb('b2u04-e3', 'The minister is believed ___ known about the leak.', 'to have', 'is believed + perfect infinitive.', undefined, 'Write the missing words.'),
    wo('b2u04-e4', ['is', 'The', 'said', 'to', 'director', 'have', 'resigned'], ['The', 'director', 'is', 'said', 'to', 'have', 'resigned'], 'Impersonal passive with a perfect infinitive.'),
    tf('b2u04-e5', '“Allegedly” presents something as proven fact.', false, 'It signals that the claim is not proven.'),
    mt('b2u04-e6', 'Match each word with its meaning.', [['urge', 'encourage strongly to do something'], ['allege', 'claim without proof'], ['retract', 'withdraw a statement'], ['scrutinise', 'examine very carefully']], 'The verb choice shows attitude.'),
    tr('b2u04-e7', 'Rewrite impersonally with the minister as subject.', 'People believe that the minister knew about the leak.', 'The minister is believed to have known about the leak', 'is believed to have + participle.'),
    tr('b2u04-e8', 'Rewrite with a causative structure.', 'Someone checked the report for us.', 'We had the report checked', 'have + object + participle.', ['We had the report checked by someone']),
    rc('b2u04-e9', 'What can be inferred?', ['The report’s reliability is uncertain', 'The report is fully verified', 'The employee wrote the figures'], 0, 'It was reportedly leaked, and the figures are not independently verified.', 'The report, which was reportedly leaked by a former employee, is said to contain figures that have not been independently verified.'),
    sa('b2u04-e10', 'Write a critical analysis (6 to 8 sentences) of a headline or news story: sources, framing, language and what is missing. Use at least three structures from the unit.', 'Model: “The headline suggests that the plan has failed, but the article only reports that it is alleged to be over budget. The minister is said to have been informed, and critics accuse him of ignoring warnings. The figures have not been verified, and no independent source is quoted.” Check: attribution, distance and objective tone.')
  ],
  assessment: [
    mc('b2u04-t1', 'The claims ___ before the article was published.', ['should have been checked', 'should have checked', 'should be checking'], 0, 'Passive perfect modal: should have been checked.'),
    mc('b2u04-t2', 'He is alleged ___ funds.', ['to have misused', 'misusing', 'to misuse have'], 0, 'is alleged + perfect infinitive.'),
    fb('b2u04-t3', 'She was accused ___ leaking confidential documents.', 'of', 'accuse sb of + -ing.', undefined, 'Write the missing word.'),
    fb('b2u04-t4', 'The union urged members ___ the offer.', 'to reject', 'urge + object + to-infinitive.', undefined, 'Write the missing words.'),
    tf('b2u04-t5', '“Admit” is normally followed by an -ing form (admit doing).', true, 'He admitted making a mistake.'),
    tf('b2u04-t6', '“Suggest” can be followed by a to-infinitive: “She suggested to go.”', false, 'Suggest + -ing or that-clause.'),
    wo('b2u04-t7', ['to', 'is', 'believed', 'There', 'be', 'a', 'leak'], ['There', 'is', 'believed', 'to', 'be', 'a', 'leak'], 'Impersonal passive with there.'),
    mc('b2u04-t8', 'Which headline is the most cautious in attributing a claim?', ['Minister “knew about leak”, sources allege', 'Minister lied about leak', 'Minister caught in leak scandal'], 0, 'It attributes the claim and uses allege.'),
    tr('b2u04-t9', 'Rewrite with a causative.', 'A technician repaired my laptop.', 'I had my laptop repaired by a technician', 'have + object + participle.', ['I had my laptop repaired']),
    mc('b2u04-t10', 'Which statement shows the writer taking distance from a claim?', ['The company reportedly ignored warnings.', 'The company ignored warnings.', 'The company ignores warnings.'], 0, 'Reportedly marks distance.')
  ],
  review: ['Advanced passive: modals (must be verified, could have been avoided), infinitive and gerund forms (to be told, having been informed), causative (have sth done).', 'Impersonal passive: It is said that…; He is believed to have…; There is reported to be…', 'Reporting verb patterns: + that, + to, + object + to, + -ing, + object + preposition + -ing.', 'Choose the verb for the attitude: say (neutral), claim / allege (distance), insist (firmness), admit (concession).', 'Critical reading: check sources, framing, loaded language, missing voices, and correlation versus causation.']
};
export default unit;
