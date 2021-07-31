/**
 * Initialize your data structure here.
 */


var WordDictionary = function(value = '') {
    this.end = false;
    this.value = value;
    this.children = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let cur = this;
    for (let i of word) {
        if (!cur.children[i]) {
            cur.children[i] = new WordDictionary(i);
        }
        cur = cur.children[i];
    }
    cur.end = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  let cur = this;
  const dfs = (j, cur) => {
      for (let i = j; i < word.length; i++) {
          if (word[i] === '.') {
              for (let child of Object.values(cur.children)) {
                  if (dfs(i + 1, child)) {
                      return true;
                  }
              }
              return false;
          } else {
              if (!cur.children[word[i]]) {
                  return false;
              }
          }
          cur = cur.children[word[i]];
      }
      return cur.end;
  }
  return dfs(0, cur);

};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */