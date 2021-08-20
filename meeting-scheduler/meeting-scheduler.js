/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
var minAvailableDuration = function(slots1, slots2, duration) {
    let start;
    let i = 0, j = 0;
    slots1.sort((a, b) => a[0] - b[0]);
    slots2.sort((a, b) => a[0] - b[0]);
    while (i < slots1.length && j < slots2.length) {
        if (slots1[i][0] > slots2[j][0]) {
            start = slots1[i][0];
            if (slots2[j][1] - start >= duration && slots1[i][1] - start >= duration) {
                return [start, start + duration];
            }
        } else {
            start = slots2[j][0];
            if (slots1[i][1] - start >= duration && slots2[j][1] - start >= duration) {
                return [start, start + duration];
            }
        }
        if (slots1[i][1] < slots2[j][1]) {
            i++
        } else {
            j++
        }
    }
    return [];
};