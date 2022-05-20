/**
 * 单向链表
 */
import DoublyLinkedListNode from './node.js';

export default class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  unshift(value) {
    if (!this.head) {
      this.head = new DoublyLinkedListNode(value);
      this.tail = this.head;
    } else {
      this.head.prev = new DoublyLinkedListNode(value, null, this.head);
      this.head = this.head.prev;
    }
    return this;
  }

  shift() {
    if (!this.head) return null;
    const node = this.head;
    if (!node.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = node.next;
      this.head.prev = null;
      node.next = null;
    }
    return node;
  }

  push(value) {
    if (!this.tail) {
      this.tail = new DoublyLinkedListNode(value, null, null);
      this.head = this.tail;
    } else {
      this.tail.next = new DoublyLinkedListNode(value, this.tail, null);
      this.tail = this.tail.next;
    }
    return this;
  }

  pop() {
    if (!this.tail) return null;
    const node = this.tail;
    if (!this.tail.prev) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = node.prev;
      this.tail.next = null;
      node.prev = null;
    }
    return node;
  }

  reverse() {
    if (!this.head) return this;
    let a = this.head;
    while (a) {
      [a.prev, a.next] = [a.next, a.prev];
      a = a.prev;
    }
    [this.tail, this.head] = [this.head, this.tail];
    return this;
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
