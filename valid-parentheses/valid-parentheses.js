/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const par = {'(':')', '{':'}', '[':']'};
    let stack = [];
    for (let i of s) {
        if (par[i]) {
            stack.push(i)
        } else {
            if (par[stack.pop()] !== i) {
                return false;
            }
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
};