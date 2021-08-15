/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function(x, y) {
    const memo = {};
    const move = (i, j) => {
        let key = i + ',' + j;
        if (memo[key]) {
            return memo[key];
        }
        if (i + j === 0) {
            return 0
        }
        if (i + j === 2) {
            return 2;
        }
        let ret = Math.min(move(Math.abs(i - 1), Math.abs(j - 2)), move(Math.abs(i - 2), Math.abs(j - 1))) + 1;
        memo[key] = ret;
        return ret;
    }
    return move(Math.abs(x), Math.abs(y))
};