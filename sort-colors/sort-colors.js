/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = [], mid = [], high = [];
    for ( let n of nums) {
        if (n > 1) {
            high.push(n);
        } else if (n < 1) {
            low.push(n);
        } else {
            mid.push(n);
        }
    }
    let res = low.concat(mid, high);
    for ( let i = 0; i < res.length; i++) {
        nums[i] = res[ i];
    }
};