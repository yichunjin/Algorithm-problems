/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let remainders = {};
    let count = 0;
    for (let t of time) {
        if (!remainders[t % 60]) {
            remainders[t % 60] = 0;
        }
        if (remainders[(60 - t % 60) % 60]) {
            count += remainders[(60 - t % 60) % 60]
        }
        remainders[t % 60]++;
    }
    return count;
};