from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        slow=fast=head
        while fast and fast.next:
            fast=fast.next.next
            slow=slow.next
        
        node=None
        while slow:
            temp = slow.next
            slow.next = node
            node = slow
            slow = temp
        
        front,back = head,node
        while back:
            if front.val!=back.val:
                return False
            front=front.next
            back=back.next
        return True