import { expect } from 'chai';

import TreeNode from '../../data-structure/binary-tree/node.js';

import leftSideViewBFS from './leftSideView.BFS.js';
import rightSideViewBFS from './rightSideView.BFS.js';

describe('#二叉树视图测试', () => {
  const tree = new TreeNode(1);
  tree.left = new TreeNode(2);
  tree.right = new TreeNode(3);
  tree.left.right = new TreeNode(4);
  tree.right.right = new TreeNode(5);
  it('左视图', () => {
    expect(leftSideViewBFS(tree).join()).eql('1,2,4');
  });
  it('右视图', () => {
    expect(rightSideViewBFS(tree).join()).eql('1,3,5');
  });
});
