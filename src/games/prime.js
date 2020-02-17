import { generateNumber } from '../utils/generateNumber';
import check from '../index';

const randomLimit = 1001;

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, end = Math.sqrt(num); i <= end; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const getCorrectAnswer = () => {
  const number = generateNumber(randomLimit);
  const question = `${number}`;
  let correctAnswer = isPrime(number);
  correctAnswer = (correctAnswer) ? 'yes' : 'no';
  return [question, String(correctAnswer)];
};

export default () => check(description, getCorrectAnswer);