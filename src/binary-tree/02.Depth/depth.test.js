import { expect } from 'chai';
import TreeNode from '../../data-structure/binary-tree/node.js';
import maxDepthDFS from './maxDepth.DFS.js';
import maxDepthBFS from './maxDepth.BFS.js';
import minDepthDFS from './minDepth.DFS.js';
import minDepthBFS from './minDepth.BFS.js';

const depthFuncMap = {
  '最大深度': {
    methods: [
      maxDepthDFS,
      maxDepthBFS
    ],
    result: 4
  },
  '最小深度': {
    methods: [
      minDepthDFS,
      minDepthBFS
    ],
    result: 3
  }
}

describe('#二叉树最小深度', () => {
  //          1
  //      2       2
  //    3   3   3   3
  //  4
  const tree = new TreeNode(1);
  tree.right = new TreeNode(2);
  tree.left = new TreeNode(2);
  tree.left.left = new TreeNode(3);
  tree.left.right = new TreeNode(3);
  tree.left.left.left = new TreeNode(4);
  tree.right.left = new TreeNode(3);
  tree.right.right = new TreeNode(3);

  const keys = Object.keys(depthFuncMap);
  keys.forEach(key => {
    const funcs = depthFuncMap[key].methods;
    const result = depthFuncMap[key].result;

    funcs.forEach((func, idx) => {
      it(`${key}测试-${idx === 0 ? 'DFS' : 'BFS'}`, () => {
        expect(func(tree)).eql(result);
      });
    })
  })
})
