/**
 * 换底公式 loga(b) = logc(b) / logc(a)
 * 所以若n为3的幂 log3(n) 一定为整数
 * 即 log10(n) / log10(3) 一定为整数
 * @param {*} n ;
 */

const isPowerOfThree = (n) => {
  if (n < 1) return false;
  const temp = Math.log10(n) / Math.log10(3);
  return (temp - Math.round(temp)) === 0;
};

export default isPowerOfThree;
