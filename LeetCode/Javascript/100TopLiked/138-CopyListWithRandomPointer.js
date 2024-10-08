/*
https://leetcode.com/problems/copy-list-with-random-pointer/description/?envType=study-plan-v2&envId=top-100-liked
A linked list of length n is given such that each node contains an additional random pointer, 
which could point to any node in the list, or null.
Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes,
 where each new node has its value set to the value of its corresponding original node. 
 Both the next and random pointer of the new nodes should point to new nodes in the copied list such 
 that the pointers in the original list and copied list represent the same list state. 
 None of the pointers in the new list should point to nodes in the original list.
For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding
 two nodes x and y in the copied list, x.random --> y.
Return the head of the copied linked list.
The linked list is represented in the input/output as a list of n nodes.
 Each node is represented as a pair of [val, random_index] where:
val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points to,
 or null if it does not point to any node.
Your code will only be given the head of the original linked list.

Example 1:
Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

Example 2:
Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]

Example 3:
Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]

Constraints:
0 <= n <= 1000
-104 <= Node.val <= 104
Node.random is null or is pointing to some node in the linked list.
*/
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (!head) { // If the list is empty, return null
        return null;
    }

    let current = head; // Start from the head of the original list
    const map = new Map(); // Create a map to store the mapping between original and copied nodes

    // First pass: Create a copy of each node and store the mapping in the map
    while (current) {
        map.set(current, new _Node(current.val)); // Create a new node with the same value and store the mapping
        current = current.next; // Move to the next node in the original list
    }

    current = head; // Reset current to the head of the original list

    // Second pass: Set the next and random pointers of the copied nodes
    while (current) {
        const copiedNode = map.get(current); // Get the corresponding copied node from the map
        copiedNode.next = map.get(current.next) || null; // Set the next pointer of the copied node
        copiedNode.random = map.get(current.random) || null; // Set the random pointer of the copied node
        current = current.next; // Move to the next node in the original list
    }

    return map.get(head); // Return the head of the copied list
};