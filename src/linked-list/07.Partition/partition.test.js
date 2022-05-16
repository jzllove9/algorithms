import { expect } from 'chai';
import { createFromArray } from '../utils.js';
import { partition1, partition2 } from './partition.js';

describe('#所有小于 x 的节点都出现在大于或等于 x 的节点之前', () => {
  /**
   * Input: head = 1->4->3->2->5->2, x = 3
   * Output: head = 1->2->2->4->3->5
   */
  it('测试1', () => {
    const list = createFromArray([1, 4, 3, 2, 5, 2]);
    const newList = partition1(list, 3);
    expect(newList.toString()).eql('1,2,2,4,3,5');
  });

  /**
   * Input: head = 1->4->3->2->5->2, x = 3
   * Output: head = 1->2->2->4->3->5
   */
  it('测试2', () => {
    const list = createFromArray([1, 4, 3, 2, 5, 2]);
    const newList = partition2(list, 3);
    expect(newList.toString()).eql('1,2,2,4,3,5');
  });
});
