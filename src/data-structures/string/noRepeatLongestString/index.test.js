import { expect } from 'chai';
import noRepeatLontestString from './index.js';

describe('#数据结构专项：字符串 -- 查找最长无重复字符子串', () => {
  const testStr1 = 'aacdeffhhgwac';
  const testStr2 = 'abcabcbb';
  it('测试查找字符串中最长无重复字符子串', () => {
    expect(noRepeatLontestString(testStr1)).eq(5);
    expect(noRepeatLontestString(testStr2)).eq(3);
    expect(noRepeatLontestString(' ')).eq(1);
    expect(noRepeatLontestString('')).eq(0);
  });
});
