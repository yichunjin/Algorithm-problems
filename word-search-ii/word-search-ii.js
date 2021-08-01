/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  let results = new Set();
  let visited = new Set();

  var Trie = function() {
      this.end = false;
      this.children = {};
  };
  Trie.prototype.addWord = function(word) {
      let cur = this;
      for (let i of word) {
          if (!cur.children[i]) {
              cur.children[i] = new Trie();
          }
          cur = cur.children[i];
      }
      cur.end = true;
  }
  let trie = new Trie();
  for (let w of words) {
    trie.addWord(w);
  }

  const dfs = (i, j, node, word) => {
      if (i < 0 || j < 0 || i >= board.length || j >= board[i].length ||
          !node.children[board[i][j]] ||
          visited.has(i + ',' + j)) {
          return;
      }
      visited.add(i + ',' + j);
      word += board[i][j];
      if (node.children[board[i][j]].end) {
          results.add(word);
      }
      dfs(i + 1, j, node.children[board[i][j]], word);
      dfs(i - 1, j, node.children[board[i][j]], word);
      dfs(i, j + 1, node.children[board[i][j]], word);
      dfs(i, j - 1, node.children[board[i][j]], word);
      visited.delete(i + ',' + j);
  }

  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
          dfs(i, j, trie, "");
      }
  }

  return [...results];
};