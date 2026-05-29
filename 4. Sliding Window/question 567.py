class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        d = dict()
        for ele in s1:
            d[ele] = d.get(ele,0) + 1
        
        check = dict()
        l, n = 0, len(s1)
        for r in range(len(s2)):
            check[s2[r]] = check.get(s2[r], 0) + 1
            if d == check:
                return True
            if r - l + 1 == n:
                check[s2[l]] -= 1
                if check[s2[l]] == 0:
                    del check[s2[l]]
                l += 1
        return False