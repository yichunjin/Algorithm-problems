/**
 * @param {number[][]} mat
 * @return {number}
 */
var longestLine = function(mat) {
    if (mat.length === 0) { return 0; }
    
    let result = 0;
    const dp = new Array(mat[0].length).fill(null).map((a) => new Array(4));
    for (let i = 0; i < mat.length; i++) {
        let old = 0;
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1) {
                dp[j][0] = j > 0 ? dp[j - 1][0] + 1 : 1;
                dp[j][1] = i > 0 ? dp[j][1] + 1 : 1;
                let prev = dp[j][2];
                dp[j][2] = ( i > 0 && j > 0) ? old + 1 : 1;
                old = prev;
                dp[j][3] = (i > 0 && j < mat[0].length - 1) ? dp[j + 1][3] + 1 : 1;
                result = Math.max(result, Math.max(Math.max(dp[j][0], dp[j][1]), Math.max(dp[j][2], dp[j][3])));
            } else {
                old = dp[j][2];
                dp[j][0] = dp[j][1] = dp[j][2] = dp[j][3] = 0;
            }
            
        }
    }
    return result;
};