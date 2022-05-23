import { expect } from 'chai';
import { createSinglyLinkedListFromArray } from '../../utils.js';
import swap from './swap.js';

describe('#数据结构专项：单链表 -- 单链表交换相邻节点测试', () => {
  /**
   * Input: head = 1->2->3->4
   * Output: head = 2->1->4->3
   */
  it('交换1', () => {
    const list = createSinglyLinkedListFromArray([1, 2, 3, 4]);
    expect(swap(list).toString()).eql('2,1,4,3');
  });

  /**
   * Input: head = 1->2->3
   * Output: head = 2->1->3
   */
  it('交换2', () => {
    const list = createSinglyLinkedListFromArray([1, 2, 3]);
    expect(swap(list).toString()).eql('2,1,3');
  });
});
