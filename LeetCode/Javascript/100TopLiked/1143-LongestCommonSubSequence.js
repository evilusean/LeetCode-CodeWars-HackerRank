/*
https://leetcode.com/problems/longest-common-subsequence/?envType=study-plan-v2&envId=top-100-liked
Given two strings text1 and text2, return the length of their longest common subsequence. 
If there is no common subsequence, return 0.
A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted
	without changing the relative order of the remaining characters.
For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

Example 1:
Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.

Example 2:
Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.

Example 3:
Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.

Constraints:
1 <= text1.length, text2.length <= 1000
text1 and text2 consist of only lowercase English characters.
*/
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length; // Get the length of the first string (text1)
    const n = text2.length; // Get the length of the second string (text2)
    
    // Create a 2D array (dp) to store the lengths of the longest common subsequences.
    // The array is initialized with all elements set to 0.
    // The size of the array is (m + 1) x (n + 1) to accommodate empty substrings.
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

    // Iterate through the strings, comparing characters and updating the dp array.
    // The outer loop iterates through the characters of text1, and the inner loop iterates through the characters of text2.
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // If the current characters from text1 and text2 are equal,
            // the length of the longest common subsequence up to this point is one more than the length of the longest common subsequence up to the previous characters.
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // If the characters are not equal, the length of the longest common subsequence up to this point is the maximum of the lengths of the longest common subsequences up to the previous characters in text1 and text2.
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // The bottom-right corner of the dp array holds the length of the longest common subsequence of the entire text1 and text2.
    return dp[m][n];
};