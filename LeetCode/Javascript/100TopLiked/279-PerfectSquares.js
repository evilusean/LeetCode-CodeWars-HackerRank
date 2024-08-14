/*
https://leetcode.com/problems/perfect-squares/description/?envType=study-plan-v2&envId=top-100-liked
Given an integer n, return the least number of perfect square numbers that sum to n.
A perfect square is an integer that is the square of an integer; in other words, 
it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares 
while 3 and 11 are not.

Example 1:
Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.

Example 2:
Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
 
Constraints:
1 <= n <= 104
*/
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    // Create a DP array to store the minimum number of perfect squares needed for each number from 1 to n
    const dp = new Array(n + 1).fill(Infinity);
    // Initialize the DP array with 0 for 0 and 1 for 1, as they are perfect squares themselves
    dp[0] = 0;
    dp[1] = 1;
    // Iterate through each number from 2 to n
    for (let i = 2; i <= n; i++) {
        // Iterate through all perfect squares less than or equal to the current number
        for (let j = 1; j * j <= i; j++) {
            // Update the DP array with the minimum number of perfect squares needed for the current number
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }
    // Return the minimum number of perfect squares needed for the given number n
    return dp[n];
};