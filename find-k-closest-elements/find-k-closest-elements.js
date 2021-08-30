/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let l = 0, r = arr.length - k;
    while ( l < r) {
        let mid = Math.floor((l + r) / 2 );
        if (x - arr[mid] > arr[mid + k] - x) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    const result = [];
    for (let i = l; i < l + k; i++) {
        result.push(arr[i]);
    }
    return result;
};