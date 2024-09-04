/*
https://leetcode.com/problems/two-sum/description/?envType=study-plan-v2&envId=top-100-liked
Given an array of integers nums and an integer target, return indices of the 
two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Create a Map to store the elements of the array and their indices
    const map = new Map();

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement, which is the difference between the target and the current element
        const complement = target - nums[i];

        // Check if the complement exists in the Map
        if (map.has(complement)) {
            // If the complement exists, return the index of the complement and the current index
            return [map.get(complement), i];
        }

        // If the complement doesn't exist, add the current element and its index to the Map
        map.set(nums[i], i);
    }

    // If no solution is found, return an empty array
    return []; 
};  