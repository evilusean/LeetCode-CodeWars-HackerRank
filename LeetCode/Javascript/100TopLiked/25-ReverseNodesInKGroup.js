/*
https://leetcode.com/problems/reverse-nodes-in-k-group/description/?envType=study-plan-v2&envId=top-100-liked
Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
k is a positive integer and is less than or equal to the length of the linked list. 
If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
You may not alter the values in the list's nodes, only nodes themselves may be changed.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

Example 2:
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
 

Constraints:
The number of nodes in the list is n.
1 <= k <= n <= 5000
0 <= Node.val <= 1000

Follow-up: Can you solve the problem in O(1) extra memory space?
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let dummy = new ListNode(0, head); // Create a dummy node to simplify operations
    let groupPrev = dummy; // 'groupPrev' points to the node before the current group

    while (true) {
        let kth = getKth(groupPrev, k); // Find the kth node from 'groupPrev'
        if (!kth) { // If there are less than k nodes remaining, break the loop
            break;
        }
        let groupNext = kth.next; // 'groupNext' points to the node after the current group

        // Reverse the group
        let prev = kth.next; // 'prev' starts from the node after the current group
        let curr = groupPrev.next; // 'curr' starts from the first node of the current group
        while (curr !== groupNext) { // Iterate through the group
            let tmp = curr.next; // Store the next node
            curr.next = prev; // Reverse the link
            prev = curr; // Move 'prev' forward
            curr = tmp; // Move 'curr' forward
        }

        // Connect the reversed group to the previous and next groups
        let tmp = groupPrev.next; // Store the first node of the reversed group
        groupPrev.next = kth; // Connect 'groupPrev' to the new head of the reversed group
        groupPrev = tmp; // Move 'groupPrev' to the last node of the reversed group (which was the first node before reversal)
    }

    return dummy.next; // Return the head of the modified list
};

// Helper function to find the kth node from a given starting node
function getKth(curr, k) {
    while (curr && k > 0) { // Iterate until we find the kth node or reach the end of the list
        curr = curr.next;
        k--;
    }
    return curr; // Return the kth node (or null if k is greater than the remaining nodes)
}