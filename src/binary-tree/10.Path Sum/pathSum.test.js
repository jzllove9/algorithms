import { expect } from 'chai';
import TreeNode from '../../data-structure/binary-tree/node.js';
import { sum, sum2 } from './pathSum.js';

describe('#路径和搜索', () => {
  //          5
  //      4       8
  //    11      9    4
  //  7   2         5   1
  const tree = new TreeNode(5);
  tree.left = new TreeNode(4);

  tree.left.left = new TreeNode(11);
  tree.left.left.left = new TreeNode(7);
  tree.left.left.right = new TreeNode(2);

  tree.right = new TreeNode(8);
  tree.right.left = new TreeNode(9);
  tree.right.right = new TreeNode(4);
  tree.right.right.left = new TreeNode(5);
  tree.right.right.right = new TreeNode(1);
  it('路径和搜索测试-算法1', () => {
    const result = sum(tree, 22);
    expect(result[0].join()).eql('5,4,11,2');
    expect(result[1].join()).eql('5,8,9');
    expect(result[2].join()).eql('5,8,4,5');
  });

  it('路径和搜索测试-算法2', () => {
    const result2 = sum2(tree, 22);
    expect(result2[0].join()).eql('5,4,11,2');
    expect(result2[1].join()).eql('5,8,9');
    expect(result2[2].join()).eql('5,8,4,5');
  });
});
