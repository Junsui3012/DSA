/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let curOpen = 0
    let curClosed = 0
    const res = []
    const backtrack = (curStr) => {
        if (curStr.length === n * 2) {
            res.push(curStr)
            return
        }

        if (curOpen < n) {
            curOpen += 1
            backtrack(curStr + "(")
            curOpen -= 1
        }
        if (curClosed < curOpen) {
            curClosed += 1
            backtrack(curStr + ")")
            curClosed -= 1
        }
        // for (const bracket of ["(", ")"]) {
        //     if (bracket === "(" && curOpen >= n) continue
        //     if (bracket === ")" && curClosed >= curOpen) continue
        
        //     if (bracket === "(") curOpen += 1
        //     if (bracket === ")") curClosed += 1
        
        //     backtrack(curStr + bracket)
        
        //     if (bracket === "(") curOpen -= 1
        //     if (bracket === ")") curClosed -= 1
        // }
    }
    backtrack("")
    return res
};
// Alternative: variable placement
/**
var generateParenthesis = function (n) {
    const res = []
    const backtrack = (curStr, curOpen, curClosed) => {
        if (curStr.length === n * 2) {
            res.push(curStr)
            return
        }

        if (curOpen < n) {
            backtrack(curStr + "(", curOpen + 1, curClosed)
        }
        if (curClosed < curOpen) {
            backtrack(curStr + ")", curOpen, curClosed + 1)
        }
    }
    backtrack("", 0, 0)
    return res
};
*/
