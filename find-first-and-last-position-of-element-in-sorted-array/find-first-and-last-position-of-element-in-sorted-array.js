/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let result = [-1, -1];
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            result = [mid, mid];
            break;
        }
        if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    let l = result[0], r = result[0];
    while (nums[l] === target || nums[r] === target) {
        if (nums[l] === target) {
            result[0] = l;
        }
        if (nums[r] === target) {
            result[1] = r;
        }
        l--;
        r++;
    }
    return result;
};