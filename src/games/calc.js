import getRandomInt from '../utils.js';

export const taskOfGame = 'What is the result of the expression?';

const getCorrectAnswer = (x, y, operator) => {
  let result;

  switch (operator) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    default:
  }

  return String(result);
};

export const playGame = () => {
  const operators = ['+', '-', '*'];
  const [x, y, operator] = [
    getRandomInt(0, 10),
    getRandomInt(0, 10),
    operators[getRandomInt(0, 2)],
  ];

  return [
    `Question: ${x} ${operator} ${y}\nYour answer: `,
    getCorrectAnswer(x, y, operator),
  ];
};
