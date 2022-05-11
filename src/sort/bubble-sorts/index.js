export default (randomArr) => {
  if (!randomArr.length) return [];
  if (randomArr.length < 2) return randomArr;
  const _copyArr = [...randomArr];
  //长度-1是因为最后一位没有必要排序
  for (let i = 0; i < _copyArr.length - 1; i++) {
    // 优化冒泡排序，如果一趟遍历结束未发生任何交换，那么直接跳出外层循环
    let sorted = false;
    //长度-1是因为要比较j和j+1
    for (let j = 0; j < _copyArr.length - i - 1; j++) {
      if (_copyArr[j] > _copyArr[j + 1]) {
        sorted = true;
        [_copyArr[j], _copyArr[j + 1]] = [_copyArr[j + 1], _copyArr[j]];
      }
    }
    if (!sorted) break;
  }
  return _copyArr;
}