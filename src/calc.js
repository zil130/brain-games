import readlineSync from 'readline-sync';

const getRandomIntInclusive = (min, max) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};

const getCorrectAnswer = (x, y, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    default:
  }

  return String(result);
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  const operations = ['+', '-', '*'];

  for (let i = 0; i < 3; i += 1) {
    const [x, y, operator] = [
      getRandomIntInclusive(0, 10),
      getRandomIntInclusive(0, 10),
      operations[getRandomIntInclusive(0, 2)],
    ];
    const correctAnswer = getCorrectAnswer(x, y, operator);
    const userAnswer = readlineSync.question(`Question: ${x} ${operator} ${y}\nYour answer: `);
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
