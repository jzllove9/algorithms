import { expect } from 'chai';
import factorialRecursive from './factorial-recursive.js';
import factorialIteratiive from './factorial-iterative.js';

describe('#计算阶乘', () => {
  it('迭代', () => {
    expect(factorialIteratiive(0)).eql(1);
    expect(factorialIteratiive(1)).eql(1);
    expect(factorialIteratiive(5)).eql(120);
    expect(factorialIteratiive(8)).eql(40320);
    expect(factorialIteratiive(10)).eql(3628800);
  });

  it('递归', () => {
    expect(factorialRecursive(0)).eql(1);
    expect(factorialRecursive(1)).eql(1);
    expect(factorialRecursive(5)).eql(120);
    expect(factorialRecursive(8)).eql(40320);
    expect(factorialRecursive(10)).eql(3628800);
  });
});
