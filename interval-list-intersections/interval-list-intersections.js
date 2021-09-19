/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    if (firstList.length === 0 || secondList.length === 0 ) {
        return [];
    }
    let results = [];
    let i = 0, j = 0;
    while (i < firstList.length && j < secondList.length) {
        let low = Math.max(firstList[i][0], secondList[j][0]);
        let high = Math.min(firstList[i][1], secondList[j][1])
        if (low <= high) {
            results.push([low, high]);
        }
        
        if (firstList[i][1] < secondList[j][1]) {
            i++;
        } else {
            j++;
        }
        
    }

    return results;
};