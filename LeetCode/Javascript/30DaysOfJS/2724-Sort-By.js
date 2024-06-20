/*
Given an array arr and a function fn, return a sorted array sortedArr. 
You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.
You may assume that fn will never duplicate numbers for a given array.

Example 1:
Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
Output: [1, 2, 3, 4, 5]
Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.

Example 2:
Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
Output: [{"x": -1}, {"x": 0}, {"x": 1}]
Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.

Example 3:
Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
Output: [[10, 1], [5, 2], [3, 4]]
Explanation: arr is sorted in ascending order by number at index=1. 

Constraints:
arr is a valid JSON array
fn is a function that returns a number
1 <= arr.length <= 5 * 105
*/
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    // This line sorts the input array 'arr' using the provided function 'fn' to determine the sort order.
    // The 'sort' method uses a comparison function to determine the order of elements.
    // The comparison function takes two arguments, 'a' and 'b', representing elements from the array.
    // It returns a negative number if 'a' should come before 'b', a positive number if 'a' should come after 'b', and 0 if they are equal.
    // In this case, the comparison function calculates the difference between the results of applying 'fn' to 'a' and 'b'.
    // This difference is used to determine the relative order of 'a' and 'b' in the sorted array.
    return arr.sort((a, b) => fn(a) - fn(b));
};