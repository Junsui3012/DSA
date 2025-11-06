from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        t=h=head
        cycle=False
        while h!=None and h.next!=None:
            t=t.next
            h=h.next.next
            if t==h:
                cycle=True
                break
        if not cycle:
            return None
        t2=head
        while t2!=h:
            t2=t2.next
            h=h.next
        return t2