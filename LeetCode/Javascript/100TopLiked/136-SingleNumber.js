/*
https://leetcode.com/problems/single-number/description/?envType=study-plan-v2&envId=top-100-liked
Given a non-empty array of integers nums, every element appears twice except for one.
 Find that single one.
You must implement a solution with a linear runtime complexity and use only
 constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1

Constraints:
1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0; // Initialize the result to 0
    // Iterate through the nums array
    for (let i = 0; i < nums.length; i++) {
        // Use the bitwise XOR operator to find the single number
        result ^= nums[i];
    }
    // Return the result, which will be the single number that appeared only once
    return result;
};