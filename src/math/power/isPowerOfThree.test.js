// const isPowerOfThree = require('../isPowerOfThree-base-conversion');

import { expect } from 'chai';

import isPowerOfThreeIterative from './isPowerOfThree-iterative.js';
import isPowerOfThreeIntergerLimitations from './isPowerOfThree-integer-limitations.js';
import isPowerOfThreeBase from './isPowerOfThree-base-conversion.js';
import isPowerOfThreeMathematics from './isPowerOfThree-mathematics.js';

const isPowerOfThreeFuncs = {
  循环迭代: isPowerOfThreeIterative,
  整数限制: isPowerOfThreeIntergerLimitations,
  数学运算: isPowerOfThreeMathematics,
  基准转换: isPowerOfThreeBase,
};

describe('#判断是否为3的幂数', () => {
  Object.keys(isPowerOfThreeFuncs).forEach((key) => {
    const isPowerOfThreeFunc = isPowerOfThreeFuncs[key];
    it(`${key}测试`, () => {
      expect(isPowerOfThreeFunc(-1)).false;
      expect(isPowerOfThreeFunc(0)).false;
      expect(isPowerOfThreeFunc(1)).true;
      expect(isPowerOfThreeFunc(3)).true;
      expect(isPowerOfThreeFunc(4)).false;
      expect(isPowerOfThreeFunc(6)).false;
      expect(isPowerOfThreeFunc(7)).false;
      expect(isPowerOfThreeFunc(8)).false;
      expect(isPowerOfThreeFunc(9)).true;
      expect(isPowerOfThreeFunc(10)).false;
      expect(isPowerOfThreeFunc(13)).false;
      expect(isPowerOfThreeFunc(27)).true;
      expect(isPowerOfThreeFunc(31)).false;
      expect(isPowerOfThreeFunc(6561)).true;
      expect(isPowerOfThreeFunc(1162261467)).true;
    });
  });
});
