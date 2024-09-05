/*
https://leetcode.com/problems/top-k-frequent-elements/description/?envType=study-plan-v2&envId=top-100-liked
Given an integer array nums and an integer k, return the k most frequent elements. 
You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // Create a map to store the frequency of each element
    const frequencyMap = new Map();
    // Iterate through the array and update the frequency of each element in the map
    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    // Create a min-heap using a priority queue to store the k most frequent elements
    const minHeap = new MinPriorityQueue({ priority: x => x[1] });
    // Iterate through the frequency map
    for (let [num, frequency] of frequencyMap) {
        // Add the element and its frequency to the heap
        minHeap.enqueue([num, frequency]);
        // If the heap size exceeds k, remove the element with the minimum frequency
        if (minHeap.size() > k) {
            minHeap.dequeue();
        }
    }
    // Create an array to store the k most frequent elements
    const result = [];
    // Iterate through the heap and add each element to the result array
    while (minHeap.size() > 0) {
        result.push(minHeap.dequeue().element[0]);
    }
    // Return the array of k most frequent elements
    return result;
};