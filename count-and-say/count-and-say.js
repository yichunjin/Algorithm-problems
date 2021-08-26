/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let map = {};
    map[1] = '1';
    
    const countSub = (num) => {
        let res = ''
        let count = 0;
        let cur = num[0];
        for (let i = 0; i < num.length; i++) {
            if (num[i] === cur) {
                count++;
            } else {
                res += count + cur.toString();
                count = 1;
                cur = num[i];
            }
        }
        if (count !== 0) {
            res += count + cur.toString();
        }
        return res;
    }
    
    for (let i = 2; i <= n; i++) {
        map[i] = countSub(map[i - 1]);
    }
    return map[n];
};