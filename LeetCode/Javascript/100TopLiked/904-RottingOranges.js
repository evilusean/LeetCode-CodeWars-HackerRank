/*
https://leetcode.com/problems/rotting-oranges/description/?envType=study-plan-v2&envId=top-100-liked
You are given an m x n grid where each cell can have one of three values:
0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.
 If this is impossible, return -1.
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */


var orangesRotting = function(grid) {

    // Check if the orchard is empty or only contains rotten oranges.
    if (emptyOrchard(grid)) {
      // If the orchard is empty or only contains rotten oranges, return 0 minutes.
      return 0;
    } 
    
    // Initialize a stopwatch to track the elapsed time.
    var stopwatch = 0;
  
    // Define a function to cycle through the oranges and rot the fresh ones adjacent to rotten oranges.
    var cycleOranges = (grid) => {
  
      // Initialize an array to keep track of the oranges that have been checked.
      var checked = [];
  
      // Iterate through each row of the grid.
      for (var i = 0; i < grid.length; i++) {
        // Iterate through each column of the grid.
        for (var j = 0; j < grid[i].length; j++) {
          // If the current cell contains a rotten orange and it hasn't been checked yet:
          if (grid[i][j] === 2 && !isDuplicate(checked, [i, j])) {
            // Find the adjacent fresh oranges.
            var adjacent = adjacencies(grid, i, j);
            // If there are adjacent fresh oranges:
            if (adjacent) {
              // Iterate through each adjacent fresh orange.
              adjacent.forEach(freshOrange => {
                // Rot the fresh orange by changing its value to 2.
                grid[freshOrange[0]][freshOrange[1]] = 2;
                // Add the coordinates of the newly rotten orange to the checked array.
                checked.push([freshOrange[0], freshOrange[1]]);
              });
            }  
          }
        }
      }
    // Increment the stopwatch by 1 minute after processing a cycle.
    stopwatch++;
    // Recursively call cycleOranges if there are still fresh oranges adjacent to rotten oranges.
    return adjacenciesRemain(grid) ? cycleOranges(grid) : null;
    }
    // Start the cycle by calling cycleOranges with the initial grid.
    cycleOranges(grid);
    // Return the elapsed time if all oranges have been rotten, otherwise return -1.
    return stopwatch > 0 && emptyOrchard(grid) ? stopwatch : -1; 
  };
  
  
  // checks the grid for any spoiled oranges with fresh adjacencies
  
  var adjacenciesRemain = (grid) => {
    // Iterate through each row of the grid.
    for (var i = 0; i < grid.length; i++) {
      // Iterate through each column of the grid.
      for (var j = 0; j < grid[i].length; j++) {
        // If the current cell contains a rotten orange and it has adjacent fresh oranges:
        if (grid[i][j] === 2 && adjacencies(grid, i, j)) {
          // Return true, indicating that there are still fresh oranges that can be rotten.
          return true;
        }
      }
    }
    // If no rotten oranges have adjacent fresh oranges, return false.
    return false;
  }
  
  
  // checks coordinates for all available adjacencies
  
  var adjacencies = (tree, i, j) => {
    // Initialize an array to store the coordinates of adjacent fresh oranges.
    var adjacent = [];
    
    // Get the values of the cells to the right, left, up, and down of the current cell.
    var right = tree[i][j + 1];
    var left = tree[i][j - 1];
    var up = tree[i - 1] === undefined ? undefined : tree[i - 1][j]; 
    var down = tree[i + 1] === undefined ? undefined : tree[i + 1][j];
  
    // If the cell to the right contains a fresh orange, add its coordinates to the adjacent array.
    right === 1 ? adjacent.push([i, j + 1]) : null;
    // If the cell above contains a fresh orange, add its coordinates to the adjacent array.
    up === 1 ? adjacent.push([i - 1, j]) : null;
    // If the cell to the left contains a fresh orange, add its coordinates to the adjacent array.
    left === 1 ? adjacent.push([i, j - 1]) : null;
    // If the cell below contains a fresh orange, add its coordinates to the adjacent array.
    down === 1 ? adjacent.push([i + 1, j]) : null;
  
    // Return the adjacent array if it contains any coordinates, otherwise return false.
    return adjacent.length > 0 ? adjacent : false;
    
  }
  
  
  // checks for authenticity of incoming array
  
  var isDuplicate = (arr1, arr2) => {
    // Iterate through each element in the first array.
    for (var i = 0; i < arr1.length; i++) {
      // If the current element in the first array is the same as the second array, return true.
      if (JSON.stringify(arr1[i]) === JSON.stringify(arr2)) {
        return true;
      }
    }
    // If no duplicates are found, return false.
    return false;
  }
  
  
  // checks grid for the condition of having all rotten oranges or no oranges at all
  
  var emptyOrchard = (grid) => {
    
    // Initialize variables to track the presence of rotten oranges, fresh oranges, and empty cells.
    var rotten = false;
    var fresh = false;
    var absent = false;
    
    // Iterate through each row of the grid.
    for (var i = 0; i < grid.length; i++) {
      // Iterate through each column of the grid.
      for (var j = 0; j < grid[i].length; j++) {
        // If the current cell contains a rotten orange, set rotten to true.
        if (grid[i][j] === 2) {
          rotten = true;
        } 
        // If the current cell contains a fresh orange, set fresh to true.
        else if (grid[i][j] === 1) {
          fresh = true;
        } 
        // If the current cell contains an empty cell, set absent to true.
        else if (grid[i][j] === 0) {
          absent = true;
        }
      }
    }
    // Return true if the orchard is empty (absent is true and rotten and fresh are false) or if all oranges are rotten (rotten is true and fresh is false).
    return (rotten && !fresh) || (absent && !rotten & !fresh);
  }