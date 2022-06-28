import runGame from '../index.js';
import { getRandomInt } from '../utils.js';

const taskOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNum = -20;
const maxNum = 20;

const isEven = (num) => num % 2 === 0;

const genRound = () => {
  const num = getRandomInt(minNum, maxNum);
  const question = num;
  const answer = isEven(num) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  runGame(taskOfGame, genRound);
};
