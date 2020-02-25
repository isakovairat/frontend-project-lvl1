import { generateNumber } from '../utils/generateNumber';
import playTheGame from '../index';

const description = 'What is the result of the expression?';

const generateSign = () => {
  const signs = ['+', '-', '*'];
  return signs[generateNumber(0, signs.length)];
};

const calcExp = (num1, num2, sign) => {
  let result;
  switch (sign) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      break;
  }
  return result;
};

const getCorrectAnswer = () => {
  const num1 = generateNumber();
  const num2 = generateNumber();
  const sign = generateSign();
  const question = `${num1} ${sign} ${num2}`;
  const correctAnswer = calcExp(num1, num2, sign);
  return [question, correctAnswer.toString()];
};

export default () => playTheGame(description, getCorrectAnswer);
