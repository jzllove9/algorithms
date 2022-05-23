const BFS = (root) => {
  if (!root) return 0;
  const queue = [root];
  let level = 0;
  while (queue.length) {
    queue.push('block');
    while (queue[0] !== 'block') {
      const _node = queue.shift();
      if (_node.left) queue.push(_node.left);
      if (_node.right) queue.push(_node.right);
    }
    queue.shift();
    level++;
  }
  return level;
};

export default BFS;
