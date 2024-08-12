/*
https://leetcode.com/problems/maximum-product-subarray/description/?envType=study-plan-v2&envId=top-100-liked
Given an integer array nums, find a subarray  that has the largest product, and return the product.
The test cases are generated so that the answer will fit in a 32-bit integer.

Example 1:
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:
Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 
Constraints:
1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    // If the input array is empty, return 0 as there's no subarray
    if (nums.length === 0) {
        return 0;
    }
    // Initialize maxSoFar to the first element of the array, as it's the maximum product so far
    let maxSoFar = nums[0];
    // Initialize minSoFar to the first element of the array, as it's the minimum product so far
    let minSoFar = nums[0];
    // Initialize maxProduct to the first element of the array, as it's the maximum product found so far
    let maxProduct = nums[0];
    // Iterate through the array starting from the second element (index 1)
    for (let i = 1; i < nums.length; i++) {
        // Get the current element of the array
        let current = nums[i];
        // Calculate the temporary maximum product by considering three possibilities:
        // 1. The current element itself
        // 2. The product of the current element and the previous maximum product
        // 3. The product of the current element and the previous minimum product
        let tempMax = Math.max(current, Math.max(maxSoFar * current, minSoFar * current));
        // Calculate the temporary minimum product by considering three possibilities:
        // 1. The current element itself
        // 2. The product of the current element and the previous maximum product
        // 3. The product of the current element and the previous minimum product
        let tempMin = Math.min(current, Math.min(maxSoFar * current, minSoFar * current));
        // Update maxSoFar with the temporary maximum product
        maxSoFar = tempMax;
        // Update minSoFar with the temporary minimum product
        minSoFar = tempMin;
        // Update maxProduct with the maximum of its current value and the current maximum product
        maxProduct = Math.max(maxProduct, maxSoFar);
    }
    // Return the maximum product found
    return maxProduct;
};