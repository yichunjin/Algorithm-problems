/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    let hasDigit = false;
    let hasE = false;
    let hasDot = false;
    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        if (!isNaN(c)) {
            hasDigit = true;
        } else if (c === '+' || c=== '-') {
            if (i > 0 && s[i - 1] !== 'e' && s[i - 1] !== 'E') {
                return false;
            }
        } else if (c === 'e' || c === 'E') {
            if (hasE || !hasDigit) {
                return false;
            }
            hasE = true;
            hasDigit = false
        } else if (c === '.') {
            if (hasDot || hasE) {
                return false;
            }
            hasDot = true;
        } else {
            return false;
        }
    }
    return hasDigit;
};