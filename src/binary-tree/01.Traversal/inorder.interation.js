const order = (root) => {
  if (!root) return [];
  let node = root;
  const _stack = [];
  const _result = [];
  while (node || _stack.length) {
    while (node) {
      _stack.push(node);
      node = node.left;
    }
    node = _stack.pop();
    _result.push(node.value);
    node = node.right;
  }
  return _result;
};

export default order;
