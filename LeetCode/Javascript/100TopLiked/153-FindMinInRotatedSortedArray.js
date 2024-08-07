/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. 
For example, the array nums = [0,1,2,4,5,6,7] might become:
[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
Given the sorted rotated array nums of unique elements, return the minimum element of this array.
You must write an algorithm that runs in O(log n) time.

Example 1:
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Example 2:
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

Example 3:
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 

Constraints:
n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // Initialize left and right pointers to the beginning and end of the array
    let left = 0;
    let right = nums.length - 1;
    // Perform binary search until left pointer is less than right pointer
    while (left < right) {
        // Calculate the middle index
        let mid = Math.floor((left + right) / 2);
        // If the middle element is greater than the rightmost element,
        // the minimum element lies in the right half of the array (including mid)
        if (nums[mid] > nums[right]) {
            // Update left pointer to mid + 1
            left = mid + 1;
        } else {
            // Otherwise, the minimum element lies in the left half of the array (including mid)
            // Update right pointer to mid
            right = mid;
        }
    }
    // When the loop terminates, left and right will point to the same index, which is the index of the minimum element
    // Return the element at the left index
    return nums[left];
};