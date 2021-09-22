/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let prev = 0;
    for (let i = 0; i < flowerbed.length ; i++) {
        if (prev === 0 && flowerbed[i] === 0 && (flowerbed[i + 1] === undefined || flowerbed[i + 1] === 0) ) {
            n--
            flowerbed[i] = 1;
        }
        prev = flowerbed[i]
    }
    return (n <= 0);
};
