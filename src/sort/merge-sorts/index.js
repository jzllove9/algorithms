const mergeSorts = (randomArr) => {
  if (!randomArr.length) return [];
  if (randomArr.length < 2) return randomArr;
  const a = [...randomArr];
  let result = [];
  const mid = Math.floor(a.length / 2);
  const p1 = mergeSorts(a.slice(0, mid));
  const p2 = mergeSorts(a.slice(mid, a.length));
  let _idx1 = 0;
  let _idx2 = 0;
  while (_idx1 < p1.length && _idx2 < p2.length) {
    if (p1[_idx1] < p2[_idx2]) {
      result.push(p1[_idx1++]);
    } else if (p1[_idx1] > p2[_idx2]) {
      result.push(p2[_idx2++]);
    } else {
      result.push(p1[_idx1++], p2[_idx2++]);
    }
  }

  if (_idx1 >= p1.length) result = result.concat(p2.slice(_idx2));
  if (_idx2 >= p2.length) result = result.concat(p1.slice(_idx1));
  return result;
}

/**
 * 更好的写法
 * @param {*} randomArr 
 */
const mergeSorts2 = (randomArr) => {
  if (!randomArr.length) return [];
  if (randomArr.length < 2) return randomArr;
  const a = [...randomArr];
  const result = [];
  const mid = Math.floor(a.length / 2);
  const [left, right] = [mergeSorts2(a.slice(0, mid)), mergeSorts2(a.slice(mid, a.length))];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}

export default mergeSorts2;