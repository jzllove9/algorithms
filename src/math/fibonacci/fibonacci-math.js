/**
 * 斐波那契通项公式
 */
const fibonacci = (num) => {
  if (num === 0) return 0;
  if (num === 1 || num === 2) return 1;
  return Math.round(
    (1 / Math.sqrt(5)) * (((Math.sqrt(5) + 1) * 0.5) ** num - ((Math.sqrt(5) - 1) * 0.5) ** num),
  );
};

export default fibonacci;
