// Bottom up approach
/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
    const manages = new Map()
    for (let i = 0; i < n; i++) {
        const curManager = manager[i]
        if (curManager === -1) continue
        if (!manages.has(curManager)) manages.set(curManager, [])
        manages.get(curManager).push(i)
    }

    const dfs = (i) => {
        let worstTime = 0
        for (const emp of manages.get(i) ?? []) {
            const nextTime = dfs(emp)
            worstTime = (nextTime > worstTime) ? nextTime : worstTime
        }
        return worstTime + informTime[i]
    }

    return dfs(headID)
};

// Alternative: Top-down approach
/*
var numOfMinutes = function (n, headID, manager, informTime) {
    let totalTime = 0

    const manages = new Map()
    for (let i = 0; i < n; i++) {
        const curManager = manager[i]
        if (curManager === -1) continue
        if (!manages.has(curManager)) manages.set(curManager, [])
        manages.get(curManager).push(i)
    }

    const dfs = (i, depth) => {
        totalTime = (totalTime > depth) ? totalTime : depth
        for (const emp of manages.get(i) ?? []) {
            dfs(emp, depth + informTime[emp])
        }
    }

    dfs(headID, informTime[headID])
    return totalTime
};
*/
