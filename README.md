# DSA

---

This repo has been made in order to track my DSA learning progress through saving solved questions ordered in patterns commonly observed on LeetCode

---

### 1. Fast and slow pointers

- question 142. Linked List Cycle II: Solved using Floyd's algorithm to detect cycle and starting point
- question 19. Remove nth node from end of list: solved using two pointer separated by the distance
- question 287. Find the duplicate number: solved using Floyd's algorithm to detect cycle
- question 234. Palindrome linked list: solved by reversing the second half of the linked list

### 2. Overlapping intervals

- question 56. Merge intervals: solved by sorting the starting interval and comparing the right hand side of the intervals
- question 57. Insert interval: solved by dividing the interval into 3 sections and inserting the modified newInterval into it's place
- question 731. My Calender II: solved by storing the overlaps in an array which is used to compare the next interval

### 3. Prefix Sum
- question 1991. Find the middle index in array: solved by comparing the sum till the current index and the difference of prefix with the current index at each iteration
- question 238. Product of Array Except Self: solved by computing prefix sum from left side and then from right side
- question 152. Maximum Product Subarray: solved by storing current positive, current negative and overall highest
- question 304. Range Sum query 2D - Immutable: solved by creating a m+1 x n+1 matrix for prefix sum and subtracting the small rectangles from large rectangles during output