import MiniHeap from '../../data-structure/heap/minHeap.js';

const heapSorts = (randomArr) => {
  if (!randomArr.length) return [];
  if (randomArr.length < 2) return randomArr;
  const heap = new MiniHeap();
  randomArr.forEach((item) => {
    heap.add(item);
  });
  const _res = [];
  while (heap.heapContainer.length) {
    _res.push(heap.poll());
  }
  return _res;
};

export default heapSorts;
