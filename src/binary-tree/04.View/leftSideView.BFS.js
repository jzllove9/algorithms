const BFS = (root) => {
  if (!root) return null;
  if (!root.left && !root.right) return root.value;
  const result = [];
  const queue = [root];
  let lg = 1;
  while (queue.length) {
    let first = true;
    while (lg) {
      const node = queue.shift();
      if (first) {
        result.push(node.value);
        first = false;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      lg--;
    }
    lg = queue.length;
  }
  return result;
};

export default BFS;
