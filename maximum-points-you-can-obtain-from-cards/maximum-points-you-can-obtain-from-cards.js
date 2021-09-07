/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let frontScore = 0, rearScore = 0;
    for (let i = 0; i < k; i++) {
        frontScore += cardPoints[i];
    }
    let max = frontScore;
    for (let i = k - 1; i >= 0; i--) {
        rearScore += cardPoints[cardPoints.length - k + i];
        frontScore -= cardPoints[i]
        max = Math.max(max, rearScore + frontScore);
    }
    return max;
};