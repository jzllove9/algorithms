const middle = (list) => {
  let slow = list.head;
  let fast = list.head;
  while (fast && fast.next) {
    slow = slow.next;
    list.head = slow;
    fast = fast.next.next;
  }

  return list;
};

export default middle;
