/**
 * 接雨水问题暴力解题方法
 *
 * 描述
 * 给定一个整形数组arr，已知其中所有的值都是非负的，将这个数组看作一个柱子高度图，计算按此排列的柱子，
 * 下雨之后能接多少雨水。(数组以外的区域高度视为0)
 *
 * 输入：
 * [3,1,2,5,2,4]
 * 返回值：5
 *
 * 说明：
 * 数组 [3,1,2,5,2,4] 表示柱子高度图，在这种情况下，可以接 5个单位的雨水
 */

const trappingRain = (arr) => {
  // 雨水总数
  let rainCount = 0;
  // 小于等于2根柱子的情况下无法接雨水，直接返回0
  if (arr.length <= 2) return 0;
  for (let i = 0; i < arr.length; i++) {
    // 初始值设为0，在查找左右最高柱子前，我们默认左右最高高度为0
    let leftMaxHeight = 0;
    // 从当前位置向前查找最大高度左侧柱子（不包含当前位置）
    for (let leftIndex = i - 1; leftIndex >= 0; leftIndex--) {
      leftMaxHeight = Math.max(leftMaxHeight, arr[leftIndex]);
    }

    let rightMaxHeight = 0;
    // 从当前位置向后查找最大高度右侧柱子（不包含当前位置）
    for (let rightIndex = i + 1; rightIndex < arr.length; rightIndex++) {
      rightMaxHeight = Math.max(rightMaxHeight, arr[rightIndex]);
    }

    // 从左右最高高度中找到小的那一个，与当前位置高度做比较得知能装雨水多少
    // 因为当前位置能装多少雨水，取决于它的左侧和右侧最大高度里面的最小值
    const minHeightBetweenLeftAndRight = Math.min(leftMaxHeight, rightMaxHeight);
    // 只有左右最大高度的最小值大于当前位置的高度时，才能装雨水
    if (minHeightBetweenLeftAndRight > arr[i]) {
      rainCount += minHeightBetweenLeftAndRight - arr[i];
    }
  }

  return rainCount;
};

export default trappingRain;
