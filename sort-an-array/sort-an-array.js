/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // Quick sort
    if (nums.length <= 1) {
        return nums;
    }
    let mid = Math.floor((nums.length - 1) / 2);
    
    let pivot = nums[mid];
    let low = [], high = [], middle = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            low.push(nums[i]);
        } else if (nums[i] > pivot) {
            high.push(nums[i])
        } else {
            middle.push(nums[i])
        }
    }
    return sortArray(low).concat(middle, sortArray(high));
};