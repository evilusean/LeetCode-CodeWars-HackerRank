/*
https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=top-100-liked
Given an integer array nums, move all 0's to the end of it while maintaining 
the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Constraints:
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1

Follow up: Could you minimize the total number of operations done?
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroIndex = 0; // Index to track the position for placing the next non-zero element

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is non-zero
        if (nums[i] !== 0) {
            // Swap the current element with the element at nonZeroIndex
            [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
            // Increment nonZeroIndex to the next position for a non-zero element
            nonZeroIndex++;
        }
    }
};