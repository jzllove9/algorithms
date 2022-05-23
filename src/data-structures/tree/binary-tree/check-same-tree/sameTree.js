const sameCheck = (root1, root2) => {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  const sameValue = root1.value === root2.value;
  if (sameValue) {
    return sameCheck(root1.left, root2.left) && sameCheck(root1.right, root2.right);
  }
  return false;
};

export default sameCheck;
