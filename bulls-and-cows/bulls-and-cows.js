/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let a = 0, b = 0;
    let map = {};
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            a++;
        } else {
            if (map[guess[i]] > 0) {
                b++;
            }
            if (map[secret[i]] < 0) {
                b++;
            }
            if (!map[guess[i]]) {
                map[guess[i]] = 0;
            }
            if (!map[secret[i]]) {
                map[secret[i]] = 0;
            }
            map[guess[i]]--;
            map[secret[i]]++;
        }
    }
    return a + 'A' + b + 'B';
};