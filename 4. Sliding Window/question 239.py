from collections import deque
from typing import List


class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        queue = deque()
        res = []
        for r in range(len(nums)):
            while (queue and nums[queue[-1]]<=nums[r]):
                queue.pop()
            queue.append(r)
            if queue[0] + k == r:
                queue.popleft()
            if r>=k-1:
                res.append(nums[queue[0]])
        
        return res