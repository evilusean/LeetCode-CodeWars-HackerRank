/* CACHE WITH TIME LIMIT
Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
The class has three public methods:
set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed,
the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. 
Both the value and duration should be overwritten if the key already exists.
get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
count(): returns the count of un-expired keys.
 
Example 1:
Input: 
actions = ["TimeLimitedCache", "set", "get", "count", "get"]
values = [[], [1, 42, 100], [1], [], [1]]
timeDelays = [0, 0, 50, 50, 150]
Output: [null, false, 42, 1, -1]
Explanation:
At t=0, the cache is constructed.
At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn't exist so false is returned.
At t=50, key=1 is requested and the value of 42 is returned.
At t=50, count() is called and there is one active key in the cache.
At t=100, key=1 expires.
At t=150, get(1) is called but -1 is returned because the cache is empty.

Example 2:
Input: 
actions = ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]
values = [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]
timeDelays = [0, 0, 40, 50, 120, 200, 250]
Output: [null, false, true, 50, 50, -1, 0]
Explanation:
At t=0, the cache is constructed.
At t=0, a key-value pair (1: 42) is added with a time limit of 50ms. The value doesn't exist so false is returned.
At t=40, a key-value pair (1: 50) is added with a time limit of 100ms. A non-expired value already existed so true is returned and the old value was overwritten.
At t=50, get(1) is called which returned 50.
At t=120, get(1) is called which returned 50.
At t=140, key=1 expires.
At t=200, get(1) is called but the cache is empty so -1 is returned.
At t=250, count() returns 0 because the cache is empty.

Constraints:
0 <= key, value <= 109
0 <= duration <= 1000
1 <= actions.length <= 100
actions.length === values.length
actions.length === timeDelays.length
0 <= timeDelays[i] <= 1450
actions[i] is one of "TimeLimitedCache", "set", "get" and "count"
First action is always "TimeLimitedCache" and must be executed immediately, with a 0-millisecond delay
*/
/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
/** 
 * @param {number} key
 * @return {number} value associated with key
 */
/** 
 * @return {number} count of non-expired keys
 */
/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
var TimeLimitedCache = function() {
    // Initialize the cache as an empty object
    this.cache = {};
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    // Get the current time in milliseconds
    const currentTime = Date.now();
    // Calculate the expiration time by adding the duration to the current time
    const expirationTime = currentTime + duration;
    // Check if the key already exists in the cache and its expiration time is greater than the current time
    if (this.cache[key] && this.cache[key].expirationTime > currentTime) {
        // If the key exists and is not expired, update the value and expiration time
        this.cache[key] = { value, expirationTime };
        // Return true to indicate that the key already existed
        return true;
    } else {
        // If the key doesn't exist or is expired, add the new key-value pair to the cache
        this.cache[key] = { value, expirationTime };
        // Return false to indicate that the key didn't exist
        return false;
    }
};

TimeLimitedCache.prototype.get = function(key) {
    // Get the current time in milliseconds
    const currentTime = Date.now();
    // Check if the key exists in the cache and its expiration time is greater than the current time
    if (this.cache[key] && this.cache[key].expirationTime > currentTime) {
        // If the key exists and is not expired, return the associated value
        return this.cache[key].value;
    } else {
        // If the key doesn't exist or is expired, return -1
        return -1;
    }
};

TimeLimitedCache.prototype.count = function() {
    // Get the current time in milliseconds
    const currentTime = Date.now();
    // Initialize a counter to keep track of the number of non-expired keys
    let count = 0;
    // Iterate over each key in the cache
    for (const key in this.cache) {
        // Check if the expiration time of the key is greater than the current time
        if (this.cache[key].expirationTime > currentTime) {
            // If the key is not expired, increment the counter
            count++;
        }
    }
    // Return the count of non-expired keys
    return count;
};