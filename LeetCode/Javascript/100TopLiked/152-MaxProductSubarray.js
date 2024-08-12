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
    if (nums.length === 0) {
        return 0;
    }
    let maxSoFar = nums[0];
    let minSoFar = nums[0];
    let maxProduct = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let current = nums[i];
        let tempMax = Math.max(current, Math.max(maxSoFar * current, minSoFar * current));
        let tempMin = Math.min(current, Math.min(maxSoFar * current, minSoFar * current));
        maxSoFar = tempMax;
        minSoFar = tempMin;
        maxProduct = Math.max(maxProduct, maxSoFar);
    }
    return maxProduct;
};