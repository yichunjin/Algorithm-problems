/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    
    const result = [];
    const dfs = (cur, start) => {
        if (cur.length === k) {
            result.push(cur.slice());
            return;
        }
        for (let i = start; i <= n; i++) {
            cur.push(i);
            dfs(cur, i + 1);
            cur.pop();
        }
    }
    dfs([], 1);
    return result;
};