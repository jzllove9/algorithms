// import { expect } from 'chai';
import { expect } from 'chai';
import NQueens from './n-queens.js';

describe('#算法范式：回溯法 -- n皇后问题', () => {
  it('4皇后问题测试', () => {
    const result = NQueens(4);
    expect(result.length).eql(2);
    expect(result).eql(
      [
        [
          ['.', 'Q', '.', '.'],
          ['.', '.', '.', 'Q'],
          ['Q', '.', '.', '.'],
          ['.', '.', 'Q', '.'],
        ],
        [
          ['.', '.', 'Q', '.'],
          ['Q', '.', '.', '.'],
          ['.', '.', '.', 'Q'],
          ['.', 'Q', '.', '.'],
        ],
      ],
    );
  });

  it('8皇后问题测试', () => {
    const result = NQueens(8);
    expect(result.length).eql(92);
  });
});
