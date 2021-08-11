/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const nei = [[1,0], [0,1],[-1, 0], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]];
    
    const checkStatus = (i, j) => {
        // change to 2 if from 0 > 1
        // change to -1 if from 1 < 0
        let zero = 0;
        let one = 0;
        for (let n of nei) {
            let r = i + n[0];
            let c = j + n[1];
            if (r < 0 || c < 0 || r >= board.length || c >= board[r].length) {
                continue;
            }
            if (board[r][c] === 1 || board[r][c] === -1) {
                one++
            } else {
                zero++
            }
        }
        if (board[i][j] === 0 && one === 3) {
            return 2;
        }
        if (board[i][j] === 1) {
            if (one < 2 || one > 3) {
                return -1;
            }
        }
        return board[i][j]
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            board[i][j] = checkStatus(i, j);
        }
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === -1) {
                board[i][j] = 0
            } else if (board[i][j] === 2) {
                board[i][j] = 1;
            }
        }
    }
    return board
};