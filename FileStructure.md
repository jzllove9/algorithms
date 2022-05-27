
## 阅读说明
> 部分内容标注 ```中等``` 和 ```困难``` 的题目，建议请直接略过，后续再进行学习，优先掌握入门级别内容打好基础。

## 数据结构

数据结构（Data structure）是计算机存储、组织数据的方式。数据结构是指相互之间存在一种或多种特定关系的数据素的集合。通常情况下，精心选择的数据结构可以带来更高的运行或者存储效率。

* `入门` [数组](src/data-structures/array/README.md)
* `入门` [哈希表](src/data-structures/hash-table/README.md)
* `入门` [堆](src/data-structures/heap/README.md)
  * `入门` [小顶堆](src/data-structures/heap/minHeap.js)
  * `入门` [大顶堆](src/data-structures/heap/miniHeap.js)  -- 与小顶堆仅存在部分判断条件的区别，待后续更新
* `入门` [链表](src/data-structures/linked-lists/README.md)
  * `入门` [单链表](src/data-structures/linked-lists/singlyLinkedList/)
    * `入门` [回文检测](src/data-structures/linked-lists/singlyLinkedList/check-nodes-palindrome/)
    * `入门` [复制包含随机节点指针的单链表](src/data-structures/linked-lists/singlyLinkedList/copy-linked-with-random-arrow/)
    * `入门` [环形链表检测 & 查找环入口](src/data-structures/linked-lists/singlyLinkedList/find-cycle-entry/)
    * `入门` [查找链表中间节点](src/data-structures/linked-lists/singlyLinkedList/find-middle-nodes/)
    * `入门` [查找两个单链表交叉点](src/data-structures/linked-lists/singlyLinkedList/nodes-intersection/)
    * `入门` [小于N的值前置](src/data-structures/linked-lists/singlyLinkedList/nodes-partition/)
    * `入门` [排序](src/data-structures/linked-lists/singlyLinkedList/nodes-sorts/)
    * `入门` [尾部索引删除](src/data-structures/linked-lists/singlyLinkedList/remove-from-end/)
    * `入门` [反转区域内链表](src/data-structures/linked-lists/singlyLinkedList/reverse-range-nodes/)
    * `入门` [交换相邻节点](src/data-structures/linked-lists/singlyLinkedList/swap-neared-nodes/)
  * `入门` [双链表](src/data-structures/linked-lists/doublyLinkedList/)
  * `入门` [环形链表](src/data-structures/linked-lists/circularLinkedList/)
* `入门` [队列](src/data-structures/queue/README.md)
* `入门` [栈](src/data-structures/stack/README.md)
* `入门` [树](src/data-structures/tree/README.md)
  * `入门` [二叉树](src/data-structures/tree/binary-tree/README.md)
    * `入门` [二叉树DFS合集](src/data-structures/tree/binary-tree/traversal) -- 前中后遍历，迭代+递归两种实现方式
    * `入门` [根据遍历结果构造二叉树](src/data-structures/tree/binary-tree/construct-by-traversal) -- 根据前序&中序，后序&中序遍历结果构造二叉树
    * `入门` [获取树最大/最小深度](src/data-structures/tree/binary-tree/depth) -- DFS + BFS
    * `入门` [翻转二叉树](src/data-structures/tree/binary-tree/invert)
    * `入门` [查找目标节点路径和](src/data-structures/tree/binary-tree/find-path-Sum) -- 可能存在多结果
    * `入门` [检测高度平衡](src/data-structures/tree/binary-tree/check-height-balanced)
    * `入门` [检测相同树](src/data-structures/tree/binary-tree/check-same-tree)
    * `入门` [检测对称树](src/data-structures/tree/binary-tree/check-symmetric)
    * `入门` [检测二叉搜索树](src/data-structures/tree/binary-tree/checkBST)
  * `中等` [二叉搜索树](src/data-structures/tree/binary-search-tree/README.md) -- 待更新
  * `中等` [AVL树](src/data-structures/tree/AVL/README.md) -- 待更新
  * `困难` [红黑树](src/data-structures/tree/red-black-tree/README.md) -- 待更新

