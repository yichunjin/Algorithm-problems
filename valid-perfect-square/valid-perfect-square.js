/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (Math.pow(num, 1/2) % 1 === 0) {
        return true;
    }
    return false;
};