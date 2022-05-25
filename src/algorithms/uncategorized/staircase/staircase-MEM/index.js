/**
 * 递归楼梯问题 记忆剪枝法
 *
 * 问题：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 *
 * 输入：1
 * 输出：1
 *
 * 输入：2
 * 输出：2
 *
 * 输入：3
 * 输出：3
 *
 * 输入：4
 * 输出：5
 *
 * ...
 */
const staircaseMEM = (n) => {
  const map = {
    1: 1,
    2: 2,
  };

  const func = (step) => {
    if (step <= 0) return 0;
    if (step <= 2) return step;
    if (map[step]) return map[step];
    return func(step - 1) + func(step - 2);
  };

  return func(n);
};

export default staircaseMEM;
