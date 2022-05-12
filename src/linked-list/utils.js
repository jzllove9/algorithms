import SinglyLinkedList from '../data-structure/link-lists/singlyLinkedList/index.js';

export const createFromArray = (arr) => {
  if (!arr.length) return null;

  const list = new SinglyLinkedList();

  arr.forEach((el) => {
    list.push(el);
  });

  return list;
};
