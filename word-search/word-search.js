/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let result = false;
  let visited = {};
  const goDirection = (i, j, index) => {
      if (i < 0 || j < 0 || i >= board.length || j >= board[i].length || visited[[i,j]]) {
          return;
      }
      if (index === word.length - 1 && board[i][j] === word[index]) {
          result = true;
          return;
      }
      if (board[i][j] !== word[index]) {
          return;
      }
      visited[[i, j]] = true;
      goDirection(i, j + 1, index + 1);
      goDirection(i + 1, j, index + 1);
      goDirection(i, j - 1, index + 1);
      goDirection(i - 1, j, index + 1);
      delete visited[[i, j]];
  }
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === word[0]) {
              goDirection(i, j, 0)
          }
      }
  }
  return result;
};