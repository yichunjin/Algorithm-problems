/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */


var openLock = function(deadends, target) {
    let queue = new Queue()
    queue.enqueue('0000');
    let visited = {'0000':0}
    let ends = new Set(deadends);
    
    while (queue.size() > 0) {
            let cur = queue.dequeue();
            if (ends.has(cur)) {
                continue;
            }
            if (cur === target) {
                return visited[cur];
            }
            for (let i = 0; i < 4; i++) {
                // increment
                let c = (Number(cur[i]) === 9 ? 0 : Number(cur[i]) + 1);
                let s1 = cur.slice(0,i) + c + cur.slice(i+1);
                if (!ends.has(s1) && !visited[s1]) {
                   queue.enqueue(s1);
                    visited[s1] = visited[cur] + 1;
                }

                // decrement
                let s2 = cur.slice(0,i) + (Number(cur[i]) === 0 ? 9 : Number(cur[i]) - 1) + cur.slice(i+1);;
                if (!ends.has(s2) && !visited[s2]) {
                   queue.enqueue(s2);
                    visited[s2] = visited[cur] + 1;
                }
            }
    }
    
    return -1;
};

