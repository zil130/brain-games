import getRandomInt from '../utils.js';

export const taskOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

export const playGame = () => {
  const num = getRandomInt(-20, 20);

  return [
    `Question: ${num}\nYour answer: `,
    (num % 2 === 0) ? 'yes' : 'no',
  ];
};
