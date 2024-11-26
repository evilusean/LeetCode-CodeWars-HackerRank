/*
https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-100-liked
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

Follow-up: Could you solve the problem in linear time and in O(1) space?
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0; // Initialize a counter variable to 0
    let candidate = null; // Initialize a candidate variable to null

    // Iterate through the input array 'nums'
    for (let num of nums) {
        // If the counter is 0, set the current number as the new candidate
        if (count === 0) {
            candidate = num;
        }

        // If the current number is equal to the candidate, increment the counter
        // Otherwise, decrement the counter
        if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    // After iterating through the array, the 'candidate' will hold the majority element
    return candidate;
};