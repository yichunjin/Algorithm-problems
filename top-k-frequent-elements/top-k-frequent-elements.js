/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {};
    for (let n of nums) {
        map[n] = map[n] ? map[n] + 1 : 1;
    }
    const minHeap = new Heap((a, b) => a.freq - b.freq, k);
    for (let key in map) {
        minHeap.insert({
            num: key,
            freq: map[key]
        })
    }
    const res = [];
    for (let i = 1; i < minHeap._heap.length; i++) {
        res.push(Number(minHeap._heap[i].num));
    }
    return res;
}

var Heap = function(func, capacity = 1000) {
    this.limit = capacity;
    this._heap = [];
    this.compare = func ? func : (a, b) => { return a - b};
}

Heap.prototype.getRoot = function() {
    return this._heap[1] ? this._heap[1] : null;
}

Heap.prototype.size = function() {
    return this._heap.length;
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
        this.up(this.size() - 1);
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
    if (child1 > this.limit) {
        return;
    }
    if (child2 <= this.limit && this.compare(this._heap[child1], this._heap[child2]) > 0) {
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