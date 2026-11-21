import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'b1-u04', level: 'B1', unitNumber: 4, title: 'News and Information', subtitle: 'Understand and explain what happens in the news',
  communicativeGoal: 'Comprender noticias y explicar información de forma objetiva, distinguiendo hechos confirmados de rumores, con ayuda de la voz pasiva.',
  objectives: ['Formar la voz pasiva en presente, pasado, presente perfecto y futuro.', 'Decidir cuándo conviene usar la pasiva y cuándo la activa.', 'Resumir una noticia y distinguir hechos confirmados de afirmaciones sin confirmar.', 'Reconocer el lenguaje típico de los titulares y de los informes de prensa.'],
  grammar: {
    title: 'Passive voice: present and past',
    explanation: [
      'La voz pasiva se forma con el verbo to be + participio pasado. El objeto de la oración activa pasa a ser el sujeto: A journalist wrote the article → The article was written by a journalist. Present simple: Newspapers are published daily. Past simple: The photos were taken in 2019.',
      'También existen la pasiva continua (is being investigated: algo que está ocurriendo ahora), la del present perfect (has been confirmed: resultado relevante ahora) y la del futuro (will be announced). Negativo: The results weren’t published. Pregunta: Was the report published yesterday? Who was it written by?',
      'Se usa la pasiva cuando no se sabe quién hizo la acción, cuando no importa o es obvio, o cuando interesa más el hecho que el autor: Three people were injured. El complemento agente (by + persona) solo se añade si aporta información nueva o importante: The painting was stolen by a group of students.',
      'La pasiva es muy frecuente en noticias y textos formales porque suena objetiva y distante. También hay estructuras impersonales para atribuir información: It is reported that…, The president is said to be…, It has been confirmed that….',
      'Atención: no se puede usar la pasiva con verbos intransitivos (happen, arrive, die). No se dice “The accident was happened”. Con verbos de dos objetos, la persona suele ser el sujeto: She was given a prize.'
    ],
    forms: [
      { label: 'Present and past passive', lines: ['Newspapers are published every day.', 'The article was written by a local journalist.', 'The photos weren’t taken in 2020.', 'Was the report published yesterday?'] },
      { label: 'Other tenses', lines: ['The case is being investigated.', 'The results have been confirmed.', 'The winner will be announced tomorrow.', 'The story has not been verified yet.'] },
      { label: 'Questions and reporting', lines: ['Who was the story written by?', 'How is the news checked before it is published?', 'It has been reported that two people were injured.', 'The minister is said to have resigned.'] },
      { label: 'Useful expressions and collocations', lines: ['break the news; make / hit the headlines', 'go viral; issue a statement', 'according to sources; off the record', 'verify / check the source; fact-check a claim', 'publish / retract an article', 'deny / confirm a rumour', 'a reliable / anonymous source', 'a misleading headline'] }
    ]
  },
  vocabulary: [
    v('headline', 'titular', '/ˈhedlaɪn/', 'HEAD-line'), v('journalist', 'periodista', '/ˈdʒɜːnəlɪst/', 'JOUR-na-list'), v('article', 'artículo', '/ˈɑːtɪkl/', 'AR-ti-cle'),
    v('broadcast', 'transmitir; emisión', '/ˈbrɔːdkɑːst/', 'BROAD-cast'), v('publish', 'publicar', '/ˈpʌblɪʃ/', 'PUB-lish'), v('source', 'fuente', '/sɔːs/', 'SOURCE'),
    v('rumour', 'rumor', '/ˈruːmə/', 'RU-mour'), v('misleading', 'engañoso', '/ˌmɪsˈliːdɪŋ/', 'mis-LEAD-ing'), v('coverage', 'cobertura', '/ˈkʌvərɪdʒ/', 'COV-er-age'),
    v('editor', 'editor', '/ˈedɪtə/', 'ED-i-tor'), v('correction', 'corrección, rectificación', '/kəˈrekʃn/', 'cor-REC-tion'), v('audience', 'audiencia', '/ˈɔːdiəns/', 'AU-di-ence'),
    v('investigate', 'investigar', '/ɪnˈvestɪɡeɪt/', 'in-VES-ti-gate'), v('announce', 'anunciar', '/əˈnaʊns/', 'an-NOUNCE'), v('release', 'publicar, liberar', '/rɪˈliːs/', 're-LEASE'),
    v('deny', 'negar', '/dɪˈnaɪ/', 'de-NY'), v('confirm', 'confirmar', '/kənˈfɜːm/', 'con-FIRM'), v('leak', 'filtrar; filtración', '/liːk/', 'LEAK'),
    v('spokesperson', 'portavoz', '/ˈspəʊkspɜːsn/', 'SPOKES-per-son'), v('retract', 'retractarse, retirar', '/rɪˈtrækt/', 're-TRACT')
  ],
  examples: [
    { en: 'The decision was announced late on Friday, and the reasons behind it have not been explained.', es: 'La decisión se anunció el viernes por la noche y no se han explicado las razones.' },
    { en: 'Several documents were leaked to the press before the official report was published.', es: 'Varios documentos fueron filtrados a la prensa antes de que se publicara el informe oficial.' },
    { en: 'The factory is being investigated, and a statement will be issued this afternoon.', es: 'La fábrica está siendo investigada y se emitirá un comunicado esta tarde.' },
    { en: 'It has been reported that the minister resigned, although this hasn’t been confirmed.', es: 'Se ha informado de que el ministro renunció, aunque esto no se ha confirmado.' },
    { en: 'The photographs, which were taken three years ago, had been used in other stories.', es: 'Las fotografías, que se tomaron hace tres años, habían sido usadas en otras noticias.' },
    { en: 'Misleading headlines are often shared more than corrections.', es: 'Los titulares engañosos se comparten a menudo más que las rectificaciones.' },
    { en: 'Was the article written by a staff journalist or by an anonymous contributor?', es: '¿El artículo fue escrito por un periodista de la plantilla o por un colaborador anónimo?' },
    { en: 'Because the claim couldn’t be verified, it was never published.', es: 'Como la afirmación no pudo verificarse, nunca se publicó.' }
  ],
  dialogue: [
    { speaker: 'Maya', text: 'Have you seen the story that was published this morning? It’s already been shared thousands of times.', es: '¿Viste la noticia que se publicó esta mañana? Ya se ha compartido miles de veces.' },
    { speaker: 'Leo', text: 'Yes, but I think it’s misleading. The headline says that the factory was closed by the government, but that hasn’t been confirmed.', es: 'Sí, pero creo que es engañosa. El titular dice que el gobierno cerró la fábrica, pero eso no se ha confirmado.' },
    { speaker: 'Maya', text: 'Really? Where did the information come from?', es: '¿En serio? ¿De dónde salió la información?' },
    { speaker: 'Leo', text: 'It was posted by an anonymous account. No official source was quoted.', es: 'La publicó una cuenta anónima. No se citó ninguna fuente oficial.' },
    { speaker: 'Maya', text: 'Then we shouldn’t repeat it until it has been verified.', es: 'Entonces no deberíamos repetirla hasta que se haya verificado.' },
    { speaker: 'Leo', text: 'Agreed. I’ve already called the spokesperson. I’m told that a statement will be issued this afternoon.', es: 'De acuerdo. Ya llamé al portavoz. Me dicen que se emitirá un comunicado esta tarde.' },
    { speaker: 'Maya', text: 'Good. In the meantime, let’s check whether the photos were taken at the factory.', es: 'Bien. Mientras tanto, comprobemos si las fotos se tomaron en la fábrica.' },
    { speaker: 'Leo', text: 'According to the data, they were taken three years ago. They’ve been used in other stories before.', es: 'Según los datos, se tomaron hace tres años. Ya se habían usado en otras historias.' },
    { speaker: 'Maya', text: 'That’s a red flag. If the article is published like that, we’ll be accused of spreading fake news.', es: 'Es una señal de alerta. Si el artículo se publica así, nos acusarán de difundir noticias falsas.' },
    { speaker: 'Leo', text: 'So we need a correction on our website. Should the original post be deleted or just updated?', es: 'Entonces necesitamos una rectificación en nuestro sitio. ¿Se debe borrar la publicación original o solo actualizarla?' },
    { speaker: 'Maya', text: 'Updated, with a note explaining what was wrong. Transparency matters.', es: 'Actualizada, con una nota que explique qué estaba mal. La transparencia importa.' },
    { speaker: 'Leo', text: 'I’ll draft it now and send it to the editor for approval.', es: 'La redacto ahora y se la envío al editor para su aprobación.' }
  ],
  listening: {
    script: [
      { speaker: 'Newsreader', text: 'Good evening. A major power cut was reported across the north of the country this afternoon.' },
      { speaker: 'Newsreader', text: 'Thousands of homes were left without electricity.' },
      { speaker: 'Reporter', text: 'The cause is still being investigated. A spokesperson said that a transformer had been damaged during a storm, but this hasn’t been confirmed.' },
      { speaker: 'Newsreader', text: 'Is it true that hospitals were affected?' },
      { speaker: 'Reporter', text: 'Some were, but emergency generators were used and no patients were harmed.' },
      { speaker: 'Reporter', text: 'Power has been restored to most areas, and the remaining homes will be reconnected by midnight.' },
      { speaker: 'Newsreader', text: 'Thank you. We’ll bring you more as the story develops.' }
    ],
    questions: [
      mc('b1u04-l1', 'What is still being investigated?', ['The cause of the power cut', 'The names of the victims', 'The price of electricity'], 0, 'The cause is still being investigated.'),
      mc('b1u04-l2', 'What does the spokesperson say?', ['A transformer may have been damaged by a storm, but it is unconfirmed', 'The government caused the cut', 'Hospitals closed'], 0, 'He says a transformer had been damaged, but it hasn’t been confirmed.'),
      mc('b1u04-l3', 'How were hospitals able to keep working?', ['Emergency generators were used', 'They were closed', 'They had no patients'], 0, 'Emergency generators were used.'),
      tf('b1u04-l4', 'All homes have already been reconnected.', false, 'The remaining homes will be reconnected by midnight.'),
      mc('b1u04-l5', 'What is the reporter’s attitude to the information?', ['Cautious: he separates confirmed facts from unconfirmed claims', 'Certain about the cause', 'Critical of hospitals'], 0, 'He says what “hasn’t been confirmed” and what has been done.')
    ]
  },
  reading: {
    title: 'Why do false stories spread so fast?',
    text: 'A recent study, which was carried out by researchers at a European university, analysed millions of social media posts that were published over several years. The results were surprising: false stories were shared much more quickly than accurate ones, and not by automated accounts, as many people had assumed, but by ordinary users. According to the researchers, false stories are often designed to provoke strong emotions such as anger or fear, and emotional content is more likely to be shared. The study does not claim that people are being deliberately dishonest; rather, it suggests that headlines are rarely read carefully before they are forwarded. As a result, experts recommend that sources should be checked and that articles should be read in full before they are shared. Several platforms have also introduced warnings, although it is not yet clear whether these measures are effective.',
    questions: [
      rc('b1u04-r1', 'What was analysed in the study?', ['Millions of social media posts', 'Newspaper sales', 'TV programmes'], 0, 'Millions of posts published over several years.'),
      rc('b1u04-r2', 'Who shared false stories the most?', ['Ordinary users', 'Automated accounts', 'Journalists'], 0, 'Not by automated accounts, as assumed, but by ordinary users.'),
      rc('b1u04-r3', 'Why do false stories spread, according to the researchers?', ['They often provoke strong emotions', 'They are better written', 'They are shorter'], 0, 'Emotional content is more likely to be shared.'),
      rc('b1u04-r4', 'What does the text suggest about users?', ['They often share without reading carefully, not necessarily out of dishonesty', 'They deliberately lie', 'They never share'], 0, 'The study does not claim people are being deliberately dishonest.'),
      rc('b1u04-r5', 'What is still uncertain?', ['Whether the platforms’ warnings are effective', 'Whether false stories exist', 'Whether the study was real'], 0, 'It is not yet clear whether the warnings work.')
    ]
  },
  speaking: { prompt: 'Presenta oralmente una noticia (1 a 2 minutos) como si fueras un periodista de radio. Tu compañero actúa como editor y te pregunta cómo se verificó la información.', tasks: ['Summarise the story in 4 or 5 sentences using at least three passive forms.', 'Say what has been confirmed and what has not been confirmed yet.', 'Name your source and say how reliable it is.', 'Answer your partner’s questions about how the information was checked.'] },
  writing: { prompt: 'Write a news report of 120 to 150 words about a real or invented local event. Use the passive voice at least six times, a headline, and a sentence that distinguishes confirmed facts from rumours.', rubric: ['Has a clear headline and an objective, factual tone.', 'Uses at least six passive structures in different tenses.', 'Identifies sources and separates confirmed and unconfirmed information.', 'Information is organised from most to least important.'], model: 'Library Reopened After Flood. The city library, which was closed last month after a flood, was reopened on Monday. About 3,000 books were damaged, and repairs are still being carried out. According to a spokesperson, the building was inspected twice before it was declared safe. It has been reported that the cost will exceed 200,000 euros, but this figure has not been confirmed. A ceremony will be held on Saturday.' },
  pronunciation: {
    items: [{ word: 'journalist', ipa: '/ˈdʒɜːnəlɪst/', stress: 'JOUR-na-list' }, { word: 'investigate', ipa: '/ɪnˈvestɪɡeɪt/', stress: 'in-VES-ti-gate' }, { word: 'spokesperson', ipa: '/ˈspəʊkspɜːsn/', stress: 'SPOKES-per-son' }, { word: 'misleading', ipa: '/ˌmɪsˈliːdɪŋ/', stress: 'mis-LEAD-ing' }, { word: 'coverage', ipa: '/ˈkʌvərɪdʒ/', stress: 'COV-er-age' }],
    tips: ['En la pasiva, was y were suenan débiles /wəz/ y /wə/; la fuerza cae en el participio: it was CONfirmed.', 'En los verbos de dos sílabas de acción (announce, confirm, deny) la fuerza va en la segunda sílaba.', 'Los participios en -ed suenan /t/, /d/ o /ɪd/: released /t/, confirmed /d/, reported /ɪd/.']
  },
  exercises: [
    mc('b1u04-e1', 'The report ___ yesterday.', ['was published', 'published', 'is published'], 0, 'Finished past action, the doer isn’t important → past simple passive.', 'Choose the correct form.'),
    fb('b1u04-e2', 'The photos ___ (take) in 2019.', 'were taken', 'Past simple passive, plural.', undefined, 'Write the passive form.'),
    fb('b1u04-e3', 'The case is ___ investigated at the moment.', 'being', 'Present continuous passive: is being + participle.', undefined, 'Write the missing word.'),
    wo('b1u04-e4', ['was', 'The', 'written', 'by', 'article', 'a', 'journalist'], ['The', 'article', 'was', 'written', 'by', 'a', 'journalist'], 'Subject + was + participle + by + agent.'),
    tf('b1u04-e5', 'In a passive sentence, the object of the active sentence becomes the subject.', true, 'The article (object) → The article (subject).'),
    mt('b1u04-e6', 'Match each form with its tense.', [['is published', 'present simple passive'], ['was published', 'past simple passive'], ['has been published', 'present perfect passive'], ['is being published', 'present continuous passive']], 'Look at the form of to be.'),
    tr('b1u04-e7', 'Rewrite in the passive.', 'A journalist wrote the article.', 'The article was written by a journalist', 'object → subject; was + participle; by + agent.'),
    tr('b1u04-e8', 'Rewrite in the passive without an agent.', 'Someone has confirmed the results.', 'The results have been confirmed', 'have been + participle.', ['The results have been confirmed by someone']),
    rc('b1u04-e9', 'What can be inferred from the text?', ['The reopening is planned but not certain', 'The plant has reopened', 'The plant will close forever'], 0, 'Would reopen + no date confirmed = planned but not certain.', 'The statement, which was issued late on Friday, said that the plant would reopen next month, although no date had been confirmed.'),
    sa('b1u04-e10', 'Write 4 to 5 sentences reporting a news event (real or invented) with at least four passive forms.', 'Model: “A bridge was closed yesterday after cracks were found. The road is being repaired. It has been announced that traffic will be diverted. The cause has not been confirmed.” Check: different passive tenses and an objective tone.')
  ],
  assessment: [
    mc('b1u04-t1', 'The new law ___ last week.', ['was approved', 'approved', 'has approved'], 0, 'Finished time (last week) + object as subject.'),
    mc('b1u04-t2', 'The results ___ at the moment.', ['are being analysed', 'are analysing', 'were analysing'], 0, 'Present continuous passive.'),
    fb('b1u04-t3', 'The suspect ___ been arrested.', 'has', 'Present perfect passive: has been + participle.', undefined, 'Write the missing word.'),
    fb('b1u04-t4', 'Who was the novel written ___?', 'by', 'by introduces the agent.', undefined, 'Write the missing word.'),
    tf('b1u04-t5', 'We use the passive when the person who did the action is unknown or unimportant.', true, 'Three people were injured.'),
    tf('b1u04-t6', '“The house built in 1900” is a correct passive sentence.', false, 'It needs was: “The house was built in 1900.”'),
    wo('b1u04-t7', ['has', 'been', 'The', 'confirmed', 'news'], ['The', 'news', 'has', 'been', 'confirmed'], 'has been + participle.'),
    mc('b1u04-t8', 'Choose the best sentence for a news report.', ['Three people were injured in the accident.', 'Someone injured three people in the accident.', 'The accident has injured three people someone.'], 0, 'The doer is unknown, so the passive fits.'),
    tr('b1u04-t9', 'Rewrite in the passive.', 'They will announce the winner tomorrow.', 'The winner will be announced tomorrow', 'will be + participle.', ['The winner will be announced tomorrow by them']),
    mc('b1u04-t10', 'Which sentence is passive?', ['The mistake was corrected.', 'The editor corrected the mistake.', 'The editor is correcting the mistake.'], 0, 'be + past participle.')
  ],
  review: ['Passive = be + past participle; the object of the active sentence becomes the subject.', 'Present: is/are published; past: was/were published; perfect: has/have been published; continuous: is being published; future: will be published.', 'Use the passive when the doer is unknown, obvious or unimportant, and in objective news style.', 'Add by + agent only when it gives important information.', 'Tell facts from rumours: it has been confirmed / reported / said that…']
};
export default unit;
