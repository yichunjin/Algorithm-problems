/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let start = 0, end = arr.length - k;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (x - arr[mid] > arr[mid + k] - x) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    let result = [];
    for (let i = start; i < start + k; i++) {
        result.push(arr[i]);
    }
    return result;
};