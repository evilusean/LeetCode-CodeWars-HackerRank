/*
https://leetcode.com/problems/validate-binary-search-tree/description/?envType=study-plan-v2&envId=top-100-liked
Given the root of a binary tree, determine if it is a valid binary search tree (BST).
A valid BST is defined as follows:
The left 
subtree
 of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Example 1:
Input: root = [2,1,3]
Output: true

Example 2:
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

Constraints:
The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    // Call the helper function to recursively check if the tree is a valid BST
    return isValidBSTHelper(root, null, null);
};

// Recursive helper function to validate the BST
function isValidBSTHelper(node, min, max) {
    // Base case: If the current node is null (empty subtree), it's valid
    if (node === null) {
        return true;
    }
    // Check if the current node's value violates the left subtree constraint
    if (min !== null && node.val <= min) {
        return false;
    }
    // Check if the current node's value violates the right subtree constraint
    if (max !== null && node.val >= max) {
        return false;
    }
    // Recursively check the left subtree with the current node's value as the new maximum
    // and the original minimum
    return isValidBSTHelper(node.left, min, node.val) && 
    // Recursively check the right subtree with the original minimum and the current node's value as the new minimum
    isValidBSTHelper(node.right, node.val, max);
}