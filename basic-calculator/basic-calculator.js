/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let q = new Queue();
    for (let i of s) {
        if (i !== ' ') {q.enqueue(i)};
    }
    q.enqueue('e')
    const helper = (q) => {
        let sum = 0;
        let num = 0;
        let operator = '+'
        
        while (q.size() > 0) {
            let c = q.dequeue();
            if (!isNaN(c)) {
                num = num*10 + Number(c)
            } else if (c === '(') {
                num = helper(q);
            } else {
                if (operator === '+') {
                    sum += num
                } else if (operator === '-') {
                    sum -= num;
                }
                if (c === ')') {
                    break
                } else {
                    num = 0;
                    operator = c;
                }
            }
        }
        return sum
    }
    return helper(q);

};