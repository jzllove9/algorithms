/**
 * 调整数组
 * @param {*} arr
 * @param {*} start
 * @param {*} end
 * @returns
 */
const partition = (arr, start, end) => {
  if (arr.length === 1) return arr;
  const mid = arr[start];
  let povit = start + 1;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] <= mid) {
      const temp = arr[i];
      arr[i] = arr[povit];
      arr[povit++] = temp;
    }
  }

  // 将第一个值（比对值）和当前povit进行交换，保证在mid前的数据都小于等于mid
  const temp = arr[povit - 1];
  arr[povit - 1] = arr[start];
  arr[start] = temp;

  // 返回当前中间值的索引
  return povit - 1;
};

/**
 * 查找数组中第k大的值
 */
const find = (arr, k, start, end) => {
  const lg = arr.length;
  if (!lg) return null;
  if (lg === 1) return start;

  let index = partition(arr, start, end);
  if (index < k) {
    index = find(arr, k, index + 1, end);
  } else if (index > k) {
    index = find(arr, k, start, index - 1);
  }

  return index;
};

export default (nums, k) => {
  // 查找第k大的数，可以想像在数组从小到大排序后，应该为数组第lg - k + 1个数，索引为lg - k，我们做一个转换方便后续计算
  k = nums.length - k;
  const index = find(nums, k, 0, nums.length - 1);
  return nums[index];
};
