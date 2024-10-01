/*
https://leetcode.com/problems/set-matrix-zeroes/description/?envType=study-plan-v2&envId=top-100-liked
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
You must do it in place. 

Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

Constraints:
m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1

Follow up:
A straightforward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let firstRowZero = false; // Flag to indicate if the first row should be zeroed out
    let firstColZero = false; // Flag to indicate if the first column should be zeroed out

    // Iterate through the matrix to determine if the first row or column should be zeroed out
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                if (i === 0) firstRowZero = true;
                if (j === 0) firstColZero = true;
                matrix[i][0] = 0; // Mark the first element of the current row as 0
                matrix[0][j] = 0; // Mark the first element of the current column as 0
            }
        }
    }

    // Iterate through the matrix (excluding the first row and column)
    // and set elements to 0 based on the markers in the first row and column
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Zero out the first row if the flag is set
    if (firstRowZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    // Zero out the first column if the flag is set
    if (firstColZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
};