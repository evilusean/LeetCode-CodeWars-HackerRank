/*
https://leetcode.com/problems/merge-intervals/description/?envType=study-plan-v2&envId=top-100-liked
Given an array of intervals where intervals[i] = [starti, endi], 
merge all overlapping intervals, and return an array of the non-overlapping 
intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:
1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // If the input array is empty or has only one interval, return it as is
    if (intervals.length <= 1) {
        return intervals;
    }
    // Sort the intervals based on their starting points
    intervals.sort((a, b) => a[0] - b[0]);
    // Initialize the result array with the first interval
    const result = [intervals[0]];
    // Iterate through the sorted intervals starting from the second interval
    for (let i = 1; i < intervals.length; i++) {
        // Get the last interval in the result array
        const lastInterval = result[result.length - 1];
        // Get the current interval
        const currentInterval = intervals[i];
        // Check if the current interval overlaps with the last interval in the result array
        if (currentInterval[0] <= lastInterval[1]) {
            // If they overlap, merge the intervals by updating the end point of the last interval in the result array
            lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
        } else {
            // If they don't overlap, add the current interval to the result array
            result.push(currentInterval);
        }
    }
    // Return the result array containing the merged intervals
    return result;
};