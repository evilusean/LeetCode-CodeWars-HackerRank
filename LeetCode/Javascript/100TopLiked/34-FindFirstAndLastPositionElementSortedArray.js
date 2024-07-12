/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:
Input: nums = [], target = 0
Output: [-1,-1]

Constraints:
0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = -1; // Initialize the starting index to -1, indicating the target is not found yet
    let end = -1; // Initialize the ending index to -1, indicating the target is not found yet

    // Binary search to find the first occurrence of the target
    let left = 0; // Initialize the left pointer to the beginning of the array
    let right = nums.length - 1; // Initialize the right pointer to the end of the array
    while (left <= right) { // Continue the search while the left pointer is less than or equal to the right pointer
        let mid = Math.floor((left + right) / 2); // Calculate the middle index
        if (nums[mid] === target) { // If the middle element is equal to the target
            start = mid; // Update the starting index to the middle index
            right = mid - 1; // Search for the first occurrence in the left half of the array
        } else if (nums[mid] < target) { // If the middle element is less than the target
            left = mid + 1; // Search in the right half of the array
        } else { // If the middle element is greater than the target
            right = mid - 1; // Search in the left half of the array
        }
    }

    // Binary search to find the last occurrence of the target
    left = 0; // Initialize the left pointer to the beginning of the array
    right = nums.length - 1; // Initialize the right pointer to the end of the array
    while (left <= right) { // Continue the search while the left pointer is less than or equal to the right pointer
        let mid = Math.floor((left + right) / 2); // Calculate the middle index
        if (nums[mid] === target) { // If the middle element is equal to the target
            end = mid; // Update the ending index to the middle index
            left = mid + 1; // Search for the last occurrence in the right half of the array
        } else if (nums[mid] < target) { // If the middle element is less than the target
            left = mid + 1; // Search in the right half of the array
        } else { // If the middle element is greater than the target
            right = mid - 1; // Search in the left half of the array
        }
    }

    return [start, end]; // Return the starting and ending indices of the target
};