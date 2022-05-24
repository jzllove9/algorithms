// import { expect } from 'chai';
import { expect } from 'chai';
import {
  zeroKnapsackProblem,
  zeroKnapsackProblem2,
} from './zero-one-knapsack-problem/index.js';

import {
  unBoundedKnapsackProblem,
  unBoundedKnapsackProblem2,
} from './unbounded-knapsack-problem/index.js';

const V = 10;
const N = [
  { v: 2, w: 3 },
  { v: 1, w: 2 },
  { v: 3, w: 4 },
  { v: 5, w: 5 },
  { v: 10, w: 9 },
  { v: 9, w: 12 },
  { v: 7, w: 9 },
];

const V2 = 6;
const N2 = [
  { v: 1, w: 15 },
  { v: 3, w: 40 },
  { v: 4, w: 30 },
];

describe('#算法范式：动态规划 -- 0/1背包问题', () => {
  it('01背包问题测试', () => {
    let result;
    result = zeroKnapsackProblem(V, N);
    expect(result).eql(14);

    result = zeroKnapsackProblem(V2, N2);
    expect(result).eql(55);
  });

  it('01背包问题优化测试', () => {
    let result;
    result = zeroKnapsackProblem2(V, N);
    expect(result).eql(14);

    result = zeroKnapsackProblem2(V2, N2);
    expect(result).eql(55);
  });
});

describe('#算法范式：动态规划 -- 完全背包问题', () => {
  it('完全背包问题测试', () => {
    let result;
    result = unBoundedKnapsackProblem(V, N);
    expect(result).eql(20);

    result = unBoundedKnapsackProblem(V2, N2);
    expect(result).eql(90);
  });

  it('完全背包问题优化测试', () => {
    let result;
    result = unBoundedKnapsackProblem2(V, N);
    expect(result).eql(20);

    result = unBoundedKnapsackProblem2(V2, N2);
    expect(result).eql(90);
  });
});
