/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let end = intervals[0][1];
    let prev = 0;
    let count = 0;
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[prev][1] > intervals[i][0]) {
            if (intervals[prev][1] > intervals[i][1]) {
                prev = i;
            }
            count++;
        } else {
            prev = i;
        }
    }
    return count;
};