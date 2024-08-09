/*
https://leetcode.com/problems/edit-distance/description/?envType=study-plan-v2&envId=top-100-liked
Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
You have the following three operations permitted on a word:
Insert a character
Delete a character
Replace a character

Example 1:
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')

Example 2:
Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')

Constraints:
0 <= word1.length, word2.length <= 500
word1 and word2 consist of lowercase English letters.
*/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length;
    const n = word2.length;

    // Create a 2D array to store the minimum edit distance for each substring
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    // Initialize the first row and column
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    // Iterate through the strings, starting from the second row and column
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // If the characters at the current indices are the same, the edit distance is the same as the previous substring
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // Otherwise, the edit distance is the minimum of the following three operations:
                // 1. Insert a character: dp[i][j - 1] + 1
                // 2. Delete a character: dp[i - 1][j] + 1
                // 3. Replace a character: dp[i - 1][j - 1] + 1
                dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
            }
        }
    }

    // Return the minimum edit distance at the bottom-right corner of the dp array
    return dp[m][n];
};