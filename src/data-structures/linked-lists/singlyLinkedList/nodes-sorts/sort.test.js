import { expect } from 'chai';
import { createSinglyLinkedListFromArray } from '../../utils.js';
import sort from './sort.js';

describe('#数据结构专项：单链表 -- 单链表排序', () => {
  /**
   * Input: head = 4->2->1->3
   * Output: head = 1->2->3->4
   */
  it('非空链表排序测试1', () => {
    const list = createSinglyLinkedListFromArray([4, 2, 1, 3]);
    const newList = sort(list);
    expect(newList.toString()).eql('1,2,3,4');
  });

  it('非空链表排序测试2', () => {
    const list = createSinglyLinkedListFromArray([4, 0, 10, 5, 2, 1, 3]);
    const newList = sort(list);
    expect(newList.toString()).eql('0,1,2,3,4,5,10');
  });

  /**
   * Input: head = null
   * Output: head = null
   */
  it('空链表排序测试', () => {
    const list = null;
    const newList = sort(list);
    expect(newList).null;
  });
});
