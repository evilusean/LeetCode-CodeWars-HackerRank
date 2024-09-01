/*
https://leetcode.com/problems/longest-consecutive-sequence/description/?envType=study-plan-v2&envId=top-100-liked
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Constraints:
0 <= nums.length <= 105
-109 <= nums[i] <= 109
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let longestSequenceLength = 0; // Initialize the length of the longest consecutive sequence to 0
    const numSet = new Set(nums); // Create a Set to store the unique numbers from the input array

    for (const num of numSet) { // Iterate through each number in the Set
        if (!numSet.has(num - 1)) { // Check if the previous number (num - 1) is not present in the Set
            let currentNum = num; // If the previous number is not present, it means the current number is the start of a potential consecutive sequence
            let currentSequenceLength = 1; // Initialize the length of the current consecutive sequence to 1

            while (numSet.has(currentNum + 1)) { // Keep checking for the next consecutive number (currentNum + 1) in the Set
                currentNum++; // If the next consecutive number is present, increment the current number and the length of the current sequence
                currentSequenceLength++;
            }

            longestSequenceLength = Math.max(longestSequenceLength, currentSequenceLength); // Update the length of the longest consecutive sequence if the current sequence is longer
        }
    }

    return longestSequenceLength; // Return the length of the longest consecutive sequence found
};