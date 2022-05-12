const order = (root) => {
  if (!root) return [];
  let node = root;
  let prev;
  const _stack = [];
  const _result = [];
  while (node || _stack.length) {
    while (node) {
      _stack.push(node);
      node = node.left;
    }
    node = _stack[_stack.length - 1];
    if (!node.right || node.right === prev) {
      node = _stack.pop();
      _result.push(node.value);
      prev = node;
      node = null;
    } else {
      node = node.right;
    }
  }
  return _result;
};

export default order;
