import { expect } from 'chai';
import TreeNode from '../node.js';

import preorderInteration from './preorder.interation.js';
import preorderRecursion from './preorder.recursion.js';
import inorderInteration from './inorder.interation.js';
import inorderRecursion from './inorder.recursion.js';
import postorderInteration from './postorder.interation.js';
import postorderRecursion from './postorder.recursion.js';
import levelorderInteration from './levelorder.interation.js';
import levelorderRecursion from './levelorder.recursion.js';
import zTraversalInteration from './z-traversal.interation.js';
import zTraversalRecursion from './z-traversal.recursion.js';

const orderMaps = {
  前序遍历: {
    methods: [
      preorderInteration,
      preorderRecursion,
    ],
    result: '1,2,4,3',
  },
  中序遍历: {
    methods: [
      inorderInteration,
      inorderRecursion,
    ],
    result: '4,2,1,3',
  },
  后序遍历: {
    methods: [
      postorderInteration,
      postorderRecursion,
    ],
    result: '4,2,3,1',
  },
  层级遍历: {
    methods: [
      levelorderInteration,
      levelorderRecursion,
    ],
    result: '1,2,3,4',
  },
  Z字遍历: {
    methods: [
      zTraversalInteration,
      zTraversalRecursion,
    ],
    result: '1,3,2,4',
  },
};

describe('#数据结构专项：二叉树 -- 遍历二叉树：', () => {
  //    1
  //  2  3
  // 4
  const tree = new TreeNode(1);
  tree.left = new TreeNode(2);
  tree.right = new TreeNode(3);
  tree.left.left = new TreeNode(4);

  const keys = Object.keys(orderMaps);
  keys.forEach((key) => {
    const funcs = orderMaps[key].methods;
    const res = orderMaps[key].result;
    funcs.forEach((item, idx) => {
      it(`${key}测试-${idx === 0 ? '迭代' : '递归'}`, () => {
        expect(item(tree).join()).eql(res);
      });
    });
  });
});
