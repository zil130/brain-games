import greeting from './cli.js';

export default (taskOfGame, playGame) => {
  const userName = greeting();
  console.log(taskOfGame);
  const roundsNumber = 3;

  for (let i = 0; i < roundsNumber; i += 1) {
    if (!playGame()) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
