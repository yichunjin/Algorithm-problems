/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let sum = '';
    for (; i >= 0 || j >=0 || carry > 0; i--, j--) {
        let digit1 = i < 0 ? 0 : num1[i] - '0';
        let digit2 = j < 0 ? 0 : num2[j] - '0';
        let sumDigit = digit1 + digit2 + carry;
        sum = `${sumDigit % 10}${sum}`;
        carry = Math.floor(sumDigit / 10);
    }
    return sum;
};