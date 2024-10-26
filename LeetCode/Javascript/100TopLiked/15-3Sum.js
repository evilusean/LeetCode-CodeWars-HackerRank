/*
https://leetcode.com/problems/3sum/description/?envType=study-plan-v2&envId=top-100-liked
Given an integer array nums, return all the triplets 
[nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

Constraints:
3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    const result = []; // Initialize an empty array to store the resulting triplets

    for (let i = 0; i < nums.length - 2; i++) { // Iterate through the array until the third-to-last element
        // Skip duplicate elements to avoid duplicate triplets
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1; // Initialize the left pointer to the element after the current element
        let right = nums.length - 1; // Initialize the right pointer to the last element of the array

        while (left < right) { // Continue searching for triplets while the left pointer is less than the right pointer
            const sum = nums[i] + nums[left] + nums[right]; // Calculate the sum of the current triplet

            if (sum === 0) { // If the sum is 0, we found a valid triplet
                result.push([nums[i], nums[left], nums[right]]); // Add the triplet to the result array

                // Skip duplicate elements to avoid duplicate triplets
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                left++; // Move the left pointer to the right
                right--; // Move the right pointer to the left
            } else if (sum < 0) { // If the sum is less than 0, we need to increase the sum, so move the left pointer to the right
                left++;
            } else { // If the sum is greater than 0, we need to decrease the sum, so move the right pointer to the left
                right--;
            }
        }
    }

    return result; // Return the array of triplets
};