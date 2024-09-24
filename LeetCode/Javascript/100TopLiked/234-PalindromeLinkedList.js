/*
https://leetcode.com/problems/palindrome-linked-list/description/?envType=study-plan-v2&envId=top-100-liked
Given the head of a singly linked list, return true if it is a 
palindrome or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false

Constraints:
The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9

Follow up: Could you do it in O(n) time and O(1) space?
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head === null || head.next === null) {
        return true; // Empty or single-node list is a palindrome
    }

    // Find the middle of the linked list
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the linked list
    let prev = null;
    let curr = slow;
    while (curr !== null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    // Compare the first half and the reversed second half
    let firstHalfStart = head;
    let secondHalfStart = prev;
    while (secondHalfStart !== null) {
        if (firstHalfStart.val !== secondHalfStart.val) {
            return false; // Not a palindrome
        }
        firstHalfStart = firstHalfStart.next;
        secondHalfStart = secondHalfStart.next;
    }

    return true; // It's a palindrome
};