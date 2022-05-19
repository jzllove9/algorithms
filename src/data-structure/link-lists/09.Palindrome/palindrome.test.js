import { expect } from 'chai';
import { createSinglyLinkedListFromArray } from '../utils.js';
import palindrome from './palindrome.js';

describe('#数据结构专项：链表 -- 单链表回文测试', () => {
  /**
   * Input: head = 1->2
   * Output: false
   */
  it('不存在回文', () => {
    const list = createSinglyLinkedListFromArray([1, 2]);
    expect(palindrome(list)).false;
  });

  /**
   * Input: head = 1->2->2->1
   * Output: true
   */
  it('存在回文', () => {
    const list = createSinglyLinkedListFromArray([1, 2, 2, 1]);
    expect(palindrome(list)).true;
  });
});
