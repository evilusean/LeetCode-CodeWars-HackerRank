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

    if (emptyOrchard(grid)) {
      return 0;
    } 
    
    var stopwatch = 0;
  
    var cycleOranges = (grid) => {
  
      var checked = [];
  
      for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === 2 && !isDuplicate(checked, [i, j])) {
            var adjacent = adjacencies(grid, i, j);
            if (adjacent) {
              adjacent.forEach(freshOrange => {
                grid[freshOrange[0]][freshOrange[1]] = 2;
                checked.push([freshOrange[0], freshOrange[1]]);
              });
            }  
          }
        }
      }
    stopwatch++;
    return adjacenciesRemain(grid) ? cycleOranges(grid) : null;
    }
    cycleOranges(grid);
    return stopwatch > 0 && emptyOrchard(grid) ? stopwatch : -1; 
  };
  
  
  // checks the grid for any spoiled oranges with fresh adjacencies
  
  var adjacenciesRemain = (grid) => {
    for (var i = 0; i < grid.length; i++) {
      for (var j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 2 && adjacencies(grid, i, j)) {
          return true;
        }
      }
    }
    return false;
  }
  
  
  // checks coordinates for all available adjacencies
  
  var adjacencies = (tree, i, j) => {
    var adjacent = [];
    
    var right = tree[i][j + 1];
    var left = tree[i][j - 1];
    var up = tree[i - 1] === undefined ? undefined : tree[i - 1][j]; 
    var down = tree[i + 1] === undefined ? undefined : tree[i + 1][j];
  
    right === 1 ? adjacent.push([i, j + 1]) : null;
    up === 1 ? adjacent.push([i - 1, j]) : null;
    left === 1 ? adjacent.push([i, j - 1]) : null;
    down === 1 ? adjacent.push([i + 1, j]) : null;
  
    return adjacent.length > 0 ? adjacent : false;
    
  }
  
  
  // checks for authenticity of incoming array
  
  var isDuplicate = (arr1, arr2) => {
    for (var i = 0; i < arr1.length; i++) {
      if (JSON.stringify(arr1[i]) === JSON.stringify(arr2)) {
        return true;
      }
    }
    return false;
  }
  
  
  // checks grid for the condition of having all rotten oranges or no oranges at all
  
  var emptyOrchard = (grid) => {
    
    var rotten = false;
    var fresh = false;
    var absent = false;
    
    for (var i = 0; i < grid.length; i++) {
      for (var j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 2) {
          rotten = true;
        } else if (grid[i][j] === 1) {
          fresh = true;
        } else if (grid[i][j] === 0) {
          absent = true;
        }
      }
    }
    return (rotten && !fresh) || (absent && !rotten & !fresh);
  }