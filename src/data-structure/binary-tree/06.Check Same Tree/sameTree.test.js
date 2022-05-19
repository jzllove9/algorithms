import { expect } from 'chai';
import TreeNode from '../node.js';
import isSameTree from './sameTree.js';

describe('#数据结构专项：二叉树 -- 判断相同二叉树', () => {
  it('两个空二叉树测试', () => {
    const [p, q] = [null, null];

    expect(isSameTree(p, q)).eql(true);
  });

  it('相同非空二叉树测试', () => {
    const p = new TreeNode(1);
    p.right = new TreeNode(2);
    p.right.left = new TreeNode(3);

    const q = new TreeNode(1);
    q.right = new TreeNode(2);
    q.right.left = new TreeNode(3);

    expect(isSameTree(p, q)).eql(true);
  });

  it('不同非空二叉树测试', () => {
    const p = new TreeNode(1);
    p.right = new TreeNode(2);
    p.right.left = new TreeNode(3);

    const q = new TreeNode(1);
    q.right = new TreeNode(2);

    expect(isSameTree(p, q)).eql(false);
  });
});
