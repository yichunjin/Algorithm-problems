/**
 * Initialize your data structure here.
 */
var Trie = function(value = '') {
    this.end = false;
    this.value = value;
    this.children = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let cur = this;
  for (let i = 0; i < word.length; i++) {
      if (!cur.children[word[i]]) {
          cur.children[word[i]] = new Trie(word[i]);
      }
      cur = cur.children[word[i]]
  }
    cur.end = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let currentNode = this;
    for (let i of word) {
        if (!currentNode.children[i]) {
            return false;
        }
        currentNode = currentNode.children[i];
    }
    return currentNode.end;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let currentNode = this;
  for (let i of prefix) {
      if (!currentNode.children[i]) {
          return false;
      }
      currentNode = currentNode.children[i];
  }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */