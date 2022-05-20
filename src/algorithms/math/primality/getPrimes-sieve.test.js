import { expect } from 'chai';
import getPrimes from './getPrimes-sieve.js';

describe('#数学计算专项 -- 获取n以内素数', () => {
  it('获取10以内素数素数测试', () => {
    const res = getPrimes(10);
    expect(res.length).eql(4);
    expect(res).eql([2, 3, 5, 7]);
  });

  it('获取15以内素数测试', () => {
    const res = getPrimes(15);
    expect(res.length).eql(6);
    expect(res).eql([2, 3, 5, 7, 11, 13]);
  });

  it('获取100以内素数测试', () => {
    const res = getPrimes(100);
    expect(res.length).eql(25);
    expect(res).eql([
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
      43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
    ]);
  });
});
