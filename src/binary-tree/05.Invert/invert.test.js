import { expect } from 'chai';
import TreeNode from '../../data-structure/binary-tree/node.js';
import invert from './invert.js';

describe('#反转二叉树', () => {
  const tree = new TreeNode(4);

  tree.left = new TreeNode(2);
  tree.right = new TreeNode(7);

  tree.left.left = new TreeNode(1);
  tree.left.right = new TreeNode(3);

  tree.right.left = new TreeNode(6);
  tree.right.right = new TreeNode(9);

  const newTree = invert(tree);
  it('反转一次', () => {
    expect(newTree.value).eql(4);
    expect(newTree.left.value).eql(7);
    expect(newTree.right.value).eql(2);

    expect(newTree.left.left.value).eql(9);
    expect(newTree.left.right.value).eql(6);

    expect(newTree.right.left.value).eql(3);
    expect(newTree.right.right.value).eql(1);
  });

  // 注意翻转会影响原二叉树，导致上一个用例无法通过，所以这里需要深度克隆一次二叉树
  const newTree2 = invert(JSON.parse(JSON.stringify(newTree)));
  it('反转二次', () => {
    expect(newTree2.value).eql(4);
    expect(newTree2.left.value).eql(2);
    expect(newTree2.right.value).eql(7);

    expect(newTree2.left.left.value).eql(1);
    expect(newTree2.left.right.value).eql(3);

    expect(newTree2.right.left.value).eql(6);
    expect(newTree2.right.right.value).eql(9);
  });
});
