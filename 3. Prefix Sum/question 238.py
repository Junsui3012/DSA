from typing import List

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        pref = nums.copy()
        suff = nums.copy()

        for i in range(1, n):
            pref[i] = pref[i-1] * pref[i]

        for i in range(n-2, -1, -1):
            suff[i] = suff[i+1] * suff[i]

        print(pref)
        print(suff)

        ans = nums.copy()
        ans[0] = suff[1]
        ans[n-1] = pref[n-2]

        for i in range(1, n-1, 1):
            ans[i] = pref[i-1] * suff[i+1]
        
        return ans

