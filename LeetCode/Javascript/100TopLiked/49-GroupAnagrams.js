/*
https://leetcode.com/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-100-liked
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // Create an empty map to store anagram groups. The key will be the sorted string of an anagram, and the value will be an array of anagrams belonging to that group.
    const anagramGroups = new Map();

    // Iterate through each string in the input array 'strs'.
    for (const str of strs) {
        // Sort the characters of the current string 'str' alphabetically to create a unique key for the anagram group.
        const sortedStr = str.split('').sort().join('');

        // Check if the sorted string already exists as a key in the 'anagramGroups' map.
        if (anagramGroups.has(sortedStr)) {
            // If the key exists, it means we've found another anagram belonging to the same group.
            // Push the current string 'str' into the array of anagrams associated with that key.
            anagramGroups.get(sortedStr).push(str);
        } else {
            // If the key doesn't exist, it means this is the first anagram of this group we've encountered.
            // Create a new entry in the 'anagramGroups' map with the sorted string as the key and an array containing the current string 'str' as the value.
            anagramGroups.set(sortedStr, [str]);
        }
    }

    // After processing all strings, extract the values (arrays of anagrams) from the 'anagramGroups' map and return them as a 2D array.
    return Array.from(anagramGroups.values());
};  
