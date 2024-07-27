/*
https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/?envType=study-plan-v2&envId=top-100-liked
Given the root of a binary search tree, and an integer k, 
return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

Example 1:
Input: root = [3,1,4,null,2], k = 1
Output: 1

Example 2:
Input: root = [5,3,6,2,4,null,null,1], k = 3

Output: 3

Constraints:
The number of nodes in the tree is n.
1 <= k <= n <= 104
0 <= Node.val <= 104

Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently,
 how would you optimize?
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // Initialize a counter 'count' to 0 to keep track of the number of nodes visited during inorder traversal.
    let count = 0;
    // Initialize a variable 'result' to null to store the kth smallest value.
    let result = null;
    
    // Define a recursive function 'inorderTraversal' to perform inorder traversal of the BST.
    const inorderTraversal = (node) => {
        // Base case: If the current node is null, return (we've reached the end of a branch).
        if (node === null) {
            return;
        }
        // Recursively traverse the left subtree.
        inorderTraversal(node.left);
        // Increment the counter 'count' as we visit a node.
        count++;
        // If the counter 'count' equals the target 'k', we've found the kth smallest value.
        if (count === k) {
            // Store the value of the current node in 'result'.
            result = node.val;
            // Return to stop further traversal.
            return;
        }
        // Recursively traverse the right subtree.
        inorderTraversal(node.right);
    };
    
    // Start the inorder traversal from the root node.
    inorderTraversal(root);
    // Return the 'result' which will hold the kth smallest value.
    return result;
};