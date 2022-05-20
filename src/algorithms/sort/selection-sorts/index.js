export default (randomArr) => {
  if (!randomArr.length) return [];
  if (randomArr.length < 2) return randomArr;
  const _arr = [...randomArr];
  for (let i = 0; i < _arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < _arr.length; j++) {
      if (_arr[min] > _arr[j]) min = j;
    }
    if (min !== i) [_arr[i], _arr[min]] = [_arr[min], _arr[i]];
  }

  return _arr;
};
