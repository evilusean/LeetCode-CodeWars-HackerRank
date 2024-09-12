/*
https://leetcode.com/problems/swap-nodes-in-pairs/description/?envType=study-plan-v2&envId=top-100-liked
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem 
without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]
Explanation:

Example 2:
Input: head = []
Output: []

Example 3:
Input: head = [1]
Output: [1]

Example 4:
Input: head = [1,2,3]
Output: [2,1,3]

Constraints:
The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummy = new ListNode(0, head); // Create a dummy node to simplify operations
    let prev = dummy; // Initialize 'prev' to the dummy node

    while (head !== null && head.next !== null) {
        let first = head; // The first node of the pair
        let second = head.next; // The second node of the pair

        // Swap the nodes
        prev.next = second; // Connect 'prev' to the 'second' node
        first.next = second.next; // Connect 'first' to the node after 'second'
        second.next = first; // Connect 'second' to the 'first' node

        // Move to the next pair
        prev = first; // Update 'prev' to the 'first' node (which is now in the second position)
        head = first.next; // Move 'head' to the next node after the swapped pair
    }

    return dummy.next; // Return the head of the modified list (next node after the dummy node)
};