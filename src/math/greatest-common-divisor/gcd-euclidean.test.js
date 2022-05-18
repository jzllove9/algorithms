import { expect } from 'chai';

import gcdIterative from './gcd-euclidean-iterative.js';
import gcdRecursive from './gcd-euclidean-recursive.js';

const gcdFuncs = {
  递归: gcdRecursive,
  迭代: gcdIterative,
};

describe('#计算最大公约数：', () => {
  Object.keys(gcdFuncs).forEach((key) => {
    const gcdFunc = gcdFuncs[key];
    it(`${key}测试`, () => {
      expect(gcdFunc(0, 0)).eql(0);
      expect(gcdFunc(2, 0)).eql(2);
      expect(gcdFunc(0, 2)).eql(2);
      expect(gcdFunc(1, 2)).eql(1);
      expect(gcdFunc(2, 1)).eql(1);
      expect(gcdFunc(6, 6)).eql(6);
      expect(gcdFunc(2, 4)).eql(2);
      expect(gcdFunc(4, 2)).eql(2);
      expect(gcdFunc(12, 4)).eql(4);
      expect(gcdFunc(4, 12)).eql(4);
      expect(gcdFunc(5, 13)).eql(1);
      expect(gcdFunc(27, 13)).eql(1);
      expect(gcdFunc(24, 60)).eql(12);
      expect(gcdFunc(60, 24)).eql(12);
      expect(gcdFunc(252, 105)).eql(21);
      expect(gcdFunc(105, 252)).eql(21);
      expect(gcdFunc(1071, 462)).eql(21);
      expect(gcdFunc(462, 1071)).eql(21);
      expect(gcdFunc(462, -1071)).eql(21);
      expect(gcdFunc(-462, -1071)).eql(21);
    });
  });
});
