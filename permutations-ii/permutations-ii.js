/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const results = [];
    const counter = {};
    const numsSet = new Set(nums);
    
    for (let num of nums) {
        if (counter[num]) {
            counter[num]++;
        } else {
            counter[num] = 1;
        }
    }
  
    
    const dfs = (cur) => {
        if (cur.length === nums.length) {
            results.push(cur.slice());
            return;
        }
        
        for (let n of numsSet) {
            if (counter[n] <= 0) {
                continue;
            }
            cur.push(n);
            counter[n]--;
            dfs(cur);
            cur.pop();
            counter[n]++;
        }
    }
    
    dfs([]);
    
    return results;
};
