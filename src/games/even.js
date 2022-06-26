import getRandomInt from '../utils.js';

export const taskOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

export const playGame = () => {
  const num = getRandomInt(-20, 20);
  const question = num;
  const answer = isEven(num);

  return [question, answer];
};
