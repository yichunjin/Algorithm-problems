/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const result = [];
    const maxHeap = new Heap((a, b) => {return a[0] + a[1] - b[0] - b[1]});
    if (nums1.length === 0 || nums2.length === 0 || k === 0) {
        return result;
    }
    
    for (let i = 0; i < nums1.length && i < k; i++) {
        maxHeap.insert([nums1[i], nums2[0], 0]);
    }
    
    while (k-- > 0 && maxHeap.size() !== 0) {
        let cur = maxHeap.removeRoot();
        result.push([cur[0], cur[1]]);
        if (cur[2] === nums2.length - 1) { continue; }
        maxHeap.insert([cur[0], nums2[cur[2] + 1], cur[2] + 1]);
    }
    return result;
};

var Heap = function(func, capacity = 1000) {
    this.limit = capacity;
    this._heap = [];
    this.compare = func ? func : (a, b) => { return a - b};
}

Heap.prototype.getRoot = function() {
    return this._heap[1] ? this._heap[1] : null;
}

Heap.prototype.removeRoot = function() {
    if (!this._heap[1]) {
        return null;
    }
    let res = this._heap[1];
    this._heap[1] = this._heap[this._heap.length - 1];
    this._heap[this._heap.length - 1] = res;
    this._heap.pop();
    this.down(1);
    return res;
}

Heap.prototype.size = function() {
    return this._heap.length - 1;
}

Heap.prototype.insert = function(obj) {
    if (!this.getRoot()) {
        this._heap[1] = obj;
        return this;
    }
    if (this.size() > this.limit) {
        if (this.compare(obj, this._heap[1]) > 0) {
            this._heap[1] = obj;
            this.down(1);
        }
    } else {
        this._heap.push(obj);
        this.up(this.size());
    }
}

Heap.prototype.up = function(index) {
    const parentIdx = Math.floor(index / 2);
    if (parentIdx < 1) {
        return;
    }
    if (this.compare(this._heap[parentIdx], this._heap[index]) > 0) {
        this.swap(parentIdx, index);
        this.up(parentIdx);
    } else {
        return;
    }
}

Heap.prototype.down = function(index) {
    const child1 = 2 * index, child2 = 2 * index + 1;
    let swapChild = child1;
    if (child1 > this.size()) {
        return;
    }
    if (child2 < this.size() && child2 <= this.limit && this.compare(this._heap[child1], this._heap[child2]) > 0) {
        swapChild = child2;
    }
    if (this.compare(this._heap[index], this._heap[swapChild]) > 0) {
        this.swap(index, swapChild);
        this.down(swapChild);
    } else {
        return;
    }
}

Heap.prototype.swap = function(i, j) {
    let temp = this._heap[i];
    this._heap[i] = this._heap[j];
    this._heap[j] = temp;
}