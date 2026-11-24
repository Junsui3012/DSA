/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const n = temperatures.length
    const stack = []
    const res = new Array(n).fill(0)

    for (let i = 0; i < n; i++) {
        const temp = temperatures[i]
        while (stack.length && temp > temperatures[stack[stack.length - 1]]) {
            const old_day = stack.pop()
            res[old_day] = i - old_day
        }
        stack.push(i)
    }
    return res
};
