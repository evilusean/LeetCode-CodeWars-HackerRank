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
    const m = word1.length; // Get the length of word1 and store it in 'm'
    const n = word2.length; // Get the length of word2 and store it in 'n'

    // Create a 2D array 'dp' of size (m + 1) x (n + 1) to store the minimum edit distance for each substring.
    // Each cell dp[i][j] will represent the minimum edit distance to convert the substring of word1 from index 0 to i-1
    // to the substring of word2 from index 0 to j-1.
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    // Initialize the first row and column of 'dp'.
    // dp[i][0] represents the minimum edit distance to convert the empty string to the substring of word1 from index 0 to i-1.
    // This is simply the length of the substring, as we need to delete all characters from word1.
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    // dp[0][j] represents the minimum edit distance to convert the empty string to the substring of word2 from index 0 to j-1.
    // This is simply the length of the substring, as we need to insert all characters from word2.
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    // Iterate through the strings, starting from the second row and column (index 1).
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // If the characters at the current indices (i-1 in word1 and j-1 in word2) are the same,
            // the edit distance is the same as the previous substring (dp[i-1][j-1]).
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // Otherwise, the edit distance is the minimum of the following three operations:
                // 1. Insert a character: dp[i][j-1] + 1 (insert the character from word2 at index j-1 into word1)
                // 2. Delete a character: dp[i-1][j] + 1 (delete the character from word1 at index i-1)
                // 3. Replace a character: dp[i-1][j-1] + 1 (replace the character from word1 at index i-1 with the character from word2 at index j-1)
                dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
            }
        }
    }

    // Return the minimum edit distance at the bottom-right corner of the 'dp' array, which represents the minimum edit distance
    // to convert the entire word1 to the entire word2.
    return dp[m][n];
};