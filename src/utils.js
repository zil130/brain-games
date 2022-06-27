const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomIndex = (arr) => getRandomInt(0, arr.length - 1);

export { getRandomInt, getRandomIndex };
