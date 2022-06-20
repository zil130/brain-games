import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import getRandomInt from '../random-int.js';
import getCorrectAnswer from '../calculate-expr.js';
import roundsNumber from '../rounds-number.js';

const userName = greeting();
const operations = ['+', '-', '*'];

export default () => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < roundsNumber; i += 1) {
    const [x, y, operator] = [
      getRandomInt(0, 10),
      getRandomInt(0, 10),
      operations[getRandomInt(0, 2)],
    ];
    const userAnswer = readlineSync.question(`Question: ${x} ${operator} ${y}\nYour answer: `);
    const correctAnswer = getCorrectAnswer(x, y, operator);

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
