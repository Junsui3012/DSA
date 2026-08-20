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
- question 2270. Number of ways to Split Array: solved by storing the left sum and right sum, then counting the result

### 4. Sliding Window
#### Fixed Length
- question 2461. Maximum Sum of Distinct Subarrays With Length K: Solved by using a set to check for duplicates, if found then moved the left of window until the first instance was removed and finally returned the maximum sum of subarray
- question 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold: Solved by comparing the tracked sum with the multiplied threshold on each subarray of size k
- question 187. Repeated DNA Sequences: solved by storing the seen and repeated sequences in hashsets
- question 567. Permutation in String: solved by storing the count of alphabets in hashmap and then using sliding window on the 2nd string
- question 2653. Sliding Subarray Beauty: solved by creating a count array for the numbers and used it to get xth smallest element in the sliding window
- question 239. Sliding Window Maximum: solved by creating a deque to keep maximum at top, and decresing elements thereafter and only deleting when new element is larger or maximum expires from window
#### Variable Length
- question 3. Longest Substring Without Repeating Characters: solved by storing duplicates in a hashset OR by storing the last seen index of character in hashmap
- question 209. Maximum Size Subarray Sum: solved by storing the current sum, then looking for the minimum interval with sum greater than target