
const order = (root, arr = []) => {
  if (root) {
    order(root.left, arr);
    order(root.right, arr);
    arr.push(root.value);
  }
  return arr;
}

export default order;