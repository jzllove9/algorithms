import { expect } from 'chai';
import binarySearch from './index.js';

describe('#数据结构专项：数组 -- 二分查找', () => {
  const testArr = [1, 3, 5, 8, 11, 20, 44];
  it('测试数组二分查找', () => {
    expect(binarySearch(testArr, 4)).eq(-1);
    expect(binarySearch(testArr, 11)).eq(4);
  });
});
