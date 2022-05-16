import SinglyLinkedList from '../../data-structure/link-lists/singlyLinkedList/index.js';

const sort = (list) => {
  if (!list) return null;
  if (!list.head) return null;
  if (!list.head.next) return list;
  let slow = list.head;
  let fast = list.head;
  let prev = slow;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // 分割链表
  const leftList = new SinglyLinkedList();
  const rightList = new SinglyLinkedList();
  leftList.head = list.head;
  prev.next = null;
  rightList.head = slow;
  const currentLeft = sort(leftList);
  const currentRight = sort(rightList);

  // 归并
  const newList = new SinglyLinkedList();
  let left = currentLeft.head;
  let right = currentRight.head;
  while (left && right) {
    if (left.value < right.value) {
      newList.push(left.value);
      left = left.next;
    } else if (left.value > right.value) {
      newList.push(right.value);
      right = right.next;
    } else {
      newList.push(left.value);
      newList.push(right.value);
      left = left.next;
      right = right.next;
    }
  }

  if (left) {
    newList.tail.next = left;
    newList.tail = left;
  }

  if (right) {
    newList.tail.next = right;
    newList.tail = right;
  }

  return newList;
};

export default sort;
