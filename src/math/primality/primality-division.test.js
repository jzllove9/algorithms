import { expect } from 'chai';
import primality from './primality-division.js';

describe('#判断是否为素数', () => {
  it('判断素数测试', () => {
    expect(primality(1)).false;
    expect(primality(2)).true;
    expect(primality(3)).true;
    expect(primality(5)).true;
    expect(primality(11)).true;
    expect(primality(191)).true;
    expect(primality(199)).true;
    expect(primality(-1)).false;
    expect(primality(0)).false;
    expect(primality(4)).false;
    expect(primality(6)).false;
    expect(primality(12)).false;
    expect(primality(14)).false;
    expect(primality(25)).false;
    expect(primality(192)).false;
    expect(primality(200)).false;
    expect(primality(400)).false;
    expect(primality(0.5)).false;
    expect(primality(1.3)).false;
    expect(primality(10.5)).false;
  });
});
