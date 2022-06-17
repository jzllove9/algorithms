/**
 * 买卖股票问题：只能交易一次，暴力解法
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 *
 * 举例：
 * 输入：prices = [7, 1, 5, 3, 6, 4]
 * 输出：5
 */
// 暴力解法思路比较简单，双层循环找出差值最大即可
const bySharesOnce = (prices) => {
  let max = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const result = prices[j] - prices[i];
      if (result > max) max = result;
    }
  }

  return max;
};

export default bySharesOnce;
