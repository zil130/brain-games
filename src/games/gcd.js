import getRandomInt from '../utils.js';

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

  return [
    `Question: ${x} ${y}\nYour answer: `,
    getCorrectAnswer(x, y),
  ];
};
