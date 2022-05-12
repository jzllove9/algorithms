import { expect } from 'chai';
import { createFromArray } from '../utils.js';
import middle from './middle.js';

describe('#单链表中间节点测试', () => {
  /**
   * Input: head = 1->2->3->4->5
   * Output: head = 3->4->5
   */
  it('测试1', () => {
    const list = createFromArray([1, 2, 3, 4, 5]);
    const newList = middle(list);
    expect(newList.toString()).eql('3,4,5');
  });

  /**
   * Input: head = 1->2->3->4
   * Output: head = 3->4
   */
  it('测试2', () => {
    const list = createFromArray([1, 2, 3, 4]);
    const newList = middle(list);
    expect(newList.toString()).eql('3,4');
  });
});
