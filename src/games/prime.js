import runGame from '../index.js';
import { getRandomInt } from '../utils.js';

const taskOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNum = -20;
const maxNum = 100;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  const sqrtNum = Math.sqrt(num);

  for (let i = 2; i <= sqrtNum; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const genRound = () => {
  const num = getRandomInt(minNum, maxNum);
  const question = num;
  const answer = isPrime(num) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  runGame(taskOfGame, genRound);
};
