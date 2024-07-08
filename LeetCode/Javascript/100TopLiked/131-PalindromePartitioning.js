/*
Given a string s, partition s such that every 
substring
 of the partition is a 
palindrome
. Return all possible palindrome partitioning of s.

Example 1:
Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]

Example 2:
Input: s = "a"
Output: [["a"]]
 
Constraints:
1 <= s.length <= 16
s contains only lowercase English letters.
*/
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = [];
    const dfs = (index, currentPartition) => {
        if (index === s.length) {
            result.push([...currentPartition]);
            return;
        }
        for (let i = index; i < s.length; i++) {
            if (isPalindrome(s, index, i)) {
                currentPartition.push(s.substring(index, i + 1));
                dfs(i + 1, currentPartition);
                currentPartition.pop();
            }
        }
    };
    const isPalindrome = (str, start, end) => {
        while (start < end) {
            if (str[start] !== str[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    };
    dfs(0, []);
    return result;
};