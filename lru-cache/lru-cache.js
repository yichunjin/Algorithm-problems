/**
 * @param {number} capacity
 */

var ListNode = function(key, val, prev = null, next = null) {
    this.key = key;
    this.val = val;
    this.prev = prev;
    this.next = next;
}

var LRUCache = function(capacity) {
    this.size = 0;
    this.limit = capacity;
    this.storage = {};
    this.left = new ListNode(0,0);
    this.right = new ListNode(0, 0);
    this.left.next = this.right;
    this.right.prev = this.left;
    
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.delete = function(node) {
    let prev = node.prev, next = node.next;
    prev.next = next;
    next.prev = prev;
}

LRUCache.prototype.addNode = function(node) {
    let prev = this.right.prev;
    prev.next = node;
    node.prev = prev;
    node.next = this.right;
    this.right.prev = node;
}

LRUCache.prototype.get = function(key) {
    if (key in this.storage) {
        let node = this.storage[key];
        this.delete(node);
        this.addNode(node);
        return node.val;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let cur = new ListNode(key, value);
    if (key in this.storage) {
        let node = this.storage[key];
        this.delete(node);
        this.size--;
    }
    this.addNode(cur);
    this.storage[key] = cur;
    this.size++;
    if (this.size > this.limit) {
        let node = this.left.next;
        this.delete(node);
        this.size--;
        delete this.storage[node.key];
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */