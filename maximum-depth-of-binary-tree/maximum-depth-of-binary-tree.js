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
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    let max = 0;
    let q = new Queue();
    q.enqueue(root);
    while (q.size() > 0) {
        max++;
        for (let i = q.size() -1; i >=0; i--) {
            let cur = q.dequeue();
            if (cur.left !== null) {
                q.enqueue(cur.left);
            }
            if (cur.right !== null) {
                q.enqueue(cur.right);
            }
        }
    }
    return max;
};