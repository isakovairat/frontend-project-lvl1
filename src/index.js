import readlineSync from 'readline-sync';

const numberOfAttempts = 3;

const makeLevel = (question, correctAnswer) => {
  let isCorrect;
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    isCorrect = true;
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    isCorrect = false;
  }
  return isCorrect;
};

const start = (description, createQuestion) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  let isCorrect;
  for (let correctAnswers = 0; correctAnswers < numberOfAttempts; correctAnswers += 1) {
    if (correctAnswers === numberOfAttempts) {
      console.log(`Congratulations, ${userName}`);
      break;
    }
    const [question, correctAnswer] = createQuestion();
    isCorrect = makeLevel(question, correctAnswer);
    if (isCorrect) {
      correctAnswers += 1;
    } else {
      console.log(`Let's try again, ${userName}`);
      break;
    }
  }
};

export default start;
