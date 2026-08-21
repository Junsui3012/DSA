from typing import List


class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        if k<=1:
            return 0  # important because cur_prod is always at least 1
        
        subarray_count = 0
        l=0
        cur_prod = 1

        for r in range(len(nums)):
            cur_prod*=nums[r]
            while cur_prod>=k:
                cur_prod//=nums[l]
                l+=1
            subarray_count+=r-l+1 # add count of subarrays ending at right
        return subarray_count