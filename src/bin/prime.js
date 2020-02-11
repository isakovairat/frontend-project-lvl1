import readlineSync from 'readline-sync';
import { generateNumber } from './generateNumber';

const printDescription = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const getUserAnswer = (question) => readlineSync.question(`${question}\nYour answer: `);

const isPrime = (num) => {
  for (let i = 2, end = Math.sqrt(num); i <= end; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const runBrainPrimeGame = (userName) => {
  printDescription();
  let correctAnswers = 0;
  while (correctAnswers <= 3) {
    const randomNumber = generateNumber(1001);
    const correctAnswer = isPrime(randomNumber);
    const userAnswer = getUserAnswer(`Question: ${randomNumber}`);
    if (userAnswer === 'no' && correctAnswer) {
      console.log(`"${userAnswer}" is wrong ;(. Correct answer was "yes"`);
      break;
    } else if (userAnswer === 'yes' && !correctAnswer) {
      console.log(`"${userAnswer}" is wrong ;(. Correct answer was "no"`);
      break;
    } else if ((userAnswer === 'yes' && correctAnswer) || (userAnswer === 'no' && !correctAnswer)) {
      correctAnswers += 1;
      console.log('Correct!');
      if (correctAnswers === 3) {
        console.log(`Congratulations, ${userName}`);
        break;
      }
    }
  }
};

// eslint-disable-next-line import/prefer-default-export
export { runBrainPrimeGame };
