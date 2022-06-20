export default (x, y, operator) => {
  let result;

  switch (operator) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    default:
  }

  return String(result);
};
