/**
 * 最长子序列问题 动态规划
 * @param {*} arr1
 * @param {*} arr2
 */

const longestCommonSubquence = (arr1, arr2) => {
  if (!arr1.length || !arr2.length) return [];
  const dp = Array(arr1.length + 1).fill(null).map(() => Array(arr2.length + 1).fill(0));

  for (let i = 1; i <= arr1.length; i++) {
    for (let j = 1; j <= arr2.length; j++) {
      /**
       * 此处注意我们的索引是从 1 开始的，所以如果回到参数数组中获取值，需要 -1
       */
      if (arr1[i - 1] === arr2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let colIndex = arr1.length;
  let rowIndex = arr2.length;
  const commonSubQuence = [];
  /**
   * 从尾部开始向前索引，由于 dp 数组下界的值一定为 0 ，所以不会造成死循环
   * 由于当前 dp 值是从 左上，左，上三个方向推导过来的，请回忆 dp 数组推导过程
   * 所以若当前两个字符串相等，则向左上角移动
   * 否则向左或者上中和当前值相同的方向移动，因为当前 dp 的值正是由它们进一步推导过来的
   */
  while (dp[colIndex][rowIndex] !== 0) {
    // 左上移动, -1 原因同上
    if (arr1[colIndex - 1] === arr2[rowIndex - 1]) {
      commonSubQuence.unshift(arr1[colIndex - 1]);
      colIndex--;
      rowIndex--;
    } else if (dp[colIndex][rowIndex] === dp[colIndex][rowIndex - 1]) {
      // 向左移动
      rowIndex--;
    } else {
      // 向上移动
      colIndex--;
    }
  }

  return commonSubQuence;
};

export default longestCommonSubquence;
