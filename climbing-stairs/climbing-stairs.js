/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 3) {
        return n;
    }
    let dp1 = 1, dp2 = 2;
    for (let i = 3; i <= n; i++) {
        let cur = dp1 + dp2;
        dp1 = dp2;
        dp2 = cur
    }
    return dp2;
    
};