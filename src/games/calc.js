import { generateNumber } from '../utils/generateNumber';
import generateSign from '../utils/generateSign';
import check from '../index';

const description = 'What is the result of the expression?';

const calcExp = (num1, num2, sign) => {
  let result = 0;
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
  return [question, String(correctAnswer)];
};

export default () => check(description, getCorrectAnswer);
