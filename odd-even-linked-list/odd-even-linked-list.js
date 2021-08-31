/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (!head) {
        return head;
    }
    let odd = new ListNode(0), even = new ListNode(0);
    let oddH = odd, evenH = even;
    let i = 1;
    while (head) {
        if (i % 2 === 0) {
            even.next = head;
            even = even.next;
        } else {
            odd.next = head;
            odd = odd.next;
        }
        head = head.next;
        i++;
    }
    even.next = null;
    odd.next = evenH.next;
    return oddH.next;
};