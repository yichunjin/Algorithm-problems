/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
        let res = 0;
        for (let i = 0; i < matrix.length; ++i) {
            for (let j = 0; j < matrix[0].length; ++j) {
                if (matrix[i][j] > 0 && i > 0 && j > 0) {
                    matrix[i][j] = Math.min(matrix[i - 1][j - 1], Math.min(matrix[i - 1][j], matrix[i][j - 1])) + 1;
                }
                res += matrix[i][j];
            }
        }
        return res;
};