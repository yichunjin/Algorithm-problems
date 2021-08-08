/**
 * initialize your data structure here.
 */
var MaxStack = function() {
    this.stack = [];
    this.max = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
    this.stack.push(x);
    if (this.max.length === 0 || x > this.max[this.max.length - 1]) {
        this.max.push(x);
    } else {
        this.max.push(this.max[this.max.length - 1]);
    }
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
    if (this.stack.length === 0) {
        return;
    }
    let i = this.stack.pop();
    this.max.pop();
    return i;
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    if (this.stack.length === 0) {
        return;
    }
    let i = this.stack[this.stack.length - 1];
    return i;
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
    if (this.max.length === 0) {
        return;
    }
    let i = this.max[this.max.length - 1];
    return i;
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
    if (this.max.length === 0) {
        return;
    }
    let temp = [];
    let i = this.stack.pop();
    let j = this.max.pop();
    while (i !== j) {
        temp.push(i);
        i = this.stack.pop();
        j = this.max.pop();
    }
    while(temp.length !== 0) {
        this.push(temp.pop());
    }
    return i;
};

/** 
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */