from typing import List


class Solution:
    def maximumSubarraySum(self, nums: List[int], k: int) -> int:
        res, curSum = 0, 0
        l = 0
        d = set()
        for r in range(len(nums)):
            curSum += nums[r]

            while nums[r] in d:
                d.remove(nums[l])
                curSum-=nums[l]
                l+=1

            d.add(nums[r])
            
            if r-l+1==k:
                res = max(res, curSum)
                d.remove(nums[l])
                curSum-=nums[l]
                l+=1
        return res