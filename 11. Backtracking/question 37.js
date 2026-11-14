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
// Alternate: Blazing fast optimal
/**
var solveSudoku = function (board) {
    const rows = new Uint16Array(9)
    const columns = new Uint16Array(9)
    const sections = new Uint16Array(9)
    const empty = new Uint8Array(81)
    const boxOf = (i, j) => ((i / 3 | 0) * 3 + (j / 3 | 0))
    let count = 0

    for (let i = 0; i <= 8; i++) {
        for (let j = 0; j <= 8; j++) {
            const ele = board[i][j]
            if (ele === '.') {
                empty[count++] = i * 9 + j
            }
            else {
                const bit = 1 << (ele.charCodeAt(0) - 49)
                sections[boxOf(i, j)] |= bit
                rows[i] |= bit
                columns[j] |= bit
            }
        }
    }

    const backtrack = (pos) => {
        if (pos === count) {
            return true
        }

        let bestPos = pos
        let bestMask = 0
        let bestCount = 10

        for (let i = pos; i < count; i++) {
            const p = empty[i]
            const r = (p / 9) | 0
            const c = p % 9
            const s = boxOf(r, c)

            const mask = (~(rows[r] | columns[c] | sections[s])) & 511

            if (!mask) return false

            let bits = mask
            let n = 0
            while (bits) {
                bits &= bits - 1
                n++
            }

            if (n < bestCount) {
                bestCount = n
                bestMask = mask
                bestPos = i

                if (n === 1) break
            }
        }

        const t = empty[pos]
        empty[pos] = empty[bestPos]
        empty[bestPos] = t

        const p = empty[pos]
        const r = (p / 9) | 0
        const c = p % 9
        const s = boxOf(r, c)

        while (bestMask) {
            const bit = bestMask & -bestMask
            bestMask ^= bit
            rows[r] ^= bit
            columns[c] ^= bit
            sections[s] ^= bit

            if (backtrack(pos + 1)) {
                board[r][c] = String(32 - Math.clz32(bit))
                return true
            }

            rows[r] ^= bit
            columns[c] ^= bit
            sections[s] ^= bit
        }
        return false
    }
    backtrack(0)
};
*/
