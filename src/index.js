import readlineSync from 'readline-sync';

const numberOfAttempts = 3;

const start = (description, createQuestionAndCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let correctAnswers = 0; correctAnswers < numberOfAttempts; correctAnswers += 1) {
    if (correctAnswers === numberOfAttempts) {
      console.log(`Congratulations, ${userName}`);
      break;
    }
    const [question, correctAnswer] = createQuestionAndCorrectAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}`);
      break;
    } else {
      console.log('Correct!');
      correctAnswers += 1;
    }
  }
};

export default start;
