/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let res = 0, sum = 0;
    let map = {'0' : 1};
    for (let start = 0; start < nums.length; start++) {
        sum += nums[start];
        if ((sum - k) in map) {
            res += map[(sum - k)];
        }
        map[sum] = (sum in map) ? map[sum] + 1 : 1;
    }
    return res;
};