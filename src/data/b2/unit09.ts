import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'b2-u09', level: 'B2', unitNumber: 9, title: 'Academic and Professional Writing', subtitle: 'Write clear, cohesive and well-structured texts',
  communicativeGoal: 'Escribir informes, propuestas y textos argumentativos claros, cohesivos y bien organizados, con sintaxis compleja controlada y el registro académico o profesional adecuado.',
  objectives: ['Construir oraciones complejas sin perder claridad (subordinación, aposición, nominalización).', 'Crear cohesión y coherencia con referencia, conectores, sustitución y orden de la información.', 'Estructurar un texto: tesis, párrafos con oración temática, señalización y conclusión.', 'Adaptar el registro y la estructura a un informe, una propuesta o un ensayo.'],
  grammar: {
    title: 'Complex sentence structures, cohesion and coherence',
    explanation: [
      'Una oración compleja combina una cláusula principal con una o varias subordinadas: sustantivas (The fact that prices rose surprised nobody; What matters is whether the plan is viable), de relativo y adverbiales. Para no perder claridad, coloca la información principal en la cláusula principal y evita acumular más de dos o tres niveles de subordinación.',
      'La nominalización convierte verbos o adjetivos en sustantivos y es característica del estilo académico y profesional: They decided to cut funding → the decision to cut funding; Prices rose rapidly → the rapid rise in prices. Permite condensar ideas y hacer de una acción el sujeto de la siguiente oración. También se usa la aposición para añadir información compacta: The report, a 40-page study of urban transport, recommends…',
      'La cohesión es la relación visible entre las partes de un texto: palabras de referencia (this trend, such measures, the former / the latter), sustitución y elipsis (so do I; the first option and the second), cadenas léxicas (sinónimos y palabras relacionadas) y conectores. El principio “información conocida → información nueva” hace que cada oración empiece con algo que el lector ya conoce y termine con lo nuevo.',
      'La coherencia es la lógica del conjunto: que haya una tesis, que cada párrafo la apoye con una oración temática y pruebas, y que no se incluya material irrelevante. Herramientas: señalización (This essay will argue that…; Having outlined the causes, I now turn to…), paralelismo (a campaign to inform, to persuade and to mobilise) y párrafos con estructura clara (afirmación, prueba, explicación, enlace).',
      'Registro académico y profesional: evita contracciones, expresiones coloquiales (a lot of, kids, get) y verbos frasales cuando existe un equivalente formal (find out → ascertain; look into → investigate); prefiere la pasiva cuando el agente no importa y la cautela (hedging) cuando la evidencia es limitada. Un informe o una propuesta incluyen secciones y títulos; un resumen ejecutivo ofrece la conclusión principal y la recomendación en pocas líneas.'
    ],
    forms: [
      { label: 'Complex sentences', lines: ['The fact that funding was cut explains why standards fell.', 'What the report shows is that early intervention is cost-effective.', 'The study, a survey of 2,000 employees, found widespread dissatisfaction.', 'Having reviewed the evidence, the committee recommended a pilot scheme.'] },
      { label: 'Nominalisation and register', lines: ['They decided to cut funding. → the decision to cut funding', 'Prices rose rapidly. → the rapid rise in prices', 'A lot of kids don’t sleep enough. → A considerable number of children do not sleep sufficiently.', 'find out → ascertain; look into → investigate'] },
      { label: 'Cohesion and signposting', lines: ['This trend suggests that… / Such measures are…', 'The former option is cheaper; the latter is more sustainable.', 'This essay will argue that…', 'Having outlined the causes, I now turn to the solutions.'] },
      { label: 'Useful expressions and collocations', lines: ['put forward an argument; draw on evidence', 'in light of; with regard to; in terms of', 'it follows that; it is worth noting that', 'to a certain extent; by and large', 'as a result of; owing to; thereby', 'in the light of these findings', 'the main body; the scope of the study', 'a coherent argument; a concise summary'] }
    ]
  },
  vocabulary: [
    v('thesis', 'tesis', '/ˈθiːsɪs/', 'THE-sis'), v('abstract', 'resumen (de un artículo)', '/ˈæbstrækt/', 'AB-stract'), v('rationale', 'justificación, fundamento', '/ˌræʃəˈnɑːl/', 'ra-tion-ALE'),
    v('methodology', 'metodología', '/ˌmeθəˈdɒlədʒi/', 'meth-od-OL-o-gy'), v('scope', 'alcance', '/skəʊp/', 'SCOPE'), v('appendix', 'anexo', '/əˈpendɪks/', 'ap-PEN-dix'),
    v('citation', 'cita, referencia', '/saɪˈteɪʃn/', 'ci-TA-tion'), v('plagiarism', 'plagio', '/ˈpleɪdʒərɪzəm/', 'PLA-gia-rism'), v('paraphrase', 'parafrasear', '/ˈpærəfreɪz/', 'PAR-a-phrase'),
    v('coherent', 'coherente', '/kəʊˈhɪərənt/', 'co-HER-ent'), v('concise', 'conciso', '/kənˈsaɪs/', 'con-CISE'), v('redundant', 'redundante', '/rɪˈdʌndənt/', 're-DUN-dant'),
    v('ambiguous', 'ambiguo', '/æmˈbɪɡjuəs/', 'am-BIG-u-ous'), v('signpost', 'señalizar; indicador', '/ˈsaɪnpəʊst/', 'SIGN-post'), v('nominalisation', 'nominalización', '/ˌnɒmɪnəlaɪˈzeɪʃn/', 'nom-i-nal-i-SA-tion'),
    v('apposition', 'aposición', '/ˌæpəˈzɪʃn/', 'ap-o-SI-tion'), v('delineate', 'delimitar, describir con precisión', '/dɪˈlɪnieɪt/', 'de-LIN-e-ate'), v('elaborate', 'elaborar, ampliar', '/ɪˈlæbəreɪt/', 'e-LAB-o-rate'),
    v('corroborate', 'corroborar', '/kəˈrɒbəreɪt/', 'cor-ROB-o-rate'), v('feasibility', 'viabilidad', '/ˌfiːzəˈbɪləti/', 'fea-si-BIL-i-ty'), v('cohesive', 'cohesivo', '/kəʊˈhiːsɪv/', 'co-HE-sive')
  ],
  examples: [
    { en: 'The decision to cut funding, which was taken without consultation, explains the rapid decline in standards.', es: 'La decisión de recortar la financiación, tomada sin consulta, explica el rápido descenso de los estándares.' },
    { en: 'The study, a survey of two thousand employees, corroborates earlier findings on job dissatisfaction.', es: 'El estudio, una encuesta a dos mil empleados, corrobora hallazgos anteriores sobre la insatisfacción laboral.' },
    { en: 'Having delineated the scope of the research, the authors turn to the methodology.', es: 'Tras delimitar el alcance de la investigación, los autores pasan a la metodología.' },
    { en: 'Two approaches were considered: the former is cheaper, whereas the latter is more sustainable.', es: 'Se consideraron dos enfoques: el primero es más barato, mientras que el segundo es más sostenible.' },
    { en: 'It is worth noting that the sample, although limited, is representative of the target population.', es: 'Cabe señalar que la muestra, aunque limitada, es representativa de la población objetivo.' },
    { en: 'This trend, which has intensified in recent years, raises questions about the feasibility of the proposal.', es: 'Esta tendencia, que se ha intensificado en los últimos años, plantea dudas sobre la viabilidad de la propuesta.' },
    { en: 'In light of these findings, it is recommended that the programme be extended for a further year.', es: 'A la luz de estos hallazgos, se recomienda prolongar el programa un año más.' },
    { en: 'Paraphrasing a source is legitimate; presenting its ideas without a citation is plagiarism.', es: 'Parafrasear una fuente es legítimo; presentar sus ideas sin cita es plagio.' }
  ],
  dialogue: [
    { speaker: 'Ms Evans', text: 'Thanks for sending the draft, Karim. Overall the argument is promising, but I think it could be more cohesive.', es: 'Gracias por enviar el borrador, Karim. En general el argumento es prometedor, pero creo que podría ser más cohesivo.' },
    { speaker: 'Karim', text: 'Where do you feel it breaks down?', es: '¿Dónde crees que se pierde?' },
    { speaker: 'Ms Evans', text: 'In the third paragraph. You introduce a new idea, the role of policy, without signposting it, so the reader is left wondering how it connects to your thesis.', es: 'En el tercer párrafo. Introduces una idea nueva, el papel de las políticas, sin señalizarla, así que el lector no sabe cómo se conecta con tu tesis.' },
    { speaker: 'Karim', text: 'I see. I assumed the link was obvious.', es: 'Entiendo. Supuse que el vínculo era obvio.' },
    { speaker: 'Ms Evans', text: 'That’s a common trap. What is obvious to the writer is rarely obvious to the reader. A simple signpost, such as “Having outlined the economic causes, I now turn to policy”, would solve it.', es: 'Es una trampa común. Lo que es obvio para el escritor rara vez lo es para el lector. Una señal sencilla, como “Tras exponer las causas económicas, paso ahora a la política”, lo resolvería.' },
    { speaker: 'Karim', text: 'Okay. And what about sentence length? A friend said that some of mine are too long.', es: 'Vale. ¿Y la longitud de las oraciones? Una amiga dijo que algunas son demasiado largas.' },
    { speaker: 'Ms Evans', text: 'A few of them are, yes. This one contains four clauses and two parentheses; the main point gets lost. Try splitting it, or nominalising: instead of “because the government decided to cut funding”, write “because of the government’s decision to cut funding”.', es: 'Algunas lo son. Esta tiene cuatro cláusulas y dos paréntesis; se pierde la idea principal. Intenta dividirla o nominalizar: en vez de “porque el gobierno decidió recortar la financiación”, escribe “por la decisión del gobierno de recortar la financiación”.' },
    { speaker: 'Karim', text: 'That sounds more formal and compact.', es: 'Suena más formal y compacto.' },
    { speaker: 'Ms Evans', text: 'Exactly. Another point: you repeat “important” five times. Lexical variety helps cohesion, but so do reference words such as “this trend” or “the latter”.', es: 'Exacto. Otro punto: repites “important” cinco veces. La variedad léxica ayuda a la cohesión, pero también las palabras de referencia como “esta tendencia” o “este último”.' },
    { speaker: 'Karim', text: 'I’ve also used “a lot of” and “kids”. Should I change those?', es: 'También usé “a lot of” y “kids”. ¿Debería cambiarlos?' },
    { speaker: 'Ms Evans', text: 'In academic writing, yes: “a considerable number of” and “children”. And avoid contractions.', es: 'En escritura académica, sí: “a considerable number of” y “children”. Y evita las contracciones.' },
    { speaker: 'Karim', text: 'Understood. I’ll revise the paragraph and add a concluding sentence that ties back to the thesis.', es: 'Entendido. Revisaré el párrafo y añadiré una oración final que vuelva a la tesis.' }
  ],
  listening: {
    script: [
      { speaker: 'Trainer', text: 'Let’s talk about executive summaries. Who reads them?' },
      { speaker: 'Participant', text: 'Senior managers, I suppose.' },
      { speaker: 'Trainer', text: 'Exactly, and what they need is a clear recommendation, not the whole story. So the first sentence should state the purpose, and the last should state what you propose.' },
      { speaker: 'Participant', text: 'How long should it be?' },
      { speaker: 'Trainer', text: 'Rarely more than one page. A common mistake is to include methodology and too much background. That belongs in the main body.' },
      { speaker: 'Participant', text: 'What about tone?' },
      { speaker: 'Trainer', text: 'Neutral and precise. Avoid emotive language and unnecessary hedging. But where the evidence is limited, say so openly; credibility depends on it.' },
      { speaker: 'Participant', text: 'Any advice on structure?' },
      { speaker: 'Trainer', text: 'Use headings, short paragraphs and, where possible, numbered recommendations, so that readers can find what they need at a glance.' }
    ],
    questions: [
      mc('b2u09-l1', 'Who reads executive summaries, according to the discussion?', ['Senior managers', 'Technical staff only', 'Students'], 0, 'The participant says senior managers; the trainer agrees.'),
      mc('b2u09-l2', 'What should the first and last sentences state?', ['The purpose and the proposal', 'The background and the history', 'The methods and the tools'], 0, 'The first states the purpose; the last, what you propose.'),
      mc('b2u09-l3', 'What should not be included in an executive summary?', ['Methodology and too much background', 'A recommendation', 'A clear purpose'], 0, 'That belongs in the main body.'),
      tf('b2u09-l4', 'The trainer advises hiding limitations in the evidence.', false, 'She says that if the evidence is limited, say so openly.'),
      mc('b2u09-l5', 'Why does the trainer recommend numbered recommendations?', ['They help readers find key points quickly', 'They make the text longer', 'They hide the structure'], 0, 'So that readers can find what they need at a glance.')
    ]
  },
  reading: {
    title: 'How to build an argument that holds together',
    text: 'A well-constructed essay is rarely a sequence of good ideas; it is a sequence of ideas that visibly depend on one another. This dependence, which linguists call cohesion, is created not merely by linking words such as “however” or “therefore”, but also by the way each sentence begins with information already familiar to the reader and ends with something new. Writers who ignore this principle, producing sentences that introduce new material at the start, tend to leave their readers disoriented. Coherence, by contrast, concerns whether the text makes sense as a whole: whether the thesis is stated, supported and revisited, and whether every paragraph contributes to it. A frequent source of incoherence is the tendency to include material because it is interesting rather than because it is relevant. Academic conventions offer several remedies. Signposting, such as “This section examines…”, tells readers what to expect; topic sentences announce the point of each paragraph; and nominalisation compresses actions into noun phrases, allowing complex relationships to be expressed concisely. Admittedly, over-use of such devices can produce prose that is dense and impersonal. The aim, ultimately, is not to impress but to be understood, which in academic writing usually means saying less, more precisely.',
    questions: [
      rc('b2u09-r1', 'What creates cohesion, according to the text?', ['Linking words and sentences that start with familiar information', 'Only long sentences', 'Difficult vocabulary'], 0, 'Linking words and the familiar-to-new information order.'),
      rc('b2u09-r2', 'What is coherence?', ['Whether the text makes sense as a whole', 'Whether words are linked', 'The length of paragraphs'], 0, 'It concerns whether the text makes sense as a whole.'),
      rc('b2u09-r3', 'What is a frequent source of incoherence?', ['Including interesting but irrelevant material', 'Using signposts', 'Writing short paragraphs'], 0, 'Including material because it is interesting rather than relevant.'),
      rc('b2u09-r4', 'What is the risk of over-using academic devices?', ['Prose that is dense and impersonal', 'Too many examples', 'Ambiguity'], 0, 'Prose can become dense and impersonal.'),
      rc('b2u09-r5', 'What is the writer’s ultimate aim?', ['To be understood, saying less, more precisely', 'To impress readers', 'To write long texts'], 0, 'The aim is not to impress but to be understood.')
    ]
  },
  speaking: { prompt: 'Sesión de revisión de textos en parejas (5 a 6 minutos): cada uno presenta un párrafo propio y el otro actúa como tutor y da retroalimentación sobre cohesión, coherencia, registro y estructura. Luego intercambian roles.', tasks: ['Explain the structure of your paragraph (topic sentence, evidence, link).', 'Give feedback with diplomatic language (It might be clearer if…; I wonder whether…).', 'Suggest nominalisations or more formal vocabulary for two sentences.', 'Propose a signpost or reference word to improve the flow.'] },
  writing: { prompt: 'Write a proposal or report summary (230 to 270 words) recommending a change in your workplace or university (for example, introducing flexible hours or a mentoring programme). Include an executive summary, a rationale, a brief description of the proposed measure and a recommendation. Use nominalisation, signposting, reference words and a formal register.', rubric: ['Clear structure with headings or signposting (purpose, rationale, recommendation).', 'Cohesion: reference words, linkers and information flow.', 'Complex sentences, nominalisation and appropriate formal register (no contractions or colloquialisms).', 'Concise, precise argumentation with a clear recommendation.'], model: 'Executive summary. This proposal recommends introducing a six-month mentoring programme for new employees. Rationale. Staff turnover among new recruits has risen sharply, a trend that has increased recruitment costs. A survey of fifty employees, the majority of whom reported feeling unsupported during their first months, corroborates this concern. Proposed measure. Each recruit would be paired with an experienced colleague who would meet them fortnightly. Having outlined the rationale, I now turn to feasibility: the programme requires minimal investment, since mentors would be existing staff. Recommendation. In light of these findings, it is recommended that the programme be piloted in two departments. The former would provide data on retention; the latter, on cost-effectiveness.' },
  pronunciation: {
    items: [{ word: 'methodology', ipa: '/ˌmeθəˈdɒlədʒi/', stress: 'meth-od-OL-o-gy' }, { word: 'plagiarism', ipa: '/ˈpleɪdʒərɪzəm/', stress: 'PLA-gia-rism' }, { word: 'ambiguous', ipa: '/æmˈbɪɡjuəs/', stress: 'am-BIG-u-ous' }, { word: 'corroborate', ipa: '/kəˈrɒbəreɪt/', stress: 'cor-ROB-o-rate' }, { word: 'feasibility', ipa: '/ˌfiːzəˈbɪləti/', stress: 'fea-si-BIL-i-ty' }],
    tips: ['En una presentación de resultados, usa pausas para separar las partes de una oración larga: The decision to cut funding, | taken without consultation, | explains the decline.', 'En las palabras terminadas en -ate de verbo, la última sílaba suena /eɪt/ (corroborate); en sustantivo y adjetivo, /ət/ (separate, adj).', 'En nominalizaciones como decision o implementation, la fuerza va en la penúltima sílaba antes de -ion.']
  },
  exercises: [
    mc('b2u09-e1', 'Choose the most formal and concise version.', ['The decision to cut funding led to a decline in standards.', 'Because they decided to cut funding, standards went down.', 'They cut funding, so standards dropped.'], 0, 'Nominalisation makes the sentence compact and formal.', 'Choose the best sentence.'),
    fb('b2u09-e2', 'Nominalise: They decided to cut funding. → Their ___ to cut funding…', 'decision', 'decide → decision.', undefined, 'Write the noun.'),
    fb('b2u09-e3', 'Having outlined the causes, I now ___ to the solutions.', 'turn', 'A common signpost: I now turn to…', undefined, 'Write the missing word.'),
    wo('b2u09-e4', ['will', 'essay', 'This', 'argue', 'that', 'policy', 'matters'], ['This', 'essay', 'will', 'argue', 'that', 'policy', 'matters'], 'A typical signpost for a thesis.'),
    tf('b2u09-e5', 'Cohesion refers only to the use of linking words.', false, 'It also involves reference, substitution and information flow.'),
    mt('b2u09-e6', 'Match each term with its meaning.', [['thesis', 'central claim of an essay'], ['paraphrase', 'restate in your own words'], ['redundant', 'unnecessarily repeated'], ['appendix', 'supplementary material at the end']], 'Academic writing has its own vocabulary.'),
    tr('b2u09-e7', 'Nominalise the clause.', 'Because the government decided to cut funding, standards fell.', 'Because of the government’s decision to cut funding, standards fell', 'Because of + noun phrase.', ['Due to the government’s decision to cut funding, standards fell', 'Owing to the government’s decision to cut funding, standards fell']),
    tr('b2u09-e8', 'Make the sentence more formal.', 'A lot of kids don’t get enough sleep.', 'A considerable number of children do not get enough sleep', 'Formal vocabulary and no contraction.', ['A considerable number of children don’t get enough sleep', 'A considerable number of children do not sleep sufficiently']),
    rc('b2u09-e9', 'What does “the latter two” refer to?', ['The second and third measures', 'The first measure', 'All the measures'], 0, 'The first is the least expensive; the latter two are the second and third.', 'The report recommends three measures. The first, which is the least expensive, could be implemented immediately; the latter two require further feasibility studies.'),
    sa('b2u09-e10', 'Write an introductory paragraph (5 to 6 sentences) for an essay: context, thesis and a signpost. Then rewrite one sentence using nominalisation.', 'Model: “Remote work has become widespread. This essay will argue that its benefits depend on management practices. Having outlined the advantages, I will examine the risks. [Nominalisation: Because they decided to… → Because of their decision to…]” Check: context, thesis, signposting and formal register.')
  ],
  assessment: [
    mc('b2u09-t1', 'The ___ of the study was limited to urban areas.', ['scope', 'appendix', 'thesis'], 0, 'Scope = the limits of what is studied.'),
    mc('b2u09-t2', 'Choose the most appropriate academic register.', ['A considerable number of children', 'Loads of kids', 'A lot of kids'], 0, 'Formal vocabulary.'),
    fb('b2u09-t3', '“The former” and “the ___” refer to two items mentioned earlier.', 'latter', 'former = first; latter = second.', undefined, 'Write the missing word.'),
    fb('b2u09-t4', 'A ___ sentence announces the main idea of a paragraph.', 'topic', 'topic sentence.', undefined, 'Write the missing word.'),
    tf('b2u09-t5', 'Plagiarism means presenting someone else’s ideas as your own without acknowledgement.', true, 'A citation is needed.'),
    tf('b2u09-t6', 'Nominalisation makes a text less formal.', false, 'Nominalisation is typical of formal writing.'),
    wo('b2u09-t7', ['argues', 'This', 'that', 'essay', 'policy', 'matters'], ['This', 'essay', 'argues', 'that', 'policy', 'matters'], 'A signpost for the thesis.'),
    mc('b2u09-t8', 'Which sentence shows good cohesion after: “The tax was introduced in 2010.”?', ['This measure was intended to reduce consumption.', 'Measures were introduced.', 'Anyway, it was funny.'], 0, 'This measure refers back to the tax.'),
    tr('b2u09-t9', 'Rewrite more concisely.', 'The reason why prices rose was that demand increased.', 'Prices rose because demand increased', 'Remove the redundant structure.', ['Prices rose because of increased demand']),
    mc('b2u09-t10', 'Which is the best concluding sentence for an essay?', ['In conclusion, the evidence suggests that early intervention is both effective and cost-efficient.', 'So yeah, that’s about it.', 'And finally, there are many things.'], 0, 'It restates the thesis precisely and formally.')
  ],
  review: ['Complex sentences: noun clauses, relative clauses, apposition; keep the main idea in the main clause.', 'Nominalisation condenses actions into noun phrases: they decided → the decision.', 'Cohesion: reference words (this, such, the former / the latter), linkers, lexical chains, familiar-to-new information.', 'Coherence: thesis, topic sentences, relevant evidence, signposting, a conclusion that returns to the thesis.', 'Register: no contractions or colloquialisms; prefer formal vocabulary and hedging where needed.']
};
export default unit;
