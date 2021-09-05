/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n <= 0) {
        return false;
    }
    let bitNumber = n.toString(2);
    let one = 0, zero = 0;
    for (let i = 0; i < bitNumber.length; i++) {
        if (bitNumber[i] === '1') {
            one++
        } else {
            zero++;
        }
    }
    if (one !== 1 || zero % 2 !== 0) {
        return false;
    }
    return true;
};