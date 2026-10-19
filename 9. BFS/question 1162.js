/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
    const n = grid.length
    const queue = []
    let head = 0
    let maxDist = -1
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) queue.push([i, j, 0])
        }
    }

    if (queue.length === n * n || queue.length === 0) return -1

    const iDirs = [-1, 1, 0, 0]
    const jDirs = [0, 0, -1, 1]
    while (head < queue.length) {
        const [i, j, dist] = queue[head]
        head++
        maxDist = dist
        for (let d = 0; d < 4; d++) {
            const ni = i + iDirs[d]
            const nj = j + jDirs[d]
            if (ni < n && nj < n && ni >= 0 && nj >= 0 && grid[ni][nj] === 0) {
                grid[ni][nj] = 1
                queue.push([ni, nj, dist + 1])
            }
        }
    }
    return maxDist
};