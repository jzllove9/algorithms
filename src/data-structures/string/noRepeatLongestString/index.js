/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * 输入: s = "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 * @param {string} str 输入字符串
 */

const func = (str) => {
  const cache = {};
  let max = 0;
  const lg = str.length;
  for (let i = 0; i < lg; i++) {
    if (!cache[str[i]]) {
      cache[str[i]] = 1;
    }

    let right = i + 1;
    while (right < lg && !cache[str[right]]) {
      cache[str[right]] = 1;
      right++;
    }

    delete cache[str[i]];

    max = Math.max(right - i, max);
  }

  return max;
};

export default func;
