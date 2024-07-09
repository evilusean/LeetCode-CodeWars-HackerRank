/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).

Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 
Constraints:
nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length; // Get the length of the first array and store it in 'm'
    let n = nums2.length; // Get the length of the second array and store it in 'n'
    if (m > n) { // If the length of the first array is greater than the length of the second array
        [nums1, nums2, m, n] = [nums2, nums1, n, m]; // Swap the arrays and their lengths so that 'nums1' is always the shorter array
    }
    let low = 0; // Initialize the lower bound of the binary search to 0
    let high = m; // Initialize the upper bound of the binary search to the length of the shorter array ('m')
    while (low <= high) { // Continue the binary search until the lower bound is greater than the upper bound
        let partitionX = Math.floor((low + high) / 2); // Calculate the middle partition point of the shorter array ('nums1')
        let partitionY = Math.floor(((m + n + 1) / 2) - partitionX); // Calculate the corresponding partition point of the longer array ('nums2') based on the total length and the partition point of the shorter array

        let maxLeftX = (partitionX === 0) ? Number.MIN_SAFE_INTEGER : nums1[partitionX - 1]; // Get the maximum element to the left of the partition in the shorter array. If the partition is at the beginning, use the minimum safe integer.
        let minRightX = (partitionX === m) ? Number.MAX_SAFE_INTEGER : nums1[partitionX]; // Get the minimum element to the right of the partition in the shorter array. If the partition is at the end, use the maximum safe integer.

        let maxLeftY = (partitionY === 0) ? Number.MIN_SAFE_INTEGER : nums2[partitionY - 1]; // Get the maximum element to the left of the partition in the longer array. If the partition is at the beginning, use the minimum safe integer.
        let minRightY = (partitionY === n) ? Number.MAX_SAFE_INTEGER : nums2[partitionY]; // Get the minimum element to the right of the partition in the longer array. If the partition is at the end, use the maximum safe integer.

        if (maxLeftX <= minRightY && maxLeftY <= minRightX) { // Check if the partition is valid: the maximum element to the left of the partition in the shorter array should be less than or equal to the minimum element to the right of the partition in the longer array, and vice versa.
            if ((m + n) % 2 === 0) { // If the total number of elements is even
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2; // Calculate the median as the average of the two middle elements
            } else { // If the total number of elements is odd
                return Math.max(maxLeftX, maxLeftY); // Calculate the median as the larger of the two middle elements
            }
        } else if (maxLeftX > minRightY) { // If the partition is not valid and the maximum element to the left of the partition in the shorter array is greater than the minimum element to the right of the partition in the longer array
            high = partitionX - 1; // Adjust the upper bound of the binary search to the left of the current partition point
        } else { // If the partition is not valid and the maximum element to the left of the partition in the shorter array is less than the minimum element to the right of the partition in the longer array
            low = partitionX + 1; // Adjust the lower bound of the binary search to the right of the current partition point
        }
    }
    return -1; // Should never reach here (this line is a placeholder for an error condition)
};