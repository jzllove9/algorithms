import { expect } from 'chai';
import { createSinglyLinkedListFromArray } from '../../utils.js';
import reverse from './reverse.js';

describe('#数据结构专项：单链表 -- 单链表区间内反转', () => {
  /**
   * Input: head = 1->2->3->4->5, m = 2, n = 4
   * Output: head = 1->4->3->2->5
   */
  it('反转测试：2，4', () => {
    const list = createSinglyLinkedListFromArray([1, 2, 3, 4, 5]);
    const newList = reverse(list, 2, 4);
    expect(newList.toString()).eql('1,4,3,2,5');
  });

  /**
   * Input: head = 1->2->3->4->5, m = 2, n = 20
   * Output: head = 1->4->3->2->5
   */
  it('越界反转测试：2，20', () => {
    const list = createSinglyLinkedListFromArray([1, 2, 3, 4, 5]);
    const newList = reverse(list, 2, 20);
    expect(newList.toString()).eql('1,5,4,3,2');
  });

  /**
   * Input: head = 1->2->3->4->5->6->7, m = 3, n = 6
   * Output: head = 1->2->6->5->4->3->7
   */
  it('反转测试：3，6', () => {
    const list = createSinglyLinkedListFromArray([1, 2, 3, 4, 5, 6, 7]);
    const newList = reverse(list, 3, 6);
    expect(newList.toString()).eql('1,2,6,5,4,3,7');
  });

  /**
   * Input: head = null
   * Output: head = null
   */
  it('反转测试：null', () => {
    const list = null;
    const newList = reverse(list);
    expect(newList.toString()).eql('');
  });
});
