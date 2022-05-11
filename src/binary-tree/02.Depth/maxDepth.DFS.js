
const DFS = (root) => {
  if (!root) return 0;
  return Math.max(DFS(root.left), DFS(root.right)) + 1
}

export default DFS;