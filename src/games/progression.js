import readlineSync from 'readline-sync';
import { generateNumber } from '../utils/generateNumber';

const numberOfAttempts = 3;

const printDescription = () => console.log('What number is missing in the progression?');

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

const getUserAnswer = (question) => readlineSync.question(`${question}\nYour answer: `);

const getStrProgression = (progression, hideElem) => {
  let resultStr = 'Question: ';
  for (let i = 0; i < progression.length; i += 1) {
    if (progression[i] === hideElem) {
      resultStr += '..';
    } else {
      resultStr += `${progression[i]}`;
    }
    resultStr += ' ';
  }
  return resultStr;
};

const runBrainProgressionGame = (userName) => {
  printDescription();
  let correctAnswers = 0;
  let userAnswer = 0;
  let resultArray;
  while (correctAnswers <= numberOfAttempts) {
    resultArray = generateProgression();
    // Getting random item from array
    const correctAnswer = resultArray[Math.floor(Math.random() * resultArray.length)];
    userAnswer = getUserAnswer(getStrProgression(resultArray, correctAnswer));
    if (Number(userAnswer) !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong ;(. Correct answer was "${correctAnswer}"`);
      break;
    } else {
      correctAnswers += 1;
      console.log('Correct!');
      if (correctAnswers === numberOfAttempts) {
        console.log(`Congratulations, ${userName}`);
        break;
      }
    }
  }
};

export default runBrainProgressionGame;
