/**
 * 递归楼梯问题 迭代法
 *
 * 问题：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 *
 * 输入：1
 * 输出：1
 *
 * 输入：2
 * 输出：2
 *
 * 输入：3
 * 输出：3
 *
 * 输入：4
 * 输出：5
 *
 * ...
 */
const staircaseIT = (n) => {
  if (n <= 0) return 0;
  if (n <= 2) return n;
  let p = 1;
  let q = 2;
  let res = 0;
  let idx = 2;
  while (idx < n) {
    res = p + q;
    [p, q] = [q, res];
    idx++;
  }

  return res;
};

export default staircaseIT;
