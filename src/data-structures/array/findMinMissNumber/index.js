/**
 * 查找数组缺少的最小正整数
 * @param {Array} nums 待处理数组;
 */
const findMinMissNumber = (nums) => {
  if (!nums.length) return 1;

  // 如果不希望改变原数组此处可以 arr = [...nums] 复制一份

  /**
   * 我们的思路是通过建立一个虚拟的数组来进行比对，确认当前缺少的最少正整数是什么
   * 假设案例：nums = [-1, 3, 3, 2, 1]
   * 此时可知，有效整数的范围只可能是1～nums.length，即案例中有效数据的范围只可能是1～5，如果nums[i]的数据超出该范围，说明该数据无效
   * 我们建立虚拟比对数组 arr = [0, 1, 2, 3, 4]，当然也可以用left和right描述变量来代替，其空间占用更低，本例中我们使用left和right索引的方式
   */

  // left表示当前索引到的有效值
  let left = 0;
  // right表示有效数据的上界
  let right = nums.length;

  /**
   * 现在我们进行left与nums每一项的比对，即比对left+1（+1是因为left从0开始）和nums[left]，可能会出现以下三种情况：
   *
   * 情况1：
   *     left+1的值和nums中对应位置的值恰好相等，证明该位置整数并不缺失，此时索引left+=1，进入下一轮比对
   *
   * 情况2：
   *    若nums[left]的值 <=0 或者 > 数组nums的长度，说明nums[left]不可能为有效的值（因为它一定不在1～nums.length之间），
   *    此时我们用数组有效数据的上界的值来替代当前位置的值，并将有效数据的上界的索引值-1，因为我们已经找到了一个不符合当前索引范围的值
   *    那么有效数据范围一定会减少1位：
   *    上面的假设数组中nums[0] = -1，它超出了nums的可能有效范围1～5，所以我们用nums[right - 1]来代替它
   *    nums[left] = nums[right - 1]
   *    而由于-1占了一个数组的名额，此时最好的情况下我们也只能再从nums数组中找到1～4的值，所以right还需要-1：
   *    nums[left] = nums[--right]
   *    此时 left=0 不变（因为我们还没找到第一个有效值），right=4（有效数据上限减少1），nums数组变为[1，3，3，2，1]
   *    其实经过left和right的限制， 相当于nums数组为[1, 3, 3, 2]，我们的目标变为从数组[1, 3, 3, 2]中查找缺失的最小正整数，和我们之前的描述相符合
   *
   * 情况3：
   *    若nums[left]处于有效数值范围内，但与left+1并不相等，此时我们将当前位置的值和它原本应该在的位置的值进行交换：
   *    假设当前nums = [1, 3, 2, 2, 1], left = 1, right = 4
   *    我们发现nums[left]即nums[1]的值为3，该值虽没有超出1～4的范围，但其位置是错误的，它应该出现在nums[nums[left] - 1] 也就是 nums[2]的位置
   *    解决办法也很简单：直接交换 nums[1] 和 nums[2] 的值，即交换 nums[left] 与 nums[nums[left] - 1] 的值，进入下一轮比对
   *    处理后：nums = [1, 2, 3, 2, 1], left = 1, right = 4
   *
   *    当然，这里存在另一种情况：
   *    假设当前nums数组为 [1, 3, 3, 2, 1], left = 1, right = 4
   *    此时在进行交换时，我们发现出现了重复值，即 nums[left] = nums[nums[left] - 1] = 3，说明nums数组的第三项上面的数值已经是正确数值，
   *    那么我们当前位置的数值就可以视为无效数值，无效数值的处理与情况2中相同
   *    处理后：nums = [1, 2, 3, 2, 1], left = 1, right = 3
   *
   * 至此，我们就解决了查找数组内缺失最小正整数的问题，当循环结束后，此时的left+1的值就是我们需要的目标值，直接返回即可
   */
  while (left + 1 <= right) { // 只要当前有效值没有超出有效数据上界，就可以进入循环
    if (nums[left] === left + 1) {
      // 检测当前位置符合要求 left++
      left++;
    } else if (
      nums[left] > right
      || nums[left] < left + 1
       || nums[left] === nums[nums[left] - 1]
    ) {
      // 当前位置数值无效，用nums[--right]代替当前位置
      nums[left] = nums[--right];
    } else {
      // 交换位置，使得当前值出现在nums中的正确位置上
      const temp = nums[nums[left] - 1];
      nums[nums[left] - 1] = nums[left];
      nums[left] = temp;
    }
  }

  return left + 1;
};

export default findMinMissNumber;
