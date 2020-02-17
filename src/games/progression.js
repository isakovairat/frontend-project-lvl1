import { generateNumber } from '../utils/generateNumber';
import check from '../index';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const generateProgression = () => {
  let startNumber = generateNumber();
  const step = generateNumber(10);
  const progression = [];
  while (progression.length !== progressionLength) {
    progression.push(startNumber + step);
    startNumber += step;
  }
  return progression;
};

const getStrProgression = (progression) => {
  const hideElem = progression[generateNumber(0, 10)];
  let result = '';
  for (let i = 0; i < progression.length; i += 1) {
    if (progression[i] === hideElem) {
      result = `${result} ..`;
    } else {
      result = `${result} ${progression[i]}`;
    }
  }
  return [result, String(hideElem)];
};

const getCorrectAnswer = () => getStrProgression(generateProgression());

export default () => check(description, getCorrectAnswer);
