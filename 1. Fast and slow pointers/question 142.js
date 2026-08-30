/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    hare = head;
    tortoise = head;

    while (hare !== null && hare.next !== null){
        hare = hare.next.next;
        tortoise = tortoise.next;

        if (hare === tortoise){
            temp = head;
            while (temp != hare){
                temp = temp.next;
                hare = hare.next;
            }
            return hare;
        }
    }
    return null;
};