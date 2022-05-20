/**
 * 因为int范围内最大3的幂次方是3^19次方1162261467 只要判断能能否被这个数整除即可：
 * @param {*} n
 */
const isPowerOfThree = (n) => {
  if (n < 1) return false;
  return 1162261467 % n === 0;
};

export default isPowerOfThree;
