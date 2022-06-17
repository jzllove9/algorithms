/**
 * 每k个一组反转链表
 * @param {*} node 链表
 * @param {*} k 分组数量
 */
const reverseKRange = (node, k) => {
  if (!node) return null;
  if (!node.next) return node;
  if (k <= 1) return node;

  let count = 1;
  const head = node;
  let prev = node;
  let current = prev.next;
  let tail = current.next;
  // 每k个为一组，进行反转
  while (count < k && current) {
    current.next = prev;
    prev = current;
    current = tail;
    if (tail) {
      tail = tail.next;
    }
    count++;
  }

  head.next = reverseKRange(current, k);

  return prev;
};

const func = (list, k) => {
  const head = reverseKRange(list.head, k);

  const _res = [];
  let currentNode = head;
  while (currentNode) {
    _res.push(currentNode.value);
    currentNode = currentNode.next;
  }

  return _res;
};

export default func;
