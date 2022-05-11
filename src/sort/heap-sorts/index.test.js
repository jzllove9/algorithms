import { expect } from 'chai';

import { MinHeap, heapSorts } from './index.js'

describe('#小顶堆测试', () => {
  it('add', () => {
    const heap = new MinHeap();
    heap.add(2);
    expect(heap.heapContainer[0]).eql(2);
    heap.add(10);
    heap.add(3);
    heap.add(1);
    heap.add(4);
    expect(heap.heapContainer[0]).eql(1);
  })

  it('poll', () => {
    const heap = new MinHeap();
    heap.add(4);
    heap.add(9);
    heap.add(5);
    heap.add(3);
    heap.add(2);
    heap.add(1);
    expect(heap.heapContainer[0]).eql(1);
    const h = heap.poll();
    expect(h).eql(1);
    expect(heap.heapContainer.length).eql(5);
  })

  it('sort', () => {
    expect(heapSorts([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).eql([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);
  })
})