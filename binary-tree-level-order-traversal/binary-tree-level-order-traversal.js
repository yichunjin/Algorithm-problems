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
    let q = [root];
    while (q.length > 0) {
        let cur = [];
        let l = q.length;
        for (let i = 0; i < l; i++) {
            let node = q.shift();
            if (!node) {
                continue;
            }
            cur.push(node.val);
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }
        if (cur.length > 0) {
            res.push(cur);
        }
    }
    return res;
};