## 算法
算法（Algorithm）是指解题方案的准确而完整的描述，是一系列解决问题的清晰指令，算法代表着用系统的方法描述解决问题的策略机制。

不同的算法可能用不同的时间，空间或效率来完成同样的任务。一个算法的优劣可以用空间复杂度与时间复杂度来衡量。

* **数学**
  * `入门` [阶乘](src/algorithms/math/factorial/README.md) -- 迭代和递归方式实现阶乘计算
  * `入门` [斐波那契数列](src/algorithms/math/factorial/README.md) -- 包含斐波那契数列的四种计算方式：迭代，递归，数学通项公式，矩阵快速幂
  * `入门` [最大公约数](src/algorithms/math/greatest-common-divisor/README.md) -- 欧几里得公式：辗转相除法的两种实现方式
  * `入门` [最小公倍数](src/algorithms/math/least-common-multiple/README.md)  -- 根据最小公倍数求解最大公约数
  * `入门` [幂数](src/algorithms/math/power/README.md) -- 包含分治思想快速求幂，以及2，3幂数的判断
  * `入门` [素数](src/algorithms/math/primality/README.md) -- 迭代实现试除法，埃拉托斯特尼筛法求解n以内素数

* **集合**
  * `入门` [最大公共子序列](src/algorithms/dynamic-programming/longest-common-subquence) -- LCS

* **排序**
  * `入门` [冒泡排序](src/algorithms/sort/bubble-sorts/README.md)
  * `入门` [选择排序](src/algorithms/math/selection-sorts/README.md)
  * `入门` [插入排序](src/algorithms/math/insertion-sorts/README.md)
  * `入门` [希尔排序](src/algorithms/math/shell-sorts/README.md)
  * `入门` [归并排序](src/algorithms/math/merge-sorts/README.md)
  * `入门` [快速排序](src/algorithms/math/quick-sorts/README.md)
  * `入门` [堆排序](src/algorithms/math/heap-sorts/README.md)

* **未分类**
  * `入门` [递归楼梯问题](src/algorithms/uncategorized/staircase/)
    * `入门` [暴力递归](src/algorithms/uncategorized/staircase/staircase-BF/)
    * `入门` [自底向上迭代](src/algorithms/uncategorized/staircase/staircase-IT/)
    * `入门` [动态规划](src/algorithms/uncategorized/staircase/staircase-DP/)
    * `入门` [记忆剪枝](src/algorithms/uncategorized/staircase/staircase-MEM/)

## 算法范式
算法范式是对一系列算法的抽象和总结，面对同类型不同难度的算法问题时的统一思路和解法

请在学习过程中体会范式思路而非与题目本身耗时间，这样更加有利于面对不同外表的同类型题目游刃有余

* **暴力查找**
  * `入门` [递归楼梯](src/algorithms/uncategorized/staircase/staircase-BF/) -- 爬楼梯问题的暴力迭代解法
* **贪心算法**
  * TODO
* **分治思想**
  * `入门` [快速计算幂](src/algorithms/math/power)
  * `入门` [二叉树DFS合集](src/data-structures/tree/binary-tree/traversal)
  * `入门` [归并排序](src/algorithms/math/merge-sorts/README.md)
  * `入门` [快速排序](src/algorithms/math/quick-sorts/README.md)
* **动态规划**
  * `入门` [斐波那契数列](src/algorithms/math/factorial/README.md) -- 递归求解法
  * `入门` [01背包问题](src/algorithms/dynamic-programming/knapsack-problem/zero-one-knapsack-problem/) -- 实现和优化
  * `入门` [完全背包问题](src/algorithms/dynamic-programming/knapsack-problem/unbounded-knapsack-problem/) -- 实现和优化
  * `入门` [递归楼梯](src/algorithms/uncategorized/staircase/staircase-DP/) -- 爬楼梯问题的动态规划解法
  * `入门` [最大公共子序列](src/algorithms/dynamic-programming/longest-common-subquence) -- LCS
* **回溯算法**
  * `入门` [N皇后问题](src/algorithms/backtracking/n-queens/)

