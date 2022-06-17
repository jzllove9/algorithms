import { expect } from 'chai';
import { createSinglyLinkedListFromArray } from '../../utils.js';
import reverseKRange from './reverseKRange.js';

describe('#数据结构专项：单链表 -- 每K个一组反转链表', () => {
  /**
   * Input: list = 1->2->3->4->5->6->7, k=3
   * Output: list = 3->2->1->6->5->4->7
   */
  it('k=3,反转测试', () => {
    let list = createSinglyLinkedListFromArray([1, 2, 3]);
    expect(reverseKRange(list, 3).toString()).eql('3,2,1');

    list = createSinglyLinkedListFromArray([1, 2, 3, 4, 5, 6, 7]);
    expect(reverseKRange(list, 3).toString()).eql('3,2,1,6,5,4,7');
  });

  /**
   * Input: list = 1->2->3->4->5->6->7, k=2
   * Output: list = 3->2->1->6->5->4->7
   */
  it('k=2,反转测试', () => {
    let list = createSinglyLinkedListFromArray([1, 2, 3]);
    expect(reverseKRange(list, 2).toString()).eql('2,1,3');

    list = createSinglyLinkedListFromArray([1, 2, 3, 4, 5, 6, 7]);
    expect(reverseKRange(list, 2).toString()).eql('2,1,4,3,6,5,7');
  });
});
