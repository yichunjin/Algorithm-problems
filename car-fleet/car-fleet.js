/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const cars = [];
    let res = 0;
    for (let i = 0; i < position.length; i++) {
        cars[i] = [position[i], (target - position[i]) / speed[i]];
    }
    let seperate = 0;
    cars.sort((a, b) => a[0] - b[0]);

    let cur = 0;
    for (let i = cars.length - 1; i >= 0 ; i--) {
        if (cars[i][1] > cur) {
            cur = cars[i][1];
            res++;
        }
    }
    return res;
};