/**
 * Initialize your data structure here.
 */
var TimeMap = function() {
    this.storage = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!(key in this.storage)) {
        this.storage[key] = {};
    }
    this.storage[key][timestamp] = value;
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (key in this.storage) {
            let cur = this.storage[key];
        while (timestamp > 0) {
            if (timestamp in this.storage[key]) {
                return this.storage[key][timestamp]
            }
            timestamp--;
        }

        
    }
    return '';
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */