// const isPowerOfTwo = require('../isPowerOfTwo-base-conversion');
import { expect } from 'chai';

import isPowerOfTwoIterative from './isPowerOfTwo-iterative.js';
import isPowerOfTwoBase from './isPowerOfTwo-base-conversion.js';
import isPowerOfTwoBitwise from './isPowerOfTwo-bitwise.js';

const isPowerOfTwoFuncs = {
  基准转换: isPowerOfTwoBase,
  循环迭代: isPowerOfTwoIterative,
  位运算: isPowerOfTwoBitwise,
};

describe('#数学计算专项 -- 判断是否为2的幂数', () => {
  Object.keys(isPowerOfTwoFuncs).forEach((key) => {
    const isPowerOfTwoFunc = isPowerOfTwoFuncs[key];
    it(`${key}测试`, () => {
      expect(isPowerOfTwoFunc(-1)).false;
      expect(isPowerOfTwoFunc(0)).false;
      expect(isPowerOfTwoFunc(1)).true;
      expect(isPowerOfTwoFunc(2)).true;
      expect(isPowerOfTwoFunc(3)).false;
      expect(isPowerOfTwoFunc(4)).true;
      expect(isPowerOfTwoFunc(5)).false;
      expect(isPowerOfTwoFunc(6)).false;
      expect(isPowerOfTwoFunc(7)).false;
      expect(isPowerOfTwoFunc(8)).true;
      expect(isPowerOfTwoFunc(10)).false;
      expect(isPowerOfTwoFunc(12)).false;
      expect(isPowerOfTwoFunc(16)).true;
      expect(isPowerOfTwoFunc(31)).false;
      expect(isPowerOfTwoFunc(64)).true;
      expect(isPowerOfTwoFunc(1024)).true;
      expect(isPowerOfTwoFunc(1023)).false;
    });
  });
});
