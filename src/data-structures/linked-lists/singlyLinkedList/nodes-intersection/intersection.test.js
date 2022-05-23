import { expect } from 'chai';
import { createSinglyLinkedListFromArray } from '../../utils.js';
import intersection from './intersection.js';

describe('#数据结构专项：单链表 -- 查询两个单链表交叉点', () => {
  /**
   * Input: head = 1->2->3->[4->5], head = 7->8->[4->5],
   * Output: head = 4->5
   */
  it('寻找交叉点测试1', () => {
    const res = createSinglyLinkedListFromArray([4, 5]);
    const list1 = createSinglyLinkedListFromArray([1, 2, 3]);
    list1.head.next.next.next = res;
    const list2 = createSinglyLinkedListFromArray([7, 8]);
    list2.head.next.next = res;

    const newList = intersection(list1, list2);
    expect(newList.toString()).eql('4,5');
  });

  it('寻找交叉点测试2', () => {
    const list1 = createSinglyLinkedListFromArray([1, 2, 3, 4, 5]);
    const list2 = createSinglyLinkedListFromArray([6, 7, 8, 9, 0]);

    const newList = intersection(list1, list2);
    expect(newList).null;
  });
});
