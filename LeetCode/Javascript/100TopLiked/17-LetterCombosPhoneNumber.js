/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
Return the answer in any order.
A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]

Constraints:
0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
*/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    // Create a mapping of digits to their corresponding letters on a phone keypad
    const mapping = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    // Initialize an empty array to store the resulting letter combinations
    const result = [];
    
    // If the input string is empty, return an empty array
    if (digits.length === 0) {
        return result;
    }
    
    // Define a recursive backtracking function
    const backtrack = (index, currentString) => {
        // If we have reached the end of the input string, add the current combination to the result array
        if (index === digits.length) {
            result.push(currentString);
            return;
        }
        
        // Get the letters corresponding to the current digit
        const letters = mapping[digits[index]];
        // Iterate over each letter
        for (let i = 0; i < letters.length; i++) {
            // Recursively call backtrack with the next digit and the current string appended with the current letter
            backtrack(index + 1, currentString + letters[i]);
        }
    };
    
    // Start the backtracking process from the first digit with an empty string
    backtrack(0, '');
    
    // Return the array of letter combinations
    return result;
};