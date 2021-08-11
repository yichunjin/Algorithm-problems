/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let queue = s.replace(/\s/g,"").split('');
    queue.push(' ');
    const helper = (string) => {
        let num = 0, prev = 0, sum = 0;
        let prevOp = '+';
        while (string.length > 0) {
            let c = string.shift();
            if (c >= '0' && c <= '9') {
                num = num * 10 + Number(c) - '0'
            } else if (c === '(') {
                num = helper(string);
            } else {
                switch (prevOp) {
                    case '+':
                        sum += prev;
                        prev = num;
                        break;

                    case '-':
                        sum += prev;
                        prev = -num;
                        break;

                    case '*':
                        prev *= num;
                        break;

                    case '/':
                        if (prev < 0 !== num < 0) {
                            prev = Math.ceil(prev / num);
                        } else {
                           prev = Math.floor(prev / num); 
                        }
                        break
                }
                if (c === ')') {
                    break;
                }
                prevOp = c;
                num = 0;
            }
        }
        return sum + prev;
    }

    return helper(queue);
};