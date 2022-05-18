import { expect } from 'chai';
import calcPower from './calc-power.js';

describe('#计算幂数', () => {
  it('计算幂数测试', () => {
    expect(calcPower(0, 0)).eql(0);
    expect(calcPower(1, 0)).eql(1);
    expect(calcPower(0, 1)).eql(0);
    expect(calcPower(1, 6)).eql(1);
    expect(calcPower(2, 10)).eql(1024);
    expect(calcPower(-2, 10)).eql(1024);
    expect(calcPower(-2, 9)).eql(-512);
    expect(calcPower(3, 5)).eql(243);
  });
});
