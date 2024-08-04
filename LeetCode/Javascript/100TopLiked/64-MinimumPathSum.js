/*
https://leetcode.com/problems/minimum-path-sum/description/?envType=study-plan-v2&envId=top-100-liked
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, 
which minimizes the sum of all numbers along its path.
Note: You can only move either down or right at any point in time.

Example 1:
Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

Example 2:
Input: grid = [[1,2,3],[4,5,6]]
Output: 12

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 200
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // Create a 2D array to store the minimum path sum to each cell
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

    // Initialize the first cell with the value from the grid
    dp[0][0] = grid[0][0];

    // Initialize the first row (except the first cell)
    for (let j = 1; j < n; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }

    // Initialize the first column (except the first cell)
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }

    // Iterate through the grid, starting from the second row and column
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // The minimum path sum to the current cell is the minimum of the path sum from the cell above and the cell to the left
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }

    // Return the minimum path sum to the bottom-right corner
    return dp[m - 1][n - 1];
};