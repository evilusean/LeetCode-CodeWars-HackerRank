/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4

Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // Initialize the left and right pointers for binary search.
    let left = 0;
    let right = nums.length - 1;
    
    // Perform binary search until the left pointer is greater than the right pointer.
    while (left <= right) {
        // Calculate the middle index.
        let mid = Math.floor((left + right) / 2);
        // If the middle element is equal to the target, return the middle index.
        if (nums[mid] === target) {
            return mid;
        } 
        // If the middle element is less than the target, the target must be in the right half of the array.
        else if (nums[mid] < target) {
            // Update the left pointer to the middle index plus 1.
            left = mid + 1;
        } 
        // If the middle element is greater than the target, the target must be in the left half of the array.
        else {
            // Update the right pointer to the middle index minus 1.
            right = mid - 1;
        }
    }
    // If the loop completes without finding the target, the left pointer will point to the index where the target should be inserted.
    return left;
};