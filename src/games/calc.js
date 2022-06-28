import runGame from '../index.js';
import { getRandomInt, getRandomIndex } from '../utils.js';

const taskOfGame = 'What is the result of the expression?';
const minNum = 0;
const maxNum = 10;

const getAnswer = (x, y, operator) => {
  if (operator === '+') {
    return String(x + y);
  }

  if (operator === '-') {
    return String(x - y);
  }

  return String(x * y);
};

const genRound = () => {
  const x = getRandomInt(minNum, maxNum);
  const y = getRandomInt(minNum, maxNum);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomIndex(operators)];
  const question = `${x} ${operator} ${y}`;
  const answer = getAnswer(x, y, operator);

  return [question, answer];
};

export default () => {
  runGame(taskOfGame, genRound);
};
