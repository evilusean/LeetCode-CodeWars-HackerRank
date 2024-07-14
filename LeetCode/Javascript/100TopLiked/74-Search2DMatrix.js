/*
You are given an m x n integer matrix matrix with the following two properties:
Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.
You must write a solution in O(log(m * n)) time complexity.

Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

Constraints:
m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // If the matrix is empty or has no rows or columns, return false
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    // Get the number of rows and columns in the matrix
    let m = matrix.length;
    let n = matrix[0].length;
    // Initialize the left and right pointers for binary search
    let left = 0;
    let right = m * n - 1;
    // Perform binary search on the flattened matrix
    while (left <= right) {
        // Calculate the middle index
        let mid = Math.floor((left + right) / 2);
        // Calculate the row and column corresponding to the middle index
        let row = Math.floor(mid / n);
        let col = mid % n;
        // If the target is found at the middle index, return true
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) {
            // If the target is greater than the middle element, search in the right half
            left = mid + 1;
        } else {
            // If the target is less than the middle element, search in the left half
            right = mid - 1;
        }
    }
    // If the target is not found, return false
    return false;
};