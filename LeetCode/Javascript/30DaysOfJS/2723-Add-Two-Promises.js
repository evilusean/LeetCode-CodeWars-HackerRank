/*
Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. 
The returned promise should resolve with the sum of the two numbers.
 

Example 1:
Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
Output: 7
Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7.
 The time the returned promise resolves is not judged for this problem.

Example 2:
Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
Output: -2
Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.
 

Constraints:
promise1 and promise2 are promises that resolve with a number
*/
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  // Define an asynchronous function called addTwoPromises that takes two promises, promise1 and promise2, as arguments.
  // The function returns a new promise that resolves with the sum of the two numbers resolved by the input promises.

  // Use the async/await syntax to handle the asynchronous nature of promises.
  // The await keyword is used to wait for the resolutions of both promise1 and promise2.
  // This ensures that the function does not proceed until both promises have resolved.

  // Once both promises have resolved, their resolved values are stored in the variables result1 and result2.
  // The function then calculates the sum of these values and returns it.

  const result1 = await promise1;
  const result2 = await promise2;
  return result1 + result2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
