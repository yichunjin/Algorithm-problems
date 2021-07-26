/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let results = [];
    for (let i = 0; i < m; i++) {
        results.push([]);
        for (let j = 0; j < n; j++) {
            results[i].push(0);
            if ( i === 0 || j === 0) {
                results[i][j] = 1;
            } else {
                results[i][j] = results[i][j - 1] + results[i - 1][j];
            }
        }
    }
    return results[m - 1][n - 1];
};