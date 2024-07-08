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
    // Initialize an empty array to store all the valid palindrome partitions
    const result = [];
    // Define a recursive function to explore all possible partitions
    const dfs = (index, currentPartition) => {
        // Base case: If we've reached the end of the string, we've found a valid partition
        if (index === s.length) {
            // Push a copy of the current partition into the result array
            result.push([...currentPartition]);
            // Return from the recursive call
            return;
        }
        // Iterate through all possible substrings starting from the current index
        for (let i = index; i < s.length; i++) {
            // Check if the substring from index to i is a palindrome
            if (isPalindrome(s, index, i)) {
                // If it's a palindrome, add it to the current partition
                currentPartition.push(s.substring(index, i + 1));
                // Recursively call dfs with the next index (i + 1) and the updated partition
                dfs(i + 1, currentPartition);
                // Backtrack: Remove the last added substring from the current partition to explore other possibilities
                currentPartition.pop();
            }
        }
    };
    // Define a function to check if a substring is a palindrome
    const isPalindrome = (str, start, end) => {
        // Use two pointers, start and end, to traverse the substring from both ends
        while (start < end) {
            // If the characters at start and end don't match, it's not a palindrome
            if (str[start] !== str[end]) {
                return false;
            }
            // Move start one step to the right and end one step to the left
            start++;
            end--;
        }
        // If the loop completes without finding mismatched characters, it's a palindrome
        return true;
    };
    // Start the DFS exploration from index 0 with an empty partition
    dfs(0, []);
    // Return the result array containing all the valid palindrome partitions
    return result;
};