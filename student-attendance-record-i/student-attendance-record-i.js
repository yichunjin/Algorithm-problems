/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let countAbsent = 0, countLate = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'L') { 
            countLate++;
        } else {
            countLate = 0;
            if (s[i] === 'A') {
                countAbsent++;
            }
        }
        if (countAbsent >= 2 || countLate >= 3) {
            return false;
        }
    }
    
    return true;
};