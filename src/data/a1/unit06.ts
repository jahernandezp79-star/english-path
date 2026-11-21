import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'a1-u06', level: 'A1', unitNumber: 6, title: 'Shopping', subtitle: 'Buy things, ask about prices and quantities',
  communicativeGoal: 'Comprar productos en una tienda: preguntar precios y cantidades, señalar lo que quieres y pagar.',
  objectives: ['Usar this, that, these y those para señalar cosas.', 'Preguntar precios con How much is/are…?', 'Preguntar cantidades con How many…?', 'Mantener una conversación corta de compra.'],
  grammar: {
    title: 'This / that / these / those, how much and how many',
    explanation: [
      'This y that se usan con una sola cosa; these y those con varias. This y these señalan algo cercano a ti; that y those señalan algo lejano.',
      'Se pueden usar solos (This is nice) o antes de un sustantivo (This bag is nice). El verbo cambia: this/that + is; these/those + are.',
      'How much sirve para preguntar el precio: How much is this shirt? (singular) y How much are these shoes? (plural). La respuesta usa it para uno y they para varios: It’s twenty dollars. They’re fifty dollars.',
      'How many sirve para preguntar cuántas cosas contables: How many bags do you want? — Two, please.'
    ],
    forms: [
      { label: 'Near and far', lines: ['this shirt — one thing, near', 'that shirt — one thing, far', 'these shirts — many things, near', 'those shirts — many things, far'] },
      { label: 'Affirmative and negative', lines: ['This bag is nice.', 'Those shoes are expensive.', 'That bag isn’t cheap.', 'These jackets aren’t big.'] },
      { label: 'Questions', lines: ['How much is this shirt? — It’s twenty dollars.', 'How much are those shoes? — They’re fifty dollars.', 'How many bags do you want? — Two, please.'] }
    ]
  },
  vocabulary: [v('shop', 'tienda', '/ʃɒp/', 'SHOP'), v('price', 'precio', '/praɪs/', 'PRICE'), v('cheap', 'barato', '/tʃiːp/', 'CHEAP'), v('expensive', 'caro', '/ɪkˈspensɪv/', 'ex-PEN-sive'), v('buy', 'comprar', '/baɪ/', 'BUY'), v('pay', 'pagar', '/peɪ/', 'PAY'), v('size', 'talla, tamaño', '/saɪz/', 'SIZE'), v('colour', 'color', '/ˈkʌlə/', 'CO-lour'), v('shirt', 'camisa', '/ʃɜːt/', 'SHIRT'), v('shoes', 'zapatos', '/ʃuːz/', 'SHOES'), v('bag', 'bolso, bolsa', '/bæɡ/', 'BAG'), v('jacket', 'chaqueta', '/ˈdʒækɪt/', 'JA-cket'), v('dollar', 'dólar', '/ˈdɒlə/', 'DOL-lar'), v('customer', 'cliente', '/ˈkʌstəmə/', 'CUS-to-mer')],
  examples: [
    { en: 'This shirt is cheap.', es: 'Esta camisa es barata.' }, { en: 'That jacket is expensive.', es: 'Esa chaqueta es cara.' },
    { en: 'These shoes are my size.', es: 'Estos zapatos son de mi talla.' }, { en: 'Those bags are very nice.', es: 'Aquellos bolsos son muy bonitos.' },
    { en: 'How much is this bag?', es: '¿Cuánto cuesta este bolso?' }, { en: 'How much are these shoes?', es: '¿Cuánto cuestan estos zapatos?' },
    { en: 'How many shirts do you want?', es: '¿Cuántas camisas quieres?' }, { en: 'I want that black jacket, please.', es: 'Quiero esa chaqueta negra, por favor.' }
  ],
  dialogue: [
    { speaker: 'Seller', text: 'Good morning. Can I help you?', es: 'Buenos días. ¿Puedo ayudarle?' },
    { speaker: 'Customer', text: 'Yes, please. How much is this jacket?', es: 'Sí, por favor. ¿Cuánto cuesta esta chaqueta?' },
    { speaker: 'Seller', text: 'It’s sixty dollars. It’s very good.', es: 'Cuesta sesenta dólares. Es muy buena.' },
    { speaker: 'Customer', text: 'That’s expensive. How much are those shoes?', es: 'Es cara. ¿Cuánto cuestan aquellos zapatos?' },
    { speaker: 'Seller', text: 'They’re thirty dollars.', es: 'Cuestan treinta dólares.' },
    { speaker: 'Customer', text: 'Great. I want these black shoes, size nine.', es: 'Genial. Quiero estos zapatos negros, talla nueve.' },
    { speaker: 'Seller', text: 'OK. That’s thirty dollars, please.', es: 'Muy bien. Son treinta dólares, por favor.' },
    { speaker: 'Customer', text: 'Here you are. Thank you!', es: 'Aquí tiene. ¡Gracias!' }
  ],
  listening: {
    script: [
      { speaker: 'Anna', text: 'Look at these shirts! How much is this one?' }, { speaker: 'Seller', text: 'It’s fifteen dollars.' },
      { speaker: 'Anna', text: 'And that blue bag?' }, { speaker: 'Seller', text: 'That bag is twenty-five dollars.' },
      { speaker: 'Anna', text: 'Hmm, it’s expensive. I want two shirts, please.' }, { speaker: 'Seller', text: 'OK. Two shirts, thirty dollars.' }
    ],
    questions: [
      mc('a1u06-l1', 'How much is the shirt?', ['12 dollars', '15 dollars', '25 dollars'], 1, 'The shirt is fifteen dollars.'),
      mc('a1u06-l2', 'How much is the blue bag?', ['15 dollars', '25 dollars', '30 dollars'], 1, 'The bag is twenty-five dollars.'),
      tf('a1u06-l3', 'Anna thinks the bag is cheap.', false, 'She says: “It’s expensive.”'),
      mc('a1u06-l4', 'What does Anna buy?', ['Two shirts', 'One bag', 'Shoes'], 0, 'She buys two shirts.')
    ]
  },
  reading: {
    title: 'A shopping Saturday',
    text: 'Tom needs new clothes. On Saturday he goes to a big shop. These jackets are very expensive, but those shirts are cheap. He buys three shirts for forty-five dollars. Each shirt is fifteen dollars. Then he looks at some shoes. He wants shoes in size nine, but the shop doesn’t have them. He doesn’t buy shoes. He pays and goes home.',
    questions: [
      rc('a1u06-r1', 'What does Tom buy?', ['Three shirts', 'A jacket', 'Shoes'], 0, 'He buys three shirts.'),
      rc('a1u06-r2', 'How much is each shirt?', ['15 dollars', '45 dollars', '9 dollars'], 0, 'Each shirt is fifteen dollars.'),
      rc('a1u06-r3', 'Are the jackets cheap?', ['Yes, they are.', 'No, they aren’t.', 'The text doesn’t say.'], 1, 'The jackets are very expensive.'),
      rc('a1u06-r4', 'Why doesn’t Tom buy shoes?', ['They are too expensive', 'The shop doesn’t have his size', 'He doesn’t like shoes'], 1, 'The shop doesn’t have size nine.')
    ]
  },
  speaking: { prompt: 'Haz una compra simulada con un compañero: uno es cliente y el otro vendedor.', tasks: ['Point to objects: “This bag is …, that bag is …”.', 'Ask a price: “How much is this …? / How much are these …?”', 'Say what you want: “I want these …, size …, please.”', 'Say a price with numbers: “It’s twenty-five dollars.”'] },
  writing: { prompt: 'Write a short shopping dialogue (6 lines) between a customer and a seller. Use this/that/these/those, how much and how many.', rubric: ['Uses this/that for one thing and these/those for several.', 'Asks at least one question with How much.', 'Asks at least one question with How many.', 'Writes prices correctly (twenty dollars).'], model: 'Customer: How much is this bag? Seller: It’s twenty dollars. Customer: And those shoes? Seller: They’re thirty dollars. Customer: I want these shoes, please. Seller: How many pairs? Customer: Just one, thanks.' },
  pronunciation: {
    items: [{ word: 'expensive', ipa: '/ɪkˈspensɪv/', stress: 'ex-PEN-sive' }, { word: 'customer', ipa: '/ˈkʌstəmə/', stress: 'CUS-to-mer' }, { word: 'jacket', ipa: '/ˈdʒækɪt/', stress: 'JA-cket' }, { word: 'these', ipa: '/ðiːz/', stress: 'THESE' }, { word: 'shoes', ipa: '/ʃuːz/', stress: 'SHOES' }],
    tips: ['This suena /ðɪs/ (vocal corta) y these suena /ðiːz/ (vocal larga).', 'En shoes, la oe suena como u larga: /ʃuːz/.', 'En expensive la fuerza va en la segunda sílaba.']
  },
  exercises: [
    mc('a1u06-e1', '___ shoes are expensive. (They are near me.)', ['This', 'These', 'That'], 1, 'Plural and near → these.', 'Choose the correct word.'),
    fb('a1u06-e2', 'How ___ is this bag?', 'much', 'Price → how much.', undefined, 'Write much or many.'),
    fb('a1u06-e3', 'How ___ shirts do you want?', 'many', 'Countable → how many.', undefined, 'Write much or many.'),
    wo('a1u06-e4', ['much', 'is', 'How', 'that', 'jacket'], ['How', 'much', 'is', 'that', 'jacket'], 'How much + is + this/that + noun?'),
    tf('a1u06-e5', '“Those” is the plural of “that”.', true, 'that → those; this → these.'),
    mt('a1u06-e6', 'Match each word with its use.', [['this', 'one thing, near'], ['that', 'one thing, far'], ['these', 'many things, near'], ['those', 'many things, far']], 'Near = this/these; far = that/those.'),
    tr('a1u06-e7', 'Make the sentence negative.', 'This bag is cheap.', 'This bag isn’t cheap', 'is + not → isn’t.', ['This bag is not cheap']),
    tr('a1u06-e8', 'Ask about the price.', 'That shirt is twenty dollars.', 'How much is that shirt', 'How much + is + noun?'),
    rc('a1u06-e9', 'Which shoes cost twenty dollars?', ['Those shoes', 'These shoes', 'Both'], 1, 'These shoes are twenty dollars.', 'Those shoes are forty dollars. These shoes are twenty dollars.'),
    sa('a1u06-e10', 'Write a short question and answer about a price.', 'Model: “How much is this shirt? — It’s fifteen dollars.” Check: is/are agree with the noun.')
  ],
  assessment: [
    mc('a1u06-t1', '___ is my bag over there.', ['This', 'That', 'These'], 1, 'One thing, far → that.'),
    mc('a1u06-t2', 'How much ___ these shoes?', ['is', 'are', 'be'], 1, 'Plural → are.'),
    fb('a1u06-t3', 'How ___ bags do you want?', 'many', 'Bags are countable.', undefined, 'Write much or many.'),
    fb('a1u06-t4', '___ jackets over there are expensive.', 'Those', 'Plural and far → those.', undefined, 'Write this, that, these or those.'),
    tf('a1u06-t5', '“How much” is used for countable nouns only.', false, 'How much asks the price (or uncountable quantity). Countable → how many.'),
    tf('a1u06-t6', '“This” is for something near you.', true, 'This = one thing, near.'),
    wo('a1u06-t7', ['are', 'shoes', 'those', 'How', 'much'], ['How', 'much', 'are', 'those', 'shoes'], 'How much + are + those + noun.'),
    mc('a1u06-t8', 'Choose the correct sentence.', ['These shirts are cheap.', 'These shirt is cheap.', 'This shirts are cheap.'], 0, 'Plural noun and plural verb.'),
    tr('a1u06-t9', 'Make the sentence negative.', 'That jacket is expensive.', 'That jacket isn’t expensive', 'That jacket isn’t…', ['That jacket is not expensive']),
    mc('a1u06-t10', 'A: How much is this? B: ___', ['It’s ten dollars.', 'They’re ten dollars.', 'I’m ten dollars.'], 0, 'One thing → it.')
  ],
  review: ['this/that for one thing; these/those for many.', 'this/these = near; that/those = far.', 'How much is/are…? asks the price.', 'How many + countable noun asks the number.', 'Answer prices with it’s / they’re.']
};
export default unit;
