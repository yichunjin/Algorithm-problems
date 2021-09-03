/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.prefixSums = new Array(w.length).fill(0);
    this.totalSum = 0;
    for (let i = 0; i < w.length; i++) {
        
        this.totalSum += w[i];
        this.prefixSums[i] = this.totalSum;
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let target = this.totalSum * Math.random();
    let i = 0;
    for (; i < this.prefixSums.length; i++) {
        if (target < this.prefixSums[i]) {
            return i;
        }
    }
    return i - 1;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */