/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result = [];
    for ( let n of nums) {
        result.push(n*n);
    }
    result.sort((a, b) => a - b);
    return result;
};