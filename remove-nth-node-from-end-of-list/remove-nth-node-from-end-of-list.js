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
    if (head === null || head.next === null) {
        return null;
    }
    let length = 0;
    let cur = head;
    while (cur !== null) {
        cur = cur.next;
        length++;
    }
    let start = head;
    if (length === n) {
        return head.next;
    }
    for (let i = 1; i < length - n; i++) {
        start = start.next;
    }
    let next = null;
    if (start.next !== null) {
        next = start.next.next;
    }
    
    start.next = next;
    return head;
};