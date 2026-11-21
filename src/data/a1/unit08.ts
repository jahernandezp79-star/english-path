import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'a1-u08', level: 'A1', unitNumber: 8, title: 'Places and Directions', subtitle: 'Ask for and give directions in a town',
  communicativeGoal: 'Pedir y dar direcciones sencillas para llegar a un lugar y describir dónde están los sitios de una ciudad.',
  objectives: ['Usar el imperativo para dar instrucciones y direcciones.', 'Usar preposiciones de lugar para ubicar sitios.', 'Hacer preguntas básicas para pedir direcciones.', 'Seguir y dar una ruta corta.'],
  grammar: {
    title: 'Imperatives, prepositions of place and basic questions',
    explanation: [
      'El imperativo se forma con el verbo base y sin sujeto: Turn left. Go straight. Cross the street. Sirve para dar órdenes, instrucciones y direcciones. Se puede suavizar con please.',
      'Para el imperativo negativo se usa Don’t + verbo base: Don’t turn right. Don’t cross here.',
      'Para ubicar un lugar usamos preposiciones: next to (junto a), opposite (enfrente de), between (entre), in front of (delante de), behind (detrás de) y on the corner of (en la esquina de).',
      'Para preguntar direcciones: Excuse me, where is the bank? / Is there a bank near here? / How do I get to the station? Las respuestas usan imperativos y It’s…: Go straight. It’s on the left.'
    ],
    forms: [
      { label: 'Imperative', lines: ['Go straight.', 'Turn left at the corner.', 'Cross the street, please.', 'Don’t turn right.'] },
      { label: 'Places', lines: ['The bank is next to the supermarket.', 'The station is opposite the hospital.', 'The park is between the school and the bank.', 'The restaurant is on the corner.'] },
      { label: 'Questions', lines: ['Where is the bank?', 'Is there a bank near here?', 'How do I get to the station?', 'Is it near? — Yes, it is. / No, it isn’t.'] }
    ]
  },
  vocabulary: [v('bank', 'banco', '/bæŋk/', 'BANK'), v('supermarket', 'supermercado', '/ˈsuːpəmɑːkɪt/', 'SU-per-mar-ket'), v('hospital', 'hospital', '/ˈhɒspɪtl/', 'HOS-pi-tal'), v('station', 'estación', '/ˈsteɪʃn/', 'STA-tion'), v('restaurant', 'restaurante', '/ˈrestrɒnt/', 'RES-tau-rant'), v('park', 'parque', '/pɑːk/', 'PARK'), v('street', 'calle', '/striːt/', 'STREET'), v('corner', 'esquina', '/ˈkɔːnə/', 'COR-ner'), v('straight', 'derecho, recto', '/streɪt/', 'STRAIGHT'), v('left', 'izquierda', '/left/', 'LEFT'), v('right', 'derecha', '/raɪt/', 'RIGHT'), v('turn', 'girar', '/tɜːn/', 'TURN'), v('cross', 'cruzar', '/krɒs/', 'CROSS'), v('opposite', 'enfrente de', '/ˈɒpəzɪt/', 'OP-po-site')],
  examples: [
    { en: 'Go straight and turn left.', es: 'Siga derecho y gire a la izquierda.' }, { en: 'The bank is next to the supermarket.', es: 'El banco está junto al supermercado.' },
    { en: 'Don’t cross the street here.', es: 'No cruce la calle aquí.' }, { en: 'The station is opposite the hospital.', es: 'La estación está enfrente del hospital.' },
    { en: 'Is there a restaurant near here?', es: '¿Hay un restaurante cerca de aquí?' }, { en: 'Excuse me, where is the park?', es: 'Disculpe, ¿dónde está el parque?' },
    { en: 'Turn right at the corner.', es: 'Gire a la derecha en la esquina.' }, { en: 'The school is between the bank and the park.', es: 'El colegio está entre el banco y el parque.' }
  ],
  dialogue: [
    { speaker: 'Tourist', text: 'Excuse me, is there a bank near here?', es: 'Disculpe, ¿hay un banco cerca de aquí?' },
    { speaker: 'Local', text: 'Yes, there is. Go straight and turn left at the corner.', es: 'Sí. Siga derecho y gire a la izquierda en la esquina.' },
    { speaker: 'Tourist', text: 'Turn left at the corner. And then?', es: 'Girar a la izquierda en la esquina. ¿Y luego?' },
    { speaker: 'Local', text: 'The bank is on the right, next to the supermarket.', es: 'El banco está a la derecha, junto al supermercado.' },
    { speaker: 'Tourist', text: 'Is it near?', es: '¿Está cerca?' },
    { speaker: 'Local', text: 'Yes, it is. It’s five minutes from here.', es: 'Sí. Está a cinco minutos de aquí.' },
    { speaker: 'Tourist', text: 'Thank you very much.', es: 'Muchas gracias.' },
    { speaker: 'Local', text: 'You’re welcome. Don’t cross here. Use the corner.', es: 'De nada. No cruce aquí. Use la esquina.' }
  ],
  listening: {
    script: [
      { speaker: 'Man', text: 'Excuse me, how do I get to the station?' }, { speaker: 'Woman', text: 'Go straight on this street. Turn right at the park.' },
      { speaker: 'Man', text: 'Turn right at the park. And then?' }, { speaker: 'Woman', text: 'Go straight again. The station is opposite the hospital.' },
      { speaker: 'Man', text: 'Is it near?' }, { speaker: 'Woman', text: 'Yes, it is. It’s ten minutes from here.' }
    ],
    questions: [
      mc('a1u08-l1', 'Where does the man want to go?', ['To the station', 'To the hospital', 'To the park'], 0, 'He asks how to get to the station.'),
      mc('a1u08-l2', 'Where does he turn right?', ['At the park', 'At the bank', 'At the corner'], 0, 'Turn right at the park.'),
      mc('a1u08-l3', 'Where is the station?', ['Next to the park', 'Opposite the hospital', 'Behind the bank'], 1, 'The station is opposite the hospital.'),
      tf('a1u08-l4', 'The station is ten minutes from here.', true, 'She says: “It’s ten minutes from here.”')
    ]
  },
  reading: {
    title: 'My neighbourhood',
    text: 'I live in a small neighbourhood. My house is on Green Street. There is a park opposite my house. The supermarket is next to the park, and the bank is between the supermarket and the restaurant. The school is on the corner of Green Street and Main Street. To go to the hospital, go straight on Main Street and turn right at the station. It is near my house.',
    questions: [
      rc('a1u08-r1', 'Where is the park?', ['Opposite the writer’s house', 'Next to the bank', 'Behind the school'], 0, 'The park is opposite the house.'),
      rc('a1u08-r2', 'Where is the bank?', ['Between the supermarket and the restaurant', 'Next to the station', 'On the corner of Main Street'], 0, 'It is between the supermarket and the restaurant.'),
      rc('a1u08-r3', 'Where is the school?', ['On the corner of Green Street and Main Street', 'Next to the park', 'Opposite the hospital'], 0, 'The school is on the corner of Green Street and Main Street.'),
      rc('a1u08-r4', 'How do you go to the hospital?', ['Go straight on Main Street and turn right at the station', 'Turn left at the park', 'Cross the supermarket'], 0, 'Go straight on Main Street and turn right at the station.')
    ]
  },
  speaking: { prompt: 'Practica dar direcciones con un compañero usando un mapa real o imaginario.', tasks: ['Ask: “Excuse me, where is the …? Is there a … near here?”', 'Give directions: “Go straight. Turn left at the …”.', 'Say where a place is: “It’s next to / opposite / between …”.', 'Give one warning: “Don’t turn right. Don’t cross here.”'] },
  writing: { prompt: 'Write directions (6 sentences) from your home to a shop, school or park. Use imperatives and prepositions of place.', rubric: ['Uses imperatives (Go, Turn, Cross).', 'Uses at least two prepositions of place.', 'Includes left or right and a landmark.', 'Uses capital letters and full stops.'], model: 'Go straight on my street. Turn left at the corner. Cross the street. The supermarket is next to the bank. It is opposite the park. Don’t turn right at the school.' },
  pronunciation: {
    items: [{ word: 'supermarket', ipa: '/ˈsuːpəmɑːkɪt/', stress: 'SU-per-mar-ket' }, { word: 'hospital', ipa: '/ˈhɒspɪtl/', stress: 'HOS-pi-tal' }, { word: 'opposite', ipa: '/ˈɒpəzɪt/', stress: 'OP-po-site' }, { word: 'straight', ipa: '/streɪt/', stress: 'STRAIGHT' }, { word: 'station', ipa: '/ˈsteɪʃn/', stress: 'STA-tion' }],
    tips: ['En straight las letras gh no se pronuncian.', 'En station, -tion suena /ʃn/ (“shn”).', 'Las palabras largas tienen una sílaba fuerte: HOS-pi-tal, OP-po-site.']
  },
  exercises: [
    mc('a1u08-e1', '___ left at the corner.', ['Turn', 'Turns', 'Turning'], 0, 'Imperative = base verb.', 'Choose the correct form.'),
    fb('a1u08-e2', 'Go ___ and then turn right.', 'straight', 'Go straight = siga derecho.', undefined, 'Write the missing word.'),
    fb('a1u08-e3', 'The bank is ___ the supermarket and the restaurant. (in the middle)', 'between', 'Between = entre.', undefined, 'Write a preposition.'),
    wo('a1u08-e4', ['the', 'is', 'bank', 'Where'], ['Where', 'is', 'the', 'bank'], 'Where + is + noun?'),
    tf('a1u08-e5', '“Don’t turn left” means you can turn left.', false, 'Don’t = no.'),
    mt('a1u08-e6', 'Match each word with its Spanish meaning.', [['left', 'izquierda'], ['right', 'derecha'], ['straight', 'derecho, recto'], ['corner', 'esquina']], 'Practise with a real map.'),
    tr('a1u08-e7', 'Change to an imperative.', 'You turn left.', 'Turn left', 'Remove the subject.'),
    tr('a1u08-e8', 'Make the imperative negative.', 'Turn right.', 'Don’t turn right', 'Don’t + base verb.', ['Do not turn right']),
    rc('a1u08-e9', 'Where is the restaurant?', ['Next to the station', 'Opposite the park', 'Behind the park'], 0, 'The restaurant is next to the station.', 'The station is opposite the park. The restaurant is next to the station.'),
    sa('a1u08-e10', 'Give directions from your home to a shop in 3 sentences.', 'Model: “Go straight. Turn left at the corner. The shop is next to the bank.” Check: imperatives and a preposition.')
  ],
  assessment: [
    mc('a1u08-t1', '___ the street here, please.', ['Cross', 'Crosses', 'You cross'], 0, 'Imperative: base verb.'),
    mc('a1u08-t2', '___ is the hospital? — It’s opposite the station.', ['What', 'Where', 'Who'], 1, 'Place → where.'),
    fb('a1u08-t3', '___ straight on this street.', 'Go', 'Imperative: Go.', undefined, 'Write the missing verb.'),
    fb('a1u08-t4', 'Don’t ___ left here.', 'turn', 'Don’t + base verb.', undefined, 'Write the missing verb.'),
    tf('a1u08-t5', 'Imperatives usually don’t have a subject.', true, 'We say Turn left, not “You turn left”.'),
    tf('a1u08-t6', '“Opposite” means “next to”.', false, 'Opposite = enfrente de.'),
    wo('a1u08-t7', ['near', 'Is', 'there', 'bank', 'a', 'here'], ['Is', 'there', 'a', 'bank', 'near', 'here'], 'Is there a … near here?'),
    mc('a1u08-t8', 'Choose the correct negative imperative.', ['Don’t turn left.', 'Not turn left.', 'Doesn’t turn left.'], 0, 'Don’t + base verb.'),
    tr('a1u08-t9', 'Make the sentence negative.', 'Turn right at the park.', 'Don’t turn right at the park', 'Don’t + turn…', ['Do not turn right at the park']),
    mc('a1u08-t10', 'The bank is ___ the supermarket and the station.', ['between', 'under', 'in'], 0, 'Between two things.')
  ],
  review: ['Imperative = base verb (Turn left). Negative = Don’t + verb.', 'Directions: go straight, turn left/right, cross the street.', 'Places: next to, opposite, between, in front of, on the corner.', 'Questions: Where is…? Is there… near here? How do I get to…?', 'Answer with It’s… and short directions.']
};
export default unit;
