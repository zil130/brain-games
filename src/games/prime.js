import readlineSync from 'readline-sync';
import getRandomInt from '../random-int.js';

export const taskOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const sqrtNum = Math.sqrt(num);

  for (let i = 2; i <= sqrtNum; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

export const playGame = () => {
  const num = getRandomInt(2, 3571);
  const userAnswer = readlineSync.question(`Question: ${num}\nYour answer: `);
  const correctAnswer = isPrime(num);

  return userAnswer === correctAnswer;
};
