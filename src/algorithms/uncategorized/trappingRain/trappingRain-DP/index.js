/**
 * 接雨水问题动态规划解题方法
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

  // 我们声明两个数组，分别代表从左侧向右和从右侧向左遍历时已经获取的最大高度，举个例子：
  // 输入:
  // [3, 1, 2, 5, 2, 4]
  // 此时：
  // leftMaxArr = [3，3，3，5，5，5]
  // rightMaxArr = [5, 5, 5, 5, 4, 4]
  let leftMax = arr[0];
  const leftMaxArr = [leftMax];
  let rightMax = arr[arr.length - 1];
  const rightMaxArr = [];

  // 从左向右
  for (let i = 1; i < arr.length; i++) {
    if (leftMax < arr[i]) {
      leftMaxArr.push(arr[i]);
      leftMax = arr[i];
    } else {
      leftMaxArr.push(leftMax);
    }
  }
  // 从右向左，注意此时数组为前插
  for (let i = arr.length - 2; i >= 0; i--) {
    if (rightMax < arr[i]) {
      rightMaxArr.unshift(arr[i]);
      rightMax = arr[i];
    } else {
      rightMaxArr.unshift(rightMax);
    }
  }

  // 以下为非必看内容：
  // 当期望简化生命过程以及过程变量的时候，我们可以使用初始化数组所有内容的方式进行简化
  // 使用另一种初始化方式
  // const leftMaxArr = Array(lg).fill(0);
  // const rightMaxArr = Array(lg).fill(0);
  // const lg = arr.length;
  // leftMaxArr[0] = arr[0];
  // rightMaxArr[lg - 1] = arr[lg - 1];
  // for (let i = 1; i < lg; i++) {
  //    leftMaxArr[i] = Math.max(leftMaxArr[i - 1], arr[i]);
  // }
  // for (let i = lg - 2; i >= 0; i--) {
  //    rightMaxArr[i] = Math.max(rightMaxArr[i + 1], arr[i]);
  // }
  // 以上过程可以达到同样的初始化最大数组的目的

  // 此时 我们从头遍历数组，从leftMaxArr和rightMaxArr中选择最小值表明当前能存水的最大高度
  // 用当前能存水的最大高度与当前高度的差值表示当前位置能贡献的存水量
  for (let i = 0; i < arr.length; i++) {
    const minHeightBetweenLeftAndRight = Math.min(leftMaxArr[i], rightMaxArr[i]);
    // 当且仅当能存水的最大高度大于当前位置时候才表明当前位置可以贡献存水量
    if (minHeightBetweenLeftAndRight > arr[i]) {
      rainCount += minHeightBetweenLeftAndRight - arr[i];
    }
  }

  return rainCount;
};

export default trappingRain;
