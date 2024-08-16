/*
https://leetcode.com/problems/coin-change/description/?envType=study-plan-v2&envId=top-100-liked
You are given an integer array coins representing coins of different denominations and an integer 
amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount.
 If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.

Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:
Input: coins = [2], amount = 3
Output: -1

Example 3:
Input: coins = [1], amount = 0
Output: 0

Constraints:    
1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
*/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // Create a DP array to store the minimum number of coins needed for each amount from 0 to amount
    const dp = new Array(amount + 1).fill(Infinity);
    // Initialize the DP array with 0 for 0, as no coins are needed for 0 amount
    dp[0] = 0;
    
    // Iterate through each coin denomination
    for (let i = 0; i < coins.length; i++) {
        // Iterate through each amount from the current coin denomination to the target amount
        for (let j = coins[i]; j <= amount; j++) {
            // Update the DP array with the minimum number of coins needed for the current amount
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
        }
    }
    
    // If the minimum number of coins needed for the target amount is still Infinity, it means the amount cannot be made up
    return dp[amount] === Infinity ? -1 : dp[amount];
};