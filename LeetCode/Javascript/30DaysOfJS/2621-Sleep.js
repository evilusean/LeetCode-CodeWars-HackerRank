/*
Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

Example 1:
Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});

Example 2:
Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.
 
Constraints:
1 <= millis <= 1000
*/

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  // Create a new promise that will be resolved after the specified delay.
  return new Promise((resolve) => {
    // Schedule a callback function to be executed after the specified delay using setTimeout.
    setTimeout(() => {
      // Resolve the promise with the value of millis.
      resolve(millis);
    }, millis);
  });
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
