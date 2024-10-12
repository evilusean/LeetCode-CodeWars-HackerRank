/*
https://leetcode.com/problems/sliding-window-maximum/description/?envType=study-plan-v2&envId=top-100-liked
You are given an array of integers nums, there is a sliding window of size k 
which is moving from the very left of the array to the very right. 
You can only see the k numbers in the window. Each time the sliding 
window moves right by one position.
Return the max sliding window.

Example 1:
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

Example 2:
Input: nums = [1], k = 1
Output: [1]

Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
1 <= k <= nums.length
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (nums.length === 0 || k === 0) {
        return [];
    }
    
    let result = [];
    let deque = []; // Store indices of potential max elements in the window

    for (let i = 0; i < nums.length; i++) {
        // Remove indices of elements outside the current window
        while (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }

        // Remove indices of elements smaller than the current element from the back
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // Add the current element's index to the deque
        deque.push(i);

        // If the window has reached size k, add the max element to the result
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};