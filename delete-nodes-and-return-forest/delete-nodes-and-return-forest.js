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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    const result = new Set();
    result.add(root);
    let q = [root];

    while (q.length > 0) {
        let cur = q.shift();
        if (to_delete.indexOf(cur.val) > -1) {
            result.delete(cur);
            if (cur.left!== null) { result.add(cur.left); }
            if (cur.right!== null) { result.add(cur.right); }
        }
        if (cur.left) {
            let left = cur.left;
            q.push(left);
            if (to_delete.indexOf(cur.left.val) > -1) {
                cur.left = null;
            }
        }
        if (cur.right) {
            let right = cur.right;
            q.push(right);
            if (to_delete.indexOf(cur.right.val) > -1) {
                cur.right = null;
            }
        }
    }
    
    
    return [...result];
};