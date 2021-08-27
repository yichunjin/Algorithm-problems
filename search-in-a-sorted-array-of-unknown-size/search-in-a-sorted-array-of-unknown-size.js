/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) {
    let i = 10;
    while (reader.get(i) < target) {
        i *=10;
    }
    let start = 0, end = i;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (reader.get(mid) === target) {
            return mid;
        }
        if (reader.get(mid) === Math.pow(2, 31) - 1 || reader.get(mid) > target ) {
            end = mid - 1;
            } else {
            start = mid + 1;
        }
    }
    return -1;
};