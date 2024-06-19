/*
Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.
A grouped array is an object where each key is the output of fn(arr[i]) and 
each value is an array containing all items in the original array with that key.
The provided callback fn will accept an item in the array and return a string key.
The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.
Please solve it without lodash's _.groupBy function.

Example 1:
Input: 
array = [
  {"id":"1"},
  {"id":"1"},
  {"id":"2"}
], 
fn = function (item) { 
  return item.id; 
}
Output: 
{ 
  "1": [{"id": "1"}, {"id": "1"}],   
  "2": [{"id": "2"}] 
}
Explanation:
Output is from array.groupBy(fn).
The selector function gets the "id" out of each item in the array.
There are two objects with an "id" of 1. Both of those objects are put in the first array.
There is one object with an "id" of 2. That object is put in the second array.

Example 2:
Input: 
array = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9]
]
fn = function (list) { 
  return String(list[0]); 
}
Output: 
{ 
  "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]] 
}
Explanation:
The array can be of any type. In this case, the selector function defines the key as being the first element in the array. 
All the arrays have 1 as their first element so they are grouped together.
{
  "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
}

Example 3:
Input: 
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
fn = function (n) { 
  return String(n > 5);
}
Output:
{
  "true": [6, 7, 8, 9, 10],
  "false": [1, 2, 3, 4, 5]
}
Explanation:
The selector function splits the array by whether each number is greater than 5.
 
Constraints:
0 <= array.length <= 105
fn returns a string
*/
/**
 * @param {Function} fn
 * @return {Object}
 */
// This line defines a new method called 'groupBy' on the 'Array.prototype'. 
//This means that any array in JavaScript will now have access to this 'groupBy' method.
// The 'fn' parameter is a function that will be used to generate the keys for the grouped object.
Array.prototype.groupBy = function(fn) {
    // This line initializes an empty object called 'grouped'. This object will store the grouped elements.
    let grouped = {};
    // This is a 'for' loop that iterates through the array ('this').
    // 'i' is the loop counter, initialized to 0. It represents the index of the current element in the array.
    // The loop continues as long as 'i' is less than the length of the array.
    for (let i = 0; i < this.length; i++) {
        // This line calls the provided 'fn' function with the current element of the array ('this[i]').
        // The result of 'fn(this[i])' is stored in the 'key' variable. This 'key' will be used to group the elements.
        let key = fn(this[i]);
        // This line checks if the 'key' already exists as a property in the 'grouped' object.
        // If the 'key' doesn't exist, it means this is the first time we're encountering this key.
        if (grouped[key] === undefined) {
            // If the 'key' doesn't exist, this line creates a new empty array and assigns it to the 'key' property in the 'grouped' object. This array will hold all elements with this 'key'.
            grouped[key] = [];
        }
        // This line adds the current element ('this[i]') to the array associated with the 'key' in the 'grouped' object.
        grouped[key].push(this[i]);
    }
    // After the loop has finished iterating through all elements in the array, this line returns the 'grouped' object, which now contains the grouped elements.
    return grouped;
};
/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */