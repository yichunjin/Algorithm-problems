/**
 * Initialize your data structure here.
 */
var Logger = function() {
    this.storage = {};
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (!this.storage[message] || timestamp >= this.storage[message]){
        this.storage[message] = timestamp + 10;
        return true;
    }
    if (timestamp < this.storage[message]){
        return false
    }
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */