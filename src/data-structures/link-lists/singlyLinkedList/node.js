/**
 * 单向链表节点
 */
export default class SinglyLinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return this.value.toString();
  }
}
