/*
https://leetcode.com/problems/trapping-rain-water/description/?envType=study-plan-v2&envId=top-100-liked
Given n non-negative integers representing an elevation map where the width of 
each bar is 1, compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array 
[0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) 
are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9

Constraints:
n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length;
    if (n === 0) {
        return 0;
    }

    let leftMax = new Array(n).fill(0); // Array to store the maximum height to the left of each bar
    let rightMax = new Array(n).fill(0); // Array to store the maximum height to the right of each bar
    let water = 0; // Initialize the total trapped water to 0

    // Calculate the maximum height to the left of each bar
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    // Calculate the maximum height to the right of each bar
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    // Calculate the trapped water for each bar
    for (let i = 0; i < n; i++) {
        // The amount of water trapped at a bar is the minimum of the maximum height to the left and right, minus the height of the bar itself
        water += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return water; // Return the total trapped water
};