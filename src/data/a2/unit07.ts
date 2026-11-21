import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'a2-u07', level: 'A2', unitNumber: 7, title: 'Comparing Things', subtitle: 'Compare products, places and experiences',
  communicativeGoal: 'Comparar productos, lugares y experiencias y justificar una elección.',
  objectives: ['Formar y usar comparativos (-er than, more… than).', 'Formar y usar superlativos (the -est, the most…).', 'Usar as… as y not as… as para igualdad y diferencia.', 'Comparar opciones para tomar una decisión.'],
  grammar: {
    title: 'Comparative and superlative adjectives, as… as',
    explanation: [
      'Para comparar dos cosas se usa el comparativo + than. Adjetivos cortos (una sílaba): adjetivo + -er: tall → taller, cheap → cheaper. Si terminan en consonante-vocal-consonante se duplica la última: big → bigger. Si terminan en -y: easy → easier. Adjetivos largos: more + adjetivo: more expensive, more comfortable.',
      'Para decir que algo es el máximo de un grupo se usa el superlativo con the: the tallest, the cheapest, the most expensive, the most comfortable. Se usa in con lugares (the biggest city in Colombia) y of con grupos (the best of the three).',
      'Irregulares: good → better → the best; bad → worse → the worst; far → further → the furthest.',
      'As… as expresa igualdad: This laptop is as light as that one. Not as… as expresa que algo es menos: My car isn’t as modern as yours. También se puede usar less… than: This phone is less expensive than that one.',
      'Para matizar: much cheaper (mucho más barato), a bit bigger (un poco más grande), far better (mucho mejor).'
    ],
    forms: [
      { label: 'Comparative', lines: ['This phone is cheaper than that one.', 'The train is more comfortable than the bus.', 'Bogotá is bigger than Cali.', 'The new model is much better.'] },
      { label: 'Superlative', lines: ['It’s the fastest train in the country.', 'This is the most popular brand.', 'She is the best student of the class.', 'That was the worst trip of my life.'] },
      { label: 'As… as / not as… as', lines: ['This laptop is as light as that one.', 'My car isn’t as modern as yours.', 'He is as tall as his father.', 'Public transport is less expensive than taxis.'] }
    ]
  },
  vocabulary: [v('comfortable', 'cómodo', '/ˈkʌmftəbl/', 'COM-fta-ble'), v('convenient', 'conveniente, práctico', '/kənˈviːniənt/', 'con-VE-nient'), v('reliable', 'confiable', '/rɪˈlaɪəbl/', 're-LI-a-ble'), v('popular', 'popular', '/ˈpɒpjələ/', 'POP-u-lar'), v('modern', 'moderno', '/ˈmɒdn/', 'MO-dern'), v('noisy', 'ruidoso', '/ˈnɔɪzi/', 'NOI-sy'), v('quiet', 'tranquilo, silencioso', '/ˈkwaɪət/', 'QUI-et'), v('crowded', 'lleno de gente', '/ˈkraʊdɪd/', 'CROW-ded'), v('safe', 'seguro', '/seɪf/', 'SAFE'), v('dangerous', 'peligroso', '/ˈdeɪndʒərəs/', 'DAN-ge-rous'), v('heavy', 'pesado', '/ˈhevi/', 'HEA-vy'), v('light', 'ligero', '/laɪt/', 'LIGHT'), v('quick', 'rápido', '/kwɪk/', 'QUICK'), v('similar', 'similar', '/ˈsɪmələ/', 'SI-mi-lar'), v('different', 'diferente', '/ˈdɪfrənt/', 'DIF-frent'), v('brand', 'marca', '/brænd/', 'BRAND')],
  examples: [
    { en: 'This phone is cheaper than that one, but it isn’t as fast.', es: 'Este celular es más barato que ese, pero no es tan rápido.' },
    { en: 'The train is more comfortable than the bus, and it is also safer.', es: 'El tren es más cómodo que el bus, y también es más seguro.' },
    { en: 'Medellín is the cleanest city I have ever visited.', es: 'Medellín es la ciudad más limpia que he visitado.' },
    { en: 'My new flat is bigger than my old one, but it’s much noisier.', es: 'Mi apartamento nuevo es más grande que el anterior, pero es mucho más ruidoso.' },
    { en: 'She is as tall as her brother, although she is younger.', es: 'Ella es tan alta como su hermano, aunque es menor.' },
    { en: 'This is the most popular brand of coffee in the country.', es: 'Esta es la marca de café más popular del país.' },
    { en: 'The weather today is worse than yesterday.', es: 'El clima hoy es peor que ayer.' },
    { en: 'Of all the hotels, this one is the best value.', es: 'De todos los hoteles, este es el que tiene mejor relación calidad-precio.' }
  ],
  dialogue: [
    { speaker: 'Customer', text: 'I’m looking for a new phone. What’s the difference between these two?', es: 'Busco un celular nuevo. ¿Cuál es la diferencia entre estos dos?' },
    { speaker: 'Seller', text: 'This one is cheaper, but the other one is faster.', es: 'Este es más barato, pero el otro es más rápido.' },
    { speaker: 'Customer', text: 'How much more expensive is the faster one?', es: '¿Cuánto más caro es el más rápido?' },
    { speaker: 'Seller', text: 'About fifty dollars. It’s also lighter and it has the best camera in the shop.', es: 'Unos cincuenta dólares. También es más ligero y tiene la mejor cámara de la tienda.' },
    { speaker: 'Customer', text: 'Is the battery as good as the cheaper model?', es: '¿La batería es tan buena como la del modelo más barato?' },
    { speaker: 'Seller', text: 'It’s actually better. It lasts about two hours longer.', es: 'En realidad es mejor. Dura unas dos horas más.' },
    { speaker: 'Customer', text: 'Hmm. The cheaper one is bigger, so it isn’t as comfortable in my pocket.', es: 'Mmm. El más barato es más grande, así que no es tan cómodo en mi bolsillo.' },
    { speaker: 'Seller', text: 'That’s true. And the more expensive one is the most popular model this year.', es: 'Es cierto. Y el más caro es el modelo más popular este año.' },
    { speaker: 'Customer', text: 'OK, I think it’s worth the extra money. I’m going to take it.', es: 'Bien, creo que vale el dinero extra. Me lo voy a llevar.' },
    { speaker: 'Seller', text: 'Excellent choice. Do you want a case?', es: 'Excelente elección. ¿Quiere una funda?' }
  ],
  listening: {
    script: [
      { speaker: 'Mia', text: 'I’m thinking of moving to Medellín or Bogotá. What do you think?' }, { speaker: 'Leo', text: 'Medellín is smaller than Bogotá, and the weather is warmer.' },
      { speaker: 'Mia', text: 'But rents are more expensive in Medellín, aren’t they?' }, { speaker: 'Leo', text: 'Not really. In some areas rents are as high as in Bogotá. Bogotá is the biggest city, so it has more jobs.' },
      { speaker: 'Mia', text: 'And transport?' }, { speaker: 'Leo', text: 'The metro in Medellín is the cleanest and the most reliable. In Bogotá the traffic is worse.' }
    ],
    questions: [
      mc('a2u07-l1', 'Which city is smaller?', ['Medellín', 'Bogotá', 'They are the same'], 0, 'Medellín is smaller than Bogotá.'),
      mc('a2u07-l2', 'What does Leo say about rents?', ['They are sometimes as high as in Bogotá', 'They are much cheaper in Medellín', 'They are lower in Bogotá'], 0, 'In some areas rents are as high as in Bogotá.'),
      mc('a2u07-l3', 'Why does Bogotá have more jobs?', ['It is the biggest city', 'It is warmer', 'It has a metro'], 0, 'Bogotá is the biggest city.'),
      tf('a2u07-l4', 'Leo says the traffic is better in Bogotá.', false, 'He says the traffic is worse in Bogotá.')
    ]
  },
  reading: {
    title: 'Train or plane?',
    text: 'Many people think planes are always the best option for long trips because they are faster than trains. However, a new study compared both for journeys of less than a thousand kilometres. Trains are slower, but they are more comfortable and they produce less pollution. Planes are not as convenient as they seem: you have to arrive at the airport two hours earlier, and airports are usually further from city centres than train stations. Prices change a lot, but the cheapest tickets are often not as cheap as they look because of extra fees. The researchers say the best option depends on the distance and the budget.',
    questions: [
      rc('a2u07-r1', 'What did the study compare?', ['Trains and planes', 'Cars and buses', 'Trains and buses'], 0, 'It compared trains and planes.'),
      rc('a2u07-r2', 'Which is more comfortable according to the text?', ['Trains', 'Planes', 'Both are the same'], 0, 'Trains are more comfortable.'),
      rc('a2u07-r3', 'Why aren’t planes as convenient as they seem?', ['You have to arrive early and airports are further away', 'They are slower', 'They are less safe'], 0, 'You arrive two hours earlier and airports are further from city centres.'),
      rc('a2u07-r4', 'What is the conclusion of the researchers?', ['It depends on distance and budget', 'Planes are always better', 'Trains are always cheaper'], 0, 'The best option depends on the distance and the budget.')
    ]
  },
  speaking: { prompt: 'Compara dos opciones reales (dos celulares, dos ciudades, dos medios de transporte) y justifica cuál prefieres.', tasks: ['Make three comparisons with -er than and more… than.', 'Say which one is the best and why, using a superlative.', 'Say one thing that is similar with as… as and one that isn’t as… as.', 'Ask your partner: “Which one do you prefer, and why?”'] },
  writing: { prompt: 'Write 8 to 10 sentences comparing two products, places or experiences (for example two cities, two phones or two jobs). Finish with your recommendation.', rubric: ['Uses at least three comparatives and one superlative correctly.', 'Uses as… as or not as… as at least once.', 'Spells -er and -est forms correctly (bigger, easier).', 'Ends with a clear recommendation and a reason.'], model: 'I have compared two phones. Phone A is cheaper than phone B, but it isn’t as fast. Phone B has the best camera and it is lighter, so it is more comfortable to use. The battery of phone A is as good as the battery of phone B. In my opinion, phone B is the better choice because it is more reliable.' },
  pronunciation: {
    items: [{ word: 'comfortable', ipa: '/ˈkʌmftəbl/', stress: 'COM-fta-ble' }, { word: 'convenient', ipa: '/kənˈviːniənt/', stress: 'con-VE-nient' }, { word: 'dangerous', ipa: '/ˈdeɪndʒərəs/', stress: 'DAN-ge-rous' }, { word: 'than', ipa: '/ðæn/', stress: 'THAN' }, { word: 'as… as', ipa: '/əz … əz/', stress: 'as … as' }],
    tips: ['Comfortable se pronuncia con tres sílabas, no cuatro.', 'En than y as la vocal es débil /ðən/ y /əz/ en una frase normal.', 'En superlativos la fuerza va en el adjetivo: the MOST comfortable.']
  },
  exercises: [
    mc('a2u07-e1', 'This bag is ___ than that one.', ['cheaper', 'more cheap', 'cheapest'], 0, 'Short adjective: cheap → cheaper.', 'Choose the correct form.'),
    fb('a2u07-e2', 'Gold is ___ expensive than silver.', 'more', 'Long adjective: more + adjective + than.', undefined, 'Write the missing word.'),
    fb('a2u07-e3', 'She is the ___ (tall) girl in the class.', 'tallest', 'Superlative: the tallest.', undefined, 'Write the superlative.'),
    wo('a2u07-e4', ['as', 'is', 'laptop', 'This', 'light', 'as', 'that', 'one'], ['This', 'laptop', 'is', 'as', 'light', 'as', 'that', 'one'], 'as + adjective + as.'),
    tf('a2u07-e5', '“The most big city” is correct.', false, 'Short adjectives: the biggest city.'),
    mt('a2u07-e6', 'Match each adjective with its comparative.', [['good', 'better'], ['bad', 'worse'], ['far', 'further'], ['many', 'more']], 'Irregular forms must be learned.'),
    tr('a2u07-e7', 'Write the comparative with “than that one”.', 'This hotel is cheap.', 'This hotel is cheaper than that one', 'cheap → cheaper than.'),
    tr('a2u07-e8', 'Use not as… as.', 'Your car is more modern than mine. → My car…', 'My car isn’t as modern as yours', 'not as modern as = menos moderno que.', ['My car is not as modern as yours']),
    rc('a2u07-e9', 'Which flat is quieter?', ['Ana’s', 'Tom’s', 'Both'], 0, 'Tom’s flat is noisier, so Ana’s is quieter.', 'Ana’s flat is small, but it is cheaper than Tom’s. Tom’s flat is bigger, but it is noisier.'),
    sa('a2u07-e10', 'Compare two cities, phones or jobs in 4 sentences: one comparative, one superlative, one as… as and one not as… as.', 'Model: “Bogotá is bigger than Cali. It is the biggest city in Colombia. Cali is as warm as Medellín. Cali isn’t as crowded as Bogotá.” Check: -er/-est or more/most, than, the and as… as.')
  ],
  assessment: [
    mc('a2u07-t1', 'Bogotá is ___ than Cali.', ['bigger', 'biggest', 'more big'], 0, 'big → bigger (double the g).'),
    mc('a2u07-t2', 'This is the ___ expensive hotel in the city.', ['most', 'more', 'much'], 0, 'Long adjective → the most + adjective.'),
    fb('a2u07-t3', 'My brother is not as tall ___ me.', 'as', 'not as … as.', undefined, 'Write the missing word.'),
    fb('a2u07-t4', 'The weather today is ___ than yesterday. (bad)', 'worse', 'bad → worse.', undefined, 'Write the comparative.'),
    tf('a2u07-t5', 'We use “the” before superlatives.', true, 'the tallest, the most popular.'),
    tf('a2u07-t6', '“More comfortable” is the comparative of “comfortable”.', true, 'Long adjectives use more.'),
    wo('a2u07-t7', ['is', 'the', 'This', 'best', 'restaurant', 'in', 'town'], ['This', 'is', 'the', 'best', 'restaurant', 'in', 'town'], 'the best + noun + in + place.'),
    mc('a2u07-t8', 'Choose the correct sentence.', ['She is taller as me.', 'She is taller than me.', 'She is more tall than me.'], 1, 'taller than.'),
    tr('a2u07-t9', 'Rewrite with as… as.', 'These shoes cost the same as those shoes. (expensive)', 'These shoes are as expensive as those shoes', 'as + adjective + as.'),
    mc('a2u07-t10', 'Choose the superlative of “good”.', ['gooder', 'the best', 'the most good'], 1, 'good → better → the best.')
  ],
  review: ['Comparative: adjective + -er than / more + adjective + than.', 'Superlative: the + -est / the most + adjective.', 'Irregular: good–better–best; bad–worse–worst; far–further–furthest.', 'as… as = equal; not as… as = less.', 'Use in with places and of with groups.']
};
export default unit;
