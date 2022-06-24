import getRandomInt from '../random-int.js';

export const taskOfGame = 'What number is missing in the progression?';

const getProgression = () => {
  const progression = [];
  const [firstNum, step, len] = [
    getRandomInt(1, 20),
    getRandomInt(2, 10),
    getRandomInt(5, 10),
  ];

  for (let i = firstNum; progression.length < len; i += step) {
    progression.push(i);
  }

  return progression;
};

export const playGame = () => {
  const progression = getProgression();
  const searchElement = getRandomInt(0, progression.length - 1);

  return [
    `Question: ${progression.slice(0, searchElement).join(' ')} .. ${progression.slice(searchElement + 1).join(' ')}\nYour answer: `,
    String(progression[searchElement]),
  ];
};
