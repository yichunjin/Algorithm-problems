/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let map = {}, window = {};
    let res = '';
    let count = 0, have = 0;

    for (let i = 0; i < t.length; i++) {
        if (map[t[i]]) {
            map[t[i]]++;
        } else {
            map[t[i]] = 1;
            count++;
        }
    }

    let l = 0;
    for (let r = 0; r < s.length; r++) {
        let n = s[r];
        if (window[n]) {
            window[n]++;
        } else if (map[n]) {
            window[n] = 1;
        }
        if (window[n] && window[n] === map[n]) {
            have++
        }
        while (have === count) {
            if (res !== '' && r-l+1 < res.length || res === '') {
                res = s.slice(l, r+1)
            }
            if (window[s[l]]) {
                window[s[l]]--;
                if (window[s[l]] < map[s[l]]) {
                    have--;
                }
            }
            l++;
        }
    }

    return res
};