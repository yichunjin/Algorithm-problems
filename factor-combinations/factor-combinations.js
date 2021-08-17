/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function(n, si = 2) {
    let res = [];
    for (let i = si; i*i <= n; i++) {
        if (n % i === 0) {
            let next = n / i;
            res.push([i, next]);
            
            for (let arr of getFactors(next, i)) {
                res.push([i, ...arr]);
            }
        }
    }
    return res;
};