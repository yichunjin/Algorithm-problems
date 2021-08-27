/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let min = nums[0];
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        min = Math.min(nums[mid], min);
        if (nums[mid] > nums[end]) {
            start = mid + 1;
        } else {
            end = mid - 1
        }
    }
    return min;
    
};