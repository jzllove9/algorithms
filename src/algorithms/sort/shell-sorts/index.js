export default (randomArr) => {
  if (!randomArr.length) return [];
  if (randomArr.length < 2) return randomArr;
  const a = [...randomArr];
  const ratio = 2;
  let h = Math.floor(a.length / ratio);
  while (h > 0) {
    for (let i = 0; i < a.length; i += 1) {
      for (let j = i; j >= 0; j -= h) {
        if (a[j] < a[j - h]) {
          [a[j], a[j - h]] = [a[j - h], a[j]];
        }
      }
    }
    h = Math.floor(h / ratio);
  }
  return a;
};
