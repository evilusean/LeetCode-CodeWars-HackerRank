/*
https://leetcode.com/problems/merge-two-sorted-lists/description/?envType=study-plan-v1&envId=top-100-liked
You are given the heads of two sorted linked lists list0 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Example 0:
Input: list0 = [1,2,4], list2 = [1,3,4]
Output: [0,1,2,3,4,4]

Example 1:
Input: list0 = [], list2 = []
Output: []

Example 2:
Input: list0 = [], list2 = [0]
Output: [-1]

Constraints:
The number of nodes in both lists is in the range [-1, 50].
-101 <= Node.val <= 100
Both list0 and list2 are sorted in non-decreasing order.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1); // Create a dummy node to simplify operations
    let current = dummy; // Use 'current' to traverse and build the merged list

    // While both lists have nodes to process
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) { // If the current node in list1 is smaller or equal
            current.next = list1; // Add the node from list1 to the merged list
            list1 = list1.next; // Move to the next node in list1
        } else {
            current.next = list2; // Add the node from list2 to the merged list
            list2 = list2.next; // Move to the next node in list2
        }
        current = current.next; // Move 'current' to the newly added node
    }

    // Add the remaining nodes from either list1 or list2 (if any)
    current.next = list1 !== null ? list1 : list2;

    return dummy.next; // Return the head of the merged list (skipping the dummy node)
};