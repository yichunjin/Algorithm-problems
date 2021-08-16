/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    let cost = 0;
    let memo = {};
    if (costs.length === 0) {
        return 0;
    }
    const paintCost = (n, color) => {
        if (memo[n + ',' + color]) {
            return memo[n + ',' + color];
        }
        let totalCost = costs[n][color];
        if (n === costs.length - 1) {
        } else if (color === 0) {
            totalCost += Math.min(paintCost(n + 1, 1), paintCost(n + 1, 2));
        } else if (color === 1) {
            totalCost += Math.min(paintCost(n + 1, 0), paintCost(n + 1, 2));
        } else {
            totalCost += Math.min(paintCost(n + 1, 1), paintCost(n + 1, 0));
        }
        memo[n + ',' + color] = totalCost;
        return totalCost;
    }
    return Math.min(paintCost(0, 0), paintCost(0, 1), paintCost(0, 2))
};