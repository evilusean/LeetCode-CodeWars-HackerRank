/*
https://leetcode.com/problems/largest-rectangle-in-histogram/description/?envType=study-plan-v2&envId=top-100-liked
Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

Example 1:
Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.

Example 2:
Input: heights = [2,4]
Output: 4
 

Constraints:
1 <= heights.length <= 105
0 <= heights[i] <= 104
*/
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0; // Initialize the maximum area to 0
    const stack = []; // Initialize an empty stack to store indices of heights

    // Iterate through the heights array
    for (let i = 0; i <= heights.length; i++) {
        // Calculate the current height (consider 0 height for the end of the array)
        let currentHeight = i === heights.length ? 0 : heights[i];

        // While the stack is not empty and the current height is less than the height at the top of the stack
        while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
            // Pop the index of the top height from the stack
            const topIndex = stack.pop();
            const height = heights[topIndex];

            // Calculate the width of the rectangle
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;

            // Calculate the area of the rectangle and update maxArea if necessary
            maxArea = Math.max(maxArea, height * width);
        }
        // Push the current index onto the stack
        stack.push(i);
    }

    // Return the maximum area found
    return maxArea;
};