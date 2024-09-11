/*
https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/?envType=study-plan-v2&envId=top-100-liked
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]

Constraints:
The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 

Follow up: Could you do this in one pass?
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head); // Create a dummy node to simplify edge cases
    let first = dummy; // Initialize the first pointer to the dummy node
    let second = dummy; // Initialize the second pointer to the dummy node

    // Move the first pointer n steps ahead
    for (let i = 1; i <= n + 1; i++) {
        first = first.next;
    }

    // Move both pointers until the first pointer reaches the end of the list
    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    // Remove the nth node from the end by updating the next pointer of the second node
    second.next = second.next.next;

    // Return the head of the modified list (next node after the dummy node)
    return dummy.next;
};  