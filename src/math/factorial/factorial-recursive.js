const factorial = (num) => {
  if (!num) return 1;
  return num * factorial(num - 1);
};

export default factorial;
