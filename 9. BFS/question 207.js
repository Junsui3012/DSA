class Queue1 {
  constructor() {
    this.items = {};
    this.head = 0; // Tracks the first element
    this.tail = 0; // Tracks the next insertion spot
  }

  // Add element to the back of the queue - O(1)
  enqueue(element) {
    this.items[this.tail] = element;
    this.tail++;
  }

  // Remove and return the front element - O(1)
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    
    const item = this.items[this.head];
    delete this.items[this.head]; // Free up memory
    this.head++;
    return item;
  }

  // View the front element without removing it - O(1)
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.head];
  }

  // Check if the queue is empty - O(1)
  isEmpty() {
    return this.tail - this.head === 0;
  }

  // Get the current size of the queue - O(1)
  size() {
    return this.tail - this.head;
  }
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adj = new Map()
    for (let i = 0; i < numCourses; i++) {
        adj.set(i, new Set())
    }
    for (const [v, u] of prerequisites) {
        adj.set(u, adj.get(u).add(v))
    }

    const countMap = new Map()
    for (let i = 0; i < numCourses; i++) {
        countMap.set(i, 0)
    }
    adj.forEach((val, key) => {
        for (const ele of val) {
            countMap.set(ele, countMap.get(ele) + 1)
        }
    })

    const queue = new Queue1()
    let nodeCount = 0
    for (let i = 0; i < numCourses; i++) {
        if (!countMap.get(i)) queue.enqueue(i)
    }
    while (!queue.isEmpty()) {
        nodeCount++
        const cur = queue.dequeue()
        const next = adj.get(cur)
        countMap.set(cur, 0)
        next.forEach((val) => {
            countMap.set(val, countMap.get(val) - 1)
            if (!countMap.get(val)) queue.enqueue(val)
        })
    }
    
    return nodeCount === numCourses
};