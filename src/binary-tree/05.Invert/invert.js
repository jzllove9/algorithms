const invert = (root) => {
  if (!root) return null;
  if (!root.left && !root.right) return root;
  root.left = invert(root.left);
  root.right = invert(root.right);
  [root.left, root.right] = [root.right, root.left];
  return root;
};

export default invert;
