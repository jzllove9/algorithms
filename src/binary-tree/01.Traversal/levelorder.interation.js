
const order = (root) => {
  if (!root) return [];
  const queue = [root];
  const result = [];
  while (queue.length) {
    queue.push('block');
    while (queue[0] !== 'block') {
      const _node = queue.shift();
      result.push(_node.value);
      if (_node.left) queue.push(_node.left);
      if (_node.right) queue.push(_node.right);
    }
    queue.shift();
  }
  return result;
}

export default order;