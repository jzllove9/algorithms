import SinglyLinkedListNode from '../node.js';
import SinglyLinkedList from '../index.js';

const partition1 = (list, target) => {
  if (!list) return null;
  if (!list.head) return null;
  if (!list.head.next) return list;
  let slow = list.head;
  let fast = slow.next;
  const dummy = new SinglyLinkedListNode(null, list.head);
  let prevSlow = dummy;
  let prevFast = dummy;
  while (slow) {
    if (slow.value >= target) {
      while (fast) {
        if (fast.value < target) {
          prevFast.next = fast.next;
          prevSlow.next = fast;
          fast.next = slow;
          slow = fast;
          fast = prevFast.next;
          break;
        }
        prevFast = fast;
        fast = fast.next;
      }
    }
    prevSlow = slow;
    slow = slow.next;
  }
  return list;
};

const partition2 = (list, target) => {
  if (!list) return null;
  if (!list.head) return null;
  if (!list.head.next) return list;

  const small = new SinglyLinkedList();
  let smallHead;
  const large = new SinglyLinkedList();
  let largeHead;

  let node = list.head;
  while (node) {
    if (node.value < target) {
      small.push(node);
      smallHead = small.tail;
    } else {
      large.push(node);
      largeHead = large.tail;
    }
    node = node.next;
  }

  largeHead.next = null;
  smallHead.next = large.head;
  return small;
};

export { partition1, partition2 };
