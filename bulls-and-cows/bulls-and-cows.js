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
           map[secret[i]] = map[secret[i]] + 1 || 1;  
        }
    }
    for (let i = 0; i < guess.length; i++) {
        if (secret[i] !== guess[i]) {
            if (map[guess[i]] > 0){
                B++;
                map[guess[i]]--;
            }
        }
    }

    return A + 'A' + B + 'B';
};