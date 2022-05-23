import SinglyLinkedListNode from '../node.js';
import SinglyLinkedList from '../index.js';

const copy = (head) => {
  if (!head) return null;
  let current = head;
  while (current) {
    const copyCurrent = new SinglyLinkedListNode(current.value, current.next);
    if (copyCurrent.random) {
      copyCurrent.random = current.random.next;
    } else {
      copyCurrent.random = current.random;
    }
    current.next = copyCurrent;
    current = copyCurrent.next;
  }
  const newList = new SinglyLinkedList();
  current = head;
  while (current) {
    const _temp = current.next;
    newList.push(_temp);
    current = _temp.next;
  }

  return newList;
};

export default copy;
