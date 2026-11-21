import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'b1-u08', level: 'B1', unitNumber: 8, title: 'Media and Entertainment', subtitle: 'Report, summarise and comment on films, books and news',
  communicativeGoal: 'Resumir y comentar películas, libros y noticias, y contar lo que otras personas dijeron usando el estilo indirecto.',
  objectives: ['Transmitir afirmaciones con cambio de tiempo verbal (backshift).', 'Transmitir preguntas con if / whether y palabras interrogativas.', 'Usar verbos de comunicación: tell, ask, explain, admit, promise, warn, deny.', 'Resumir y valorar una película, un libro o una noticia.'],
  grammar: {
    title: 'Reported speech: statements and questions',
    explanation: [
      'El estilo indirecto (reported speech) cuenta lo que alguien dijo sin repetir sus palabras exactas. Normalmente el verbo retrocede un tiempo: present simple → past simple (“I love it” → She said she loved it); present continuous → past continuous; past simple y present perfect → past perfect (“I’ve seen it” → He said he had seen it); will → would; can → could; must → had to.',
      'También cambian pronombres y expresiones de tiempo y lugar según la perspectiva: now → then; today → that day; tomorrow → the next day; yesterday → the day before; here → there; this → that.',
      'Preguntas indirectas: no hay inversión ni do/does. Preguntas de sí/no: if o whether (“Have you seen it?” → She asked if I had seen it). Preguntas con wh-: se mantiene la palabra interrogativa (“Where do you live?” → He asked where I lived). No se usa signo de interrogación.',
      'Órdenes y peticiones: told / asked + persona + (not) to + verbo (“Don’t tell anyone!” → She asked me not to tell anyone). Otros verbos: admit, deny, promise, warn, suggest, explain, claim. Tell lleva persona (told me); say no (said that).',
      'No siempre hay retroceso: si el verbo introductor está en presente (She says she’s tired) o si lo dicho sigue siendo cierto o acaba de decirse, el tiempo puede mantenerse.'
    ],
    forms: [
      { label: 'Statements', lines: ['“I love the soundtrack.” → She said she loved the soundtrack.', '“I’ve seen it twice.” → He said he had seen it twice.', '“We’ll release a sequel.” → They announced they would release a sequel.', '“I can’t come tomorrow.” → She said she couldn’t come the next day.'] },
      { label: 'Questions', lines: ['“Have you seen the trailer?” → She asked if I had seen the trailer.', '“Where did you watch it?” → He asked where I had watched it.', '“Are you coming?” → She asked whether I was coming.', '“What time does it start?” → I asked what time it started.'] },
      { label: 'Commands and reporting verbs', lines: ['“Don’t tell anyone!” → She asked me not to tell anyone.', 'He admitted that he hadn’t read the book.', 'They denied copying the script.', 'The critic warned us not to expect too much.'] },
      { label: 'Useful expressions and collocations', lines: ['rave reviews; critically acclaimed', 'a box-office hit / flop; a cult classic', 'steal the show; a must-see', 'binge-watch a series; hold your attention', 'spoil the ending; read between the lines', 'a gripping plot; a predictable storyline', 'the film adaptation of a novel', 'a gripping thriller'] }
    ]
  },
  vocabulary: [
    v('critic', 'crítico', '/ˈkrɪtɪk/', 'CRI-tic'), v('sequel', 'secuela', '/ˈsiːkwəl/', 'SE-quel'), v('genre', 'género', '/ˈʒɒnrə/', 'GEN-re'),
    v('cast', 'reparto', '/kɑːst/', 'CAST'), v('director', 'director', '/dəˈrektə/', 'di-REC-tor'), v('scene', 'escena', '/siːn/', 'SCENE'),
    v('trailer', 'tráiler', '/ˈtreɪlə/', 'TRAI-ler'), v('bestseller', 'éxito de ventas', '/ˌbestˈselə/', 'best-SEL-ler'), v('episode', 'episodio', '/ˈepɪsəʊd/', 'EP-i-sode'),
    v('soundtrack', 'banda sonora', '/ˈsaʊndtræk/', 'SOUND-track'), v('box office', 'taquilla', '/ˈbɒks ɒfɪs/', 'BOX of-fice'), v('adaptation', 'adaptación', '/ˌædæpˈteɪʃn/', 'ad-ap-TA-tion'),
    v('script', 'guion', '/skrɪpt/', 'SCRIPT'), v('thriller', 'thriller, suspenso', '/ˈθrɪlə/', 'THRIL-ler'), v('documentary', 'documental', '/ˌdɒkjuˈmentri/', 'doc-u-MEN-ta-ry'),
    v('storyline', 'argumento', '/ˈstɔːrilaɪn/', 'STO-ry-line'), v('rating', 'calificación', '/ˈreɪtɪŋ/', 'RA-ting'), v('spoiler', 'spoiler, adelanto del final', '/ˈspɔɪlə/', 'SPOI-ler'),
    v('premiere', 'estreno', '/ˈpremieə/', 'PREM-iere'), v('gripping', 'absorbente, apasionante', '/ˈɡrɪpɪŋ/', 'GRIP-ping')
  ],
  examples: [
    { en: 'The director said that the film had been shot in only twenty days.', es: 'El director dijo que la película se había rodado en solo veinte días.' },
    { en: 'Several critics claimed that the adaptation was better than the original novel.', es: 'Varios críticos afirmaron que la adaptación era mejor que la novela original.' },
    { en: 'She asked me whether I had seen the trailer before the premiere.', es: 'Me preguntó si había visto el tráiler antes del estreno.' },
    { en: 'He admitted that he hadn’t read the book, but he said he would watch the series.', es: 'Admitió que no había leído el libro, pero dijo que vería la serie.' },
    { en: 'They told us that the sequel would be released the following year.', es: 'Nos dijeron que la secuela se estrenaría al año siguiente.' },
    { en: 'The actress warned fans not to expect a happy ending.', es: 'La actriz advirtió a los fans que no esperaran un final feliz.' },
    { en: 'I asked him where he had found the script, but he refused to answer.', es: 'Le pregunté dónde había encontrado el guion, pero se negó a responder.' },
    { en: 'The producer denied that the budget had been exceeded.', es: 'El productor negó que se hubiera superado el presupuesto.' }
  ],
  dialogue: [
    { speaker: 'Lucía', text: 'Did you hear what Marta said about the new thriller?', es: '¿Oíste lo que dijo Marta del nuevo thriller?' },
    { speaker: 'Andrés', text: 'No. She told me she had seen it at the premiere, but I didn’t ask any more.', es: 'No. Me dijo que la había visto en el estreno, pero no pregunté más.' },
    { speaker: 'Lucía', text: 'She said the plot was gripping but that the ending was disappointing.', es: 'Dijo que la trama era absorbente, pero que el final era decepcionante.' },
    { speaker: 'Andrés', text: 'Typical. She also said she would never watch a sequel again, didn’t she?', es: 'Típico. También dijo que nunca más vería una secuela, ¿no?' },
    { speaker: 'Lucía', text: 'That’s right. And she asked me if I wanted to go with her next week.', es: 'Así es. Y me preguntó si quería ir con ella la próxima semana.' },
    { speaker: 'Andrés', text: 'Did you say yes?', es: '¿Dijiste que sí?' },
    { speaker: 'Lucía', text: 'I told her I would think about it. I explained that I had already read the book, so I knew the story.', es: 'Le dije que lo pensaría. Le expliqué que ya había leído el libro, así que conocía la historia.' },
    { speaker: 'Andrés', text: 'Fair. The critics claimed that the adaptation was better than the novel, though.', es: 'Es justo. Aunque los críticos afirmaron que la adaptación era mejor que la novela.' },
    { speaker: 'Lucía', text: 'Really? One review said that the director had changed the ending completely.', es: '¿En serio? Una reseña decía que el director había cambiado el final por completo.' },
    { speaker: 'Andrés', text: 'Then perhaps she was disappointed because she expected the original ending.', es: 'Entonces quizá se decepcionó porque esperaba el final original.' },
    { speaker: 'Lucía', text: 'Possibly. She asked me not to spoil it for anyone, so let’s not say anything.', es: 'Posiblemente. Me pidió que no se lo arruinara a nadie, así que no digamos nada.' },
    { speaker: 'Andrés', text: 'Understood. I promise I won’t say a word.', es: 'Entendido. Prometo no decir una palabra.' }
  ],
  listening: {
    script: [
      { speaker: 'Presenter', text: 'Welcome. Your new film has just opened. What was the biggest challenge?' },
      { speaker: 'Director', text: 'Honestly, the budget. We had less money than for my previous film, so we had to be creative.' },
      { speaker: 'Presenter', text: 'Critics have said that the second half is slower than the first.' },
      { speaker: 'Director', text: 'I know. One critic wrote that it was too long, but I think the pace suits the story.' },
      { speaker: 'Presenter', text: 'Did you expect it to be a box-office hit?' },
      { speaker: 'Director', text: 'No. I told my team that we shouldn’t count on it. I’m just happy the audience is enjoying it.' },
      { speaker: 'Presenter', text: 'Will there be a sequel?' },
      { speaker: 'Director', text: 'I can’t promise anything, but I’m already working on an idea.' }
    ],
    questions: [
      mc('b1u08-l1', 'What was the biggest challenge for the director?', ['The budget', 'The cast', 'The weather'], 0, 'The budget was lower than for his previous film.'),
      mc('b1u08-l2', 'What did one critic say about the film?', ['It was too long', 'It was too short', 'It was perfect'], 0, 'One critic wrote that it was too long.'),
      mc('b1u08-l3', 'What did the director tell his team?', ['Not to count on a box-office hit', 'To expect a hit', 'To cancel the film'], 0, 'He told them they shouldn’t count on it.'),
      tf('b1u08-l4', 'The director confirms that there will be a sequel.', false, 'He says he can’t promise anything.'),
      mc('b1u08-l5', 'How does the director react to the criticism?', ['He accepts it but disagrees', 'He ignores it completely', 'He is angry'], 0, 'He says “I know”, but he thinks the pace suits the story.')
    ]
  },
  reading: {
    title: 'Is the book always better?',
    text: 'When a successful novel is turned into a film, fans usually have the same complaint: “The book was better.” Screenwriters, however, explained in a recent interview that adapting a book is not simply a matter of copying it. One of them said that a 400-page novel contains far more material than a two-hour film can hold, so scenes inevitably have to be cut. She added that some characters were merged, and that the ending was sometimes changed to work visually. Directors also told reporters that they had received hundreds of letters from fans, many of whom asked them to remain faithful to the original. Critics, on the other hand, argue that the most successful adaptations are those that reinterpret the story rather than reproduce it. A producer admitted that fans’ expectations could be a burden, but he insisted that adaptations could also bring new readers to the original books.',
    questions: [
      rc('b1u08-r1', 'What do fans usually complain about?', ['“The book was better.”', 'The film is too long', 'The soundtrack'], 0, 'Fans usually say that the book was better.'),
      rc('b1u08-r2', 'Why do scenes have to be cut?', ['A novel contains more material than a film can hold', 'Directors dislike scenes', 'Actors refuse to perform them'], 0, 'A 400-page novel contains far more material than a two-hour film.'),
      rc('b1u08-r3', 'What do critics argue?', ['Successful adaptations reinterpret the story', 'Adaptations must copy the book', 'Adaptations are always bad'], 0, 'The most successful adaptations reinterpret the story rather than reproduce it.'),
      rc('b1u08-r4', 'What did the producer say about fans’ expectations?', ['They can be a burden', 'They are irrelevant', 'They are always met'], 0, 'He admitted that fans’ expectations could be a burden.'),
      rc('b1u08-r5', 'What does the text suggest overall?', ['Adaptation involves creative choices, not copying', 'Films are always worse', 'Books are obsolete'], 0, 'It presents adaptation as a creative process with trade-offs.')
    ]
  },
  speaking: { prompt: 'Resume ante un compañero una película, serie o libro que hayas visto o leído recientemente y cuéntale lo que dijeron otras personas sobre él (amigos, críticos). Tu compañero te hace preguntas y luego las reporta a la clase.', tasks: ['Summarise the plot in 4 or 5 sentences without spoiling the ending.', 'Report what a friend or critic said, using at least three reporting verbs.', 'Report two questions your partner asks you: “He asked me if / where…”.', 'Give your own opinion and recommend (or not) with a reason.'] },
  writing: { prompt: 'Write a review (150 to 180 words) of a film, series or book. Include a short summary, what critics or other people said (reported speech), your opinion and a recommendation.', rubric: ['Clear structure: summary, opinion, recommendation.', 'Correct reported statements with backshift.', 'At least one reported question or command.', 'Uses vocabulary from the unit (plot, cast, gripping, rating…).'], model: 'The new thriller “Night Train” is a gripping story about a missing passenger. The critics said that the cast was excellent, and one of them claimed that it was the best film of the year. The director explained that he had shot most scenes in real trains. I thought the plot was original, although the ending was predictable. A friend asked me whether I would watch it again. I told her I would, but only at the cinema. I strongly recommend it to anyone who loves suspense.' },
  pronunciation: {
    items: [{ word: 'genre', ipa: '/ˈʒɒnrə/', stress: 'GEN-re' }, { word: 'documentary', ipa: '/ˌdɒkjuˈmentri/', stress: 'doc-u-MEN-ta-ry' }, { word: 'adaptation', ipa: '/ˌædæpˈteɪʃn/', stress: 'ad-ap-TA-tion' }, { word: 'premiere', ipa: '/ˈpremieə/', stress: 'PREM-iere' }, { word: 'spoiler', ipa: '/ˈspɔɪlə/', stress: 'SPOI-ler' }],
    tips: ['En el estilo indirecto, said that y told me that suelen pronunciarse deprisa: that es débil /ðət/.', 'La palabra genre viene del francés y empieza con el sonido /ʒ/ (como en “measure”).', 'En las preguntas indirectas la entonación baja: She asked if I had seen it. (no sube como una pregunta directa).']
  },
  exercises: [
    mc('b1u08-e1', 'She said she ___ the film the day before.', ['had seen', 'saw', 'has seen'], 0, 'Past simple → past perfect in reported speech.', 'Choose the correct reported form.'),
    fb('b1u08-e2', '“I will call you.” → He promised he ___ call me.', 'would', 'will → would.', undefined, 'Write the missing word.'),
    fb('b1u08-e3', '“Where do you live?” → She asked me where I ___.', 'lived', 'Present simple → past simple; no inversion.', undefined, 'Write the correct form.'),
    wo('b1u08-e4', ['asked', 'She', 'I', 'if', 'had', 'the', 'seen', 'trailer'], ['She', 'asked', 'if', 'I', 'had', 'seen', 'the', 'trailer'], 'Reported yes/no question with if.'),
    tf('b1u08-e5', 'In reported questions we keep the inversion (auxiliary before subject).', false, 'She asked if I had seen it (not “had I seen”).'),
    mt('b1u08-e6', 'Match each direct-speech expression with its reported form.', [['now', 'then'], ['tomorrow', 'the next day'], ['yesterday', 'the day before'], ['here', 'there']], 'Expressions of time and place change.'),
    tr('b1u08-e7', 'Report the sentence.', '“I’m enjoying the film,” he said.', 'He said he was enjoying the film', 'present continuous → past continuous.', ['He said that he was enjoying the film']),
    tr('b1u08-e8', 'Report the question.', '“Have you read the book?” she asked me.', 'She asked me if I had read the book', 'present perfect → past perfect; if for yes/no questions.', ['She asked me whether I had read the book']),
    rc('b1u08-e9', 'What can be inferred?', ['The production was fast and flexible', 'The film was shot slowly', 'The actors followed the script exactly'], 0, 'It was shot in twenty days and the actors improvised.', 'The director said that the film had been shot in only twenty days. He added that the actors had improvised several scenes.'),
    sa('b1u08-e10', 'Report 4 things that a friend told you recently (statements, a question and a command).', 'Model: “My friend said she was tired. She told me she had finished her book. She asked if I wanted to go to the cinema. She asked me not to tell anyone.” Check: backshift, if/whether and told/asked + to.')
  ],
  assessment: [
    mc('b1u08-t1', '“I’m tired,” she said. → She said she ___ tired.', ['was', 'is', 'has been'], 0, 'am → was.'),
    mc('b1u08-t2', '“Can you help me?” he asked. → He asked if I ___ help him.', ['could', 'can', 'will'], 0, 'can → could.'),
    fb('b1u08-t3', '“We have won.” → They said they ___ won.', 'had', 'present perfect → past perfect.', undefined, 'Write the missing word.'),
    fb('b1u08-t4', '“Don’t spoil the ending!” → She asked me ___ to spoil the ending.', 'not', 'ask someone not to + verb.', undefined, 'Write the missing word.'),
    tf('b1u08-t5', 'In reported speech, “tomorrow” often changes to “the next day”.', true, 'Time expressions change with the perspective.'),
    tf('b1u08-t6', '“She told that she was tired” is correct.', false, 'Tell needs a person: She told me that…; or: She said that…'),
    wo('b1u08-t7', ['where', 'He', 'asked', 'I', 'lived', 'me'], ['He', 'asked', 'me', 'where', 'I', 'lived'], 'Reported wh-question.'),
    mc('b1u08-t8', 'Choose the correct reported question.', ['She asked where I had been.', 'She asked where had I been.', 'She asked where was I.'], 0, 'No inversion in reported questions.'),
    tr('b1u08-t9', 'Report the sentence.', '“I will finish the script tomorrow,” she said.', 'She said she would finish the script the next day', 'will → would; tomorrow → the next day.', ['She said that she would finish the script the next day', 'She said she would finish the script the following day', 'She said that she would finish the script the following day']),
    mc('b1u08-t10', 'Which reporting verb expresses that someone says something is not true?', ['denied', 'suggested', 'promised'], 0, 'Deny = negar.')
  ],
  review: ['Reported speech moves the verb one tense back: present → past, past/perfect → past perfect, will → would, can → could.', 'Time and place words change: now → then, tomorrow → the next day, here → there.', 'Reported questions: if / whether or wh-word + normal word order (no inversion, no do/does).', 'Commands: told / asked + person + (not) to + verb.', 'Reporting verbs: say, tell (+ person), ask, explain, admit, deny, promise, warn, suggest, claim.']
};
export default unit;
