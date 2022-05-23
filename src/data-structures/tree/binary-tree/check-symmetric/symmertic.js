const symmerticTree = (root, right = Infinity) => {
  if (!root) return true;
  // 根结点判断，第一次迭代后一定会被替换掉
  if (right === Infinity) {
    if (root.right && root.left) {
      return symmerticTree(root.left, root.right);
    }
    return !root.right && !root.left;
  }
  if (!right) return false;

  const checkLeft = symmerticTree(root.left, right.right);
  const checkRight = symmerticTree(root.right, right.left);
  const checkEqual = root.value === right.value;
  return checkEqual && checkLeft && checkRight;
};

export default symmerticTree;
