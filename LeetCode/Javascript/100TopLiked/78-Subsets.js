/*
Given an integer array nums of unique elements, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:
Input: nums = [0]
Output: [[],[0]]
 
Constraints:
1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [[]]; // Initialize an array 'result' to store all subsets. Start with an empty subset.
    for (let i = 0; i < nums.length; i++) { // Iterate through each element in the input array 'nums'.
        let len = result.length; // Get the current length of the 'result' array.
        for (let j = 0; j < len; j++) { // Iterate through each existing subset in 'result'.
            result.push([...result[j], nums[i]]); // Create a new subset by adding the current element 'nums[i]' to each existing subset in 'result' and push it to the 'result' array.
        }
    }
    return result; // Return the 'result' array containing all possible subsets.
};