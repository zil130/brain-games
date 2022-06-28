import runGame from '../index.js';
import { getRandomInt } from '../utils.js';

const taskOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const genRound = () => {
  const num = getRandomInt(-20, 20);
  const question = num;
  const answer = isEven(num);

  return [question, answer];
};

export default () => {
  runGame(taskOfGame, genRound);
};
