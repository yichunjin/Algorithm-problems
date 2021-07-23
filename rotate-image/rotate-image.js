/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
        let cur = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = cur;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length / 2; j++) {
          let cur = matrix[i][j];
          matrix[i][j] = matrix[i][matrix[i].length - j - 1];
          matrix[i][matrix[i].length - j - 1] = cur;
      }
  }
  return matrix;
};