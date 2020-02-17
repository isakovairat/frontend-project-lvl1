import { generateNumber } from '../utils/generateNumber';
import check from '../index';

const description = 'What number is missing in the progression?';

const generateProgression = () => {
  let startNumber = generateNumber();
  const step = generateNumber(10);
  const resultArray = [];
  while (resultArray.length !== 10) {
    resultArray.push(startNumber + step);
    startNumber += step;
  }
  return resultArray;
};

const getStrProgression = (progression) => {
  const hideElem = progression[Math.floor(Math.random() * progression.length)];
  let resultStr = '';
  for (let i = 0; i < progression.length; i += 1) {
    if (progression[i] === hideElem) {
      resultStr += '..';
    } else {
      resultStr += `${progression[i]}`;
    }
    resultStr += ' ';
  }
  return [resultStr, String(hideElem)];
};

const getCorrectAnswer = () => getStrProgression(generateProgression());

export default () => check(description, getCorrectAnswer);
