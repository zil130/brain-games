import greeting from './cli.js';
import roundsNumber from './rounds-number.js';

export default (taskOfGame, playGame) => {
  const userName = greeting();
  console.log(taskOfGame);

  for (let i = 0; i < roundsNumber; i += 1) {
    if (!playGame()) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
