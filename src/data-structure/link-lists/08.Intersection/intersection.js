import SinglyLinkedList from '../singlyLinkedList/index.js';

const getListLength = (list) => {
  let leg = 0;
  let start = list.head;
  while (start) {
    start = start.next;
    leg++;
  }

  return leg;
};

const intersection = (list1, list2) => {
  if (!list1 || !list2) return null;
  const leg1 = getListLength(list1);
  const leg2 = getListLength(list2);
  let head1 = list1.head;
  let head2 = list2.head;

  if (leg1 > leg2) {
    for (let i = 0; i < (leg1 - leg2); i++) {
      head1 = head1.next;
    }
  } else if (leg1 < leg2) {
    for (let i = 0; i < (leg2 - leg1); i++) {
      head2 = head2.next;
    }
  }

  let resNode = null;
  while (head1) {
    if (head1 === head2) {
      resNode = head1;
      break;
    } else {
      head1 = head1.next;
      head2 = head2.next;
    }
  }

  if (!resNode) return null;
  const newList = new SinglyLinkedList();
  const node = resNode;
  newList.push(node);
  return newList;
};

export default intersection;
