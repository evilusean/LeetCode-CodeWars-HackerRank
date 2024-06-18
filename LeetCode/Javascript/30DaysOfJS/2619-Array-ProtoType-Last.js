/*
Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element.
 If there are no elements in the array, it should return -1.
You may assume the array is the output of JSON.parse.

Example 1:
Input: nums = [null, {}, 3]
Output: 3
Explanation: Calling nums.last() should return the last element: 3.

Example 2:
Input: nums = []
Output: -1
Explanation: Because there are no elements, return -1.
 
Constraints:
arr is a valid JSON array
0 <= arr.length <= 1000
*/
/**
 * @return {null|boolean|number|string|Array|Object}
 */
// This line defines a new method called 'last' on the 'Array.prototype'. This means that any array in JavaScript will now have access to this 'last' method.
Array.prototype.last = function() {
    // This line checks if the array ('this') is empty. 'this.length' represents the number of elements in the array.
    if (this.length === 0) {
        // If the array is empty ('this.length === 0'), the function returns '-1'.
        return -1;
    } else {
        // If the array is not empty, this block of code executes.
        // This line returns the last element of the array.
        // 'this.length - 1' calculates the index of the last element (remember that array indices start at 0).
        // 'this[this.length - 1]' accesses the element at that index and returns it.
        return this[this.length - 1];
    }
};
/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */