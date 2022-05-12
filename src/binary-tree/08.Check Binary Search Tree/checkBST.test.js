import { expect } from 'chai';
import TreeNode from '../../data-structure/binary-tree/node.js';
import checkBST from './checkBST.js';

describe('#二叉搜索树测试', () => {
  it('是二叉搜索树判断', () => {
    const tree = new TreeNode(2);
    tree.left = new TreeNode(1);
    tree.right = new TreeNode(3);

    expect(checkBST(tree)).eql(true);
  });

  it('非二叉搜索树判断1', () => {
    const tree = new TreeNode(2);
    tree.left = new TreeNode(3);
    tree.right = new TreeNode(3);

    expect(checkBST(tree)).eql(false);
  });

  it('非二叉搜索树判断2', () => {
    const tree = new TreeNode(1);
    tree.left = new TreeNode(1);

    expect(checkBST(tree)).eql(false);
  });
});
