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
 *
 * 为了方便，我们统一为二维矩阵，且计算方式为矩阵右乘
 */
const fastMatrixPower = (n, base, p) => {
  let result = n;
  let power = base;
  while (p > 0) {
    if (p & 1) {
      // p为奇数时，我们将底数乘以base矩阵，从而让幂数 -1
      result = mulMatrix(result, power);
    }
    // 我们将幂数本身平方并将幂的计算次数减少一倍
    p >>= 1;
    power = mulMatrix(power, power);
  }
  return result;
};

const fibonacci = (num) => {
  if (num === 0) return 0;
  /**
   * 举例，求f2:
   * |1 0|     |1 1|   |1 1|
   *        x        =
   * |0 0|     |1 0|   |0 0|
   * 此时f2 = matrix[0][0]
   *
   * 再用该矩阵求f3：
   * |1 1|     |1 1|   |2 1|
   *        x        =
   * |0 0|     |1 0|   |0 0|
   * 此时f3 = matrix[0][0]
   *
   * 所以得以验证:
   *  |fn   fn-1|     |1 0|     |1 1| ^ (n-1)
   *               =         x
   *  |1      1 |     |1 0|     |1 0|
   * 而 matrix[0][0] 正是我们所要求的目标值
   */
  const res = fastMatrixPower(
    // 初始矩阵
    [
      [1, 0],
      [0, 0],
    ],
    // 迭代矩阵
    [
      [1, 1],
      [1, 0],
    ],
    // 迭代矩阵的相乘次数为斐波那契数列目标项 - 1 即 num - 1
    num - 1,
  );
  return res[0][0];
};

export default fibonacci;
