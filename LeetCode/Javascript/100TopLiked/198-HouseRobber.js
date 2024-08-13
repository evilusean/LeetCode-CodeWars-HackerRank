/*
https://leetcode.com/problems/house-robber/description/?envType=study-plan-v2&envId=top-100-liked
You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is 
that adjacent houses have security systems connected and it will automatically contact the police 
if two adjacent houses were broken into on the same night.
Given an integer array nums representing the amount of money of each house, return the maximum amount of 
money you can rob tonight without alerting the police.

Example 1:
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 2:
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

Constraints:
1 <= nums.length <= 100
0 <= nums[i] <= 400
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // If the input array is empty, return 0 as there's no house to rob
    if (nums.length === 0) {
        return 0;
    }
    // If the input array has only one house, return the amount of money in that house
    if (nums.length === 1) {
        return nums[0];
    }
    // Create a dynamic programming array dp of size nums.length to store the maximum amount of money that can be robbed up to each house
    let dp = new Array(nums.length).fill(0);
    // Initialize dp[0] to the amount of money in the first house
    dp[0] = nums[0];
    // Initialize dp[1] to the maximum amount of money that can be robbed from the first two houses
    dp[1] = Math.max(nums[0], nums[1]);
    // Iterate through the houses starting from the third house (index 2)
    for (let i = 2; i < nums.length; i++) {
        // For each house, the maximum amount of money that can be robbed is the maximum of:
        // 1. The maximum amount of money that can be robbed up to the previous house (dp[i - 1])
        // 2. The maximum amount of money that can be robbed up to the house before the previous house (dp[i - 2]) plus the amount of money in the current house (nums[i])
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    // Return the maximum amount of money that can be robbed up to the last house (dp[nums.length - 1])
    return dp[nums.length - 1];
};