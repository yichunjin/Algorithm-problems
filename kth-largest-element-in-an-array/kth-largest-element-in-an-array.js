/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const minHeap = new Heap((a, b) => a - b);
    for (let n of nums) {
        minHeap.insert(n);
        if (minHeap.size > k) {
            minHeap.remove();
        }
    }
    return minHeap.rootNode;
};


class Heap {
  constructor(compareFn, capacity = Heap.DEFAULT_HEAP_SIZE) {
    this.capacity = capacity;
    this._heap = [];
    if (typeof compareFn === 'function') {
      this.compare = compareFn;
    } else {
        this.compare = (a, b) => {return a - b}
    }
  }

  get size() {
    return this._heap.length - 1;
  }

  get rootNode() {
    return this._heap[1] !== undefined ? this._heap[1] : null;
  }

  set rootNode(node) {
    this._heap[1] = node;
  }

  insert(obj) {
    if (this.rootNode === null) {
      this.rootNode = obj;
      return this;
    }
    if (this.size >= this.capacity) {
      if (this.compare(this.rootNode, obj) > 0) {
        this.rootNode = obj;
        this._down(1);
      }
    } else {
      this._heap.push(obj);
      this._up(this.size);
    }
    return this;
  }
    
    remove() {
        this._swap(1, this._heap.length - 1);
        this._heap.pop();
        this._down(1);
    }

  _down(index) {
    let childIndex = {left: index * 2, right: index * 2 + 1};
    let biggerChildIndex = null;
    if (childIndex.left > this.size) {
      return;
    }
    if (childIndex.left === this.size) {
      biggerChildIndex = childIndex.left;
    } else {
      biggerChildIndex = this.compare(this._heap[childIndex.left], this._heap[childIndex.right]) < 0 ? childIndex.left : childIndex.right;
    }
    if (this.compare(this._heap[biggerChildIndex], this._heap[index]) < 0) {
      this._swap(index, biggerChildIndex);
      this._down(biggerChildIndex);
    }
  }

  _up(index) {
    let parentIndex = index >= 2 ? Math.floor(index / 2) : 0;
    if (parentIndex > 0 && this.compare(this._heap[parentIndex], this._heap[index]) > 0) {
      this._swap(parentIndex, index);
      this._up(parentIndex);
    }
  }

  _swap(index1, index2) {
    let item1 = this._heap[index1];
    this._heap[index1] = this._heap[index2];
    this._heap[index2] = item1;
  }
}
Heap.DEFAULT_HEAP_SIZE = 100000;
