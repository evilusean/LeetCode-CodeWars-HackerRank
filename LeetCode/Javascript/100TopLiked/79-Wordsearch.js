/*
Given an m x n grid of characters board and a string word, return true if word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or
 vertically neighboring. The same letter cell may not be used more than once.
Example 1:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 

Constraints:
m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.

Follow up: Could you use search pruning to make your solution faster with a larger board?
*/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // Get the number of rows and columns in the board
    const rows = board.length;
    const cols = board[0].length;
    
    // Define a recursive function to perform Depth-First Search (DFS)
    const dfs = (row, col, index) => {
        // Base case: If we've reached the end of the word, we've found it
        if (index === word.length) {
            return true;
        }
        // Check if the current cell is out of bounds or if the character doesn't match the current letter in the word
        if (row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] !== word[index]) {
            return false;
        }
        
        // Mark the current cell as visited by changing its character to '#'
        board[row][col] = '#';
        
        // Explore all four directions (up, down, left, right) recursively
        const found = dfs(row + 1, col, index + 1) || // Down
                     dfs(row - 1, col, index + 1) || // Up
                     dfs(row, col + 1, index + 1) || // Right
                     dfs(row, col - 1, index + 1); // Left
        
        // Backtrack: Restore the original character at the current cell to allow for other paths
        board[row][col] = word[index];
        
        // Return true if any of the recursive calls found the word, otherwise return false
        return found;
    };
    
    // Iterate through each cell in the board
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // If the current cell's character matches the first character of the word, start the DFS from that cell
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true;
            }
        }
    }
    // If the loop completes without finding the word, return false
    return false;
};