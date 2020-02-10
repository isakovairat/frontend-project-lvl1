import readlineSync from 'readline-sync';

const hello = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// eslint-disable-next-line import/prefer-default-export
export { hello };
