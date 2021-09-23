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
    
    const findParent = (node) => {
        if (!node) { return null; }
        let left = findParent(node.left) ? 1 : 0;
        let right = findParent(node.right) ? 1 : 0;
        
        let cur = (node === p || node === q) ? 1 : 0;
        if ((left + right + cur) >= 2) {
            result = node;
        }
        return (left + right + cur) > 0;
    }
    findParent(root);
    return result;
};