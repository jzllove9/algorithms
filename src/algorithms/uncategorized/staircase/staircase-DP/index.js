/**
 * 递归楼梯问题 动态规划
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
const staircaseDP = (n) => {
  if (n < 0) return 0;
  const dp = [0, 1, 2];
  if (n <= 2) return dp[n];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

export default staircaseDP;
