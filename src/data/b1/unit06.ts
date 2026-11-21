import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'b1-u06', level: 'B1', unitNumber: 6, title: 'Travel and Culture', subtitle: 'Describe places, traditions and cultural experiences',
  communicativeGoal: 'Describir lugares y experiencias culturales con detalle, añadiendo información con oraciones de relativo y valorando el impacto del turismo.',
  objectives: ['Usar oraciones de relativo especificativas (sin comas) para identificar personas, cosas y lugares.', 'Usar oraciones de relativo explicativas (con comas) para añadir información extra.', 'Elegir correctamente who, which, that, whose, where y when.', 'Describir un destino y contar una experiencia cultural con riqueza de detalles.'],
  grammar: {
    title: 'Defining and non-defining relative clauses',
    explanation: [
      'Las oraciones de relativo dan información sobre un sustantivo. Las especificativas (defining) son necesarias para identificar de qué o de quién hablamos y no llevan comas: The guide who showed us the city was excellent. (No sabríamos qué guía sin la cláusula.) Pueden usar who (personas), which (cosas), that (personas o cosas), whose (posesión), where (lugares) y when (tiempos).',
      'En las especificativas, si el pronombre es el objeto de la cláusula se puede omitir: The museum (that) we visited was free. The town (that) we stayed in was charming. Si es el sujeto, no se puede omitir: The woman who lives next door is a guide.',
      'Las explicativas (non-defining) añaden información extra que no es necesaria para identificar el sustantivo; van entre comas y NO admiten that: Machu Picchu, which was built in the 15th century, attracts millions of visitors. My cousin, who works as a guide, speaks four languages. El pronombre nunca se omite.',
      'Whose indica posesión: a country whose economy depends on tourism. Con preposiciones: The people with whom we travelled were friendly (formal) / The people we travelled with were friendly (más natural). Which también puede referirse a toda una idea anterior: He arrived late, which annoyed everyone.',
      'El significado cambia con las comas: My brother who lives in Spain is a chef (tengo varios hermanos; hablo del que vive en España). My brother, who lives in Spain, is a chef (solo tengo un hermano; añado dato extra).'
    ],
    forms: [
      { label: 'Defining (no commas)', lines: ['The guide who showed us the city was excellent.', 'The festival that we attended was held in Cartagena.', 'This is the village where my grandmother was born.', 'The museum (that) we visited was free.'] },
      { label: 'Non-defining (commas)', lines: ['Machu Picchu, which was built in the 15th century, attracts millions of visitors.', 'My cousin, who works as a guide, speaks four languages.', 'Colombia, whose coffee is famous worldwide, welcomes more tourists each year.', 'He arrived late, which annoyed everyone.'] },
      { label: 'Whose, where, when, prepositions', lines: ['a country whose economy depends on tourism', 'the town where we stayed / the town we stayed in', 'the day when we arrived', 'the people with whom we travelled / the people we travelled with'] },
      { label: 'Useful expressions and collocations', lines: ['off the beaten track; a must-see', 'steeped in history; a melting pot of cultures', 'get a taste of local life', 'break the ice; come across (a place)', 'leave a lasting impression', 'culture shock; immerse yourself in', 'a hidden gem; a tourist trap', 'preserve cultural heritage'] }
    ]
  },
  vocabulary: [
    v('landmark', 'lugar emblemático', '/ˈlændmɑːk/', 'LAND-mark'), v('heritage', 'patrimonio', '/ˈherɪtɪdʒ/', 'HER-i-tage'), v('tradition', 'tradición', '/trəˈdɪʃn/', 'tra-DI-tion'),
    v('custom', 'costumbre', '/ˈkʌstəm/', 'CUS-tom'), v('cuisine', 'gastronomía', '/kwɪˈziːn/', 'qui-SINE'), v('itinerary', 'itinerario', '/aɪˈtɪnərəri/', 'i-TIN-er-ar-y'),
    v('hospitality', 'hospitalidad', '/ˌhɒspɪˈtæləti/', 'hos-pi-TAL-i-ty'), v('ceremony', 'ceremonia', '/ˈserəməni/', 'CER-e-mo-ny'), v('folklore', 'folclor', '/ˈfəʊklɔː/', 'FOLK-lore'),
    v('ancestor', 'antepasado', '/ˈænsestə/', 'AN-ces-tor'), v('handicraft', 'artesanía', '/ˈhændikrɑːft/', 'HAN-di-craft'), v('scenery', 'paisaje', '/ˈsiːnəri/', 'SCE-ner-y'),
    v('authentic', 'auténtico', '/ɔːˈθentɪk/', 'au-THEN-tic'), v('tourism', 'turismo', '/ˈtʊərɪzəm/', 'TOUR-ism'), v('sustainable', 'sostenible', '/səˈsteɪnəbl/', 'sus-TAIN-a-ble'),
    v('preserve', 'preservar', '/prɪˈzɜːv/', 'pre-SERVE'), v('indigenous', 'indígena', '/ɪnˈdɪdʒənəs/', 'in-DIG-e-nous'), v('region', 'región', '/ˈriːdʒən/', 'RE-gion'),
    v('diversity', 'diversidad', '/daɪˈvɜːsəti/', 'di-VER-si-ty'), v('mass tourism', 'turismo masivo', '/mæs ˈtʊərɪzəm/', 'mass TOUR-ism')
  ],
  examples: [
    { en: 'The guide who took us through the old town knew every story behind its buildings.', es: 'El guía que nos llevó por el casco antiguo conocía cada historia detrás de sus edificios.' },
    { en: 'Cusco, which was the capital of the Inca Empire, still preserves much of its heritage.', es: 'Cusco, que fue la capital del Imperio inca, aún conserva gran parte de su patrimonio.' },
    { en: 'It is a region whose cuisine reflects centuries of cultural exchange.', es: 'Es una región cuya gastronomía refleja siglos de intercambio cultural.' },
    { en: 'The village where the festival takes place has fewer than a thousand inhabitants.', es: 'El pueblo donde se celebra el festival tiene menos de mil habitantes.' },
    { en: 'The restaurant we ate at was recommended by a local, which made the experience more authentic.', es: 'El restaurante donde comimos nos lo recomendó un local, lo que hizo la experiencia más auténtica.' },
    { en: 'My grandmother, who learned to weave as a child, still sells her handicrafts at the market.', es: 'Mi abuela, que aprendió a tejer de niña, todavía vende sus artesanías en el mercado.' },
    { en: 'Travellers who respect local customs are usually welcomed warmly.', es: 'Los viajeros que respetan las costumbres locales suelen ser recibidos con calidez.' },
    { en: 'The summer when we visited Oaxaca was the best holiday I have ever had.', es: 'El verano en que visitamos Oaxaca fue las mejores vacaciones que he tenido.' }
  ],
  dialogue: [
    { speaker: 'Tomás', text: 'Welcome back, Ana! How was the trip to Peru?', es: '¡Bienvenida, Ana! ¿Cómo estuvo el viaje a Perú?' },
    { speaker: 'Ana', text: 'Unforgettable. We visited Cusco, which was the old capital of the Inca Empire, and then Machu Picchu.', es: 'Inolvidable. Visitamos Cusco, que fue la antigua capital del Imperio inca, y luego Machu Picchu.' },
    { speaker: 'Tomás', text: 'That’s the place that everybody dreams about, isn’t it? Was it too crowded?', es: 'Ese es el lugar con el que todo el mundo sueña, ¿no? ¿Estaba muy lleno?' },
    { speaker: 'Ana', text: 'Honestly, yes, in the main area. But we found a guide who knew a quieter route, so we avoided most of the crowds.', es: 'Sinceramente, sí, en la zona principal. Pero encontramos un guía que conocía una ruta más tranquila, así que evitamos casi toda la multitud.' },
    { speaker: 'Tomás', text: 'Lucky you. Did you try the local food?', es: 'Qué suerte. ¿Probaron la comida local?' },
    { speaker: 'Ana', text: 'Of course. There’s a restaurant in Cusco where they serve guinea pig. I didn’t have the courage, but my brother, who loves trying everything, ordered it.', es: 'Claro. Hay un restaurante en Cusco donde sirven cuy. Yo no tuve valor, pero mi hermano, que ama probarlo todo, lo pidió.' },
    { speaker: 'Tomás', text: 'Ha! What did he think?', es: '¡Ja! ¿Qué le pareció?' },
    { speaker: 'Ana', text: 'He said it tasted like chicken, which I found hard to believe.', es: 'Dijo que sabía a pollo, lo cual me costó creer.' },
    { speaker: 'Tomás', text: 'And the people? Were they friendly?', es: '¿Y la gente? ¿Fue amable?' },
    { speaker: 'Ana', text: 'Very. The family whose house we stayed in taught us how to weave; it’s a tradition that has been passed down for generations.', es: 'Mucho. La familia en cuya casa nos quedamos nos enseñó a tejer; es una tradición que se ha transmitido por generaciones.' },
    { speaker: 'Tomás', text: 'That sounds much more authentic than a hotel.', es: 'Suena mucho más auténtico que un hotel.' },
    { speaker: 'Ana', text: 'It was. I’d recommend it to anyone who wants to get a taste of local life.', es: 'Lo fue. Se lo recomendaría a cualquiera que quiera conocer la vida local.' }
  ],
  listening: {
    script: [
      { speaker: 'Guide', text: 'Welcome to the old town. The building that you can see on your left is the cathedral, which was completed in 1650.' },
      { speaker: 'Guide', text: 'Behind it is the market, where local farmers sell their products every Saturday.' },
      { speaker: 'Tourist', text: 'Is that the square where the festival takes place?' },
      { speaker: 'Guide', text: 'Yes, it is. The festival, which attracts around fifty thousand visitors, celebrates the harvest.' },
      { speaker: 'Tourist', text: 'Can we visit the house of the writer who lived here?' },
      { speaker: 'Guide', text: 'Of course. The house, which is now a museum, is just around the corner. You don’t have to buy a ticket in advance, but the visitors who arrive early avoid the queues.' }
    ],
    questions: [
      mc('b1u06-l1', 'When was the cathedral completed?', ['1650', '1560', '1750'], 0, 'It was completed in 1650.'),
      mc('b1u06-l2', 'What do local farmers do at the market?', ['Sell their products on Saturdays', 'Hold a festival every day', 'Give guided tours'], 0, 'They sell their products every Saturday.'),
      mc('b1u06-l3', 'What does the festival celebrate?', ['The harvest', 'A war', 'The cathedral'], 0, 'The festival celebrates the harvest.'),
      tf('b1u06-l4', 'Visitors must buy museum tickets in advance.', false, 'The guide says you don’t have to buy a ticket in advance.'),
      mc('b1u06-l5', 'Why do early visitors avoid the queues?', ['Fewer people have arrived yet', 'The museum is free', 'Tickets are cheaper'], 0, 'Those who arrive early avoid the queues: there are fewer people.')
    ]
  },
  reading: {
    title: 'When success becomes a problem',
    text: 'For many cities that depend on tourism, success has become a problem. Venice, which receives around thirty million visitors a year, has introduced an entry fee for day-trippers, a measure that has divided public opinion. Residents who live in the historic centre complain that rents are rising and that neighbourhood shops are being replaced by souvenir stores. On the other hand, tourism also creates jobs for people whose families have lived there for generations. Experts who study sustainable tourism suggest that the solution is not to ban visitors but to spread them across the year and across the region. Smaller towns, which rarely appear in guidebooks, could benefit from travellers who are looking for authentic experiences. However, this will only work if local communities, whose voices are rarely heard, take part in the decisions.',
    questions: [
      rc('b1u06-r1', 'What has Venice introduced?', ['An entry fee for day-trippers', 'A ban on tourists', 'Free tickets'], 0, 'It has introduced an entry fee for day-trippers.'),
      rc('b1u06-r2', 'Who complains about rising rents?', ['Residents of the historic centre', 'Tourists', 'Hotel owners'], 0, 'Residents who live in the historic centre complain about rents.'),
      rc('b1u06-r3', 'What do experts suggest?', ['Spread visitors across the year and the region', 'Ban visitors', 'Raise prices only'], 0, 'To spread them across the year and across the region.'),
      rc('b1u06-r4', 'What condition does the writer give for the solution to work?', ['Local communities must take part in decisions', 'Hotels must close', 'Guidebooks must be banned'], 0, 'It only works if local communities take part in the decisions.'),
      rc('b1u06-r5', 'What can be inferred about the writer’s view?', ['Tourism has benefits and costs that need balancing', 'Tourism is purely negative', 'Tourism is purely positive'], 0, 'The text mentions both jobs and problems and looks for a balance.')
    ]
  },
  speaking: { prompt: 'Presenta a tu compañero un lugar que conozcas bien (una ciudad, un pueblo o una fiesta) en 2 minutos. Tu compañero te pregunta como si pensara viajar allí.', tasks: ['Describe the place with at least three relative clauses (two defining, one non-defining).', 'Explain one tradition or custom: “It’s a tradition that / which…”.', 'Recommend a person, a place and a dish using who, where and which.', 'Say one positive and one negative effect of tourism there.'] },
  writing: { prompt: 'Write a travel article of 150 to 180 words about a place that you know or would like to visit. Use at least four relative clauses (including one with whose or where and at least one non-defining clause with commas).', rubric: ['Uses defining relative clauses without commas.', 'Uses non-defining clauses with commas and never with that.', 'Uses a variety of relative pronouns (who, which, whose, where, when).', 'Describes cultural elements, not only tourist attractions.'], model: 'Cartagena, which is on the Caribbean coast, is a city that combines history and colour. The old town, where narrow streets are filled with balconies and flowers, was declared a World Heritage Site in 1984. Visitors who walk along the walls at sunset will understand why. The people, whose hospitality is famous, always have a story to tell. If you want to get off the beaten track, take a boat to the islands where fishermen still live as their ancestors did.' },
  pronunciation: {
    items: [{ word: 'cuisine', ipa: '/kwɪˈziːn/', stress: 'qui-SINE' }, { word: 'itinerary', ipa: '/aɪˈtɪnərəri/', stress: 'i-TIN-er-ar-y' }, { word: 'hospitality', ipa: '/ˌhɒspɪˈtæləti/', stress: 'hos-pi-TAL-i-ty' }, { word: 'indigenous', ipa: '/ɪnˈdɪdʒənəs/', stress: 'in-DIG-e-nous' }, { word: 'diversity', ipa: '/daɪˈvɜːsəti/', stress: 'di-VER-si-ty' }],
    tips: ['En las oraciones explicativas, la voz hace una pausa antes y después de la cláusula entre comas: Machu Picchu, | which was built in the 15th century, | attracts…', 'En las especificativas no hay pausa: The guide who showed us the city was excellent.', 'Whose suena /huːz/, igual que who’s (who is): se distinguen por el contexto.']
  },
  exercises: [
    mc('b1u06-e1', 'The woman ___ lives next door is a guide.', ['who', 'which', 'whose'], 0, 'For people → who (or that).', 'Choose the relative pronoun.'),
    fb('b1u06-e2', 'This is the village ___ my grandmother was born.', 'where', 'Place → where.', undefined, 'Write the relative pronoun.'),
    fb('b1u06-e3', 'My cousin, ___ works as a guide, speaks four languages.', 'who', 'Non-defining clause about a person → who (never that).', undefined, 'Write the relative pronoun.'),
    wo('b1u06-e4', ['town', 'The', 'in', 'stayed', 'we', 'was', 'charming'], ['The', 'town', 'we', 'stayed', 'in', 'was', 'charming'], 'The pronoun is omitted and the preposition goes at the end.'),
    tf('b1u06-e5', 'We can use “that” in a non-defining relative clause.', false, 'In non-defining clauses use who or which, with commas.'),
    mt('b1u06-e6', 'Match each pronoun with its use.', [['who', 'people'], ['which', 'things or ideas'], ['whose', 'possession'], ['where', 'places']], 'Choose by the noun you refer to.'),
    tr('b1u06-e7', 'Combine with a non-defining clause.', 'Machu Picchu was built in the 15th century. It attracts millions of visitors.', 'Machu Picchu, which was built in the 15th century, attracts millions of visitors', 'which + commas.', ['Machu Picchu which was built in the 15th century attracts millions of visitors']),
    tr('b1u06-e8', 'Combine with whose.', 'I met a man. His brother is a famous chef.', 'I met a man whose brother is a famous chef', 'whose + noun.'),
    rc('b1u06-e9', 'What can be inferred?', ['The festival is important for local identity', 'Tourists organise it', 'It takes place monthly'], 0, 'Locals say it keeps their traditions alive.', 'The festival, which takes place every August, attracts many tourists. The locals who organise it say it keeps their traditions alive.'),
    sa('b1u06-e10', 'Write 4 to 5 sentences describing a place you know. Include two defining and two non-defining relative clauses.', 'Model: “Bogotá, which is the capital, is a city that never sleeps. The neighbourhood where I live is quiet. My aunt, who loves cooking, makes the best ajiaco.” Check: commas only in non-defining clauses and no that after a comma.')
  ],
  assessment: [
    mc('b1u06-t1', 'The hotel ___ we stayed in was cheap.', ['that', 'whose', 'who'], 0, 'Defining clause about a thing → that / which.'),
    mc('b1u06-t2', 'Cartagena, ___ is on the coast, is a popular destination.', ['which', 'that', 'who'], 0, 'Non-defining → which, with commas.'),
    fb('b1u06-t3', 'That’s the writer ___ book became a bestseller.', 'whose', 'Possession → whose.', undefined, 'Write the relative pronoun.'),
    fb('b1u06-t4', 'The year ___ we visited Rome was 2019.', 'when', 'Time → when (or that).', ['that'], 'Write the relative pronoun.'),
    tf('b1u06-t5', 'In defining clauses we can sometimes omit the relative pronoun when it is the object.', true, 'The museum (that) we visited was free.'),
    tf('b1u06-t6', 'Non-defining clauses are written without commas.', false, 'They are separated by commas.'),
    wo('b1u06-t7', ['guide', 'The', 'who', 'showed', 'us', 'the', 'city', 'was', 'excellent'], ['The', 'guide', 'who', 'showed', 'us', 'the', 'city', 'was', 'excellent'], 'Defining relative clause.'),
    mc('b1u06-t8', 'Which sentence has a defining relative clause?', ['The people who live here are friendly.', 'My brother, who lives here, is friendly.', 'Cali, which is warm, is friendly.'], 0, 'No commas = defining.'),
    tr('b1u06-t9', 'Join with who.', 'I know a man. He speaks six languages.', 'I know a man who speaks six languages', 'who replaces he.', ['I know a man that speaks six languages']),
    mc('b1u06-t10', 'Choose the correct sentence.', ['The festival, which we attended, was fantastic.', 'The festival, that we attended, was fantastic.', 'The festival, what we attended, was fantastic.'], 0, 'Non-defining → which, never that.')
  ],
  review: ['Defining clauses identify the noun and have no commas; non-defining clauses add extra information between commas.', 'who = people; which = things; that = people or things (defining only); whose = possession; where = places; when = time.', 'The pronoun can be omitted only in defining clauses when it is the object.', 'Which can refer to a whole idea: He arrived late, which annoyed everyone.', 'Describe places with culture, traditions and people, not only monuments.']
};
export default unit;
