/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    
    const collapse = (asteroids) => {
        if (asteroids.length < 2) {
            return asteroids;
        }
        let result = [];
            for (let i = 1; i < asteroids.length; i++) {
            if (asteroids[i] * asteroids[i - 1] < 0 && asteroids[i - 1] > asteroids[i]) {
                if (Math.abs(asteroids[i]) < Math.abs(asteroids[i - 1])) {
                    result.push(asteroids[i - 1])
                } else if (Math.abs(asteroids[i]) > Math.abs(asteroids[i - 1])) {
                    result.push(asteroids[i])
                }
                i++;
            } else {
                result.push(asteroids[i - 1]);
            }
            if (i === asteroids.length - 1) {
                result.push(asteroids[i])
            }
        }
        if (asteroids.length !== result.length) {
           result = collapse(result);
        }
        return result;
    }
    return collapse(asteroids);
};