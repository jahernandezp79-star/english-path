import type { Unit } from '../../types';
import { fb, mc, mt, rc, sa, tf, tr, v, wo } from '../make';
const unit: Unit = {
  id: 'a1-u02', level: 'A1', unitNumber: 2, title: 'Family and People', subtitle: 'Describe your family and the people you know',
  communicativeGoal: 'Hablar de tu familia y describir a otras personas: quiénes son, cuántos años tienen y cómo son.',
  objectives: ['Usar los adjetivos posesivos (my, your, his, her, its, our, their).', 'Usar have/has para hablar de lo que tienes y de tu familia.', 'Usar el posesivo ’s para indicar a quién pertenece algo.', 'Describir a una persona con vocabulario básico de familia y aspecto.'],
  grammar: {
    title: 'Possessive adjectives, have/has and possessive ’s',
    explanation: [
      'Los adjetivos posesivos van antes del sustantivo y no cambian con el plural: my brother, my brothers. Son: my (mi), your (tu/su), his (su de él), her (su de ella), its (su de eso), our (nuestro), their (su de ellos).',
      'His y her dependen de quién es el dueño, no de la cosa: Tom’s sister = his sister; Ana’s brother = her brother.',
      'Para decir que alguien tiene algo se usa have con I/you/we/they y has con he/she/it: I have a sister, she has a sister. Para negar y preguntar se usa el auxiliar do: I don’t have a car, She doesn’t have a car, Do you have a brother?',
      'El posesivo ’s se pone detrás del dueño: Tom’s car, my mother’s name. Cuidado: ’s también puede ser is (She’s a nurse). Si después viene un sustantivo, normalmente es posesivo.'
    ],
    forms: [
      { label: 'Possessive adjectives', lines: ['I → my', 'you → your', 'he → his', 'she → her', 'it → its', 'we → our', 'they → their'] },
      { label: 'Have / has', lines: ['I have a sister.', 'She has two brothers.', 'I don’t have a car.', 'He doesn’t have a sister.', 'Do you have a brother? — Yes, I do. / No, I don’t.', 'Does she have a son? — Yes, she does. / No, she doesn’t.'] },
      { label: 'Possessive ’s', lines: ['Tom’s sister', 'my mother’s name', 'Ana’s house', 'my parents’ house (plural owners: ’ after s)'] }
    ]
  },
  vocabulary: [v('mother', 'madre', '/ˈmʌðə/', 'MO-ther'), v('father', 'padre', '/ˈfɑːðə/', 'FA-ther'), v('brother', 'hermano', '/ˈbrʌðə/', 'BRO-ther'), v('sister', 'hermana', '/ˈsɪstə/', 'SIS-ter'), v('parents', 'padres', '/ˈpeərənts/', 'PA-rents'), v('grandmother', 'abuela', '/ˈɡrænmʌðə/', 'GRAND-mo-ther'), v('husband', 'esposo', '/ˈhʌzbənd/', 'HUS-band'), v('wife', 'esposa', '/waɪf/', 'WIFE'), v('son', 'hijo', '/sʌn/', 'SON'), v('daughter', 'hija', '/ˈdɔːtə/', 'DAUGH-ter'), v('friend', 'amigo, amiga', '/frend/', 'FRIEND'), v('tall', 'alto', '/tɔːl/', 'TALL'), v('short', 'bajo, corto', '/ʃɔːt/', 'SHORT'), v('young', 'joven', '/jʌŋ/', 'YOUNG')],
  examples: [
    { en: 'My mother is a doctor.', es: 'Mi madre es doctora.' }, { en: 'Her brother is tall.', es: 'Su hermano (de ella) es alto.' },
    { en: 'His sister has two children.', es: 'Su hermana (de él) tiene dos hijos.' }, { en: 'We have a big family.', es: 'Tenemos una familia grande.' },
    { en: 'They don’t have a car.', es: 'Ellos no tienen carro.' }, { en: 'Does your father have a brother?', es: '¿Tu padre tiene hermano?' },
    { en: 'Tom’s wife is very kind.', es: 'La esposa de Tom es muy amable.' }, { en: 'Our grandmother is seventy years old.', es: 'Nuestra abuela tiene setenta años.' }
  ],
  dialogue: [
    { speaker: 'Lucy', text: 'Is this your family, Mark?', es: '¿Esta es tu familia, Mark?' },
    { speaker: 'Mark', text: 'Yes, it is. This is my mother and this is my father.', es: 'Sí. Esta es mi madre y este es mi padre.' },
    { speaker: 'Lucy', text: 'Who is the tall man?', es: '¿Quién es el hombre alto?' },
    { speaker: 'Mark', text: 'He’s my brother, Paul. He has two daughters.', es: 'Es mi hermano Paul. Tiene dos hijas.' },
    { speaker: 'Lucy', text: 'Do you have a sister?', es: '¿Tienes una hermana?' },
    { speaker: 'Mark', text: 'Yes, I do. Her name is Clara. She is twenty-two.', es: 'Sí. Se llama Clara. Tiene veintidós años.' },
    { speaker: 'Lucy', text: 'Is she a student?', es: '¿Es estudiante?' },
    { speaker: 'Mark', text: 'Yes, she is. And you? Do you have brothers or sisters?', es: 'Sí. ¿Y tú? ¿Tienes hermanos o hermanas?' }
  ],
  listening: {
    script: [
      { speaker: 'Emma', text: 'Ben, tell me about your family.' }, { speaker: 'Ben', text: 'I have a big family. I have two brothers and one sister.' },
      { speaker: 'Emma', text: 'What are their names?' }, { speaker: 'Ben', text: 'My brothers are Sam and Joe. My sister is Kate. Kate is married.' },
      { speaker: 'Emma', text: 'Does Kate have children?' }, { speaker: 'Ben', text: 'Yes, she has a son. His name is Leo.' }
    ],
    questions: [
      mc('a1u02-l1', 'How many brothers does Ben have?', ['One', 'Two', 'Three'], 1, 'Ben says: “I have two brothers.”'),
      tf('a1u02-l2', 'Kate is single.', false, 'Kate is married.'),
      mc('a1u02-l3', 'What is the name of Kate’s son?', ['Sam', 'Joe', 'Leo'], 2, 'Her son’s name is Leo.'),
      mc('a1u02-l4', 'How many sisters does Ben have?', ['One', 'Two', 'None'], 0, 'He has one sister, Kate.')
    ]
  },
  reading: {
    title: 'Sofia’s family',
    text: 'This is Sofia’s family. Sofia is sixteen. Her mother is a doctor and her father is a driver. Sofia has one brother. His name is Diego and he is nine years old. Her grandmother lives with them. She is seventy and she is very kind. They don’t have a dog, but they have two cats.',
    questions: [
      rc('a1u02-r1', 'How old is Diego?', ['Nine', 'Sixteen', 'Seventy'], 0, 'Diego is nine years old.'),
      rc('a1u02-r2', 'What is Sofia’s mother’s job?', ['Doctor', 'Driver', 'Teacher'], 0, 'Her mother is a doctor.'),
      rc('a1u02-r3', 'Who lives with Sofia’s family?', ['Her grandmother', 'Her uncle', 'Her friend'], 0, 'Her grandmother lives with them.'),
      rc('a1u02-r4', 'What pets does the family have?', ['A dog', 'Two cats', 'Two dogs'], 1, 'They don’t have a dog, but they have two cats.')
    ]
  },
  speaking: { prompt: 'Habla de tu familia en voz alta, como si mostraras una foto a un amigo.', tasks: ['Say who is in the photo: “This is my … and this is my …”.', 'Say how many brothers and sisters you have: “I have … / I don’t have …”.', 'Describe one person: “His/Her name is … He/She is … years old.”', 'Ask a partner: “Do you have brothers or sisters?”'] },
  writing: { prompt: 'Write 6 sentences about your family. Use my/his/her, have/has and ’s at least once each.', rubric: ['Uses my, his or her correctly.', 'Uses have with I and has with he/she.', 'Uses ’s at least once (my mother’s name).', 'Each sentence starts with a capital letter and ends with a full stop.'], model: 'I have a small family. My mother’s name is Rosa and she is a nurse. My father is a driver. I have one brother. His name is Andrés and he is twenty years old. We have a cat.' },
  pronunciation: {
    items: [{ word: 'mother', ipa: '/ˈmʌðə/', stress: 'MO-ther' }, { word: 'daughter', ipa: '/ˈdɔːtə/', stress: 'DAUGH-ter' }, { word: 'husband', ipa: '/ˈhʌzbənd/', stress: 'HUS-band' }, { word: 'grandmother', ipa: '/ˈɡrænmʌðə/', stress: 'GRAND-mo-ther' }, { word: 'parents', ipa: '/ˈpeərənts/', stress: 'PA-rents' }],
    tips: ['La th de mother y father es un sonido suave: la lengua toca un poco los dientes.', 'En daughter, las letras gh no se pronuncian.', 'En palabras largas como grandmother, la fuerza cae en la primera sílaba.']
  },
  exercises: [
    mc('a1u02-e1', 'This is Ana. ___ brother is Tom.', ['My', 'Her', 'His'], 1, 'Ana is a woman, so we use her.', 'Choose the possessive adjective.'),
    fb('a1u02-e2', 'He ___ two sisters.', 'has', 'He → has.', undefined, 'Write have or has.'),
    fb('a1u02-e3', 'I ___ a big family.', 'have', 'I → have.', undefined, 'Write have or has.'),
    wo('a1u02-e4', ['name', 'My', 'Clara', 'is', 'sister’s'], ['My', 'sister’s', 'name', 'is', 'Clara'], 'Owner + ’s + noun: my sister’s name.'),
    tf('a1u02-e5', '“Tom’s sister” means “the sister of Tom”.', true, 'The ’s shows possession.'),
    mt('a1u02-e6', 'Match each word with its meaning.', [['father', 'the male parent'], ['daughter', 'a female child'], ['grandmother', 'the mother of your parent'], ['husband', 'a married man']], 'Learn family words in groups.'),
    tr('a1u02-e7', 'Make the sentence negative.', 'She has a brother.', 'She doesn’t have a brother', 'Use doesn’t + have (not “hasn’t” at this level).', ['She does not have a brother']),
    tr('a1u02-e8', 'Make the sentence a question.', 'You have a sister.', 'Do you have a sister', 'Do + subject + have.'),
    rc('a1u02-e9', 'Who is a nurse?', ['Tom', 'Anna', 'Tom’s mother'], 1, 'Anna is a nurse; Tom is a teacher.', 'Anna is Tom’s sister. She is a nurse. Tom is a teacher.'),
    sa('a1u02-e10', 'Write 3 sentences about your family.', 'Model: “I have a sister. Her name is Laura. She is twenty.” Check: have/has, a possessive adjective and a full stop.')
  ],
  assessment: [
    mc('a1u02-t1', 'Mark and Clara are brother and sister. ___ parents are Mr and Mrs Reed.', ['Her', 'Their', 'Our'], 1, 'Two people (they) → their.'),
    mc('a1u02-t2', 'My sister ___ a dog.', ['have', 'has', 'haves'], 1, 'My sister = she → has.'),
    fb('a1u02-t3', '___ you have a brother? — Yes, I do.', 'Do', 'Questions with you use Do.', undefined, 'Write the missing word.'),
    fb('a1u02-t4', 'Does she ___ a car?', 'have', 'After does we use the base form: have.', undefined, 'Write the missing word.'),
    tf('a1u02-t5', '“Tom’s car” means the car of Tom.', true, 'The ’s shows possession.'),
    tf('a1u02-t6', '“He have a sister” is correct.', false, 'With he we use has: “He has a sister.”'),
    wo('a1u02-t7', ['have', 'Do', 'you', 'sisters'], ['Do', 'you', 'have', 'sisters'], 'Do + subject + have.'),
    mc('a1u02-t8', 'Maria is my friend. I like ___ house.', ['she', 'her', 'hers'], 1, 'Her is the possessive adjective for a woman.'),
    tr('a1u02-t9', 'Make the sentence negative.', 'He has a son.', 'He doesn’t have a son', 'He doesn’t have…', ['He does not have a son']),
    mc('a1u02-t10', 'Choose the correct sentence.', ['My mother’s name is Rosa.', 'My mothers name is Rosa.', 'My mother name is Rosa.'], 0, 'Owner + ’s + noun.')
  ],
  review: ['my, your, his, her, its, our, their go before a noun.', 'have with I/you/we/they; has with he/she/it.', 'Negative and questions use do/does + have.', 'Owner + ’s + noun: Tom’s sister.', 'His = of a man, her = of a woman.']
};
export default unit;
