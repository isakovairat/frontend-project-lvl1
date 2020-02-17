import { generateNumber } from '../utils/generateNumber';
import check from '../index';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const getCorrectAnswer = () => {
  const num1 = generateNumber();
  const num2 = generateNumber();
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2);
  return [question, String(correctAnswer)];
};

export default () => check(description, getCorrectAnswer);
