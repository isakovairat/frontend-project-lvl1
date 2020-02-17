import { generateNumber } from '../utils/generateNumber';
import check from '../index';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = () => {
  const number = generateNumber();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number.toString(), correctAnswer];
};

export default () => check(description, getCorrectAnswer);
