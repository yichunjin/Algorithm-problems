/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const res = [];
    const q = [];
    let l = 0, r = 0;
    while (r < nums.length) {
        while (q.length > 0 && nums[q[q.length - 1]] < nums[r]) {
            q.pop();
        }
        q.push(r)
        if (l > q[0]) {
            q.shift();
        }
        if (r + 1 >= k) {
            res.push(nums[q[0]]);
            l++;
        }
        r++;
    }
    return res;
};