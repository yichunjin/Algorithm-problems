/**
 * @param {number} capacity
 */
var ListNode = function (key, val) {
  this.key = key;
  this.val = val;
  this.next = this.prev = null;
};



var LRUCache = function(capacity) {
    this.storage = {};
    this.size = 0;
    this.limit = capacity;
    this.left = new ListNode(0, 0);
    this.right = new ListNode(0, 0);
    this.left.next = this.right;
    this.right.prev = this.left;
};

/** 
 * @param {number} key
 * @return {number}
 */

LRUCache.prototype.remove = function(node) {
    let prev = node.prev, next = node.next;
    prev.next = next;
    next.prev = prev;
};

LRUCache.prototype.insert = function(node) {
    let prev = this.right.prev;
    let right = this.right;
    prev.next = node;
    right.prev = node;
    node.next = right;
    node.prev = prev;
};

LRUCache.prototype.get = function(key) {
    if (this.storage[key]) {
        this.remove(this.storage[key]);
        this.insert(this.storage[key]);
        return this.storage[key].val;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */

LRUCache.prototype.put = function(key, value) {
    let node = new ListNode(key, value);
    if (this.storage[key]) {
        this.remove(this.storage[key]);
        this.size--;
    }
    this.storage[key] = node;
    this.insert(node);
    this.size++;
    
    if (this.size > this.limit) {
        let lru = this.left.next;
        this.remove(lru);
        this.size--;
        delete this.storage[lru.key];
    }
};