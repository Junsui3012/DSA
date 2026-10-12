/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
    const n = grid.length
    if (grid[0][0] === 1 || grid[n-1][n-1] === 1) return -1
    const queue = [[0, 0, 1]]
    let head = 0
    grid[0][0] = 1
    const iDirs = [-1, -1, -1, 0, 0, 1, 1, 1]
    const jDirs = [-1, 0, 1, -1, 1, -1, 0, 1]
    while (head < queue.length) {
        const [i, j, curPath] = queue[head]
        head++

        if (i === j && j === n - 1) return curPath

        for (let d = 0; d < 8; d++) {
            const ni = i + iDirs[d]
            const nj = j + jDirs[d]
            if (ni >= 0 && ni < n && nj >= 0 && nj < n && grid[ni][nj] === 0) {
                grid[ni][nj] = 1
                queue.push([ni, nj, curPath + 1])
            }
        }
    }
    return -1
};