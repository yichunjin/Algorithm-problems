/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const directions = [[0, 1],[0, -1],[1, 0],[-1, 0],[1, 1],[-1, 1],[1, -1],[-1, -1]];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            // 0 >> 1 change to 2
            // 1 >> 0 change to -1
            let cur = board[i][j];
            let one = 0;
            for (let d of directions) {
                let r = i + d[0], c = j + d[1];
                if (r < 0 || c < 0 || r >= board.length || c >= board[r].length) {
                    continue;
                }
                if (board[r][c] === 1 || board[r][c] === -1) {
                    one++;
                }
            }
            if (cur === 1) {
                if (one < 2 || one > 3) {
                    board[i][j] = -1;
                }
            } else if (cur === 0) {
                if (one === 3) {
                    board[i][j] = 2;
                }
            }
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === -1) {
                board[i][j] = 0;
            }
            if (board[i][j] === 2) {
                board[i][j] = 1;
            }
        }
    }
    return board;
};