import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'b2-u07', level: 'B2', unitNumber: 7, title: 'Business and Negotiation', subtitle: 'Negotiate, persuade and reach agreements diplomatically',
  communicativeGoal: 'Negociar, persuadir y alcanzar acuerdos con diplomacia: pedir información con preguntas indirectas, hacer concesiones condicionadas y rechazar sin romper la relación.',
  objectives: ['Usar estructuras modales avanzadas para suavizar, comprometerse y condicionar (may well, might be able to, be in a position to).', 'Formar preguntas indirectas e incrustadas con el orden de palabras correcto.', 'Hacer concesiones condicionadas, rechazar con cortesía y resumir acuerdos.', 'Elegir el nivel de formalidad y de franqueza adecuado a cada fase de la negociación.'],
  grammar: {
    title: 'Advanced modal structures and indirect questions',
    explanation: [
      'En una negociación, la forma importa tanto como el contenido. Los modales y las estructuras que los rodean permiten suavizar, condicionar y mantener opciones abiertas: We might be able to offer a discount (posibilidad), That may well work (muy posible), I’m not in a position to agree to that (no tengo autoridad o margen), We’d be prepared to lower the price, provided that you commit to two years (concesión condicionada), Might I suggest…? (sugerencia muy formal).',
      'Las preguntas indirectas son más corteses que las directas y se construyen con un orden de palabras de oración afirmativa, sin inversión ni do/does: What is your final price? → Could you tell me what your final price is? Para preguntas de sí/no se usa whether o if: Could you tell me whether the contract includes a penalty clause? Fórmulas útiles: Do you happen to know…?, I wonder if…, I was wondering whether you might…, I’d like to know…',
      'Estructuras de concesión y condición: provided (that) / providing / as long as (con la condición de que), unless (a menos que), if you could…, we might… (intercambio). Para rechazar con diplomacia: I’m afraid that won’t be possible, I’m not in a position to…, That would be difficult for us, Unfortunately we couldn’t go that far.',
      'Aclarar y resumir: When you say…, do you mean…?; Let me make sure I’ve understood…; So, to recap, we have agreed on… Es una forma de evitar malentendidos y de asegurar que ambas partes comparten la misma versión.',
      'Registro: una frase directa (Reduce the price) puede sonar brusca; una frase diplomática (I wonder whether you might consider reducing the price) mantiene la relación y deja espacio a la otra parte. El nivel de formalidad debe subir en la propuesta formal y puede relajarse una vez que se ha creado confianza.'
    ],
    forms: [
      { label: 'Modals and conditions', lines: ['We might be able to offer a discount.', 'That may well work.', 'I’m not in a position to agree to that today.', 'We’d be prepared to lower the price, provided that you commit to two years.'] },
      { label: 'Indirect questions', lines: ['Could you tell me what your final price is?', 'Could you tell me whether the contract includes a penalty clause?', 'Do you happen to know when the order arrives?', 'I was wondering whether you might consider extending the deadline.'] },
      { label: 'Refusing, clarifying and summarising', lines: ['I’m afraid that won’t be possible.', 'When you say “flexible”, do you mean negotiable?', 'Let me make sure I’ve understood correctly.', 'So, to recap, we have agreed on price, delivery and payment terms.'] },
      { label: 'Useful expressions and collocations', lines: ['meet halfway; make a concession', 'a win-win solution; common ground', 'put your cards on the table; play hardball', 'drive a hard bargain; sleep on it', 'close a deal; seal the deal', 'walk away from the table; a deal-breaker', 'subject to approval; off the record', 'the small print; terms and conditions'] }
    ]
  },
  vocabulary: [
    v('counteroffer', 'contraoferta', '/ˈkaʊntərˌɒfə/', 'COUN-ter-of-fer'), v('bargaining chip', 'carta de negociación', '/ˈbɑːɡənɪŋ tʃɪp/', 'BAR-gain-ing chip'), v('deal-breaker', 'condición que rompe el trato', '/ˈdiːl ˌbreɪkə/', 'DEAL-break-er'),
    v('bottom line', 'límite mínimo aceptable', '/ˈbɒtəm laɪn/', 'BOT-tom line'), v('terms and conditions', 'términos y condiciones', '/ˌtɜːmz ənd kənˈdɪʃnz/', 'terms and con-DI-tions'), v('quotation', 'cotización', '/kwəʊˈteɪʃn/', 'quo-TA-tion'),
    v('tender', 'licitación', '/ˈtendə/', 'TEN-der'), v('lead time', 'plazo de entrega', '/ˈliːd taɪm/', 'LEAD time'), v('penalty clause', 'cláusula penal', '/ˈpenəlti klɔːz/', 'PEN-al-ty clause'),
    v('liability', 'responsabilidad legal', '/ˌlaɪəˈbɪləti/', 'li-a-BIL-i-ty'), v('retainer', 'anticipo de honorarios', '/rɪˈteɪnə/', 're-TAIN-er'), v('exclusivity', 'exclusividad', '/ˌeksklʊˈsɪvəti/', 'ex-clu-SIV-i-ty'),
    v('discount', 'descuento', '/ˈdɪskaʊnt/', 'DIS-count'), v('margin', 'margen', '/ˈmɑːdʒɪn/', 'MAR-gin'), v('upfront', 'por adelantado', '/ˌʌpˈfrʌnt/', 'up-FRONT'),
    v('instalment', 'cuota, plazo de pago', '/ɪnˈstɔːlmənt/', 'in-STAL-ment'), v('due diligence', 'diligencia debida', '/ˌdjuː ˈdɪlɪdʒəns/', 'due DIL-i-gence'), v('mutually beneficial', 'beneficioso para ambas partes', '/ˈmjuːtʃuəli ˌbenɪˈfɪʃl/', 'MU-tu-al-ly ben-e-FI-cial'),
    v('sign off', 'dar la aprobación final', '/saɪn ɒf/', 'sign OFF'), v('walk away', 'retirarse de la negociación', '/wɔːk əˈweɪ/', 'walk a-WAY'), v('bid', 'oferta, puja', '/bɪd/', 'BID'),
    v('concession', 'concesión', '/kənˈseʃn/', 'con-CES-sion')
  ],
  examples: [
    { en: 'We might be able to offer a discount, provided that you are willing to sign a two-year agreement.', es: 'Podríamos ofrecer un descuento, siempre que estén dispuestos a firmar un acuerdo de dos años.' },
    { en: 'Could you tell me whether the quotation includes delivery and installation?', es: '¿Podría decirme si la cotización incluye entrega e instalación?' },
    { en: 'I’m afraid we’re not in a position to guarantee the delivery date, though we may well be able to expedite part of the order.', es: 'Me temo que no estamos en condiciones de garantizar la fecha de entrega, aunque quizá podamos agilizar parte del pedido.' },
    { en: 'Do you happen to know what penalties would apply if either party terminated the contract early?', es: '¿Sabe usted por casualidad qué penalizaciones se aplicarían si alguna de las partes terminara el contrato antes de tiempo?' },
    { en: 'When you say the price is “negotiable”, do you mean that the margin can be reduced or that extras can be added?', es: 'Cuando dice que el precio es “negociable”, ¿quiere decir que se puede reducir el margen o que pueden añadirse extras?' },
    { en: 'We were hoping for a more competitive counteroffer; otherwise, we may have to consider other bids.', es: 'Esperábamos una contraoferta más competitiva; de lo contrario, quizá tengamos que considerar otras ofertas.' },
    { en: 'A solution that is mutually beneficial is more likely to be honoured than one imposed under pressure.', es: 'Una solución beneficiosa para ambas partes tiene más probabilidades de cumplirse que una impuesta bajo presión.' },
    { en: 'So, to recap, we’ve agreed on the price, the lead time and the payment in three instalments.', es: 'Entonces, para resumir, hemos acordado el precio, el plazo de entrega y el pago en tres cuotas.' }
  ],
  dialogue: [
    { speaker: 'Dana', text: 'Thank you for meeting us, Victor. I wonder if we could start by clarifying the delivery terms.', es: 'Gracias por reunirse con nosotros, Victor. Me pregunto si podríamos empezar aclarando las condiciones de entrega.' },
    { speaker: 'Victor', text: 'Of course. May I ask what lead time you had in mind?', es: 'Por supuesto. ¿Puedo preguntar qué plazo de entrega tenían en mente?' },
    { speaker: 'Dana', text: 'Ideally six weeks. Could you tell me whether that would be feasible with your current capacity?', es: 'Idealmente seis semanas. ¿Podría decirme si sería viable con su capacidad actual?' },
    { speaker: 'Victor', text: 'It might be, provided that you confirm the order by the end of the month. I’d be reluctant to commit to six weeks otherwise.', es: 'Podría serlo, siempre que confirmen el pedido antes de fin de mes. De lo contrario, me costaría comprometerme a seis semanas.' },
    { speaker: 'Dana', text: 'Understood. Regarding the price, your quotation is roughly ten per cent above what we budgeted. Do you happen to know whether there’s any flexibility on the margin?', es: 'Entendido. Respecto al precio, su cotización está un diez por ciento por encima de lo presupuestado. ¿Sabe si hay alguna flexibilidad en el margen?' },
    { speaker: 'Victor', text: 'I’m afraid there’s not much room on margin, but we might be able to offer a discount if you were willing to sign a two-year agreement.', es: 'Me temo que hay poco margen, pero podríamos ofrecer un descuento si estuvieran dispuestos a firmar un acuerdo de dos años.' },
    { speaker: 'Dana', text: 'That could well work. I’d need to know, however, what penalty would apply if we terminated early.', es: 'Eso podría funcionar. Necesitaría saber, sin embargo, qué penalización se aplicaría si termináramos antes.' },
    { speaker: 'Victor', text: 'A standard clause: three months’ fees. It’s a deal-breaker for some clients, so I’d be happy to discuss it.', es: 'Una cláusula estándar: tres meses de honorarios. Para algunos clientes es un obstáculo, así que con gusto la discutiría.' },
    { speaker: 'Dana', text: 'Then perhaps we could meet halfway: two years, with a break clause after eighteen months and no penalty?', es: 'Entonces quizá podríamos encontrarnos a medio camino: dos años, con una cláusula de salida a los dieciocho meses y sin penalización.' },
    { speaker: 'Victor', text: 'I’m not in a position to agree to that today, but I might be able to propose a reduced penalty, subject to my director’s approval.', es: 'Hoy no estoy en condiciones de aceptar eso, pero quizá pueda proponer una penalización reducida, sujeta a la aprobación de mi director.' },
    { speaker: 'Dana', text: 'Fair enough. So, to recap: six-week lead time, a discount in return for two years, and a possible reduced penalty. Have I understood correctly?', es: 'Es justo. Entonces, para resumir: plazo de seis semanas, un descuento a cambio de dos años y una posible penalización reducida. ¿Lo he entendido bien?' },
    { speaker: 'Victor', text: 'Exactly. I’ll sign off on the draft by Friday, and we can finalise everything next week.', es: 'Exacto. Daré mi aprobación al borrador el viernes y podremos cerrar todo la próxima semana.' }
  ],
  listening: {
    script: [
      { speaker: 'Host', text: 'What’s the biggest mistake people make at the negotiating table?' },
      { speaker: 'Coach', text: 'Focusing on positions rather than interests. If you say “I want a ten per cent discount”, you’ve told me nothing about why.' },
      { speaker: 'Host', text: 'So what should they do?' },
      { speaker: 'Coach', text: 'Ask indirect, open questions. Instead of “What’s your final price?”, try “Could you tell me what factors would influence your price?” It sounds softer, and it invites explanation.' },
      { speaker: 'Host', text: 'Isn’t that just politeness?' },
      { speaker: 'Coach', text: 'It’s strategy. People who feel pressured tend to defend their positions; people who feel heard tend to share information, and information is what makes trade-offs possible.' },
      { speaker: 'Host', text: 'And when you’ve got a bottom line?' },
      { speaker: 'Coach', text: 'Know it, but don’t reveal it. And always have an alternative: if you can walk away, you negotiate from strength.' }
    ],
    questions: [
      mc('b2u07-l1', 'What mistake does the coach identify?', ['Focusing on positions instead of interests', 'Talking too little', 'Arriving late'], 0, 'She names focusing on positions rather than interests.'),
      mc('b2u07-l2', 'Why does she recommend indirect questions?', ['They sound softer and invite explanation', 'They are shorter', 'They avoid answers'], 0, 'She says they sound softer and invite explanation.'),
      mc('b2u07-l3', 'What makes trade-offs possible?', ['Information shared by the other side', 'Higher prices', 'Longer meetings'], 0, 'Information is what makes trade-offs possible.'),
      tf('b2u07-l4', 'The coach advises revealing your bottom line early.', false, 'She says: “Know it, but don’t reveal it.”'),
      mc('b2u07-l5', 'What does “negotiate from strength” mean here?', ['Having a viable alternative so you can walk away', 'Being aggressive', 'Speaking loudly'], 0, 'If you can walk away, you negotiate from strength.')
    ]
  },
  reading: {
    title: 'The power of the first number',
    text: 'In negotiations, the first number mentioned often exerts a disproportionate influence on the final outcome, a phenomenon known as anchoring. In one well-known experiment, participants who were first asked whether the price of a product was higher or lower than an arbitrary figure produced estimates that clustered around that figure, even when they knew it was random. Negotiators who open with an ambitious but defensible offer therefore tend to secure better deals, since subsequent concessions are measured against their starting point. However, anchoring is not without risk. An offer that appears absurd may damage credibility, prompting the other party to walk away or, worse, to retaliate. Experienced negotiators accordingly recommend preparing carefully: researching market benchmarks, identifying one’s alternatives and deciding in advance which concessions might be offered in return for what. If the other side anchors first, the advice is not to counter immediately with a figure of one’s own, but to question the reasoning behind it. Doing so shifts attention from the number to the justification, which can often be challenged. Whatever the tactic, the underlying principle remains the same: the party who prepares best is least likely to be swayed by the first figure on the table.',
    questions: [
      rc('b2u07-r1', 'What is anchoring?', ['The strong influence of the first number mentioned', 'The end of a negotiation', 'A type of contract'], 0, 'The first number often exerts a disproportionate influence.'),
      rc('b2u07-r2', 'Why do ambitious but defensible offers help?', ['Later concessions are measured from the starting point', 'They win trust automatically', 'They end negotiations quickly'], 0, 'Concessions are measured against the starting point.'),
      rc('b2u07-r3', 'What risk does anchoring carry?', ['An absurd offer may damage credibility', 'It always wastes time', 'It requires a lawyer'], 0, 'An offer that appears absurd may damage credibility.'),
      rc('b2u07-r4', 'What do experts advise if the other side anchors first?', ['Question the reasoning behind the figure', 'Counter immediately with a figure', 'Walk away'], 0, 'They advise questioning the reasoning rather than countering at once.'),
      rc('b2u07-r5', 'What is the writer’s underlying message?', ['Preparation protects against anchoring', 'Anchoring always works', 'Negotiations are a matter of luck'], 0, 'The party who prepares best is least swayed by the first figure.')
    ]
  },
  speaking: { prompt: 'Simulación de negociación en parejas (6 a 8 minutos): un comprador y un proveedor negocian precio, plazos y condiciones de un contrato. Cada uno tiene prioridades y un límite que no debe revelar. Al final, resumen el acuerdo.', tasks: ['Ask at least three indirect questions (Could you tell me whether…? Do you happen to know…?).', 'Make two conditional concessions with provided that, as long as or unless.', 'Refuse politely at least once (I’m afraid that won’t be possible; I’m not in a position to…).', 'Clarify a term and summarise the agreement (To recap…).'] },
  writing: { prompt: 'Write a formal email or proposal (220 to 260 words) following a first negotiation meeting. Summarise what was agreed, state the points still open, make a conditional proposal and request confirmation. Maintain a diplomatic tone and use advanced modals and indirect questions.', rubric: ['Appropriate formal structure (subject, greeting, summary, proposal, closing).', 'Correct use of indirect questions and advanced modals.', 'Conditional concessions expressed diplomatically.', 'Clear summary of agreements and next steps.'], model: 'Dear Mr Okafor, Thank you for yesterday’s meeting. I would like to summarise what we agreed: a six-week lead time, a discount in return for a two-year contract, and delivery in three instalments. Two points remain open. First, I was wondering whether you might consider a break clause after eighteen months; we would be prepared to accept a reduced penalty, provided that the discount remains unchanged. Second, could you tell me whether installation is included in the quotation? Should this not be the case, we may need to revise our budget. I appreciate that you are not in a position to confirm these points without your director’s approval, so I would be grateful if you could let me know your position by Friday. Kind regards, Dana Reyes' },
  pronunciation: {
    items: [{ word: 'quotation', ipa: '/kwəʊˈteɪʃn/', stress: 'quo-TA-tion' }, { word: 'liability', ipa: '/ˌlaɪəˈbɪləti/', stress: 'li-a-BIL-i-ty' }, { word: 'exclusivity', ipa: '/ˌeksklʊˈsɪvəti/', stress: 'ex-clu-SIV-i-ty' }, { word: 'instalment', ipa: '/ɪnˈstɔːlmənt/', stress: 'in-STAL-ment' }, { word: 'counteroffer', ipa: '/ˈkaʊntərˌɒfə/', stress: 'COUN-ter-of-fer' }],
    tips: ['Las preguntas indirectas suelen terminar con entonación descendente, no ascendente: Could you tell me what the price is?', 'Para suavizar un rechazo, baja la velocidad y acentúa la disculpa: I’m AFraid that won’t be possible.', 'En I wonder whether, whether suena /ˈweðə/ y se enlaza con la palabra siguiente.']
  },
  exercises: [
    mc('b2u07-e1', 'Could you tell me ___ the contract includes a penalty clause?', ['whether', 'does', 'that'], 0, 'Indirect yes/no question: whether / if.', 'Choose the correct word.'),
    fb('b2u07-e2', 'I was wondering ___ you might be able to offer a discount.', 'whether', 'whether / if introduces an indirect yes/no question.', ['if'], 'Write the missing word.'),
    fb('b2u07-e3', 'We would be prepared to lower the price, ___ you agree to a longer contract.', 'provided', 'provided (that) = on condition that.', ['provided that', 'providing', 'providing that', 'as long as'], 'Write the missing word.'),
    wo('b2u07-e4', ['happen', 'Do', 'you', 'to', 'know', 'when', 'the', 'order', 'arrives'], ['Do', 'you', 'happen', 'to', 'know', 'when', 'the', 'order', 'arrives'], 'An indirect question: no inversion after when.'),
    tf('b2u07-e5', 'In an indirect question we keep the inversion: “Could you tell me where is the office?”', false, 'Correct: “Could you tell me where the office is?”'),
    mt('b2u07-e6', 'Match each expression with its function.', [['I’m afraid that won’t be possible.', 'polite refusal'], ['To recap,', 'summarising'], ['When you say…, do you mean…?', 'clarifying'], ['We might be able to…, provided that…', 'conditional concession']], 'Negotiation has recognisable moves.'),
    tr('b2u07-e7', 'Make the question indirect.', 'What is your final price? → Could you tell me…', 'Could you tell me what your final price is', 'Indirect question: normal word order.'),
    tr('b2u07-e8', 'Make the request more diplomatic.', 'Reduce the price.', 'Could you possibly reduce the price', 'Could you possibly… softens a request.', ['Could you reduce the price', 'Would you be able to reduce the price']),
    rc('b2u07-e9', 'What can be inferred?', ['Delivery is not guaranteed, but some flexibility exists', 'The supplier refused the order', 'The delivery date is guaranteed'], 0, 'The supplier cannot guarantee the date but might expedite part of it.', 'The supplier said it was not in a position to guarantee the delivery date, though it might be able to expedite part of the order.'),
    sa('b2u07-e10', 'Write 5 to 6 sentences of a negotiation exchange in which you ask two indirect questions, make a conditional concession and refuse politely.', 'Model: “Could you tell me whether the price includes delivery? We would be prepared to sign for two years, provided that you reduce the margin. I’m afraid we’re not in a position to accept a penalty clause.” Check: word order, conditions and tone.')
  ],
  assessment: [
    mc('b2u07-t1', 'I’d like to know ___ the quotation includes delivery.', ['whether', 'does', 'is'], 0, 'whether + clause.'),
    mc('b2u07-t2', 'Which sentence is the most diplomatic?', ['I wonder whether you might consider extending the deadline.', 'Extend the deadline.', 'You must extend the deadline.'], 0, 'Indirect, softened request.'),
    fb('b2u07-t3', 'That may ___ be possible, but I need to check.', 'well', 'may well = quite possibly.', undefined, 'Write the missing word.'),
    fb('b2u07-t4', 'I’m afraid I’m not ___ a position to agree to that.', 'in', 'be in a position to = have the authority or margin to.', undefined, 'Write the missing word.'),
    tf('b2u07-t5', '“Bottom line” refers to the least favourable outcome you are willing to accept.', true, 'It is the limit beyond which you walk away.'),
    tf('b2u07-t6', '“Deal-breaker” is a condition that makes agreement more likely.', false, 'A deal-breaker prevents agreement.'),
    wo('b2u07-t7', ['you', 'Could', 'tell', 'me', 'what', 'the', 'terms', 'are'], ['Could', 'you', 'tell', 'me', 'what', 'the', 'terms', 'are'], 'Indirect question word order.'),
    mc('b2u07-t8', 'Which phrase signals a conditional concession?', ['We’d be willing to lower the price, provided that you commit to two years.', 'We lower the price.', 'Lower the price now.'], 0, 'It offers something in exchange for something else.'),
    tr('b2u07-t9', 'Rewrite as an indirect question.', 'When does the contract start?', 'Could you tell me when the contract starts', 'Could you tell me + normal word order.', ['Do you know when the contract starts', 'Could you tell me when the contract starts?']),
    mc('b2u07-t10', 'Choose the best summarising move at the end of a negotiation.', ['So, to recap, we have agreed on price, delivery and payment terms.', 'Anyway.', 'That’s all, bye.'], 0, 'Recap what has been agreed.')
  ],
  review: ['Soften and condition with advanced modals: might be able to, may well, be in a position to, provided that.', 'Indirect questions use normal word order and whether / if: Could you tell me whether…? Do you happen to know…?', 'Refuse politely: I’m afraid that won’t be possible; I’m not in a position to…', 'Clarify and summarise to avoid misunderstanding: When you say…; To recap…', 'Prepare: know your bottom line, your alternatives and the concessions you can trade.']
};
export default unit;
