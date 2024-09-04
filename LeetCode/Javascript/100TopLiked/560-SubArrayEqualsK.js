/*
https://leetcode.com/problems/subarray-sum-equals-k/description/?envType=study-plan-v2&envId=top-100-liked
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:
Input: nums = [1,1,1], k = 2
Output: 2

Example 2:
Input: nums = [1,2,3], k = 3
Output: 2

Constraints:
1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number} 
 */
var subarraySum = function(nums, k) {
    let count = 0; // Initialize count of subarrays with sum k to 0
    let sum = 0; // Initialize running sum to 0
    const map = new Map(); // Initialize a map to store cumulative sum frequencies
    map.set(0, 1); // Initialize the map with sum 0 and frequency 1

    for (let i = 0; i < nums.length; i++) { // Iterate through each element in the array
        sum += nums[i]; // Calculate cumulative sum till current index

        // If (cumulative sum - k) exists in the map, it means we have a subarray with sum k
        if (map.has(sum - k)) {
            count += map.get(sum - k); // Add the frequency of (cumulative sum - k) to the count
        }

        // Update the frequency of the current cumulative sum in the map
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count; // Return the total count of subarrays with sum k
};