import { generateNumber } from '../utils/generateNumber';
import playTheGame from '../index';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const maxStep = 10;
const minStep = 1;

const generateProgression = (startNumber, step) => {
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
    result = (i === hiddenIndex) ? `${result}..` : `${result}${progression[i]}`;
    if (i !== progression.length - 1) result += ' ';
  }
  return [result, progression[hiddenIndex].toString()];
};

const getCorrectAnswer = () => getStrProgression(generateProgression(generateNumber(),
  generateNumber(minStep, maxStep)));

export default () => playTheGame(description, getCorrectAnswer);
