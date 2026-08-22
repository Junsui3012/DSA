from typing import List


class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        basket = {}
        best = 0
        l = 0
        for r in range(len(fruits)):
            basket[fruits[r]]=basket.get(fruits[r],0)+1
            if len(basket)>2:
                basket[fruits[l]]-=1
                if not basket[fruits[l]]:
                    del basket[fruits[l]]
                l+=1
        return r-l+1