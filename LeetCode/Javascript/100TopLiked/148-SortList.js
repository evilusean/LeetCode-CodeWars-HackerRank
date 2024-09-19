/*
https://leetcode.com/problems/sort-list/description/?envType=study-plan-v2&envId=top-100-liked
Given the head of a linked list, return the list after sorting it in ascending order.

Example 1:
Input: head = [4,2,1,3]
Output: [1,2,3,4]

Example 2:
Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]

Example 3:
Input: head = []
Output: []

Constraints:
The number of nodes in the list is in the range [0, 5 * 104].
-105 <= Node.val <= 105

Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?
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
  if (head === null || head.next === null) {
        return head;
    }

    // Split the list into two halves
    let [left, right] = splitList(head);

    // Recursively sort the two halves
    left = sortList(left);
    right = sortList(right);

    // Merge the sorted halves
    return mergeSortedLists(left, right);
};

// Function to split the list into two halves
function splitList(head) {
    let slow = head;
    let fast = head;
    let prev = null;

    // Move 'fast' two nodes at a time and 'slow' one node at a time
    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // 'slow' will be at the middle node, so split the list there
    if (prev !== null) {
        prev.next = null; // Disconnect the first half from the second half
    }

    return [head, slow]; // Return the heads of the two halves
}

// Function to merge two sorted linked lists
function mergeSortedLists(list1, list2) {
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
}