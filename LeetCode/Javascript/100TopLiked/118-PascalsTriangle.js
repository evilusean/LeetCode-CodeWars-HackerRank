/*
https://leetcode.com/problems/pascals-triangle/description/?envType=study-plan-v2&envId=top-100-liked
Like avogadros number, but a triangle
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]
 
Constraints:    
1 <= numRows <= 30
*/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let triangle = []; // Initialize an empty array to store the Pascal's triangle
    
    for (let i = 0; i < numRows; i++) { // Iterate through each row of the triangle
        triangle[i] = new Array(i + 1).fill(1); // Create a new row with i + 1 elements, all initialized to 1
        
        for (let j = 1; j < i; j++) { // Iterate through the elements of the current row, excluding the first and last
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j]; // Calculate the value of the current element as the sum of the two elements above it
        }
    }
    
    return triangle; // Return the constructed Pascal's triangle
};  