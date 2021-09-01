/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const l1 = word1.length, l2 = word2.length;
    let memo = [];
    
    for (let i = 0; i < l1 + 1; i++) {
        memo.push([]);
        for (let j = 0; j < l2 + 1; j++) {
            if (i === 0) {
                memo[i][j] = j;
            } else if (j === 0) {
                memo[i][j] = i;
            } else if (word1[i - 1] === word2[j - 1]) {
                memo[i][j] = memo[i - 1][j - 1];
            } else {
                memo[i][j] = 1 + Math.min(memo[i - 1][j], memo[i][j - 1], memo[i - 1][j - 1]);
            }
        }
    }
    return memo[l1][l2];
};