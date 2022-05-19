const checkBanlanced = (root) => {
  const func = (node) => {
    if (!node) return 0;
    const leftH = func(node.left);
    const rightH = func(node.right);
    if (leftH === -1 || rightH === -1 || Math.abs(leftH - rightH) > 1) {
      return -1;
    }
    return Math.max(leftH, rightH) + 1;
  };
  return func(root) >= 0;
};

export default checkBanlanced;
