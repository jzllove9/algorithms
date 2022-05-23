/**
 * 判断环是否存在，如果存在返回快慢指针相遇节点，否则返回null
 * @param {*} list
 */
const checkCircleExist = (list) => {
  if (!list) return null;
  if (!list.head) return null;
  let slow = list.head;
  let fast = slow;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return slow;
  }
  return null;
};

const getCircleEnter = (list) => {
  let slow = checkCircleExist(list);
  if (!slow) return null;
  let fast = list.head;
  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};

export {
  checkCircleExist,
  getCircleEnter,
};
