/*
https://leetcode.com/problems/merge-k-sorted-lists/description/?envType=study-plan-v2&envId=top-100-liked
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.

Example 1:
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

Example 2:
Input: lists = []
Output: []

Example 3:
Input: lists = [[]]
Output: []

Constraints:
k == lists.length
0 <= k <= 104
0 <= lists[i].length <= 500
-104 <= lists[i][j] <= 104
lists[i] is sorted in ascending order.
The sum of lists[i].length will not exceed 104.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) { // If the input list is empty, return null
        return null;
    }
    
    // Merge lists two at a time until only one list remains
    while (lists.length > 1) {
        let mergedLists = []; // Create a new array to store the merged lists
        for (let i = 0; i < lists.length; i += 2) { // Iterate through the lists, taking two at a time
            let list1 = lists[i]; // Get the first list
            let list2 = i + 1 < lists.length ? lists[i + 1] : null; // Get the second list, or null if there's no second list
            mergedLists.push(mergeTwoLists(list1, list2)); // Merge the two lists and add the merged list to the new array
        }
        lists = mergedLists; // Update the lists array with the merged lists
    }
    
    return lists[0]; // Return the only remaining list, which is the merged list of all input lists
};

// Helper function to merge two sorted linked lists
function mergeTwoLists(list1, list2) {
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