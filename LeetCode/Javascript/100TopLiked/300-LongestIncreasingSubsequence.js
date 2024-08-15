/*
https://leetcode.com/problems/longest-increasing-subsequence/description/?envType=study-plan-v2&envId=top-100-liked
Given an integer array nums, return the length of the longest strictly increasing subsequence.

Example 1:
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Example 2:
Input: nums = [0,1,0,3,2,3]
Output: 4

Example 3:
Input: nums = [7,7,7,7,7,7,7]
Output: 1

Constraints:
1 <= nums.length <= 2500
-104 <= nums[i] <= 104

Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // If the input array is empty, return 0 as there's no subsequence
    if (nums.length === 0) {
        return 0;
    }
    // tails[i] is the smallest tail of all increasing subsequences of length i+1
    let tails = [nums[0]]; // Initialize an array 'tails' to store the smallest tail of all increasing subsequences of length i+1. Start with the first element of 'nums'.
    for (let i = 1; i < nums.length; i++) { // Iterate through the 'nums' array starting from the second element (index 1).
        if (nums[i] > tails[tails.length - 1]) { // If the current element 'nums[i]' is greater than the largest tail in 'tails', it extends the longest subsequence.
            // if nums[i] is greater than the largest tail, it extends the longest subsequence
            tails.push(nums[i]); // Add 'nums[i]' to 'tails' as it extends the longest subsequence.
        } else { // If 'nums[i]' is less than or equal to the largest tail in 'tails', we need to find the smallest tail that is greater than or equal to 'nums[i]'.
            // binary search to find the smallest tail that is greater than or equal to nums[i]
            let left = 0; // Initialize the left pointer for binary search to 0.
            let right = tails.length - 1; // Initialize the right pointer for binary search to the last index of 'tails'.
            while (left < right) { // Perform binary search until the left pointer is greater than or equal to the right pointer.
                let mid = Math.floor((left + right) / 2); // Calculate the middle index.
                if (tails[mid] < nums[i]) { // If the element at the middle index 'tails[mid]' is less than 'nums[i]', the target is in the right half of 'tails'.
                    left = mid + 1; // Update the left pointer to the middle index plus 1.
                } else { // If 'tails[mid]' is greater than or equal to 'nums[i]', the target is in the left half of 'tails'.
                    right = mid; // Update the right pointer to the middle index.
                }
            }
            // replace the smallest tail that is greater than or equal to nums[i] with nums[i]
            tails[right] = nums[i]; // Replace the smallest tail that is greater than or equal to 'nums[i]' with 'nums[i]'. This is because 'nums[i]' can potentially create a shorter increasing subsequence with a smaller tail, which might be useful for extending the subsequence later.
        }
    }
    return tails.length; // Return the length of 'tails', which represents the length of the longest increasing subsequence.
};