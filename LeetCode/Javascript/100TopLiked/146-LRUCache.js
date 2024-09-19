/*
https://leetcode.com/problems/lru-cache/description/?envType=study-plan-v2&envId=top-100-liked
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
Implement the LRUCache class:
LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

Example 1:
Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation:
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4

Constraints:
1 <= capacity <= 3000
0 <= key <= 104
0 <= value <= 105
At most 2 * 105 calls will be made to get and put.
*/
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity; // Store the capacity of the cache
    this.map = new Map(); // Use a Map to store key-value pairs
    this.head = new Node(0, 0); // Create a dummy head node for the doubly linked list
    this.tail = new Node(0, 0); // Create a dummy tail node for the doubly linked list
    this.head.next = this.tail; // Connect the head to the tail
    this.tail.prev = this.head; // Connect the tail to the head
};

// Define a Node class for the doubly linked list
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

// Add a node to the head of the doubly linked list
LRUCache.prototype.addNode = function(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
};

// Remove a node from the doubly linked list
LRUCache.prototype.removeNode = function(node) {
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map.has(key)) { // If the key exists in the cache
        let node = this.map.get(key); // Get the node associated with the key
        this.removeNode(node); // Remove the node from its current position
        this.addNode(node); // Add the node to the head of the list (most recently used)
        return node.value; // Return the value of the node
    } else {
        return -1; // If the key doesn't exist, return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) { // If the key already exists
        let node = this.map.get(key); // Get the existing node
        node.value = value; // Update the value of the node
        this.removeNode(node); // Remove the node from its current position
        this.addNode(node); // Add the node to the head of the list (most recently used)
    } else {
        let node = new Node(key, value); // Create a new node
        this.map.set(key, node); // Add the node to the map
        this.addNode(node); // Add the node to the head of the list
        if (this.map.size > this.capacity) { // If the cache exceeds its capacity
            let leastRecentlyUsed = this.tail.prev; // Get the least recently used node (tail's previous node)
            this.removeNode(leastRecentlyUsed); // Remove the least recently used node from the list
            this.map.delete(leastRecentlyUsed.key); // Remove the least recently used node from the map
        }
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */