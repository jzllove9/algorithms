const mulMatrix = (m1, m2) => [
  [
    m1[0][0] * m2[0][0] + m1[0][1] * m2[1][0],
    m1[0][0] * m2[0][1] + m1[0][1] * m2[1][1],
  ],
  [
    m1[1][0] * m2[0][0] + m1[1][1] * m2[1][0],
    m1[1][0] * m2[0][1] + m1[1][1] * m2[1][1],
  ],
];

/**
 * 矩阵快速求幂
 * @param {*} n
 * @param {*} p
 */
const fastMatrixPower = (n, p) => {
  let result = n;
  let base = [[1, 1], [1, 0]];
  while (p > 0) {
    if (p & 1) {
      result = mulMatrix(result, base);
    }
    p >>= 1;
    base = mulMatrix(base, base);
  }
  return result;
};

const fibonacci = (num) => {
  if (num === 0) return 0;
  if (num === 1 || num === 2) return 1;
  const res = mulMatrix([[1, 1], [1, 0]], fastMatrixPower([[1, 1], [1, 0]], num - 2));
  return res[0][1];
};

export default fibonacci;
