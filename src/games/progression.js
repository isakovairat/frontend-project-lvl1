import { generateNumber } from '../utils/generateNumber';
import check from '../index';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const generateProgression = () => {
  let startNumber = generateNumber();
  const step = generateNumber(1, 10);
  const progression = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    progression.push(startNumber + step * i);
  }
  return progression;
};

const getStrProgression = (progression) => {
  const hiddenIndex = generateNumber(0, progressionLength);
  let result = '';
  for (let i = 0; i < progression.length; i += 1) {
    if (i === hiddenIndex) {
      result = `${result} ..`;
    } else {
      result = `${result} ${progression[i]}`;
    }
  }
  return [result, progression[hiddenIndex].toString()];
};

const getCorrectAnswer = () => getStrProgression(generateProgression());

export default () => check(description, getCorrectAnswer);
