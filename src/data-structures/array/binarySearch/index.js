/**
 * 数组二分查找，数组需要有序，否则需要我们对数组进行排序后再进行查找
 * @param {*} nums
 * @param {*} target
 * @returns 返回目标值在数组中的索引
 */
const binarySearch = (nums, target) => {
  if (!nums.length) return -1;

  /**
   * 设置上下数据界限
   */
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + ((right - left) >>> 1);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
};

export default binarySearch;
