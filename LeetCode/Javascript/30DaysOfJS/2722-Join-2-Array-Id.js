/*
Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an
 integer value. 
joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id.
 The returned array should be sorted in ascending order based on the id key.
If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.
If two objects share an id, their properties should be merged into a single object:
If a key only exists in one object, that single key-value pair should be included in the object.
If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

Example 1:
Input: 
arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
], 
arr2 = [
    {"id": 3, "x": 5}
]
Output: 
[
    {"id": 1, "x": 1},
    {"id": 2, "x": 9},
    {"id": 3, "x": 5}
]
Explanation: There are no duplicate ids so arr1 is simply concatenated with arr2.

Example 2:
Input:
arr1 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
], 
arr2 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]
Output: 
[
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]
Explanation: The two objects with id=1 and id=3 are included in the result array without modifiction. The two objects with id=2 are merged together.
 The keys from arr2 override the values in arr1.

Example 3:
Input: 
arr1 = [
    {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
]
arr2 = [
    {"id": 1, "b": {"c": 84}, "v": [1, 3]}
]
Output: [
    {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
]
Explanation: The two objects with id=1 are merged together. For the keys "b" and "v" the values from arr2 are used. Since the key "y" only exists in arr1, 
that value is taken form arr1.
 
Constraints:
arr1 and arr2 are valid JSON arrays
Each object in arr1 and arr2 has a unique integer id key
2 <= JSON.stringify(arr1).length <= 106
2 <= JSON.stringify(arr2).length <= 106
*/
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    // Create an empty object 'merged' to store the merged objects.
    let merged = {};
    // Iterate through each object in the first array 'arr1'.
    for (let i = 0; i < arr1.length; i++) {
        // Assign the current object from 'arr1' to the 'merged' object using its 'id' as the key.
        merged[arr1[i].id] = arr1[i];
    }
    // Iterate through each object in the second array 'arr2'.
    for (let i = 0; i < arr2.length; i++) {
        // Check if the current object's 'id' from 'arr2' already exists as a key in the 'merged' object.
        if (merged[arr2[i].id]) {
            // If the 'id' exists, merge the current object from 'arr2' into the existing object in 'merged' using the spread syntax (...).
            // This ensures that values from 'arr2' override values from 'arr1' if there are duplicate keys.
            merged[arr2[i].id] = {...merged[arr2[i].id], ...arr2[i]};
        } else {
            // If the 'id' doesn't exist in 'merged', simply add the current object from 'arr2' to 'merged'.
            merged[arr2[i].id] = arr2[i];
        }
    }
    // Convert the 'merged' object into an array of values using 'Object.values(merged)'.
    let joinedArray = Object.values(merged);
    // Sort the 'joinedArray' in ascending order based on the 'id' property using the 'sort' method and a comparison function.
    joinedArray.sort((a, b) => a.id - b.id);
    // Return the sorted 'joinedArray'.
    return joinedArray;
};