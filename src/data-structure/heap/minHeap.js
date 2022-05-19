export default class MiniHeap {
  constructor() {
    this.heapContainer = [];
  }

  add(item) {
    this.heapContainer.push(item);
    this.heapifyUp();
  }

  heapifyUp(customIndex) {
    let currentIndex = customIndex || this.heapContainer.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (
      parentIndex >= 0
      && this.heapContainer[currentIndex] < this.heapContainer[parentIndex]
    ) {
      [
        this.heapContainer[currentIndex],
        this.heapContainer[parentIndex],
      ] = [
        this.heapContainer[parentIndex],
        this.heapContainer[currentIndex],
      ];
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  poll() {
    if (!this.heapContainer.length) return null;
    if (this.heapContainer.length == 1) return this.heapContainer.shift();
    const top = this.heapContainer.shift();
    const last = this.heapContainer.pop();
    this.heapContainer.unshift(last);
    this.heapifyDown();
    return top;
  }

  hasLeft(idx) {
    return idx * 2 + 1 < this.heapContainer.length;
  }

  hasRight(idx) {
    return idx * 2 + 2 < this.heapContainer.length;
  }

  heapifyDown(customIndex = 0) {
    let currentIndex = customIndex;
    while (this.hasLeft(currentIndex)) {
      let nextIndex = currentIndex * 2 + 1;
      if (this.hasRight(currentIndex)) {
        if (this.heapContainer[nextIndex] > this.heapContainer[nextIndex + 1]) {
          nextIndex += 1;
        }
      }

      if (this.heapContainer[currentIndex] < this.heapContainer[nextIndex]) break;

      [
        this.heapContainer[currentIndex],
        this.heapContainer[nextIndex],
      ] = [
        this.heapContainer[nextIndex],
        this.heapContainer[currentIndex],
      ];
      currentIndex = nextIndex;
    }
  }
}
