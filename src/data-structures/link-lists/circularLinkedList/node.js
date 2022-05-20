/**
 * 双向链表节点类
 */
export default class CircluarLinkedListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }

  toString() {
    return this.value.toString();
  }
}
