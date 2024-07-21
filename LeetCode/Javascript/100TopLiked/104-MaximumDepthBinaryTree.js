/*
https://leetcode.com/problems/maximum-depth-of-binary-tree/description/?envType=study-plan-v2&envId=top-100-liked
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2

Constraints:
The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
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
 * @return {number}
 */
var maxDepth = function(root) {
    // If the root is null, the tree is empty, so the depth is 0
    if (root === null) {
        return 0;
    }
    // Recursively calculate the maximum depth of the left and right subtrees
    let leftDepth = maxDepth(root.left); // Call maxDepth recursively on the left subtree
    let rightDepth = maxDepth(root.right); // Call maxDepth recursively on the right subtree
    // Return the maximum depth of the two subtrees plus 1 (for the current node)
    return Math.max(leftDepth, rightDepth) + 1; // Return the maximum depth between the left and right subtrees, plus 1 to account for the current node.
};