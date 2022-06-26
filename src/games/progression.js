import getRandomInt from '../utils.js';

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
  let question = [...progression];
  const searchElement = getRandomInt(0, progression.length - 1);
  question[searchElement] = '..';
  question = question.join(' ');
  const answer = String(progression[searchElement]);

  return [question, answer];
};
