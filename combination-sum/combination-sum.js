/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let results = [];
    var findSum = (i, cur, total) => {
        if (total === target) {
            results.push(cur.slice());
            return;
        }
        if (i >= candidates.length || total > target) {
            return;
        }
        cur.push(candidates[i])
        findSum(i, cur, total + candidates[i]);
        cur.pop();
        findSum(i + 1, cur, total);
    }
    findSum(0, [], 0);
    return results;
};