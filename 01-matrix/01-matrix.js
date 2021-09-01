/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    
    let dist = [];
    
    for (let i = 0; i < mat.length; i++) {
        dist.push([])
        for (let j = 0; j < mat[i].length; j++) {
            dist[i][j] = Infinity;
            if (mat[i][j] !== 0) {
                if (j > 0) {
                    dist[i][j] = Math.min(1 + dist[i][j - 1], dist[i][j]);
                }
                if (i > 0) {
                    dist[i][j] = Math.min(1 + dist[i - 1][j], dist[i][j]);
                }
            } else {
                dist[i][j] = 0;
            }
        }
    }
    
    for (let i = mat.length - 1; i >= 0; i--) {
        for (let j = mat[i].length - 1; j >= 0; j--) {
            if (mat[i][j] !== 0) {
                if (i < mat.length - 1) {
                    dist[i][j] = Math.min(1 + dist[i + 1][j], dist[i][j]);
                }
                if (j < mat[i].length - 1) {
                    dist[i][j] = Math.min(1 + dist[i][j + 1], dist[i][j]);
                }
            }
        }
    }
    return dist;
};