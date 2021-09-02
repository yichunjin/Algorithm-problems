/**
 * Initialize your data structure here
        @param maxNumbers - The maximum numbers that can be stored in the phone directory.
 * @param {number} maxNumbers
 */
var PhoneDirectory = function(maxNumbers) {
    this.q = new Queue();
    this.asigned = new Set();
    for (let i = 0; i < maxNumbers; i++) {
        this.q.enqueue(i);
    }
    this.max = maxNumbers;
};

/**
 * Provide a number which is not assigned to anyone.
        @return - Return an available number. Return -1 if none is available.
 * @return {number}
 */
PhoneDirectory.prototype.get = function() {
    if (this.q.size() === 0) {
        return -1;
    }
    let number = this.q.dequeue();
    this.asigned.add(number);
    return number;
};

/**
 * Check if a number is available or not. 
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function(number) {
    if (number < this.max) {
        if (!this.asigned.has(number)) {
            return true;
        }
    }
    return false;
};

/**
 * Recycle or release a number. 
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function(number) {
    if (this.asigned.has(number)) {
        this.asigned.delete(number);
        this.q.enqueue(number);
    }
};

/** 
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */