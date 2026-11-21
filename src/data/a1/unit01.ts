import type { Unit } from '../../types';
const unit: Unit = {
  id: 'a1-u01', level: 'A1', unitNumber: 1, title: 'Introducing Yourself', subtitle: 'Say who you are, where you are from and what you do',
  communicativeGoal: 'Presentarte y presentar a otra persona: nombre, nacionalidad, edad, profesión y lugar de residencia.',
  objectives: ['Usar el verbo to be (am, is, are) en afirmativo, negativo y pregunta.', 'Reconocer y usar los pronombres personales sujeto (I, you, he, she, it, we, they).', 'Dar y pedir información personal básica.', 'Mantener un saludo y una presentación cortos en inglés.'],
  grammar: {
    title: 'Verb to be and subject pronouns',
    explanation: [
      'En inglés, el verbo to be equivale a ser y estar. Siempre necesita un sujeto: no se puede decir “Am student”, sino “I am a student”.',
      'Cambia según el pronombre: I am, you are, he/she/it is, we are, you are, they are. En inglés hablado casi siempre se usan contracciones: I’m, you’re, he’s, she’s, it’s, we’re, they’re.',
      'Para negar, añade not después del verbo: I am not (I’m not), he is not (he isn’t), they are not (they aren’t). Para preguntar, invierte el orden: Are you a student? Is she from Peru?',
      'Con profesiones se usa a/an: a teacher, an engineer (an delante de sonido vocálico). Para la edad se usa to be, no “tener”: I am 28 (years old).'
    ],
    forms: [
      { label: 'Affirmative', lines: ['I am / I’m a student.', 'You are / You’re from Peru.', 'He is / He’s 30 years old.', 'She is / She’s a nurse.', 'We are / We’re friends.', 'They are / They’re teachers.'] },
      { label: 'Negative', lines: ['I am not / I’m not a doctor.', 'You are not / aren’t from Chile.', 'He is not / isn’t married.', 'We are not / aren’t students.'] },
      { label: 'Question and short answers', lines: ['Are you a student? — Yes, I am. / No, I’m not.', 'Is she from Spain? — Yes, she is. / No, she isn’t.', 'What is your name? — My name is Ana.', 'Where are you from? — I’m from Colombia.', 'How old are you? — I’m 25.'] }
    ]
  },
  vocabulary: [
    { word: 'hello', translation: 'hola', pron: '/həˈləʊ/', stress: 'hel-LO' },
    { word: 'goodbye', translation: 'adiós', pron: '/ɡʊdˈbaɪ/', stress: 'good-BYE' },
    { word: 'name', translation: 'nombre', pron: '/neɪm/', stress: 'NAME' },
    { word: 'surname', translation: 'apellido', pron: '/ˈsɜːneɪm/', stress: 'SUR-name' },
    { word: 'nationality', translation: 'nacionalidad', pron: '/ˌnæʃəˈnæləti/', stress: 'na-tio-NA-li-ty' },
    { word: 'country', translation: 'país', pron: '/ˈkʌntri/', stress: 'COUN-try' },
    { word: 'city', translation: 'ciudad', pron: '/ˈsɪti/', stress: 'CI-ty' },
    { word: 'age', translation: 'edad', pron: '/eɪdʒ/', stress: 'AGE' },
    { word: 'job', translation: 'trabajo, profesión', pron: '/dʒɒb/', stress: 'JOB' },
    { word: 'teacher', translation: 'profesor, profesora', pron: '/ˈtiːtʃə/', stress: 'TEA-cher' },
    { word: 'student', translation: 'estudiante', pron: '/ˈstjuːdnt/', stress: 'STU-dent' },
    { word: 'engineer', translation: 'ingeniero, ingeniera', pron: '/ˌendʒɪˈnɪə/', stress: 'en-gi-NEER' },
    { word: 'live', translation: 'vivir', pron: '/lɪv/', stress: 'LIVE' },
    { word: 'married', translation: 'casado, casada', pron: '/ˈmærid/', stress: 'MAR-ried' }
  ],
  examples: [
    { en: 'I’m Laura. I’m from Colombia.', es: 'Soy Laura. Soy de Colombia.' },
    { en: 'He is not a teacher. He’s an engineer.', es: 'Él no es profesor. Es ingeniero.' },
    { en: 'We are students.', es: 'Somos estudiantes.' },
    { en: 'Are you from Mexico?', es: '¿Eres de México?' },
    { en: 'She is twenty-five years old.', es: 'Ella tiene veinticinco años.' },
    { en: 'They aren’t married.', es: 'Ellos no están casados.' },
    { en: 'What is your surname?', es: '¿Cuál es tu apellido?' },
    { en: 'It is a big city.', es: 'Es una ciudad grande.' }
  ],
  dialogue: [
    { speaker: 'Ana', text: 'Hello! I’m Ana. What’s your name?', es: '¡Hola! Soy Ana. ¿Cómo te llamas?' },
    { speaker: 'Tom', text: 'Hi, Ana. My name is Tom. Nice to meet you.', es: 'Hola, Ana. Me llamo Tom. Mucho gusto.' },
    { speaker: 'Ana', text: 'Nice to meet you, too. Where are you from?', es: 'Igualmente. ¿De dónde eres?' },
    { speaker: 'Tom', text: 'I’m from Canada. I live in Toronto. And you?', es: 'Soy de Canadá. Vivo en Toronto. ¿Y tú?' },
    { speaker: 'Ana', text: 'I’m from Colombia. I live in Bogotá.', es: 'Soy de Colombia. Vivo en Bogotá.' },
    { speaker: 'Tom', text: 'Are you a student?', es: '¿Eres estudiante?' },
    { speaker: 'Ana', text: 'No, I’m not. I’m an engineer. Are you an engineer too?', es: 'No. Soy ingeniera. ¿Tú también eres ingeniero?' },
    { speaker: 'Tom', text: 'No, I’m a teacher. How old are you?', es: 'No, soy profesor. ¿Cuántos años tienes?' }
  ],
  listening: {
    script: [
      { speaker: 'Maria', text: 'Hello! I’m Maria.' },
      { speaker: 'Pedro', text: 'Hi, Maria. I’m Pedro. Nice to meet you.' },
      { speaker: 'Maria', text: 'Nice to meet you, too. Where are you from?' },
      { speaker: 'Pedro', text: 'I’m from Colombia. I live in Bogotá. And you?' },
      { speaker: 'Maria', text: 'I’m from Mexico, but I live in Madrid.' },
      { speaker: 'Pedro', text: 'Are you a student?' },
      { speaker: 'Maria', text: 'No, I’m not. I’m a doctor.' }
    ],
    questions: [
      { id: 'a1u01-l1', type: 'multiple-choice', instructions: 'Choose the correct answer.', prompt: 'Where is Pedro from?', options: ['Mexico', 'Colombia', 'Spain'], answer: 1, feedback: 'Pedro says: “I’m from Colombia.”' },
      { id: 'a1u01-l2', type: 'true-false', instructions: 'True or false?', prompt: 'Maria lives in Mexico.', answer: false, feedback: 'Maria is from Mexico, but she lives in Madrid.' },
      { id: 'a1u01-l3', type: 'multiple-choice', instructions: 'Choose the correct answer.', prompt: 'What is Maria’s job?', options: ['Student', 'Teacher', 'Doctor'], answer: 2, feedback: 'Maria says: “I’m a doctor.”' },
      { id: 'a1u01-l4', type: 'multiple-choice', instructions: 'Choose the correct answer.', prompt: 'Where does Maria live?', options: ['Mexico City', 'Bogotá', 'Madrid'], answer: 2, feedback: 'She lives in Madrid.' }
    ]
  },
  reading: {
    title: 'Meet Sara',
    text: 'My name is Sara Lopez. I am twenty-eight years old. I am from Peru, but I live in Lima with my brother. He is a teacher and I am a nurse. We are not married. My best friend is Daniel. He is from Chile. He is a student and he is twenty-five. Sara and Daniel are friends.',
    questions: [
      { id: 'a1u01-r1', type: 'reading-comprehension', instructions: 'Read the text and choose the answer.', prompt: 'Where is Sara from?', options: ['Peru', 'Chile', 'Spain'], answer: 0, feedback: 'The text says: “I am from Peru.”' },
      { id: 'a1u01-r2', type: 'reading-comprehension', instructions: 'Read the text and choose the answer.', prompt: 'What is Sara’s job?', options: ['Teacher', 'Nurse', 'Student'], answer: 1, feedback: 'Sara says she is a nurse.' },
      { id: 'a1u01-r3', type: 'reading-comprehension', instructions: 'Read the text and choose the answer.', prompt: 'How old is Daniel?', options: ['28', '25', '22'], answer: 1, feedback: 'Daniel is twenty-five.' },
      { id: 'a1u01-r4', type: 'reading-comprehension', instructions: 'Read the text and choose the answer.', prompt: 'Who is a teacher?', options: ['Sara', 'Daniel', 'Sara’s brother'], answer: 2, feedback: 'Sara’s brother is a teacher.' }
    ]
  },
  speaking: {
    prompt: 'Preséntate en voz alta como si conocieras a alguien por primera vez. Grábate o practica frente a un espejo.',
    tasks: ['Say your name and surname: “My name is …”.', 'Say your nationality and city: “I’m from … I live in …”.', 'Say your age and job: “I’m … years old. I’m a/an …”.', 'Ask a partner two questions: “What’s your name? Where are you from?”']
  },
  writing: {
    prompt: 'Write a short paragraph (5 to 7 sentences) introducing yourself. Include your name, age, nationality, city and job.',
    rubric: ['Uses am / is / are correctly.', 'Includes name, age, nationality, city and job.', 'Uses a/an with the job.', 'Starts sentences with capital letters and ends them with full stops.'],
    model: 'My name is Carlos Ruiz. I am 30 years old. I am from Colombia and I live in Cali. I am an engineer. I am not married. My best friend is Luis. He is a teacher.'
  },
  pronunciation: {
    items: [
      { word: 'name', ipa: '/neɪm/', stress: 'NAME' }, { word: 'teacher', ipa: '/ˈtiːtʃə/', stress: 'TEA-cher' },
      { word: 'Colombia', ipa: '/kəˈlɒmbiə/', stress: 'co-LOM-bia' }, { word: 'engineer', ipa: '/ˌendʒɪˈnɪə/', stress: 'en-gi-NEER' },
      { word: 'nationality', ipa: '/ˌnæʃəˈnæləti/', stress: 'na-tio-NA-li-ty' }
    ],
    tips: ['I’m se pronuncia como “aim”: una sola sílaba.', 'El sonido /ʃ/ de nationality se parece a “sh” (como en “shhh”).', 'En palabras de varias sílabas, una sílaba suena más fuerte: engiNEER, not ENgineer.']
  },
  exercises: [
    { id: 'a1u01-e1', type: 'multiple-choice', instructions: 'Choose the correct form of to be.', prompt: 'I ___ from Colombia.', options: ['am', 'is', 'are'], answer: 0, feedback: 'With I we use am.' },
    { id: 'a1u01-e2', type: 'fill-blank', instructions: 'Write am, is or are.', prompt: 'She ___ a teacher.', answer: 'is', feedback: 'She → is.' },
    { id: 'a1u01-e3', type: 'fill-blank', instructions: 'Write am, is or are.', prompt: 'We ___ students.', answer: 'are', feedback: 'We → are.' },
    { id: 'a1u01-e4', type: 'word-order', instructions: 'Put the words in order to make a question.', prompt: 'Build the question.', words: ['you', 'are', 'from', 'Where'], answer: ['Where', 'are', 'you', 'from'], feedback: 'Question word + verb + subject: Where are you from?' },
    { id: 'a1u01-e5', type: 'true-false', instructions: 'True or false?', prompt: '“He am a student” is correct.', answer: false, feedback: 'With he we use is: “He is a student.”' },
    { id: 'a1u01-e6', type: 'matching', instructions: 'Match each country with its nationality.', prompt: 'Countries and nationalities', pairs: [['Colombia', 'Colombian'], ['Mexico', 'Mexican'], ['Spain', 'Spanish'], ['Peru', 'Peruvian']], feedback: 'Learn the endings: -an, -ian, -ish.' },
    { id: 'a1u01-e7', type: 'sentence-transformation', instructions: 'Make the sentence negative.', prompt: 'I am a student.', answer: 'I am not a student', accept: ['I’m not a student'], feedback: 'Add not after the verb: I am not / I’m not.' },
    { id: 'a1u01-e8', type: 'sentence-transformation', instructions: 'Make the sentence a question.', prompt: 'You are from Peru.', answer: 'Are you from Peru', feedback: 'Invert the subject and the verb.' },
    { id: 'a1u01-e9', type: 'reading-comprehension', instructions: 'Read and answer.', passage: 'Tom is 30. He is an engineer from Canada.', prompt: 'What is Tom’s job?', options: ['Teacher', 'Engineer', 'Nurse'], answer: 1, feedback: 'Tom is an engineer.' },
    { id: 'a1u01-e10', type: 'short-answer', instructions: 'Write two sentences about yourself, then compare with the guide.', prompt: 'Who are you? Where are you from?', rubric: 'Model: “I am Ana. I am from Colombia.” Check: you used am, a capital letter and a full stop.', feedback: 'Open answers are self-checked in this version.' }
  ],
  assessment: [
    { id: 'a1u01-t1', type: 'multiple-choice', instructions: 'Choose the correct answer.', prompt: '___ you a student?', options: ['Am', 'Are', 'Is'], answer: 1, feedback: 'With you we use are: “Are you a student?”' },
    { id: 'a1u01-t2', type: 'multiple-choice', instructions: 'Choose the correct answer.', prompt: 'My brother ___ 15 years old.', options: ['am', 'is', 'are'], answer: 1, feedback: 'My brother = he → is.' },
    { id: 'a1u01-t3', type: 'fill-blank', instructions: 'Write am, is or are.', prompt: 'We ___ from Spain.', answer: 'are', feedback: 'We → are.' },
    { id: 'a1u01-t4', type: 'fill-blank', instructions: 'Write am, is or are.', prompt: 'I ___ not a doctor.', answer: 'am', feedback: 'I → am (I’m not).' },
    { id: 'a1u01-t5', type: 'true-false', instructions: 'True or false?', prompt: '“She’s” means “She is”.', answer: true, feedback: 'She’s is the contraction of she is.' },
    { id: 'a1u01-t6', type: 'true-false', instructions: 'True or false?', prompt: '“They is engineers” is correct.', answer: false, feedback: 'With they we use are: “They are engineers.”' },
    { id: 'a1u01-t7', type: 'word-order', instructions: 'Put the words in order.', prompt: 'Build the question.', words: ['is', 'name', 'What', 'your'], answer: ['What', 'is', 'your', 'name'], feedback: 'What is your name?' },
    { id: 'a1u01-t8', type: 'multiple-choice', instructions: 'Choose the best answer to: “Where are you from?”', prompt: 'Where are you from?', options: ['I’m from Peru.', 'I’m Peru.', 'I from Peru.'], answer: 0, feedback: 'We need the verb: “I’m from Peru.”' },
    { id: 'a1u01-t9', type: 'sentence-transformation', instructions: 'Make the sentence negative.', prompt: 'He is a teacher.', answer: 'He is not a teacher', accept: ['He isn’t a teacher', 'He’s not a teacher'], feedback: 'He is not / isn’t a teacher.' },
    { id: 'a1u01-t10', type: 'multiple-choice', instructions: 'Choose the nationality.', prompt: 'Which word is a nationality?', options: ['Brazil', 'Brazilian', 'Brasil'], answer: 1, feedback: 'Brazil is the country; Brazilian is the nationality.' }
  ],
  review: ['I am, you are, he/she/it is, we/you/they are.', 'Negative: add not (isn’t, aren’t, I’m not).', 'Question: verb before subject (Are you…? Is she…?).', 'Use a/an with jobs: a teacher, an engineer.', 'Personal information: What’s your name? Where are you from? How old are you?']
};
export default unit;
