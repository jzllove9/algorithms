const zTraversalInteration = (root) => {
  if (!root) return [];
  const node = root;
  const queue = [node];
  let flag = 1;
  const _result = [];
  while (queue.length) {
    if (flag) {
      queue.push('block');
      while (queue[0] !== 'block') {
        const _node = queue.shift();
        _result.push(_node.value);
        if (_node.left) queue.push(_node.left);
        if (_node.right) queue.push(_node.right);
      }
      queue.shift();
      flag--;
    } else {
      queue.unshift('block');
      while (queue[queue.length - 1] !== 'block') {
        const _node = queue.pop();
        _result.push(_node.value);
        if (_node.left) queue.push(_node.left);
        if (_node.right) queue.push(_node.right);
      }
      queue.pop();
      flag++;
    }
  }

  return _result;
};

export default zTraversalInteration;
