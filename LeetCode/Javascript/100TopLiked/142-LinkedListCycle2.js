/*
https://leetcode.com/problems/linked-list-cycle-ii/description/?envType=study-plan-v2&envId=top-100-liked
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously 
following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer
 is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.
Do not modify the linked list.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.

Example 2:
Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.

Example 3:
Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.

Constraints:
The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.

Follow up: Can you solve it using O(1) (i.e. constant) memory?
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // If the list is empty or has only one node, there's no cycle
    if (head === null || head.next === null) {
        return null;
    }

    // Initialize two pointers, 'slow' and 'fast', both starting at the head
    let slow = head;
    let fast = head;

    // Iterate through the list
    while (fast !== null && fast.next !== null) {
        slow = slow.next; // Move 'slow' one step forward
        fast = fast.next.next; // Move 'fast' two steps forward

        // If 'slow' and 'fast' meet at any point, there's a cycle
        if (slow === fast) {
            // Reset 'slow' to the head and keep 'fast' at the meeting point
            slow = head;
            // Move both pointers one step at a time
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            // The meeting point is the start of the cycle
            return slow;
        }
    }

    // If 'fast' reaches the end of the list without meeting 'slow', there's no cycle
    return null;
};  