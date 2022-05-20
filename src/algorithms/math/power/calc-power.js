const power = (a, n) => {
  if (!a) return 0;
  if (!n) return 1;
  let res = 1;
  while (n) {
    if (n & 1) {
      res *= a;
    }
    n >>= 1;
    a *= a;
  }

  return res;
};

export default power;
