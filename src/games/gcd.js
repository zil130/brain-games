import { getRandomInt } from '../utils.js';

export const taskOfGame = 'Find the greatest common divisor of given numbers.';

const getUniqueValue = (num) => {
  const result = getRandomInt(2, 50);

  return (result !== num) ? result : getUniqueValue(num);
};

const isDivisor = (num, divisor) => num % divisor === 0;

const getCorrectAnswer = (x, y) => {
  const min = Math.min(x, y);

  for (let i = min; i > 1; i -= 1) {
    if (isDivisor(x, i) && isDivisor(y, i)) {
      return String(i);
    }
  }

  return '1';
};

export const playGame = () => {
  const x = getRandomInt(2, 50);
  const y = getUniqueValue(x);
  const question = `${x} ${y}`;
  const answer = getCorrectAnswer(x, y);

  return [question, answer];
};
