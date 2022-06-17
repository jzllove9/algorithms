import { expect } from 'chai';
import bySharesOnceBF from './buySharesOnce-BF/index.js';
import bySharesOnceDP from './buySharesOnce-DP/index.js';

const bySharesOnces = {
  暴力解法: bySharesOnceBF,
  动态规划: bySharesOnceDP,
};

describe('#算法范式专项：股票买卖问题（限制交易一次）', () => {
  const pricesArr1 = [7, 1, 5, 3, 6, 4];
  const pricesArr2 = [1, 5, 3, 7, 2, 12];
  Object.keys(bySharesOnces).forEach((key, idx) => {
    const func = bySharesOnces[key];
    it(`解法${idx + 1}: ${key}`, () => {
      expect(func(pricesArr1)).eql(5);
      expect(func(pricesArr2)).eql(11);
    });
  });
});
