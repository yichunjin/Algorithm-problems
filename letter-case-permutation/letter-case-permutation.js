/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    const results = [];
    const dfs = (cur, i) => {
        if (cur.length === s.length || i === s.length) {
            results.push(cur.slice());
            return;
        }
        if (Number(s[i]) || s[i] === '0') {
            cur += s[i];
            dfs(cur, i + 1);
        } else {
            let up = s[i].toUpperCase();
            let low = s[i].toLowerCase();
            dfs(cur += up, i + 1);
            cur = cur.slice(0, -1);
            dfs(cur += low, i + 1);
        }

    }
    dfs("", 0);
    return results;

};