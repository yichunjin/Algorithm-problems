/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    let result = 1;
    let currentR = x;
    for (let i = n; i > 0; i = Math.floor(i / 2)) {
        if (i % 2 === 1) {
            result *= currentR;
        }
        currentR *= currentR;
    }
    return result;
};