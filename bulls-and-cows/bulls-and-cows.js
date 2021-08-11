/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let map = {};
    let A = 0;
    let B = 0;
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            A++;
        } else {
            if (map[secret[i]] < 0) {
                B++;
            }
            if (map[guess[i]] > 0) {
                B++;
            }
            if (!map[secret[i]]) {
                map[secret[i]] = 0
            }
            if (!map[guess[i]]) {
                map[guess[i]] = 0
            }
           map[secret[i]]++
            map[guess[i]]--
        }
    }


    return A + 'A' + B + 'B';
};