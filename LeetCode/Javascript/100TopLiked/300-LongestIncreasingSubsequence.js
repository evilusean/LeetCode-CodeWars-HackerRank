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
    if (nums.length === 0) {
        return 0;
    }
    // tails[i] is the smallest tail of all increasing subsequences of length i+1
    let tails = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > tails[tails.length - 1]) {
            // if nums[i] is greater than the largest tail, it extends the longest subsequence
            tails.push(nums[i]);
        } else {
            // binary search to find the smallest tail that is greater than or equal to nums[i]
            let left = 0;
            let right = tails.length - 1;
            while (left < right) {
                let mid = Math.floor((left + right) / 2);
                if (tails[mid] < nums[i]) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            // replace the smallest tail that is greater than or equal to nums[i] with nums[i]
            tails[right] = nums[i];
        }
    }
    return tails.length;
};