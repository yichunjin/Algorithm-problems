/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = {0:0};
    for (let i = 1; i <= amount; i++) {
        dp[i] = amount + 1;
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    if (dp[amount] > amount) {
        return -1;
    }
    
    return dp[amount];
    
};