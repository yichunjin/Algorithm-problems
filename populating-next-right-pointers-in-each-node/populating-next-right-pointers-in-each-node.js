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
    let q = [root];
    while (q.length > 0) {
        let l = q.length;
        while (l > 0) {
            let cur = q.shift();
            if (l === 1) {
                cur.next = null;
            } else {
                cur.next = q[0];
            }
            if (cur.left) {
                q.push(cur.left);
            }
            if (cur.right) {
                q.push(cur.right);
            }
            l--;
        }

    }
    return root;
};