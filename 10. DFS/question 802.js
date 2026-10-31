/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
    const n = graph.length
    const safeNodes = new Uint8Array(n).fill(0)

    const dfs = (i) => {
        if (safeNodes[i] !== 0) {
            if (safeNodes[i] === 2) return true
            return false
        }
        safeNodes[i] = 1
        for (const node of graph[i]) {
            if (!dfs(node)) return false
        }
        safeNodes[i] = 2
        return true
    }

    for (let i = 0; i < n; i++) {
        dfs(i)
    }

    const res = []
    for (let i = 0; i < n; i++) {
        if (safeNodes[i] === 2) res.push(i)
    }
    return res
};

// Alternative: using set
/*
var eventualSafeNodes = function (graph) {
    const n = graph.length
    const safeNodes = new Set()

    for (let i = 0; i < n; i++) {
        if (graph[i].length === 0) {
            graph[i] = -1
            safeNodes.add(i)
        }
    }

    const dfs = (i) => {
        if (graph[i] === -1) {
            if (safeNodes.has(i)) return true
            return false
        }
        const nextNodes = graph[i]
        graph[i] = -1
        let amISafe = true
        for (const node of nextNodes) {
            amISafe = amISafe && dfs(node)
        }
        if (amISafe) safeNodes.add(i)
        return amISafe
    }

    for (let i = 0; i < n; i++) {
        if (graph[i] === -1) continue
        dfs(i)
    }

    return [...safeNodes].sort((a, b) => a - b)
};
*/
