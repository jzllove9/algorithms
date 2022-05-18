import gcd from '../greatest-common-divisor/gcd-euclidean-recursive.js';

const lcm = (a, b) => {
  if (!a || !b) return 0;
  if (a === b) return a;
  const _gcd = gcd(a, b);
  return Math.abs(a * b) / _gcd;
};
export default lcm;
