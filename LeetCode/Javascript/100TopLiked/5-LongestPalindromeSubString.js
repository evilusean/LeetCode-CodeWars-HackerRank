/*
https://leetcode.com/problems/longest-palindromic-substring/description/?envType=study-plan-v2&envId=top-100-liked
Given a string s, return the longest palindromic substring  in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"

Constraints:
1 <= s.length <= 1000
s consist of only digits and English letters.
*/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) {
        return s;
    }
    let longest = "";
    for (let i = 0; i < s.length; i++) {
        // Check for odd length palindromes
        let left = i;
        let right = i;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > longest.length) {
                longest = s.substring(left, right + 1);
            }
            left--;
            right++;
        }
        // Check for even length palindromes
        left = i;
        right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > longest.length) {
                longest = s.substring(left, right + 1);
            }
            left--;
            right++;
        }
    }
    return longest;
};