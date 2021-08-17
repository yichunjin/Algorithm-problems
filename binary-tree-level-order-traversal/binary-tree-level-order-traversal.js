/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    let res = [];
    let q = new Queue();
    q.enqueue(root);
    while(q.size() > 0) {
        let cur = [];
        let l = q.size();
        for (let i = 0; i< l; i++) {
            let c = q.dequeue();
            cur.push(c.val);
            if (c.left) {
                q.enqueue(c.left);
            }
            if (c.right) {
                q.enqueue(c.right);
            }
        }
        if (cur.length > 0) {
            res.push(cur);
        }
    }
    return res;
};