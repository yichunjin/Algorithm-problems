/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let startTime = [];
    let endTime = [];
    for (let i of intervals) {
        startTime.push(i[0]);
        endTime.push(i[1]);
    }
    startTime.sort((a, b) => a- b);
    endTime.sort((a, b) => a - b);
    
    let s = 0;
    let e = 0;
    let max = 0;
    let count = 0;
    while (s < startTime.length) {
        if (startTime[s] < endTime[e]) {
            count++;
            s++;
        } else {
            count--;
            e++;
        }
        max = Math.max(max, count);
    }
    return max;
};