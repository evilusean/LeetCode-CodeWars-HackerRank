/*
https://leetcode.com/problems/decode-string/description/?envType=study-plan-v2&envId=top-100-liked
Given an encoded string, return its decoded string.
The encoding rule is: k[encoded_string], where the encoded_string inside the 
square brackets is being repeated exactly k times. Note that k is guaranteed to 
be a positive integer.
You may assume that the input string is always valid; there are no extra white spaces,
 square brackets are well-formed, etc. Furthermore, you may assume that the 
 original data does not contain any digits and that digits are only for those
  repeat numbers, k. For example, there will not be input like 3a or 2[4].
The test cases are generated so that the length of the output will never exceed 105.

Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

Constraints:
1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range [1, 300].
*/
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = []; // Initialize an empty stack to store characters, substrings, and repeat counts
    let currentNum = 0; // Initialize a variable to keep track of the current repeat count
    let currentString = ''; // Initialize a variable to store the current decoded substring

    for (let i = 0; i < s.length; i++) { // Iterate through each character in the encoded string
        let char = s[i]; // Get the current character

        if (!isNaN(char)) { // If the character is a digit
            currentNum = currentNum * 10 + parseInt(char); // Construct the repeat count by multiplying the previous value by 10 and adding the current digit
        } else if (char === '[') { // If the character is an opening bracket '['
            stack.push(currentString); // Push the current decoded substring onto the stack
            stack.push(currentNum); // Push the current repeat count onto the stack
            currentString = ''; // Reset the current decoded substring to an empty string
            currentNum = 0; // Reset the current repeat count to 0
        } else if (char === ']') { // If the character is a closing bracket ']'
            let prevNum = stack.pop(); // Pop the repeat count from the stack
            let prevString = stack.pop(); // Pop the previous decoded substring from the stack
            currentString = prevString + currentString.repeat(prevNum); // Repeat the current decoded substring 'prevNum' times and prepend the previous decoded substring
        } else { // If the character is a letter
            currentString += char; // Append the letter to the current decoded substring
        }
    }

    return currentString; // Return the final decoded string
};