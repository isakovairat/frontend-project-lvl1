import { generateNumber } from '../utils/generateNumber';
import playTheGame from '../index';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = () => {
  const question = generateNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question.toString(), correctAnswer];
};

export default () => playTheGame(description, getCorrectAnswer);
