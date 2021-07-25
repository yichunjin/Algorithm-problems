/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let inserted = [];
    if (intervals.length === 0) {
        inserted.push(newInterval)
    }
    for (let i = 0; i < intervals.length; i++) {
        if (newInterval[0] > intervals[i][1]) {
            inserted.push(intervals[i]);
            if (i + 1 === intervals.length || newInterval[1] < intervals[i + 1][0]) {
                inserted.push(newInterval);
            }
        } else if (intervals[i][0] > newInterval[1]) {
            if (inserted.length === 0) {
                inserted.push(newInterval)
            }
            inserted.push(intervals[i]);
        } else {
            newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
            if (newInterval[1] <= intervals[i][1]) {
                newInterval[1] = intervals[i][1];
                inserted.push(newInterval);
            } else {
                if (i + 1 === intervals.length || newInterval[1] < intervals[i + 1][0]) {
                    inserted.push(newInterval)
                }
            }
        }
    }
    return inserted;
};