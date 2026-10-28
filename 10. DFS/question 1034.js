/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function (grid, row, col, color) {
    const m = grid.length
    const n = grid[0].length
    dfs(row, col, grid[row][col], grid, m, n, color)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] < 0) grid[i][j] = -grid[i][j]
        }
    }
    return grid
};

const dfs = (i, j, initColor, grid, m, n, color) => {
    if (i < 0 || j < 0 || i === m || j === n) return false
    if (grid[i][j] < 0) return true
    if (grid[i][j] !== initColor) return false

    grid[i][j] = -initColor
    const d1 = dfs(i + 1, j, initColor, grid, m, n, color)
    const d2 = dfs(i - 1, j, initColor, grid, m, n, color)
    const d3 = dfs(i, j + 1, initColor, grid, m, n, color)
    const d4 = dfs(i, j - 1, initColor, grid, m, n, color)
    if (!(d1 && d2 && d3 && d4)) grid[i][j] = -color
    return true
}
