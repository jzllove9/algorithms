import { expect } from 'chai';
import { createSinglyLinkedListFromArray } from '../../utils.js';
import {
  checkCircleExist,
  getCircleEnter,
} from './cycle.js';

describe('#数据结构专项：单链表 -- 环形链表检测', () => {
  /**
   * Tail connects to the second node.
   * Input: head = 1->2->3->4  4->2
   * Output: head = 2
   */
  it('存在环形测试，找到环入口测试', () => {
    const list = createSinglyLinkedListFromArray([1, 2, 3, 4]);
    list.head.next.next.next.next = list.head.next;
    expect(checkCircleExist(list)).exist;
    expect(getCircleEnter(list).value).eql(2);
  });

  /**
   * no getCircleEnter
   * Input: head = 1->2
   * Output: null
   */
  it('不存在环形测试', () => {
    const list = createSinglyLinkedListFromArray([1, 2]);
    expect(getCircleEnter(list)).eql(null);
  });
});
