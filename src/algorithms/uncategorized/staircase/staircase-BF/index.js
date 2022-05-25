/**
 * 递归楼梯问题 暴力递归
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
const staircaseBF = (n) => {
  if (n <= 0) return 0;
  if (n <= 3) return n;
  return staircaseBF(n - 1) + staircaseBF(n - 2);
};

export default staircaseBF;
