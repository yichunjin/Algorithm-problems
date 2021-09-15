/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const preSum = piles.slice();
    const memo = new Array(piles.length).fill(null).map((a) => new Array(piles.length));
    
    for (let i = piles.length - 2; i >= 0; i--) {
        preSum[i] += preSum[i + 1];
    }
    
    const dfs = (m, p) => {
        if (p + 2 * m >= piles.length) { return preSum[p]; }
        if (memo[m][p] > 0) { return memo[m][p]; }
        
        let take = 0, res = 0;
        for (let i = 1; i <= 2 * m; i++) {
            take = preSum[p] - preSum[p + i];
            let total = take + preSum[p + i] - dfs(Math.max(i, m), p + i);
            res = Math.max(res, total);
        }
        memo[m][p] = res;
        return res;
    }
    
    return dfs(1, 0);
};