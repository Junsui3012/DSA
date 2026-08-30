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
    fast = head
    slow = head
    for(i=0; i<n; i++) fast=fast.next

    if (fast===null) return head.next
    
    while (fast.next !== null){
        slow = slow.next
        fast = fast.next
    }

    slow.next = slow.next.next
    return head
};