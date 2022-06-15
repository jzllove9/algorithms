import { expect } from 'chai';
import findMinMissNumber from './index.js';

describe('#数据结构专项：数组 -- 查找数组缺少的最小正整数', () => {
  it('测试查找数组缺少正整数', () => {
    const testArr1 = [-1, 3, 4, 5];
    const _result1 = findMinMissNumber(testArr1);
    expect(_result1).eql(1);

    const testArr2 = [1, 3, 34, 5];
    const _result2 = findMinMissNumber(testArr2);
    expect(_result2).eql(2);

    const testArr3 = [5, 3, 34, 1, 2, 7];
    const _result3 = findMinMissNumber(testArr3);
    expect(_result3).eql(4);
  });
});
