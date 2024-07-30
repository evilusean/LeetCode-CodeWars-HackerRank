/*
https://leetcode.com/problems/diameter-of-binary-tree/description/?envType=study-plan-v2&envId=top-100-liked
Given the root of a binary tree, return the length of the diameter of the tree.
The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
 This path may or may not pass through the root.
The length of a path between two nodes is represented by the number of edges between them.

Example 1:
Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

Example 2:
Input: root = [1,2]
Output: 1

Constraints:
The number of nodes in the tree is in the range [1, 104].
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
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0; // Initialize the maximum diameter to 0

    // Define a recursive helper function to calculate the depth of a subtree and update the maximum diameter
    const dfs = (node) => {
        if (node === null) { // Base case: If the node is null, return 0 (depth of an empty subtree)
            return 0;
        }
        let leftDepth = dfs(node.left); // Recursively calculate the depth of the left subtree
        let rightDepth = dfs(node.right); // Recursively calculate the depth of the right subtree
        // Update the maximum diameter with the maximum of the current diameter (leftDepth + rightDepth) and the previous maximum diameter
        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
        // Return the maximum depth of the current subtree (1 + the maximum of leftDepth and rightDepth)
        return 1 + Math.max(leftDepth, rightDepth);
    };

    // Call the dfs function to calculate the depth of the entire tree and update the maximum diameter
    dfs(root);
    // Return the maximum diameter
    return maxDiameter;
};