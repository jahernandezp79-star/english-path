import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'a1-u04', level: 'A1', unitNumber: 4, title: 'My Home', subtitle: 'Describe rooms, furniture and where things are',
  communicativeGoal: 'Describir tu casa o apartamento: qué habitaciones y muebles hay y dónde está cada cosa.',
  objectives: ['Usar there is / there are en afirmativo, negativo y pregunta.', 'Usar preposiciones de lugar: in, on, under, next to, between, in front of, behind.', 'Nombrar habitaciones y muebles de la casa.', 'Describir una habitación y preguntar por lo que hay en una casa.'],
  grammar: {
    title: 'There is / there are and prepositions of place',
    explanation: [
      'There is y there are equivalen a “hay”. There is se usa con una sola cosa (There is a sofa) y there are con varias (There are two chairs).',
      'Para negar: there isn’t (singular) y there aren’t (plural). Para preguntar se invierte el orden: Is there a garden? Are there two bedrooms? Respuestas cortas: Yes, there is. / No, there isn’t. / Yes, there are. / No, there aren’t.',
      'No confundas There is con It is: there is dice que algo existe o está presente; it is describe algo que ya conoces (It is big).',
      'Las preposiciones de lugar dicen dónde está algo: in (dentro de), on (sobre), under (debajo de), next to (junto a), between (entre dos cosas), in front of (delante de), behind (detrás de).'
    ],
    forms: [
      { label: 'Affirmative', lines: ['There is a lamp in the room.', 'There are two windows.', 'There is a table in front of the sofa.'] },
      { label: 'Negative', lines: ['There isn’t a garden.', 'There aren’t any chairs.', 'There isn’t a bed in the kitchen.'] },
      { label: 'Questions and short answers', lines: ['Is there a garden? — Yes, there is. / No, there isn’t.', 'Are there chairs in the kitchen? — Yes, there are. / No, there aren’t.', 'Where is the bathroom? — It’s between the two bedrooms.'] }
    ]
  },
  vocabulary: [v('house', 'casa', '/haʊs/', 'HOUSE'), v('apartment', 'apartamento', '/əˈpɑːtmənt/', 'a-PART-ment'), v('kitchen', 'cocina', '/ˈkɪtʃɪn/', 'KIT-chen'), v('bedroom', 'habitación', '/ˈbedruːm/', 'BED-room'), v('bathroom', 'baño', '/ˈbɑːθruːm/', 'BATH-room'), v('living room', 'sala', '/ˈlɪvɪŋ ruːm/', 'LI-ving room'), v('garden', 'jardín', '/ˈɡɑːdn/', 'GAR-den'), v('table', 'mesa', '/ˈteɪbl/', 'TA-ble'), v('chair', 'silla', '/tʃeə/', 'CHAIR'), v('sofa', 'sofá', '/ˈsəʊfə/', 'SO-fa'), v('bed', 'cama', '/bed/', 'BED'), v('window', 'ventana', '/ˈwɪndəʊ/', 'WIN-dow'), v('door', 'puerta', '/dɔː/', 'DOOR'), v('lamp', 'lámpara', '/læmp/', 'LAMP')],
  examples: [
    { en: 'There is a sofa in the living room.', es: 'Hay un sofá en la sala.' }, { en: 'There are two beds in the bedroom.', es: 'Hay dos camas en la habitación.' },
    { en: 'There isn’t a garden.', es: 'No hay jardín.' }, { en: 'Is there a bathroom here?', es: '¿Hay un baño aquí?' },
    { en: 'The lamp is next to the bed.', es: 'La lámpara está junto a la cama.' }, { en: 'The cat is under the table.', es: 'El gato está debajo de la mesa.' },
    { en: 'The kitchen is between the living room and the bathroom.', es: 'La cocina está entre la sala y el baño.' }, { en: 'There is a car in front of the house.', es: 'Hay un carro delante de la casa.' }
  ],
  dialogue: [
    { speaker: 'Agent', text: 'Welcome! This apartment has two bedrooms.', es: 'Bienvenido. Este apartamento tiene dos habitaciones.' },
    { speaker: 'Dan', text: 'Great. Is there a garden?', es: 'Genial. ¿Hay un jardín?' },
    { speaker: 'Agent', text: 'No, there isn’t, but there is a big window in the living room.', es: 'No, pero hay una ventana grande en la sala.' },
    { speaker: 'Dan', text: 'Are there chairs in the kitchen?', es: '¿Hay sillas en la cocina?' },
    { speaker: 'Agent', text: 'Yes, there are four chairs next to the table.', es: 'Sí, hay cuatro sillas junto a la mesa.' },
    { speaker: 'Dan', text: 'And where is the bathroom?', es: '¿Y dónde está el baño?' },
    { speaker: 'Agent', text: 'It’s between the two bedrooms.', es: 'Está entre las dos habitaciones.' },
    { speaker: 'Dan', text: 'Perfect. I like this apartment!', es: 'Perfecto. ¡Me gusta este apartamento!' }
  ],
  listening: {
    script: [
      { speaker: 'Sam', text: 'This is my bedroom. There is a bed next to the window.' }, { speaker: 'Friend', text: 'Is there a table?' },
      { speaker: 'Sam', text: 'Yes, there is a small table in front of the window.' }, { speaker: 'Friend', text: 'Are there books?' },
      { speaker: 'Sam', text: 'Yes, there are. There are many books on the table.' }, { speaker: 'Sam', text: 'There isn’t a sofa, but there is a chair behind the door.' }
    ],
    questions: [
      mc('a1u04-l1', 'Where is the bed?', ['Next to the window', 'Behind the door', 'In front of the window'], 0, 'There is a bed next to the window.'),
      tf('a1u04-l2', 'There is a sofa in Sam’s room.', false, 'He says: “There isn’t a sofa.”'),
      mc('a1u04-l3', 'Where are the books?', ['On the table', 'Under the bed', 'In the kitchen'], 0, 'There are many books on the table.'),
      mc('a1u04-l4', 'Where is the chair?', ['Next to the bed', 'Behind the door', 'On the table'], 1, 'There is a chair behind the door.')
    ]
  },
  reading: {
    title: 'My new apartment',
    text: 'I live in a small apartment in the city. There are two bedrooms, a kitchen, a bathroom and a living room. In the living room there is a sofa and a table. There is a lamp next to the sofa. There isn’t a garden, but there is a big window in the living room. My favourite room is the kitchen because it is big and there are four chairs.',
    questions: [
      rc('a1u04-r1', 'How many bedrooms are there?', ['One', 'Two', 'Three'], 1, 'There are two bedrooms.'),
      rc('a1u04-r2', 'Where is the lamp?', ['Next to the sofa', 'On the table', 'Under the sofa'], 0, 'There is a lamp next to the sofa.'),
      rc('a1u04-r3', 'Is there a garden?', ['Yes, there is.', 'No, there isn’t.', 'Yes, there are.'], 1, 'There isn’t a garden.'),
      rc('a1u04-r4', 'Why is the kitchen the writer’s favourite room?', ['It is big and has four chairs.', 'It is small.', 'It has a sofa.'], 0, 'It is big and there are four chairs.')
    ]
  },
  speaking: { prompt: 'Describe tu habitación o tu casa en voz alta, como si hicieras un recorrido por ella.', tasks: ['Name the rooms: “There is a kitchen, a bathroom and …”.', 'Say what is in your bedroom: “There is a … and there are two …”.', 'Say where one thing is: “The lamp is next to the bed.”', 'Ask a partner: “Is there a garden in your house?”'] },
  writing: { prompt: 'Write 6 sentences describing your bedroom or living room. Use there is, there are and two prepositions of place.', rubric: ['Uses there is with one thing and there are with several.', 'Uses at least two prepositions of place.', 'Names furniture correctly (bed, table, chair…).', 'Uses capital letters and full stops.'], model: 'There is a bed in my bedroom. There is a lamp next to the bed. There is a small table under the window. There are two chairs in front of the table. There isn’t a sofa. There are many books on the table.' },
  pronunciation: {
    items: [{ word: 'apartment', ipa: '/əˈpɑːtmənt/', stress: 'a-PART-ment' }, { word: 'kitchen', ipa: '/ˈkɪtʃɪn/', stress: 'KIT-chen' }, { word: 'bathroom', ipa: '/ˈbɑːθruːm/', stress: 'BATH-room' }, { word: 'window', ipa: '/ˈwɪndəʊ/', stress: 'WIN-dow' }, { word: 'there’s', ipa: '/ðeəz/', stress: 'THERE’s' }],
    tips: ['There is se contrae a there’s en el habla: There’s a lamp.', 'En bathroom, th suena suave y la fuerza va en BATH.', 'En window la fuerza va en la primera sílaba.']
  },
  exercises: [
    mc('a1u04-e1', '___ a lamp in the room.', ['There is', 'There are', 'It is'], 0, 'One lamp → There is.', 'Choose the correct form.'),
    fb('a1u04-e2', 'There ___ three windows.', 'are', 'Plural → there are.', undefined, 'Write is or are.'),
    fb('a1u04-e3', 'The cat is ___ the table. It is not on the table.', 'under', 'Under = debajo de.', ['below'], 'Write a preposition of place.'),
    wo('a1u04-e4', ['garden', 'a', 'Is', 'there'], ['Is', 'there', 'a', 'garden'], 'Questions: Is there + noun.'),
    tf('a1u04-e5', '“There are a sofa” is correct.', false, 'One sofa → There is a sofa.'),
    mt('a1u04-e6', 'Match each preposition with its Spanish meaning.', [['on', 'sobre'], ['under', 'debajo de'], ['behind', 'detrás de'], ['between', 'entre']], 'Practise with objects in your own room.'),
    tr('a1u04-e7', 'Make the sentence negative.', 'There is a sofa.', 'There isn’t a sofa', 'There isn’t = there is not.', ['There is not a sofa']),
    tr('a1u04-e8', 'Make the sentence a question.', 'There are chairs in the kitchen.', 'Are there chairs in the kitchen', 'Are there + noun…'),
    rc('a1u04-e9', 'Where is the bathroom?', ['Next to the kitchen', 'Behind the garden', 'Under the bedroom'], 0, 'The bathroom is next to the kitchen.', 'The bathroom is next to the kitchen. There is a window in the bathroom.'),
    sa('a1u04-e10', 'Describe your bedroom in 3 sentences.', 'Model: “There is a bed. There are two chairs. The lamp is next to the bed.” Check: there is/are and a preposition of place.')
  ],
  assessment: [
    mc('a1u04-t1', 'There ___ two chairs in the kitchen.', ['is', 'are', 'be'], 1, 'Two chairs → there are.'),
    mc('a1u04-t2', '___ there a bed in the room?', ['Is', 'Are', 'Do'], 0, 'Singular → Is there…?'),
    fb('a1u04-t3', 'There ___ a table in the living room.', 'is', 'One table → there is.', undefined, 'Write is or are.'),
    fb('a1u04-t4', 'There ___ a garden, so I use the park.', 'isn’t', 'No garden → there isn’t.', ['is not'], 'Write the negative form.'),
    tf('a1u04-t5', '“Between” means “entre”.', true, 'Between = entre dos cosas.'),
    tf('a1u04-t6', '“There is two beds” is correct.', false, 'Two beds → There are two beds.'),
    wo('a1u04-t7', ['next', 'The', 'to', 'window', 'sofa', 'is', 'the'], ['The', 'sofa', 'is', 'next', 'to', 'the', 'window'], 'The sofa is next to the window.'),
    mc('a1u04-t8', 'The dog is ___ the sofa and the table. (It is in the middle.)', ['in front of', 'between', 'on'], 1, 'Between = entre dos cosas.'),
    tr('a1u04-t9', 'Make the sentence a question.', 'There are two bedrooms.', 'Are there two bedrooms', 'Are there + noun.'),
    mc('a1u04-t10', 'Choose the correct sentence.', ['There is a kitchen.', 'There are a kitchen.', 'Is a kitchen there.'], 0, 'One kitchen → There is.')
  ],
  review: ['There is + singular; there are + plural.', 'Negative: there isn’t / there aren’t. Questions: Is there…? Are there…?', 'Prepositions: in, on, under, next to, between, in front of, behind.', 'Rooms and furniture vocabulary.', 'Describe a room by saying what there is and where it is.']
};
export default unit;
