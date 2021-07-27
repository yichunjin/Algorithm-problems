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
    let result = [];
    result.push([root.val]);
    let queue = [root]
    while (queue.length > 0) {
        let cur = [];
        for (let i = queue.length; i > 0; i--) {
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left)
                cur.push(node.left.val)
            }
            if (node.right) {
                queue.push(node.right)
                cur.push(node.right.val)
            }
        }
        if (cur.length !== 0) {
            result.push(cur)
        }
    }
    return result;
};