/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const parentheses = {'(':')', '[':']','{':'}'}
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (parentheses[s[i]]) {
            stack.push(s[i]);
        } else {
            if (parentheses[stack.pop()] !== s[i]) {
                return false;
            }
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
};