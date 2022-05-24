/**
 * 完全背包问题
 *
 * 问题：有 N 件物品和一个容量是 V 的背包。每件物品可以使用多次。 第 i 件物品的体积是 vi，价值是 wi。
 * 求解将哪些物品装入背包，可使这些物品的总体积不超过背包容量，且总价值最大。
 *
 * 输入：
 * 背包体积：
 *  V = 10
 *
 * 物品：
 *  N = [
 *    {v: 2, w: 3},
 *    {v: 1, w: 2},
 *    {v: 3, w: 4},
 *    {v: 5, w: 5},
 *    {v: 10, w: 9},
 *    {v: 9, w: 12},
 *    {v: 7, w: 9},
 *  ]
 *
 * 输出：
 *  20
 */
const unBoundedKnapsackProblem = (V, N) => {
  // 状态转移方程 dp[i][j]，i表示当前物品编号，j表示当前背包剩余体积
  const dp = Array(N.length).fill(0).map(() => Array(V + 1).fill(0));
  // 放入第一个物品，后续背包状态全部更新为根据第一个物品所能拿到的最大价值，注意正向代表物品可重复放入
  for (let j = N[0].v; j <= V; j++) {
    dp[0][j] = dp[0][j - N[0].v] + N[0].w;
  }

  for (let i = 1; i < N.length; i++) {
    for (let j = 1; j <= V; j++) {
      // 由于物品可以重复放入，所以需要判断放入多个时候是否存在更大价值
      for (let k = 0; k * N[i].v <= j; k++) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - k * N[i].v] + k * N[i].w);
      }
    }
  }

  return dp[N.length - 1][V];
};

/**
 * 优化，三重循环复杂度过高
 * TODO 注释推导过程
 * @param {*} V
 * @param {*} N
 */
const unBoundedKnapsackProblem2 = (V, N) => {
  const dp = Array(V + 1).fill(0);
  for (let j = N[0].v; j <= V; j++) {
    dp[j] = dp[j - N[0].v] + N[0].w;
  }

  for (let i = 1; i < N.length; i++) {
    // 注意倒序防止物品被重复放入，因为我们通过 i - 1 推断 i 的内容，如果下一次循环为正向则代表物品被重复放入
    // 而反向遍历可以避免这种问题
    for (let j = N[i].v; j <= V; j++) {
      dp[j] = Math.max(dp[j], dp[j - N[i].v] + N[i].w);
    }
  }

  return dp[V];
};

export {
  unBoundedKnapsackProblem,
  unBoundedKnapsackProblem2,
};
