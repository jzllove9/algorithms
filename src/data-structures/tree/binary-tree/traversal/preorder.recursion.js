const order = (root, arr = []) => {
  if (root) {
    arr.push(root.value);
    order(root.left, arr);
    order(root.right, arr);
  }
  return arr;
};

export default order;
