from typing import List


class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        minimal_len = float("inf")
        l = 0
        cur_sum = 0
        for r, num in enumerate(nums):
            cur_sum+=num
            while cur_sum>=target:
                minimal_len=min(minimal_len, r-l+1)
                cur_sum-=nums[l]
                l+=1
        return minimal_len if minimal_len<float("inf") else 0