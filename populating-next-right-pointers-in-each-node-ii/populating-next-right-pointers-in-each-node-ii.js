/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) {
        return root;
    }
    
    const q = [root];
    q.push(null);
    while (q.length > 0) {
        let cur = q.shift();
        if (cur === null && q.length > 0) {
            q.push(null)
        } else if (cur === null) {
            break;
        } else {
            cur.next = q[0]
            if (cur.left) {
                q.push(cur.left)
            }
            if (cur.right) {
                q.push(cur.right)
            }
        }

    }
    
    return root;
};