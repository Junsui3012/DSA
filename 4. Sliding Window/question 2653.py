from typing import List


class Solution:
    def getSubarrayBeauty(self, nums: List[int], k: int, x: int) -> List[int]:
        count = [0] * 101

        def xth_smallest():
            c=0
            for v in range(51,101):
                c+=count[v]
                if c>=x:
                    return v - 101
            return 0

        for i in range(k):
            count[nums[i]]+=1
        
        res = [xth_smallest()]

        for r in range(k, len(nums)):
            count[nums[r]]+=1
            count[nums[r-k]]-=1
            res.append(xth_smallest())
        return res