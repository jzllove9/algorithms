import { expect } from 'chai';
import trappingRainBF from './trappingRain-BF/index.js';
import trappingRainDP from './trappingRain-DP/index.js';

const staircases = {
  暴力递归: trappingRainBF,
  动态规划: trappingRainDP,
};

describe('#算法范式专项：接雨水问题', () => {
  Object.keys(staircases).forEach((key, idx) => {
    const func = staircases[key];
    it(`解法${idx + 1}: ${key}`, () => {
      expect(func([3, 1, 2, 5, 2, 4])).eql(5);
      expect(func([])).eql(0);
      expect(func([3])).eql(0);
      expect(func([3, 1])).eql(0);
      expect(func([1, 2, 3, 4, 5])).eql(0);
      expect(func([3, 8, 3, 5, 5, 9, 10, 5, 9, 8, 7, 2, 0, 5, 1])).eql(23);
    });
  });
});
