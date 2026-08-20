class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        longest_len = 0
        l = 0
        last_seen = {}
        for r in range(len(s)):
            if (s[r] in last_seen):
                l = max(last_seen[s[r]] + 1, l)
            longest_len = max(longest_len, r-l+1)
            last_seen[s[r]] = r
        return longest_len