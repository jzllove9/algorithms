import SinglyLinkedList from './singlyLinkedList/index.js';

/**
 * 通过数组创建单链表
 * @param {*} arr
 */
export const createSinglyLinkedListFromArray = (arr) => {
  if (!arr.length) return null;

  const list = new SinglyLinkedList();

  arr.forEach((el) => {
    list.push(el);
  });

  return list;
};
