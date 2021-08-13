/**
 * @param {string[]} wordsDict
 */
var WordDistance = function(wordsDict) {
    this.map = {};
    for (let i = 0; i < wordsDict.length; i++) {
        let word = wordsDict[i];
        if (!this.map[word]) {
            this.map[word] = [];
        }
        this.map[word].push(i);
    }
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    let order1 = this.map[word1].sort((a, b) => a- b);
    let order2 = this.map[word2].sort((a, b) => a- b);
    let res = Math.abs(order1[0] - order2[0]);
    let i = 0, j = 0;
    while ( i < order1.length && j < order2.length) {
        res = Math.min(Math.abs(order1[i] - order2[j]), res);
        if ( order1[i] < order2[j]) {
            i++;
        } else {j++}
    }
    return res;
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */