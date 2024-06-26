/*
Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:
When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

Example 1:
Input: nums = [[1,2],[3,4]], operation = "Add"
Output: 10
Explanation:
const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
obj1 + obj2; // 10

Example 2:
Input: nums = [[23,98,42,70]], operation = "String"
Output: "[23,98,42,70]"
Explanation:
const obj = new ArrayWrapper([23,98,42,70]);
String(obj); // "[23,98,42,70]"

Example 3:
Input: nums = [[],[]], operation = "Add"
Output: 0
Explanation:
const obj1 = new ArrayWrapper([]);
const obj2 = new ArrayWrapper([]);
obj1 + obj2; // 0

Constraints:
0 <= nums.length <= 1000
0 <= nums[i] <= 1000
Note: nums is the array passed to the constructor
*/
/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    // Store the input array in the 'nums' property of the object.
    this.nums = nums;
};

/**
 * @return {number} - The sum of all elements in the array.
 */
ArrayWrapper.prototype.valueOf = function() {
    // Use the 'reduce' method to sum all elements in the 'nums' array.
    // The initial value of 'sum' is 0.
    return this.nums.reduce((sum, num) => sum + num, 0);
}

/**
 * @return {string} - A string representation of the array in the format "[element1,element2,...]".
 */
ArrayWrapper.prototype.toString = function() {
    // Use template literals to create a string representation of the array.
    // Join the elements of the 'nums' array with commas.
    return `[${this.nums.join(',')}]`;
}



/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */