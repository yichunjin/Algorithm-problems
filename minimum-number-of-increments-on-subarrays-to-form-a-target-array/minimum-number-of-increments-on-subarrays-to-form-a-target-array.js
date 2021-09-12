/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function(target) {
    let res = 0, pre = 0;
    for (let t of target) {
        res += Math.max(t - pre, 0);
        pre = t;
    }
    return res;
};