/*
https://leetcode.com/problems/climbing-stairs/?envType=study-plan-v2&envId=top-100-liked
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:
1 <= n <= 45
*/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // If n is less than or equal to 1, there's only one way to climb (do nothing or take one step).
    if (n <= 1) {
        return 1;
    }
    // Create a dynamic programming array 'dp' of size n + 1 to store the number of ways to climb to each step.
    // Each element 'dp[i]' will store the number of ways to climb to the ith step.
    let dp = new Array(n + 1).fill(0);
    // Initialize dp[1] to 1, as there's only one way to reach step 1 (take one step).
    dp[1] = 1;
    // Initialize dp[2] to 2, as there are two ways to reach step 2 (take one step twice or take two steps).
    dp[2] = 2;
    // Iterate through the steps from 3 to n.
    for (let i = 3; i <= n; i++) {
        // For each step i, the number of ways to climb to it is the sum of the ways to climb to the previous step (i - 1) and the step before that (i - 2).
        // This is because you can either take one step from i - 1 or two steps from i - 2.
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    // Return dp[n], which represents the number of ways to climb to the top (nth step).
    return dp[n];
};