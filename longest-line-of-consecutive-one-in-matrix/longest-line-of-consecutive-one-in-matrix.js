/**
 * @param {number[][]} mat
 * @return {number}
 */
var longestLine = function(mat) {
    let r = mat.length, c = mat[0].length;
    let result = 0;
    
    const count = (i, j) => {
        let res = [0, 0, 0, 0];
        if (i - 1 >= 0 && j - 1 >= 0) {
            res = [mat[i - 1][j][0], mat[i - 1][j - 1][1], mat[i][j - 1][2], 0];
            if ( j + 1 < c) {
                res[3] = mat[i - 1][j + 1][3]
            }
        } else if (i - 1 >= 0) {
            res[0] = mat[i - 1][j][0];
            if ( j + 1 < c) {
                res[3] = mat[i - 1][j + 1][3]
            }
        } else if (j - 1 >= 0) {
            res[2] = mat[i][j - 1][2];
        }
        
        if (mat[i][j] === 1) {
            for (let i = 0; i < res.length; i++) {
                res[i] += 1
            }
        }
        return res;
    }
    
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (mat[i][j] === 0) {
                mat[i][j] = [0,0,0, 0]
            } else {
                mat[i][j] = count(i, j);
                result = Math.max(result, Math.max(...mat[i][j]))
            }
        }
    }
    
    return result
};