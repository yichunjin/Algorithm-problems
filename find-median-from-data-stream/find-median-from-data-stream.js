/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.smallHeap = new BinaryHeap((i, j) => {return i > j});
    this.largeHeap = new BinaryHeap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.smallHeap.insert(num);
    
    if (this.largeHeap._heap.length > 0 && this.smallHeap.getRoot() > this.largeHeap.getRoot()) {
        let val = this.smallHeap.removeRoot();
        this.largeHeap.insert(val);
    }
    if (this.largeHeap._heap.length > this.smallHeap._heap.length + 1) {
        let val = this.largeHeap.removeRoot();
        this.smallHeap.insert(val);
    }
    if (this.largeHeap._heap.length + 1 < this.smallHeap._heap.length) {
        let val = this.smallHeap.removeRoot();
        this.largeHeap.insert(val);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.largeHeap._heap.length > this.smallHeap._heap.length) {
        return this.largeHeap.getRoot()
    } else if (this.largeHeap._heap.length < this.smallHeap._heap.length) {
        return this.smallHeap.getRoot()
    } else {
        return (this.largeHeap.getRoot() + this.smallHeap.getRoot()) / 2;
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

const BinaryHeap = function(func) {
  this._heap = [];
  func ? this._compare = func
    : this._compare = (i, j) => {return i < j};
}

// This function works just fine and shouldn't be modified
BinaryHeap.prototype.getRoot = function () {
  return this._heap[0];
}

BinaryHeap.prototype.insert = function (value) {
  let l = this._heap.length;
  this._heap.push(value);

  const compareWithParent = (index) => {
    let parentIndex = Math.floor( (index - 1) / 2 );
    if (parentIndex < 0 || this._compare(this._heap[parentIndex], this._heap[index])) {
      return;
    }
    let instance = this._heap[parentIndex];
    this._heap[parentIndex] = this._heap[index];
    this._heap[index] = instance;
    compareWithParent(parentIndex);
  }

  compareWithParent(l);
}

BinaryHeap.prototype.removeRoot = function () {
  let l = this._heap.length;
  let instance = this._heap[l - 1];
  this._heap[l - 1] = this._heap[0];
  this._heap[0] = instance;
  const root = this._heap.pop();
  // then compare with child
  const compareWithChild = (index) => {
    let childrenIndices = [index * 2 + 1, index * 2 + 2];
    let i;
    if (this._compare(this._heap[childrenIndices[1]], this._heap[childrenIndices[0]])) {
      i = childrenIndices[1];
    } else {
      i = childrenIndices[0];
    }
    if (i > l - 2 || this._compare(this._heap[index], this._heap[i])) {
      return;
    }
    let instance = this._heap[i];
    this._heap[i] = this._heap[index];
    this._heap[index] = instance;
    compareWithChild(i);
  }

  compareWithChild(0);
  return root;
}
