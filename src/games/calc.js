import readlineSync from 'readline-sync';
import getRandomInt from '../random-int.js';
import getCorrectAnswer from '../calculate-expr.js';
import { operators } from '../constants.js';

export const taskOfGame = 'What is the result of the expression?';

export const playGame = () => {
  const [x, y, operator] = [
    getRandomInt(0, 10),
    getRandomInt(0, 10),
    operators[getRandomInt(0, 2)],
  ];
  const userAnswer = readlineSync.question(`Question: ${x} ${operator} ${y}\nYour answer: `);
  const correctAnswer = getCorrectAnswer(x, y, operator);

  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }

  return true;
};
