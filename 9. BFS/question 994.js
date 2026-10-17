/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const m = grid.length
    const n = grid[0].length
    const queue = []
    let head = 0
    let totalCount = 0
    let totalTime

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] !== 0) totalCount++
            if (grid[i][j] === 2) queue.push([i, j, 0])
        }
    }

    if (totalCount === 0) return 0
    else if (queue.length === 0) return -1

    const iDir = [-1, 1, 0, 0]
    const jDir = [0, 0, -1, 1]
    while (head < queue.length) {
        const [i, j, curTime] = queue[head]
        totalTime = curTime
        totalCount--
        head++
        for (let d = 0; d < 4; d++) {
            const ni = i + iDir[d]
            const nj = j + jDir[d]
            if (ni < m && ni >= 0 && nj < n && nj >= 0 && grid[ni][nj] === 1) {
                grid[ni][nj] = 2
                queue.push([ni, nj, curTime + 1])
            }
        }
    }
    return (totalCount > 0) ? -1 : totalTime
};