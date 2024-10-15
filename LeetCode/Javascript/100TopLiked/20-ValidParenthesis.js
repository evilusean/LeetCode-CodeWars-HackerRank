/*
https://leetcode.com/problems/valid-parentheses/description/?envType=study-plan-v2&envId=top-100-liked
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []; // Initialize an empty stack to keep track of open parentheses
    const parenthesesMap = { // Create a map to match opening and closing parentheses
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // If the character is an opening parenthesis, push it onto the stack
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else { // If the character is a closing parenthesis
            // Check if the stack is empty or if the top of the stack doesn't match the corresponding opening parenthesis
            if (stack.length === 0 || stack.pop() !== parenthesesMap[char]) {
                return false; // If either condition is true, the string is invalid
            }
        }
    }

    // After processing the entire string, if the stack is empty, it means all parentheses are balanced
    return stack.length === 0;
};