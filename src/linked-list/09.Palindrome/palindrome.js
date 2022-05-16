const palindrome = (list) => {
  if (!list) return false;
  if (!list.head) return false;
  const stack = [];
  let node = list.head;
  while (node) {
    stack.push(node);
    node = node.next;
  }

  let sec = list.head;
  while (stack.length) {
    const top = stack.pop();
    if (top.value !== sec.value) {
      return false;
    }
    sec = sec.next;
  }
  return true;
};

export default palindrome;
