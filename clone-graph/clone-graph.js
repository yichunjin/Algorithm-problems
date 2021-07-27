/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) {
        return null;
    }
    let oldToNew = {};
    const clone = (node) => {
        if (oldToNew[node.val]) {
            return oldToNew[node.val];
        }
        let copyNode = new Node(node.val);
        oldToNew[node.val] = copyNode;
        for (let i of node.neighbors) {
            copyNode.neighbors.push(clone(i));
        }
        return copyNode;
    }
    return clone(node);
};