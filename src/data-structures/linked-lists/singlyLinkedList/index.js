/**
 * 单向链表
 */
import SinglyLinkedListNode from './node.js';

export default class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  unshift(value) {
    this.head = new SinglyLinkedListNode(value, this.head);
    if (!this.tail) {
      this.tail = this.head;
    }
    return this;
  }

  shift() {
    if (!this.head) return null;
    const _node = this.head; // 是否需要copy一份?
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      _node.next = null;
    }

    return _node;
  }

  push(value) {
    const _node = new SinglyLinkedListNode(value);
    if (!this.head) {
      this.head = _node;
      this.tail = _node;
    } else {
      this.tail.next = _node;
      this.tail = _node;
    }
    return this;
  }

  pop() {
    if (!this.tail) return null;
    const _node = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return _node;
    }
    let _preTailNode = this.head;
    while (_preTailNode.next !== this.tail) {
      _preTailNode = _preTailNode.next;
    }
    this.tail = _preTailNode;
    this.tail.next = null;
    return _node;
  }

  reverse() {
    if (!this.head) return null;
    const dummyNode = new SinglyLinkedListNode(null, this.head);
    let a = dummyNode;
    let b = a.next; // this.head
    this.tail = b;
    let c = b.next;
    while (c !== null) {
      [b.next, a, b, c] = [a, b, c, c.next];
    }
    b.next = a;
    this.tail.next = null;
    this.head = b;
    return this.head;
  }

  toArray() {
    const _res = [];
    let _node = this.head;
    while (_node) {
      _res.push(_node.value);
      _node = _node.next;
    }
    return _res;
  }

  toString() {
    const _res = this.toArray();
    return _res.join(',');
  }
}
