import { expect } from 'chai';

import constructPreIn from './pre-in-construct.js';
import constructPostIn from './post-in-construct.js';

describe('#恢复二叉树', () => {
  const preorder = [3, 9, 20, 15, 7];
  const inorder = [9, 3, 15, 20, 7];
  const postorder = [9, 15, 7, 20, 3];

  //      1
  //    3   5
  // 9        20
  //        15   7
  const preorder2 = [1, 3, 9, 5, 20, 15, 7];
  const inorder2 = [9, 3, 1, 5, 15, 20, 7];
  const postorder2 = [9, 3, 15, 7, 20, 5, 1];

  it('前序+中序恢复', () => {
    let tree = constructPreIn(preorder, inorder);
    expect(tree.value).eql(3);
    expect(tree.left.value).eql(9);
    expect(tree.right.value).eql(20);
    expect(tree.right.left.value).eql(15);
    expect(tree.right.right.value).eql(7);

    tree = constructPreIn(preorder2, inorder2);
    expect(tree.value).eql(1);
    expect(tree.left.value).eql(3);
    expect(tree.left.left.value).eql(9);
    expect(tree.right.value).eql(5);
    expect(tree.right.right.value).eql(20);
    expect(tree.right.right.left.value).eql(15);
    expect(tree.right.right.right.value).eql(7);
  });

  it('后序+中序恢复', () => {
    let tree = constructPostIn(postorder, inorder);
    expect(tree.value).eql(3);
    expect(tree.left.value).eql(9);
    expect(tree.right.value).eql(20);
    expect(tree.right.left.value).eql(15);
    expect(tree.right.right.value).eql(7);

    tree = constructPostIn(postorder2, inorder2);
    expect(tree.value).eql(1);
    expect(tree.left.value).eql(3);
    expect(tree.left.left.value).eql(9);
    expect(tree.right.value).eql(5);
    expect(tree.right.right.value).eql(20);
    expect(tree.right.right.left.value).eql(15);
    expect(tree.right.right.right.value).eql(7);
  });
});
