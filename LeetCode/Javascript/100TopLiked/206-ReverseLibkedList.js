/*
https://leetcode.com/problems/reverse-linked-list/description/?envType=study-plan-v2&envId=top-100-liked
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []

Constraints:
The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000

Follow up: A linked list can be reversed either iteratively or recursively. 
Could you implement both?
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
var reverseList = function(head) {
    let prev = null; // Initialize the previous node to null
    let curr = head; // Initialize the current node to the head of the list
    let next = null; // Initialize the next node to null

    // Iterate through the linked list
    while (curr !== null) {
        next = curr.next; // Store the next node
        curr.next = prev; // Reverse the pointer of the current node
        prev = curr; // Move the previous node to the current node
        curr = next; // Move the current node to the next node
    }

    return prev; // Return the new head of the reversed list (which is the last node of the original list)
};