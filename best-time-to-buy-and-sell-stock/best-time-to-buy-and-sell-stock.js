/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowest = prices[0];
    let result = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - lowest > result) {
            result = prices[i] - lowest;
        }
        if (prices[i] < lowest) {
            lowest = prices[i];
        }  
    }
    return result;
};