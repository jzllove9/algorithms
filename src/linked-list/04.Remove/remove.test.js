import { expect } from 'chai';
import { createFromArray } from '../utils.js';
import remove from './remove.js';

describe('#单链表从尾部索引删除', () => {
  /**
   * Input: head = 1->2->3->4->5, n = 2
   * Output: head = 1->2->3->5
   */
  it('删除1', () => {
    const list = createFromArray([1, 2, 3, 4, 5]);
    const newList = remove(list, 2);
    expect(newList.toString()).eql('1,2,3,5');
  });

  /**
   * Input: head = 1->2->3->4->5, n = 10
   * Output: head = 1->2->3->4->5
   */
  it('删除2', () => {
    const list = createFromArray([1, 2, 3, 4, 5]);
    const newList = remove(list, 10);
    expect(newList.toString()).eql('1,2,3,4,5');
  });
});
