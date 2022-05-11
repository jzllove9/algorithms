export default (randomArr) => {
  if (!randomArr.length) return [];
  if (randomArr.length < 2) return randomArr;
  const a = [...randomArr];
  for (let i = 1; i < a.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (a[j] < a[j - 1]) {
        [a[j - 1], a[j]] = [a[j], a[j - 1]];
      }
    }
  }
  return a;
}