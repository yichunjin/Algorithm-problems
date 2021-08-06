/**
 * @param {string[]} wordsDict
 */
var WordDistance = function(wordsDict) {
    this.l = wordsDict.length;
    this.storage = {};
    for (let i = 0; i < wordsDict.length; i++) {
        if (this.storage[wordsDict[i]]) {
            this.storage[wordsDict[i]].push(i);
        } else {
           this.storage[wordsDict[i]] = [i]; 
        }  
    }
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    let min = this.l;
    let pos1 = this.storage[word1];
    let pos2 = this.storage[word2];
    for (let i = 0, j = 0; i< pos1.length && j< pos2.length;) {
       if (pos1[i] < pos2[j]) {
           min = Math.min(min, pos2[j] - pos1[i]);
           i++;
       } else {
          min = Math.min(min, pos1[i] - pos2[j]);
           j++;
       }
    }
    return min;
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */