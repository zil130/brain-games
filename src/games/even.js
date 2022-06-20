import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import getRandomInt from '../random-int.js';
import roundsNumber from '../rounds-number.js';

const userName = greeting();

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < roundsNumber; i += 1) {
    const num = getRandomInt(-20, 20);
    const userAnswer = readlineSync.question(`Question: ${num}\nYour answer: `);
    const correctAnswer = num % 2 === 0 ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
      console.log(`Let's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
