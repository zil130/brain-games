import runGame from '../index.js';
import { getRandomInt } from '../utils.js';

const taskOfGame = 'Find the greatest common divisor of given numbers.';
const minNum = 2;
const maxNum = 50;

const getUniqueValue = (num) => {
  const result = getRandomInt(minNum, maxNum);

  return (result !== num) ? result : getUniqueValue(num);
};

const isDivisor = (num, divisor) => num % divisor === 0;

const getAnswer = (x, y) => {
  const min = Math.min(x, y);

  for (let i = min; i > 1; i -= 1) {
    if (isDivisor(x, i) && isDivisor(y, i)) {
      return String(i);
    }
  }

  return '1';
};

const genRound = () => {
  const x = getRandomInt(minNum, maxNum);
  const y = getUniqueValue(x);
  const question = `${x} ${y}`;
  const answer = getAnswer(x, y);

  return [question, answer];
};

export default () => {
  runGame(taskOfGame, genRound);
};
