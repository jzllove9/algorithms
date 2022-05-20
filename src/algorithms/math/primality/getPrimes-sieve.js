const getPrimes = (n) => {
  if (n < 2) return [];
  const res = [2];
  const arr = Array.from({ length: n }).map((item, idx) => idx + 1);
  for (let i = 2; i < arr.length; i += 2) {
    for (let j = i + i + 1; j < arr.length; j += i + 1) {
      arr[j] = false;
    }
  }

  for (let i = 2; i < arr.length; i += 2) {
    arr[i] && res.push(arr[i]);
  }
  return res;
};

export default getPrimes;
