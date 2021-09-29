
var MyHashMap = function() {
    this.keySpace = 2096;
    this.hashTable = [];
    for (let i = 0; i < this.keySpace; i++) {
        this.hashTable.push(new Bucket());
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    let hashKey = key % this.keySpace;
    this.hashTable[hashKey].update(key, value);
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    let hashKey = key % this.keySpace;
    return this.hashTable[hashKey].get(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    let hashKey = key % this.keySpace;
    return this.hashTable[hashKey].remove(key);
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

var Pair = function(first, second) {
    this.first = first;
    this.second = second;
}

var Bucket = function() {
    this.bucket = [];
}

Bucket.prototype.get = function(key) {
    for (let [k, v] of this.bucket) {
        if (k === key) return v;
    }
    return -1;
}

Bucket.prototype.update = function(key, value) {
    let found = false;
    for (let i = 0; i < this.bucket.length; i++) {
        let [k, v] = this.bucket[i];
        if (k === key) {
            this.bucket[i][1] = value;
            found = true;
            return;
        }
    }
    if (!found) {
        this.bucket.push([key, value]);
    }
}

Bucket.prototype.remove = function(key) {
    this.bucket.forEach((kv, i) => {
        if (key === kv[0]) {
            this.bucket.splice(i, 1);
        }
    })
}