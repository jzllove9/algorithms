const checkBST = (root) => {
  if (!root) return false;
  if (!root.left && !root.right) return true;
  if (!root.left || !root.right) return false;
  const checkLeft = checkBST(root.left);
  const checkRight = checkBST(root.right);
  const checkCurrent = (root.left.value < root.value) && (root.value < root.right.value);
  return checkCurrent && checkLeft && checkRight;
}

export default checkBST;