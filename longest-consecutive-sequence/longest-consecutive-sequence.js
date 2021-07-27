/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let mySet = new Set(nums);
    let max = 0;
    for (let n of nums) {
        if (!mySet.has(n - 1)) {
            let length = 0;
            while (mySet.has(n + length)) {
                length++;
            }
            max = Math.max(max, length);
        }
    }
    return max;
};