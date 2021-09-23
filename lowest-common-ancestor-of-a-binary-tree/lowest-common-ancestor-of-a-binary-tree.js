/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

    

    let result = null;
    
    const findCommonNode = (root) => {
        if (!root) {
            return null;
        }
        let left = findCommonNode(root.left, p, q) ? 1 : 0;
        let right = findCommonNode(root.right, p, q) ? 1 : 0;

        let mid = (root === p || root === q) ? 1 : 0;

        if (mid + left + right >= 2) {
            result = root;
        }
        return (mid + left + right) > 0;
    }

    findCommonNode(root);
    return result;
};