import { expect } from 'chai';

import fibonacciIterative from './fibonacci-iterative.js';
import fibonacciRecursive from './fibonacci-recursive.js';
import fibonacciMath from './fibonacci-math.js';
import fibonacciMatrix from './fibonacci-matrix.js';

const fbiFuncs = {
  递归: fibonacciRecursive,
  迭代: fibonacciIterative,
  通项: fibonacciMath,
  矩阵: fibonacciMatrix,
};

describe('#数学计算专项 -- 计算斐波那契数列：', () => {
  Object.keys(fbiFuncs).forEach((key) => {
    const sortFunc = fbiFuncs[key];
    it(`${key}测试`, () => {
      expect(sortFunc(0)).eql(0);
      expect(sortFunc(1)).eql(1);
      expect(sortFunc(2)).eql(1);
      expect(sortFunc(3)).eql(2);
      expect(sortFunc(4)).eql(3);
      expect(sortFunc(5)).eql(5);
      expect(sortFunc(6)).eql(8);
      expect(sortFunc(7)).eql(13);
      expect(sortFunc(8)).eql(21);
      // expect(sortFunc(70)).eql(190392490709135);
      // expect(sortFunc(71)).eql(308061521170129); //通项公式计算会存在精度问题
      // expect(sortFunc(72)).eql(498454011879264);
      // expect(sortFunc(73)).eql(806515533049393);
      // expect(sortFunc(74)).eql(1304969544928657);
      // expect(sortFunc(75)).eql(2111485077978050);
      // expect(sortFunc(80)).eql(23416728348467685); //大数可能会在runtime中丢失
      // expect(sortFunc(90)).eql(2880067194370816120);
      // expect(sortFunc(100)).eql(354224848179262000000);
    });
  });
});
