import readlineSync from 'readline-sync';

const printDescription = () => console.log('What is the result of the expression?');

const generateNumber = () => Math.floor(Math.random() * Math.floor(100));

const generateSign = () =>
{
  const signs = ['+', '-', '*'];
  return signs[Math.floor(Math.random() * signs.length)];
};

const generateQuestion = (num1, num2, sign) => `${num1} ${sign} ${num2}`;

const getCorrectAnswer = (num1, num2, sign) => {
  let result = 0;
  if (sign === '+')
    result = Number(num1) + Number(num2);
  if (sign === '-')
    result = Number(num1) - Number(num2);
  if (sign === '*')
    result = Number(num1) * Number(num2);
  return result;
};

const getUserAnswer = (question) => readlineSync.question(`Question: ${question}\nYour answer: `);

const runBrainCalcGame = (userName) => {
  printDescription();
  let correctAnswers = 0;
  let userAnswer;
  let correctAnswer;
  while (correctAnswers <= 3)
  {
    let num1 = generateNumber();
    let num2 = generateNumber();
    let sign = generateSign();
    userAnswer = getUserAnswer(generateQuestion(num1, num2, sign));
    correctAnswer = getCorrectAnswer(num1, num2, sign);
    if (Number(userAnswer) !== correctAnswer)
    {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      break;
    } else {
      correctAnswers += 1;
      console.log('Correct!');
      if (correctAnswers === 3) {
        console.log(`Congratulations, ${userName}`);
        break;
      }
    }
  }
};

export { runBrainCalcGame };
