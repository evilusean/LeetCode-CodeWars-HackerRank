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
    let maxLength = 0; // Initialize the maximum length of the longest valid parentheses substring found so far to 0.
    let dp = new Array(s.length).fill(0); // Create a dynamic programming array `dp` of the same length as the input string `s`. 
                                        // Each element `dp[i]` will store the length of the longest valid parentheses substring ending at index `i`.
                                        // Initialize all elements of `dp` to 0.

    for (let i = 1; i < s.length; i++) { // Iterate through the string `s` from index 1 to the end (excluding the first character).
        if (s[i] === ')') { // If the current character is a closing parenthesis ')':
            if (s[i - 1] === '(') { // If the previous character is an opening parenthesis '(':
                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2; // Update `dp[i]` with the length of the current valid substring.
                                                    // This is 2 (for the current '()' pair) plus the length of the longest valid substring ending at index `i - 2` (if `i` is greater than or equal to 2).
                                                    // If `i` is less than 2, there's no previous valid substring, so we add 0.
            } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') { // If the previous character is ')' and there's a matching '(' before it:
                dp[i] = dp[i - 1] + 2 + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0); // Update `dp[i]` with the length of the current valid substring.
                                                                                        // This is 2 (for the current '()' pair) plus the length of the previous valid substring (`dp[i - 1]`)
                                                                                        // plus the length of the longest valid substring ending at index `i - dp[i - 1] - 2` (if `i - dp[i - 1]` is greater than or equal to 2).
                                                                                        // If `i - dp[i - 1]` is less than 2, there's no previous valid substring, so we add 0.
            }
            maxLength = Math.max(maxLength, dp[i]); // Update `maxLength` to be the maximum of its current value and the length of the longest valid substring ending at the current index (`dp[i]`).
        }
    }
    return maxLength; // Return the maximum length of the longest valid parentheses substring found in the input string `s`.
};