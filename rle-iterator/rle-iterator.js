/**
 * @param {number[]} encoding
 */
var RLEIterator = function(encoding) {
    this.numbers = {};
    this.idx = 0;
    let key = 0;
    for (let i = 0; i < encoding.length; i++) {
        
        if (encoding[i] === 0) {
            i++;
            continue;
        }
        key += encoding[i];

        this.numbers[key] = encoding[i + 1];
        i++;
    }
    this.keys = Object.keys(this.numbers).sort((a, b) => a - b);
};

/** 
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function(n) {
    this.idx += n;
    for (let k of this.keys) {
        k = Number(k)
        if (this.idx <= k ) {
            return this.numbers[k];
        }
    }
    return -1;
};

/** 
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(encoding)
 * var param_1 = obj.next(n)
 */