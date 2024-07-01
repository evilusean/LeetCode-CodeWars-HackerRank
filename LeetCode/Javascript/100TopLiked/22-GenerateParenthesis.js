/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]
 
Constraints:
1 <= n <= 8
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // Initialize an empty array to store the resulting valid parenthesis combinations
    const result = [];
    
    // Define a recursive backtracking function
    const backtrack = (currentString, openCount, closeCount) => {
        // If the current string has reached the length of 2 * n (representing all n pairs of parentheses),
        // add it to the result array and return
        if (currentString.length === 2 * n) {
            result.push(currentString);
            return;
        }
        
        // If the number of open parentheses is less than n,
        // recursively call backtrack with the current string appended with an opening parenthesis,
        // incrementing the open count and keeping the close count the same
        if (openCount < n) {
            backtrack(currentString + '(', openCount + 1, closeCount);
        }
        
        // If the number of closing parentheses is less than the number of open parentheses,
        // recursively call backtrack with the current string appended with a closing parenthesis,
        // keeping the open count the same and incrementing the close count
        if (closeCount < openCount) {
            backtrack(currentString + ')', openCount, closeCount + 1);
        }
    };
    
    // Start the backtracking process with an empty string, 0 open parentheses, and 0 close parentheses
    backtrack('', 0, 0);
    
    // Return the array of valid parenthesis combinations
    return result;
};