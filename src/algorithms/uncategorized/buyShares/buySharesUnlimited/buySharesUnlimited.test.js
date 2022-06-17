import { expect } from 'chai';
import buySharesUnlimitedDP from './buySharesUnlimited-DP/index.js';

const buySharesUnlimitedDPs = {
//   暴力解法: bySharesOnceBF,
  动态规划: buySharesUnlimitedDP,
};

describe('#算法范式专项：股票买卖问题（不限制交易次数）', () => {
  const pricesArr1 = [7, 1, 5, 3, 6, 4];
  const pricesArr2 = [1, 5, 3, 7, 2, 12];
  Object.keys(buySharesUnlimitedDPs).forEach((key, idx) => {
    const func = buySharesUnlimitedDPs[key];
    it(`解法${idx + 1}: ${key}`, () => {
      expect(func(pricesArr1)).eql(7);
      expect(func(pricesArr2)).eql(18);
    });
  });
});
