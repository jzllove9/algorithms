const order = (root) => {
  if (!root) return [];
  let node = root;
  const _stack = [];
  const _result = [];
  while (node || _stack.length) {
    while (node) {
      _stack.push(node);
      _result.push(node.value);
      node = node.left;
    }
    node = _stack.pop();
    node = node.right;
  }
  return _result;
};

export default order;
