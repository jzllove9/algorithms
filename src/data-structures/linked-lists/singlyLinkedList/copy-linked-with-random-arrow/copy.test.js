import { expect } from 'chai';
// import SinglyLinkedListNode from '../singlyLinkedList/node.js';
import copy from './copy.js';

class ListNode {
  constructor(value, next = null, random = null) {
    this.value = value;
    this.next = next;
    this.random = random;
  }
}

describe('#数据结构专项：单链表 -- 复制带有随机指针的单链表', () => {
/**
 * Input: head = [1,node(1)]->[2,null]->[3,node(2)]
 * Output: (clone)
 */
  it('复制1', () => {
    const list = new ListNode(1);
    list.random = list;
    list.next = new ListNode(2);
    list.next.random = null;
    list.next.next = new ListNode(3);
    list.next.next.random = list.next;

    const newList = copy(list);
    expect(newList.toString()).eql('1,2,3');
  });
});
