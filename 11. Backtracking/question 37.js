/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    const sections = [
        new Set(), new Set(), new Set(),
        new Set(), new Set(), new Set(),
        new Set(), new Set(), new Set(),
    ]
    const rows = [new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()]
    const columns = [new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()]
    const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

    for (let i = 0; i <= 8; i++) {
        for (let j = 0; j <= 8; j++) {
            const ele = board[i][j]
            if (ele !== '.') {
                sections[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(ele)
                rows[i].add(ele)
                columns[j].add(ele)
            }
        }
    }

    const backtrack = (i, j) => {
        if (i > 8) {
            return true
        }

        const nexti = (j === 8) ? i + 1 : i
        const nextj = (j === 8) ? 0 : j + 1

        if (board[i][j] !== '.') {
            return backtrack(nexti, nextj)
        }

        const section = sections[Math.floor(i / 3) * 3 + Math.floor(j / 3)]
        const row = rows[i]
        const col = columns[j]

        for (const num of nums) {
            if (section.has(num) || row.has(num) || col.has(num)) continue

            board[i][j] = num
            section.add(num)
            row.add(num)
            col.add(num)

            if (backtrack(nexti, nextj)) return true

            section.delete(num)
            row.delete(num)
            col.delete(num)
        }
        board[i][j] = '.'
        return false
    }
    backtrack(0, 0)
};
