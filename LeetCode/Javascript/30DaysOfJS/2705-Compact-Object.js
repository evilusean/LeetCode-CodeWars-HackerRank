/*
Given an object or array obj, return a compact object.
A compact object is the same as the original object, except with keys containing falsy values removed. 
This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. 
A value is considered falsy when Boolean(value) returns false.
You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

Example 1:
Input: obj = [null, 0, false, 1]
Output: [1]
Explanation: All falsy values have been removed from the array.

Example 2:
Input: obj = {"a": null, "b": [false, 1]}
Output: {"b": [1]}
Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.

Example 3:
Input: obj = [null, 0, 5, [0], [false, 16]]
Output: [5, [], [16]]
Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.

Constraints:
obj is a valid JSON object
2 <= JSON.stringify(obj).length <= 106
*/
/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    // If the input is null or not an object, return it as is.
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // If the input is an array, filter out falsy values and recursively compact each element.
    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject);
    }

    // If the input is an object, create a new object to store the results.
    const result = {};
    // Iterate over each key in the object.
    for (const key in obj) {
        // Recursively compact the value associated with the key.
        const value = compactObject(obj[key]);
        // If the compacted value is truthy, add it to the result object.
        if (Boolean(value)) {
            result[key] = value;
        }
    }
    // Return the resulting object.
    return result;
};
