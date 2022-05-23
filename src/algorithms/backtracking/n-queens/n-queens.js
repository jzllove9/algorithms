import cloneDeep from 'lodash/cloneDeep.js';

/**
 * 检测当前位置是否安全
 * @param {*} row
 * @param {*} col
 * @param {*} hasQueen
 */
const checkSafe = (row, col, hasQueen) => {
  // 同行存在queen
  if (hasQueen[row] !== null) return false;
  for (let i = 0; i < row; i++) {
    // 同列存在queen
    if (hasQueen[i] === col) return false;
    // 左右对角线存在queen
    if (Math.abs(i - row) === Math.abs(hasQueen[i] - col)) return false;
  }

  return true;
};

/**
 * 回溯法查找题解
 * @param {*} board
 * @param {*} result
 * @param {*} hasQueen
 * @param {*} n
 * @param {*} rowIndex
 */
const backtrack = (board, hasQueen, n, rowIndex, result = []) => {
  if (rowIndex === n) {
    const arr = cloneDeep(board);
    result.push(arr);
    return;
  }

  for (let colIndex = 0; colIndex < n; colIndex++) {
    if (checkSafe(rowIndex, colIndex, hasQueen)) {
      hasQueen[rowIndex] = colIndex;
      board[rowIndex][colIndex] = 'Q';
      backtrack(board, hasQueen, n, rowIndex + 1, result);
      hasQueen[rowIndex] = null;
      board[rowIndex][colIndex] = '.';
    }
  }

  return result;
};

const nQueens = (n) => {
  if (n < 4) return null;
  const board = Array(n).fill(null).map(() => Array(n).fill('.'));
  const hasQueen = Array(n).fill(null);
  const result = backtrack(board, hasQueen, n, 0);
  return result;
};

export default nQueens;
