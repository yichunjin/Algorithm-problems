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
var maxPathSum = function(root) {
    let result = root.val;
    const findMax = (node) => {
        if (!node) {
            return 0;
        }
        let left = Math.max(findMax(node.left), 0);
        let right = Math.max(findMax(node.right), 0);
        result = Math.max(result, node.val + left + right);
        return node.val + Math.max(left, right);
    }
    findMax(root);
    return result;
};