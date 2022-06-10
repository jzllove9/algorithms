/**
 * 01背包问题
 *
 * 问题：有 N 件物品和一个容量是 V 的背包。每件物品只能使用一次。 第 i 件物品的体积是 vi，价值是 wi。
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
 *  14
 */
const zeroKnapsackProblem = (V, N) => {
  // 状态转移方程 dp[i][j]，i表示当前物品编号，j表示当前背包剩余体积
  const dp = Array(N.length).fill(0).map(() => Array(V + 1).fill(0));
  // 放入第一个物品，后续背包状态全部更新为第一个物品的价值
  // 注意倒序防止物品被重复放入，因为我们获取当前 dp 需要使用前面的 dp 内容进行判断，
  // 如果在初始化阶段下一次循环为正向则代表物品被重复放入，反向遍历可以避免这种问题
  for (let j = V; j >= N[0].v; j--) {
    dp[0][j] = dp[0][j - N[0].v] + N[0].w;
  }

  for (let i = 1; i < N.length; i++) {
    for (let j = 1; j <= V; j++) {
      // 第 i 件物品有 放进|不放 两个可能，选择其中价值较高的（放入的前提是不超出体积）
      dp[i][j] = dp[i - 1][j];
      // 当 j > vi 时，说明背包至少可以放下该物体，此时才判断放入情况和不放入情况下的价值大小
      if (j >= N[i].v) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - N[i].v] + N[i].w);
      }
    }
  }

  return dp[N.length - 1][V];
};

/**
 * 优化，使用一维数组作为状态转移方程，减少时间，空间复杂度
 * 思路：状态转移其实与当前背包剩余空间强相关，而当前 j 的内容其实完全与 i - 1 的上层循环相同，
 * 于是可以覆盖掉之前已经遍历过的内容，将状态转移方程减少一个维度
 * @param {*} V
 * @param {*} N
 */
const zeroKnapsackProblem2 = (V, N) => {
  const dp = Array(V + 1).fill(0);
  for (let j = N[0].v; j <= V; j++) {
    dp[j] = N[0].w;
  }
  // 注意倒序防止物品被重复放入，因为我们通过 i - 1 推断 i 的内容，如果下一次循环为正向则代表物品被重复放入
  // 而反向遍历可以避免这种问题
  for (let i = 1; i < N.length; i++) {
    for (let j = V; j >= N[i].v; j--) {
      dp[j] = Math.max(dp[j], dp[j - N[i].v] + N[i].w);
    }
  }

  return dp[V];
};

export {
  zeroKnapsackProblem,
  zeroKnapsackProblem2,
};
