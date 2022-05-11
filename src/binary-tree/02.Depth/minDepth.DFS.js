
const DFS = (root, min = Infinity) => {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  if (root.left) {
    min = Math.min(DFS(root.left), min);
  }

  if (root.right) {
    min = Math.min(DFS(root.right), min);
  }

  return min + 1;
}

export default DFS;