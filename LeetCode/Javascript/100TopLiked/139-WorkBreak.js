/*
https://leetcode.com/problems/word-break/description/?envType=study-plan-v2&envId=top-100-liked
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
Note that the same word in the dictionary may be reused multiple times in the segmentation.

Example 1:
Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:
Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.

Example 3:
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false

Constraints:    
1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20   
s and wordDict[i] consist of only lowercase English letters.
All the strings of wordDict are unique.
*/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // Create a boolean array dp of size s.length + 1, where dp[i] indicates whether the substring s[0:i] can be segmented.
    const dp = new Array(s.length + 1).fill(false);
    // Initialize dp[0] to true, as an empty string can be segmented.
    dp[0] = true;

    // Iterate through each index i from 1 to s.length.
    for (let i = 1; i <= s.length; i++) {
        // Iterate through each word in the wordDict.
        for (let j = 0; j < wordDict.length; j++) {
            // If the current word's length is less than or equal to i and the substring s[i - wordDict[j].length:i] is equal to the current word,
            // and the substring s[0:i - wordDict[j].length] can be segmented (dp[i - wordDict[j].length] is true),
            // then the substring s[0:i] can be segmented.
            if (wordDict[j].length <= i && s.substring(i - wordDict[j].length, i) === wordDict[j] && dp[i - wordDict[j].length]) {
                dp[i] = true;
                break; // Break the inner loop as we've found a valid segmentation for s[0:i].
            }
        }
    }

    // Return dp[s.length], which indicates whether the entire string s can be segmented.
    return dp[s.length];
};