/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]

Constraints:
1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // Initialize an empty array to store the result permutations
    let result = [];
    
    // Define a recursive backtracking function
    const backtrack = (index, currentPermutation) => {
        // Base case: If the index reaches the length of the input array, it means we have a complete permutation
        if (index === nums.length) {
            // Push a copy of the current permutation to the result array
            result.push([...currentPermutation]);
            // Return to the previous recursive call
            return;
        }
        
        // Iterate through each element in the input array
        for (let i = 0; i < nums.length; i++) {
            // Check if the current element is not already included in the current permutation
            if (!currentPermutation.includes(nums[i])) {
                // Add the current element to the current permutation
                currentPermutation.push(nums[i]);
                // Recursively call the backtrack function with the updated index and permutation
                backtrack(index + 1, currentPermutation);
                // Remove the last element from the current permutation to backtrack to the previous state
                currentPermutation.pop();
            }
        }
    };
    
    // Start the backtracking process with an initial index of 0 and an empty permutation
    backtrack(0, []);
    // Return the result array containing all the permutations
    return result;
};