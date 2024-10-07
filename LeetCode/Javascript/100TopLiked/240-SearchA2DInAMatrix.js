/*
https://leetcode.com/problems/search-a-2d-matrix-ii/description/?envType=study-plan-v2&envId=top-100-liked
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. 
This matrix has the following properties:
Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.

Example 1:
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true

Example 2:
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
Output: false

Constraints:
m == matrix.length
n == matrix[i].length
1 <= n, m <= 300
-109 <= matrix[i][j] <= 109
All the integers in each row are sorted in ascending order.
All the integers in each column are sorted in ascending order.
-109 <= target <= 109
*/  
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // Start from the top right corner of the matrix
    let row = 0;
    let col = matrix[0].length - 1;

    // While we are within the bounds of the matrix
    while (row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length) {
        // If the current element is equal to the target, return true
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] > target) {
            // If the current element is greater than the target, move one column to the left
            col--;
        } else {
            // If the current element is less than the target, move one row down
            row++;
        }
    }

    // If the target is not found, return false
    return false;
};