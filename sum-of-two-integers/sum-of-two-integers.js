/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let addtion = a ^ b;
    let carry = (a & b) << 1;
    if ((carry & addtion) !== 0) {
       return getSum(addtion, carry)
    }
    return addtion ^ carry;  
};