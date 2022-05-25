import { expect } from 'chai';
import longestCommonSubquence from './index.js';

describe('#算法范式专项：动态规划 -- 最长公共子序列(LCS)', () => {
  it('最长公共子序列测试1', () => {
    const arr1 = [1, 3, 4, 6];
    const arr2 = [1, 3, 5, 4, 6];
    expect(longestCommonSubquence(arr1, arr2)).eql(arr1);
  });

  it('最长公共子序列测试2', () => {
    const arr1 = [1, 3, 4, 6, 9, 2, 2, 4];
    const arr2 = [1, 3, 4, 6, 8, 9, 2, 7, 4];
    expect(longestCommonSubquence(arr1, arr2)).eql([1, 3, 4, 6, 9, 2, 4]);
  });
});
