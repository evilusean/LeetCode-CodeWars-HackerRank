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
ar generateParenthesis = function(n) {
    const result = [];
    
    const backtrack = (currentString, openCount, closeCount) => {
        if (currentString.length === 2 * n) {
            result.push(currentString);
            return;
        }
        
        if (openCount < n) {
            backtrack(currentString + '(', openCount + 1, closeCount);
        }
        
        if (closeCount < openCount) {
            backtrack(currentString + ')', openCount, closeCount + 1);
        }
    };
    
    backtrack('', 0, 0);
    
    return result;
};