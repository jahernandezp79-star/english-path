import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'b2-u03', level: 'B2', unitNumber: 3, title: 'Narrative and Experience', subtitle: 'Recount events with detail, coherence and style',
  communicativeGoal: 'Relatar acontecimientos con detalle, coherencia y estilo: controlar el orden temporal, la duración y la perspectiva, y crear efectos como el suspenso o la reflexión.',
  objectives: ['Combinar los tiempos narrativos, incluido el Past Perfect Continuous.', 'Usar secuenciadores avanzados (no sooner… than, hardly… when, having + participio, upon + -ing).', 'Expresar hábitos pasados y planes frustrados (used to, would, was going to, was about to).', 'Narrar con voz propia: escenario, giro, reflexión y cierre.'],
  grammar: {
    title: 'Narrative tenses, Past Perfect Continuous and advanced sequencing',
    explanation: [
      'Una narración compleja combina varios tiempos con funciones distintas: el Past Simple cuenta los hechos principales; el Past Continuous describe el escenario o lo que estaba en curso; el Past Perfect (had + participio) señala lo anterior a otro momento del pasado; y el Past Perfect Continuous (had been + -ing) subraya la duración o la causa de una situación anterior: She was exhausted because she had been working since dawn.',
      'Diferencia clave: had worked indica una acción terminada antes del momento de referencia; had been working destaca el proceso y a menudo su resultado visible (His hands were dirty; he had been gardening). Los verbos de estado no suelen usar el continuo (He had known her for years).',
      'Hábitos y estados pasados: used to (hábito o estado que ya no existe) y would (solo para hábitos, no para estados: Every morning my grandfather would walk to the market). Para planes que no se cumplieron: was going to / was about to + verbo (We were about to leave when the phone rang).',
      'Secuenciadores avanzados: la inversión tras no sooner, hardly y scarcely (No sooner had we arrived than the storm broke; Hardly had he spoken when the lights went out); la participial con having (Having read the letter twice, she folded it carefully) y con upon / on + -ing (Upon reaching the summit, we saw the sunrise); y adverbios como subsequently, thereafter, in the meantime, shortly afterwards, by then.',
      'Estilo narrativo: alterna oraciones largas y cortas para controlar el ritmo, empieza in medias res si quieres crear suspenso, usa el flashback con el Past Perfect y cierra con una reflexión (In retrospect…). El registro cambia: en una anécdota oral se usan expresiones como as luck would have it; en un relato escrito, estructuras más literarias.'
    ],
    forms: [
      { label: 'Narrative tenses', lines: ['I was walking home when I realised I had been following the wrong route for an hour.', 'She was exhausted; she had been working since dawn.', 'We were about to leave when the phone rang.', 'He had known her for years, yet he had never seen her so angry.'] },
      { label: 'Advanced sequencing', lines: ['No sooner had we arrived than the storm broke.', 'Hardly had he spoken when the lights went out.', 'Having read the letter twice, she folded it carefully.', 'Upon reaching the summit, we were greeted by silence.'] },
      { label: 'Past habits and plans', lines: ['We used to spend every summer there.', 'Every morning my grandfather would walk to the market.', 'I was going to call you, but I forgot.', 'It was to be the last time we met.'] },
      { label: 'Useful expressions and collocations', lines: ['against all odds; as luck would have it', 'in the nick of time; the last straw', 'to my dismay / relief; the penny dropped', 'from that moment on; at the crack of dawn', 'little did I know; in retrospect', 'a turning point; the aftermath of…', 'recount an experience; leave a lasting impression', 'a sense of dread; an unforeseen twist'] }
    ]
  },
  vocabulary: [
    v('vivid', 'vívido', '/ˈvɪvɪd/', 'VIV-id'), v('recount', 'relatar', '/rɪˈkaʊnt/', 're-COUNT'), v('unfold', 'desarrollarse', '/ʌnˈfəʊld/', 'un-FOLD'),
    v('ordeal', 'calvario, prueba dura', '/ɔːˈdiːl/', 'or-DEAL'), v('bewildered', 'desconcertado', '/bɪˈwɪldəd/', 'be-WIL-dered'), v('reluctant', 'reacio', '/rɪˈlʌktənt/', 're-LUC-tant'),
    v('unforeseen', 'imprevisto', '/ˌʌnfɔːˈsiːn/', 'un-for-SEEN'), v('gruelling', 'agotador', '/ˈɡruːəlɪŋ/', 'GRU-el-ling'), v('glimpse', 'vistazo, atisbo', '/ɡlɪmps/', 'GLIMPSE'),
    v('pivotal', 'decisivo', '/ˈpɪvətl/', 'PIV-o-tal'), v('aftermath', 'secuelas, consecuencias', '/ˈɑːftəmæθ/', 'AF-ter-math'), v('harrowing', 'desgarrador', '/ˈhærəʊɪŋ/', 'HAR-row-ing'),
    v('serendipity', 'casualidad afortunada', '/ˌserənˈdɪpəti/', 'ser-en-DIP-i-ty'), v('retrospect', 'retrospectiva', '/ˈretrəspekt/', 'RET-ro-spect'), v('embark on', 'emprender', '/ɪmˈbɑːk ɒn/', 'em-BARK on'),
    v('endure', 'soportar', '/ɪnˈdjʊə/', 'en-DURE'), v('bleak', 'desolador', '/bliːk/', 'BLEAK'), v('exhilarating', 'emocionante, estimulante', '/ɪɡˈzɪləreɪtɪŋ/', 'ex-HIL-a-rat-ing'),
    v('relentless', 'implacable', '/rɪˈlentləs/', 're-LENT-less'), v('mundane', 'mundano, rutinario', '/mʌnˈdeɪn/', 'mun-DANE'), v('cliffhanger', 'final en suspenso', '/ˈklɪfhæŋə/', 'CLIFF-hang-er'),
    v('turning point', 'punto de inflexión', '/ˈtɜːnɪŋ pɔɪnt/', 'TURN-ing point')
  ],
  examples: [
    { en: 'She had been rehearsing the speech for weeks, so she was surprised to feel so nervous.', es: 'Llevaba semanas ensayando el discurso, así que le sorprendió sentirse tan nerviosa.' },
    { en: 'No sooner had the verdict been announced than the crowd outside began to disperse.', es: 'Apenas se anunció el veredicto, la multitud de afuera comenzó a dispersarse.' },
    { en: 'Having endured a gruelling climb, they were rewarded with a glimpse of the valley at dawn.', es: 'Tras soportar una ascensión agotadora, fueron recompensados con un atisbo del valle al amanecer.' },
    { en: 'Hardly had we taken our seats when the lights went out and the film began.', es: 'Apenas nos habíamos sentado cuando se apagaron las luces y empezó la película.' },
    { en: 'Every evening my grandmother would sit by the window and recount stories from her childhood.', es: 'Cada tarde mi abuela se sentaba junto a la ventana y relataba historias de su infancia.' },
    { en: 'I was about to give up when, quite by serendipity, I ran into the one person who could help.', es: 'Estaba a punto de rendirme cuando, por pura casualidad, me encontré con la única persona que podía ayudar.' },
    { en: 'Upon reading the final page, he realised that he had misjudged the narrator all along.', es: 'Al leer la última página, se dio cuenta de que había juzgado mal al narrador desde el principio.' },
    { en: 'In retrospect, that conversation was the turning point of my career, though I hardly noticed it at the time.', es: 'En retrospectiva, esa conversación fue el punto de inflexión de mi carrera, aunque apenas lo noté entonces.' }
  ],
  dialogue: [
    { speaker: 'Clara', text: 'I still can’t believe we got through that trek. We had been walking for six hours when the storm hit.', es: 'Todavía no puedo creer que sobreviviéramos a esa caminata. Llevábamos seis horas caminando cuando llegó la tormenta.' },
    { speaker: 'Jon', text: 'And no sooner had we reached the hut than the roof started leaking.', es: 'Y apenas llegamos a la cabaña, el techo empezó a gotear.' },
    { speaker: 'Clara', text: 'I was exhausted; I hadn’t slept properly for two days. I remember thinking, this is it, we’re not going to make it.', es: 'Estaba agotada; no había dormido bien en dos días. Recuerdo pensar: esto es el final, no lo lograremos.' },
    { speaker: 'Jon', text: 'Funny, I was convinced we would. Or maybe I was pretending, to keep you calm.', es: 'Curioso, yo estaba convencido de que sí. O quizá fingía para mantenerte tranquila.' },
    { speaker: 'Clara', text: 'It worked. You kept telling stories while the wind was howling.', es: 'Funcionó. No parabas de contar historias mientras el viento aullaba.' },
    { speaker: 'Jon', text: 'Well, my grandfather used to say that a good story shortens any night. Anyway, as luck would have it, the guide turned up at dawn.', es: 'Bueno, mi abuelo decía que una buena historia acorta cualquier noche. En fin, por suerte el guía apareció al amanecer.' },
    { speaker: 'Clara', text: 'Just in the nick of time, considering we had been rationing the last of the water.', es: 'Justo a tiempo, considerando que llevábamos tiempo racionando lo último del agua.' },
    { speaker: 'Jon', text: 'Having survived that, I can’t say I’ve ever been afraid of a storm again.', es: 'Después de sobrevivir a eso, creo que no he vuelto a tenerle miedo a una tormenta.' },
    { speaker: 'Clara', text: 'I have. But I’ve never regretted going. In retrospect, it was the turning point of the whole trip.', es: 'Yo sí. Pero nunca me arrepentí de ir. En retrospectiva, fue el punto de inflexión de todo el viaje.' },
    { speaker: 'Jon', text: 'Mine too. Until then I had been treating it like a holiday; afterwards, it felt like an achievement.', es: 'El mío también. Hasta entonces lo había tratado como unas vacaciones; después, se sintió como un logro.' },
    { speaker: 'Clara', text: 'That’s why we still talk about it fifteen years later.', es: 'Por eso seguimos hablando de ello quince años después.' },
    { speaker: 'Jon', text: 'And why we’re about to book the next one, apparently.', es: 'Y por eso estamos a punto de reservar el siguiente, al parecer.' }
  ],
  listening: {
    script: [
      { speaker: 'Host', text: 'Tell us about the moment that changed your career.' },
      { speaker: 'Guest', text: 'I had been working as a lawyer for nearly ten years, and I was thinking about leaving, but I couldn’t decide what to do instead.' },
      { speaker: 'Host', text: 'And then?' },
      { speaker: 'Guest', text: 'One Tuesday, I was waiting for a delayed train when a stranger started chatting to me. It turned out that she ran a small school for refugee children, and she was desperate for volunteers.' },
      { speaker: 'Host', text: 'So you volunteered?' },
      { speaker: 'Guest', text: 'Not immediately. I was about to say no when I realised I had been looking for a reason to do exactly that.' },
      { speaker: 'Host', text: 'Was it difficult?' },
      { speaker: 'Guest', text: 'It was gruelling at first. No sooner had I started than I realised how little I knew. But within a year I had left law and was teaching full time. My only regret is that I hadn’t done it earlier.' }
    ],
    questions: [
      mc('b2u03-l1', 'How long had the guest been a lawyer?', ['Nearly ten years', 'Two years', 'Five years'], 0, 'She had been working as a lawyer for nearly ten years.'),
      mc('b2u03-l2', 'How did she meet the school director?', ['A chat while waiting for a delayed train', 'At a conference', 'At a job interview'], 0, 'A stranger started chatting to her at the station.'),
      mc('b2u03-l3', 'How did she react at first?', ['She was about to refuse', 'She accepted at once', 'She ignored the request'], 0, 'She was about to say no.'),
      tf('b2u03-l4', 'The guest regrets changing careers.', false, 'Her only regret is that she hadn’t done it earlier.'),
      mc('b2u03-l5', 'What does “I had been looking for a reason to do exactly that” suggest?', ['She already wanted to change but needed a push', 'She disliked teaching', 'She was forced to volunteer'], 0, 'She had been searching for a reason, so the meeting gave her the push.')
    ]
  },
  reading: {
    title: 'The unopened letters',
    text: 'When Elena’s grandmother died, the family spent a week sorting through the house in which she had lived for fifty years. Elena, who had been dreading the task, was surprised to find the work almost pleasant: every drawer seemed to hold a small story. It was in the attic, however, that she came across a bundle of letters tied with a blue ribbon. They were addressed to her grandmother in a handwriting she did not recognise, and the earliest was dated 1962. Having hesitated for a long time, she finally opened one. The writer, a man named Tomás, apologised for his silence and explained that he had been working abroad since the spring, hoping to save enough money to return. Reading on, Elena realised that her grandmother could never have read these letters, since most of the envelopes were still sealed, and that someone must have hidden them. No sooner had she grasped this than her aunt appeared at the door and, seeing the ribbon, turned pale. “I should have burned those years ago,” she murmured. Elena said nothing; for the first time in her life, she suspected that the family history she had been told was only half the story.',
    questions: [
      rc('b2u03-r1', 'How had Elena felt about sorting the house?', ['She had been dreading it', 'She had been excited', 'She had been indifferent'], 0, 'She had been dreading the task.'),
      rc('b2u03-r2', 'What did Tomás say in the letter she opened?', ['He apologised for his silence and said he was working abroad', 'He announced his wedding', 'He asked for money'], 0, 'He apologised and explained he had been working abroad.'),
      rc('b2u03-r3', 'What can be inferred about the grandmother?', ['She never read the letters', 'She replied to every letter', 'She wrote to Tomás'], 0, 'Most envelopes were still sealed.'),
      rc('b2u03-r4', 'What does the aunt’s reaction suggest?', ['She had hidden the letters', 'She didn’t know about them', 'She was pleased'], 0, 'She turned pale and said she should have burned them.'),
      rc('b2u03-r5', 'What effect does the ending create?', ['Suspense and ambiguity about the family history', 'A happy resolution', 'Humour'], 0, 'It leaves a mystery open.')
    ]
  },
  speaking: { prompt: 'Cuenta una experiencia importante (real o inventada) durante 2 a 3 minutos, con la estructura: escenario, hechos principales, un giro o momento decisivo y una reflexión final. Tu compañero escucha, hace preguntas de detalle y luego resume lo que entendió.', tasks: ['Set the scene with the Past Continuous and the Past Perfect Continuous (“I had been … when …”).', 'Use at least one advanced sequencer (no sooner… than, having + participle, upon + -ing).', 'Include a past habit with used to or would and one plan that didn’t happen with was going to / was about to.', 'Close with a reflection using in retrospect or a similar expression.'] },
  writing: { prompt: 'Write a narrative (230 to 270 words) that begins with: “It was the kind of morning that I would remember for years.” Control time with a variety of narrative tenses, include a flashback, at least two advanced sequencers and a reflective ending. Vary sentence length to create rhythm.', rubric: ['Appropriate use of narrative tenses, including the Past Perfect Continuous.', 'At least two advanced sequencers and one flashback.', 'Variety in sentence length and some figurative or vivid vocabulary.', 'A clear turning point and a reflective ending.'], model: 'It was the kind of morning that I would remember for years. I had been waiting at the station since dawn, rehearsing what I would say, when I saw her step off the train. Hardly had I opened my mouth when she smiled, and the speech vanished. Ten years earlier, we had quarrelled over something I could no longer even recall; since then I had been telling myself that time would settle everything. It had not. Upon reaching me, she simply said my name. No sooner had she said it than I understood that my silence, not hers, had been the real barrier. In retrospect, that moment was a turning point: we talked until the station emptied, and, although nothing was resolved that day, everything had changed.' },
  pronunciation: {
    items: [{ word: 'serendipity', ipa: '/ˌserənˈdɪpəti/', stress: 'ser-en-DIP-i-ty' }, { word: 'exhilarating', ipa: '/ɪɡˈzɪləreɪtɪŋ/', stress: 'ex-HIL-a-rat-ing' }, { word: 'aftermath', ipa: '/ˈɑːftəmæθ/', stress: 'AF-ter-math' }, { word: 'bewildered', ipa: '/bɪˈwɪldəd/', stress: 'be-WIL-dered' }, { word: 'gruelling', ipa: '/ˈɡruːəlɪŋ/', stress: 'GRU-el-ling' }],
    tips: ['En una anécdota oral, usa el ritmo: acelera en la acción y baja la velocidad antes del giro (… and then, | silence).', 'Had been suena /həd biːn/ o /əd bɪn/ en el habla rápida; en la contracción I’d been, el sonido /d/ es corto.', 'En los sonidos finales -ed, recuerda /t/ (glanced), /d/ (endured) o /ɪd/ (recounted).']
  },
  exercises: [
    mc('b2u03-e1', 'She was exhausted because she ___ all night.', ['had been working', 'was working', 'has worked'], 0, 'Duration before a past moment with a visible result → had been working.', 'Choose the best tense.'),
    fb('b2u03-e2', 'No sooner ___ we arrived than the storm broke.', 'had', 'No sooner + had + subject + participle + than.', undefined, 'Write the missing word.'),
    fb('b2u03-e3', '___ finished the report, she left the office.', 'Having', 'Having + participle shows that one action comes before another.', undefined, 'Write the missing word.'),
    wo('b2u03-e4', ['had', 'Hardly', 'he', 'when', 'spoken', 'the', 'lights', 'went', 'out'], ['Hardly', 'had', 'he', 'spoken', 'when', 'the', 'lights', 'went', 'out'], 'Hardly + had + subject + participle + when.'),
    tf('b2u03-e5', 'The Past Perfect Continuous emphasises duration before a past moment.', true, 'had been + -ing highlights the process.'),
    mt('b2u03-e6', 'Match each structure with its use.', [['was about to', 'on the point of doing something'], ['used to', 'past habit or state no longer true'], ['would (habitual)', 'repeated past action in narratives'], ['had been + -ing', 'duration before a past moment']], 'Each structure has a narrative function.'),
    tr('b2u03-e7', 'Rewrite with “no sooner”.', 'We had just sat down. The storm broke.', 'No sooner had we sat down than the storm broke', 'No sooner + inversion + than.'),
    tr('b2u03-e8', 'Rewrite with “having + participle”.', 'After she had read the letter twice, she folded it.', 'Having read the letter twice, she folded it', 'Having + participle, main clause.', ['Having read the letter twice she folded it']),
    rc('b2u03-e9', 'What can be inferred?', ['The cancellation was emotionally difficult', 'Marcos had just started training', 'He was happy to stop'], 0, 'After months of training, the cancellation felt like the end of a long effort.', 'Marcos had been training for months when the injury occurred, so the cancellation of the race felt like the end of a long effort rather than a mere setback.'),
    sa('b2u03-e10', 'Write a narrative paragraph (6 to 8 sentences) using at least four narrative tenses (including the Past Perfect Continuous) and one advanced sequencing structure.', 'Model: “I had been walking for hours when I realised I was lost. It was raining and my phone had died. No sooner had I sat down than a stranger offered me an umbrella. In retrospect, it was the start of a long friendship.” Check: variety of tenses, sequencers and a reflective ending.')
  ],
  assessment: [
    mc('b2u03-t1', 'When I arrived, my friends ___ for an hour.', ['had been waiting', 'were waiting', 'waited'], 0, 'Duration before a past moment.'),
    mc('b2u03-t2', 'No sooner ___ I sat down than the phone rang.', ['had', 'did', 'have'], 0, 'No sooner had + subject + participle.'),
    fb('b2u03-t3', 'We were ___ to leave when the alarm went off.', 'about', 'be about to = on the point of.', undefined, 'Write the missing word.'),
    fb('b2u03-t4', 'Upon ___ the summit, we saw the sunrise.', 'reaching', 'upon + -ing.', undefined, 'Write the correct form of “reach”.'),
    tf('b2u03-t5', '“Used to” and “would” can both describe past habits, but only “used to” can describe past states.', true, 'He used to be shy (not “would be shy”).'),
    tf('b2u03-t6', 'The Past Perfect Continuous is used for the main events in a story.', false, 'Main events use the Past Simple.'),
    wo('b2u03-t7', ['we', 'than', 'No', 'sooner', 'arrived', 'had', 'the', 'storm', 'broke'], ['No', 'sooner', 'had', 'we', 'arrived', 'than', 'the', 'storm', 'broke'], 'No sooner + inversion + than.'),
    mc('b2u03-t8', 'Which sentence emphasises duration before a past moment?', ['She had been waiting for hours.', 'She had waited.', 'She waited.'], 0, 'had been + -ing emphasises the process.'),
    tr('b2u03-t9', 'Rewrite with “having + participle”.', 'After I had finished the course, I applied for a job.', 'Having finished the course, I applied for a job', 'Having + participle.', ['Having finished the course I applied for a job']),
    mc('b2u03-t10', 'Choose the best opening for a suspenseful narrative.', ['I was about to give up when I heard a knock.', 'I give up and then there is a knock.', 'I am giving up when I heard knocking.'], 0, 'Narrative tenses and a sudden event.')
  ],
  review: ['Narrative tenses: Past Simple (events), Past Continuous (scene), Past Perfect (earlier), Past Perfect Continuous (duration or cause before a past moment).', 'Past habits: used to (habits and states), would (habits only); plans that did not happen: was going to / was about to.', 'Advanced sequencers: no sooner… than, hardly… when, having + participle, upon + -ing, subsequently, thereafter.', 'Narrative style: vary sentence length, use flashback, create a turning point and a reflective ending.', 'Expressions: as luck would have it, in the nick of time, in retrospect, little did I know.']
};
export default unit;
