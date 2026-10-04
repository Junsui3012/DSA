/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const n = intervals.length
    let remCount = 0
    let startIdx = 0

    for (let i = 0; i < n; i++) {
        const left = intervals[i][0]
        const right = intervals[i][1]
        if (intervals[i][0] > newInterval[1]) break
        if (intervals[i][1] < newInterval[0]) {
            startIdx++
            continue
        }
        remCount++
        newInterval[0] = Math.min(newInterval[0], left)
        newInterval[1] = Math.max(newInterval[1], right)
    }
    intervals.splice(startIdx, remCount, newInterval)
    return intervals
};