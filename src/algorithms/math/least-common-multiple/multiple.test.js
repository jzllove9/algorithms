import { expect } from 'chai';
import lcm from './lcm.js';

describe('#数学计算专项 -- 计算两数最小公倍数', () => {
  it('最小公倍数测试', () => {
    expect(lcm(0, 0)).eql(0);
    expect(lcm(1, 0)).eql(0);
    expect(lcm(0, 1)).eql(0);
    expect(lcm(4, 6)).eql(12);
    expect(lcm(6, 21)).eql(42);
    expect(lcm(7, 2)).eql(14);
    expect(lcm(3, 5)).eql(15);
    expect(lcm(7, 3)).eql(21);
    expect(lcm(1000000, 2)).eql(1000000);
    expect(lcm(-9, -18)).eql(18);
    expect(lcm(-7, -9)).eql(63);
    expect(lcm(-7, 9)).eql(63);
  });
});
