/**
 * @param {number} n
 * @return {number}
 */
var minimumOneBitOperations = function(n) {
        let res = 0
        while (n) {
            res = -res - (n ^ (n - 1))
            n &= n - 1  
        }
        return Math.abs(res)
};