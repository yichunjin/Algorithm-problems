
var RandomizedSet = function() {
    this.storage = {};
    this.list = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.storage[val] !== undefined) {
        return false;
    }
    this.storage[val] = this.list.length;
    this.list[this.list.length] = val;
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.storage[val] === undefined) {
        return false;
    }
    let lastElement = this.list[this.list.length - 1];
    let idx = this.storage[val];
    this.list[idx] = lastElement;
    this.storage[lastElement] = idx;
    delete this.storage[val];
    this.list.pop();
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let randomIdx = Math.floor(Math.random() * this.list.length);
    return this.list[randomIdx];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */