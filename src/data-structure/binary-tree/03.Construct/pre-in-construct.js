import TreeNode from '../node.js';

const construct = (preArr, inArr) => {
  if (!preArr.length || !inArr.length) return null;
  let k = 0;
  while (preArr[0] !== inArr[k]) {
    if (k < inArr.length) {
      k++;
    } else {
      throw new Error('参数异常，无法构建二叉树');
    }
  }
  const root = new TreeNode(preArr[0]);
  root.left = construct(preArr.slice(1, k + 1), inArr);
  root.right = construct(preArr.slice(k + 1), inArr.slice(k + 1));
  return root;
};

export default construct;
