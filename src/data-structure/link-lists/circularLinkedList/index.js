/**
 * 环形链表
 */
import CircularLinkedListNode from './node.js';

export default class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  unshift(value) {
    const _node = new CircularLinkedListNode(value);
    if (!this.head) {
      this.head = _node;
      this.tail = _node;
      this.head.prev = this.tail;
      this.tail.next = this.head;
    } else {
      _node.next = this.head;
      this.head.prev = _node;
      _node.prev = this.tail;
      this.tail.next = _node;
      this.head = _node;
    }
    return this;
  }

  shift() {
    if (!this.head) return null;
    const _node = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = _node.next;
      this.tail.next = this.head;
      this.head.prev = this.tail;
    }

    _node.prev = null;
    _node.next = null;

    return _node
  }

  push(value) {
    const _node = new CircularLinkedListNode(value);
    if (!this.tail) {
      this.head = _node;
      this.tail = _node;
      this.head.prev = this.tail;
      this.tail.next = this.head;
    } else {
      _node.prev = this.tail;
      this.tail.next = _node;
      _node.next = this.head;
      this.head.prev = _node;
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
    } else {
      this.tail = _node.prev
      this.tail.next = this.head;
      this.head.prev = this.tail;
    }

    _node.prev = null;
    _node.next = null;
    return _node;
  }

  reverse() {
    if (!this.head) return this;
    [this.head.prev, this.head.next] = [this.head.next, this.head.prev];
    let a = this.head.next;
    while (a && a !== this.head) {
      [a.prev, a.next] = [a.next, a.prev];
      a = a.next;
    }
    [this.tail, this.head] = [this.head, this.tail];
    return this;
  }

  toArray() {
    const _res = [];
    if (!this.head) return [];
    _res.push(this.head.value);
    let _node = this.head.next;
    while (_node.prev !== this.tail) {
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