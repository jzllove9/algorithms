import { expect } from 'chai'

import bubbleSort from './bubble-sorts/index.js';
import selectionSort from './selection-sorts/index.js';
import insetSort from './insertion-sorts/index.js';
import quickSort from './quick-sorts/index.js';
import mergeSort from './merge-sorts/index.js';
import shellSort from './shell-sorts/index.js';
import { heapSorts } from './heap-sorts/index.js';

const sorters = {
  '冒泡排序': bubbleSort,
  '选择排序': selectionSort,
  '插入排序': insetSort,
  '希尔排序': shellSort,
  '快速排序': quickSort,
  '归并排序': mergeSort,
  '堆排序': heapSorts,
};

const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const reverseArr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const randomArr = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
const equalArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const befortSortArr = [...randomArr];

describe('#排序测试：', () => {
  Object.keys(sorters).forEach((key) => {
    const sortFunc = sorters[key];
    it(`${key}测试`, () => {
      expect(sortFunc([])).eql([]);
      expect(sortFunc([1])).eql([1]);
      expect(sortFunc([1, 2])).eql([1, 2]);
      expect(sortFunc([2, 1])).eql([1, 2]);
      expect(sortFunc([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).eql([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);
      expect(sortFunc(sortedArr)).eql(sortedArr);
      expect(sortFunc(reverseArr)).eql(sortedArr);
      expect(sortFunc(randomArr)).eql(sortedArr);
      expect(sortFunc(equalArr)).eql(equalArr);

      // 确保初始数组不被改变
      expect(randomArr).eql(befortSortArr);
    });
  });
})
