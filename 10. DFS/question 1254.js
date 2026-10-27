/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
    const m = grid.length
    const n = grid[0].length

    if (m < 3 || n < 3) return 0

    let isEnclosed
    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i === m || j === n || grid[i][j] === 1) return
        if (i === 0 || j === 0 || i === m - 1 || j === n - 1) isEnclosed = false
        grid[i][j] = 1
        dfs(i, j + 1)
        dfs(i, j - 1)
        dfs(i + 1, j)
        dfs(i - 1, j)
    }

    let closedIslands = 0
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (grid[i][j] === 0) {
                isEnclosed = true
                dfs(i, j, isEnclosed)
                if (isEnclosed) closedIslands++
            }
        }
    }

    return closedIslands
};

// Alternative: Flood filling the edges of the matrix
/*
var closedIsland = function (grid) {
    const m = grid.length
    const n = grid[0].length

    if (m < 3 || n < 3) return 0

    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i === m || j === n || grid[i][j] === 1) return
        grid[i][j] = 1
        dfs(i, j + 1)
        dfs(i, j - 1)
        dfs(i + 1, j)
        dfs(i - 1, j)
    }

    for (let i = 0; i < m-1; i++) {
        dfs(i, 0)
        dfs(i, n-1)
    }
    for (let j = 0; j < n-1; j++) {
        dfs(0, j)
        dfs(m-1, j)
    }

    let closedIslands = 0
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (grid[i][j] === 0) {
                dfs(i, j)
                closedIslands++
            }
        }
    }

    return closedIslands
};
*/

// Alternative: returning boolean flag from dfs
/*
var closedIsland = function (grid) {
    const m = grid.length
    const n = grid[0].length

    if (m < 3 || n < 3) return 0

    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i === m || j === n) return false
        if (grid[i][j] === 1) return true
        grid[i][j] = 1
        const down = dfs(i, j + 1)
        const up = dfs(i, j - 1)
        const right = dfs(i + 1, j)
        const left = dfs(i - 1, j)
        return up && down && left && right
    }

    let closedIslands = 0
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (grid[i][j] === 0 && dfs(i, j)) closedIslands++
        }
    }

    return closedIslands
};
*/
