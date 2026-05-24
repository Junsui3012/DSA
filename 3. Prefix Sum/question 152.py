from typing import List

class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        res = max(nums)
        low = high = 1

        for i in nums:
            temp = high
            high = max(high*i, low*i, i)
            low = min(temp*i, low*i, i)
            res = max(high,res)
        return res