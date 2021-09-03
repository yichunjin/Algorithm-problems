/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    const dfs = (cur, used) => {
        if (cur.length === nums.length) {
            result.push(cur.slice());
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }
            cur.push(nums[i]);
            used[i] = true;
            dfs(cur, used);
            cur.pop();
            used[i] = false;
        }
    }
    let used = new Array(nums.length).fill(false);
    dfs([], used);
    return result;
};