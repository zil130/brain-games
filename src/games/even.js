import readlineSync from 'readline-sync';
import getRandomInt from '../random-int.js';

export const taskOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

export const playGame = () => {
  const num = getRandomInt(-20, 20);
  const userAnswer = readlineSync.question(`Question: ${num}\nYour answer: `);
  const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';

  return userAnswer === correctAnswer;
};
