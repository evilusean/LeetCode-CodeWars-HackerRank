/*
https://leetcode.com/problems/sort-colors/description/?envType=study-plan-v2&envId=top-100-liked
Given an array nums with n objects colored red, white, or blue,
 sort them in-place so that objects of the same color are adjacent, 
 with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue,
 respectively.
You must solve this problem without using the library's sort function.

Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]

Constraints:
n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.

Follow up: Could you come up with a one-pass algorithm using only constant extra space?
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0; // Pointer for the end of the '0' section
    let mid = 0; // Pointer for the end of the '1' section
    let high = nums.length - 1; // Pointer for the beginning of the '2' section

    while (mid <= high) { // Iterate while the middle pointer is within or equal to the high pointer
        if (nums[mid] === 0) {
            // If the element at the middle pointer is 0, swap it with the element at the low pointer and increment both low and mid pointers
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            // If the element at the middle pointer is 1, just increment the mid pointer
            mid++;
        } else {
            // If the element at the middle pointer is 2, swap it with the element at the high pointer and decrement the high pointer
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};