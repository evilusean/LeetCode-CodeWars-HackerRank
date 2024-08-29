/*
https://leetcode.com/problems/partition-labels/description/?envType=study-plan-v2&envId=top-100-liked
You are given a string s. We want to partition the string into as many parts as possible so that each letter 
appears in at most one part.
Note that the partition is done so that after concatenating all the parts in order,
the resultant string should be s.
Return a list of integers representing the size of these parts.

Example 1:
Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

Example 2:
Input: s = "eccbbbbdec"
Output: [10]

Constraints:
1 <= s.length <= 500
s consists of lowercase English letters.
*/
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    // Create a map to store the last occurrence index of each character in the string
    const lastIndex = new Map();
    for (let i = 0; i < s.length; i++) {
        lastIndex.set(s[i], i);
    }
    // Initialize the starting and ending indices of the current partition
    let start = 0;
    let end = 0;
    // Initialize an empty array to store the sizes of the partitions
    const result = [];
    // Iterate through the string
    for (let i = 0; i < s.length; i++) {
        // Update the ending index of the current partition to the maximum of its current value and the last occurrence index of the current character
        end = Math.max(end, lastIndex.get(s[i]));
        // If the current index reaches the ending index of the current partition
        if (i === end) {
            // Add the size of the current partition to the result array
            result.push(end - start + 1);
            // Update the starting index of the next partition
            start = end + 1;
        }
    }
    // Return the array of partition sizes
    return result;
};