import { expect } from 'chai';
import staircaseBF from './staircase-BF/index.js';
import staircaseDF from './staircase-DP/index.js';
import staircaseIT from './staircase-IT/index.js';
import staircaseMEM from './staircase-MEM/index.js';

const staircases = {
  暴力递归: staircaseBF,
  动态规划: staircaseDF,
  迭代方法: staircaseIT,
  记忆剪枝法: staircaseMEM,
};

describe('#算法范式专项：递归楼梯', () => {
  Object.keys(staircases).forEach((key, idx) => {
    const func = staircases[key];
    it(`解法${idx + 1}: ${key}`, () => {
      expect(func(1)).eql(1);
      expect(func(3)).eql(3);
      expect(func(4)).eql(5);
      expect(func(6)).eql(13);
    });
  });
});
