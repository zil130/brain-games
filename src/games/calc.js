import getRandomInt from '../utils.js';

export const taskOfGame = 'What is the result of the expression?';

const getCorrectAnswer = (x, y, operator) => {
  if (operator === '+') {
    return String(x + y);
  }

  if (operator === '-') {
    return String(x - y);
  }

  return String(x * y);
};

export const playGame = () => {
  const x = getRandomInt(0, 10);
  const y = getRandomInt(0, 10);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(0, 2)];
  const question = `${x} ${operator} ${y}`;
  const answer = getCorrectAnswer(x, y, operator);

  return [question, answer];
};
