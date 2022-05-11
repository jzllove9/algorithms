
export default class DoublyLinkedListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }

  toString() {
    return this.value + '';
  }
}