/*
https://leetcode.com/problems/find-the-duplicate-number/description/?envType=study-plan-v2&envId=top-100-liked
Given an array of integers nums containing n + 1 integers where each integer
 is in the range [1, n] inclusive.
There is only one repeated number in nums, return this repeated number.
You must solve the problem without modifying the array nums and using only 
constant extra space.

Example 1:
Input: nums = [1,3,4,2,2]
Output: 2

Example 2:
Input: nums = [3,1,3,4,2]
Output: 3

Example 3:
Input: nums = [3,3,3,3,3]
Output: 3

Constraints:
1 <= n <= 105
nums.length == n + 1
1 <= nums[i] <= n
All the integers in nums appear only once except for precisely one 
integer which appears two or more times.

Follow up:
How can we prove that at least one duplicate number must exist in nums?
Can you solve the problem in linear runtime complexity?
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
    // Step 1: Initialize the tortoise and hare
    let tortoise = nums[0];
    let hare = nums[0];

    // Step 2: Find the intersection point in the cycle
    do {
        tortoise = nums[tortoise]; // Move tortoise by 1 step
        hare = nums[nums[hare]];    // Move hare by 2 steps
    } while (tortoise !== hare);

    // Step 3: Find the entrance to the cycle
    tortoise = nums[0]; // Start from the beginning
    while (tortoise !== hare) {
        tortoise = nums[tortoise]; // Move tortoise by 1 step
        hare = nums[hare];          // Move hare by 1 step
    }

    return hare; // The duplicate number
}