/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let res = "";
    for (let str of strs) {
        res += str.length + ";" + str;
    }
    return res;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    let res = [];
    let i = 0;
    let n = s.length;
    while (i < n) {
        let l;
        for (let j = i; i < n; j++) {
            if (s[j] === ';') {
                l = Number(s.slice(i, j));
                i = j - 1;
                break;
            }
        }
        
        i += 2;
        res.push(s.slice(i, i + l));
        i += l;
    }
    return res;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */