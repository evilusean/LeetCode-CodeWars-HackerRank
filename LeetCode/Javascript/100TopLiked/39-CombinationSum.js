/*
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of 
candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
frequency
 of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations
 for the given input.

Example 1:
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Example 2:
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

Example 3:
Input: candidates = [2], target = 1
Output: []

Constraints:
1 <= candidates.length <= 30
2 <= candidates[i] <= 40
All elements of candidates are distinct.
1 <= target <= 40
8?
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    // Initialize an empty array to store the resulting combinations
    let result = [];
    // Sort the candidates array in ascending order to optimize the backtracking process
    candidates.sort((a, b) => a - b);
    
    // Define a recursive backtracking function
    const backtrack = (combination, remaining, start) => {
        // Base case: If the remaining target value is 0, we have found a valid combination
        if (remaining === 0) {
            // Add a copy of the current combination to the result array
            result.push([...combination]);
            // Return from the recursive call
            return;
        }
        // Base case: If the remaining target value is negative, we have exceeded the target, so we return
        if (remaining < 0) {
            return;
        }
        
        // Iterate through the candidates array starting from the given start index
        for (let i = start; i < candidates.length; i++) {
            // Add the current candidate to the combination array
            combination.push(candidates[i]);
            // Recursively call the backtrack function with the updated combination, remaining target value, and current index
            backtrack(combination, remaining - candidates[i], i);
            // Remove the last candidate from the combination array to backtrack to the previous state
            combination.pop();
        }
    };
    
    // Initiate the backtracking process with an empty combination, the target value, and starting index 0
    backtrack([], target, 0);
    // Return the array of all unique combinations
    return result;
};