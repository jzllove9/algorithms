import { expect } from 'chai';
import findKthLargestNumber from './index.js';

describe('#数据结构专项：数组 -- 查找数组中第k大的值', () => {
  const testArr = [1, 33, 15, 28, 11, 2, 44];
  it('测试查找数组中第k大的值', () => {
    expect(findKthLargestNumber(testArr, 2)).eq(33);
    expect(findKthLargestNumber(testArr, 1)).eq(44);
    expect(findKthLargestNumber(testArr, 5)).eq(11);
  });
});
