/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    s = s.replace(/\s\s+/gm, " ");
    let res = s.split(' ').reverse();
    for (let i = 0; i < res.length; i++) {
        let r = res[i]
        if (r === "" || r === " ") {
            res.splice(i, 1)
        }
    }
    return res.join(' ');
};