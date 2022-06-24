import getRandomInt from '../utils.js';

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
  const num = getRandomInt(2, 100);

  return [
    `Question: ${num}\nYour answer: `,
    isPrime(num),
  ];
};
