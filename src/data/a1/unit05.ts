import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'a1-u05', level: 'A1', unitNumber: 5, title: 'Food and Drinks', subtitle: 'Talk about what you eat, drink and like',
  communicativeGoal: 'Hablar de alimentos y bebidas, decir qué tienes o necesitas y pedir comida con las cantidades correctas.',
  objectives: ['Distinguir sustantivos contables e incontables.', 'Usar some y any en afirmativo, negativo y pregunta.', 'Usar cuantificadores básicos: a lot of, much, many, a little, a few.', 'Hablar de comidas, bebidas y preferencias.'],
  grammar: {
    title: 'Countable and uncountable nouns, some/any and quantifiers',
    explanation: [
      'Los sustantivos contables se pueden contar: one apple, two apples. Tienen plural y pueden llevar a/an. Los incontables no se cuentan uno a uno: milk, water, rice, bread, cheese, sugar. No tienen plural y no llevan a/an: se dice some milk, no “a milk”.',
      'Some se usa en afirmativo (I have some apples) y any en negativo y preguntas (I don’t have any eggs; Do you have any juice?). Funcionan con contables en plural y con incontables.',
      'A lot of se usa con contables e incontables en afirmativo. Much va con incontables y many con contables, sobre todo en negativo y preguntas: How much milk? How many eggs?',
      'A little va con incontables (a little sugar) y a few con contables (a few apples). Ambos significan “un poco / unos pocos”.'
    ],
    forms: [
      { label: 'Affirmative', lines: ['I have some apples.', 'There is some milk.', 'We eat a lot of rice.', 'She has a little sugar and a few eggs.'] },
      { label: 'Negative', lines: ['I don’t have any eggs.', 'There isn’t any milk.', 'We don’t drink much coffee.', 'They don’t eat many vegetables.'] },
      { label: 'Questions', lines: ['Do you have any juice?', 'Is there any bread?', 'How many eggs do you want?', 'How much milk do you want?'] }
    ]
  },
  vocabulary: [v('apple', 'manzana', '/ˈæpl/', 'AP-ple'), v('bread', 'pan', '/bred/', 'BREAD'), v('rice', 'arroz', '/raɪs/', 'RICE'), v('chicken', 'pollo', '/ˈtʃɪkɪn/', 'CHI-cken'), v('egg', 'huevo', '/eɡ/', 'EGG'), v('milk', 'leche', '/mɪlk/', 'MILK'), v('water', 'agua', '/ˈwɔːtə/', 'WA-ter'), v('juice', 'jugo', '/dʒuːs/', 'JUICE'), v('coffee', 'café', '/ˈkɒfi/', 'COF-fee'), v('cheese', 'queso', '/tʃiːz/', 'CHEESE'), v('vegetables', 'verduras', '/ˈvedʒtəblz/', 'VEG-ta-bles'), v('fruit', 'fruta', '/fruːt/', 'FRUIT'), v('sugar', 'azúcar', '/ˈʃʊɡə/', 'SU-gar'), v('hungry', 'hambriento', '/ˈhʌŋɡri/', 'HUN-gry')],
  examples: [
    { en: 'I have some rice and some chicken.', es: 'Tengo algo de arroz y de pollo.' }, { en: 'We don’t have any milk.', es: 'No tenemos leche.' },
    { en: 'Do you want any coffee?', es: '¿Quieres café?' }, { en: 'She eats a lot of fruit.', es: 'Ella come mucha fruta.' },
    { en: 'How many eggs do you want?', es: '¿Cuántos huevos quieres?' }, { en: 'How much juice is there?', es: '¿Cuánto jugo hay?' },
    { en: 'There is a little sugar in the kitchen.', es: 'Hay un poco de azúcar en la cocina.' }, { en: 'I eat a few apples every week.', es: 'Como unas pocas manzanas cada semana.' }
  ],
  dialogue: [
    { speaker: 'Mia', text: 'What do we have for dinner, Leo?', es: '¿Qué tenemos para la cena, Leo?' },
    { speaker: 'Leo', text: 'Let me check. We have some rice and some chicken.', es: 'Déjame ver. Tenemos arroz y pollo.' },
    { speaker: 'Mia', text: 'Do we have any vegetables?', es: '¿Tenemos verduras?' },
    { speaker: 'Leo', text: 'No, we don’t have any. But there are a few apples.', es: 'No, no tenemos. Pero hay unas pocas manzanas.' },
    { speaker: 'Mia', text: 'How much milk is there?', es: '¿Cuánta leche hay?' },
    { speaker: 'Leo', text: 'There is a little milk, but there isn’t any juice.', es: 'Hay un poco de leche, pero no hay jugo.' },
    { speaker: 'Mia', text: 'OK. I go to the shop. Do you want some coffee?', es: 'Bien. Voy a la tienda. ¿Quieres café?' },
    { speaker: 'Leo', text: 'Yes, please. And some bread.', es: 'Sí, por favor. Y algo de pan.' }
  ],
  listening: {
    script: [
      { speaker: 'Waiter', text: 'Good morning. What do you want to eat?' }, { speaker: 'Customer', text: 'I want some bread and some cheese, please.' },
      { speaker: 'Waiter', text: 'Do you want any coffee?' }, { speaker: 'Customer', text: 'No, thanks. I don’t drink coffee. I want some juice.' },
      { speaker: 'Waiter', text: 'And do you want any eggs?' }, { speaker: 'Customer', text: 'Yes, two eggs, please.' }
    ],
    questions: [
      mc('a1u05-l1', 'What does the customer want to eat?', ['Bread and cheese', 'Rice and chicken', 'Fish and vegetables'], 0, 'He wants some bread and some cheese.'),
      tf('a1u05-l2', 'The customer wants coffee.', false, 'He says: “I don’t drink coffee.”'),
      mc('a1u05-l3', 'What does the customer want to drink?', ['Coffee', 'Juice', 'Milk'], 1, 'He wants some juice.'),
      mc('a1u05-l4', 'How many eggs does the customer want?', ['One', 'Two', 'Three'], 1, 'He asks for two eggs.')
    ]
  },
  reading: {
    title: 'Carla eats well',
    text: 'Carla wants to eat well. She eats a lot of fruit and vegetables every day. She doesn’t eat much sugar and she drinks a lot of water. For breakfast she has some bread with a little cheese and an egg. She doesn’t drink coffee, but she has some juice. On Sundays she eats chicken and rice with her family.',
    questions: [
      rc('a1u05-r1', 'What does Carla eat a lot of?', ['Fruit and vegetables', 'Sugar', 'Chicken'], 0, 'She eats a lot of fruit and vegetables.'),
      rc('a1u05-r2', 'Does Carla eat much sugar?', ['Yes, she does.', 'No, she doesn’t.', 'Yes, she eats a lot.'], 1, 'She doesn’t eat much sugar.'),
      rc('a1u05-r3', 'What does she have for breakfast?', ['Bread, a little cheese and an egg', 'Coffee and rice', 'Fish and juice'], 0, 'Bread, a little cheese and an egg.'),
      rc('a1u05-r4', 'What does she eat on Sundays?', ['Fish and vegetables', 'Chicken and rice', 'Bread and cheese'], 1, 'On Sundays she eats chicken and rice.')
    ]
  },
  speaking: { prompt: 'Habla de lo que comes y bebes en un día normal y pide comida como en un restaurante.', tasks: ['Say what you have for breakfast: “I have some … and a little …”.', 'Say two things you don’t eat much: “I don’t eat much …”.', 'Order food: “I want some … and two …, please.”', 'Ask a partner: “Do you drink any coffee?”'] },
  writing: { prompt: 'Write 6 sentences about your food and drinks. Use some, any and at least two quantifiers.', rubric: ['Uses some in affirmative and any in negative or questions.', 'Uses a lot of, much, many, a little or a few correctly.', 'Does not use a/an with uncountable nouns.', 'Uses capital letters and full stops.'], model: 'I eat a lot of rice and vegetables. For breakfast I have some bread and a little cheese. I don’t drink any coffee, but I drink a lot of water. I don’t eat much sugar. I eat a few apples every week.' },
  pronunciation: {
    items: [{ word: 'vegetables', ipa: '/ˈvedʒtəblz/', stress: 'VEG-ta-bles' }, { word: 'chicken', ipa: '/ˈtʃɪkɪn/', stress: 'CHI-cken' }, { word: 'sugar', ipa: '/ˈʃʊɡə/', stress: 'SU-gar' }, { word: 'coffee', ipa: '/ˈkɒfi/', stress: 'COF-fee' }, { word: 'cheese', ipa: '/tʃiːz/', stress: 'CHEESE' }],
    tips: ['Vegetables suele pronunciarse con tres sílabas, no cuatro.', 'En sugar la s suena como “sh”: /ʃ/.', 'En cheese la vocal es larga y termina en /z/.']
  },
  exercises: [
    mc('a1u05-e1', 'I don’t have ___ eggs.', ['some', 'any', 'a'], 1, 'In negatives we use any.', 'Choose the correct word.'),
    fb('a1u05-e2', 'There is ___ milk in the kitchen.', 'some', 'In affirmative sentences we use some.', undefined, 'Write some or any.'),
    fb('a1u05-e3', 'How ___ eggs do you want?', 'many', 'Eggs are countable → how many.', undefined, 'Write much or many.'),
    wo('a1u05-e4', ['milk', 'there', 'How', 'is', 'much'], ['How', 'much', 'milk', 'is', 'there'], 'How much + uncountable noun.'),
    tf('a1u05-e5', '“Milk” is a countable noun.', false, 'Milk is uncountable: some milk.'),
    mt('a1u05-e6', 'Match each quantifier with its use.', [['a few', 'with countable nouns'], ['a little', 'with uncountable nouns'], ['much', 'uncountable, in negatives and questions'], ['many', 'countable, in negatives and questions']], 'Learn them in pairs.'),
    tr('a1u05-e7', 'Make the sentence negative.', 'I have some apples.', 'I don’t have any apples', 'some → any in negatives.', ['I do not have any apples']),
    tr('a1u05-e8', 'Make the sentence a question.', 'There is some juice.', 'Is there any juice', 'Is there any + noun?'),
    rc('a1u05-e9', 'What doesn’t Leo have?', ['Bread', 'Milk', 'Eggs'], 1, 'He has bread, but no milk.', 'Leo has a lot of bread, but he doesn’t have any milk.'),
    sa('a1u05-e10', 'Write 3 sentences about your breakfast.', 'Model: “I have some bread. I don’t drink any coffee. I eat a few apples.” Check: some/any and a quantifier.')
  ],
  assessment: [
    mc('a1u05-t1', 'There is ___ rice in the kitchen.', ['some', 'any', 'many'], 0, 'Affirmative → some.'),
    mc('a1u05-t2', 'Do you have ___ cheese?', ['some', 'any', 'a'], 1, 'Questions → any.'),
    fb('a1u05-t3', 'We don’t have ___ juice.', 'any', 'Negative → any.', undefined, 'Write some or any.'),
    fb('a1u05-t4', 'How ___ water do you drink?', 'much', 'Water is uncountable → how much.', undefined, 'Write much or many.'),
    tf('a1u05-t5', '“Egg” is a countable noun.', true, 'One egg, two eggs.'),
    tf('a1u05-t6', '“I have a bread” is the best sentence.', false, 'Bread is uncountable: “I have some bread.”'),
    wo('a1u05-t7', ['any', 'Do', 'have', 'you', 'apples'], ['Do', 'you', 'have', 'any', 'apples'], 'Do you have any + plural noun?'),
    mc('a1u05-t8', 'I eat ___ vegetables. (a small number)', ['a few', 'a little', 'much'], 0, 'Vegetables are countable → a few.'),
    tr('a1u05-t9', 'Make the sentence negative.', 'There is some milk.', 'There isn’t any milk', 'There isn’t any…', ['There is not any milk']),
    mc('a1u05-t10', 'Choose the correct sentence.', ['I drink a lot of water.', 'I drink a lot water.', 'I drink many of water.'], 0, 'a lot of + noun.')
  ],
  review: ['Countable: apple/apples. Uncountable: milk, rice, bread, sugar.', 'some in affirmative; any in negative and questions.', 'How many + countable; how much + uncountable.', 'a few + countable; a little + uncountable.', 'a lot of works with both types in affirmative sentences.']
};
export default unit;
