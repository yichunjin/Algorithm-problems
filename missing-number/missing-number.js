/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for (let i = 0; i < nums.length + 1; i++) {
        if (nums.indexOf(i) < 0) {
            return i;
        }
    }
};