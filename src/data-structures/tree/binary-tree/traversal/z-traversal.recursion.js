const zTraversalRecursion = (root, level = 0, arr = [], flag = true) => {
  if (!root) return [];
  if (!arr[level]) arr[level] = [];
  if (flag) {
    arr[level].push(root.value);
  } else {
    arr[level].unshift(root.value);
  }

  root.left && zTraversalRecursion(root.left, level + 1, arr, !flag);
  root.right && zTraversalRecursion(root.right, level + 1, arr, !flag);

  return arr;
};

export default zTraversalRecursion;
