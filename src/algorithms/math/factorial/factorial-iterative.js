const factorial = (num) => {
  if (!num) return 1;
  let n = 1;
  let res = 1;
  while (n <= num) {
    res *= n++;
  }

  return res;
};

export default factorial;
