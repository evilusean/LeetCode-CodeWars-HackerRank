/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/?envType=study-plan-v2&envId=top-100-liked
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.  
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0; // Initialize the maximum length of the substring to 0
    let start = 0; // Initialize the starting index of the current substring to 0
    let charMap = new Map(); // Initialize a Map to store the last seen index of each character

    // Iterate through the string using the index 'i'
    for (let i = 0; i < s.length; i++) {
        const char = s[i]; // Get the current character

        // If the character is already in the map and its last seen index is greater than or equal to the start of the current substring
        if (charMap.has(char) && charMap.get(char) >= start) {
            // Update the starting index of the current substring to the next index after the last seen index of the character
            start = charMap.get(char) + 1;
        }

        // Update the last seen index of the character in the map
        charMap.set(char, i);

        // Calculate the length of the current substring and update the maximum length if it's greater
        maxLength = Math.max(maxLength, i - start + 1);
    }

    // Return the maximum length of the substring without repeating characters
    return maxLength;
};