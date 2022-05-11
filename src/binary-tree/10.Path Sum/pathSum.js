const sum = (root, target) => {
  if (!root) return [];
  if (root.value === target) return [[root.value]];
  const result = [];
  const leftArr = sum(root.left, target - root.value);
  const rightArr = sum(root.right, target - root.value);
  if (leftArr.length) {
    leftArr.forEach(item => {
      item.unshift(root.value);
      result.push(item);
    })
  }

  if (rightArr.length) {
    rightArr.forEach(item => {
      item.unshift(root.value);
      result.push(item);
    })
  }

  return result;
}

const sum2 = (root, target) => {
  const _result = [];
  const func = (node, sum, nums = []) => {
    nums.push(node.value);
    sum += node.value;
    if (node.left || node.right) {
      if (node.left) func(node.left, sum, nums.slice());
      if (node.right) func(node.right, sum, nums.slice());
    } else if (sum === target) _result.push(nums);
  }
  return (root && func(root, 0, [])) || _result;
}

export {
  sum,
  sum2
};