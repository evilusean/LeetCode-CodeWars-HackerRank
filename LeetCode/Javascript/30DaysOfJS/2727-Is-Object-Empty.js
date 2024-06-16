/*
Given an object or an array, return if it is empty.
An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.

Example 1:
Input: obj = {"x": 5, "y": 42}
Output: false
Explanation: The object has 2 key-value pairs so it is not empty.

Example 2:
Input: obj = {}
Output: true
Explanation: The object doesn't have any key-value pairs so it is empty.

Example 3:
Input: obj = [null, false, 0]
Output: false
Explanation: The array has 3 elements so it is not empty.
 
Constraints:
obj is a valid JSON object or array
2 <= JSON.stringify(obj).length <= 105

Can you solve it in O(1) time?
*/
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // Check if the input 'obj' is an array using Array.isArray()
    if (Array.isArray(obj)) {
        // If 'obj' is an array, return true if its length is 0 (empty array), otherwise return false.
        return obj.length === 0;
    } else {
        // If 'obj' is not an array, it's an object.
        // Get the keys of the object using Object.keys() and check if the length of the keys array is 0.
        // If the length is 0, it means the object has no key-value pairs and is empty, so return true. Otherwise, return false.
        return Object.keys(obj).length === 0;
    }
};