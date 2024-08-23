/*
https://leetcode.com/problems/number-of-islands/description/?envType=study-plan-v2&envId=top-100-liked
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),
 return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let numIslands = 0; // Initialize the number of islands to 0
  let rows = grid.length; // Get the number of rows in the grid
  let cols = grid[0].length; // Get the number of columns in the grid

  // Define a helper function to perform Depth-First Search (DFS) to explore connected land cells
  const dfs = (row, col) => {
      // Check if the current cell is within the grid boundaries and is land ('1')
      if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === '0') {
          return;
      }

      // Mark the current cell as visited by changing it to '0'
      grid[row][col] = '0';

      // Recursively explore the adjacent cells (up, down, left, right)
      dfs(row + 1, col);
      dfs(row - 1, col);
      dfs(row, col + 1);
      dfs(row, col - 1);
  };

  // Iterate through each cell in the grid
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          // If the current cell is land ('1') and hasn't been visited yet
          if (grid[i][j] === '1') {
              // Increment the number of islands
              numIslands++;
              // Perform DFS to explore the connected land cells
              dfs(i, j);
          }
      }
  }

  // Return the total number of islands found
  return numIslands;
};