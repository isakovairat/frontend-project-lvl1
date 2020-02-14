import readlineSync from 'readline-sync';

const numberOfAttempts = 3;

const greetUser = (description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

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

const start = (description, level) => {
  const userName = greetUser(description);
  let correctAnswers = 0;
  let isCorrect;
  let question;
  let correctAnswer;
  while (correctAnswers <= numberOfAttempts) {
    if (correctAnswers === numberOfAttempts) {
      console.log(`Congratulations, ${userName}`);
      break;
    }
    [question, correctAnswer] = level();
    isCorrect = makeLevel(question, correctAnswer);
    if (isCorrect) {
      correctAnswers += 1;
    } else {
      console.log(`Let's try again, ${userName}`);
    }
  }
};

export default start;
