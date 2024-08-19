/*
https://leetcode.com/problems/partition-equal-subset-sum/?envType=study-plan-v2&envId=top-100-liked
Given an integer array nums, return true if you can partition the array into two subsets such that
the sum of the elements in both subsets is equal or false otherwise.

Example 1:
Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].

Example 2:
Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.

Constraints:
1 <= nums.length <= 200
1 <= nums[i] <= 100
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    // Calculate the total sum of the array
    const totalSum = nums.reduce((sum, num) => sum + num, 0);
    
    // If the total sum is odd, it's impossible to partition into equal subsets
    if (totalSum % 2 !== 0) {
        return false;
    }
    
    // Calculate the target sum for each subset
    const targetSum = totalSum / 2;
    
    // Create a 2D array dp of size (nums.length + 1) x (targetSum + 1)
    // dp[i][j] represents whether a subset with sum j can be formed using elements from nums[0:i]
    const dp = new Array(nums.length + 1).fill(false).map(() => new Array(targetSum + 1).fill(false));
    
    // Initialize the first row of dp to true, as an empty subset has a sum of 0
    for (let j = 0; j <= targetSum; j++) {
        dp[0][j] = false;
    }
    
    // Initialize the first column of dp to true, as an empty subset can be formed using no elements
    for (let i = 0; i <= nums.length; i++) {
        dp[i][0] = true;
    }
    
    // Iterate through the array nums
    for (let i = 1; i <= nums.length; i++) {
        // Iterate through the target sum
        for (let j = 1; j <= targetSum; j++) {
            // If the current element is greater than the current target sum, we can't use it
            if (nums[i - 1] > j) {
                dp[i][j] = dp[i - 1][j];
            } else {
                // Otherwise, we have two options:
                // 1. Exclude the current element: dp[i][j] = dp[i - 1][j]
                // 2. Include the current element: dp[i][j] = dp[i - 1][j - nums[i - 1]]
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
            }
        }
    }
    
    // Return dp[nums.length][targetSum], which indicates whether a subset with sum targetSum can be formed using all elements in nums
    return dp[nums.length][targetSum];
};