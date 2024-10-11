/*
https://leetcode.com/problems/minimum-window-substring/description/?envType=study-plan-v2&envId=top-100-liked
Given two strings s and t of lengths m and n respectively, return the minimum window substring
 of s such that every character in t (including duplicates) is included in the window. 
 If there is no such substring, return the empty string "".
The testcases will be generated such that the answer is unique.

Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.

Constraints:
m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.

Follow up: Could you find an algorithm that runs in O(m + n) time?
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length === 0 || t.length === 0) { // If either of the strings is empty, return an empty string
        return "";
    }

    const dictT = {}; // Create a map to store the frequency of characters in string t
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        dictT[char] = (dictT[char] || 0) + 1; // Count the occurrences of each character in t
    }

    let required = Object.keys(dictT).length; // Number of unique characters in t that need to be present in the window
    let formed = 0; // Number of unique characters from t that are currently present in the window with the required frequency

    let windowCounts = {}; // Map to store the frequency of characters in the current window

    let ans = [-1, 0, 0]; // Array to store the start index, end index, and length of the minimum window found so far
                            // Initialized with [-1, 0, 0] to indicate that no valid window has been found yet

    let l = 0; // Left pointer of the sliding window
    let r = 0; // Right pointer of the sliding window

    while (r < s.length) { // Iterate through the string s using the right pointer
        let c = s[r]; // Get the character at the right pointer
        windowCounts[c] = (windowCounts[c] || 0) + 1; // Increment the count of the character in the window

        if (dictT[c] && windowCounts[c] === dictT[c]) { // If the character is present in t and its count in the window matches its count in t
            formed++; // Increment the count of formed characters
        }

        while (l <= r && formed === required) { // While all required characters are present in the window
            c = s[l]; // Get the character at the left pointer

            if (ans[0] === -1 || r - l + 1 < ans[0]) { // If this is the first valid window or the current window is smaller than the previous minimum window
                ans[0] = r - l + 1; // Update the length of the minimum window
                ans[1] = l; // Update the start index of the minimum window
                ans[2] = r; // Update the end index of the minimum window
            }

            windowCounts[c]--; // Decrement the count of the character at the left pointer in the window
            if (dictT[c] && windowCounts[c] < dictT[c]) { // If the character is present in t and its count in the window is now less than its count in t
                formed--; // Decrement the count of formed characters
            }

            l++; // Move the left pointer one step to the right to shrink the window
        }

        r++; // Move the right pointer one step to the right to expand the window
    }

    return ans[0] === -1 ? "" : s.substring(ans[1], ans[2] + 1); // Return the minimum window substring or an empty string if no valid window was found
};