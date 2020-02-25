import { generateNumber } from '../utils/generateNumber';
import playTheGame from '../index';

const randomLimit = 1001;

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 1) return false;
  for (let i = 2, end = Math.sqrt(num); i <= end; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const getCorrectAnswer = () => {
  const number = generateNumber(randomLimit);
  const question = number.toString();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer.toString()];
};

export default () => playTheGame(description, getCorrectAnswer);
