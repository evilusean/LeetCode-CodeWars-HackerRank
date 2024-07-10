/*
There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length)
 such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
 For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, 
or -1 if it is not in nums.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:
Input: nums = [1], target = 0
Output: -1

Constraints:
1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0; // Initialize the left pointer to the beginning of the array
    let right = nums.length - 1; // Initialize the right pointer to the end of the array
    while (left <= right) { // Continue the search as long as the left pointer is less than or equal to the right pointer
        let mid = Math.floor((left + right) / 2); // Calculate the middle index
        if (nums[mid] === target) { // If the target is found at the middle index, return the index
            return mid;
        }
        // If the left half is sorted
        if (nums[left] <= nums[mid]) { 
            if (nums[left] <= target && target < nums[mid]) { // If the target is within the sorted left half, update the right pointer
                right = mid - 1;
            } else { // Otherwise, update the left pointer
                left = mid + 1;
            }
        } else { // If the right half is sorted
            if (nums[mid] < target && target <= nums[right]) { // If the target is within the sorted right half, update the left pointer
                left = mid + 1;
            } else { // Otherwise, update the right pointer
                right = mid - 1;
            }
        }
    }
    return -1; // If the target is not found, return -1
};