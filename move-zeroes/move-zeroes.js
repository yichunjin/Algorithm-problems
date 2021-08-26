/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let result = new Array(nums.length).fill(0);
    let i = 0;
    for (let n of nums) {
        if (n !== 0) {
            result[i] = n;
            i++;
        }
    }
    for (let j = 0; j < nums.length; j++) {
        nums[j] = result[j]
    }
    
};