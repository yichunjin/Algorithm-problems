/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function(wordlist, master) {
    const match = (a, b) => {
        let m = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] === b[i]) {
                m++;
            }
        }
        return m;
    }
    
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
    }
    let guessed = {};
    for (let i = 0, n = 0; i < 10 && n < 6; i++) {
        const count = {};
        for (let w1 of wordlist) {
            for (let w2 of wordlist) {
                if (match(w1, w2) === 0) {
                    if (!count[w1]) {
                        count[w1] = 0;
                    }
                    count[w1]++;
                }
            }
        }
        
        let miniMax = [null, Infinity];
        for (let w of wordlist) {
            if (!guessed[w]) {
                if (!count[w]) {
                    count[w] = 0;
                }
                if (count[w] <= miniMax[1]) {
                    miniMax = [w, count[w]];
                }
            }
        }
        // let randomIdx = getRandomIntInclusive(0, wordlist.length - 1);
        let guess = miniMax[0];
        n = master.guess(guess);
        guessed[guess] = true;
        
        const wordList2 = [];
        for (let w of wordlist) {
            if (match(guess, w) === n) {
                wordList2.push(w);
            }
        }
        wordlist = wordList2;
    }
};