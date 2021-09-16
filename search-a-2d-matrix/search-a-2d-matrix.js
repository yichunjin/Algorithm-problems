/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let r = matrix.length, c = matrix[0].length;
    for (let i = 0; i < r; i++) {
        if (target > matrix[i][c - 1]) {
            continue;
        }
        let start = 0, end = c - 1;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (matrix[i][mid] === target) {
                return true;
            }
            if (matrix[i][mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return false;
    }
    return false;
};