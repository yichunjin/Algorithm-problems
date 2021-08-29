/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
    nums.sort((a, b) => {
        if (a.length !== b.length){
            return b.length - a.length;
        } else {
            for (let i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) {
                    return b[i] - a[i];
                }
            }
        }
        return 0;
    });
    return nums[k - 1];
};