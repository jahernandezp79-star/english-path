import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'b2-u08', level: 'B2', unitNumber: 8, title: 'Culture and Society', subtitle: 'Analyse social phenomena with emphasis and precision',
  communicativeGoal: 'Analizar fenómenos sociales y culturales con precisión, destacando lo importante con estructuras enfáticas y evitando generalizaciones simplistas.',
  objectives: ['Usar oraciones enfáticas (cleft sentences) para destacar información.', 'Usar la inversión tras adverbiales negativos (never, rarely, not only, only when, under no circumstances, little).', 'Combinar énfasis, cautela y matiz al analizar fenómenos sociales.', 'Distinguir cuándo el énfasis es apropiado (registro formal, oral o escrito) y cuándo resulta artificial.'],
  grammar: {
    title: 'Emphasis and an introduction to inversion',
    explanation: [
      'El énfasis permite dirigir la atención del lector hacia un elemento concreto. Las oraciones hendidas (cleft sentences) dividen la oración en dos partes: It was the rent that changed the neighbourhood (énfasis en el sujeto); It was in 1995 that the law changed; What worries me is the lack of housing; All I’m saying is that…; The reason why it failed is that…',
      'La inversión (el auxiliar o el verbo ir delante del sujeto) aparece tras adverbiales negativos o restrictivos situados al principio de la oración, sobre todo en registro formal o literario: Never have I seen such a crowd; Rarely do you see such rapid change; Seldom does the data support such claims; Little did the council realise…; Not only did she apologise, but she also resigned; Only when we address inequality can we move forward; Under no circumstances should rents be left to the market; No sooner had… than… (U3). También con so / such + that: So strong was the demand that prices doubled.',
      'Otros recursos de énfasis: el do enfático (I do think the library is positive), los reflexivos enfáticos (the president herself), los intensificadores (utterly, absolutely, by no means) y la repetición con paralelismo. En la lengua hablada, el énfasis se marca también con la entonación y la pausa.',
      'Precaución: la inversión es propia de la lengua escrita formal, de los discursos y de la literatura; en una conversación informal suena artificial si se abusa de ella. Úsala con moderación y con un propósito retórico claro.',
      'Al analizar fenómenos sociales evita las generalizaciones absolutas (everyone, always, never) y distingue entre lo observado y lo interpretado. El énfasis debe recaer en lo que está respaldado por pruebas, no en afirmaciones de opinión disfrazadas de hechos.'
    ],
    forms: [
      { label: 'Cleft sentences', lines: ['It was the rent that changed the neighbourhood.', 'It was in 1995 that the law changed.', 'What worries me is who benefits from the change.', 'The reason why it failed is that nobody was consulted.'] },
      { label: 'Inversion after negative adverbials', lines: ['Never have I seen such a crowd.', 'Rarely do you see change happen so fast.', 'Not only did she apologise, but she also resigned.', 'Only when we address inequality can we move forward.'] },
      { label: 'More emphasis', lines: ['Little did the council realise the consequences.', 'Under no circumstances should rents be left to the market.', 'So strong was the backlash that the plan was withdrawn.', 'I do think the library is a positive thing.'] },
      { label: 'Useful expressions and collocations', lines: ['the social fabric; a sense of belonging', 'bridge the gap; widen the gap', 'break down barriers; fall through the cracks', 'a growing divide; a shift in attitudes', 'a deep-rooted tradition; challenge stereotypes', 'bear the cost; reap the benefits', 'a mixed blessing; a double-edged sword', 'at the grassroots level'] }
    ]
  },
  vocabulary: [
    v('demographic', 'demográfico; grupo demográfico', '/ˌdeməˈɡræfɪk/', 'dem-o-GRAPH-ic'), v('social cohesion', 'cohesión social', '/ˌsəʊʃl kəʊˈhiːʒn/', 'so-cial co-HE-sion'), v('globalisation', 'globalización', '/ˌɡləʊbəlaɪˈzeɪʃn/', 'glo-bal-i-SA-tion'),
    v('assimilation', 'asimilación', '/əˌsɪməˈleɪʃn/', 'as-sim-i-LA-tion'), v('stereotype', 'estereotipo', '/ˈsteriətaɪp/', 'STE-re-o-type'), v('inequality', 'desigualdad', '/ˌɪnɪˈkwɒləti/', 'in-e-QUAL-i-ty'),
    v('urbanisation', 'urbanización', '/ˌɜːbənaɪˈzeɪʃn/', 'ur-ban-i-SA-tion'), v('subculture', 'subcultura', '/ˈsʌbkʌltʃə/', 'SUB-cul-ture'), v('norm', 'norma social', '/nɔːm/', 'NORM'),
    v('taboo', 'tabú', '/təˈbuː/', 'ta-BOO'), v('ritual', 'ritual', '/ˈrɪtʃuəl/', 'RIT-u-al'), v('diaspora', 'diáspora', '/daɪˈæspərə/', 'di-AS-po-ra'),
    v('gentrification', 'gentrificación', '/ˌdʒentrɪfɪˈkeɪʃn/', 'gen-tri-fi-CA-tion'), v('polarisation', 'polarización', '/ˌpəʊləraɪˈzeɪʃn/', 'po-lar-i-SA-tion'), v('mainstream', 'corriente principal', '/ˈmeɪnstriːm/', 'MAIN-stream'),
    v('marginalised', 'marginado', '/ˈmɑːdʒɪnəlaɪzd/', 'MAR-gin-al-ised'), v('social mobility', 'movilidad social', '/ˌsəʊʃl məʊˈbɪləti/', 'so-cial mo-BIL-i-ty'), v('generation gap', 'brecha generacional', '/ˌdʒenəˈreɪʃn ɡæp/', 'gen-er-A-tion gap'),
    v('consumerism', 'consumismo', '/kənˈsjuːmərɪzəm/', 'con-SU-mer-ism'), v('conformity', 'conformismo', '/kənˈfɔːməti/', 'con-FOR-mi-ty'), v('grassroots', 'de base, popular', '/ˈɡrɑːsruːts/', 'GRASS-roots'),
    v('backlash', 'reacción adversa', '/ˈbæklæʃ/', 'BACK-lash')
  ],
  examples: [
    { en: 'It was not the new cafés that transformed the neighbourhood, but the rents that followed them.', es: 'No fueron los nuevos cafés los que transformaron el barrio, sino los alquileres que los siguieron.' },
    { en: 'Rarely do we stop to ask who benefits from changes that are presented as progress.', es: 'Rara vez nos detenemos a preguntar quién se beneficia de cambios que se presentan como progreso.' },
    { en: 'Not only has globalisation widened opportunities, but it has also deepened some inequalities.', es: 'La globalización no solo ha ampliado oportunidades, sino que también ha profundizado algunas desigualdades.' },
    { en: 'What distinguishes a subculture from the mainstream is not its age but its relationship to dominant norms.', es: 'Lo que distingue a una subcultura de la corriente principal no es su antigüedad, sino su relación con las normas dominantes.' },
    { en: 'Little did policymakers anticipate that the measure would provoke such a backlash.', es: 'Poco anticiparon los responsables políticos que la medida provocaría semejante reacción adversa.' },
    { en: 'Only when marginalised groups are given a voice can genuine social cohesion be built.', es: 'Solo cuando se da voz a los grupos marginados puede construirse una cohesión social genuina.' },
    { en: 'So rapid was the urbanisation of the region that infrastructure could not keep pace.', es: 'Tan rápida fue la urbanización de la región que la infraestructura no pudo seguir el ritmo.' },
    { en: 'I do think that the generation gap is exaggerated; the real divide is economic.', es: 'Sí creo que la brecha generacional se exagera; la verdadera división es económica.' }
  ],
  dialogue: [
    { speaker: 'Sofia', text: 'What I find fascinating about the new café culture in our neighbourhood is how quickly it has changed the social fabric.', es: 'Lo que me fascina de la nueva cultura de cafés en nuestro barrio es lo rápido que ha cambiado el tejido social.' },
    { speaker: 'Marek', text: 'Hmm, was it the cafés that changed things, or the people who moved in?', es: 'Mmm, ¿fueron los cafés los que cambiaron las cosas, o la gente que se mudó?' },
    { speaker: 'Sofia', text: 'It was the rents, really. Not only have prices doubled, but long-standing shops have disappeared.', es: 'Fueron los alquileres, en realidad. No solo se han duplicado los precios, sino que han desaparecido tiendas de toda la vida.' },
    { speaker: 'Marek', text: 'Rarely do you see that kind of change happen so fast. And yet I’d hesitate to call it purely negative.', es: 'Rara vez se ve un cambio así de rápido. Y aun así, dudaría en llamarlo puramente negativo.' },
    { speaker: 'Sofia', text: 'Nor would I. What worries me is not the change itself but who gets to benefit from it.', es: 'Yo tampoco. Lo que me preocupa no es el cambio en sí, sino quién se beneficia.' },
    { speaker: 'Marek', text: 'Fair. It’s the older residents who bear the cost, isn’t it?', es: 'Justo. Son los residentes mayores quienes cargan con el costo, ¿no?' },
    { speaker: 'Sofia', text: 'Precisely. Little did the council realise, when it approved the redevelopment, that it would push out the very community that made the area attractive.', es: 'Precisamente. El ayuntamiento no imaginó, al aprobar la reurbanización, que expulsaría a la misma comunidad que hacía atractivo el barrio.' },
    { speaker: 'Marek', text: 'Though, to be fair, it’s the council that also funded the new library.', es: 'Aunque, para ser justos, es el ayuntamiento el que también financió la nueva biblioteca.' },
    { speaker: 'Sofia', text: 'True. I do think the library is a positive thing. All I’m saying is that it can’t compensate for losing affordable housing.', es: 'Cierto. Sí creo que la biblioteca es algo positivo. Lo único que digo es que no puede compensar la pérdida de vivienda asequible.' },
    { speaker: 'Marek', text: 'So what would you propose?', es: '¿Y qué propondrías?' },
    { speaker: 'Sofia', text: 'Under no circumstances should rents be left entirely to the market; at the very least there should be some protection for existing tenants.', es: 'En ningún caso deberían dejarse los alquileres totalmente al mercado; al menos debería haber alguna protección para los inquilinos actuales.' },
    { speaker: 'Marek', text: 'Not an easy sell politically, but I take your point.', es: 'No es fácil de vender políticamente, pero entiendo tu punto.' }
  ],
  listening: {
    script: [
      { speaker: 'Host', text: 'People often talk about a generation gap. Is it real?' },
      { speaker: 'Sociologist', text: 'Partly. What the evidence suggests is that differences between generations are often smaller than differences within them. It’s the stereotypes that are exaggerated.' },
      { speaker: 'Host', text: 'Such as?' },
      { speaker: 'Sociologist', text: 'That young people are uniformly addicted to screens, or that older people can’t adapt to technology. Seldom do the data support such sweeping claims.' },
      { speaker: 'Host', text: 'So why do the stereotypes persist?' },
      { speaker: 'Sociologist', text: 'Not only are they simple, but they’re also useful; they give each group a convenient explanation for tensions that really have economic causes, such as housing or pensions.' },
      { speaker: 'Host', text: 'Is there a real source of conflict, then?' },
      { speaker: 'Sociologist', text: 'Yes. What matters is not age itself but unequal opportunities. Only when we address that can we move beyond the stereotypes.' }
    ],
    questions: [
      mc('b2u08-l1', 'What does the evidence suggest about differences between generations?', ['Differences within generations are often larger than between them', 'Generations are completely different', 'Generations are identical'], 0, 'Differences between generations are often smaller than differences within them.'),
      mc('b2u08-l2', 'Why do stereotypes persist?', ['They are simple and give convenient explanations for economic tensions', 'They are true', 'They are illegal'], 0, 'They are simple and useful as explanations for economic tensions.'),
      mc('b2u08-l3', 'What is the real source of conflict?', ['Unequal opportunities', 'Technology', 'Music'], 0, 'What matters is unequal opportunities.'),
      tf('b2u08-l4', 'The sociologist says the data often support sweeping claims about young people.', false, 'She says seldom do the data support such sweeping claims.'),
      mc('b2u08-l5', 'What can be inferred about the sociologist’s view of stereotypes?', ['They distract from structural problems', 'They are harmless', 'They explain everything'], 0, 'They offer easy explanations that hide the economic causes.')
    ]
  },
  reading: {
    title: 'Why do traditions endure?',
    text: 'It is tempting to think of traditions as relics of the past, kept alive by habit alone. Yet anthropologists have long argued that what makes a tradition endure is not its age but its function. Never has this been clearer than in the case of rituals that seem, at first sight, entirely irrational. Take the custom, observed in numerous societies, of gathering the whole family for a shared meal on a particular day: it is the act of coming together, rather than the menu, that matters. Not only does the ritual reinforce bonds; it also gives members a sense of belonging that outlasts any individual. Critics, however, point out that traditions can also be used to justify exclusion, and that those who question them are often accused of disloyalty. Such was the pressure in some communities that dissenters preferred silence to confrontation. Little attention is paid, in these cases, to the experience of those who feel marginalised. A more nuanced view holds that traditions are neither sacred nor disposable: they evolve, as societies renegotiate what they value. It is precisely this capacity to adapt, many scholars argue, that explains why the most resilient traditions are rarely the most rigid.',
    questions: [
      rc('b2u08-r1', 'What makes a tradition endure, according to anthropologists?', ['Its function, not its age', 'Its age', 'Legal protection'], 0, 'It is not its age but its function.'),
      rc('b2u08-r2', 'What does the shared family meal illustrate?', ['The act of coming together matters more than the menu', 'The menu is the key element', 'Meals are irrelevant'], 0, 'It is the act of coming together, rather than the menu, that matters.'),
      rc('b2u08-r3', 'What criticism is made of traditions?', ['They can justify exclusion and silence dissent', 'They are too expensive', 'They are too new'], 0, 'They can be used to justify exclusion, and critics are accused of disloyalty.'),
      rc('b2u08-r4', 'What does the writer suggest about traditions that adapt?', ['They are often the most resilient', 'They disappear quickly', 'They are the most rigid'], 0, 'The most resilient traditions are rarely the most rigid.'),
      rc('b2u08-r5', 'What is the writer’s attitude?', ['Nuanced: neither idealising nor dismissing traditions', 'Hostile', 'Nostalgic'], 0, 'The writer calls traditions neither sacred nor disposable.')
    ]
  },
  speaking: { prompt: 'Análisis oral de un fenómeno social o cultural de tu entorno (por ejemplo, cambios en un barrio, una tradición, la migración o el consumo de redes sociales). Presenta la idea durante 3 minutos y responde a las preguntas críticas de tu compañero.', tasks: ['Use at least two cleft sentences to highlight key points (It was… that…; What… is…).', 'Use at least two inversions after negative adverbials (Rarely…, Not only…, Only when…).', 'Qualify your claims and avoid sweeping generalisations.', 'Answer a challenge by conceding a point and re-emphasising your main argument.'] },
  writing: { prompt: 'Write an analytical essay (230 to 270 words) on a social or cultural change in your community (for example, urban transformation, a tradition under pressure, or generational attitudes). Describe the change, analyse its causes and effects, and give your own evaluation. Use at least three cleft sentences, three inversions and appropriate hedging.', rubric: ['Accurate and controlled use of cleft sentences and inversion.', 'Balanced analysis: causes, effects, different perspectives.', 'Avoids sweeping generalisations and uses hedging.', 'Formal register and a clear thesis and conclusion.'], model: 'Over the past decade, our city centre has changed beyond recognition. It was not the arrival of new businesses that altered its character, but the rapid rise in rents that followed. Not only have long-standing shops disappeared; many older residents have also been forced to leave. Rarely does a change of this scale receive public scrutiny until it is too late. What the council failed to anticipate was the speed of the process. Only when tenants organised themselves at grassroots level did the debate begin in earnest. Admittedly, the redevelopment has brought benefits, such as improved public spaces. Even so, it could be argued that these gains have been unevenly shared. Under no circumstances should the market alone determine who may live in the neighbourhood; some protection for existing tenants seems essential.' },
  pronunciation: {
    items: [{ word: 'gentrification', ipa: '/ˌdʒentrɪfɪˈkeɪʃn/', stress: 'gen-tri-fi-CA-tion' }, { word: 'diaspora', ipa: '/daɪˈæspərə/', stress: 'di-AS-po-ra' }, { word: 'taboo', ipa: '/təˈbuː/', stress: 'ta-BOO' }, { word: 'polarisation', ipa: '/ˌpəʊləraɪˈzeɪʃn/', stress: 'po-lar-i-SA-tion' }, { word: 'conformity', ipa: '/kənˈfɔːməti/', stress: 'con-FOR-mi-ty' }],
    tips: ['En las oraciones enfáticas la fuerza va en el elemento destacado: It was the RENT that changed things.', 'En la inversión, hay una pausa breve tras el adverbial negativo: Rarely do you see this. Only when we listen, can we learn.', 'El do enfático lleva toda la fuerza: I DO think so.']
  },
  exercises: [
    mc('b2u08-e1', '___ had she arrived than the meeting began.', ['No sooner', 'Hardly', 'Rarely'], 0, 'No sooner … than.', 'Choose the correct adverbial.'),
    fb('b2u08-e2', '___ did we realise how serious the situation was.', 'Little', 'Little did we realise = we had no idea.', undefined, 'Write the missing word.'),
    fb('b2u08-e3', 'It was the council ___ approved the plan.', 'that', 'It was + noun + that…', ['who'], 'Write the missing word.'),
    wo('b2u08-e4', ['only', 'Not', 'did', 'she', 'apologise', 'but', 'she', 'also', 'resigned'], ['Not', 'only', 'did', 'she', 'apologise', 'but', 'she', 'also', 'resigned'], 'Not only + inversion.'),
    tf('b2u08-e5', 'After “rarely” at the start of a sentence, the subject comes before the auxiliary.', false, 'Rarely do you see…: the auxiliary comes first.'),
    mt('b2u08-e6', 'Match each structure with its description.', [['It was the rent that…', 'cleft sentence emphasising a noun'], ['What worries me is…', 'wh-cleft emphasising the topic'], ['Under no circumstances should…', 'negative adverbial with inversion'], ['I do think…', 'emphatic do']], 'Emphasis can be done in different ways.'),
    tr('b2u08-e8', 'Emphasise “the rents” with a cleft sentence.', 'The rents surprised everyone.', 'It was the rents that surprised everyone', 'It was + focus + that…', ['It was the rents which surprised everyone', 'What surprised everyone was the rents']),
    tr('b2u08-e7', 'Rewrite with inversion.', 'She rarely speaks about her past.', 'Rarely does she speak about her past', 'Rarely + auxiliary + subject + base verb.'),
    rc('b2u08-e9', 'What can be inferred?', ['The council’s response was cautious rather than celebratory', 'The city was homogeneous', 'The council celebrated'], 0, 'The council worried about integration instead of celebrating.', 'Never before had the city seen such a diverse group of residents; yet, rather than celebrating it, the council worried about integration.'),
    sa('b2u08-e10', 'Write 4 to 5 sentences analysing a social change in your community. Use two cleft sentences and two inversions.', 'Model: “It was the new transport link that changed the area. Rarely did residents imagine such growth. What concerns me is who benefits. Only when planners listen can the change be fair.” Check: emphasis, inversion and hedged claims.')
  ],
  assessment: [
    mc('b2u08-t1', 'Not only ___ the plan expensive, it was also unpopular.', ['was', 'did', 'had'], 0, 'Not only + inversion with was.'),
    mc('b2u08-t2', '___ did he know that the letter would change his life.', ['Little', 'Few', 'Slight'], 0, 'Little did he know.'),
    fb('b2u08-t3', '___ no circumstances should you share the password.', 'Under', 'Under no circumstances + inversion.', undefined, 'Write the missing word.'),
    fb('b2u08-t4', 'It was in 1995 ___ the law changed.', 'that', 'It was + time + that…', ['when'], 'Write the missing word.'),
    tf('b2u08-t5', 'Cleft sentences can focus attention on one part of a sentence.', true, 'It was the rent that…'),
    tf('b2u08-t6', '“Seldom” at the start of a sentence requires subject–auxiliary inversion.', true, 'Seldom does it happen.'),
    wo('b2u08-t7', ['did', 'Rarely', 'change', 'he', 'his', 'opinion'], ['Rarely', 'did', 'he', 'change', 'his', 'opinion'], 'Inversion after rarely.'),
    mc('b2u08-t8', 'Which sentence is the most emphatic and formal?', ['Only then did we understand the problem.', 'We understood the problem then.', 'Then we understood the problem.'], 0, 'Only then + inversion.'),
    tr('b2u08-t9', 'Rewrite with “Never”.', 'I have never seen such a crowd.', 'Never have I seen such a crowd', 'Never + auxiliary + subject.'),
    mc('b2u08-t10', 'Choose the sentence with an emphatic “do”.', ['I do believe that tradition matters.', 'I believe that tradition matters.', 'I am believing that tradition matters.'], 0, 'do + base verb adds emphasis.')
  ],
  review: ['Cleft sentences: It was… that…; What… is…; The reason why… is that…', 'Inversion after negative or restrictive adverbials: never, rarely, seldom, little, not only, only when, under no circumstances, no sooner.', 'Emphasis also through emphatic do, intensifiers and intonation.', 'Use inversion sparingly: it is formal or literary.', 'Social analysis: qualify claims, avoid stereotypes, separate observation from interpretation.']
};
export default unit;
