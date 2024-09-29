/*
https://leetcode.com/problems/spiral-matrix/description/?envType=study-plan-v2&envId=top-100-liked
Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

Constraints:
m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
*/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
/*
https://leetcode.com/problems/spiral-matrix/description/?envType=study-plan-v2&envId=top-100-liked
Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

Constraints:
m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
*/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = [];
    const m = matrix.length;
    const n = matrix[0].length;
    let top = 0;
    let bottom = m - 1;
    let left = 0;
    let right = n - 1;

    while (result.length < m * n) {
        // Traverse right, from left to right
        for (let i = left; i <= right && result.length < m * n; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // Traverse down, from top to bottom
        for (let i = top; i <= bottom && result.length < m * n; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // Traverse left, from right to left
        for (let i = right; i >= left && result.length < m * n; i--) {
            result.push(matrix[bottom][i]);
        }
        bottom--;

        // Traverse up, from bottom to top
        for (let i = bottom; i >= top && result.length < m * n; i--) {
            result.push(matrix[i][left]);
        }
        left++;
    }

    return result;
};
