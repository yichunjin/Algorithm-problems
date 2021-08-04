/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    if (n === 0) {
        return [0]
    }
    let ans = new Array(n).fill(0);
    
    for (let i = 1; i <= n; i++) {
        ans[i] = ans[i & (i - 1)] + 1;  
    }
    
    return ans;
};