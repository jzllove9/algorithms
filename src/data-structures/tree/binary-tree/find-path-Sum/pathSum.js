const sum = (root, target) => {
  if (!root) return [];
  if (root.value === target) return [[root.value]];
  const result = [];
  const leftArr = sum(root.left, target - root.value);
  const rightArr = sum(root.right, target - root.value);
  if (leftArr.length) {
    leftArr.forEach((item) => {
      item.unshift(root.value);
      result.push(item);
    });
  }

  if (rightArr.length) {
    rightArr.forEach((item) => {
      item.unshift(root.value);
      result.push(item);
    });
  }

  return result;
};

const sum2 = (root, target) => {
  const result = [];
  const func = (node, total, nums = []) => {
    nums.push(node.value);
    total += node.value;
    if (node.left || node.right) {
      if (node.left) func(node.left, total, nums.slice());
      if (node.right) func(node.right, total, nums.slice());
    } else if (total === target) result.push(nums);
  };
  return (root && func(root, 0, [])) || result;
};

export {
  sum,
  sum2,
};
