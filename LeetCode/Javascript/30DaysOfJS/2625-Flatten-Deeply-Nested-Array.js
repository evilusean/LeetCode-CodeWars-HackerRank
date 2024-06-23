/*
Given a multi-dimensional array arr and a depth n, return a flattened version of that array.
A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.
A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. 
This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are 
considered to be 0.
Please solve it without the built-in Array.flat method.

Example 1:
Input
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 0
Output
[1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
Explanation
Passing a depth of n=0 will always result in the original array. This is because the smallest possible depth of a subarray (0) is not less than n=0. 
Thus, no subarray should be flattened. 

Example 2:
Input
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 1
Output
[1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
Explanation
The subarrays starting with 4, 7, and 13 are all flattened. This is because their depth of 0 is less than 1. However [9, 10, 11] 
remains unflattened because its depth is 1.

Example 3:
Input
arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 2
Output
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
Explanation
The maximum depth of any subarray is 1. Thus, all of them are flattened.

Constraints:
0 <= count of numbers in arr <= 105
0 <= count of subarrays in arr <= 105
maxDepth <= 1000
-1000 <= each number <= 1000
0 <= n <= 1000
*/
/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    // Initialize an empty array called 'flattened' to store the flattened elements.
    let flattened = [];
    // Iterate through each element in the input array 'arr'.
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element 'arr[i]' is an array using 'Array.isArray(arr[i])' and if the remaining depth 'n' is greater than 0.
        if (Array.isArray(arr[i]) && n > 0) {
            // If both conditions are true, it means we need to flatten this subarray further.
            // Recursively call the 'flat' function with the current subarray 'arr[i]' and a reduced depth 'n - 1'.
            // The result of this recursive call (which is a flattened version of the subarray) is then concatenated to the 'flattened' array using 'concat'.
            flattened = flattened.concat(flat(arr[i], n - 1));
        } else {
            // If the current element is not an array or if the remaining depth 'n' is 0, simply push the current element 'arr[i]' to the 'flattened' array.
            flattened.push(arr[i]);
        }
    }
    // After processing all elements in the input array, return the 'flattened' array, which now contains the flattened version of the original array.
    return flattened;
};

/* ABOVE CODE DIDN'T PASS TEST, USED BELOW TO PASS LEETCODE
function flat(arr, n) {
  const result = []; // Store the flattened elements

  for (let item of arr) {
    if (Array.isArray(item) && n > 0) {
      // If the element is an array and we haven't reached max depth...
      result.push(...flat(item, n - 1)); // Recursively flatten it
    } else {
      result.push(item); // Otherwise, just add the element directly
    }
  }

  return result;
}
  */