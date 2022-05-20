import { expect } from 'chai';
import TreeNode from '../node.js';
import isBalanced from './checkHeightBanlanced.js';

describe('#数据结构专项：二叉树 -- 判断二叉树高度平衡', () => {
  it('平衡二叉树判断', () => {
    const tree = new TreeNode(1);
    tree.left = new TreeNode(2);
    tree.right = new TreeNode(2);
    tree.right.left = new TreeNode(3);
    tree.right.right = new TreeNode(3);

    expect(isBalanced(tree)).eql(true);
  });

  it('非平衡二叉树判断', () => {
    const tree = new TreeNode(1);
    tree.left = new TreeNode(2);
    tree.right = new TreeNode(2);

    tree.left.left = new TreeNode(3);
    tree.left.right = new TreeNode(3);

    tree.left.left.left = new TreeNode(4);
    tree.left.left.right = new TreeNode(4);

    expect(isBalanced(tree)).eql(false);
  });
});
