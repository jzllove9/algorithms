import { expect } from 'chai';
import TreeNode from '../node.js';
import symmertic from './symmertic.js';

describe('#数据结构专项：二叉树 -- 判断对称二叉树', () => {
  it('判断空二叉树是否对称', () => {
    const tree = null;
    expect(symmertic(tree)).eql(true);
  });

  it('判断非对称二叉树', () => {
    const tree = new TreeNode(1);
    tree.right = new TreeNode(2);
    tree.right.left = new TreeNode(3);
    tree.right.right = new TreeNode(4);
    tree.left = new TreeNode(2);
    tree.left.right = new TreeNode(3);
    tree.left.left = new TreeNode(5);

    expect(symmertic(tree)).eql(false);
  });

  it('判断对称二叉树', () => {
    const tree = new TreeNode(1);
    tree.right = new TreeNode(2);
    tree.right.left = new TreeNode(3);
    tree.right.right = new TreeNode(4);
    tree.left = new TreeNode(2);
    tree.left.right = new TreeNode(3);
    tree.left.left = new TreeNode(4);

    expect(symmertic(tree)).eql(true);
  });
});
