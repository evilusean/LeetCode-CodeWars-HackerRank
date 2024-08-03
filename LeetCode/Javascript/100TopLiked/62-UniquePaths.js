/*
https://leetcode.com/problems/unique-paths/description/?envType=study-plan-v2&envId=top-100-liked
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). 
The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). 
The robot can only move either down or right at any point in time.
Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
The test cases are generated so that the answer will be less than or equal to 2 * 109.

Example 1:
Input: m = 3, n = 7
Output: 28

Example 2:
Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

Constraints:
1 <= m, n <= 100
*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // Create a 2D array to store the number of unique paths to each cell
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

    // Initialize the first row and column with 1, as there's only one way to reach each cell from the starting point
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }

    // Iterate through the grid, starting from the second row and column
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // The number of unique paths to the current cell is the sum of the unique paths to the cell above and the cell to the left
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    // Return the number of unique paths to the bottom-right corner
    return dp[m - 1][n - 1];
};