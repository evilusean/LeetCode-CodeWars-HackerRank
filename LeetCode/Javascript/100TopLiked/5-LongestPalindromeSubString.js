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
    // If the string s has less than 2 characters, it's already a palindrome, so return s.
    if (s.length < 2) {
        return s;
    }
    // Initialize an empty string to store the longest palindrome found so far.
    let longest = "";
    // Iterate through each character in the string s using index i.
    for (let i = 0; i < s.length; i++) {
        // Check for odd length palindromes
        // Initialize left and right pointers to i (the center of the potential palindrome).
        let left = i;
        let right = i;
        // Expand the palindrome outwards as long as the characters at left and right are equal and within the string bounds.
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            // If the current palindrome is longer than longest, update longest.
            if (right - left + 1 > longest.length) {
                longest = s.substring(left, right + 1);
            }
            // Move left one step to the left and right one step to the right.
            left--;
            right++;
        }
        // Check for even length palindromes
        // Initialize left to i and right to i + 1 (the potential center of the palindrome).
        left = i;
        right = i + 1;
        // Expand the palindrome outwards as long as the characters at left and right are equal and within the string bounds.
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            // If the current palindrome is longer than longest, update longest.
            if (right - left + 1 > longest.length) {
                longest = s.substring(left, right + 1);
            }
            // Move left one step to the left and right one step to the right.
            left--;
            right++;
        }
    }
    // After checking all possible palindromes, return the longest palindrome found.
    return longest;
};