import readlineSync from 'readline-sync';
import greeting from './cli.js';

export default (taskOfGame, playGame) => {
  const userName = greeting();
  console.log(taskOfGame);
  const roundsNumber = 3;

  for (let i = 0; i < roundsNumber; i += 1) {
    const [question, correctAnswer] = playGame();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (userAnswer !== correctAnswer) {
      if (!['yes', 'no'].includes(correctAnswer)) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      }

      console.log(`Let's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
