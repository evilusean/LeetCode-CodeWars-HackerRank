/*
https://leetcode.com/problems/find-all-anagrams-in-a-string/description/?envType=study-plan-v2&envId=top-100-liked
Given two strings s and p, return an array of all the start indices of p's 
anagrams in s. You may return the answer in any order.

Example 1:
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:
Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

Constraints:
1 <= s.length, p.length <= 3 * 104
s and p consist of lowercase English letters.
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const result = []; // Array to store the starting indices of anagrams
    const pMap = new Map(); // Map to store the frequency of characters in 'p'
    const sMap = new Map(); // Map to store the frequency of characters in the current window of 's'
    const pLen = p.length; // Length of string 'p'
    
    // Populate the pMap with character frequencies from 'p'
    for (let i = 0; i < pLen; i++) {
        pMap.set(p[i], (pMap.get(p[i]) || 0) + 1);
    }
    
    // Sliding window approach
    let left = 0; // Left pointer of the sliding window
    let right = 0; // Right pointer of the sliding window
    
    while (right < s.length) {
        // Expand the window to the right
        const rightChar = s[right];
        sMap.set(rightChar, (sMap.get(rightChar) || 0) + 1);
        
        // If the window size is equal to the length of 'p'
        if (right - left + 1 === pLen) {
            // Check if the current window is an anagram of 'p'
            if (isAnagram(sMap, pMap)) {
                result.push(left); // If it's an anagram, add the left index to the result
            }
            
            // Shrink the window from the left
            const leftChar = s[left];
            sMap.set(leftChar, sMap.get(leftChar) - 1); // Decrement the frequency of the leftmost character
            if (sMap.get(leftChar) === 0) {
                sMap.delete(leftChar); // Remove the character from the map if its frequency becomes 0
            }
            left++; // Move the left pointer one step to the right
        }
        
        right++; // Move the right pointer one step to the right
    }
    
    return result; // Return the array of starting indices of anagrams
};

// Helper function to check if two maps have the same characters and frequencies
function isAnagram(map1, map2) {
    if (map1.size !== map2.size) {
        return false; // If the sizes are different, they cannot be anagrams
    }
    
    for (let [key, value] of map1) {
        if (map2.get(key) !== value) {
            return false; // If the frequencies don't match, they are not anagrams
        }
    }
    
    return true; // If all checks pass, they are anagrams
}