/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let max = Math.max(...piles);
    let res = max;
    let l = 1, r = max;
    
    const countTime = (k) => {
        let count = 0;
        for (let pile of piles) {
            count += Math.ceil(pile / k);
        }
        return count;
    }
    
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let t = countTime(mid);
        if (t <= h) {
            res = Math.min(mid, res);
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return res;
};