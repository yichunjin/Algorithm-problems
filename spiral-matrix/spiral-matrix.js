/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let result = [];
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    let left = 0
    let top = 0;
    let size = matrix.length * matrix[0].length;
    while (result.length < size) {
        for (let i = left; i < right + 1 && result.length < size; i++) {
            result.push(matrix[top][i]);
        }
        top++;
        for (let i = top; i < bottom + 1 && result.length < size; i++) {
            result.push(matrix[i][right]);
        }
        right--;
        for (let i = right; i > left - 1 && result.length < size; i--) {
            result.push(matrix[bottom][i]);
        }
        bottom--;
        for (let i = bottom; i > top - 1 && result.length < size; i--) {
            result.push(matrix[i][left])
        }
        left++;
    }
    return result;
};