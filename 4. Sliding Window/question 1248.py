from typing import List


class Solution:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        if k<0: return 0
        def fun(nums, k):
            subarray_count = 0
            l = 0
            odd_count = 0

            for r in range(len(nums)):
                odd_count += nums[r]%2
                while odd_count>k:
                    odd_count -= nums[l]%2
                    l+=1
                subarray_count+=r-l+1
            return subarray_count
        return fun(nums, k)-fun(nums,k-1)
            