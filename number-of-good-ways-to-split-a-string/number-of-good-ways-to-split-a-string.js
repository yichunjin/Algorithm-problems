/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
    let p = {}, q = {};
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in q)){
            q[s[i]] = 1;
        } else {
            q[s[i]]++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in p)) {
            p[s[i]] = 1;
        } else {
            p[s[i]]++;
        }
        q[s[i]]--;
        if (q[s[i]] === 0) {
            delete q[s[i]];
        }
        if (Object.keys(p).length === Object.keys(q).length) {
            res++;
        }
    }
    return res;
};