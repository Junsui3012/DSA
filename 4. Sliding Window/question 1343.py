from typing import List


class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        count = 0
        avg = sum(arr[:k])
        threshold *= k
        if avg>=threshold:
            count+=1
        for r in range(k, len(arr)):
            avg=avg+arr[r]-arr[r-k]
            if avg>=threshold:
                count+=1
        return count