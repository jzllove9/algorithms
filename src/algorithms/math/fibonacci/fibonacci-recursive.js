const fibonacci = (num) => {
  const cache = {
    0: 1,
    1: 1,
  };

  const func = (n) => {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    if (cache[n]) return cache[n];
    let res = 0;
    res = func(n - 1) + func(n - 2);
    if (!cache[n]) cache[n] = res;
    return res;
  };

  return func(num);
};

export default fibonacci;
