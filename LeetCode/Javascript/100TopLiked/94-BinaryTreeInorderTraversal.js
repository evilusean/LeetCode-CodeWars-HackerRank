/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]

Example 2:
Input: root = []
Output: []

Example 3:
Input: root = [1]
Output: [1]
 
Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // Initialize an empty array to store the inorder traversal result
    let result = [];
    // Initialize an empty stack to store nodes during traversal
    let stack = [];
    // Initialize the current node to the root of the tree
    let current = root;
    // Iterate until the current node is null and the stack is empty
    while (current !== null || stack.length > 0) {
        // While the current node is not null, push it onto the stack and move to its left child
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        // Pop the top node from the stack, this is the current node
        current = stack.pop();
        // Add the value of the current node to the result array
        result.push(current.val);
        // Move to the right child of the current node
        current = current.right;
    }
    // Return the inorder traversal result
    return result;
};