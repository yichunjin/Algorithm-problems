/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var sortTransformedArray = function(nums, a, b, c) {
    const quad = (n) => {
        return a*n*n + b*n + c;
    }
    const res = new Array(nums.length);
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        if (a > 0) {
            for (let i = nums.length - 1; i >= 0; i--) {
                if (quad(nums[start]) > quad(nums[end])) {
                    res[i] = quad(nums[start])
                    start++
                } else {
                    res[i] = quad(nums[end])
                    end--
                }
            }
        } else {
                for (let i = 0; i < nums.length; i++) {
                    if (quad(nums[start]) < quad(nums[end])) {
                        res[i] = quad(nums[start])
                        start++
                    } else {
                        res[i] = quad(nums[end])
                        end--
                    }
                }
        } 
    }
    return res;
};