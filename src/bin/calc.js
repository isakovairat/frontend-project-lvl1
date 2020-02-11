import readlineSync from 'readline-sync';
import { generateNumber } from './generateNumber';

const numberOfAttempts = 3;

const printDescription = () => console.log('What is the result of the expression?');

const generateSign = () => {
  const signs = ['+', '-', '*'];
  return signs[Math.floor(Math.random() * signs.length)];
};

const generateQuestion = (num1, num2, sign) => `${num1} ${sign} ${num2}`;

const getCorrectAnswer = (num1, num2, sign) => {
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

const getUserAnswer = (question) => readlineSync.question(`Question: ${question}\nYour answer: `);

const runBrainCalcGame = (userName) => {
  printDescription();
  let correctAnswers = 0;
  let userAnswer;
  let correctAnswer;
  while (correctAnswers <= numberOfAttempts) {
    const num1 = generateNumber();
    const num2 = generateNumber();
    const sign = generateSign();
    userAnswer = getUserAnswer(generateQuestion(num1, num2, sign));
    correctAnswer = getCorrectAnswer(num1, num2, sign);
    if (Number(userAnswer) !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
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

// eslint-disable-next-line import/prefer-default-export
export { runBrainCalcGame };
