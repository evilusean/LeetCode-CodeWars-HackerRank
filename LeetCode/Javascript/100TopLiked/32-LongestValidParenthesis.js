/*
https://leetcode.com/problems/longest-valid-parentheses/description/?envType=study-plan-v2&envId=top-100-liked
Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses 
substring.

Example 1:
Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".

Example 2:
Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".

Example 3:
Input: s = ""
Output: 0

Constraints:
0 <= s.length <= 3 * 104
s[i] is '(', or ')'.
*/
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let maxLength = 0; // Initialize the maximum length to 0
    let dp = new Array(s.length).fill(0); // Create a DP array to store the length of the longest valid parentheses ending at each index

    for (let i = 1; i < s.length; i++) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') { // If the previous character is '(', the current substring is valid
                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2; // Update the DP array with the length of the valid substring
            } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') { // If the previous character is ')' and there's a matching '(' before it
                dp[i] = dp[i - 1] + 2 + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0); // Update the DP array with the length of the valid substring
            }
            maxLength = Math.max(maxLength, dp[i]); // Update the maximum length
        }
    }
    return maxLength; // Return the maximum length of the longest valid parentheses substring
};