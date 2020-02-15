import generateNumber from "../utils/generateNumber";
import check from '../index';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) return ('yes');
  return ('no');
};

const getCorrectAnswer = () => {
  const number = generateNumber();
  const question = `${number}`;
  const correctAnswer = isEven(number);
  return [question, correctAnswer];
};

export default () => check(description, getCorrectAnswer);