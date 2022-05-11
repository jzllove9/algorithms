
const order = (root, level = 0, arr = []) => {
  if (root) {
    if (!arr[level]) arr[level] = [];
    arr[level].push(root.value);
    order(root.left, level + 1, arr);
    order(root.right, level + 1, arr);
  }
  return arr;
}

export default order;