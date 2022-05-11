const quickSort = (randomArr) => {
  if (!randomArr.length) return [];
  if (randomArr.length < 2) return randomArr;
  const a = [...randomArr];
  const left = [];
  const right = [];
  const ratio = a[0];
  const center = [ratio];
  for (let i = 1; i < a.length; i++) {
    if (a[i] < ratio) {
      left.push(a[i]);
    } else if (a[i] > ratio) {
      right.push(a[i]);
    } else {
      center.push(a[i]);
    }
  }
  return quickSort(left).concat(center).concat(quickSort(right));

}

export default quickSort;