/**
 * Initialize your data structure here
        @param maxNumbers - The maximum numbers that can be stored in the phone directory.
 * @param {number} maxNumbers
 */
var PhoneDirectory = function(maxNumbers) {
    this.max = maxNumbers;
    this.bool = new Array(this.max).fill(false);
    this.n = 0;
};

/**
 * Provide a number which is not assigned to anyone.
        @return - Return an available number. Return -1 if none is available.
 * @return {number}
 */
PhoneDirectory.prototype.get = function() {
    for (let i = this.n; i < this.bool.length; i++) {
        if (!this.bool[i]) {
            this.bool[i] = true;
            this.n = i + 1;
            return i;
        }
    }
    return -1;
};

/**
 * Check if a number is available or not. 
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function(number) {
    if (number < this.max) {
        if (!this.bool[number]) {
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
    if (number < this.max) {
        this.bool[number] = false;
        if (this.n > number) {
            this.n = number;
        }
    }
};

/** 
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */