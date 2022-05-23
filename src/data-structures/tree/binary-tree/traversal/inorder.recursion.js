const order = (root, arr = []) => {
  if (root) {
    order(root.left, arr);
    arr.push(root.value);
    order(root.right, arr);
  }
  return arr;
};

export default order;
