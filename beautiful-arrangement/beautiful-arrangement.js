/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
    let count = 0;
    let nums = new Array(n);
    
    
    const permute = (nums, l) => {
        if (l === nums.length) {
            count++;
        }
        for (let i = l; i < nums.length; i++) {
            swap(nums, i, l);
            if (nums[l] % (l + 1) === 0 || (l + 1) % nums[l] === 0) {
                permute(nums, l + 1);
            }
            swap(nums, i, l);
        }
    }
    
    const swap = (nums, x, y) => {
        let temp = nums[x];
        nums[x] = nums[y];
        nums[y] = temp;
    }
    
    for (let i = 1; i <= n; i++) {
        nums[i - 1] = i;
    }
    permute(nums, 0);
    return count;
};

