import TreeNode from '../node.js';

const construct = (postArr, inArr) => {
  if (!postArr.length || !inArr.length) return null;
  let k = 0;
  while (postArr[postArr.length - 1] !== inArr[k]) {
    if (k < inArr.length) {
      k++;
    } else {
      throw new Error('参数异常，无法构建二叉树');
    }
  }
  const root = new TreeNode(inArr[k]);
  root.right = construct(postArr.slice(k, inArr.length - 1), inArr.slice(k + 1));
  root.left = construct(postArr.slice(0, k), inArr.slice(0, k));
  return root;
};

export default construct;
