import readlineSync from 'readline-sync';

const generateTheQuestion = () => Math.floor(Math.random() * Math.floor(100));

const printDescription = () => console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

const getCorrectAnswer = (number, userAnswer) => {
  if (number % 2 === 0 && userAnswer === 'yes') return (1);
  if (number % 2 === 1 && userAnswer === 'no') return (1);
  return (0);
};

const getUserAnswer = () => {
  const number = generateTheQuestion();
  const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);
  return [number, userAnswer];
};

const getOppositeAnswer = (userAnswer) => {
  if (userAnswer === 'yes') {
    return 'no';
  }
  return 'yes';
};

const runBrainEvenGame = (userName) => {
  printDescription();
  let correctAnswers = 0;
  let userAnswer;
  let number;
  while (correctAnswers <= 3) {
    [number, userAnswer] = getUserAnswer();
    const correctAnswer = getCorrectAnswer(number, userAnswer);
    if (!correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${getOppositeAnswer(userAnswer)}'\nLet's try again, ${userName}`);
      break;
    } else {
      correctAnswers += 1;
      console.log('Correct!');
      if (correctAnswers === 3) {
        console.log(`Congratulations, ${userName}!`);
        break;
      }
    }
  }
};

// eslint-disable-next-line import/prefer-default-export
export { runBrainEvenGame };
