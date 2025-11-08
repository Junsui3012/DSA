from typing import List

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda x:x[0])
        output = [intervals[0]]
        for val in intervals:
            if val[0]>output[-1][1]:
                output.append(val)
            else:
                output[-1][1]=max(output[-1][1],val[1])
        return output