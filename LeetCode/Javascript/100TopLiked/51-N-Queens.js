/*
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement,
 where 'Q' and '.' both indicate a queen and an empty space, respectively.

Example 1:
Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

Example 2:
Input: n = 1
Output: [["Q"]]
 
Constraints:
1 <= n <= 9
*/
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = []; // Initialize an array to store all the valid board configurations.
    let board = Array(n).fill(0).map(() => Array(n).fill('.')); // Create a 2D array representing the chessboard, initialized with '.' (empty) for all cells.
    
    function isSafe(row, col) { // Function to check if placing a queen at (row, col) is safe (doesn't attack any existing queens).
        // Check the same column
        for (let i = 0; i < row; i++) { // Iterate upwards from the current row to see if there's a queen in the same column.
            if (board[i][col] === 'Q') { // If a queen is found in the same column, it's not safe.
                return false;
            }
        }
        // Check upper diagonal
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) { // Iterate diagonally upwards to check for queens.
            if (board[i][j] === 'Q') { // If a queen is found in the upper diagonal, it's not safe.
                return false;
            }
        }
        // Check lower diagonal
        for (let i = row, j = col; i >= 0 && j < n; i--, j++) { // Iterate diagonally downwards to check for queens.
            if (board[i][j] === 'Q') { // If a queen is found in the lower diagonal, it's not safe.
                return false;
            }
        }
        return true; // If no queens are found in any of the checked directions, the placement is safe.
    }
    
    function solve(row) { // Recursive function to explore all possible queen placements.
        if (row === n) { // Base Case: If row reaches n, it means all n queens have been placed, so the current board configuration is a solution.
            let temp = board.map(row => row.join('')); // Create a temporary array to store the current board configuration as strings.
            result.push(temp); // Add the temporary array (board configuration) to the result array.
            return; // Return from the recursive call.
        }
        for (let col = 0; col < n; col++) { // Iterate through all columns in the current row.
            if (isSafe(row, col)) { // If placing a queen at (row, col) is safe, proceed.
                board[row][col] = 'Q'; // Place the queen at (row, col).
                solve(row + 1); // Recursively call solve for the next row.
                board[row][col] = '.'; // Backtrack: Remove the queen from (row, col) to explore other possibilities.
            }
        }
    }
    
    solve(0); // Start the recursive process from the first row (row 0).
    return result; // Return the result array containing all the valid board configurations.
};