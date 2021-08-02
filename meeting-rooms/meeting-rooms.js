/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i< intervals.length; i++) {
        if (intervals[i + 1] === undefined) {
            return true;
        }
        if (intervals[i][1] > intervals[i + 1][0]) {
            return false;
        }
    }
    return true;
};