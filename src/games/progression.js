import getRandomInt from '../utils.js';

export const taskOfGame = 'What number is missing in the progression?';
const minNum = -20;
const maxNum = 20;
const minStep = 2;
const maxStep = 10;
const minLen = 5;
const maxLen = 10;

const getProgression = (firstNum, step, len) => {
  const progression = [];

  for (let i = firstNum; progression.length < len; i += step) {
    progression.push(i);
  }

  return progression;
};

const getQuestionProgression = (progression, index) => {
  const result = [...progression];
  result[index] = '..';

  return result.join(' ');
};

export const playGame = () => {
  const firstNum = getRandomInt(minNum, maxNum);
  const step = getRandomInt(minStep, maxStep);
  const len = getRandomInt(minLen, maxLen);
  const progression = getProgression(firstNum, step, len);
  const searchElement = getRandomInt(0, progression.length - 1);
  const question = getQuestionProgression(progression, searchElement);
  const answer = String(progression[searchElement]);

  return [question, answer];
};
