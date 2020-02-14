import readlineSync from 'readline-sync';
import { generateNumber } from '../utils/generateNumber';

const numberOfAttempts = 3;

const printDescription = () => console.log('Find the greatest common divisor of given numbers.');

const gcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const generateQuestion = (num1, num2) => `Question: ${num1} ${num2}`;

const getUserAnswer = (question) => readlineSync.question(`${question}\nYour answer: `);

const runBrainGcdGame = (userName) => {
  printDescription();
  let correctAnswers = 0;
  let userAnswer = 0;
  let correctAnswer;
  while (correctAnswers <= numberOfAttempts) {
    const num1 = generateNumber();
    const num2 = generateNumber();
    userAnswer = getUserAnswer(generateQuestion(num1, num2));
    correctAnswer = gcd(num1, num2);
    if (Number(userAnswer) !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong ;(. Correct answer was "${correctAnswer}"`);
      break;
    } else {
      correctAnswers += 1;
      console.log('Correct!');
      if (correctAnswers === numberOfAttempts) {
        console.log(`Congratulations, ${userName}`);
        break;
      }
    }
  }
};

export default runBrainGcdGame;
