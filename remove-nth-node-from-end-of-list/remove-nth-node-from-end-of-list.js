/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head.next === null) {
        return null
    }
    let cur = head;
    let nPointer = head;
    for (let i = 0; i < n; i ++) {
        nPointer = nPointer.next;
    }
    if (nPointer === null) {
        return cur.next;
    }
    while (nPointer.next !== null) {
        cur = cur.next;
        nPointer = nPointer.next;
    }
    let removeNode = cur.next;
    cur.next = removeNode.next;
    return head;
};