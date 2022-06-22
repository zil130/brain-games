import readlineSync from 'readline-sync';
import getRandomInt from '../random-int.js';

export const taskOfGame = 'Find the greatest common divisor of given numbers.';

const getUniqueValue = (num) => {
  const result = getRandomInt(3, 100);
  return (result !== num) ? result : getUniqueValue(num);
};

const getCorrectAnswer = (x, y) => {
  let result;

  for (let i = Math.max(x, y); i > 0; i -= 1) {
    if (x % i === 0 && y % i === 0) {
      result = i;
      break;
    }
  }

  return String(result);
};

export const playGame = () => {
  const x = getRandomInt(2, 100);
  const y = getUniqueValue(x);

  const userAnswer = readlineSync.question(`Question: ${x} ${y}\nYour answer: `);
  const correctAnswer = getCorrectAnswer(x, y);

  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }

  return true;
};
