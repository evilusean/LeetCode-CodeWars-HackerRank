/*
https://leetcode.com/problems/kth-largest-element-in-an-array/description/?envType=study-plan-v2&envId=top-100-liked
Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.
Can you solve it without sorting?

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4

Constraints:
1 <= k <= nums.length <= 105
-104 <= nums[i] <= 104  
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // Create a min-heap using a priority queue
    const minHeap = new MinPriorityQueue();

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Add the current element to the heap
        minHeap.enqueue(nums[i]);

        // If the heap size exceeds k, remove the minimum element
        // This ensures that the heap always contains the k largest elements seen so far
        if (minHeap.size() > k) {
            minHeap.dequeue();
        }
    }

    // After iterating through the array, the minimum element in the heap will be the kth largest element
    return minHeap.front().element;
};