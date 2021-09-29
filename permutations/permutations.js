/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const results = [];
    const used = new Array(nums.length).fill(false);
    
    const dfs = (cur) => {
        if (cur.length === nums.length) {
            results.push(cur.slice());
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }
            cur.push(nums[i]);
            used[i] = true;
            dfs(cur);
            cur.pop();
            used[i] = false;
        }
    }
    
    dfs([]);
    
    return results;
};