import readlineSync from 'readline-sync';

const getRandomInt = (maxNum) => Math.floor(Math.random() * maxNum);

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const num = getRandomInt(20);
    const answer = readlineSync.question(`Question: ${num}\nYour answer: `);
    const even = num % 2 === 0 ? 'yes' : 'no';
    if (answer !== even) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
