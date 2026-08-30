/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head, fast = head

    while (fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
    }
    let newNode = null
    while (slow!==null){
        let temp = slow.next
        slow.next = newNode
        newNode = slow
        slow = temp
    }
    let start = head
    while (newNode!==null){
        if (newNode.val!==start.val) {return false}
        start = start.next
        newNode = newNode.next
    }
    return true
};